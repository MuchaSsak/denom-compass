# Scoring

## Match %
For each answered (non-skipped) question `q` with weight `w`:

```
top   = max(stance[q] values)
s     = clamp(stance[q][answer] / max(top, 0.75))
match = Σ(s·w) / Σ(w)
```

- Normalising by the tradition's own dominant score means agreeing with what a tradition *mostly* holds counts fully, so a 100% match is reachable.
- The `max(top, 0.75)` floor keeps genuinely split questions (0.5/0.5) partial (0.67) for either answer - splits shouldn't hand out full agreement. See [[decisions]].
- Skips are excluded from numerator and denominator.

## Weights (`questions.ts`)
3: trinity, authority, pope · 2: councils, eucharist, infant, faithalone, sabbath · 1.5: regeneration, election, losable, succession, governance, saints, afterlife, gifts · 1: origsin, perfection, women, theotokos, evervirgin, icons, pacifism, instruments.

## Compass (results page)
Two axes, −1..1, from option `axes` in `questions.ts`:
- **x**: symbolic (−) ↔ sacramental (+) - eucharist, infant, regeneration, succession, saints, icons.
- **y**: sovereign grace (−, top) ↔ free will (+, bottom) - faithalone, election, losable, origsin, perfection.

User position = weighted mean of chosen options' axis values. Tradition position = same formula over its stance distribution (expected value), so both live in one space. `CompassChart` relaxes overlapping badges apart (min 7.4% distance).

## Labels
`headline()` in Results: 100 → "A perfect match", ≥90 near-perfect, ≥75 closest, else "closest - loosely". "Neck and neck" shown when others are within 3 points.

## Validation
`npm run validate` answers each question with every tradition's top option and asserts it ranks itself #1. Last run (2026-11-17): all ok; tightest pairs Baptist/Non-denom (95–97%), Anabaptist/Pentecostal 93%, Orthodox/Oriental 91–92%.
