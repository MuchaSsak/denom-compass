# Overview

**Denomination Compass** — short theology quiz → % match with 18 Christian traditions, optional AI reading of the user's own words, plus a small data bank (traditions, doctrines, councils, creeds).

## Pages
| Route | File | What |
|---|---|---|
| `/` | `src/pages/index.astro` | **The quiz.** Pre-paint script redirects to `/results` when a finished result exists and no quiz is in progress. No landing page [user]. |
| `/quiz` | `quiz.astro` → `Quiz.svelte` | Same quiz, never redirects (used by Retake). One question/screen; Yes/No tiles or lettered cards; "What does this mean?" popover; ⓘ tooltips on answers; prominent "I'm not sure — skip"; optional "Add your own words" note; keys Y/N, 1–6, S, ←. |
| `/results` | `results.astro` → `Results.svelte` | Hero match + donut (+ disclosure notice if non-Nicene), #2/#3, ranked bars with ✓/~/✕ breakdown, **AI reading** ([[ai]]), compass chart, share link `#a=`. |
| `/denominations`, `/denominations/[id]` | `denominations/*.astro` | Family-grouped list ("Non-Nicene" chip); profile with notice callout, councils tiles, doctrines, positions, relatives. |
| `/doctrines` | `doctrines.astro` | Per topic: explainer + who holds each answer. |
| `/councils` | `councils.astro` | Acceptance grid, 21 councils, schism timeline. |
| `/creeds`, `/creeds/[id]` | `creeds/*.astro` | Apostles', Nicene, Athanasian, Chalcedonian — annotated text with phrase tooltips; who confesses each; 15 later confessions. See [[research/creeds]]. |
| `/api/analyze` | `pages/api/analyze.ts` | Server route (only non-static route). |

## Traditions (18)
Catholic · Eastern Orthodox · Oriental Orthodox · Assyrian Church of the East · Anglican · Lutheran · Reformed · Methodist · Baptist · Pentecostal · Non-denominational · Anabaptist · Quaker · Churches of Christ · Seventh-day Adventist · Latter-day Saints · Jehovah's Witnesses · Oneness Pentecostal.
JW, LDS and Oneness carry a "Outside historic Nicene Christianity" notice; Adventists an info notice (Trinitarian, debated) — see [[decisions]] D10.

## Stack
Astro 7 (static + one server route), Svelte 5 islands (runes), Tailwind 4 (`@tailwindcss/vite`), `@astrojs/node` locally / `@astrojs/vercel` on Vercel ([[deploy]]), Google Fonts (Fraunces + Inter). Dev: `tsx` (`scripts/validate.ts`), `@astrojs/check`.

See [[architecture]], [[scoring]], [[design]], [[ai]], [[deploy]].
