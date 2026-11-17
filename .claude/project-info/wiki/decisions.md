# Decisions (mini-ADRs)

### D1 — 18 traditions, families not sub-bodies (2026-11-17)
Anglican, Lutheran, Reformed, Baptist, Non-denom, Anabaptist, Quaker average over internal splits (LCMS/ELCA, PCA/PCUSA…). Keeps quiz short and results readable. Splitting is possible later — see [[playbooks]].

### D2 — Stances as graded scores, not single answers
Each option gets 0/0.25/0.5/0.75/1 so divided traditions aren't misrepresented. Scale defined in [[doctrine-matrix]].

### D3 — Normalise by `max(top, 0.75)`
Raw scores capped self-matches at ~84–96% (no "perfect match" possible). Pure `/top` made splits count as full agreement and compressed gaps (Anabaptist ≈ Pentecostal 94%). The 0.75 floor keeps 100% reachable while splits stay partial.

### D4 — 24 questions, mostly yes/no
User asked for short. Questions chosen for discriminating power: each tradition has ≥1 marker (e.g. councils count → Orthodox/Oriental/Assyrian, sabbath → Adventist, instruments → Churches of Christ, perfection → Methodist, theotokos → Church of the East, trinity → LDS/JW/Oneness).

### D5 — Council acceptance lives on profiles
`profiles.ts › councils` is the single source; `/councils` derives "accepted by". Protestant rows list councils whose *doctrine* they affirm (1–4), noted as non-binding.

### D6 — No framework router / no DB
Static Astro pages; only quiz + results hydrate. localStorage for progress/history; shareable hash code for results.

### D7 — Custom SVG symbols, no icon library
Recognisable, consistent Redeemed-Zoomer-style badges; zero deps.
