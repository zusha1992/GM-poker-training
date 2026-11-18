# QT7-2c-9h@xx river (Q♥ T♦ 7♠ 2♣ 9♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 25–50bb | Straights | KJ, J8, 86 | 98% | 100% | 100% | 56% |
| g2 | 25–50bb | Sets | QQ, TT, 99, 77, 22 | 94% | 100% | 100% | 12% |
| g3 | 15–25bb | Overpairs | AA, KK | 84% | 72% | 3% | 17% |
| g4 | 15–25bb | Two pair | QT, Q9, Q7, T9, T7, 97 | 90% | 90% | 56% | 12% |
| g5 | 15–25bb | Top pair | AQ, KQ, QJ, Q8, Q6, Q5 | 85% | 77% | 2% | 15% |
| g6 | 15–25bb | Big pocket pairs | JJ | 78% | 72% | 0% | 14% |
| g7 | 15–25bb | Second pair | AT, KT | 74% | 68% | 0% | 14% |
| g8 | 5–15bb | Second pair | JT, T8 | 72% | 58% | 0% | 10% |
| g9 | 0–5bb | Small pairs | 88, 66–33, A9, A7, A2, K9, K7, K2, J9, J7, 98, 96, 87, 76, 75 | 50% | 15% | 0% | 5% |
| g10 | Pot is too big | Ace-high | AK, AJ, A8, A6–A3 | 26% | 1% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| J8 | straight | 97% | 100% | 100% | 25% | 25–50bb | g1 |
| 86 | straight | 96% | 100% | 100% | 15% | 25–50bb | g1 |
| KJ | straight | 99% | 100% | 100% | 70% | 50–100bb | g1 |
| QQ | twopair | 94% | 100% | 100% | 14% | 25–50bb | g2 |
| TT | twopair | 94% | 100% | 100% | 11% | 25–50bb | g2 |
| 99 | twopair | 95% | 100% | 100% | 12% | 25–50bb | g2 |
| 77 | twopair | 94% | 100% | 100% | 13% | 25–50bb | g2 |
| 22 | twopair | 93% | 99% | 98% | 12% | 25–50bb | g2 |
| KK | op | 85% | 73% | 3% | 20% | 15–25bb | g3 |
| AA | op | 83% | 72% | 3% | 13% | 15–25bb | g3 |
| QT | twopair | 91% | 97% | 86% | 12% | 25–50bb | g4 |
| T9 | twopair | 88% | 81% | 24% | 11% | 15–25bb | g4 |
| T7 | twopair | 87% | 79% | 12% | 11% | 15–25bb | g4 |
| 97 | twopair | 86% | 78% | 7% | 12% | 15–25bb | g4 |
| Q9 | twopair | 91% | 93% | 64% | 12% | 25–50bb | g4 |
| Q7 | twopair | 90% | 90% | 53% | 12% | 25–50bb | g4 |
| Q8 | tpmk | 82% | 78% | 0% | 15% | 15–25bb | g5 |
| KQ | tpgk | 86% | 78% | 2% | 16% | 15–25bb | g5 |
| Q6 | tpmk | 81% | 78% | 0% | 14% | 15–25bb | g5 |
| Q5 | tpmk | 81% | 78% | 0% | 14% | 15–25bb | g5 |
| QJ | tpmk | 84% | 77% | 1% | 14% | 15–25bb | g5 |
| AQ | tpgk | 85% | 77% | 3% | 14% | 15–25bb | g5 |
| JJ | pp1 | 78% | 72% | 0% | 14% | 15–25bb | g6 |
| AT | mp | 74% | 70% | 0% | 12% | 15–25bb | g7 |
| KT | mp | 74% | 66% | 0% | 15% | 15–25bb | g7 |
| JT | mp | 73% | 58% | 0% | 10% | 5–15bb | g8 |
| T8 | mp | 71% | 56% | 0% | 10% | 5–15bb | g8 |
| K9 | bp | 63% | 32% | 0% | 10% | 0–5bb | g9 |
| A9 | bp | 63% | 35% | 0% | 8% | 0–5bb | g9 |
| J9 | bp | 62% | 24% | 0% | 7% | 0–5bb | g9 |
| 98 | bp | 60% | 20% | 0% | 5% | 0–5bb | g9 |
| 96 | bp | 59% | 20% | 0% | 4% | 0–5bb | g9 |
| 88 | spp | 55% | 16% | 0% | 5% | 0–5bb | g9 |
| J7 | bp | 52% | 9% | 0% | 4% | 0–5bb | g9 |
| K7 | bp | 51% | 12% | 0% | 5% | 0–5bb | g9 |
| A7 | bp | 51% | 12% | 0% | 5% | 0–5bb | g9 |
| 87 | bp | 51% | 10% | 0% | 3% | 0–5bb | g9 |
| 76 | bp | 48% | 9% | 0% | 3% | 0–5bb | g9 |
| 75 | bp | 47% | 8% | 0% | 3% | 0–5bb | g9 |
| 66 | spp | 44% | 7% | 0% | 3% | 0–5bb | g9 |
| 55 | spp | 40% | 8% | 0% | 3% | 0–5bb | g9 |
| 44 | spp | 40% | 7% | 0% | 3% | 0–5bb | g9 |
| 33 | spp | 38% | 7% | 0% | 3% | 0–5bb | g9 |
| K2 | bp | 37% | 6% | 0% | 2% | 0–5bb | g9 |
| A2 | bp | 36% | 5% | 0% | 2% | 0–5bb | g9 |
| AK | khnd | 31% | 4% | 0% | 0% | Pot is too big | g10 |
| AJ | khnd | 31% | 1% | 0% | 0% | Pot is too big | g10 |
| A8 | khnd | 28% | 0% | 0% | 0% | Pot is too big | g10 |
| A3 | khnd | 23% | 0% | 0% | 0% | Pot is too big | g10 |
| A6 | khnd | 23% | 0% | 0% | 0% | Pot is too big | g10 |
| A4 | khnd | 22% | 0% | 0% | 0% | Pot is too big | g10 |
| A5 | khnd | 22% | 0% | 0% | 0% | Pot is too big | g10 |
