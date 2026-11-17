# Doctrine matrix

Source of truth for data: `src/data/stances.ts`. Evidence: [raw/research-matrix.md](../../raw/research-matrix.md) - section (a) JSON, (b) per-cell notes with URLs and HIGH/MED/LOW confidence.

## Scale
| Score | Meaning |
|---|---|
| 1 | Official and near-universal |
| 0.75 | Official/dominant, notable dissent or minority sub-bodies |
| 0.5 | Genuinely split or undefined |
| 0.25 | Real minority strand or historical position |
| 0 (omitted) | Rejected or absent |

## Question ids (app ↔ research)
| App id | Research id | Topic |
|---|---|---|
| trinity | trinity | trinity |
| authority | authority | authority |
| pope | pope | papacy |
| councils | councils | councils |
| eucharist | eucharist | eucharist |
| infant | infant_baptism | baptism |
| regeneration | baptismal_regeneration | baptism |
| faithalone | faith_alone | justification |
| election | unconditional_election | predestination |
| losable | lose_salvation | predestination |
| origsin | inherited_guilt | original-sin |
| perfection | entire_sanctification | sanctification |
| succession | apostolic_succession | ministry |
| women | women_ordination | ministry |
| governance | governance | ministry |
| theotokos | theotokos | mary |
| evervirgin | perpetual_virginity | mary |
| saints | saints_intercession | saints |
| icons | icons | saints |
| afterlife | afterlife | afterlife |
| gifts | miraculous_gifts | spirit |
| sabbath | sabbath | practice |
| pacifism | pacifism | practice |
| instruments | instruments | practice |

## Contested / low-confidence cells (review first if users complain)
- **Assyrian Church of the East** - weakest row (thin English sources). Uses "Mother of Christ"; 1994 Common Christological Declaration with Rome accepts both wordings → theotokos 0.5. Few/no icons → icons yes 0.25. A "sleep of souls" strand → sleep 0.25. Sacrament list (Mar Abdisho) includes Holy Leaven + sign of the cross, omits marriage. Instruments & saints cells LOW.
- **Oriental Orthodox sabbath 0.25** - Ethiopian Tewahedo keeps Saturday as well as Sunday.
- **LDS theotokos 0.25** - 1830 Book of Mormon said "mother of God", changed 1837.
- **Oneness (UPCI)** - licenses women preachers (<4% of ministers) → women partial; 2012 softened combat ban → pacifism 0.25.
- **Lutheran election** - Formula of Concord: election by grace not foreseen faith (yes 0.75) yet salvation can be lost (losable yes 1). Binary questions fit poorly.
- **Anglican losable 0.75** - Art. XVI "may depart from grace".
- **Baptist origsin 0.5** - BF&M 2000 (sinful nature) vs 1689 LBCF (guilt).
- **Methodist perfection 1** - ordination question "Do you expect to be made perfect in love in this life?"
- **Context (2025):** SBC women-pastor amendment got 60.74% (needed ⅔); Sarah Mullally first woman Archbishop of Canterbury (Oct 2025), GAFCON announced a rival "Global Anglican Communion"; SDA GC voted against women's ordination (2015) though some unions ordain.
- Awkward fits flagged by research: Orthodox theosis vs "entire sanctification"; Quaker "ordination" (no clergy); LDS restored priesthood vs apostolic succession.

## Composite rows
Anglican, Lutheran, Reformed, Baptist, Non-denom, Anabaptist, Quaker average internal splits - see [[decisions]] D1.
