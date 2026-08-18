# design-sync notes — Interflora Test Design System

## Re-sync risks / repo-specific decisions

- **`projectId` was stale as of 2026-08-18.** The config previously pointed at
  `2711dbcf-b4bc-495c-a6f4-82614f26670c` ("Interflora Group Design System"),
  which had been deleted. Re-adopted the project this repo was originally
  exported from instead: `82e1d892-8781-47fc-9961-d26b15307a60`
  ("Interflora Test Design System"). Config corrected.

- **Keep `SKILL.md` and `.thumbnail` in the remote project — do not delete on
  future syncs.** Neither is produced by `build.mjs` (`SKILL.md` is a Claude
  Code skill definition for a different workflow; `.thumbnail` is the
  project's cover image), so a naive "delete anything `list_files` shows that
  the local build doesn't produce" pass would remove them. The user explicitly
  chose to keep both when re-adopting this project (2026-08-18). Any future
  reconciliation-delete pass must exclude these two paths.

- **Deleted on the 2026-08-18 sync** (remote-only, not produced by
  `build.mjs`, user confirmed): 6 preview cards (`brand-logo.html`,
  `brand-voice.html`, `button-shadows.html`, `component-catalogue.html`,
  `type-scale.html`, `validation-colours.html`) and the entire `uploads/`
  folder (~100 reference screenshots/docs). If these were wanted back, they'd
  need to be re-added as source material and wired into `build.mjs` — they
  are not recoverable from this repo as-is.

- **Shape is `export`, not `package`/`storybook`.** `build.mjs` is a
  hand-written, repo-specific converter (see its header comment) — the
  generic `/design-sync` package-build.mjs pipeline does not apply here. No
  `_ds_sync.json`-based diffing tool exists for this shape beyond the sidecar
  `build.mjs` writes itself; a future sync should re-run `npm run check`,
  review `DesignSync(list_files)` against `ds-bundle/`'s contents for
  anything new/removed, and apply the same keep-list above.
