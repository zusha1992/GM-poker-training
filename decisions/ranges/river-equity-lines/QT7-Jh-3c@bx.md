# QT7-Jh-3c@bx river (Q♥ T♦ 7♠ J♥ 3♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | AK, K9, 98 | 99% | 100% | 100% | 89% |
| g2 | 25–50bb | Sets | QQ–TT, 77, 33 | 93% | 100% | 100% | 48% |
| g3 | 15–25bb | Overpairs | AA, KK | 83% | 78% | 50% | 37% |
| g4 | 15–25bb | Two pair | QJ, QT, Q7, JT, J7, T7 | 88% | 92% | 80% | 42% |
| g5 | 15–25bb | Top pair | AQ, KQ, Q9, Q8, Q6, Q5 | 81% | 78% | 38% | 39% |
| g6 | 0–5bb | Second pair | AJ, KJ, J9, J8 | 67% | 50% | 0% | 32% |
| g7 | 0–5bb | Small pairs | 99, 88, 66–44, 22, AT, A7, A3, KT, K7, K3, T9, T8, 97, 87, 76, 75, 43 | 32% | 9% | 0% | 7% |
| g8 | Pot is too big | Ace-high | A9, A8, A6–A4, A2 | 4% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AK | straight | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K9 | straight | 98% | 100% | 100% | 83% | 50–100bb | g1 |
| 98 | straight | 95% | 100% | 100% | 60% | 50–100bb | g1 |
| JJ | twopair | 93% | 100% | 100% | 45% | 25–50bb | g2 |
| TT | twopair | 92% | 100% | 100% | 45% | 25–50bb | g2 |
| 77 | twopair | 93% | 100% | 100% | 47% | 25–50bb | g2 |
| 33 | twopair | 94% | 100% | 100% | 52% | 50–100bb | g2 |
| QQ | twopair | 93% | 100% | 100% | 52% | 50–100bb | g2 |
| KK | op | 84% | 77% | 50% | 48% | 15–25bb | g3 |
| AA | op | 82% | 78% | 51% | 26% | 25–50bb | g3 |
| QJ | twopair | 91% | 98% | 93% | 45% | 25–50bb | g4 |
| QT | twopair | 88% | 93% | 82% | 45% | 25–50bb | g4 |
| Q7 | twopair | 88% | 93% | 81% | 46% | 25–50bb | g4 |
| JT | twopair | 86% | 87% | 72% | 39% | 25–50bb | g4 |
| J7 | twopair | 85% | 84% | 63% | 34% | 25–50bb | g4 |
| T7 | twopair | 83% | 80% | 57% | 32% | 25–50bb | g4 |
| AQ | tpgk | 82% | 80% | 44% | 33% | 15–25bb | g5 |
| KQ | tpgk | 83% | 80% | 45% | 43% | 15–25bb | g5 |
| Q9 | tpmk | 81% | 76% | 35% | 43% | 15–25bb | g5 |
| Q8 | tpmk | 77% | 73% | 25% | 39% | 15–25bb | g5 |
| Q6 | tpmk | 76% | 73% | 20% | 40% | 15–25bb | g5 |
| Q5 | tpmk | 75% | 72% | 15% | 38% | 15–25bb | g5 |
| KJ | mp | 68% | 50% | 0% | 35% | 0–5bb | g6 |
| J9 | mp | 66% | 46% | 0% | 34% | 0–5bb | g6 |
| J8 | mp | 63% | 45% | 0% | 30% | 0–5bb | g6 |
| AJ | mp | 68% | 54% | 0% | 29% | 5–15bb | g6 |
| AT | bp | 56% | 30% | 0% | 17% | 0–5bb | g7 |
| KT | bp | 55% | 25% | 0% | 18% | 0–5bb | g7 |
| T9 | bp | 51% | 19% | 0% | 17% | 0–5bb | g7 |
| T8 | bp | 46% | 12% | 0% | 16% | 0–5bb | g7 |
| 99 | pp3 | 44% | 8% | 0% | 18% | 0–5bb | g7 |
| 88 | spp | 39% | 8% | 0% | 14% | 0–5bb | g7 |
| A7 | bp | 33% | 5% | 0% | 5% | 0–5bb | g7 |
| K7 | bp | 31% | 3% | 0% | 1% | 0–5bb | g7 |
| 97 | bp | 30% | 2% | 0% | 0% | 0–5bb | g7 |
| 87 | bp | 28% | 1% | 0% | 0% | 0–5bb | g7 |
| 76 | bp | 24% | 1% | 0% | 1% | 0–5bb | g7 |
| 75 | bp | 24% | 1% | 0% | 0% | 0–5bb | g7 |
| 66 | spp | 19% | 0% | 0% | 0% | 0–5bb | g7 |
| 55 | spp | 16% | 0% | 0% | 0% | 0–5bb | g7 |
| 44 | spp | 13% | 0% | 0% | 1% | 0–5bb | g7 |
| 43 | bp | 13% | 0% | 0% | 0% | 0–5bb | g7 |
| K3 | bp | 12% | 0% | 0% | 0% | 0–5bb | g7 |
| A3 | bp | 12% | 0% | 0% | 0% | 0–5bb | g7 |
| 22 | spp | 9% | 0% | 0% | 0% | 0–5bb | g7 |
| A9 | khnd | 6% | 0% | 0% | 0% | Pot is too big | g8 |
| A8 | khnd | 4% | 0% | 0% | 0% | Pot is too big | g8 |
| A5 | khnd | 4% | 0% | 0% | 0% | Pot is too big | g8 |
| A4 | khnd | 4% | 0% | 0% | 0% | Pot is too big | g8 |
| A2 | khnd | 4% | 0% | 0% | 0% | Pot is too big | g8 |
| A6 | khnd | 3% | 0% | 0% | 0% | Pot is too big | g8 |
