# QT7-Jh-3c@xx river (Q♥ T♦ 7♠ J♥ 3♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | AK, K9, 98 | 99% | 100% | 100% | 89% |
| g2 | 25–50bb | Sets | QQ–TT, 77, 33 | 94% | 100% | 100% | 49% |
| g3 | 15–25bb | Overpairs | AA, KK | 84% | 73% | 42% | 33% |
| g4 | 15–25bb | Two pair | QJ, QT, Q7, JT, J7, T7 | 90% | 88% | 74% | 38% |
| g5 | 15–25bb | Top pair | AQ, KQ, Q9, Q8, Q6, Q5 | 84% | 72% | 31% | 35% |
| g6 | 0–5bb | Second pair | AJ, KJ, J9, J8 | 74% | 46% | 0% | 27% |
| g7 | 0–5bb | Small pairs | 99, 88, 66–44, 22, AT, A7, A3, KT, K7, K3, T9, T8, 97, 87, 76, 75, 43 | 50% | 7% | 0% | 7% |
| g8 | Pot is too big | Ace-high | A9, A8, A6–A4, A2 | 22% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AK | straight | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K9 | straight | 99% | 100% | 100% | 84% | 50–100bb | g1 |
| 98 | straight | 97% | 100% | 100% | 61% | 50–100bb | g1 |
| JJ | twopair | 95% | 100% | 100% | 49% | 25–50bb | g2 |
| TT | twopair | 94% | 100% | 100% | 48% | 25–50bb | g2 |
| 77 | twopair | 95% | 100% | 100% | 48% | 25–50bb | g2 |
| 33 | twopair | 94% | 99% | 98% | 47% | 25–50bb | g2 |
| QQ | twopair | 95% | 100% | 100% | 53% | 50–100bb | g2 |
| KK | op | 86% | 73% | 42% | 44% | 15–25bb | g3 |
| AA | op | 83% | 72% | 43% | 21% | 15–25bb | g3 |
| QJ | twopair | 92% | 96% | 89% | 42% | 25–50bb | g4 |
| QT | twopair | 91% | 91% | 76% | 40% | 25–50bb | g4 |
| Q7 | twopair | 91% | 89% | 72% | 40% | 25–50bb | g4 |
| JT | twopair | 88% | 81% | 64% | 33% | 25–50bb | g4 |
| J7 | twopair | 87% | 80% | 58% | 34% | 25–50bb | g4 |
| T7 | twopair | 86% | 77% | 51% | 31% | 25–50bb | g4 |
| AQ | tpgk | 85% | 75% | 38% | 28% | 15–25bb | g5 |
| KQ | tpgk | 85% | 74% | 36% | 39% | 15–25bb | g5 |
| Q9 | tpmk | 84% | 71% | 28% | 39% | 15–25bb | g5 |
| Q8 | tpmk | 83% | 67% | 20% | 34% | 15–25bb | g5 |
| Q6 | tpmk | 81% | 67% | 16% | 34% | 15–25bb | g5 |
| Q5 | tpmk | 81% | 66% | 11% | 34% | 15–25bb | g5 |
| KJ | mp | 74% | 45% | 0% | 30% | 0–5bb | g6 |
| AJ | mp | 74% | 49% | 0% | 24% | 0–5bb | g6 |
| J9 | mp | 73% | 43% | 0% | 29% | 0–5bb | g6 |
| J8 | mp | 71% | 37% | 0% | 27% | 0–5bb | g6 |
| KT | bp | 64% | 18% | 0% | 15% | 0–5bb | g7 |
| T9 | bp | 63% | 12% | 0% | 14% | 0–5bb | g7 |
| AT | bp | 63% | 21% | 0% | 14% | 0–5bb | g7 |
| T8 | bp | 58% | 9% | 0% | 13% | 0–5bb | g7 |
| 99 | pp3 | 57% | 6% | 0% | 15% | 0–5bb | g7 |
| 88 | spp | 54% | 6% | 0% | 12% | 0–5bb | g7 |
| K7 | bp | 51% | 3% | 0% | 2% | 0–5bb | g7 |
| 97 | bp | 51% | 2% | 0% | 3% | 0–5bb | g7 |
| 87 | bp | 50% | 2% | 0% | 2% | 0–5bb | g7 |
| A7 | bp | 50% | 4% | 0% | 5% | 0–5bb | g7 |
| 76 | bp | 48% | 2% | 0% | 2% | 0–5bb | g7 |
| 75 | bp | 46% | 2% | 0% | 2% | 0–5bb | g7 |
| 66 | spp | 42% | 2% | 0% | 2% | 0–5bb | g7 |
| 55 | spp | 40% | 1% | 0% | 2% | 0–5bb | g7 |
| K3 | bp | 39% | 2% | 0% | 0% | 0–5bb | g7 |
| 44 | spp | 38% | 2% | 0% | 2% | 0–5bb | g7 |
| A3 | bp | 36% | 1% | 0% | 1% | 0–5bb | g7 |
| 43 | bp | 35% | 1% | 0% | 0% | 0–5bb | g7 |
| 22 | spp | 33% | 1% | 0% | 0% | 0–5bb | g7 |
| A9 | khnd | 29% | 0% | 0% | 0% | Pot is too big | g8 |
| A8 | khnd | 25% | 0% | 0% | 0% | Pot is too big | g8 |
| A4 | khnd | 20% | 0% | 0% | 0% | Pot is too big | g8 |
| A2 | khnd | 20% | 0% | 0% | 0% | Pot is too big | g8 |
| A6 | khnd | 20% | 0% | 0% | 0% | Pot is too big | g8 |
| A5 | khnd | 19% | 0% | 0% | 0% | Pot is too big | g8 |
