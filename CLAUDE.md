# Denomination Compass

Astro 7 + Svelte 5 + Tailwind 4 site in English and Polish (`/en/...`, `/pl/...`), live at https://denoms.muszarski.com. A 26-question theology quiz matches users against 18 Christian traditions, with profile pages, a doctrine comparison, council and creed pages, and an optional AI reading. Pages are static; the only server code is `/api/analyze` (Vercel function). User state lives in `localStorage`.

This file is the **schema** of the project wiki (Karpathy-style LLM wiki). Knowledge lives in `.claude/project-info/`:

- `raw/` - immutable source material (research dumps, design references). Never edit; add new files instead.
- `wiki/` - curated, interlinked pages synthesised from `raw/` and the code. Keep them current.
- `index.md` - catalog of every wiki page, one line each.
- `log.md` - append-only, dated record of changes and decisions.

## Routing table - read this first, then only what the task needs

| If the task is about… | Read | Then edit |
|---|---|---|
| What the app is, pages, commands | `.claude/project-info/wiki/overview.md` | - |
| Where code lives, data flow | `.claude/project-info/wiki/architecture.md` | - |
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
| Council detail pages (facts, figures, why it matters) | `wiki/research/councils.md`, `raw/council-details.md` | `src/data/councilDetails.ts`, `src/data/councilMatters.ts`, `src/data/glossary.ts` |
| Creeds and confessions | `wiki/research/creeds.md` | `src/data/creeds.ts` |
| Any UI text, Polish translation, URLs per language | `wiki/i18n.md`, `wiki/i18n-glossary.md` | `t('…')` in code → `npm run i18n:extract` → `src/locales/pl.po`; data text → `src/data/pl/*.ts` |
| AI reading (prompt, model, consent, errors) | `wiki/ai.md` | `src/lib/ai.ts`, `src/pages/api/analyze.ts`, `src/components/AiReading.svelte` |
| Meta tags, sitemap, OG images, accessibility rules | `wiki/seo-legal.md` | `src/layouts/Base.astro`, `astro.config.mjs`, `scripts/og.ts` |
| Privacy policy, terms, consent | `wiki/seo-legal.md#legal` | `src/data/legal.ts` (bump `LEGAL_VERSION` on material changes) |
| Deploy, domain, redirects, headers | `wiki/deploy.md` | `astro.config.mjs`, `vercel.json` |
| Why something is the way it is | `.claude/project-info/log.md`, `wiki/decisions.md` | - |

(Paths under `wiki/` and `raw/` are relative to `.claude/project-info/`.)

## Commands

```bash
npm run dev        # dev server
npm run preview    # production build + serve (astro build && astro preview)
npm run validate   # data sanity: every tradition must rank itself #1 on its own answers
npm run check      # astro/TS type check
npm run i18n:extract  # update src/locales/*.po after adding t('…') strings
npm run og         # re-render public/og-{en,pl}.png
```

## Rules

- **Run `npm run validate` after any change to `stances.ts`, `questions.ts` or `scoring.ts`.** It must print `ok` for all 18.
- Stance scores use only 0 / 0.25 / 0.5 / 0.75 / 1 (meanings in `wiki/research/doctrine-matrix.md`). Omit zero options.
- Keep page copy short - profile pages are "at a glance", not essays.
- Every user-visible string ships in English and Polish. After UI text changes, `pl.po` must have 0 missing; data text needs its `src/data/pl/*.ts` entry.
- Never write the em dash character; use "-".
- Content stays neutral: describe each tradition as it describes itself; disagreements go in "How other churches see it" notices, never as verdicts.
- Doctrinal claims need a source: add it to `raw/` (new file) and cite it from the relevant wiki page.
- After meaningful work: append a dated entry to `log.md`; update `index.md` if you add a wiki page.
