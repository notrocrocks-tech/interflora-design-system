# Building with the Interflora group design system

Two sister brands share this system. **Interflora** is the default; **Flying Flowers** is a theme scope you opt into. There are no React components to import: the system is CSS custom properties plus utility classes, so you build your own markup and style it with the vocabulary below.

## Wrap everything in `.ds-scope`

`.ds-scope` sets `font-family: var(--font-brand)`, `color: var(--fg)` and `background: var(--bg)`. Without it you get the browser's Times New Roman on white, because nothing in this system styles bare `<body>`.

```html
<div class="ds-scope">…Interflora UI…</div>
<div class="ds-scope brand-ff">…Flying Flowers UI…</div>
```

`.brand-ff` rebinds the semantic tokens to the Flying Flowers palette (`--brand` becomes `--ff-cobalt`, `--brand-accent` becomes `--ff-wild-exotic`). It only affects tokens, so `.bg-*` utilities keep their Interflora colours inside it. Use `.ff-bg-*` for Flying Flowers surfaces.

Inside `.ds-scope`, `h1`–`h4`, `p`, `small` and `a` already carry the right type and colour. Don't restyle them unless you need a different level.

## Text colour is decided for you

Every background has one correct text colour, and getting this wrong is the most visible way to break the brand:

- **Interflora purple `#9B00FE` takes white text.** It is the primary brand colour.
- **Every other Interflora background takes black text**, except `--if-black` and `--if-dark-grey`, which take white.
- **Flying Flowers always takes white text**, on every background, with no exceptions.

Never hand-pick a text colour against these. Use a `.bg-*` class, which wires the background and its correct text colour together in one class, or read the matching `--on-*` token.

## The class vocabulary

**Backgrounds, Interflora** (`.bg-*`, each pairing its own text colour): `purple`, `mid-purple`, `lilac`, `red`, `mid-red`, `pink`, `green`, `mid-green`, `light-green`, `yellow`, `mid-yellow`, `light-yellow`, `orange`, `mid-orange`, `peach`, `gold`, `black`, `dark-grey`, `mid-grey`, `light-grey`, `white`.

**Backgrounds, Flying Flowers** (`.ff-bg-*`, all white text): `cobalt`, `jade`, `wild-exotic`, `lime`, `blush`, `yellow`, `black`.

**Type** (`.t-*`): `display`, `h1`, `h2`, `h3`, `h4`, `lead`, `body`, `body-bd`, `small`, `caption`, `overline`, `button`.

**Tokens for your own layout CSS:** `--brand`, `--on-brand`, `--brand-accent`, `--bg`, `--surface`, `--surface-alt`, `--fg`, `--fg-muted`, `--fg-faint`, `--line`, `--icon`; palettes `--if-*` and `--ff-*`; spacing `--s-1` to `--s-16` on a 4px grid; radii `--r-sm`, `--r-md`, `--r-lg`, `--r-xl`, `--r-pill`; elevation `--e-1` to `--e-4`; motion `--ease-standard`, `--dur-fast`, `--dur-base`, `--dur-slow`.

Use tokens rather than raw values. `_adherence.oxlintrc.json` flags raw hex and raw px.

## Type is Arial

`--font-brand` is `Arial, 'Helvetica Neue', sans-serif`: a system font, so there is nothing to load and no `@font-face` anywhere. Söhne (Klim) is the print typeface and is deliberately not used on screen. Weights available are 400 and 700 only, so never write 300, 500 or 600.

## Buttons are pills

Bold, uppercase, letter-spaced, fully rounded. This shape is a brand signature:

```html
<button class="t-button bg-purple"
        style="border:none; border-radius:var(--r-pill);
               padding:var(--s-4) var(--s-6); text-transform:uppercase; cursor:pointer;">
  Order now
</button>
```

Secondary is the same pill outlined in `--brand` with transparent background; disabled uses `.bg-mid-grey`.

## Where to look

- `styles.css` → `colors_and_type.css` is the source of truth. Read it before styling; every token and utility is defined there with the brand rules in comments.
- `preview/*.html` are the specimen cards, and the most useful reference: `preview/if-combinations.html` for the pairing rules, `preview/comp-buttons.html` and `preview/comp-cards.html` for component shapes, `preview/type-headings.html` and `preview/type-body.html` for the scale.
- `ui_kits/business-crm/` and `ui_kits/interflora-shop/` are working React examples of the idiom. `ui_kits/icons.jsx` holds Material-style inline SVG paths; use inline SVG for icons, never an icon webfont.

Image placeholders in the kits come from `IF_BOUQUET(seed, w, h)` and `IF_AVATAR(seed)` in `_vendor/ds-placeholders.js`, which return on-token SVG data URIs. Use them, or your own local SVG, rather than any remote image host.
