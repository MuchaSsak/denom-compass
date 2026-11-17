# Christian Denomination Compass: Doctrinal Stance Matrix (research notes)

Compiled 2026-11-17. This is research input only, not app code.

**Scoring convention.** Each option gets 0 / 0.25 / 0.5 / 0.75 / 1 for how well it matches the body's **official or typical** teaching. Several options can be nonzero. 1 means official and near-universal. 0.75 means official or dominant with notable dissent or minority sub-bodies. 0.5 means genuinely split or undefined. 0.25 means a real minority strand or historical position. 0 means rejected or absent. Every option is listed explicitly, including zeros.

**Question ids used in the JSON**

| # | id | options |
|---|----|---------|
| 1 | `trinity` | yes / separate / modal |
| 2 | `authority` | scripture / tradition / prophet / spirit |
| 3 | `pope` | yes / no |
| 4 | `councils` | all21 / seven / three / two / subordinate / none |
| 5 | `eucharist` | transub / mystery / union / spiritual / memorial / none |
| 6 | `infant_baptism` | yes / no |
| 7 | `baptismal_regeneration` | yes / no |
| 8 | `faith_alone` | yes / no |
| 9 | `unconditional_election` | yes / no |
| 10 | `lose_salvation` | yes / no |
| 11 | `apostolic_succession` | yes / no |
| 12 | `women_ordination` | yes / no |
| 13 | `saints_intercession` | yes / no |
| 14 | `perpetual_virginity` | yes / no |
| 15 | `icons` | yes / no |
| 16 | `afterlife` | purgatory / intermediate / heaven / sleep |
| 17 | `miraculous_gifts` | yes / no |
| 18 | `pacifism` | yes / no |
| 19 | `sabbath` | yes / no |
| 20 | `entire_sanctification` | yes / no |
| 21 | `instruments` | yes / no |
| 22 | `governance` | bishops / elders / congregation / prophet |
| 23 | `inherited_guilt` | yes / no |
| 24 | `theotokos` | yes / no |

**Confidence flags** used below: **[HIGH]** means it is stated in an official confession or catechism. **[MED]** means it reflects the dominant practice of a body with no single binding text, or a body with internal splits. **[LOW]** means the sources are thin or conflicting; please review these cells.

---

## (a) Matrix

