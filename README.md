# Denomination Compass

A 24-question theology quiz that matches you against 18 Christian traditions — Catholic, Orthodox, Oriental, Church of the East, Anglican, Lutheran, Reformed, Methodist, Baptist, Pentecostal, Non-denominational, Anabaptist, Quaker, Churches of Christ, Adventist, Latter-day Saints, Jehovah's Witnesses and Oneness Pentecostal — plus profile pages, a doctrine comparison and the 21 ecumenical councils.

```bash
npm install
npm run preview    # build + serve production at http://localhost:4321
npm run dev        # development
npm run validate   # data sanity check
```

No backend: progress and results are stored in `localStorage`. Results can be shared via `/results#a=…` links.

Project knowledge (research sources, design, scoring, decisions) lives in `.claude/project-info/` — start at `CLAUDE.md`.
