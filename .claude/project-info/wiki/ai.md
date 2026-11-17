# AI reading

Optional free-text → AI analysis on `/results`. Code: `src/lib/ai.ts` (prompt, JSON extraction, sanitising), `src/pages/api/analyze.ts` (server route, `prerender = false`), `src/components/AiReading.svelte` (UI).

## Flow
1. User writes notes per question (quiz: "Add your own words") and/or a general description (results page). Stored in `localStorage` `dc:notes:v1` (`{ [questionId]: text, _general: text }`), editable any time on the results page.
2. "Get my AI reading" → `POST /api/analyze` `{ answers, notes }`.
3. Server sanitises input (known ids, `NOTE_MAX` 600 / `GENERAL_MAX` 2000 chars), builds the prompt (all 18 traditions' doctrines + dominant position per question, the user's answers + words, algorithmic ranking), calls OpenRouter.
4. Reply JSON → `extractJson` (handles ``` fences / prose) → `sanitize` (drops unknown tradition/question ids, invalid option ids → null, clamps fit 0–100, caps list lengths). Throws if no summary/matches.
5. Client caches `{ key, result, model, at }` in `dc:ai:v1`; `key = inputKey(answers, notes)` - a hash, so changed input shows "Update AI reading".
6. "What your words add" items with a `suggested` option offer **Use "…"** → updates the answer, re-ranks, rewrites `dc:history:v1[0]`.

## Model [web: openrouter.ai/api/v1/models, artificialanalysis.ai, benchlm.ai - checked 2026-11-17]
Default chain (OpenRouter `models` fallback): `nvidia/nemotron-3-ultra-550b-a55b:free` → `google/gemma-4-31b-it:free` → `openrouter/free`.
- Nemotron 3 Ultra: highest AA Intelligence (47.7 vs Gemma 39.2) and knowledge among free models, 1M ctx, ~130–200 tok/s. No `response_format` → JSON is requested in the prompt and parsed defensively.
- Override with env `OPENROUTER_MODEL` (comma-separated chain).
- Request: `temperature 0.3`, `max_tokens 6000`, `reasoning { effort: low, exclude: true }`. Prompt ≈ 4.4k tokens (`npm run validate` prints it).

## Env (names only)
| Var | Required | Notes |
|---|---|---|
| `OPENROUTER_API_KEY` | for AI only | Missing → route returns 503 `missing_key`; rest of app unaffected |
| `OPENROUTER_MODEL` | no | Comma-separated model chain |
Declared in `astro.config.mjs › env.schema` (server secrets). Local: `.env` (template `.env.example`). Vercel: Project → Settings → Environment Variables. Route also calls `process.loadEnvFile()` as a fallback for `astro preview`.

## Limits & errors
- OpenRouter free tier: ~20 req/min, 50 req/day without credits (1000/day after $10 credit).
- In-memory limiter: 8 req/min/IP (per server instance).
- Upstream timeout 90 s (Vercel `maxDuration` 120). Errors return `{ error, message }`; UI shows the message.
- Shared result links (`#a=`) hide the AI section - notes belong to the viewer, not the sharer.

## Not done
- No live call verified yet (no key in this environment) - first real run may need prompt tuning. See [[decisions]] D9.

## Note replies

The reading also returns `replies: [{ about: "general" | questionId, reply }]`: a 1–3 sentence answer to each note the user wrote (explains terms, answers questions in the note). Shown as "Your notes, answered" at the bottom of the AI card. `sanitize` keeps only replies for notes actually sent, one per note. Readings cached before this field existed get `replies: []` and are marked stale when notes exist, so returning users see "Update AI reading" after a refresh.
