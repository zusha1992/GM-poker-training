# KQT-7c turn (K♦ Q♣ T♥ 7♣): equity groups

Generated 2026-11-13 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | KK, QQ, TT, 77, AJ, J9 | 93% | 93% | 93% | 90% |
| g2 | 25–50bb | Two pair | KQ, KT, K7, QT, Q7, T7 | 80% | 76% | 75% | 66% |
| g3 | 25–50bb | Overpair | AA | 77% | 71% | 70% | 59% |
| g4 | 25–50bb | Top pair, good kicker | AK, KJ | 79% | 75% | 72% | 58% |
| g5 | 5–15bb | Top pair, weak kicker | K9, K8, K6–K2 | 68% | 56% | 55% | 28% |
| g6 | 5–15bb | Second pair | AQ, QJ, Q9, Q8, Q6, Q5 | 59% | 41% | 35% | 17% |
| g7 | 0–5bb | Small pairs | JJ, 99, 88, 66–22, AT, A7, JT, J7, T9, T8, 97, 87, 76, 75 | 29% | 17% | 13% | 13% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AJ | straight | 96% | 95% | 96% | 93% | 50–100bb | g1 |
| J9 | straight | 93% | 93% | 94% | 90% | 50–100bb | g1 |
| QQ | twopair | 88% | 89% | 87% | 85% | 50–100bb | g1 |
| 77 | twopair | 88% | 88% | 88% | 85% | 50–100bb | g1 |
| TT | twopair | 89% | 89% | 88% | 85% | 50–100bb | g1 |
| KK | twopair | 89% | 88% | 89% | 84% | 50–100bb | g1 |
| KQ | twopair | 85% | 84% | 85% | 79% | 50–100bb | g2 |
| KT | twopair | 83% | 80% | 80% | 70% | 50–100bb | g2 |
| K7 | twopair | 80% | 74% | 75% | 62% | 50–100bb | g2 |
| QT | twopair | 76% | 70% | 66% | 57% | 50–100bb | g2 |
| Q7 | twopair | 73% | 67% | 61% | 54% | 50–100bb | g2 |
| T7 | twopair | 68% | 60% | 62% | 51% | 50–100bb | g2 |
| AA | op | 77% | 71% | 70% | 59% | 50–100bb | g3 |
| KJ | tpmk | 80% | 75% | 73% | 59% | 50–100bb | g4 |
| AK | tpgk | 78% | 74% | 71% | 57% | 50–100bb | g4 |
| K9 | tpmk | 74% | 66% | 65% | 44% | 25–50bb | g5 |
| K8 | tpmk | 67% | 57% | 57% | 30% | 25–50bb | g5 |
| K3 | tpmk | 65% | 54% | 50% | 21% | 5–15bb | g5 |
| K5 | tpmk | 67% | 54% | 52% | 23% | 25–50bb | g5 |
| K6 | tpmk | 65% | 51% | 51% | 22% | 25–50bb | g5 |
| K4 | tpmk | 66% | 53% | 51% | 22% | 25–50bb | g5 |
| K2 | tpmk | 65% | 50% | 48% | 20% | 5–15bb | g5 |
| QJ | mp | 65% | 48% | 43% | 23% | 0–5bb | g6 |
| AQ | mp | 62% | 47% | 41% | 18% | 0–5bb | g6 |
| Q9 | mp | 55% | 36% | 31% | 14% | 0–5bb | g6 |
| Q8 | mp | 49% | 29% | 21% | 9% | Pot is too big | g6 |
| Q6 | mp | 47% | 29% | 16% | 9% | Pot is too big | g6 |
| Q5 | mp | 47% | 30% | 15% | 8% | Pot is too big | g6 |
| JJ | pp2 | 52% | 38% | 19% | 21% | 0–5bb | g7 |
| JT | bp | 46% | 30% | 24% | 24% | Pot is too big | g7 |
| AT | bp | 42% | 29% | 19% | 19% | Pot is too big | g7 |
| T9 | bp | 36% | 20% | 16% | 15% | Pot is too big | g7 |
| J7 | bp | 33% | 22% | 22% | 22% | Pot is too big | g7 |
| T8 | bp | 33% | 21% | 15% | 13% | Pot is too big | g7 |
| A7 | bp | 27% | 17% | 18% | 17% | Pot is too big | g7 |
| 97 | bp | 25% | 14% | 15% | 14% | Pot is too big | g7 |
| 99 | pp3 | 24% | 15% | 11% | 11% | Pot is too big | g7 |
| 87 | bp | 21% | 11% | 9% | 7% | Pot is too big | g7 |
| 76 | bp | 21% | 11% | 9% | 8% | Pot is too big | g7 |
| 75 | bp | 20% | 11% | 9% | 7% | Pot is too big | g7 |
| 88 | spp | 18% | 8% | 4% | 4% | Pot is too big | g7 |
| 55 | spp | 16% | 5% | 5% | 4% | Pot is too big | g7 |
| 66 | spp | 16% | 6% | 4% | 4% | Pot is too big | g7 |
| 22 | spp | 16% | 6% | 4% | 4% | Pot is too big | g7 |
| 44 | spp | 16% | 6% | 4% | 4% | Pot is too big | g7 |
| 33 | spp | 15% | 6% | 4% | 4% | Pot is too big | g7 |
