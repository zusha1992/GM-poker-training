# KQ4-8s turn (K♦ Q♦ 4♠ 8♠): equity groups

Generated 2026-11-13 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | KK, QQ, 88, 44 | 95% | 95% | 96% | 95% |
| g2 | 50–100bb | Two pair | KQ, K8, K4, Q8 | 90% | 91% | 89% | 83% |
| g3 | 25–50bb | Overpair | AA | 85% | 84% | 78% | 70% |
| g4 | 25–50bb | Top pair, good kicker | AK, KJ, KT | 85% | 84% | 77% | 64% |
| g5 | 15–25bb | Top pair, weak kicker | K9, K7–K5, K3, K2 | 78% | 74% | 64% | 29% |
| g6 | 5–15bb | Second pair | AQ, QJ–Q9, Q7–Q5 | 67% | 53% | 34% | 11% |
| g7 | 0–5bb | Small pairs | JJ–99, 77–55, 33, 22, A8, A4, J8, T8, 98, 87, 86, 64, 54, 43 | 45% | 26% | 9% | 9% |
| g8 | Pot is too big | Ace-high | A9, A7–A5, A3, A2 | 18% | 9% | 6% | 5% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| KK | twopair | 95% | 95% | 97% | 98% | 50–100bb | g1 |
| QQ | twopair | 95% | 95% | 97% | 97% | 50–100bb | g1 |
| 88 | twopair | 95% | 95% | 97% | 96% | 50–100bb | g1 |
| 44 | twopair | 93% | 95% | 94% | 90% | 50–100bb | g1 |
| KQ | twopair | 92% | 94% | 93% | 89% | 50–100bb | g2 |
| K8 | twopair | 90% | 90% | 89% | 81% | 50–100bb | g2 |
| Q8 | twopair | 86% | 83% | 77% | 71% | 50–100bb | g2 |
| K4 | twopair | 87% | 86% | 82% | 66% | 50–100bb | g2 |
| AA | op | 85% | 84% | 78% | 70% | 50–100bb | g3 |
| AK | tpgk | 86% | 87% | 79% | 70% | 50–100bb | g4 |
| KJ | tpmk | 85% | 85% | 79% | 67% | 50–100bb | g4 |
| KT | tpmk | 84% | 81% | 74% | 55% | 50–100bb | g4 |
| K9 | tpmk | 80% | 79% | 70% | 40% | 25–50bb | g5 |
| K7 | tpmk | 77% | 74% | 64% | 30% | 25–50bb | g5 |
| K5 | tpmk | 79% | 73% | 63% | 26% | 25–50bb | g5 |
| K6 | tpmk | 78% | 72% | 62% | 24% | 25–50bb | g5 |
| K3 | tpmk | 77% | 72% | 60% | 19% | 25–50bb | g5 |
| K2 | tpmk | 78% | 71% | 60% | 18% | 25–50bb | g5 |
| Q6 | mp | 64% | 45% | 22% | 15% | 0–5bb | g6 |
| Q9 | mp | 64% | 46% | 23% | 9% | 0–5bb | g6 |
| Q7 | mp | 63% | 45% | 24% | 15% | 0–5bb | g6 |
| Q5 | mp | 62% | 43% | 18% | 15% | 0–5bb | g6 |
| AQ | mp | 71% | 60% | 45% | 12% | 5–15bb | g6 |
| QJ | mp | 69% | 58% | 39% | 10% | 5–15bb | g6 |
| QT | mp | 68% | 53% | 33% | 10% | 5–15bb | g6 |
| T8 | bp | 55% | 35% | 16% | 16% | 0–5bb | g7 |
| 98 | bp | 55% | 33% | 15% | 15% | 0–5bb | g7 |
| J8 | bp | 55% | 33% | 16% | 15% | 0–5bb | g7 |
| 87 | bp | 54% | 34% | 17% | 16% | 0–5bb | g7 |
| 86 | bp | 54% | 33% | 17% | 16% | 0–5bb | g7 |
| A8 | bp | 53% | 30% | 12% | 13% | 0–5bb | g7 |
| TT | pp2 | 51% | 27% | 4% | 4% | 0–5bb | g7 |
| JJ | pp2 | 51% | 27% | 4% | 4% | 0–5bb | g7 |
| 99 | pp2 | 51% | 28% | 5% | 4% | 0–5bb | g7 |
| 77 | spp | 46% | 22% | 5% | 4% | Pot is too big | g7 |
| 66 | spp | 42% | 22% | 4% | 4% | Pot is too big | g7 |
| 64 | bp | 41% | 28% | 17% | 15% | Pot is too big | g7 |
| 54 | bp | 41% | 28% | 17% | 16% | Pot is too big | g7 |
| A4 | bp | 40% | 25% | 13% | 12% | Pot is too big | g7 |
| 43 | bp | 39% | 28% | 17% | 16% | Pot is too big | g7 |
| 55 | spp | 38% | 21% | 4% | 4% | Pot is too big | g7 |
| 33 | spp | 29% | 15% | 4% | 4% | Pot is too big | g7 |
| 22 | spp | 26% | 15% | 4% | 4% | Pot is too big | g7 |
| A9 | khnd | 21% | 11% | 6% | 5% | Pot is too big | g8 |
| A7 | khnd | 19% | 10% | 6% | 6% | Pot is too big | g8 |
| A6 | khnd | 18% | 10% | 6% | 5% | Pot is too big | g8 |
| A2 | khnd | 17% | 8% | 6% | 5% | Pot is too big | g8 |
| A5 | khnd | 17% | 9% | 6% | 5% | Pot is too big | g8 |
| A3 | khnd | 16% | 9% | 5% | 5% | Pot is too big | g8 |