```json
{
  "catholic": {
    "trinity": {"yes": 1, "separate": 0, "modal": 0},
    "authority": {"scripture": 0, "tradition": 1, "prophet": 0, "spirit": 0},
    "pope": {"yes": 1, "no": 0},
    "councils": {"all21": 1, "seven": 0, "three": 0, "two": 0, "subordinate": 0, "none": 0},
    "eucharist": {"transub": 1, "mystery": 0.25, "union": 0, "spiritual": 0, "memorial": 0, "none": 0},
    "infant_baptism": {"yes": 1, "no": 0},
    "baptismal_regeneration": {"yes": 1, "no": 0},
    "faith_alone": {"yes": 0, "no": 1},
    "unconditional_election": {"yes": 0.25, "no": 0.75},
    "lose_salvation": {"yes": 1, "no": 0},
    "apostolic_succession": {"yes": 1, "no": 0},
    "women_ordination": {"yes": 0, "no": 1},
    "saints_intercession": {"yes": 1, "no": 0},
    "perpetual_virginity": {"yes": 1, "no": 0},
    "icons": {"yes": 1, "no": 0},
    "afterlife": {"purgatory": 1, "intermediate": 0, "heaven": 0, "sleep": 0},
    "miraculous_gifts": {"yes": 0.5, "no": 0.5},
    "pacifism": {"yes": 0, "no": 1},
    "sabbath": {"yes": 0, "no": 1},
    "entire_sanctification": {"yes": 0.25, "no": 0.75},
    "instruments": {"yes": 1, "no": 0},
    "governance": {"bishops": 1, "elders": 0, "congregation": 0, "prophet": 0},
    "inherited_guilt": {"yes": 1, "no": 0},
    "theotokos": {"yes": 1, "no": 0}
  },
  "orthodox": {
    "trinity": {"yes": 1, "separate": 0, "modal": 0},
    "authority": {"scripture": 0, "tradition": 1, "prophet": 0, "spirit": 0},
    "pope": {"yes": 0, "no": 1},
    "councils": {"all21": 0, "seven": 1, "three": 0, "two": 0, "subordinate": 0, "none": 0},
    "eucharist": {"transub": 0.25, "mystery": 1, "union": 0, "spiritual": 0, "memorial": 0, "none": 0},
    "infant_baptism": {"yes": 1, "no": 0},
    "baptismal_regeneration": {"yes": 1, "no": 0},
    "faith_alone": {"yes": 0, "no": 1},
    "unconditional_election": {"yes": 0, "no": 1},
    "lose_salvation": {"yes": 1, "no": 0},
    "apostolic_succession": {"yes": 1, "no": 0},
    "women_ordination": {"yes": 0, "no": 1},
    "saints_intercession": {"yes": 1, "no": 0},
    "perpetual_virginity": {"yes": 1, "no": 0},
    "icons": {"yes": 1, "no": 0},
    "afterlife": {"purgatory": 0, "intermediate": 1, "heaven": 0, "sleep": 0},
    "miraculous_gifts": {"yes": 0.25, "no": 0.75},
    "pacifism": {"yes": 0.25, "no": 0.75},
    "sabbath": {"yes": 0, "no": 1},
    "entire_sanctification": {"yes": 0.25, "no": 0.75},
    "instruments": {"yes": 0.25, "no": 0.75},
    "governance": {"bishops": 1, "elders": 0, "congregation": 0, "prophet": 0},
    "inherited_guilt": {"yes": 0.25, "no": 0.75},
    "theotokos": {"yes": 1, "no": 0}
  },
  "oriental": {
    "trinity": {"yes": 1, "separate": 0, "modal": 0},
    "authority": {"scripture": 0, "tradition": 1, "prophet": 0, "spirit": 0},
    "pope": {"yes": 0, "no": 1},
    "councils": {"all21": 0, "seven": 0, "three": 1, "two": 0, "subordinate": 0, "none": 0},
    "eucharist": {"transub": 0, "mystery": 1, "union": 0, "spiritual": 0, "memorial": 0, "none": 0},
    "infant_baptism": {"yes": 1, "no": 0},
    "baptismal_regeneration": {"yes": 1, "no": 0},
    "faith_alone": {"yes": 0, "no": 1},
    "unconditional_election": {"yes": 0, "no": 1},
    "lose_salvation": {"yes": 1, "no": 0},
    "apostolic_succession": {"yes": 1, "no": 0},
    "women_ordination": {"yes": 0, "no": 1},
    "saints_intercession": {"yes": 1, "no": 0},
    "perpetual_virginity": {"yes": 1, "no": 0},
    "icons": {"yes": 1, "no": 0},
    "afterlife": {"purgatory": 0, "intermediate": 1, "heaven": 0, "sleep": 0},
    "miraculous_gifts": {"yes": 0.25, "no": 0.75},
    "pacifism": {"yes": 0, "no": 1},
    "sabbath": {"yes": 0.25, "no": 0.75},
    "entire_sanctification": {"yes": 0.25, "no": 0.75},
    "instruments": {"yes": 0.75, "no": 0.25},
    "governance": {"bishops": 1, "elders": 0, "congregation": 0, "prophet": 0},
    "inherited_guilt": {"yes": 0.5, "no": 0.5},
    "theotokos": {"yes": 1, "no": 0}
  },
  "assyrian": {
    "trinity": {"yes": 1, "separate": 0, "modal": 0},
    "authority": {"scripture": 0, "tradition": 1, "prophet": 0, "spirit": 0},
    "pope": {"yes": 0, "no": 1},
    "councils": {"all21": 0, "seven": 0, "three": 0, "two": 1, "subordinate": 0, "none": 0},
    "eucharist": {"transub": 0, "mystery": 1, "union": 0, "spiritual": 0, "memorial": 0, "none": 0},
    "infant_baptism": {"yes": 1, "no": 0},
    "baptismal_regeneration": {"yes": 1, "no": 0},
    "faith_alone": {"yes": 0, "no": 1},
    "unconditional_election": {"yes": 0, "no": 1},
    "lose_salvation": {"yes": 1, "no": 0},
    "apostolic_succession": {"yes": 1, "no": 0},
    "women_ordination": {"yes": 0, "no": 1},
    "saints_intercession": {"yes": 0.75, "no": 0.25},
    "perpetual_virginity": {"yes": 0.75, "no": 0.25},
    "icons": {"yes": 0.25, "no": 0.75},
    "afterlife": {"purgatory": 0, "intermediate": 0.75, "heaven": 0, "sleep": 0.25},
    "miraculous_gifts": {"yes": 0.25, "no": 0.75},
    "pacifism": {"yes": 0, "no": 1},
    "sabbath": {"yes": 0, "no": 1},
    "entire_sanctification": {"yes": 0.25, "no": 0.75},
    "instruments": {"yes": 0.5, "no": 0.5},
    "governance": {"bishops": 1, "elders": 0, "congregation": 0, "prophet": 0},
    "inherited_guilt": {"yes": 0.25, "no": 0.75},
    "theotokos": {"yes": 0.5, "no": 0.5}
  },
  "anglican": {
    "trinity": {"yes": 1, "separate": 0, "modal": 0},
    "authority": {"scripture": 0.75, "tradition": 0.5, "prophet": 0, "spirit": 0},
    "pope": {"yes": 0, "no": 1},
    "councils": {"all21": 0, "seven": 0.25, "three": 0, "two": 0, "subordinate": 1, "none": 0},
    "eucharist": {"transub": 0.25, "mystery": 0.5, "union": 0, "spiritual": 0.75, "memorial": 0.25, "none": 0},
    "infant_baptism": {"yes": 1, "no": 0},
    "baptismal_regeneration": {"yes": 0.75, "no": 0.25},
    "faith_alone": {"yes": 0.75, "no": 0.25},
    "unconditional_election": {"yes": 0.5, "no": 0.5},
    "lose_salvation": {"yes": 0.75, "no": 0.25},
    "apostolic_succession": {"yes": 0.75, "no": 0.25},
    "women_ordination": {"yes": 0.75, "no": 0.25},
    "saints_intercession": {"yes": 0.25, "no": 0.75},
    "perpetual_virginity": {"yes": 0.5, "no": 0.5},
    "icons": {"yes": 0.25, "no": 0.75},
    "afterlife": {"purgatory": 0.25, "intermediate": 0.5, "heaven": 0.75, "sleep": 0},
    "miraculous_gifts": {"yes": 0.5, "no": 0.5},
    "pacifism": {"yes": 0, "no": 1},
    "sabbath": {"yes": 0, "no": 1},
    "entire_sanctification": {"yes": 0, "no": 1},
    "instruments": {"yes": 1, "no": 0},
    "governance": {"bishops": 1, "elders": 0.25, "congregation": 0, "prophet": 0},
    "inherited_guilt": {"yes": 0.75, "no": 0.25},
    "theotokos": {"yes": 1, "no": 0}
  },
  "lutheran": {
    "trinity": {"yes": 1, "separate": 0, "modal": 0},
    "authority": {"scripture": 1, "tradition": 0.25, "prophet": 0, "spirit": 0},
    "pope": {"yes": 0, "no": 1},
    "councils": {"all21": 0, "seven": 0, "three": 0, "two": 0, "subordinate": 1, "none": 0},
    "eucharist": {"transub": 0, "mystery": 0.25, "union": 1, "spiritual": 0, "memorial": 0, "none": 0},
    "infant_baptism": {"yes": 1, "no": 0},
    "baptismal_regeneration": {"yes": 1, "no": 0},
    "faith_alone": {"yes": 1, "no": 0},
    "unconditional_election": {"yes": 0.75, "no": 0.25},
    "lose_salvation": {"yes": 1, "no": 0},
    "apostolic_succession": {"yes": 0.25, "no": 0.75},
    "women_ordination": {"yes": 0.75, "no": 0.25},
    "saints_intercession": {"yes": 0, "no": 1},
    "perpetual_virginity": {"yes": 0.5, "no": 0.5},
    "icons": {"yes": 0.25, "no": 0.75},
    "afterlife": {"purgatory": 0, "intermediate": 0.25, "heaven": 0.75, "sleep": 0.25},
    "miraculous_gifts": {"yes": 0.25, "no": 0.75},
    "pacifism": {"yes": 0, "no": 1},
    "sabbath": {"yes": 0, "no": 1},
    "entire_sanctification": {"yes": 0, "no": 1},
    "instruments": {"yes": 1, "no": 0},
    "governance": {"bishops": 0.5, "elders": 0.5, "congregation": 0.5, "prophet": 0},
    "inherited_guilt": {"yes": 1, "no": 0},
    "theotokos": {"yes": 1, "no": 0}
  },
  "reformed": {
    "trinity": {"yes": 1, "separate": 0, "modal": 0},
    "authority": {"scripture": 1, "tradition": 0, "prophet": 0, "spirit": 0},
    "pope": {"yes": 0, "no": 1},
    "councils": {"all21": 0, "seven": 0, "three": 0, "two": 0, "subordinate": 1, "none": 0},
    "eucharist": {"transub": 0, "mystery": 0, "union": 0, "spiritual": 1, "memorial": 0.25, "none": 0},
    "infant_baptism": {"yes": 1, "no": 0},
    "baptismal_regeneration": {"yes": 0.25, "no": 0.75},
    "faith_alone": {"yes": 1, "no": 0},
    "unconditional_election": {"yes": 1, "no": 0},
    "lose_salvation": {"yes": 0, "no": 1},
    "apostolic_succession": {"yes": 0, "no": 1},
    "women_ordination": {"yes": 0.5, "no": 0.5},
    "saints_intercession": {"yes": 0, "no": 1},
    "perpetual_virginity": {"yes": 0.25, "no": 0.75},
    "icons": {"yes": 0, "no": 1},
    "afterlife": {"purgatory": 0, "intermediate": 0, "heaven": 1, "sleep": 0},
    "miraculous_gifts": {"yes": 0.25, "no": 0.75},
    "pacifism": {"yes": 0, "no": 1},
    "sabbath": {"yes": 0, "no": 1},
    "entire_sanctification": {"yes": 0, "no": 1},
    "instruments": {"yes": 0.75, "no": 0.25},
    "governance": {"bishops": 0, "elders": 1, "congregation": 0, "prophet": 0},
    "inherited_guilt": {"yes": 1, "no": 0},
    "theotokos": {"yes": 0.5, "no": 0.5}
  },
  "methodist": {
    "trinity": {"yes": 1, "separate": 0, "modal": 0},
    "authority": {"scripture": 0.75, "tradition": 0.25, "prophet": 0, "spirit": 0},
    "pope": {"yes": 0, "no": 1},
    "councils": {"all21": 0, "seven": 0, "three": 0, "two": 0, "subordinate": 1, "none": 0},
    "eucharist": {"transub": 0, "mystery": 0.5, "union": 0, "spiritual": 0.75, "memorial": 0.25, "none": 0},
    "infant_baptism": {"yes": 1, "no": 0},
    "baptismal_regeneration": {"yes": 0.5, "no": 0.5},
    "faith_alone": {"yes": 1, "no": 0},
    "unconditional_election": {"yes": 0, "no": 1},
    "lose_salvation": {"yes": 1, "no": 0},
    "apostolic_succession": {"yes": 0, "no": 1},
    "women_ordination": {"yes": 1, "no": 0},
    "saints_intercession": {"yes": 0, "no": 1},
    "perpetual_virginity": {"yes": 0.25, "no": 0.75},
    "icons": {"yes": 0, "no": 1},
    "afterlife": {"purgatory": 0, "intermediate": 0.5, "heaven": 0.75, "sleep": 0},
    "miraculous_gifts": {"yes": 0.25, "no": 0.75},
    "pacifism": {"yes": 0.25, "no": 0.75},
    "sabbath": {"yes": 0, "no": 1},
    "entire_sanctification": {"yes": 1, "no": 0},
    "instruments": {"yes": 1, "no": 0},
    "governance": {"bishops": 0.5, "elders": 0.75, "congregation": 0, "prophet": 0},
    "inherited_guilt": {"yes": 0.75, "no": 0.25},
    "theotokos": {"yes": 0.75, "no": 0.25}
  },
  "baptist": {
    "trinity": {"yes": 1, "separate": 0, "modal": 0},
    "authority": {"scripture": 1, "tradition": 0, "prophet": 0, "spirit": 0},
    "pope": {"yes": 0, "no": 1},
    "councils": {"all21": 0, "seven": 0, "three": 0, "two": 0, "subordinate": 0.75, "none": 0.25},
    "eucharist": {"transub": 0, "mystery": 0, "union": 0, "spiritual": 0.25, "memorial": 1, "none": 0},
    "infant_baptism": {"yes": 0, "no": 1},
    "baptismal_regeneration": {"yes": 0, "no": 1},
    "faith_alone": {"yes": 1, "no": 0},
    "unconditional_election": {"yes": 0.5, "no": 0.5},
    "lose_salvation": {"yes": 0.25, "no": 0.75},
    "apostolic_succession": {"yes": 0, "no": 1},
    "women_ordination": {"yes": 0.25, "no": 0.75},
    "saints_intercession": {"yes": 0, "no": 1},
    "perpetual_virginity": {"yes": 0, "no": 1},
    "icons": {"yes": 0, "no": 1},
    "afterlife": {"purgatory": 0, "intermediate": 0, "heaven": 1, "sleep": 0},
    "miraculous_gifts": {"yes": 0.25, "no": 0.75},
    "pacifism": {"yes": 0, "no": 1},
    "sabbath": {"yes": 0, "no": 1},
    "entire_sanctification": {"yes": 0, "no": 1},
    "instruments": {"yes": 1, "no": 0},
    "governance": {"bishops": 0, "elders": 0, "congregation": 1, "prophet": 0},
    "inherited_guilt": {"yes": 0.5, "no": 0.5},
    "theotokos": {"yes": 0.25, "no": 0.75}
  },
  "pentecostal": {
    "trinity": {"yes": 1, "separate": 0, "modal": 0},
    "authority": {"scripture": 1, "tradition": 0, "prophet": 0, "spirit": 0},
    "pope": {"yes": 0, "no": 1},
    "councils": {"all21": 0, "seven": 0, "three": 0, "two": 0, "subordinate": 0.5, "none": 0.5},
    "eucharist": {"transub": 0, "mystery": 0, "union": 0, "spiritual": 0, "memorial": 1, "none": 0},
    "infant_baptism": {"yes": 0, "no": 1},
    "baptismal_regeneration": {"yes": 0, "no": 1},
    "faith_alone": {"yes": 0.75, "no": 0.25},
    "unconditional_election": {"yes": 0, "no": 1},
    "lose_salvation": {"yes": 1, "no": 0},
    "apostolic_succession": {"yes": 0, "no": 1},
    "women_ordination": {"yes": 0.75, "no": 0.25},
    "saints_intercession": {"yes": 0, "no": 1},
    "perpetual_virginity": {"yes": 0, "no": 1},
    "icons": {"yes": 0, "no": 1},
    "afterlife": {"purgatory": 0, "intermediate": 0, "heaven": 1, "sleep": 0},
    "miraculous_gifts": {"yes": 1, "no": 0},
    "pacifism": {"yes": 0.25, "no": 0.75},
    "sabbath": {"yes": 0, "no": 1},
    "entire_sanctification": {"yes": 0.25, "no": 0.75},
    "instruments": {"yes": 1, "no": 0},
    "governance": {"bishops": 0, "elders": 0.5, "congregation": 0.75, "prophet": 0},
    "inherited_guilt": {"yes": 0.25, "no": 0.75},
    "theotokos": {"yes": 0.25, "no": 0.75}
  },
  "nondenom": {
    "trinity": {"yes": 1, "separate": 0, "modal": 0},
    "authority": {"scripture": 1, "tradition": 0, "prophet": 0, "spirit": 0},
    "pope": {"yes": 0, "no": 1},
    "councils": {"all21": 0, "seven": 0, "three": 0, "two": 0, "subordinate": 0.5, "none": 0.5},
    "eucharist": {"transub": 0, "mystery": 0, "union": 0, "spiritual": 0.25, "memorial": 1, "none": 0},
    "infant_baptism": {"yes": 0, "no": 1},
    "baptismal_regeneration": {"yes": 0, "no": 1},
    "faith_alone": {"yes": 1, "no": 0},
    "unconditional_election": {"yes": 0.25, "no": 0.75},
    "lose_salvation": {"yes": 0.25, "no": 0.75},
    "apostolic_succession": {"yes": 0, "no": 1},
    "women_ordination": {"yes": 0.25, "no": 0.75},
    "saints_intercession": {"yes": 0, "no": 1},
    "perpetual_virginity": {"yes": 0, "no": 1},
    "icons": {"yes": 0, "no": 1},
    "afterlife": {"purgatory": 0, "intermediate": 0, "heaven": 1, "sleep": 0},
    "miraculous_gifts": {"yes": 0.5, "no": 0.5},
    "pacifism": {"yes": 0, "no": 1},
    "sabbath": {"yes": 0, "no": 1},
    "entire_sanctification": {"yes": 0, "no": 1},
    "instruments": {"yes": 1, "no": 0},
    "governance": {"bishops": 0, "elders": 0.5, "congregation": 0.75, "prophet": 0},
    "inherited_guilt": {"yes": 0.5, "no": 0.5},
    "theotokos": {"yes": 0.25, "no": 0.75}
  },
  "anabaptist": {
    "trinity": {"yes": 1, "separate": 0, "modal": 0},
    "authority": {"scripture": 1, "tradition": 0, "prophet": 0, "spirit": 0},
    "pope": {"yes": 0, "no": 1},
    "councils": {"all21": 0, "seven": 0, "three": 0, "two": 0, "subordinate": 0.5, "none": 0.5},
    "eucharist": {"transub": 0, "mystery": 0, "union": 0, "spiritual": 0.25, "memorial": 1, "none": 0},
    "infant_baptism": {"yes": 0, "no": 1},
    "baptismal_regeneration": {"yes": 0, "no": 1},
    "faith_alone": {"yes": 0.5, "no": 0.5},
    "unconditional_election": {"yes": 0, "no": 1},
    "lose_salvation": {"yes": 1, "no": 0},
    "apostolic_succession": {"yes": 0, "no": 1},
    "women_ordination": {"yes": 0.5, "no": 0.5},
    "saints_intercession": {"yes": 0, "no": 1},
    "perpetual_virginity": {"yes": 0, "no": 1},
    "icons": {"yes": 0, "no": 1},
    "afterlife": {"purgatory": 0, "intermediate": 0, "heaven": 0.75, "sleep": 0.25},
    "miraculous_gifts": {"yes": 0.25, "no": 0.75},
    "pacifism": {"yes": 1, "no": 0},
    "sabbath": {"yes": 0, "no": 1},
    "entire_sanctification": {"yes": 0.25, "no": 0.75},
    "instruments": {"yes": 0.5, "no": 0.5},
    "governance": {"bishops": 0.25, "elders": 0.25, "congregation": 0.75, "prophet": 0},
    "inherited_guilt": {"yes": 0, "no": 1},
    "theotokos": {"yes": 0.25, "no": 0.75}
  },
  "quaker": {
    "trinity": {"yes": 0.5, "separate": 0, "modal": 0},
    "authority": {"scripture": 0.25, "tradition": 0, "prophet": 0, "spirit": 1},
    "pope": {"yes": 0, "no": 1},
    "councils": {"all21": 0, "seven": 0, "three": 0, "two": 0, "subordinate": 0, "none": 1},
    "eucharist": {"transub": 0, "mystery": 0, "union": 0, "spiritual": 0, "memorial": 0, "none": 1},
    "infant_baptism": {"yes": 0, "no": 1},
    "baptismal_regeneration": {"yes": 0, "no": 1},
    "faith_alone": {"yes": 0.25, "no": 0.75},
    "unconditional_election": {"yes": 0, "no": 1},
    "lose_salvation": {"yes": 1, "no": 0},
    "apostolic_succession": {"yes": 0, "no": 1},
    "women_ordination": {"yes": 1, "no": 0},
    "saints_intercession": {"yes": 0, "no": 1},
    "perpetual_virginity": {"yes": 0, "no": 1},
    "icons": {"yes": 0, "no": 1},
    "afterlife": {"purgatory": 0, "intermediate": 0, "heaven": 0.5, "sleep": 0},
    "miraculous_gifts": {"yes": 0.25, "no": 0.75},
    "pacifism": {"yes": 1, "no": 0},
    "sabbath": {"yes": 0, "no": 1},
    "entire_sanctification": {"yes": 0.75, "no": 0.25},
    "instruments": {"yes": 0.5, "no": 0.5},
    "governance": {"bishops": 0, "elders": 0, "congregation": 1, "prophet": 0},
    "inherited_guilt": {"yes": 0, "no": 1},
    "theotokos": {"yes": 0.25, "no": 0.75}
  },
  "restorationist": {
    "trinity": {"yes": 1, "separate": 0, "modal": 0},
    "authority": {"scripture": 1, "tradition": 0, "prophet": 0, "spirit": 0},
    "pope": {"yes": 0, "no": 1},
    "councils": {"all21": 0, "seven": 0, "three": 0, "two": 0, "subordinate": 0.25, "none": 0.75},
    "eucharist": {"transub": 0, "mystery": 0, "union": 0, "spiritual": 0.25, "memorial": 1, "none": 0},
    "infant_baptism": {"yes": 0, "no": 1},
    "baptismal_regeneration": {"yes": 0.75, "no": 0.25},
    "faith_alone": {"yes": 0, "no": 1},
    "unconditional_election": {"yes": 0, "no": 1},
    "lose_salvation": {"yes": 1, "no": 0},
    "apostolic_succession": {"yes": 0, "no": 1},
    "women_ordination": {"yes": 0, "no": 1},
    "saints_intercession": {"yes": 0, "no": 1},
    "perpetual_virginity": {"yes": 0, "no": 1},
    "icons": {"yes": 0, "no": 1},
    "afterlife": {"purgatory": 0, "intermediate": 0.5, "heaven": 0.5, "sleep": 0},
    "miraculous_gifts": {"yes": 0, "no": 1},
    "pacifism": {"yes": 0.25, "no": 0.75},
    "sabbath": {"yes": 0, "no": 1},
    "entire_sanctification": {"yes": 0, "no": 1},
    "instruments": {"yes": 0, "no": 1},
    "governance": {"bishops": 0, "elders": 0.25, "congregation": 1, "prophet": 0},
    "inherited_guilt": {"yes": 0, "no": 1},
    "theotokos": {"yes": 0, "no": 1}
  },
  "adventist": {
    "trinity": {"yes": 1, "separate": 0, "modal": 0},
    "authority": {"scripture": 1, "tradition": 0, "prophet": 0.5, "spirit": 0},
    "pope": {"yes": 0, "no": 1},
    "councils": {"all21": 0, "seven": 0, "three": 0, "two": 0, "subordinate": 0.5, "none": 0.5},
    "eucharist": {"transub": 0, "mystery": 0, "union": 0, "spiritual": 0, "memorial": 1, "none": 0},
    "infant_baptism": {"yes": 0, "no": 1},
    "baptismal_regeneration": {"yes": 0, "no": 1},
    "faith_alone": {"yes": 0.75, "no": 0.25},
    "unconditional_election": {"yes": 0, "no": 1},
    "lose_salvation": {"yes": 1, "no": 0},
    "apostolic_succession": {"yes": 0, "no": 1},
    "women_ordination": {"yes": 0.25, "no": 0.75},
    "saints_intercession": {"yes": 0, "no": 1},
    "perpetual_virginity": {"yes": 0, "no": 1},
    "icons": {"yes": 0, "no": 1},
    "afterlife": {"purgatory": 0, "intermediate": 0, "heaven": 0, "sleep": 1},
    "miraculous_gifts": {"yes": 0.25, "no": 0.75},
    "pacifism": {"yes": 0.5, "no": 0.5},
    "sabbath": {"yes": 1, "no": 0},
    "entire_sanctification": {"yes": 0.25, "no": 0.75},
    "instruments": {"yes": 1, "no": 0},
    "governance": {"bishops": 0, "elders": 1, "congregation": 0, "prophet": 0},
    "inherited_guilt": {"yes": 0.25, "no": 0.75},
    "theotokos": {"yes": 0.25, "no": 0.75}
  },
  "lds": {
    "trinity": {"yes": 0, "separate": 1, "modal": 0},
    "authority": {"scripture": 0, "tradition": 0, "prophet": 1, "spirit": 0},
    "pope": {"yes": 0, "no": 1},
    "councils": {"all21": 0, "seven": 0, "three": 0, "two": 0, "subordinate": 0, "none": 1},
    "eucharist": {"transub": 0, "mystery": 0, "union": 0, "spiritual": 0, "memorial": 1, "none": 0},
    "infant_baptism": {"yes": 0, "no": 1},
    "baptismal_regeneration": {"yes": 0.75, "no": 0.25},
    "faith_alone": {"yes": 0, "no": 1},
    "unconditional_election": {"yes": 0, "no": 1},
    "lose_salvation": {"yes": 1, "no": 0},
    "apostolic_succession": {"yes": 0.75, "no": 0.25},
    "women_ordination": {"yes": 0, "no": 1},
    "saints_intercession": {"yes": 0, "no": 1},
    "perpetual_virginity": {"yes": 0, "no": 1},
    "icons": {"yes": 0, "no": 1},
    "afterlife": {"purgatory": 0, "intermediate": 1, "heaven": 0, "sleep": 0},
    "miraculous_gifts": {"yes": 0.75, "no": 0.25},
    "pacifism": {"yes": 0, "no": 1},
    "sabbath": {"yes": 0, "no": 1},
    "entire_sanctification": {"yes": 0.25, "no": 0.75},
    "instruments": {"yes": 1, "no": 0},
    "governance": {"bishops": 0, "elders": 0, "congregation": 0, "prophet": 1},
    "inherited_guilt": {"yes": 0, "no": 1},
    "theotokos": {"yes": 0.25, "no": 0.75}
  },
  "jw": {
    "trinity": {"yes": 0, "separate": 1, "modal": 0},
    "authority": {"scripture": 0.25, "tradition": 0, "prophet": 1, "spirit": 0},
    "pope": {"yes": 0, "no": 1},
    "councils": {"all21": 0, "seven": 0, "three": 0, "two": 0, "subordinate": 0, "none": 1},
    "eucharist": {"transub": 0, "mystery": 0, "union": 0, "spiritual": 0, "memorial": 1, "none": 0},
    "infant_baptism": {"yes": 0, "no": 1},
    "baptismal_regeneration": {"yes": 0, "no": 1},
    "faith_alone": {"yes": 0, "no": 1},
    "unconditional_election": {"yes": 0, "no": 1},
    "lose_salvation": {"yes": 1, "no": 0},
    "apostolic_succession": {"yes": 0, "no": 1},
    "women_ordination": {"yes": 0, "no": 1},
    "saints_intercession": {"yes": 0, "no": 1},
    "perpetual_virginity": {"yes": 0, "no": 1},
    "icons": {"yes": 0, "no": 1},
    "afterlife": {"purgatory": 0, "intermediate": 0, "heaven": 0.25, "sleep": 1},
    "miraculous_gifts": {"yes": 0, "no": 1},
    "pacifism": {"yes": 1, "no": 0},
    "sabbath": {"yes": 0, "no": 1},
    "entire_sanctification": {"yes": 0, "no": 1},
    "instruments": {"yes": 1, "no": 0},
    "governance": {"bishops": 0, "elders": 0, "congregation": 0, "prophet": 1},
    "inherited_guilt": {"yes": 0.75, "no": 0.25},
    "theotokos": {"yes": 0, "no": 1}
  },
  "oneness": {
    "trinity": {"yes": 0, "separate": 0, "modal": 1},
    "authority": {"scripture": 1, "tradition": 0, "prophet": 0, "spirit": 0},
    "pope": {"yes": 0, "no": 1},
    "councils": {"all21": 0, "seven": 0, "three": 0, "two": 0, "subordinate": 0, "none": 1},
    "eucharist": {"transub": 0, "mystery": 0, "union": 0, "spiritual": 0, "memorial": 1, "none": 0},
    "infant_baptism": {"yes": 0, "no": 1},
    "baptismal_regeneration": {"yes": 1, "no": 0},
    "faith_alone": {"yes": 0.25, "no": 0.75},
    "unconditional_election": {"yes": 0, "no": 1},
    "lose_salvation": {"yes": 1, "no": 0},
    "apostolic_succession": {"yes": 0, "no": 1},
    "women_ordination": {"yes": 0.75, "no": 0.25},
    "saints_intercession": {"yes": 0, "no": 1},
    "perpetual_virginity": {"yes": 0, "no": 1},
    "icons": {"yes": 0, "no": 1},
    "afterlife": {"purgatory": 0, "intermediate": 0, "heaven": 1, "sleep": 0},
    "miraculous_gifts": {"yes": 1, "no": 0},
    "pacifism": {"yes": 0.25, "no": 0.75},
    "sabbath": {"yes": 0, "no": 1},
    "entire_sanctification": {"yes": 0.25, "no": 0.75},
    "instruments": {"yes": 1, "no": 0},
    "governance": {"bishops": 0, "elders": 0.5, "congregation": 0.5, "prophet": 0},
    "inherited_guilt": {"yes": 0.25, "no": 0.75},
    "theotokos": {"yes": 0.25, "no": 0.75}
  }
}
```

