# QT7-Jh turn (Q♥ T♦ 7♠ J♥): equity groups

Generated 2026-11-12 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | QQ–TT, 77, AK, K9, 98 | 92% | 91% | 88% | 87% |
| g2 | 50–100bb | Overpairs | AA, KK | 79% | 72% | 63% | 56% |
| g3 | 25–50bb | Two pair | QJ, QT, Q7, JT, J7, T7 | 77% | 70% | 60% | 54% |
| g4 | 25–50bb | Top pair, good kicker | AQ, KQ | 78% | 73% | 58% | 49% |
| g5 | 15–25bb | Top pair, weak kicker | Q9, Q8, Q6, Q5 | 71% | 61% | 44% | 30% |
| g6 | 5–15bb | Second pair | AJ, KJ, J9, J8 | 66% | 50% | 25% | 19% |
| g7 | 0–5bb | Small pairs | 99, 88, 66–22, AT, A7, KT, K7, T9, T8, 97, 87, 76, 75 | 41% | 22% | 15% | 15% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AK | straight | 97% | 96% | 97% | 96% | 50–100bb | g1 |
| K9 | straight | 94% | 93% | 91% | 90% | 50–100bb | g1 |
| 98 | straight | 90% | 88% | 82% | 80% | 50–100bb | g1 |
| 77 | twopair | 85% | 83% | 78% | 75% | 50–100bb | g1 |
| TT | twopair | 85% | 83% | 78% | 75% | 50–100bb | g1 |
| JJ | twopair | 86% | 83% | 74% | 73% | 50–100bb | g1 |
| QQ | twopair | 86% | 84% | 75% | 67% | 50–100bb | g1 |
| KK | op | 81% | 76% | 66% | 61% | 50–100bb | g2 |
| AA | op | 76% | 69% | 60% | 52% | 50–100bb | g2 |
| QJ | twopair | 80% | 75% | 67% | 64% | 50–100bb | g3 |
| Q7 | twopair | 76% | 70% | 59% | 50% | 25–50bb | g3 |
| JT | twopair | 74% | 67% | 54% | 48% | 25–50bb | g3 |
| QT | twopair | 78% | 71% | 61% | 54% | 50–100bb | g3 |
| T7 | twopair | 73% | 64% | 54% | 49% | 25–50bb | g3 |
| J7 | twopair | 72% | 63% | 50% | 46% | 25–50bb | g3 |
| AQ | tpgk | 76% | 72% | 56% | 48% | 25–50bb | g4 |
| KQ | tpgk | 79% | 73% | 60% | 51% | 50–100bb | g4 |
| Q8 | tpmk | 69% | 60% | 41% | 27% | 5–15bb | g5 |
| Q9 | tpmk | 76% | 67% | 53% | 41% | 25–50bb | g5 |
| Q6 | tpmk | 65% | 53% | 35% | 18% | 5–15bb | g5 |
| Q5 | tpmk | 65% | 53% | 33% | 16% | 5–15bb | g5 |
| J9 | mp | 65% | 48% | 22% | 19% | 0–5bb | g6 |
| J8 | mp | 59% | 42% | 13% | 12% | 0–5bb | g6 |
| KJ | mp | 68% | 52% | 28% | 22% | 5–15bb | g6 |
| AJ | mp | 65% | 50% | 27% | 17% | 5–15bb | g6 |
| KT | bp | 61% | 39% | 24% | 24% | 0–5bb | g7 |
| AT | bp | 58% | 38% | 17% | 17% | 0–5bb | g7 |
| T9 | bp | 56% | 33% | 20% | 21% | 0–5bb | g7 |
| T8 | bp | 53% | 30% | 18% | 18% | 0–5bb | g7 |
| 99 | pp3 | 49% | 25% | 17% | 17% | Pot is too big | g7 |
| K7 | bp | 47% | 25% | 23% | 24% | Pot is too big | g7 |
| 97 | bp | 45% | 27% | 25% | 25% | Pot is too big | g7 |
| A7 | bp | 44% | 22% | 18% | 19% | Pot is too big | g7 |
| 87 | bp | 42% | 21% | 18% | 18% | Pot is too big | g7 |
| 88 | spp | 40% | 18% | 9% | 9% | Pot is too big | g7 |
| 75 | bp | 36% | 16% | 14% | 14% | Pot is too big | g7 |
| 76 | bp | 34% | 17% | 14% | 13% | Pot is too big | g7 |
| 66 | spp | 22% | 5% | 4% | 3% | Pot is too big | g7 |
| 55 | spp | 19% | 5% | 4% | 3% | Pot is too big | g7 |
| 44 | spp | 16% | 4% | 4% | 4% | Pot is too big | g7 |
| 33 | spp | 13% | 5% | 4% | 4% | Pot is too big | g7 |
| 22 | spp | 10% | 5% | 4% | 4% | Pot is too big | g7 |
