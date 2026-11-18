# QT7-2c-9h@bx river (Q♥ T♦ 7♠ 2♣ 9♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | KJ, J8 | 98% | 100% | 100% | 79% |
| g2 | 25–50bb | Straights | 86 | 94% | 100% | 100% | 47% |
| g3 | 25–50bb | Sets | QQ, TT, 99, 77, 22 | 92% | 100% | 100% | 39% |
| g4 | 15–25bb | Overpairs | AA, KK | 81% | 77% | 52% | 26% |
| g5 | 15–25bb | Two pair | QT, Q9, Q7, T9, T7, 97 | 87% | 94% | 86% | 30% |
| g6 | 15–25bb | Top pair | AQ, KQ, QJ, Q8, Q6, Q5 | 80% | 77% | 37% | 22% |
| g7 | 5–15bb | Big pocket pairs | JJ | 71% | 55% | 0% | 17% |
| g8 | 0–5bb | Second pair | AT, KT, JT, T8 | 62% | 40% | 0% | 13% |
| g9 | 0–5bb | Small pairs | 88, 66–33, A9, A7, A2, K9, K7, K2, J9, J7, 98, 96, 87, 76, 75 | 28% | 7% | 0% | 2% |
| g10 | Pot is too big | Ace-high | AK, AJ, A8, A6–A3 | 2% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| KJ | straight | 99% | 100% | 100% | 84% | 50–100bb | g1 |
| J8 | straight | 96% | 100% | 100% | 57% | 50–100bb | g1 |
| 86 | straight | 94% | 100% | 100% | 47% | 25–50bb | g2 |
| QQ | twopair | 92% | 100% | 100% | 38% | 25–50bb | g3 |
| TT | twopair | 92% | 100% | 100% | 39% | 25–50bb | g3 |
| 99 | twopair | 93% | 100% | 100% | 32% | 25–50bb | g3 |
| 22 | twopair | 93% | 100% | 100% | 43% | 25–50bb | g3 |
| 77 | twopair | 92% | 100% | 100% | 41% | 25–50bb | g3 |
| AA | op | 80% | 78% | 53% | 24% | 25–50bb | g4 |
| KK | op | 82% | 77% | 51% | 28% | 25–50bb | g4 |
| QT | twopair | 89% | 100% | 99% | 35% | 25–50bb | g5 |
| Q9 | twopair | 89% | 98% | 93% | 31% | 25–50bb | g5 |
| Q7 | twopair | 87% | 93% | 83% | 31% | 25–50bb | g5 |
| T9 | twopair | 85% | 88% | 72% | 25% | 25–50bb | g5 |
| 97 | twopair | 84% | 84% | 62% | 25% | 25–50bb | g5 |
| T7 | twopair | 83% | 80% | 60% | 22% | 25–50bb | g5 |
| AQ | tpgk | 81% | 80% | 47% | 24% | 15–25bb | g6 |
| KQ | tpgk | 82% | 79% | 45% | 25% | 15–25bb | g6 |
| QJ | tpmk | 79% | 76% | 34% | 20% | 15–25bb | g6 |
| Q8 | tpmk | 77% | 72% | 23% | 19% | 15–25bb | g6 |
| Q6 | tpmk | 77% | 70% | 18% | 19% | 15–25bb | g6 |
| Q5 | tpmk | 75% | 68% | 13% | 18% | 15–25bb | g6 |
| JJ | pp1 | 71% | 55% | 0% | 17% | 5–15bb | g7 |
| AT | mp | 64% | 47% | 0% | 15% | 0–5bb | g8 |
| KT | mp | 63% | 41% | 0% | 15% | 0–5bb | g8 |
| JT | mp | 59% | 36% | 0% | 11% | 0–5bb | g8 |
| T8 | mp | 57% | 30% | 0% | 9% | 0–5bb | g8 |
| K9 | bp | 48% | 17% | 0% | 7% | 0–5bb | g9 |
| A9 | bp | 47% | 19% | 0% | 6% | 0–5bb | g9 |
| J9 | bp | 45% | 14% | 0% | 5% | 0–5bb | g9 |
| 98 | bp | 42% | 12% | 0% | 3% | 0–5bb | g9 |
| 96 | bp | 40% | 11% | 0% | 3% | 0–5bb | g9 |
| 88 | spp | 38% | 9% | 0% | 3% | 0–5bb | g9 |
| A7 | bp | 31% | 6% | 0% | 2% | 0–5bb | g9 |
| J7 | bp | 30% | 4% | 0% | 1% | 0–5bb | g9 |
| K7 | bp | 29% | 5% | 0% | 2% | 0–5bb | g9 |
| 87 | bp | 27% | 2% | 0% | 0% | 0–5bb | g9 |
| 76 | bp | 24% | 2% | 0% | 0% | 0–5bb | g9 |
| 75 | bp | 22% | 1% | 0% | 0% | 0–5bb | g9 |
| 66 | spp | 18% | 0% | 0% | 0% | 0–5bb | g9 |
| 55 | spp | 15% | 0% | 0% | 0% | 0–5bb | g9 |
| 44 | spp | 11% | 0% | 0% | 0% | 0–5bb | g9 |
| 33 | spp | 8% | 0% | 0% | 0% | 0–5bb | g9 |
| K2 | bp | 7% | 0% | 0% | 0% | 0–5bb | g9 |
| A2 | bp | 5% | 0% | 0% | 0% | 0–5bb | g9 |
| AK | khnd | 6% | 0% | 0% | 0% | Pot is too big | g10 |
| AJ | khnd | 4% | 0% | 0% | 0% | Pot is too big | g10 |
| A8 | khnd | 2% | 0% | 0% | 0% | Pot is too big | g10 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