---

## (b) Per-cell notes (only nuanced or contested cells)

### Cross-cutting sources
- Catechism of the Catholic Church (CCC), Vatican: https://www.vatican.va/archive/ENG0015/_INDEX.HTM
- Thirty-Nine Articles (Church of England): https://www.churchofengland.org/prayer-and-worship/worship-texts-and-resources/book-common-prayer/articles-religion
- Book of Concord (Lutheran): https://bookofconcord.org/
- Westminster Confession of Faith: https://www.opc.org/wcf.html
- Second Helvetic Confession: https://www.ccel.org/creeds/helvetic.htm
- UMC Articles of Religion: https://www.umc.org/en/content/articles-of-religion
- Baptist Faith & Message 2000: https://bfm.sbc.net/bfm2000/
- AG Statement of Fundamental Truths and position papers: https://ag.org/Beliefs/Statement-of-Fundamental-Truths , https://ag.org/Beliefs/Position-Papers
- Confession of Faith in a Mennonite Perspective (1995): https://www.mennoniteusa.org/who-are-mennonites/what-we-believe/confession-of-faith/
- Barclay, *Apology for the True Christian Divinity* (1676): https://www.qhpress.org/texts/barclay/apology/index.html
- SDA 28 Fundamental Beliefs: https://www.adventist.org/beliefs/
- LDS Articles of Faith: https://www.churchofjesuschrist.org/study/scriptures/pgp/a-of-f/1
- JW beliefs FAQ: https://www.jw.org/en/jehovahs-witnesses/faq/jehovah-witness-beliefs/
- UPCI beliefs: https://www.upci.org/about/our-beliefs
- OrthodoxWiki, Ecumenical Councils: https://orthodoxwiki.org/Ecumenical_Councils

