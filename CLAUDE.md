# Denomination Compass

Astro 7 + Svelte 5 + Tailwind 4 static site. A 24-question theology quiz matches users against 18 Christian traditions, with profile pages, a doctrine comparison and an ecumenical-councils page. No backend; state lives in `localStorage`.

This file is the **schema** of the project wiki (Karpathy-style LLM wiki). Knowledge lives in `.claude/project-info/`:

- `raw/` — immutable source material (research dumps, design references). Never edit; add new files instead.
- `wiki/` — curated, interlinked pages synthesised from `raw/` and the code. Keep them current.
- `index.md` — catalog of every wiki page, one line each.
- `log.md` — append-only, dated record of changes and decisions.

## Routing table — read this first, then only what the task needs

| If the task is about… | Read | Then edit |
|---|---|---|
| What the app is, pages, commands | `.claude/project-info/wiki/overview.md` | — |
| Where code lives, data flow | `.claude/project-info/wiki/architecture.md` | — |
| A tradition's position on a question / "X is wrong about Y" | `wiki/research/doctrine-matrix.md` → cell notes in `raw/research-matrix.md` | `src/data/stances.ts` |
| Adding/removing/rewording a quiz question | `wiki/scoring.md`, `wiki/research/doctrine-matrix.md` | `src/data/questions.ts` + every row in `src/data/stances.ts` |
| Match %, weights, compass axes | `wiki/scoring.md` | `src/lib/scoring.ts`, `weight`/`axes` in `questions.ts` |
| Denomination profile text, adherents, founders, texts | `wiki/research/denominations.md` | `src/data/profiles.ts` |
| Which councils a tradition accepts | `wiki/research/councils.md` | `councils` + `councilsNote` in `src/data/profiles.ts` |
| Council descriptions, schism timeline | `wiki/research/councils.md` | `src/data/councils.ts` |
| Doctrine explainers (/doctrines) | `wiki/research/doctrine-matrix.md` | `src/data/topics.ts` |
| Adding a new denomination | `wiki/playbooks.md#add-a-denomination` | profiles, stances, icons |
| Colours, fonts, icons, UI patterns | `wiki/design.md` | `src/styles/global.css`, `src/data/icons.ts` |
| localStorage keys, share links | `wiki/architecture.md#state` | `src/lib/storage.ts` |
| Why something is the way it is | `.claude/project-info/log.md`, `wiki/decisions.md` | — |

(Paths under `wiki/` and `raw/` are relative to `.claude/project-info/`.)

## Commands

```bash
npm run dev        # dev server
npm run preview    # production build + serve (astro build && astro preview)
npm run validate   # data sanity: every tradition must rank itself #1 on its own answers
npm run check      # astro/TS type check
```

## Rules

- **Run `npm run validate` after any change to `stances.ts`, `questions.ts` or `scoring.ts`.** It must print `ok` for all 18.
- Stance scores use only 0 / 0.25 / 0.5 / 0.75 / 1 (meanings in `wiki/research/doctrine-matrix.md`). Omit zero options.
- Keep page copy short — profile pages are "at a glance", not essays.
- Doctrinal claims need a source: add it to `raw/` (new file) and cite it from the relevant wiki page.
- After meaningful work: append a dated entry to `log.md`; update `index.md` if you add a wiki page.
