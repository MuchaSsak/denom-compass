# Log

Append-only. Newest at the bottom. Format: `## YYYY-MM-DD — title` then bullets.

## 2026-11-17 — Initial build
- Scaffolded Astro 7 (minimal) + Svelte 5 + Tailwind 4. `preview` script = `astro build && astro preview`.
- Research agent compiled sourced matrix (18 traditions × 24 questions), adherents, councils → `raw/research-matrix.md`.
- Generated `src/data/stances.ts` from the matrix JSON (snake_case ids mapped to app ids — see [[doctrine-matrix]]).
- Scoring: weighted agreement, per-question normalised by `max(top, 0.75)` — see [[scoring]] / [[decisions]].
- `npm run validate`: all 18 traditions rank themselves #1 (closest pair: Baptist ↔ Non-denominational, 97/95).
- Pages: `/`, `/quiz`, `/results`, `/denominations`, `/denominations/[id]`, `/doctrines`, `/councils`.
- Hand-drawn SVG symbol per tradition in `src/data/icons.ts`.
- Visual QA with headless Chrome (desktop 1280 + mobile 390 dark). Fixed: unlayered `.btn` overriding Tailwind `hidden`; donut `%` wrap; compass badge overlap (repulsion); mobile nav overflow.
- Astro 7 tracks preview servers; a stale one blocks a new `astro preview`. `preview` script now uses `astro preview --force`.
- Wiki set up: `CLAUDE.md` (schema + routing table), `index.md`, `log.md`, `raw/` (research matrix, Mobbin refs), `wiki/` (overview, architecture, scoring, design, decisions, playbooks, research/*).

## [2026-11-17] ui | Less text: quiz info icon top-right (popover), no hints/shortcut/skip captions, "Not sure" + "Add a note", next/restart icons in top bar; footer removed; mobile nav -> menu; page intros trimmed; README in Learning Gems style
## [2026-11-17] ai | Note replies: AI answers each note ("Your notes, answered"); legacy cached readings auto-marked stale; validate checks replies sanitising
## [2026-11-17] councils | Detail page per council at /councils/<slug> (facts, issue, decided, afterwards, received/not received, prev/next); list, overview table and profile tiles link to it. Detail facts pending research (raw/council-details.md)
## [2026-11-17] i18n/seo/legal | Polish UI catalog; privacy + terms (PL prevails) with explicit AI consent (client + server); footer; sitemap with hreflang, robots.txt, JSON-LD, OG images; sticker-style badges; neutrality fixes (naming, families Anglican + Historic peace churches); em dashes removed; Congregationalists added then removed at user request
