# KQT-3s turn (K♦ Q♣ T♥ 3♠): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | KK, QQ, TT, 33, AJ, J9 | 95% | 91% | 94% | 92% |
| g2 | 25–50bb | Two pair | KQ, KT, K3, QT | 83% | 70% | 78% | 70% |
| g3 | 25–50bb | Overpair | AA | 79% | 65% | 73% | 63% |
| g4 | 15–25bb | Top pair, good kicker | AK, KJ | 81% | 65% | 73% | 60% |
| g5 | 5–15bb | Top pair, weak kicker | K9–K4, K2 | 69% | 43% | 55% | 28% |
| g6 | 5–15bb | Second pair | AQ, QJ, Q9–Q5 | 60% | 33% | 34% | 17% |
| g7 | 0–5bb | Small pairs | JJ, 99–44, 22, AT, A3, JT, T9–T7, 43 | 31% | 13% | 12% | 12% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AJ | straight | 98% | 95% | 98% | 96% | 50–100bb | g1 |
| J9 | straight | 95% | 91% | 95% | 92% | 50–100bb | g1 |
| QQ | twopair | 90% | 84% | 88% | 88% | 50–100bb | g1 |
| TT | twopair | 91% | 83% | 90% | 88% | 50–100bb | g1 |
| 33 | twopair | 90% | 84% | 89% | 87% | 50–100bb | g1 |
| KK | twopair | 90% | 83% | 89% | 83% | 50–100bb | g1 |
| KQ | twopair | 87% | 79% | 86% | 82% | 50–100bb | g2 |
| KT | twopair | 84% | 72% | 80% | 71% | 50–100bb | g2 |
| K3 | twopair | 81% | 66% | 74% | 61% | 50–100bb | g2 |
| QT | twopair | 78% | 62% | 68% | 59% | 50–100bb | g2 |
| AA | op | 79% | 65% | 73% | 63% | 50–100bb | g3 |
| AK | tpgk | 80% | 64% | 72% | 61% | 50–100bb | g4 |
| KJ | tpmk | 82% | 66% | 74% | 60% | 50–100bb | g4 |
| K9 | tpmk | 76% | 55% | 67% | 46% | 25–50bb | g5 |
| K2 | tpmk | 66% | 37% | 46% | 10% | 0–5bb | g5 |
| K4 | tpmk | 65% | 37% | 48% | 15% | 0–5bb | g5 |
| K8 | tpmk | 69% | 42% | 57% | 32% | 25–50bb | g5 |
| K7 | tpmk | 67% | 39% | 53% | 26% | 25–50bb | g5 |
| K6 | tpmk | 66% | 40% | 52% | 22% | 25–50bb | g5 |
| K5 | tpmk | 66% | 39% | 50% | 18% | 25–50bb | g5 |
| QJ | mp | 68% | 40% | 44% | 24% | 0–5bb | g6 |
| AQ | mp | 64% | 39% | 41% | 18% | 0–5bb | g6 |
| Q9 | mp | 57% | 27% | 30% | 15% | 0–5bb | g6 |
| Q7 | mp | 50% | 23% | 20% | 9% | 0–5bb | g6 |
| Q8 | mp | 50% | 23% | 22% | 8% | 0–5bb | g6 |
| Q6 | mp | 49% | 23% | 17% | 9% | Pot is too big | g6 |
| Q5 | mp | 49% | 23% | 14% | 9% | Pot is too big | g6 |
| JJ | pp2 | 53% | 32% | 21% | 21% | 0–5bb | g7 |
| JT | bp | 48% | 22% | 22% | 23% | Pot is too big | g7 |
| AT | bp | 44% | 23% | 17% | 18% | Pot is too big | g7 |
| T9 | bp | 36% | 12% | 15% | 15% | Pot is too big | g7 |
| T8 | bp | 29% | 8% | 10% | 8% | Pot is too big | g7 |
| T7 | bp | 28% | 8% | 8% | 8% | Pot is too big | g7 |
| A3 | bp | 27% | 15% | 17% | 18% | Pot is too big | g7 |
| 99 | pp3 | 25% | 9% | 11% | 11% | Pot is too big | g7 |
| 43 | bp | 22% | 9% | 9% | 8% | Pot is too big | g7 |
| 88 | spp | 20% | 4% | 4% | 4% | Pot is too big | g7 |
| 44 | spp | 19% | 4% | 5% | 4% | Pot is too big | g7 |
| 55 | spp | 19% | 4% | 4% | 4% | Pot is too big | g7 |
| 66 | spp | 18% | 4% | 4% | 4% | Pot is too big | g7 |
| 77 | spp | 18% | 4% | 4% | 4% | Pot is too big | g7 |
| 22 | spp | 18% | 4% | 4% | 4% | Pot is too big | g7 |
