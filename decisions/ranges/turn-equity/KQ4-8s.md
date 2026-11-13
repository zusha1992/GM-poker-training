# KQ4-8s turn (K♦ Q♦ 4♠ 8♠): equity groups

Generated 2026-11-13 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | KK, QQ, 88, 44 | 95% | 95% | 96% | 95% |
| g2 | 50–100bb | Two pair | KQ, K8, K4, Q8 | 90% | 90% | 89% | 83% |
| g3 | 25–50bb | Overpair & top pair, top kicker | AA, AK | 86% | 87% | 79% | 71% |
| g4 | 15–25bb | Top pair, good kicker | KJ, KT | 84% | 83% | 76% | 61% |
| g5 | 5–15bb | Top pair, weak kicker | K9, K7–K5, K3, K2 | 79% | 74% | 64% | 29% |
| g6 | 5–15bb | Second pair | AQ, QJ–Q9, Q7–Q5 | 68% | 53% | 34% | 12% |
| g7 | 0–5bb | Small pairs | JJ–99, 77–55, 33, 22, A8, A4, J8, T8, 98, 87, 86, 64, 54, 43 | 45% | 25% | 9% | 9% |
| g8 | Pot is too big | Ace-high | A9, A7–A5, A3, A2 | 18% | 10% | 6% | 5% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| KK | twopair | 95% | 95% | 97% | 98% | 50–100bb | g1 |
| 88 | twopair | 95% | 95% | 97% | 97% | 50–100bb | g1 |
| QQ | twopair | 95% | 95% | 97% | 97% | 50–100bb | g1 |
| 44 | twopair | 94% | 95% | 94% | 90% | 50–100bb | g1 |
| KQ | twopair | 91% | 93% | 93% | 90% | 50–100bb | g2 |
| K8 | twopair | 90% | 90% | 89% | 82% | 50–100bb | g2 |
| Q8 | twopair | 86% | 83% | 77% | 72% | 50–100bb | g2 |
| K4 | twopair | 88% | 87% | 82% | 66% | 50–100bb | g2 |
| AA | op | 84% | 86% | 78% | 72% | 50–100bb | g3 |
| AK | tpgk | 87% | 87% | 80% | 71% | 50–100bb | g3 |
| KJ | tpmk | 85% | 84% | 78% | 67% | 50–100bb | g4 |
| KT | tpmk | 83% | 81% | 74% | 56% | 50–100bb | g4 |
| K9 | tpmk | 81% | 77% | 69% | 41% | 25–50bb | g5 |
| K5 | tpmk | 78% | 72% | 64% | 25% | 25–50bb | g5 |
| K7 | tpmk | 79% | 75% | 64% | 30% | 25–50bb | g5 |
| K6 | tpmk | 78% | 72% | 62% | 27% | 25–50bb | g5 |
| K3 | tpmk | 78% | 71% | 60% | 19% | 25–50bb | g5 |
| K2 | tpmk | 76% | 71% | 60% | 18% | 25–50bb | g5 |
| Q9 | mp | 64% | 47% | 25% | 11% | 0–5bb | g6 |
| Q7 | mp | 63% | 45% | 24% | 15% | 0–5bb | g6 |
| Q6 | mp | 62% | 44% | 21% | 15% | 0–5bb | g6 |
| Q5 | mp | 60% | 43% | 20% | 14% | 0–5bb | g6 |
| AQ | mp | 71% | 60% | 44% | 12% | 15–25bb | g6 |
| QJ | mp | 70% | 58% | 40% | 11% | 5–15bb | g6 |
| QT | mp | 68% | 52% | 32% | 11% | 5–15bb | g6 |
| J8 | bp | 55% | 33% | 16% | 16% | 0–5bb | g7 |
| T8 | bp | 55% | 33% | 16% | 15% | 0–5bb | g7 |
| 98 | bp | 54% | 34% | 16% | 15% | 0–5bb | g7 |
| 86 | bp | 53% | 32% | 18% | 16% | 0–5bb | g7 |
| 87 | bp | 53% | 34% | 16% | 17% | 0–5bb | g7 |
| JJ | pp2 | 52% | 26% | 4% | 4% | 0–5bb | g7 |
| TT | pp2 | 52% | 28% | 4% | 4% | 0–5bb | g7 |
| A8 | bp | 52% | 29% | 12% | 12% | 0–5bb | g7 |
| 99 | pp2 | 51% | 29% | 4% | 4% | 0–5bb | g7 |
| 77 | spp | 46% | 22% | 5% | 4% | Pot is too big | g7 |
| 64 | bp | 42% | 27% | 17% | 15% | Pot is too big | g7 |
| 66 | spp | 42% | 22% | 4% | 4% | Pot is too big | g7 |
| A4 | bp | 40% | 24% | 13% | 12% | Pot is too big | g7 |
| 43 | bp | 40% | 27% | 16% | 16% | Pot is too big | g7 |
| 54 | bp | 40% | 27% | 17% | 16% | Pot is too big | g7 |
| 55 | spp | 38% | 22% | 4% | 4% | Pot is too big | g7 |
| 33 | spp | 28% | 15% | 5% | 4% | Pot is too big | g7 |
| 22 | spp | 26% | 15% | 4% | 4% | Pot is too big | g7 |
| A9 | khnd | 21% | 11% | 6% | 5% | Pot is too big | g8 |
| A7 | khnd | 19% | 9% | 6% | 5% | Pot is too big | g8 |
| A6 | khnd | 18% | 10% | 6% | 5% | Pot is too big | g8 |
| A5 | khnd | 17% | 9% | 5% | 5% | Pot is too big | g8 |
| A2 | khnd | 17% | 9% | 6% | 5% | Pot is too big | g8 |
| A3 | khnd | 16% | 9% | 7% | 5% | Pot is too big | g8 |
