# Architecture

## File map
```
src/
  data/
    types.ts          Question (explain, option detail), Denomination (notice), Council, Stance, Answers, Notes
    questions.ts      26 questions: id, topic, kind (yesno|choice), text, hint, explain, weight, options (label, short, detail, axes)
    stances.ts        denom → question → option → 0..1 (generated from raw/research-matrix.md, then hand-maintained)
    profiles.ts       18 profiles (+ optional notice)
    denominations.ts  profiles + stances merged; denominationById; families
    topics.ts         15 doctrine topics for /doctrines
    councils.ts       21 councils + schisms timeline
    creeds.ts         4 annotated creeds + 15 confessions
    icons.ts          SVG symbol per tradition (shared by Astro + Svelte)
  lib/
    scoring.ts        scoreDenomination, rankAll, compass*, idealAnswers, dominantStance
    storage.ts        localStorage wrapper, share codes, notes, AI cache, updateLatest
    ai.ts             buildPrompt, extractJson, sanitize, DEFAULT_MODELS (no secrets - imported by server + validate)
  components/
    Quiz, Results, AiReading, CompassChart, Donut, Badge (.svelte) · Tip (tooltip), Popover (.svelte)
    Badge.astro, CreedText.astro (annotated creed + positioned tooltip)
  layouts/Base.astro  nav, theme toggle, `head` slot
  pages/              see [[overview]]; api/analyze.ts is the only server route
scripts/validate.ts   data + AI-parser sanity (npm run validate)
astro.config.mjs      adapter switch (Vercel/Node), env schema
vercel.json           see [[deploy]]
```

## Data flow
`profiles.ts` + `stances.ts` → `denominations.ts` → props into Svelte islands (`client:load` quiz, `client:only` results) and build-time Astro pages. Council acceptance derived from `profiles › councils`. AI: client → `/api/analyze` → OpenRouter → sanitised JSON → client cache ([[ai]]).

## State
All in `localStorage` (try/catch wrapped; app works without it):
| Key | Shape | Written by |
|---|---|---|
| `dc:progress:v1` | `{ answers, index, updatedAt }` | Quiz each answer; cleared on finish/restart |
| `dc:history:v1` | `HistoryEntry[]` (≤10, newest first) | Quiz finish; "Save to my history"; AI "Use …" (`updateLatest`) |
| `dc:notes:v1` | `{ [questionId]: text, _general: text }` | Quiz note box; results AI section |
| `dc:ai:v1` | `{ key, result, model, at }` | AI reading |
| `dc:theme` | `'dark' \| 'light'` | Header toggle |

Share link `/results#a=<code>`: one char per question = option index, `_` = skipped. Changing question order/option order invalidates old links.
