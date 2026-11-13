# QT7-Jh turn (Q♥ T♦ 7♠ J♥): equity groups

Generated 2026-11-13 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | QQ–TT, 77, AK, K9, 98 | 92% | 91% | 88% | 87% |
| g2 | 25–50bb | Two pair | QJ, QT, Q7, JT, J7, T7 | 77% | 71% | 60% | 54% |
| g3 | 15–25bb | Overpairs | AA, KK | 77% | 72% | 62% | 56% |
| g4 | 15–25bb | Top pair, good kicker | AQ, KQ | 77% | 72% | 59% | 49% |
| g5 | 5–15bb | Top pair, weak kicker | Q9, Q8, Q6, Q5 | 71% | 60% | 44% | 29% |
| g6 | 0–5bb | Second pair | AJ, KJ, J9, J8 | 66% | 50% | 25% | 19% |
| g7 | 0–5bb | Small pairs | 99, 88, 66–22, AT, A7, KT, K7, T9, T8, 97, 87, 76, 75 | 41% | 22% | 15% | 15% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AK | straight | 97% | 96% | 97% | 97% | 50–100bb | g1 |
| K9 | straight | 94% | 92% | 91% | 91% | 50–100bb | g1 |
| 98 | straight | 89% | 88% | 84% | 79% | 50–100bb | g1 |
| 77 | twopair | 85% | 84% | 78% | 76% | 50–100bb | g1 |
| TT | twopair | 86% | 84% | 79% | 75% | 50–100bb | g1 |
| JJ | twopair | 86% | 83% | 75% | 73% | 50–100bb | g1 |
| QQ | twopair | 85% | 83% | 74% | 68% | 50–100bb | g1 |
| J7 | twopair | 73% | 64% | 49% | 45% | 15–25bb | g2 |
| QJ | twopair | 80% | 75% | 67% | 62% | 50–100bb | g2 |
| JT | twopair | 74% | 68% | 55% | 49% | 25–50bb | g2 |
| T7 | twopair | 72% | 62% | 54% | 49% | 25–50bb | g2 |
| QT | twopair | 77% | 71% | 61% | 53% | 50–100bb | g2 |
| Q7 | twopair | 76% | 69% | 59% | 51% | 50–100bb | g2 |
| KK | op | 80% | 76% | 65% | 59% | 50–100bb | g3 |
| AA | op | 75% | 69% | 59% | 53% | 50–100bb | g3 |
| AQ | tpgk | 76% | 71% | 57% | 46% | 25–50bb | g4 |
| KQ | tpgk | 78% | 73% | 61% | 51% | 50–100bb | g4 |
| Q8 | tpmk | 70% | 60% | 41% | 26% | 5–15bb | g5 |
| Q9 | tpmk | 76% | 67% | 54% | 40% | 25–50bb | g5 |
| Q6 | tpmk | 65% | 53% | 34% | 18% | 5–15bb | g5 |
| Q5 | tpmk | 65% | 52% | 34% | 16% | 5–15bb | g5 |
| J9 | mp | 64% | 47% | 22% | 20% | 0–5bb | g6 |
| J8 | mp | 59% | 40% | 12% | 11% | 0–5bb | g6 |
| KJ | mp | 69% | 53% | 28% | 23% | 5–15bb | g6 |
| AJ | mp | 65% | 51% | 27% | 17% | 5–15bb | g6 |
| KT | bp | 62% | 39% | 23% | 24% | 0–5bb | g7 |
| AT | bp | 59% | 39% | 18% | 17% | 0–5bb | g7 |
| T9 | bp | 57% | 34% | 21% | 20% | 0–5bb | g7 |
| T8 | bp | 54% | 30% | 18% | 18% | 0–5bb | g7 |
| 99 | pp3 | 49% | 26% | 17% | 18% | Pot is too big | g7 |
| 97 | bp | 47% | 26% | 25% | 25% | Pot is too big | g7 |
| K7 | bp | 46% | 24% | 24% | 25% | Pot is too big | g7 |
| A7 | bp | 44% | 22% | 17% | 18% | Pot is too big | g7 |
| 87 | bp | 41% | 20% | 18% | 17% | Pot is too big | g7 |
| 88 | spp | 41% | 18% | 9% | 9% | Pot is too big | g7 |
| 76 | bp | 35% | 17% | 14% | 13% | Pot is too big | g7 |
| 75 | bp | 35% | 17% | 15% | 13% | Pot is too big | g7 |
| 66 | spp | 22% | 5% | 4% | 4% | Pot is too big | g7 |
| 55 | spp | 20% | 5% | 4% | 4% | Pot is too big | g7 |
| 44 | spp | 15% | 4% | 4% | 4% | Pot is too big | g7 |
| 33 | spp | 13% | 4% | 4% | 3% | Pot is too big | g7 |
| 22 | spp | 10% | 4% | 4% | 4% | Pot is too big | g7 |
