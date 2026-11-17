# Creeds

Data: `src/data/creeds.ts`. Pages: `/creeds` (4 creed cards + 15 later confessions), `/creeds/[id]`.

## Texts
Traditional public-domain English: Apostles' & Nicene from the Book of Common Prayer (1662; Nicene includes Filioque and omits "holy"); Athanasian = excerpts of the BCP *Quicunque vult*; Chalcedon = central passage in Philip Schaff's translation. Athanasian and Chalcedon are marked `excerpt` with a `fullTextNote`. [assumption: wording reproduced from memory of the public-domain texts — spot-check against a printed BCP before treating as authoritative]

## Annotations
`{ t, note }` parts render as dotted-underline phrases; `CreedText.astro` positions a fixed tooltip above the hovered line (phrases wrap). Key notes: homoousios, "begotten not made", Filioque (Toledo 589, Rome 1014), "catholic" = universal, descent into hell, "in two natures" + the four Chalcedonian adverbs.

## Usage by tradition (as encoded)
| Creed | Used by | Not used / rejected |
|---|---|---|
| Apostles' | Catholic, Anglican, Lutheran, Reformed, Methodist; Baptist/Pentecostal/Non-denom affirm | Orthodox (agree in content, never adopted), JW, LDS |
| Nicene | All Nicene churches (Orthodox/Oriental without Filioque; Assyrian own recension) | JW, LDS, Oneness |
| Athanasian | Catholic, Anglican (BCP), Lutheran (Book of Concord), Reformed (Belgic Conf. art. 9) | Orthodox (Filioque line) |
| Chalcedonian | Catholic, Orthodox, Anglican, Lutheran, Reformed, Methodist (implicitly) | Oriental (miaphysite), Assyrian (not received) |

Council context: [[councils]].
