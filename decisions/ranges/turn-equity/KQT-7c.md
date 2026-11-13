# KQT-7c turn (K♦ Q♣ T♥ 7♣): equity groups

Generated 2026-11-13 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | KK, QQ, TT, 77, AJ, J9 | 93% | 92% | 93% | 90% |
| g2 | 25–50bb | Two pair | KQ, KT, K7, QT, Q7, T7 | 80% | 76% | 75% | 67% |
| g3 | 25–50bb | Overpair | AA | 77% | 71% | 71% | 59% |
| g4 | 25–50bb | Top pair, good kicker | AK, KJ | 79% | 74% | 71% | 57% |
| g5 | 5–15bb | Top pair, weak kicker | K9, K8, K6–K2 | 67% | 57% | 55% | 29% |
| g6 | 5–15bb | Second pair | AQ, QJ, Q9, Q8, Q6, Q5 | 58% | 42% | 35% | 17% |
| g7 | 0–5bb | Small pairs | JJ, 99, 88, 66–22, AT, A7, JT, J7, T9, T8, 97, 87, 76, 75 | 29% | 17% | 13% | 13% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AJ | straight | 96% | 96% | 96% | 94% | 50–100bb | g1 |
| J9 | straight | 93% | 92% | 93% | 90% | 50–100bb | g1 |
| QQ | twopair | 88% | 89% | 87% | 86% | 50–100bb | g1 |
| 77 | twopair | 89% | 88% | 88% | 85% | 50–100bb | g1 |
| TT | twopair | 89% | 89% | 89% | 85% | 50–100bb | g1 |
| KK | twopair | 90% | 89% | 89% | 83% | 50–100bb | g1 |
| KQ | twopair | 85% | 84% | 85% | 80% | 50–100bb | g2 |
| KT | twopair | 82% | 79% | 79% | 70% | 50–100bb | g2 |
| K7 | twopair | 79% | 75% | 75% | 61% | 50–100bb | g2 |
| T7 | twopair | 69% | 60% | 61% | 50% | 25–50bb | g2 |
| QT | twopair | 75% | 69% | 67% | 59% | 50–100bb | g2 |
| Q7 | twopair | 72% | 65% | 61% | 55% | 50–100bb | g2 |
| AA | op | 77% | 71% | 71% | 59% | 50–100bb | g3 |
| KJ | tpmk | 80% | 74% | 72% | 57% | 50–100bb | g4 |
| AK | tpgk | 78% | 73% | 70% | 57% | 50–100bb | g4 |
| K9 | tpmk | 74% | 66% | 65% | 44% | 25–50bb | g5 |
| K8 | tpmk | 67% | 58% | 56% | 31% | 25–50bb | g5 |
| K3 | tpmk | 65% | 52% | 50% | 22% | 5–15bb | g5 |
| K5 | tpmk | 67% | 54% | 52% | 25% | 25–50bb | g5 |
| K4 | tpmk | 67% | 52% | 51% | 22% | 25–50bb | g5 |
| K2 | tpmk | 66% | 51% | 51% | 20% | 25–50bb | g5 |
| K6 | tpmk | 63% | 53% | 50% | 23% | 25–50bb | g5 |
| QJ | mp | 65% | 50% | 44% | 24% | 0–5bb | g6 |
| AQ | mp | 62% | 47% | 42% | 18% | 0–5bb | g6 |
| Q9 | mp | 54% | 36% | 32% | 15% | 0–5bb | g6 |
| Q8 | mp | 49% | 29% | 20% | 8% | Pot is too big | g6 |
| Q6 | mp | 46% | 28% | 16% | 8% | Pot is too big | g6 |
| Q5 | mp | 45% | 28% | 15% | 9% | Pot is too big | g6 |
| JJ | pp2 | 52% | 38% | 20% | 21% | 0–5bb | g7 |
| JT | bp | 47% | 29% | 24% | 23% | Pot is too big | g7 |
| AT | bp | 44% | 29% | 19% | 19% | Pot is too big | g7 |
| T9 | bp | 34% | 20% | 16% | 15% | Pot is too big | g7 |
| J7 | bp | 34% | 23% | 22% | 22% | Pot is too big | g7 |
| T8 | bp | 31% | 20% | 16% | 14% | Pot is too big | g7 |
| A7 | bp | 27% | 18% | 17% | 17% | Pot is too big | g7 |
| 97 | bp | 24% | 14% | 15% | 13% | Pot is too big | g7 |
| 99 | pp3 | 23% | 14% | 11% | 11% | Pot is too big | g7 |
| 76 | bp | 21% | 11% | 9% | 8% | Pot is too big | g7 |
| 87 | bp | 21% | 11% | 9% | 7% | Pot is too big | g7 |
| 75 | bp | 21% | 11% | 9% | 7% | Pot is too big | g7 |
| 88 | spp | 17% | 9% | 4% | 4% | Pot is too big | g7 |
| 55 | spp | 17% | 6% | 4% | 4% | Pot is too big | g7 |
| 33 | spp | 16% | 6% | 4% | 4% | Pot is too big | g7 |
| 66 | spp | 16% | 6% | 4% | 4% | Pot is too big | g7 |
| 44 | spp | 15% | 6% | 4% | 4% | Pot is too big | g7 |
| 22 | spp | 15% | 6% | 4% | 4% | Pot is too big | g7 |
