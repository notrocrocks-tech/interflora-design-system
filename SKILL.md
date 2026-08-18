---
name: interflora-design
description: Use this skill to generate well-branded interfaces and assets for the Interflora group (Interflora + Flying Flowers sister brand), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colour tokens, Arial type scale, combination rules, assets, and UI kit components for prototyping flower-delivery e-commerce and related product surfaces.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (screens, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, read the rules here to become an expert in designing with this brand.

Key constraints to remember:
- Font: **Söhne** (Klim Type Foundry) is the brand typeface — Söhne Leicht 300 + Söhne Kräftig 500. **Digital substitute: Arial** (user-specified). Stack in CSS: `'Sohne', 'Gotham', Arial, sans-serif`. Drop Söhne .woff2 files in /fonts to activate the real brand font.
- Interflora primary: PURPLE #9B00FE with WHITE text. All other Interflora backgrounds default to BLACK text, except Black #000 and Dark Grey #4F4F4F which use WHITE text.
- Flying Flowers: always white text on every background — no exceptions.
- Buttons: pill-shaped, Bold Arial, UPPERCASE, letter-spaced.
- Colour swatches in `colors_and_type.css`: use `.bg-*` utility classes for pre-wired background+text colour pairs.
- Icons: use inline SVG from `ui_kits/icons.jsx` (Material-style, no webfont ligatures needed).

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts OR production code, depending on the need.