### Catholic
- **unconditional_election 0.25 yes.** Catholic teaching rejects double predestination to damnation. But the Thomist/Báñezian school, which holds predestination to glory *ante praevisa merita*, is a permitted opinion alongside Molinism (the 1607 *De Auxiliis* controversy was left unresolved). [MED] https://www.newadvent.org/cathen/12378a.htm
- **miraculous_gifts 0.5.** Charisms are affirmed (CCC 799-801), and the Catholic Charismatic Renewal (CHARIS) is officially recognized, but tongues are not "normal" parish practice. [MED]
- **entire_sanctification 0.25 yes.** Trent (Sess. 6, can. 23) says no one can avoid all venial sin for life without a special privilege. Saints show heroic holiness, but this is not Wesleyan perfection. [HIGH]
- **inherited_guilt 1.** Trent Sess. 5 speaks of the *reatus* (guilt) of original sin. CCC 404-405 adds nuance: original sin is "contracted, not committed" and "does not have the character of a personal fault." [HIGH]
- **women_ordination 0.** *Ordinatio Sacerdotalis* (1994) rules out ordaining women as priests. The study of women deacons is separate and still unresolved. https://www.vatican.va/content/john-paul-ii/en/apost_letters/1994/documents/hf_jp-ii_apl_19940522_ordinatio-sacerdotalis.html [HIGH]

### Eastern Orthodox
- **councils seven.** Some Orthodox theologians (e.g., Fr. John Romanides) count Constantinople 879-880 and the Palamite councils of 1341-1351 as 8th and 9th ecumenical councils. This is not universally formalized. https://orthodoxwiki.org/Ecumenical_Councils [MED]
- **eucharist transub 0.25.** The Synod of Jerusalem (1672, Confession of Dositheus) used *metousiosis* (transubstantiation). Modern Orthodox theology prefers "change" (*metabole*) and declines to define how it happens. [MED]
- **inherited_guilt 0.25 yes.** The dominant modern Orthodox view is "ancestral sin": people inherit mortality and corruption, not personal guilt. Some older Orthodox catechisms (e.g., Peter Mogila, 1640) use more Latin language. https://orthodoxwiki.org/Ancestral_sin [MED]
- **instruments 0.25 yes.** The tradition is unaccompanied chant. Organs exist in some Greek (and a few Antiochian) parishes in America. https://orthodoxwiki.org/Organ , https://www.oca.org/questions/parishlife/musical-instruments [HIGH]
- **pacifism 0.25 yes.** Clergy may not shed blood. St Basil's Canon 13 advised a penitential abstention from communion for soldiers who killed in war, but the Church does not mandate refusing military service. [MED]
- **women_ordination.** In 2017 the Patriarchate of Alexandria "consecrated" deaconesses in Africa. Women priests: no. [HIGH]
- **entire_sanctification 0.25.** Theosis is a lifelong and eternal ascent, not a datable "second blessing." The overlap with the option is partial. [MED]

### Oriental Orthodox
- **sabbath 0.25 yes.** The Ethiopian Orthodox Tewahedo Church keeps Saturday as a "Little Sabbath" (*Qedamit Sanbat*) alongside the Sunday Sabbath. Saturday is honored, but this is not an Adventist-style requirement. Coptic, Armenian, and Syriac churches do not require it. [MED]
- **instruments 0.75 yes.** Ethiopians use the *kebero* drum and the *tsenatsel* sistrum. Copts use cymbals and the triangle. Armenians use the organ in many parishes. Syriac Orthodox are mostly unaccompanied. [MED]
- **inherited_guilt 0.5.** Coptic teaching under Pope Shenouda III used inherited-sin language (infants are baptized "for remission of sins"). Others are closer to the Greek "ancestral sin" view. There is no single OO statement. [LOW]
- **icons 1.** Armenian tradition historically used icons less than the Byzantine church, but veneration is accepted. [MED]

