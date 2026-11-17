# Decisions (mini-ADRs)

### D1 - 18 traditions, families not sub-bodies (2026-11-17)
Anglican, Lutheran, Reformed, Baptist, Non-denom, Anabaptist, Quaker average over internal splits (LCMS/ELCA, PCA/PCUSA…). Keeps quiz short and results readable. Splitting is possible later - see [[playbooks]].

### D2 - Stances as graded scores, not single answers
Each option gets 0/0.25/0.5/0.75/1 so divided traditions aren't misrepresented. Scale defined in [[doctrine-matrix]].

### D3 - Normalise by `max(top, 0.75)`
Raw scores capped self-matches at ~84–96% (no "perfect match" possible). Pure `/top` made splits count as full agreement and compressed gaps (Anabaptist ≈ Pentecostal 94%). The 0.75 floor keeps 100% reachable while splits stay partial.

### D4 - 24 questions, mostly yes/no (now 26: marriage + abortion added, see log)
User asked for short. Questions chosen for discriminating power: each tradition has ≥1 marker (e.g. councils count → Orthodox/Oriental/Assyrian, sabbath → Adventist, instruments → Churches of Christ, perfection → Methodist, theotokos → Church of the East, trinity → LDS/JW/Oneness).

### D5 - Council acceptance lives on profiles
`profiles.ts › councils` is the single source; `/councils` derives "accepted by". Protestant rows list councils whose *doctrine* they affirm (1–4), noted as non-binding.

### D6 - No framework router / no DB
Static Astro pages; only quiz + results hydrate. localStorage for progress/history; shareable hash code for results.

### D7 - Custom SVG symbols, no icon library
Recognisable, consistent Redeemed-Zoomer-style badges; zero deps.

### D8 - Self-hosted fonts
Fontsource variable fonts (Fraunces `soft` cut: wght + SOFT axes, half the size of `full`; Inter) instead of Google Fonts: no third-party request (privacy policy stays simple), and Polish glyphs are covered by the latin-ext subsets.

### D9 - AI reading is optional, consented and stateless
Free OpenRouter model, called only after an explicit consent tick; nothing stored server-side; result cached in the browser. Reasoning is off because it made replies slow and sometimes unparseable. Details: [[ai]].

### D10 - Notices instead of verdicts
Traditions outside historic Nicene Christianity (JW, LDS, Oneness) and debated cases (Adventists) carry a neutral "How other churches see it" notice. The profile itself describes the church as it describes itself.

### D11 - Liberal/progressive Christianity is a dimension, not a tradition [user]
Progressive Christians exist inside most traditions (mainline Protestants especially), so they are not a 19th profile. Two ethics questions (marriage, abortion) plus women's ordination feed `progressiveScore()`; results show only a small "Traditional - Progressive" bar at the top. Profiles show nothing extra beyond each church's official answer. Scripture authority was deliberately left out of the score [user].

### D12 - No niche denominations [user]
Congregationalists were added and removed at the user's request: keep the 18 broad traditions; smaller groups are covered by the closest one (Presbyterians = Reformed).

### D13 - Every page under /en or /pl
Static pages per language (`[lang]` routes) instead of client-side switching: each language gets its own indexable URL, hreflang and OG image. English is the source of truth for ids, scores and slugs.
