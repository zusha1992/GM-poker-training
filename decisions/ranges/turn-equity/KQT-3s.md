# KQT-3s turn (K♦ Q♣ T♥ 3♠): equity groups

Generated 2026-11-13 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | KK, QQ, TT, 33, AJ, J9 | 95% | 91% | 94% | 92% |
| g2 | 25–50bb | Two pair | KQ, KT, K3, QT | 84% | 70% | 78% | 70% |
| g3 | 25–50bb | Overpair | AA | 78% | 65% | 73% | 63% |
| g4 | 25–50bb | Top pair, good kicker | AK, KJ | 82% | 66% | 74% | 60% |
| g5 | 15–25bb | Top pair, weak kicker | K9–K4, K2 | 68% | 43% | 55% | 28% |
| g6 | 5–15bb | Second pair | AQ, QJ, Q9–Q5 | 60% | 33% | 34% | 17% |
| g7 | 0–5bb | Small pairs | JJ, 99–44, 22, AT, A3, JT, T9–T7, 43 | 31% | 13% | 12% | 12% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AJ | straight | 98% | 96% | 98% | 97% | 50–100bb | g1 |
| J9 | straight | 95% | 91% | 94% | 92% | 50–100bb | g1 |
| QQ | twopair | 90% | 85% | 89% | 88% | 50–100bb | g1 |
| TT | twopair | 91% | 84% | 90% | 87% | 50–100bb | g1 |
| 33 | twopair | 91% | 84% | 89% | 86% | 50–100bb | g1 |
| KK | twopair | 90% | 83% | 89% | 83% | 50–100bb | g1 |
| KQ | twopair | 88% | 78% | 86% | 81% | 50–100bb | g2 |
| KT | twopair | 85% | 72% | 79% | 72% | 50–100bb | g2 |
| K3 | twopair | 82% | 67% | 75% | 60% | 50–100bb | g2 |
| QT | twopair | 78% | 60% | 68% | 59% | 50–100bb | g2 |
| AA | op | 78% | 65% | 73% | 63% | 50–100bb | g3 |
| AK | tpgk | 81% | 64% | 73% | 60% | 50–100bb | g4 |
| KJ | tpmk | 82% | 67% | 75% | 59% | 50–100bb | g4 |
| K4 | tpmk | 66% | 38% | 49% | 15% | 0–5bb | g5 |
| K9 | tpmk | 76% | 55% | 64% | 47% | 25–50bb | g5 |
| K2 | tpmk | 63% | 37% | 45% | 10% | 0–5bb | g5 |
| K8 | tpmk | 68% | 43% | 56% | 33% | 25–50bb | g5 |
| K7 | tpmk | 67% | 40% | 55% | 25% | 25–50bb | g5 |
| K6 | tpmk | 67% | 39% | 51% | 23% | 25–50bb | g5 |
| K5 | tpmk | 66% | 38% | 50% | 20% | 25–50bb | g5 |
| QJ | mp | 68% | 39% | 44% | 25% | 0–5bb | g6 |
| AQ | mp | 65% | 39% | 41% | 19% | 0–5bb | g6 |
| Q9 | mp | 57% | 29% | 30% | 15% | 0–5bb | g6 |
| Q8 | mp | 52% | 24% | 22% | 8% | 0–5bb | g6 |
| Q7 | mp | 51% | 23% | 19% | 9% | 0–5bb | g6 |
| Q6 | mp | 48% | 24% | 17% | 9% | Pot is too big | g6 |
| Q5 | mp | 48% | 23% | 14% | 9% | Pot is too big | g6 |
| JJ | pp2 | 54% | 33% | 20% | 21% | 0–5bb | g7 |
| JT | bp | 48% | 22% | 23% | 23% | Pot is too big | g7 |
| AT | bp | 45% | 24% | 17% | 17% | Pot is too big | g7 |
| T9 | bp | 37% | 11% | 15% | 14% | Pot is too big | g7 |
| T8 | bp | 30% | 7% | 9% | 7% | Pot is too big | g7 |
| A3 | bp | 28% | 16% | 17% | 18% | Pot is too big | g7 |
| T7 | bp | 28% | 8% | 9% | 8% | Pot is too big | g7 |
| 99 | pp3 | 26% | 9% | 12% | 11% | Pot is too big | g7 |
| 43 | bp | 23% | 8% | 9% | 8% | Pot is too big | g7 |
| 55 | spp | 20% | 5% | 4% | 4% | Pot is too big | g7 |
| 66 | spp | 19% | 4% | 5% | 4% | Pot is too big | g7 |
| 88 | spp | 19% | 4% | 4% | 4% | Pot is too big | g7 |
| 44 | spp | 18% | 5% | 4% | 4% | Pot is too big | g7 |
| 77 | spp | 18% | 4% | 4% | 4% | Pot is too big | g7 |
| 22 | spp | 17% | 4% | 4% | 4% | Pot is too big | g7 |
