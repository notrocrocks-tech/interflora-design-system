# Setup — Importing this design system into Claude Design

This repository is a complete Claude Design design system package for the Interflora group (Interflora + Flying Flowers). It was exported from Claude Design and version-controlled here so it can be re-imported and refined over time.

## What drives output

- `colors_and_type.css` — the source of truth. All colour, type, spacing, radius, elevation, easing and duration tokens, plus the `--on-*` default-text rules and `.bg-*` combination utilities. Brand face is Arial (system font, no downloads).
- `_ds_manifest.json` — the design system manifest (tokens, preview cards, `.brand-ff` theme scope).
- `_adherence.oxlintrc.json` — lint rules that flag raw hex and raw px, keeping output on-token.
- `preview/` — specimen cards shown in the Design System tab (palettes, combinations, type, components).
- `ui_kits/` — two demo HTML apps (business-crm, interflora-shop). Template scaffolding in brand colours, not live Interflora product surfaces.

## Font

Arial is the digital brand face: a system font, so there are no files to download and every user sees the same type. Soehne (Klim) remains the print / brand-book typeface and is intentionally not used on screen. If that decision is ever reversed, add `@font-face` rules and put `'Sohne'` ahead of Arial in `--font-brand`.

## Before you push

Reference screenshots in `uploads/` are excluded via `.gitignore`; `uploads/interflora-brand-book.pdf` is kept.

## Import into Claude Design

1. Push this repo to GitHub.
2. Connect it in Claude Design, either:
   - Browser: claude.ai/design -> Set up design system -> point it at this repo; or
   - Claude Code: add the connector, then run `/design-sync` against this repo.
     `claude mcp add --scope user --transport http claude-design https://api.anthropic.com/v1/design/mcp`
3. Create a throwaway test project and confirm output uses purple `#9B00FE` with white text, pill buttons, and the correct background-to-text pairings.

## Known gaps

- **Logos.** Official Interflora and Flying Flowers wordmarks are not included. Add SVGs to `assets/` and reference them in the UI kits.
- **Components.** The manifest registers no reusable components or templates. The tokens and combination rules are the reliable, authoritative part; the UI kits are demo layouts.
- **Brand voice.** Copy in the kits is inferred filler. Confirm against live Interflora / Flying Flowers content.
