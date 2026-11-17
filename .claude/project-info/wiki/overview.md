# Overview

**Denomination Compass** - short theology quiz → % match with 18 Christian traditions, optional AI reading of the user's own words, plus a small data bank (traditions, doctrines, councils, creeds).

## Pages
All pages exist twice, under `/en` and `/pl` (`src/pages/[lang]/...`); see [[i18n]]. `/` only picks the language ([[deploy]]).

| Route (after `/{lang}`) | File | What |
|---|---|---|
| `` (home) | `[lang]/index.astro` | **The quiz.** Pre-paint script redirects to results when a finished result exists and no quiz is in progress. No landing page [user]. |
| `/quiz` | `quiz.astro` → `Quiz.svelte` | Same quiz, never redirects (used by Retake). 26 questions, one per screen; info popover; ⓘ tooltips ending with the technical term "(soul sleep)"; "Not sure"; optional note; keys Y/N, 1-6, S, ←. |
| `/results` | `results.astro` → `Results.svelte` | Small traditional-progressive bar (marriage, abortion, women's ordination; `progressiveScore`), hero match + donut, #2/#3, ranked bars, **AI reading** ([[ai]]), compass chart, share link `#a=`. |
| `/denominations/[id]` | `denominations/[id].astro` | Profile: notice callout, council tiles (link to council pages), doctrines, positions, relatives. No index page [user]. |
| `/doctrines` | `doctrines.astro` | Per topic: explainer + who holds each answer; sticky, horizontally scrollable topic bar. |
| `/councils`, `/councils/[slug]` | `councils/*.astro` | Acceptance grid, 21 councils, schism timeline; detail page per council with glossary tooltips, facts, figures, "why it matters today". |
| `/creeds`, `/creeds/[id]` | `creeds/*.astro` | Apostles', Nicene, Athanasian, Chalcedonian - annotated text; who confesses each; later confessions. See [[research/creeds]]. |
| `/privacy`, `/terms` | `privacy.astro`, `terms.astro` → `LegalPage.astro` | Legal docs, Polish prevails ([[seo-legal]]). |
| `/api/analyze` | `pages/api/analyze.ts` | Server route (only non-static route). |

## Traditions (18)
Catholic · Eastern Orthodox · Oriental Orthodox · Assyrian Church of the East · Anglican · Lutheran · Reformed · Methodist · Baptist · Pentecostal · Non-denominational · Anabaptist · Quaker · Churches of Christ · Seventh-day Adventist · Latter-day Saints · Jehovah's Witnesses · Oneness Pentecostal.
JW, LDS and Oneness carry a "Outside historic Nicene Christianity" notice; Adventists an info notice (Trinitarian, debated) - see [[decisions]] D10.

## Stack
Astro 7 (static + one server route), Svelte 5 islands (runes), Tailwind 4 (`@tailwindcss/vite`), `@astrojs/node` locally / `@astrojs/vercel` on Vercel ([[deploy]]), self-hosted Fontsource variable fonts (Fraunces + Inter), Lingui v6 ([[i18n]]). Dev: `tsx` (`scripts/validate.ts`), `@astrojs/check`.

See [[architecture]], [[scoring]], [[design]], [[ai]], [[deploy]].
