/**
 * render-check.mjs — verifies every card in ds-bundle/ actually paints.
 *
 * Two gates:
 *   1. Static: nothing under ds-bundle/ may reference an external host. A card
 *      that fetches from a CDN renders blank wherever that host is blocked.
 *   2. Runtime: each card is served over localhost and loaded in headless
 *      Chrome. The post-JS DOM must carry real content, and the UI kit cards
 *      must have mounted React into #root. A screenshot is written to
 *      .render-check/ for visual review.
 */

import { readFile, readdir, writeFile, mkdir, rm, stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';

const exec = promisify(execFile);
const ROOT = import.meta.dirname;
const OUT = path.join(ROOT, 'ds-bundle');
const SHOTS = path.join(ROOT, '.render-check');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const MIME = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
  '.json': 'application/json', '.jsx': 'text/plain', '.md': 'text/markdown',
};

/* ------------------------------------------------------- gate 1: static scan */
async function walk(dir, acc = []) {
  for (const e of await readdir(path.join(OUT, dir), { withFileTypes: true })) {
    const rel = dir ? `${dir}/${e.name}` : e.name;
    if (e.isDirectory()) await walk(rel, acc);
    else acc.push(rel);
  }
  return acc;
}

/**
 * Flag every absolute URL in the staged output, whatever syntax it uses.
 * An earlier version only matched src=/href= in markup and missed six
 * picsum.photos URLs that were `src:` props inside the compiled bundle, so
 * this deliberately matches any http(s) URL and allowlists by host instead.
 */
async function staticScan(files) {
  // Hosts that are identifiers or error-message text, never fetched.
  const INERT_HOSTS = [
    'www.w3.org',      // XML/SVG namespace URIs
    'reactjs.org',     // React error-decoder text in the vendored UMD builds
    'react.dev',
    'fb.me',
    'github.com',
  ];
  // Prose is allowed to cite a URL; only executable/renderable files matter.
  const PROSE = [/^README\.md$/, /^_adherence\.oxlintrc\.json$/, /^_ds_sync\.json$/];

  const problems = [];
  for (const f of files) {
    if (PROSE.some((re) => re.test(f))) continue;
    const text = await readFile(path.join(OUT, f), 'utf8').catch(() => '');
    for (const m of text.matchAll(/https?:\/\/[^\s"'`)\\<>]+/gi)) {
      const url = m[0];
      let host = '';
      try { host = new URL(url).hostname; } catch { continue; }
      if (INERT_HOSTS.includes(host)) continue;
      problems.push(`${f}: ${url}`);
    }
  }
  return [...new Set(problems)];
}

/* ------------------------------------------------------ gate 2: real renders */
function serve() {
  const server = createServer(async (req, res) => {
    const rel = decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '');
    const file = path.join(OUT, rel);
    if (!file.startsWith(OUT)) return res.writeHead(403).end();
    try {
      const body = await readFile(file);
      res.writeHead(200, { 'content-type': MIME[path.extname(file)] || 'application/octet-stream' });
      res.end(body);
    } catch {
      res.writeHead(404).end('not found');
    }
  });
  return new Promise((ok) => server.listen(0, '127.0.0.1', () => ok(server)));
}

async function main() {
  const files = await walk('');
  const problems = await staticScan(files);

  const manifest = JSON.parse(await readFile(path.join(OUT, '_ds_manifest.json'), 'utf8'));
  await rm(SHOTS, { recursive: true, force: true });
  await mkdir(SHOTS, { recursive: true });

  const server = await serve();
  const port = server.address().port;
  const results = [];

  for (const card of manifest.cards) {
    const w = card.viewport?.width ?? 900;
    const h = card.viewport?.height ?? 700;
    const url = `http://127.0.0.1:${port}/${card.path}`;
    const shot = path.join(SHOTS, card.path.replace(/[\/]/g, '__').replace(/\.html$/, '.png'));

    let dom = '';
    try {
      const { stdout } = await exec(CHROME, [
        '--headless', '--disable-gpu', '--no-sandbox', '--hide-scrollbars',
        '--virtual-time-budget=4000', `--window-size=${w},${h}`, '--dump-dom', url,
      ], { maxBuffer: 64 * 1024 * 1024 });
      dom = stdout;
    } catch (e) {
      results.push({ card: card.path, ok: false, why: `dump-dom failed: ${e.message.slice(0, 120)}` });
      continue;
    }

    await exec(CHROME, [
      '--headless', '--disable-gpu', '--no-sandbox', '--hide-scrollbars',
      '--virtual-time-budget=4000', `--window-size=${w},${h}`,
      `--screenshot=${shot}`, url,
    ], { maxBuffer: 64 * 1024 * 1024 }).catch(() => {});

    const bodyText = (dom.match(/<body[\s\S]*<\/body>/) || [''])[0];
    const size = await stat(shot).then((s) => s.size).catch(() => 0);
    const isKit = card.path.startsWith('ui_kits/');
    const rootFilled = !/<div id="root">\s*<\/div>/.test(bodyText);

    // Several colour cards are legitimately tiny (three swatches and a label),
    // so the screenshot is the real signal; body length only catches an empty
    // document. A blank 900x700 PNG is well under 3 KB.
    const why = [];
    if (bodyText.length < 120) why.push(`body only ${bodyText.length} chars`);
    if (size < 3000) why.push(`screenshot ${size}B looks blank`);
    if (isKit && !rootFilled) why.push('React did not mount into #root');

    results.push({ card: card.path, ok: why.length === 0, why: why.join('; '), bytes: size });
  }

  server.close();

  console.log('\n=== external-host scan ===');
  console.log(problems.length ? problems.map((p) => `  FAIL ${p}`).join('\n') : '  clean — no external references');

  console.log('\n=== card renders ===');
  for (const r of results) {
    console.log(`  ${r.ok ? 'ok  ' : 'FAIL'} ${r.card}${r.ok ? ` (${r.bytes}B)` : ` — ${r.why}`}`);
  }

  const bad = results.filter((r) => !r.ok);
  console.log(`\n${results.length - bad.length}/${results.length} cards render; ${problems.length} external refs`);
  await writeFile(path.join(SHOTS, 'report.json'), JSON.stringify({ problems, results }, null, 2));
  if (bad.length || problems.length) process.exitCode = 1;
}

await main();
