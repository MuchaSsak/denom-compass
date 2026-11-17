# AI reading

Optional free-text → AI analysis on `/results`. Code: `src/lib/ai.ts` (prompt, JSON extraction, sanitising), `src/pages/api/analyze.ts` (server route, `prerender = false`), `src/components/AiReading.svelte` (UI).

## Flow
1. User writes notes per question (quiz: "Add your own words") and/or a general description (results page). Stored in `localStorage` `dc:notes:v1` (`{ [questionId]: text, _general: text }`), editable any time on the results page.
2. Before the first request the user ticks an explicit consent checkbox (GDPR Art. 9(2)(a), 49(1)(a)); stored as `dc:ai-consent:v1` `{ v: LEGAL_VERSION, at }`. "Get my AI reading" → `POST /api/analyze` `{ answers, notes, lang, consent }`. The server answers 403 `consent_required` unless `consent === LEGAL_VERSION` (`src/data/legal.ts`), so bumping the legal version re-asks everyone.
3. Server sanitises input (known ids, `NOTE_MAX` 600 / `GENERAL_MAX` 2000 chars), builds the prompt (top 8 ranked traditions' doctrines, reply language = page language + dominant position per question, the user's answers + words, algorithmic ranking), calls OpenRouter.
4. Reply JSON → `extractJson` (handles ``` fences / prose) → `sanitize` (drops unknown tradition/question ids, invalid option ids → null, clamps fit 0–100, caps list lengths). Throws if no summary/matches.
5. Client caches `{ key, result, model, at }` in `dc:ai:v1`; `key = inputKey(answers, notes)` - a hash, so changed input shows "Update AI reading".
6. "What your words add" items with a `suggested` option offer **Use "…"** → updates the answer, re-ranks, rewrites `dc:history:v1[0]`.

## Model (updated 2026-11-17)
Chain tried in order (`DEFAULT_MODELS` in `src/lib/ai.ts`): `nvidia/nemotron-3-ultra-550b-a55b:free` → `openrouter/free`. The owner's OpenRouter key has a guardrail that only allows Nemotron Ultra; other free models return 404 and the loop moves on.
- Request: `temperature 0.3`, `max_tokens 3500`, `reasoning: { enabled: false }`, `response_format: { type: 'json_object' }`.
- **Reasoning must stay off**: with `effort: low` Nemotron took ~79 s and sometimes produced a runaway, unparseable reply; with reasoning off it answers in ~11 s with valid JSON. `extractJson` still strips `<think>` blocks and `repairJson` fixes trailing commas / truncation.
- Override with env `OPENROUTER_MODEL` (comma-separated chain). Debug: `scripts/ai-probe.ts` (`REASONING=off`), loads `.env` itself and never prints the key.

## Env (names only)
| Var | Required | Notes |
|---|---|---|
| `OPENROUTER_API_KEY` | for AI only | Missing → route returns 503 `missing_key`; rest of app unaffected |
| `OPENROUTER_MODEL` | no | Comma-separated model chain |
Declared in `astro.config.mjs › env.schema` (server secrets). Local: `.env` (template `.env.example`). Vercel: Project → Settings → Environment Variables. Route also calls `process.loadEnvFile()` as a fallback for `astro preview`.

## Limits & errors
- OpenRouter free tier: ~20 req/min, 50 req/day without credits (1000/day after $10 credit).
- In-memory limiter: 8 req/min/IP (per server instance).
- Time budget: Vercel Hobby `maxDuration` 60 s → server deadline 55 s, 45 s per model attempt; client `AbortSignal.timeout(65_000)`. Errors return `{ error }` codes `rate_limited` / `upstream` / `parse` / `timeout` / `consent_required` / `missing_key`; the UI maps codes to translated messages (a 504 maps to timeout).
- Cache key is `${lang}:${inputKey}` so switching language asks for a new reading.
- Shared result links (`#a=`) hide the AI section - notes belong to the viewer, not the sharer.

## Verified
- Live calls in production and locally (Polish and English), ~11 s with reasoning off. See [[decisions]] D9.

## Note replies

The reading also returns `replies: [{ about: "general" | questionId, reply }]`: a 1–3 sentence answer to each note the user wrote (explains terms, answers questions in the note). Shown as "Your notes, answered" at the bottom of the AI card. `sanitize` keeps only replies for notes actually sent, one per note. Readings cached before this field existed get `replies: []` and are marked stale when notes exist, so returning users see "Update AI reading" after a refresh.
