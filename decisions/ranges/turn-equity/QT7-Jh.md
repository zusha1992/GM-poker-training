# QT7-Jh turn (Q♥ T♦ 7♠ J♥): equity groups

Generated 2026-11-13 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | QQ–TT, 77, AK, K9, 98 | 92% | 91% | 89% | 87% |
| g2 | 25–50bb | Two pair | QJ, QT, Q7, JT, J7, T7 | 77% | 71% | 60% | 54% |
| g3 | 25–50bb | Overpairs | AA, KK | 79% | 73% | 63% | 56% |
| g4 | 25–50bb | Top pair, good kicker | AQ, KQ | 78% | 71% | 59% | 49% |
| g5 | 15–25bb | Top pair, weak kicker | Q9, Q8, Q6, Q5 | 70% | 60% | 44% | 30% |
| g6 | 0–5bb | Second pair | AJ, KJ, J9, J8 | 66% | 49% | 25% | 19% |
| g7 | 0–5bb | Small pairs | 99, 88, 66–22, AT, A7, KT, K7, T9, T8, 97, 87, 76, 75 | 41% | 22% | 15% | 15% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AK | straight | 97% | 96% | 97% | 96% | 50–100bb | g1 |
| K9 | straight | 93% | 93% | 91% | 90% | 50–100bb | g1 |
| 98 | straight | 89% | 87% | 83% | 80% | 50–100bb | g1 |
| 77 | twopair | 85% | 84% | 78% | 76% | 50–100bb | g1 |
| TT | twopair | 86% | 83% | 78% | 75% | 50–100bb | g1 |
| JJ | twopair | 86% | 84% | 76% | 73% | 50–100bb | g1 |
| QQ | twopair | 86% | 84% | 75% | 68% | 50–100bb | g1 |
| J7 | twopair | 74% | 63% | 48% | 46% | 15–25bb | g2 |
| QJ | twopair | 79% | 76% | 66% | 63% | 50–100bb | g2 |
| QT | twopair | 78% | 72% | 62% | 55% | 50–100bb | g2 |
| JT | twopair | 75% | 67% | 54% | 48% | 25–50bb | g2 |
| T7 | twopair | 73% | 63% | 52% | 48% | 25–50bb | g2 |
| Q7 | twopair | 76% | 70% | 58% | 51% | 50–100bb | g2 |
| KK | op | 80% | 76% | 66% | 59% | 50–100bb | g3 |
| AA | op | 77% | 69% | 59% | 53% | 50–100bb | g3 |
| AQ | tpgk | 76% | 70% | 57% | 48% | 25–50bb | g4 |
| KQ | tpgk | 80% | 72% | 61% | 51% | 50–100bb | g4 |
| Q8 | tpmk | 69% | 59% | 40% | 27% | 5–15bb | g5 |
| Q6 | tpmk | 64% | 53% | 35% | 18% | 5–15bb | g5 |
| Q5 | tpmk | 66% | 53% | 33% | 16% | 5–15bb | g5 |
| Q9 | tpmk | 75% | 67% | 53% | 41% | 25–50bb | g5 |
| AJ | mp | 66% | 50% | 27% | 17% | 0–5bb | g6 |
| J9 | mp | 64% | 46% | 23% | 19% | 0–5bb | g6 |
| J8 | mp | 59% | 41% | 12% | 12% | 0–5bb | g6 |
| KJ | mp | 70% | 53% | 28% | 22% | 5–15bb | g6 |
| KT | bp | 62% | 41% | 23% | 24% | 0–5bb | g7 |
| AT | bp | 58% | 39% | 17% | 18% | 0–5bb | g7 |
| T9 | bp | 57% | 34% | 21% | 21% | 0–5bb | g7 |
| T8 | bp | 52% | 29% | 18% | 18% | 0–5bb | g7 |
| 99 | pp3 | 49% | 26% | 17% | 18% | Pot is too big | g7 |
| 97 | bp | 47% | 27% | 25% | 26% | Pot is too big | g7 |
| K7 | bp | 46% | 26% | 24% | 24% | Pot is too big | g7 |
| A7 | bp | 42% | 23% | 18% | 18% | Pot is too big | g7 |
| 88 | spp | 41% | 18% | 9% | 9% | Pot is too big | g7 |
| 87 | bp | 40% | 21% | 18% | 18% | Pot is too big | g7 |
| 76 | bp | 35% | 16% | 14% | 13% | Pot is too big | g7 |
| 75 | bp | 33% | 17% | 15% | 12% | Pot is too big | g7 |
| 66 | spp | 22% | 4% | 4% | 3% | Pot is too big | g7 |
| 55 | spp | 19% | 4% | 4% | 3% | Pot is too big | g7 |
| 44 | spp | 16% | 4% | 4% | 3% | Pot is too big | g7 |
| 33 | spp | 13% | 4% | 4% | 4% | Pot is too big | g7 |
| 22 | spp | 10% | 4% | 4% | 4% | Pot is too big | g7 |
