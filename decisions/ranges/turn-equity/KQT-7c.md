# KQT-7c turn (K♦ Q♣ T♥ 7♣): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | KK, QQ, TT, 77, AJ, J9 | 93% | 92% | 92% | 90% |
| g2 | 25–50bb | Two pair | KQ, KT, K7, QT, Q7, T7 | 80% | 76% | 75% | 66% |
| g3 | 25–50bb | Overpair | AA | 76% | 71% | 70% | 59% |
| g4 | 15–25bb | Top pair, good kicker | AK, KJ | 79% | 74% | 71% | 56% |
| g5 | 5–15bb | Top pair, weak kicker | K9, K8, K6–K2 | 67% | 56% | 55% | 29% |
| g6 | 5–15bb | Second pair | AQ, QJ, Q9, Q8, Q6, Q5 | 59% | 42% | 35% | 17% |
| g7 | 0–5bb | Small pairs | JJ, 99, 88, 66–22, AT, A7, JT, J7, T9, T8, 97, 87, 76, 75 | 29% | 17% | 13% | 12% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AJ | straight | 96% | 95% | 96% | 94% | 50–100bb | g1 |
| J9 | straight | 93% | 92% | 93% | 90% | 50–100bb | g1 |
| TT | twopair | 89% | 89% | 89% | 86% | 50–100bb | g1 |
| QQ | twopair | 89% | 88% | 87% | 85% | 50–100bb | g1 |
| 77 | twopair | 89% | 87% | 87% | 85% | 50–100bb | g1 |
| KK | twopair | 89% | 88% | 88% | 83% | 50–100bb | g1 |
| KQ | twopair | 85% | 84% | 85% | 78% | 50–100bb | g2 |
| KT | twopair | 83% | 80% | 78% | 70% | 50–100bb | g2 |
| K7 | twopair | 81% | 73% | 75% | 61% | 50–100bb | g2 |
| QT | twopair | 76% | 71% | 67% | 57% | 50–100bb | g2 |
| Q7 | twopair | 73% | 65% | 61% | 55% | 50–100bb | g2 |
| T7 | twopair | 68% | 61% | 62% | 51% | 50–100bb | g2 |
| AA | op | 76% | 71% | 70% | 59% | 50–100bb | g3 |
| KJ | tpmk | 80% | 75% | 71% | 57% | 50–100bb | g4 |
| AK | tpgk | 78% | 73% | 70% | 55% | 50–100bb | g4 |
| K9 | tpmk | 72% | 66% | 64% | 44% | 25–50bb | g5 |
| K8 | tpmk | 67% | 57% | 55% | 32% | 25–50bb | g5 |
| K3 | tpmk | 65% | 52% | 50% | 20% | 5–15bb | g5 |
| K6 | tpmk | 64% | 51% | 52% | 22% | 25–50bb | g5 |
| K4 | tpmk | 66% | 53% | 51% | 23% | 25–50bb | g5 |
| K5 | tpmk | 66% | 54% | 51% | 24% | 25–50bb | g5 |
| K2 | tpmk | 64% | 51% | 50% | 21% | 25–50bb | g5 |
| QJ | mp | 65% | 49% | 43% | 24% | 0–5bb | g6 |
| AQ | mp | 62% | 46% | 42% | 18% | 0–5bb | g6 |
| Q9 | mp | 55% | 37% | 30% | 16% | 0–5bb | g6 |
| Q5 | mp | 47% | 29% | 14% | 8% | Pot is too big | g6 |
| Q8 | mp | 47% | 30% | 20% | 8% | Pot is too big | g6 |
| Q6 | mp | 46% | 29% | 16% | 8% | Pot is too big | g6 |
| JJ | pp2 | 52% | 37% | 20% | 20% | 0–5bb | g7 |
| JT | bp | 46% | 29% | 24% | 23% | Pot is too big | g7 |
| AT | bp | 43% | 29% | 19% | 18% | Pot is too big | g7 |
| T9 | bp | 34% | 21% | 16% | 15% | Pot is too big | g7 |
| J7 | bp | 34% | 23% | 23% | 22% | Pot is too big | g7 |
| T8 | bp | 32% | 20% | 15% | 13% | Pot is too big | g7 |
| A7 | bp | 27% | 18% | 18% | 18% | Pot is too big | g7 |
| 97 | bp | 24% | 15% | 14% | 14% | Pot is too big | g7 |
| 99 | pp3 | 24% | 14% | 11% | 11% | Pot is too big | g7 |
| 75 | bp | 22% | 11% | 9% | 7% | Pot is too big | g7 |
| 87 | bp | 21% | 10% | 9% | 7% | Pot is too big | g7 |
| 76 | bp | 20% | 11% | 9% | 7% | Pot is too big | g7 |
| 44 | spp | 17% | 6% | 5% | 4% | Pot is too big | g7 |
| 88 | spp | 17% | 8% | 4% | 4% | Pot is too big | g7 |
| 66 | spp | 17% | 6% | 4% | 4% | Pot is too big | g7 |
| 55 | spp | 16% | 6% | 4% | 4% | Pot is too big | g7 |
| 33 | spp | 16% | 6% | 4% | 4% | Pot is too big | g7 |
| 22 | spp | 16% | 6% | 4% | 4% | Pot is too big | g7 |