### Assyrian Church of the East (ACOE) [LOW overall: thin English-language official sources]
- **councils two.** The ACOE accepts Nicaea (325) and Constantinople I (381) and rejects Ephesus (431) and later councils. It also holds its own synods (Synodicon Orientale). [HIGH]
- **theotokos 0.5.** The ACOE's own liturgy uses "Mother of Christ" (*Christotokos*) and avoids "Mother of God." In the 1994 Common Christological Declaration with Rome, both sides "recognize the legitimacy and rightness" of each other's expressions. So the term is accepted as legitimate for others but not used by the ACOE itself. https://www.vatican.va/content/john-paul-ii/en/speeches/1994/november/documents/hf_jp-ii_spe_19941111_dichiarazione-cristologica.html ; https://bethkokheh.assyrianchurch.org/wp-content/uploads/2022/09/The-titles-of-the-Virgin-Mary-1.pdf [HIGH on the facts, MED on the score]
- **icons 0.25 yes.** In practice ACOE churches are largely aniconic: the cross is the central object of veneration. Church-affiliated writers argue that icons were used historically and were lost under Islamic rule. Some modern churches have images. https://bethkokheh.assyrianchurch.org/wp-content/uploads/2022/12/Icons-in-the-Church-of-the-East.pdf [LOW]
- **saints_intercession 0.75.** The liturgy commemorates Mary and the saints and asks for their prayers (memorials, *dukhrana* feasts). One secondary source says the saints are "examples" only, which conflicts with the liturgy; I weighted the liturgical practice. [LOW]
- **perpetual_virginity 0.75.** East Syriac Fathers (Ephrem, Narsai, Giwargis Warda) affirm it. I found no standalone modern official ACOE statement. https://bethkokheh.assyrianchurch.org/wp-content/uploads/2017/01/Typology-of-Mary-in-the-Writings-of-East-Syriac-Fathers.pdf [LOW]
- **afterlife sleep 0.25.** The East Syriac tradition (Ephrem, Narsai, and later Babai) contains a "sleep of souls" strand: souls rest without full activity until the resurrection. The ACOE also prays for the dead. So I scored intermediate 0.75 and sleep 0.25. https://en.wikipedia.org/wiki/Intermediate_state_(Christianity) [LOW]
- **instruments 0.5.** The Qurbana is traditionally unaccompanied East Syriac chant. I could not find an official rule; diaspora practice varies. [LOW]
- **inherited_guilt 0.25 yes.** The Antiochene/Theodoran anthropology stresses mortality more than inherited guilt. [LOW]

### Anglican
- **authority.** Article 6 teaches the sufficiency of Scripture. Hooker's "Scripture, tradition, reason" makes Anglicanism *prima scriptura* in practice, and Anglo-Catholics weight tradition more heavily. [MED]
- **councils.** Article 21 says general councils "may err." The 1559 Act of Supremacy treats the first four councils as a test of heresy. Anglo-Catholics accept all seven. [HIGH]
- **eucharist.** Article 28 rejects transubstantiation and teaches receiving "after an heavenly and spiritual manner." Anglo-Catholics hold an objective real presence, sometimes in near-Catholic terms. Low-church evangelicals lean memorial. [HIGH/MED]
- **baptismal_regeneration 0.75.** The 1662 BCP baptismal rite says "seeing now... that this child is regenerate." Evangelical Anglicans read this "charitably" or sacramentally rather than as automatic (see the Gorham Judgment of 1850). [MED]
- **unconditional_election 0.5.** Article 17 affirms predestination to life in Augustinian language. It is read in both Calvinist and Arminian ways, and the Lambeth Articles of 1595 were never authorized. [MED]
- **lose_salvation 0.75 yes.** Article 16: "After we have received the Holy Ghost, we may depart from grace given." [HIGH]
- **women_ordination 0.75.** Most provinces ordain women priests (Church of England priests since 1994, bishops since 2014). Sarah Mullally, the first woman Archbishop of Canterbury, was named in October 2025. GAFCON responded by repudiating Canterbury's leadership and announcing a rival "Global Anglican Communion." Several provinces (e.g., Nigeria) and the Diocese of Sydney do not ordain women priests. https://www.christianitytoday.com/2025/10/anglican-communion-gafcon-break-canterbury-archbishop/ [HIGH]
- **saints_intercession / icons / perpetual_virginity / purgatory.** Article 22 condemns the "Romish doctrine" of purgatory, the worshipping of images, and the invocation of saints. Anglo-Catholics practice all of these. Perpetual virginity is not defined. [HIGH on the text, MED on the score]

### Lutheran
- **eucharist union 1.** Formula of Concord (FC) SD VII teaches sacramental union, "in, with and under." "Consubstantiation" is a label Lutherans themselves reject. [HIGH]
- **unconditional_election 0.75.** FC XI teaches that election to salvation is solely by grace and not based on foreseen faith. But it is single, not double, predestination, and grace can be resisted and lost. This sits between the Calvinist and Arminian positions, and the yes/no options fit it poorly. [HIGH on the text, MED on the fit]
- **apostolic_succession 0.25.** The Church of Sweden, the Church of Finland and other Porvoo churches keep the historic episcopate. The ELCA adopted it for ecumenical reasons (*Called to Common Mission*, 2001) but not as necessary for valid ministry. The LCMS rejects it as necessary. [HIGH]
- **women_ordination 0.75.** The majority of LWF member churches ordain women (ELCA since 1970, Nordic churches). The LCMS, WELS, and some African and Latvian churches do not. **Split note:** if the app splits Lutherans, use LCMS = no 1 and ELCA = yes 1. [HIGH]
- **perpetual_virginity 0.5.** The Smalcald Articles (I.4, Latin *semper virgine*) and FC SD VIII.24 ("remained a virgin") affirm it, as did Luther. Modern Lutherans treat it as a pious opinion. [MED]
- **icons 0.25.** Lutherans kept crucifixes, altarpieces, and images for teaching, but do not venerate them. [MED]
- **afterlife.** Luther sometimes described death as "sleep," and Apology XXIV does not forbid prayer for the dead. Confessional teaching is that believers are with Christ. [MED]
- **governance.** Nordic and German churches have bishops. The LCMS is synodical, with strong congregational authority. The ELCA has bishops but synodical structures. [MED]
- **LCMS vs ELCA, other splits.** Biblical inerrancy (the LCMS affirms it), women's ordination, and full communion with Reformed and Episcopal churches (ELCA yes, LCMS no). There are no differences on the sacraments themselves.

### Reformed / Presbyterian
- **baptismal_regeneration 0.25 yes.** WCF 28.5-6: grace is "not so inseparably annexed" to baptism, but is "really exhibited and conferred... in his appointed time." That is "sign and seal" language, not automatic regeneration. [HIGH]
- **women_ordination 0.5.** The PC(USA), the Church of Scotland, and most World Communion of Reformed Churches (WCRC) members ordain women. The PCA, OPC, URCNA and many Dutch-Reformed churches do not. [HIGH]
- **perpetual_virginity 0.25.** The Second Helvetic Confession, ch. 11, says "ever virgin Mary," and Zwingli and Bullinger held the view. Most modern Reformed Christians reject it or are silent. [MED]
- **theotokos 0.5.** The Reformed accept the Christology of Ephesus. Calvin preferred "mother of our Lord" and was uneasy with "Mother of God" in popular use. [MED]
- **instruments 0.75.** Exclusive-psalmody, a cappella bodies exist (the RPCNA, the Free Church of Scotland historically) under the "regulative principle." [HIGH]
- **sabbath.** The WCF teaches a *Sunday* "Christian Sabbath" (21.7). The answer is still "no" to a Saturday Sabbath. [HIGH]
- **miraculous_gifts.** Traditional Reformed teaching is cessationist (WCF 1.1, "former ways... now ceased"). There are "Reformed charismatics" (e.g., Sovereign Grace). [MED]

### Methodist / Wesleyan
- **eucharist.** Articles XVIII-XIX reject transubstantiation. The UMC document *This Holy Mystery* (2004) affirms "real presence" without defining how. [HIGH]
- **baptismal_regeneration 0.5.** Wesley held a form of baptismal regeneration for infants. The UMC's *By Water and the Spirit* (1996) is deliberately ambiguous. [MED]
- **entire_sanctification 1.** This is the Wesleyan distinctive. UMC ordinands are still asked "Do you expect to be made perfect in love in this life?" (historic Wesleyan ordination questions, retained in the Book of Discipline). It is de-emphasized in practice in the mainline. [HIGH]
- **afterlife intermediate 0.5.** Wesley taught an intermediate "paradise," separate from final heaven, and occasionally prayed for the dead. Article XIV rejects purgatory. [MED]
- **governance.** The UMC (and the Global Methodist Church, formed 2022) has bishops within a connectional conference structure. British Methodism has no bishops. Methodist bishops are not in historic succession. [HIGH]
- **pacifism 0.25.** The UMC Social Principles support both conscientious objectors and those who serve. [MED]
- **perpetual_virginity 0.25.** Wesley affirmed it in his 1749 *Letter to a Roman Catholic*. It is rarely taught now. [MED]
- **UMC split.** In 2022-2024 about 7,600 US congregations left, many joining the Global Methodist Church, mainly over sexuality. Core doctrine is shared.

