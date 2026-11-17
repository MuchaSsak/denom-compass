# Playbooks

## Fix a tradition's position
1. Find the cell note + source in `raw/research-matrix.md` (section (b), by tradition).
2. Edit `src/data/stances.ts` (scale in [[doctrine-matrix]]).
3. `npm run validate` → all `ok`.
4. If the change came from a new source, save it as a new file in `raw/` and add to `index.md`. Log it in `log.md`.

## Add a question
1. Add to `src/data/questions.ts` (id, topic from `topics.ts`, kind, text ≤ ~12 words, weight, options; `axes` only if it belongs on the compass).
2. Add a stance for that id to **every** tradition in `stances.ts`.
3. `npm run validate`. Note: share links from before the change stop decoding (length mismatch) - acceptable.
4. Update [[scoring]] weights list and [[doctrine-matrix]] question table.

## Add a denomination
1. `profiles.ts`: new entry (unique colour, `family`, `councils`, short copy).
2. `stances.ts`: a row for all 24 questions.
3. `icons.ts`: add a 48×48 symbol under the same id.
4. `/councils` grid lists a fixed set of ids - add there if it accepts councils.
5. `npm run validate`; check it doesn't steal another tradition's #1.
6. Update [[overview]] list, [[research/denominations]] facts, `log.md`.

## Refresh research
Re-run a research pass, save output as `raw/research-matrix-YYYY-MM-DD.md` (never overwrite raw), diff against `stances.ts`, apply, validate, log.
