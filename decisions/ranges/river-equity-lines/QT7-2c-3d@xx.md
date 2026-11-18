# QT7-2c-3d@xx river (Q♥ T♦ 7♠ 2♣ 3♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | QQ, TT, 77, 33, 22 | 100% | 100% | 100% | 88% |
| g2 | 25–50bb | Two pair | QT, Q7, T7 | 97% | 100% | 100% | 35% |
| g3 | 25–50bb | Overpairs | AA, KK | 92% | 100% | 100% | 6% |
| g4 | 25–50bb | Top pair | AQ, KQ, QJ, Q9, Q8 | 92% | 97% | 81% | 8% |
| g5 | 15–25bb | Top pair, weak kicker | Q6, Q5 | 87% | 87% | 16% | 9% |
| g6 | 15–25bb | Big pocket pairs | JJ | 82% | 79% | 0% | 8% |
| g7 | 15–25bb | Second pair | AT, KT, JT, T9, T8 | 79% | 69% | 0% | 6% |
| g8 | 5–15bb | Small pairs | 99, 88 | 70% | 54% | 0% | 6% |
| g9 | 0–5bb | Small pairs | 66–44, A7, A3, A2, K7, K3, K2, J7, 97, 87, 76, 75, 43 | 57% | 34% | 0% | 1% |
| g10 | 0–5bb | Ace-high | AK, AJ, A9, A8, A6–A4 | 36% | 10% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| TT | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 33 | twopair | 99% | 100% | 100% | 80% | 50–100bb | g1 |
| 22 | twopair | 98% | 100% | 100% | 58% | 50–100bb | g1 |
| QT | twopair | 97% | 100% | 100% | 38% | 25–50bb | g2 |
| Q7 | twopair | 96% | 100% | 100% | 35% | 25–50bb | g2 |
| T7 | twopair | 95% | 100% | 100% | 15% | 25–50bb | g2 |
| AA | op | 92% | 100% | 100% | 5% | 25–50bb | g3 |
| KK | op | 93% | 100% | 100% | 8% | 25–50bb | g3 |
| AQ | tpgk | 94% | 100% | 100% | 8% | 25–50bb | g4 |
| KQ | tpgk | 93% | 100% | 98% | 8% | 25–50bb | g4 |
| Q9 | tpmk | 90% | 92% | 47% | 8% | 15–25bb | g4 |
| Q8 | tpmk | 88% | 89% | 28% | 8% | 15–25bb | g4 |
| QJ | tpmk | 92% | 97% | 81% | 8% | 25–50bb | g4 |
| Q6 | tpmk | 87% | 87% | 20% | 9% | 15–25bb | g5 |
| Q5 | tpmk | 88% | 86% | 12% | 8% | 15–25bb | g5 |
| JJ | pp1 | 82% | 79% | 0% | 8% | 15–25bb | g6 |
| AT | mp | 81% | 71% | 0% | 5% | 15–25bb | g7 |
| KT | mp | 81% | 69% | 0% | 6% | 15–25bb | g7 |
| JT | mp | 79% | 69% | 0% | 6% | 15–25bb | g7 |
| T9 | mp | 77% | 67% | 0% | 6% | 15–25bb | g7 |
| T8 | mp | 75% | 62% | 0% | 6% | 15–25bb | g7 |
| 99 | pp2 | 71% | 54% | 0% | 6% | 5–15bb | g8 |
| 88 | spp | 69% | 53% | 0% | 6% | 5–15bb | g8 |
| K7 | bp | 67% | 43% | 0% | 2% | 0–5bb | g9 |
| A7 | bp | 67% | 44% | 0% | 3% | 0–5bb | g9 |
| 97 | bp | 66% | 43% | 0% | 1% | 0–5bb | g9 |
| J7 | bp | 66% | 43% | 0% | 2% | 0–5bb | g9 |
| 87 | bp | 65% | 40% | 0% | 1% | 0–5bb | g9 |
| 76 | bp | 63% | 39% | 0% | 1% | 0–5bb | g9 |
| 75 | bp | 62% | 39% | 0% | 1% | 0–5bb | g9 |
| 66 | spp | 58% | 37% | 0% | 0% | 0–5bb | g9 |
| 55 | spp | 56% | 33% | 0% | 0% | 0–5bb | g9 |
| 44 | spp | 54% | 33% | 0% | 0% | 0–5bb | g9 |
| A3 | bp | 53% | 27% | 0% | 0% | 0–5bb | g9 |
| K3 | bp | 51% | 31% | 0% | 0% | 0–5bb | g9 |
| 43 | bp | 50% | 29% | 0% | 0% | 0–5bb | g9 |
| A2 | bp | 46% | 22% | 0% | 0% | 0–5bb | g9 |
| K2 | bp | 45% | 25% | 0% | 0% | 0–5bb | g9 |
| AJ | khnd | 41% | 18% | 0% | 0% | 0–5bb | g10 |
| AK | khnd | 41% | 21% | 0% | 0% | 0–5bb | g10 |
| A9 | khnd | 38% | 13% | 0% | 0% | 0–5bb | g10 |
| A8 | khnd | 36% | 8% | 0% | 0% | 0–5bb | g10 |
| A6 | khnd | 32% | 5% | 0% | 0% | 0–5bb | g10 |
| A5 | khnd | 32% | 3% | 0% | 0% | 0–5bb | g10 |
| A4 | khnd | 28% | 1% | 0% | 0% | 0–5bb | g10 |
