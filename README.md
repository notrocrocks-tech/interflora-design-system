# Interflora Group — Design System

A multi-brand design system for two sister florist / flower-delivery brands:

- **Interflora** — the flagship brand. Vivid, playful, premium. Built on a wide, saturated colour palette led by **PURPLE `#9B00FE`**, with a curated **GOLD** premium accent.
- **Flying Flowers** — the sister brand. Friendly and bright, built on **COBALT / JADE / WILD EXOTIC** headings over **LAZY LIME / PLUSH BLUSH / SHARP YELLOW** backgrounds. **Always uses white text.**

Brand typeface for both: **Arial** (specified for digital use — see Font section below).

---

## What this is

A token-first brand system: a tightly-controlled colour language (with explicit background↔text *combination* rules), an Arial type scale, and a set of mobile app/e-commerce UI kits that apply the brand to real screens. The UI layouts were reconstructed from an exported set of mobile app screenshots (`uploads/`); the **brand colour + font system here is the source of truth** and overrides any colour seen in those reference shots.

The two brands share structure, spacing, type scale, and iconography — they diverge only in palette and a couple of rules (notably: Flying Flowers is always white-on-colour).

---

## Sources

- **Brand colour spec** (provided by the brand team) — the authoritative palette for both brands, the per-background **default text colour** rules, the background+font **combination** pairings, and a **name-change migration map** (old named colours → new). All transcribed verbatim into `colors_and_type.css`.
- **Brand book PDF** (`uploads/interflora-brand-book.pdf`, Jan 2024) — confirmed the brand typography, CMYK colour specs, and page format (840×470pt landscape). Key findings:
  - **Real brand typeface = Söhne** (Klim Type Foundry) — two weights: **Söhne Leicht 300** (editorial/body) and **Söhne Kräftig 500** (headings/UI). Gotham also appears alongside it.
  - **Interflora Rich Black** = CMYK C75 M68 Y67 K95 (→ `#0A0806` on screen, essentially black)
  - **Interflora Gold** = CMYK C23 M29 Y78 K0 (→ `#C4B538` print equiv; `#CAAD59` is the specified screen value)
- **Digital font (user-specified): Arial** (system font, no files needed). `colors_and_type.css` has the Söhne + Gotham + Arial stack — drop real `.woff2` files into `/fonts` and the kit auto-upgrades.
- **`uploads/`** — ≈90 mobile app screenshots (light + dark pairs) used only as **layout / component structure** reference. Their original colours (a Material-blue template) are **not** part of this brand and were discarded.

> If a Figma library or repo exists for either brand, attach it via the Import menu so components can be matched exactly.

---

## Colour system (the heart of this kit)

### Interflora palette
Full colour + its two tints (MID / LIGHT) where defined:

| Family | Full | Mid | Light |
|---|---|---|---|
| Purple | `#9B00FE` | `#C366FF` | `#E9CBFF` (Lilac) |
| Red | `#FF0050` | `#FF98B8` | `#FFCBDB` (Pink) |
| Green | `#04FF7E` | `#82FFC0` | `#CBFFE4` |
| Yellow | `#FEDC00` | `#FFF098` | `#FFF7CB` |
| Orange | `#FF842B` | `#FF9C55` | `#FECCA7` (Peach) |
| Gold (accent) | `#CAAD59` | — | — |
| Neutrals | Black `#000` · Dark grey `#4F4F4F` · Mid grey `#BDBDBD` · Light grey `#F6F6F6` · White `#FFF` | | |

### Flying Flowers palette
- **Backgrounds:** Black `#000` · Dark grey `#6D6D6D` · Lazy Lime `#BDD245` · Light grey `#F6F6F6` · Plush Blush `#F7C2CE` · Sharp Yellow `#FEC800` · White `#FFF`
- **Headings:** Cobalt `#007FA3` · Jade `#048670` · Wild Exotic `#E01761`

### Combination rules (background → default text)
When a component has text but no explicit colour pairing, the text colour defaults by background. Interflora: **white text only on Purple, Black and Dark grey** — *every other Interflora background uses black text.* These are encoded both as `--on-*` variables and as `.bg-*` combination utility classes (e.g. `.bg-purple` already sets white text). **Flying Flowers: always white text.**

### Name-change migration map (old → new)
For migrating legacy components off the old named palette:

| Old | New |
|---|---|
| `#97203B` Deep Rose | `#C366FF` Mid Purple |
| `#5F588F` Wild Lavender | `#FF98B8` Mid Red |
| `#006B5F` Aspidistra | `#CBFFE4` Light Green |
| `#067399` Monarch Blue | `#FFF7CB` Light Yellow |
| `#86A33F` Leaf Green | `#FF842B` Orange |
| `#FDB813` Sunset | `#FF9C55` Mid Orange |
| `#82FFC0` Light Green | `#82FFC0` Mid Green |
| `#FFF098` Light Yellow | `#FFF098` Mid Yellow |

---

## CONTENT FUNDAMENTALS

> The reference screenshots are a generic template (Lorem-ipsum filler), so brand voice below is the **system intent** — confirm against live Interflora / Flying Flowers copy.