### Baptist
- **unconditional_election 0.5.** The SBC is split between Calvinist ("Founders"; 1689 London Baptist Confession) and non-Calvinist wings. BF&M 2000 Art. V is compatible with both. General and Free Will Baptists are Arminian. [MED]
- **lose_salvation 0.25 yes.** BF&M: true believers "will never fall away." Free Will Baptists teach that apostasy is possible. [HIGH]
- **women_ordination 0.25.** BF&M 2000: "the office of pastor is limited to men." In 2023 the SBC expelled Saddleback Church over this. The "Law Amendment" got 60.74% in June 2025, short of the 2/3 needed. BWA members such as American Baptist Churches USA and the CBF ordain women. https://www.christianitytoday.com/2025/06/southern-baptist-convention-sbc-vote-women-pastors-erlc/ [HIGH]
- **inherited_guilt 0.5.** BF&M 2000 deliberately says people "inherit a nature and an environment inclined toward sin" (not guilt). The 1689 LBCF imputes guilt. [HIGH]
- **eucharist.** BF&M calls the Lord's Supper "a symbolic act" that memorializes. 1689 Reformed Baptists hold a Calvinist spiritual presence. [HIGH]

### Pentecostal (Trinitarian, AG as reference)
- **lose_salvation 1.** AG position paper "The Security of the Believer" (2017) says a believer can forfeit salvation through persistent unbelief. [HIGH]
- **women_ordination 0.75.** The AG has credentialed women since 1935 and its paper "The Role of Women in Ministry" affirms them. COGIC and some other Pentecostal bodies do not allow women senior pastors. [HIGH]
- **entire_sanctification 0.25.** The AG ("finished work," Fundamental Truth #9) teaches progressive sanctification. Holiness-Pentecostal bodies (Church of God Cleveland, IPHC, COGIC) teach a second definite work. [HIGH]
- **pacifism 0.25.** The AG General Council adopted a pacifist resolution in 1917 and changed it in 1967 to allow members to follow conscience. [HIGH]
- **faith_alone 0.75.** The AG teaches salvation "through repentance toward God and faith toward the Lord Jesus Christ." It is broadly Protestant but Arminian. [MED]
- **inherited_guilt 0.25.** Not defined in the Fundamental Truths. Most AG teaching holds that infants are safe until an age of accountability. [LOW]

### Non-denominational Evangelical (composite; inherently [MED])
- There is no governing body. Scores reflect typical US/global independent evangelical churches: believer's baptism, memorial supper, eternal security, and male senior pastors as the majority practice. **miraculous_gifts 0.5** reflects the large charismatic stream (Hillsong, Bethel, Vineyard) next to cessationist Bible churches. **governance:** most are congregational or elder-led. Some "apostolic network" churches function closer to a single-leader model.

### Anabaptist
- **pacifism 1.** Schleitheim (1527) Art. 6 and Dordrecht (1632) Art. 14 teach nonresistance. In practice some Mennonites serve in the military; Amish and Hutterites essentially never do. [HIGH]
- **faith_alone 0.5.** Anabaptists affirm salvation by grace through faith, but insist that faith is inseparable from obedient discipleship (*Nachfolge*). They historically criticized Lutheran "cheap" sola fide. [MED]
- **women_ordination 0.5.** Mennonite Church USA (since 1973), Mennonite Church Canada and others ordain women. Amish, Hutterites, Old Order and conservative Mennonites do not. [HIGH]
- **instruments 0.5.** The Amish, Old Order and many conservative Mennonites sing a cappella (the *Ausbund*). Mainstream Mennonites use instruments, though four-part a cappella singing is still prized. [HIGH]
- **afterlife sleep 0.25.** Some early Anabaptists (e.g., in Michael Sattler's circle) held soul sleep. Modern confessions teach that believers are with Christ. [LOW]
- **governance.** Congregational, with Amish and conservative Mennonite "bishops" who are local and elected by lot. There is no apostolic succession. [HIGH]
- **Sacraments.** Many groups practice foot washing as an ordinance (Dordrecht Art. 11; CMP 1995 Art. 13). [HIGH]

### Quaker
- **trinity 0.5.** Barclay and evangelical Friends (Friends United Meeting, Evangelical Friends Church International) are Trinitarian. Liberal unprogrammed Friends (e.g., Friends General Conference, Britain Yearly Meeting) are non-creedal and include universalist and nontheist Friends. **Major internal split:** most of the world's Quakers belong to programmed or evangelical yearly meetings, the largest being in Kenya. Liberal unprogrammed Friends dominate in Britain and parts of the US. [HIGH]
- **authority spirit 1, scripture 0.25.** Barclay's Proposition 3: Scripture is "a secondary rule, subordinate to the Spirit." Evangelical Friends hold a higher view of Scripture. [HIGH]
- **women_ordination 1.** Quakers ordain no one, but women have been recorded or released as ministers since the 1650s (e.g., Margaret Fell's *Women's Speaking Justified*, 1666). The question fits awkwardly, but the spirit of it is clearly "yes." [HIGH]
- **entire_sanctification 0.75.** Barclay's Proposition 8 teaches that perfection (freedom from actual sinning) is possible. Evangelical Friends merged with the Holiness movement. [HIGH]
- **faith_alone 0.25.** Barclay's Proposition 7 rejects a purely forensic justification; justification is by Christ "inwardly revealed." [HIGH]
- **instruments 0.5.** Early Friends rejected music in worship. Unprogrammed meetings are silent, while programmed Friends churches use music and instruments. [HIGH]
- **pacifism 1.** The Peace Testimony (Declaration to Charles II, 1660). Some Friends served in WWII; it is a testimony rather than a disciplinary rule today. [HIGH]

### Restorationist (Churches of Christ, a cappella)
- **No creed.** Autonomous congregations; doctrine is "typical" rather than official. [MED overall]
- **trinity 1.** Churches of Christ affirm the "Godhead" (three persons, one God) but avoid creedal vocabulary. Barton W. Stone himself had anti-Trinitarian (semi-Arian) leanings. https://www.britannica.com/topic/Churches-of-Christ [MED]
- **baptismal_regeneration 0.75.** Immersion is "for the remission of sins" (Acts 2:38) and necessary for salvation. Churches of Christ insist it is not a work and must be preceded by faith and repentance. [HIGH]
- **afterlife 0.5/0.5.** The common teaching is a conscious intermediate state in Hades (paradise or torment) before final heaven. There are no prayers for the dead, so this only partly fits the "intermediate" option. [MED]
- **pacifism 0.25.** David Lipscomb and many 19th-century leaders were pacifist. That is now a minority view. [HIGH]
- **instruments no 1.** This is the defining practice; the 1906 US census recognized the split with the instrumental Christian Church / Disciples. [HIGH]

### Seventh-day Adventist
- **trinity 1.** Fundamental Belief (FB) #2 (adopted 1980). Many 19th-century pioneers (James White, Uriah Smith) were anti-Trinitarian, and a small dissident anti-Trinitarian movement persists. [HIGH]
- **authority prophet 0.5.** FB #18 calls Ellen G. White's writings "a continuing and authoritative source of truth" but subordinate to Scripture, "the standard by which all teaching... must be tested." [HIGH]
- **women_ordination 0.25.** In 2015 the General Conference voted against letting divisions ordain women (977 for, 1,381 against). Some unions (e.g., Pacific, Columbia) ordain women anyway, and women serve as "commissioned" pastors. [HIGH]
- **pacifism 0.5.** The historic position is noncombatancy (members serve as medics, as Desmond Doss did). The church advocates but does not require it. [HIGH]
- **afterlife sleep 1.** FB #26: death is an unconscious state until the resurrection. The wicked are ultimately annihilated (conditional immortality). [HIGH]
- **entire_sanctification 0.25.** "Last Generation Theology" (character perfection before Christ returns) is a contested minority view. [MED]
- **governance elders 1.** Representative and conference-based (local church, conference, union, division, General Conference). This is presbyterian-style; there are no bishops. [HIGH]

### Latter-day Saints
- **trinity separate 1.** Doctrine and Covenants 130:22: the Father and Son have bodies of flesh and bone, and the Godhead is three separate beings united in purpose. [HIGH]
- **apostolic_succession 0.75 yes.** Priesthood authority is required, but the Church holds that it was *restored* by angelic ordination (John the Baptist; Peter, James and John), not passed down through history. The "yes" captures "valid ministry requires a line of authority." [HIGH on the facts, MED on the fit]
- **baptismal_regeneration 0.75.** Article of Faith 4: baptism by immersion "for the remission of sins," followed by the gift of the Holy Ghost. Children are not baptized before age 8 (Moroni 8). [HIGH]
- **theotokos 0.25.** The 1830 Book of Mormon (1 Nephi 11:18) read "the mother of God, after the manner of the flesh." It was changed to "mother of the Son of God" in 1837. The term is not used today. [HIGH]
- **afterlife intermediate 1.** The spirit world (paradise / spirit prison) comes before the resurrection, along with vicarious ordinances for the dead. This is not purgatory, but there is post-mortem progression. [HIGH]
- **entire_sanctification 0.25.** "Be perfected in Christ" (Moroni 10:32). Full perfection is eventual and eternal (exaltation), not expected in this life. [MED]
- **women_ordination 0.** Women are not ordained to priesthood offices. Since 2019 they serve as temple-ordinance witnesses, and leaders teach that women exercise priesthood *authority* in callings. [HIGH]

### Jehovah's Witnesses
- **authority prophet 1.** The Governing Body is the "faithful and discreet slave" (since the 2012 reinterpretation). Witnesses reject the label "prophet" and claim to be Bible-only, but in practice the Governing Body's interpretation is binding. [HIGH]
- **eucharist memorial 1.** Observed once a year at the Memorial (Nisan 14). Only the "anointed" partake: 24,576 of about 20.6 million attendees in 2025. [HIGH]
- **afterlife sleep 1, heaven 0.25.** The dead are non-existent until the resurrection. The 144,000 "anointed" are resurrected to heaven at death (taught as occurring since 1918). [HIGH]
- **inherited_guilt 0.75.** Witnesses teach that all humans inherit sin and death from Adam (Rom 5:12), which the ransom cancels. [MED]
- **instruments yes.** Kingdom Hall singing uses recorded orchestral accompaniment. [HIGH]

### Oneness Pentecostal (UPCI)
- **baptismal_regeneration 1.** Repentance, baptism by immersion "in the name of Jesus Christ for the remission of sins," and Spirit baptism with tongues together make up the new birth (Acts 2:38). Many in the UPCI hold all three necessary for salvation. https://www.upci.org/about/our-beliefs [HIGH]
- **women_ordination 0.75.** The UPCI licenses and ordains women and allows them to pastor. Women make up under 4% of licensed ministers, and some district offices are restricted to men. https://apostolic.edu/women-in-ministry [MED]
- **pacifism 0.25.** The 1952 article barred combatant service. The 2012 revision only "honor[s] the right of our members to serve as conscientious objectors." Text reproduced at https://spiritualabuse.org/aof.html (a critical site, but the wording is verbatim). [MED]
- **eucharist memorial 1.** Bread and fruit of the vine are "emblems." Foot washing is also a "divine institution." [HIGH]
- **theotokos 0.25.** Oneness theology says Jesus *is* God, but Mary is the mother of the Son's humanity only; UPCI writers (e.g., D. K. Bernard) reject "Mother of God." [MED]
- **inherited_guilt 0.25.** Not defined in official texts. Most teaching holds that children are innocent until accountable. [LOW]

---

## (c) Denomination facts

Adherent counts are self-reported by each body unless noted. They are not comparable across bodies: some count members, some baptized people, and some all adherents.

| id | Approx. adherents (source, year) | Founding / origin | Key confessional documents | Sacraments / ordinances |
|----|----|----|----|----|
| catholic | ~1.422 billion baptized (Annuario Pontificio 2026, data end-2024) https://www.vaticannews.va/en/vatican-city/news/2026-03/new-data-from-annuario-pontificio-2026-shows-catholics-growing.print.html | Claims continuity from Christ and the apostles (c. 30-33 AD), with Peter as first pope. Distinct "Roman" identity from the 1054 schism. | Scripture and Tradition; decrees of 21 councils (esp. Trent, Vatican I, Vatican II); Catechism of the Catholic Church (1992/1997) | 7 |
| orthodox | ~220 million (estimate). Pew 2017 gives ~260 million for **all** Orthodox, including Oriental. https://www.pewresearch.org/religion/2017/11/08/orthodox-christianity-in-the-21st-century/ [MED: the EO/OO split is an estimate] | Same apostolic claim; East-West schism 1054 (mutual excommunications, lifted 1965) | Nicene Creed; 7 councils; canons (Pedalion); Confession of Dositheus / Synod of Jerusalem 1672; Philaret's Catechism | 7 "Holy Mysteries" (the number is not dogmatically fixed) |
| oriental | ~60 million (Ethiopian Tewahedo ~36 M, Coptic ~10-15 M, Armenian ~6-9 M, Syriac ~2-5 M incl. India, Eritrean, Malankara) [MED estimate, based on Pew 2017 and church figures] | Separation over the Council of Chalcedon (451), as "Miaphysites" (they reject the label "Monophysite") | Nicene Creed; first 3 councils; Cyril of Alexandria, Dioscorus, Severus of Antioch; Ethiopian *Fetha Nagast* | 7 |
| assyrian | ~300,000-400,000 (Pro Oriente ~400k; CNEWA ~300k; Œuvre d'Orient ~360k). The Ancient Church of the East split off in 1968 (~100k). https://pro-oriente.at/en/easternchurches/assyrian-church-of-the-east-introduction/assyrian-church-of-the-east [MED] | Church of the Persian Empire. The Synod of Isaac (410) adopted Nicaea; the Synod of Dadisho (424) asserted independence from the "Western Fathers"; it did not receive Ephesus (431) | Nicene Creed (own recension); Synodicon Orientale; Theodore of Mopsuestia; Mar Abdisho's *Marganitha* (1298) and Nomocanon; 1994 Common Christological Declaration | 7 "holy mysteries" in Mar Abdisho's list: priesthood, baptism, holy oil, Eucharist, absolution, Holy Leaven (*Malka*), sign of the cross. Marriage is not on this list. [MED] |
| anglican | ~85 million is the commonly cited figure; there is no official count, and active membership is much lower. The 2025 GAFCON breakaway makes "Communion" membership fluid. https://www.christianitytoday.com/2025/10/anglican-communion-gafcon-break-canterbury-archbishop/ [MED] | Act of Supremacy 1534 (Henry VIII); Elizabethan Settlement 1559; Anglican Communion formalized at the first Lambeth Conference (1867) | Book of Common Prayer (1662); Thirty-Nine Articles (1571); Ordinal; Books of Homilies; Lambeth Quadrilateral (1888) | 2 "sacraments of the Gospel" (Baptism, Eucharist) plus 5 "commonly called sacraments" (Art. 25) |
| lutheran | ~78.4 million in LWF member churches (LWF 2023 statistics) plus non-LWF bodies (LCMS ~1.7-1.8 M, WELS, etc.). https://lutheranworld.org/sites/default/files/2024-06/LWF%20Membership%20Statistics%202023%20-%20EN.pdf | Luther's 95 Theses (31 Oct 1517); Augsburg Confession (1530) | Book of Concord (1580): 3 ecumenical creeds, Augsburg Confession, Apology, Smalcald Articles, Treatise, Small & Large Catechisms, Formula of Concord (1577) | 2 (Baptism, Lord's Supper). Apology XIII also counts Absolution, making 3. |
| reformed | ~100 million claimed by the World Communion of Reformed Churches (WCRC). Estimates range from ~60 to 150 M depending on whether united churches are counted. [LOW] | Zwingli in Zurich (1519-23); Calvin in Geneva (1536/1541); Knox and the Scottish Reformation (1560) | Westminster Standards (1646-47); Three Forms of Unity (Belgic 1561, Heidelberg 1563, Dort 1619); Second Helvetic (1566); PC(USA) Book of Confessions (incl. Barmen 1934, Belhar) | 2 |
| methodist | ~40 million members per one World Methodist Council tabulation; the WMC itself often cites "80 million" including adherents. [LOW: wide range] https://en.wikipedia.org/wiki/World_Methodist_Council | John Wesley's Aldersgate experience (1738); Methodist Episcopal Church organized at the Christmas Conference, Baltimore (1784) | 25 Articles of Religion (Wesley's abridgment of the 39); Wesley's Standard Sermons and *Notes on the NT*; General Rules; Book of Discipline | 2 |
| baptist | ~53.9 million baptized members in the Baptist World Alliance (June 2025). The SBC is not a BWA member since 2004 and reported 12,331,954 members in 2025. https://baptistworld.org/news/bwa-welcomes-17-new-members/ ; https://www.baptistpress.com/resource-library/news/southern-baptists-see-attendance-baptism-gains-amid-membership-declines/ | John Smyth and Thomas Helwys, Amsterdam (1609); SBC founded 1845; BWA founded 1905 | Baptist Faith & Message (1925/1963/2000); Second London Baptist Confession (1689); New Hampshire Confession (1833) | 2 ordinances |
| pentecostal | Assemblies of God World Fellowship ~88.9 million (Influence magazine 2025); all classical Pentecostals ~ several hundred million [MED] https://influencemagazine.com/en/Practice/Better-Together-2025 | Topeka 1901 (Parham); Azusa Street Revival, Los Angeles (1906); Assemblies of God founded at Hot Springs, Arkansas (1914) | AG Statement of Fundamental Truths (1916, revised); AG position papers | 2 ordinances (Baptism, Lord's Supper) |
| nondenom | There is no reliable global figure. US Religion Census 2020 counted roughly 44,000 nondenominational congregations with about 12-13 million adherents (verify). Global "independent" Christians are ~400 million in the World Christian Database / Gordon-Conwell classification, but that category is much broader. [LOW: definitional] | No single founding. Grew from the 1960s-70s (Jesus Movement, Calvary Chapel 1965) and the megachurch movement | Individual church statements of faith; often modeled on the National Association of Evangelicals (NAE) statement, the Lausanne Covenant (1974), and the Chicago Statement on Inerrancy (1978) | 2 ordinances |
| anabaptist | Mennonite World Conference ~1.44-1.47 million baptized (2025); wider Anabaptist family ~2.1 M; Amish (not MWC) ~411,000 incl. children (Young Center 2025); Hutterites ~50,000. https://mwc-cmm.org/membership-map-and-statistics ; https://groups.etown.edu/amishstudies/population-2025/ | First adult baptisms, Zurich (21 Jan 1525: Grebel, Manz, Blaurock); Schleitheim (1527); Menno Simons (1536); Hutterites (1528/1533); Amish split under Jakob Ammann (1693) | Schleitheim Confession (1527); Dordrecht Confession (1632); Confession of Faith in a Mennonite Perspective (1995); MWC Shared Convictions (2006); *Ausbund* hymnal | 2 ordinances; many add foot washing (3); some also practice the holy kiss |
| quaker | ~377,000 adults (FWCC map, 2017); FWCC informally says ~400,000 https://www.friendsjournal.org/new-worldwide-quaker-released/ | George Fox, England (c. 1647-1652; Pendle Hill and Firbank Fell, 1652) | Barclay's *Apology* (1676); Richmond Declaration (1887, evangelical branch); yearly-meeting "Faith & Practice" books | 0 outward sacraments; baptism and communion are understood as inward and spiritual |
| restorationist | ~1.5-2 million worldwide (est.); US ~1.0-1.1 million in ~11,500 congregations (*Churches of Christ in the United States* directory, c. 2018-2020) [LOW: no central body] | Barton Stone (Cane Ridge 1801; *Last Will and Testament of the Springfield Presbytery*, 1804) and Thomas and Alexander Campbell (*Declaration and Address*, 1809); merged 1832; a cappella Churches of Christ recognized as separate in the 1906 US census | No creed by principle. Historic texts: *Declaration and Address* (1809), *Last Will and Testament* (1804) | 2 (immersion for remission of sins; weekly Lord's Supper). They avoid the word "sacrament." |
| adventist | 24,372,139 members at year-end 2025 (GC Office of Archives, Statistics and Research, advance release 2026) https://adventistatlas.org/ | Millerite "Great Disappointment" (22 Oct 1844); General Conference organized in Battle Creek (21 May 1863) | 28 Fundamental Beliefs (1980; revised 2005, 2015); writings of Ellen G. White | 3 ordinances: Baptism, Lord's Supper, foot washing ("Ordinance of Humility," held with the Supper) |
| lds | 17,887,212 members at year-end 2025 (2025 Statistical Report, April 2026) https://newsroom.churchofjesuschrist.org/article/2025-statistical-report | Joseph Smith's First Vision (1820); Church organized in Fayette, New York (6 April 1830) | Standard Works: Bible (KJV), Book of Mormon, Doctrine & Covenants, Pearl of Great Price; Articles of Faith; Family Proclamation (1995) | "Ordinances": the saving ordinances are baptism, confirmation, Melchizedek priesthood ordination (men), temple endowment, and sealing; plus the weekly "sacrament" (bread and water) |
| jw | 9,205,326 peak publishers; 20,635,015 Memorial attendance (2025 Service Year Report) https://www.jw.org/en/library/books/2025-Service-Year-Report-of-Jehovahs-Witnesses-Worldwide/ | C. T. Russell's Bible Student movement (1870s); *Zion's Watch Tower* (1879); Watch Tower Society (1881/1884); name "Jehovah's Witnesses" adopted 1931 (Rutherford) | New World Translation; Watchtower publications; *Enjoy Life Forever!* (2021) | 2 (Baptism; annual Memorial) |
| oneness | UPCI ~6.1 million constituents (2025, self-reported). Outside estimates are lower. All Oneness Pentecostals ~20-25 million [LOW] https://en.wikipedia.org/wiki/United_Pentecostal_Church_International | "New Issue" at the Arroyo Seco camp meeting (1913); split from the AG (1916); UPC formed by merger (1945) | UPCI Articles of Faith and "Fundamental Doctrine" (in the UPCI Manual) | Baptism in Jesus' name, Lord's Supper, foot washing (3 ordinances) |

---

## (d) The 21 ecumenical councils (Catholic numbering)

Legend for "Accepted by": **CC** = Catholic Church. **EO** = Eastern Orthodox. **OO** = Oriental Orthodox. **ACOE** = Assyrian Church of the East. **Prot** = mainstream Protestants, who accept the *doctrinal* definitions as consistent with Scripture but not as infallible (Anglicans formally, via the 1559 Act and Homilies, the first four; Lutherans and Reformed, through their confessions, the Christology of the first four or six; Anglo-Catholics and some Lutherans all seven). **Old Catholics** accept the first seven (Utrecht 1889) and reject Vatican I.

| # | Council | Year | Place | Main decisions | Accepted by |
|---|---------|------|-------|----------------|-------------|
| 1 | Nicaea I | 325 | Nicaea (İznik) | Condemned Arius; the Son is *homoousios* (consubstantial) with the Father; original Nicene Creed; date of Easter; canons on Meletian schism and episcopal sees | CC, EO, OO, ACOE, Prot |
| 2 | Constantinople I | 381 | Constantinople | Divinity of the Holy Spirit; Niceno-Constantinopolitan Creed; condemned Apollinarianism and Macedonianism; canon 3 gave Constantinople rank after Rome | CC, EO, OO, ACOE, Prot |
| 3 | Ephesus | 431 | Ephesus | Condemned Nestorius; Mary is *Theotokos*; Cyril's Christology; condemned Pelagianism; forbade new creeds (canon 7) | CC, EO, OO, Prot. **Rejected by ACOE.** |
| 4 | Chalcedon | 451 | Chalcedon | Christ in two natures "without confusion, change, division, separation"; Tome of Leo; deposed Dioscorus; canon 28 (Constantinople's privileges, which Rome rejected) | CC, EO, Prot. **Rejected by OO** (the main split). ACOE does not formally receive it. |
| 5 | Constantinople II | 553 | Constantinople | Condemned the "Three Chapters" (Theodore of Mopsuestia, writings of Theodoret and Ibas); Neo-Chalcedonian reading; condemned Origenist propositions (disputed whether formally) | CC, EO; Prot partially. ACOE strongly rejects it (Theodore is their doctor). |
| 6 | Constantinople III | 680-681 | Constantinople | Christ has two wills and two operations; condemned Monothelitism, including Pope Honorius I | CC, EO; Prot partially. (EO adds the Quinisext/Trullo council of 692, whose disciplinary canons Rome never fully accepted.) |
| 7 | Nicaea II | 787 | Nicaea | Restored the veneration (*proskynesis*, not *latreia*) of icons; condemned iconoclasm | CC, EO, Old Catholics, Anglo-Catholics. Most Protestants reject it on images (Anglican Art. 22; Reformed reject it outright). |
| 8 | Constantinople IV | 869-870 | Constantinople | Deposed Photius and restored Ignatius; canon 21 on patriarchal order | CC only. **EO instead accept the Council of Constantinople 879-880**, which rehabilitated Photius; some EO call that the "8th." |
| 9 | Lateran I | 1123 | Rome (Lateran) | Ratified the Concordat of Worms (end of the Investiture Controversy); disciplinary canons on simony and clerical marriage | CC only |
| 10 | Lateran II | 1139 | Rome | Ended the Anacletus II schism; declared marriages of clerics in major orders invalid; condemned Arnold of Brescia's followers | CC only |
| 11 | Lateran III | 1179 | Rome | Required a 2/3 majority of cardinals to elect a pope; condemned the Cathars; cathedral schools | CC only |
| 12 | Lateran IV | 1215 | Rome | Defined "transubstantiation" (Const. 1); annual confession and Easter communion; condemned Albigensians and Joachim of Fiore; called the Fifth Crusade; Jews to wear distinctive dress | CC only |
| 13 | Lyon I | 1245 | Lyon | Deposed Emperor Frederick II; aid for the Holy Land | CC only |
| 14 | Lyon II | 1274 | Lyon | Brief union with the Greeks; Filioque professed ("one principle"); conclave rules (*Ubi periculum*) | CC only. The union was repudiated in the East (1285). |
| 15 | Vienne | 1311-1312 | Vienne | Suppressed the Knights Templar; condemned Beghards and Beguines; the soul is the "form of the body" | CC only |
| 16 | Constance | 1414-1418 | Constance | Ended the Western Schism (election of Martin V); condemned Wyclif and Hus (Hus burned 1415); *Haec Sancta* and *Frequens* (conciliarism; only partly received by Rome) | CC (ecumenicity of some sessions disputed) |
| 17 | Basel-Ferrara-Florence(-Rome) | 1431-1449 | Basel, Ferrara, Florence, Rome | Union decrees with the Greeks (*Laetentur Caeli*, 1439: Filioque, purgatory, papal primacy), Armenians (1439), Copts (1442), and others; listed the 7 sacraments | CC (Rome recognizes only the sessions after the transfer to Ferrara). The unions were rejected in the East (formally repudiated in 1484). |
| 18 | Lateran V | 1512-1517 | Rome | Affirmed the immortality of the individual soul (against Pomponazzi); condemned the conciliarist Council of Pisa; Concordat of Bologna | CC only |
| 19 | Trent | 1545-1563 | Trent (and Bologna) | Response to the Reformation: biblical canon including the deuterocanonicals; Scripture plus Tradition; justification (Session 6); 7 sacraments; transubstantiation; Mass as sacrifice; purgatory; indulgences; seminaries | CC only |
| 20 | Vatican I | 1869-1870 | Vatican | *Dei Filius* (faith and reason); *Pastor Aeternus*: papal infallibility *ex cathedra* and universal jurisdiction | CC only. Its rejection led to the Old Catholic schism. |
| 21 | Vatican II | 1962-1965 | Vatican | *Sacrosanctum Concilium* (liturgy, vernacular); *Lumen Gentium* (Church, collegiality); *Dei Verbum*; *Gaudium et Spes*; ecumenism (*Unitatis Redintegratio*); religious liberty (*Dignitatis Humanae*); *Nostra Aetate* | CC only. Sedevacantists and some traditionalists dispute its authority. |

Sources: New Advent, "General Councils" https://www.newadvent.org/cathen/04423f.htm ; Britannica, "ecumenical council" https://www.britannica.com/topic/ecumenical-council ; OrthodoxWiki https://orthodoxwiki.org/Ecumenical_Councils ; Papal Encyclicals Online, council texts https://www.papalencyclicals.net/councils/

---

## Caveats
- Several questions are binary but map onto spectra. Lutheran election, Orthodox theosis versus "entire sanctification," Quaker "ordination," and LDS "apostolic succession" fit their yes/no options poorly. These are flagged in (b).
- The **anglican, lutheran, reformed, baptist, nondenom, anabaptist and quaker** rows average across internal splits. If the app needs sharper profiles, split them: LCMS/ELCA, PCA/PCUSA, SBC/ABCUSA, evangelical/liberal Friends, Old Order/MC USA.
- The adherent table mixes "members," "baptized," and "adherents"; do not rank denominations by these numbers without footnoting that.
- The **assyrian** row is the least well-sourced (English-language official doctrinal texts are scarce). Treat its cells marked [LOW] as provisional.
