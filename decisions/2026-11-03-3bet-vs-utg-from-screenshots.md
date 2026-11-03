# 3-bet drill vs a UTG open: read from solver screenshots

**Date:** 2026-11-03
**Status:** read only, waiting for Noam's corrections. No drill code changed yet.

## Current state

The 3-bet drill (`src/lib/drill/preflop/threebet.ts`) uses a placeholder formula (`genStrat`). Some of its answers are clearly wrong: for example, it says to fold A6s–AKs against a UTG open from HJ, CO and BTN.

## What was read

- **Charts:** five solver charts that Noam sent one by one, each with its seat named: HJ, CO, BTN, SB and BB 3-bet vs UTG.
- **Colours:** red = 3-bet, green = call, blue = fold. The numbers in the cells are EV and were not used.
- **Method (skill `range-from-screenshots`):**
  - Each cell's split was estimated by eye to the nearest 5%, so ±5–10% on any cell.
  - The hand-by-hand reads are saved in `decisions/ranges/3bet/<seat>-vs-UTG.txt`.
  - Group answers were computed by `group-answers.ts`, using Noam's rule: 75% or more is pure, 25% or less drops out, anything in between is a mix.

## Group answers (calculator output)

3B = 3-bet.

| Group | HJ | CO | BTN | SB | BB |
|---|---|---|---|---|---|
| AA–QQ | 3B | 3B | 3B | 3B | 3B |
| JJ–77 | Mix 3B/fold 71/29 ✂ | Mix 3B/call 61/39 | Mix call/3B 73/27 ⚠ | Call ⚠ | Call |
| 66–22 | Fold | Fold ⚠ | Call ⚠ | Call ⚠ | Call |
| A6s–AKs | Mix 3B/fold 52/48 ✂ | Mix 3B/fold 59/41 ✂ | Mix 3B/call 57/43 ✂ | Mix 3B/call 58/42 ✂ | Call ⚠ ✂ |
| A2s–A5s | Mix fold/3B 55/45 ✂ | Mix fold/3B 51/49 ✂ | 3B ⚠ ✂ | Mix call/3B, 3-way ✂ | Call |
| KQs–JTs | Mix 3B/fold 67/33 ✂ | Mix 3B/call 72/28 ⚠ | Mix call/3B 71/29 ⚠ | Mix 3B/call 57/43 ✂ | Call |
| K9s Q9s J9s T9s | Fold | Fold | Mix call/fold ✂ | Mix fold/call ✂ | Call |
| AKo AQo AJo KQo | Mix 3B/fold 65/35 ✂ | Mix 3B/fold 65/35 ✂ | Mix 3B/call 70/30 ⚠ | Mix call/fold, 3-way ✂ | Call ⚠ ✂ |
| ATo KJo QJo | Fold | Fold | Fold | Fold | Call |
| KTo QTo JTo | Fold | Fold | Fold | Fold | Call |
| Suited connectors | Fold | Fold | Mix fold/call ✂ | Fold ⚠ ✂ | Mix call/3B 65/35 ✂ |
| Suited kings, queens and jacks, gappers, 54s 43s | Fold | Fold | Fold | Fold | Call |
| Offsuit aces | Fold | Fold | Fold | Fold | Fold ⚠ ✂ |
| Offsuit kings | Fold | Fold | Fold | Fold | Fold ✂ |
| Weak offsuit | Fold | Fold | Fold | Fold | Mix fold/call 65/35 ✂ |

⚠ = NEAR: the average lands within 5 points of 25% or 75%, so a closer read could flip it.
✂ = SPLIT: the hands inside the group play very differently.

## Hands I'm unsure of

- **BTN:** ATs was highlighted in the screenshot, so it was read under the shading.
- **Thin slivers under 5%:** BB A9s/A8s; HJ K9s, KTs. These change no answer.

## Groups that need splitting for this drill

The groups were built for raise-first-in. The 3-bet charts split them in the middle:

1. **Suited aces:** AKs–ATs 3-bet, A9s–A6s fold (HJ, CO) or call (BB). Proposed split: **AKs–ATs** and **A9s–A6s**.
2. **Small suited aces:** A5s–A4s 3-bet, A3s–A2s fold (HJ, CO). Proposed split: **A5s–A4s** and **A3s–A2s**.
3. **Medium pairs:** JJ–TT 3-bet (HJ) while 99–77 mix or call. Proposed split: **JJ–TT** and **99–77**.
4. **Suited broadways:** KQs, KJs, KTs, QJs 3-bet while QTs, JTs fold (HJ). Proposed split: **KQs–KTs + QJs** and **QTs, JTs**.
5. **Big offsuit:** AKo, AQo 3-bet, KQo mixes, AJo folds (HJ). Proposed split: **AKo–AQo** and **AJo, KQo**.

## Hands outside every group

BB calls many suited hands that belong to no group, so today they are filled in as fold:
- **Call:** Q4s–Q2s, J6s–J3s, T6s, 95s, 85s, 74s, 63s, 53s, 52s, 42s, 32s.
- **Mix of call and fold:** J2s, T5s, T4s, 84s, 65o, 54o.

Proposed: a new group **"Other suited hands"** for these.

## Proposed code change (after approval)

- Give the 3-bet drill its own data for these 5 spots, from the read files, instead of `genStrat`. The other 10 seat pairs keep the placeholder until their screenshots come in.
- Use the 75/25 rule.
- Add the splits Noam approves, for this drill only, so raise-first-in stays as it is.