- **Voice.** Warm, human, gift-occasion led. Second person, encouraging and celebratory ("Send a smile", "Order by 3pm for next-day delivery"). Florist-retail, not corporate.
- **Casing.** Sentence case for headings and body. Reserve UPPERCASE for short overlines/labels and primary button text. Avoid ALL-CAPS paragraphs.
- **Tone by brand.** Interflora = premium, expressive, occasion-driven (anniversaries, sympathy, luxury bouquets — the GOLD accent signals premium ranges). Flying Flowers = bright, value-friendly, letterbox-flowers cheer.
- **Numbers / pricing.** Lead with clear prices and delivery promises; keep delivery cut-off and date messaging prominent (occasion commerce).
- **No emoji** in product chrome. Personality comes from **colour blocking** and photography, not glyphs.

---

## VISUAL FOUNDATIONS

**Overall idiom.** Bold, confident **colour-blocking**. Large flat fields of saturated brand colour paired with generous white space and full-bleed flower photography. The system's signature move is pairing a vivid background with its mandated text colour (the combination rules) — sections feel like stacked colour panels.

**Colour usage.**
- Interflora leads with **Purple `#9B00FE`** (primary actions, brand moments) and uses the wider palette (pink, green, yellow, orange + tints) for category coding, seasonal ranges, and panel variety. **GOLD `#CAAD59`** marks premium / luxury ranges only — used sparingly.
- Tints (MID / LIGHT) are for softer backgrounds, hover fills, and large calm areas; full colours are for emphasis, buttons, and small accents.
- Flying Flowers blocks Cobalt / Jade / Wild Exotic headings on Lime / Blush / Yellow / grey grounds, **always white text**.

**Typography.** **Arial** everywhere. Only Regular (400) and Bold (700) — there is no light/medium weight, so hierarchy comes from **size and weight contrast**, not thin weights. Headings are Bold; body is Regular. Tight negative tracking on large display sizes.

**Spacing & grid.** 4px base unit; common rhythm 8 / 16 / 24. Roomy padding inside colour panels so the colour can breathe.

**Backgrounds.** Solid brand colour fields and full-bleed **flower / bouquet photography** — warm, bright, natural light, richly coloured (the product is colour). No gradients, no textures, no synthetic patterns.

**Cards & radii.** Rounded, friendly corners — 8px (controls), 16px (cards), 24px (feature tiles/sheets); pills for chips, avatars, and primary buttons. Cards are white with a soft `--e-2` shadow or a hairline `#E6E6E6` border.

**Elevation.** Soft, low ambient shadows (`--e-1`…`--e-4`). No neumorphism, no inner shadows.

**Buttons.** Primary = Purple (Interflora) / Cobalt (Flying Flowers), pill-shaped, bold Arial, white text. Secondary = outline or light-grey fill. Press = slight darken + shrink.

**Motion.** Standard ease `cubic-bezier(.4,0,.2,1)`, 120–320ms. Tasteful fades and slides; no bounce or decorative loops.

**Transparency / blur.** Only modal/drawer scrims (`rgba(0,0,0,.5)`). No glassmorphism.

---

## ICONOGRAPHY

- **Line + filled UI icons in the Material idiom**, supplied here as **inline SVG paths** (`ui_kits/icons.jsx`) so they render crisply in any capture, PDF, or offline context — never as a ligature webfont. Default icon ink is **black** (Interflora) / black (Flying Flowers); icons may take a brand colour for active/emphasis states.
- Standard touch icon 24px; minimum 44px tap target. Icons used across the kits: menu, back, more, search, filter, favourite (heart), cart, basket, home, calendar, chevrons, check, add, close, person, help.
- **Brand logos** (Interflora, Flying Flowers wordmarks) are not included in `uploads/` — drop official SVG logos into `assets/` and reference them in the UI kits.
- **No emoji, no Unicode-glyph icons.** Personality is carried by colour + photography.

---

## Index — what's in this folder

| Path | What it is |
|---|---|
| `README.md` | This file — brands, colour system, content/visual/icon guides, manifest. |
| `colors_and_type.css` | All tokens: Interflora + Flying Flowers palettes, `--on-*` default-text rules, `.bg-*` combination utilities, Arial type scale, radius/elevation/spacing. |
| `SKILL.md` | Agent-Skill manifest. |
| `preview/` | Specimen cards for the Design System tab (palettes, combinations, type, components). |
| `assets/` | Brand imagery + logos (add official logos here). |
| `ui_kits/icons.jsx` | Shared inline-SVG Material-style icon set. |
| `ui_kits/business-crm/` | UI kit — app screens (dashboard, clients, chat, task) in Interflora brand. `index.html` is interactive. |
| `ui_kits/interflora-shop/` | UI kit — Interflora flower storefront (shop, product, cart). `index.html` is interactive. |
| `uploads/` | Original reference screenshots (layout only). |

### Caveats
- **Brand voice / copy** is inferred — confirm against live Interflora / Flying Flowers content.
- **Logos not provided** — placeholders are used in the UI kits until official SVGs are dropped into `assets/`.
- UI **layouts** come from a generic mobile template; **colour + font** follow the brand spec, which is authoritative.
