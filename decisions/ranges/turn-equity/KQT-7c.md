# KQT-7c turn (K♦ Q♣ T♥ 7♣): equity groups

Generated 2026-11-12 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | KK, QQ, TT, 77, AJ, J9 | 93% | 92% | 93% | 90% |
| g2 | 50–100bb | Overpair | AA | 77% | 71% | 70% | 60% |
| g3 | 25–50bb | Two pair | KQ, KT, K7, QT, Q7, T7 | 80% | 76% | 75% | 66% |
| g4 | 25–50bb | Top pair, good kicker | AK, KJ | 79% | 74% | 72% | 57% |
| g5 | 15–25bb | Top pair, weak kicker | K9, K8, K6–K2 | 67% | 56% | 55% | 29% |
| g6 | 5–15bb | Second pair | AQ, QJ, Q9, Q8, Q6, Q5 | 58% | 41% | 34% | 17% |
| g7 | 0–5bb | Small pairs | JJ, 99, 88, 66–22, AT, A7, JT, J7, T9, T8, 97, 87, 76, 75 | 29% | 17% | 13% | 13% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AJ | straight | 96% | 95% | 96% | 94% | 50–100bb | g1 |
| J9 | straight | 92% | 92% | 93% | 90% | 50–100bb | g1 |
| QQ | twopair | 89% | 89% | 87% | 86% | 50–100bb | g1 |
| TT | twopair | 88% | 88% | 88% | 85% | 50–100bb | g1 |
| 77 | twopair | 88% | 87% | 88% | 85% | 50–100bb | g1 |
| KK | twopair | 89% | 88% | 89% | 83% | 50–100bb | g1 |
| AA | op | 77% | 71% | 70% | 60% | 50–100bb | g2 |
| KQ | twopair | 85% | 84% | 85% | 79% | 50–100bb | g3 |
| KT | twopair | 83% | 80% | 79% | 70% | 50–100bb | g3 |
| K7 | twopair | 80% | 74% | 74% | 61% | 50–100bb | g3 |
| QT | twopair | 76% | 69% | 68% | 58% | 50–100bb | g3 |
| Q7 | twopair | 73% | 65% | 61% | 54% | 50–100bb | g3 |
| T7 | twopair | 69% | 60% | 62% | 51% | 50–100bb | g3 |
| KJ | tpmk | 80% | 74% | 73% | 58% | 50–100bb | g4 |
| AK | tpgk | 78% | 73% | 71% | 56% | 50–100bb | g4 |
| K9 | tpmk | 74% | 65% | 65% | 44% | 25–50bb | g5 |
| K8 | tpmk | 66% | 57% | 55% | 32% | 25–50bb | g5 |
| K5 | tpmk | 65% | 54% | 53% | 24% | 25–50bb | g5 |
| K4 | tpmk | 66% | 53% | 52% | 22% | 25–50bb | g5 |
| K3 | tpmk | 65% | 52% | 51% | 21% | 25–50bb | g5 |
| K6 | tpmk | 65% | 52% | 51% | 22% | 25–50bb | g5 |
| K2 | tpmk | 65% | 50% | 50% | 20% | 5–15bb | g5 |
| QJ | mp | 65% | 49% | 44% | 23% | 0–5bb | g6 |
| AQ | mp | 61% | 46% | 40% | 18% | 0–5bb | g6 |
| Q9 | mp | 53% | 36% | 30% | 15% | 0–5bb | g6 |
| Q8 | mp | 50% | 30% | 21% | 9% | Pot is too big | g6 |
| Q6 | mp | 46% | 29% | 16% | 8% | Pot is too big | g6 |
| Q5 | mp | 45% | 29% | 15% | 9% | Pot is too big | g6 |
| JJ | pp2 | 52% | 37% | 20% | 20% | 0–5bb | g7 |
| JT | bp | 45% | 30% | 24% | 23% | Pot is too big | g7 |
| AT | bp | 44% | 30% | 18% | 18% | Pot is too big | g7 |
| T9 | bp | 35% | 21% | 17% | 16% | Pot is too big | g7 |
| T8 | bp | 33% | 21% | 15% | 14% | Pot is too big | g7 |
| J7 | bp | 33% | 23% | 23% | 22% | Pot is too big | g7 |
| A7 | bp | 28% | 19% | 17% | 17% | Pot is too big | g7 |
| 97 | bp | 25% | 15% | 14% | 14% | Pot is too big | g7 |
| 99 | pp3 | 24% | 14% | 11% | 11% | Pot is too big | g7 |
| 87 | bp | 20% | 11% | 9% | 7% | Pot is too big | g7 |
| 76 | bp | 20% | 10% | 9% | 8% | Pot is too big | g7 |
| 75 | bp | 20% | 11% | 8% | 8% | Pot is too big | g7 |
| 88 | spp | 17% | 9% | 4% | 4% | Pot is too big | g7 |
| 22 | spp | 16% | 6% | 4% | 4% | Pot is too big | g7 |
| 33 | spp | 16% | 6% | 4% | 4% | Pot is too big | g7 |
| 55 | spp | 15% | 6% | 4% | 4% | Pot is too big | g7 |
| 66 | spp | 15% | 6% | 4% | 4% | Pot is too big | g7 |
| 44 | spp | 15% | 6% | 5% | 4% | Pot is too big | g7 |
