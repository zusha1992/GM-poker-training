# QT7-5d-2c@xx river (Q♥ T♦ 7♠ 5♦ 2♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | QQ, TT, 77, 55, 22 | 100% | 100% | 100% | 91% |
| g2 | 25–50bb | Two pair | QT, Q7, Q5, T7, 75 | 97% | 100% | 100% | 40% |
| g3 | 25–50bb | Overpairs | AA, KK | 91% | 98% | 92% | 0% |
| g4 | 25–50bb | Top pair | AQ, KQ, QJ, Q9, Q8 | 91% | 95% | 67% | 0% |
| g5 | 15–25bb | Top pair, weak kicker | Q6 | 87% | 88% | 15% | 0% |
| g6 | 15–25bb | Big pocket pairs | JJ | 81% | 82% | 0% | 0% |
| g7 | 15–25bb | Second pair | AT, KT, JT, T9, T8 | 78% | 72% | 0% | 0% |
| g8 | 5–15bb | Small pairs | 99, 88 | 68% | 55% | 0% | 0% |
| g9 | 0–5bb | Small pairs | 66, 44, 33, A7, A5, A2, K7, K5, K2, J7, 97, 87, 76, 65, 54 | 55% | 34% | 0% | 0% |
| g10 | 0–5bb | Ace-high | AK, AJ, A9, A8, A6, A4, A3 | 33% | 8% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| TT | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 55 | twopair | 99% | 100% | 100% | 86% | 50–100bb | g1 |
| 22 | twopair | 98% | 100% | 100% | 69% | 50–100bb | g1 |
| QT | twopair | 97% | 100% | 100% | 47% | 25–50bb | g2 |
| Q7 | twopair | 96% | 100% | 100% | 43% | 25–50bb | g2 |
| Q5 | twopair | 97% | 100% | 100% | 36% | 25–50bb | g2 |
| T7 | twopair | 95% | 99% | 98% | 19% | 25–50bb | g2 |
| 75 | twopair | 94% | 100% | 98% | 8% | 25–50bb | g2 |
| AA | op | 91% | 98% | 92% | 0% | 25–50bb | g3 |
| KK | op | 91% | 98% | 91% | 0% | 25–50bb | g3 |
| Q9 | tpmk | 89% | 91% | 33% | 0% | 15–25bb | g4 |
| AQ | tpgk | 92% | 98% | 90% | 0% | 25–50bb | g4 |
| Q8 | tpmk | 87% | 88% | 19% | 0% | 15–25bb | g4 |
| KQ | tpgk | 92% | 98% | 83% | 0% | 25–50bb | g4 |
| QJ | tpmk | 91% | 94% | 60% | 0% | 25–50bb | g4 |
| Q6 | tpmk | 87% | 88% | 15% | 0% | 15–25bb | g5 |
| JJ | pp1 | 81% | 82% | 0% | 0% | 15–25bb | g6 |
| KT | mp | 79% | 74% | 0% | 0% | 15–25bb | g7 |
| AT | mp | 80% | 73% | 0% | 0% | 15–25bb | g7 |
| JT | mp | 78% | 72% | 0% | 0% | 15–25bb | g7 |
| T9 | mp | 77% | 68% | 0% | 0% | 15–25bb | g7 |
| T8 | mp | 74% | 63% | 0% | 0% | 15–25bb | g7 |
| 99 | pp2 | 68% | 56% | 0% | 0% | 5–15bb | g8 |
| 88 | spp | 68% | 53% | 0% | 0% | 5–15bb | g8 |
| A7 | bp | 65% | 43% | 0% | 0% | 0–5bb | g9 |
| K7 | bp | 65% | 45% | 0% | 0% | 0–5bb | g9 |
| 97 | bp | 64% | 43% | 0% | 0% | 0–5bb | g9 |
| J7 | bp | 64% | 43% | 0% | 0% | 0–5bb | g9 |
| 87 | bp | 62% | 43% | 0% | 0% | 0–5bb | g9 |
| 76 | bp | 62% | 42% | 0% | 0% | 0–5bb | g9 |
| 66 | spp | 56% | 37% | 0% | 0% | 0–5bb | g9 |
| K5 | bp | 55% | 32% | 0% | 0% | 0–5bb | g9 |
| A5 | bp | 55% | 31% | 0% | 0% | 0–5bb | g9 |
| 65 | bp | 53% | 29% | 0% | 0% | 0–5bb | g9 |
| 54 | bp | 52% | 29% | 0% | 0% | 0–5bb | g9 |
| 44 | spp | 47% | 26% | 0% | 0% | 0–5bb | g9 |
| 33 | spp | 45% | 25% | 0% | 0% | 0–5bb | g9 |
| K2 | bp | 44% | 24% | 0% | 0% | 0–5bb | g9 |
| A2 | bp | 44% | 21% | 0% | 0% | 0–5bb | g9 |
| AK | khnd | 39% | 19% | 0% | 0% | 0–5bb | g10 |
| AJ | khnd | 38% | 16% | 0% | 0% | 0–5bb | g10 |
| A9 | khnd | 36% | 10% | 0% | 0% | 0–5bb | g10 |
| A8 | khnd | 34% | 7% | 0% | 0% | 0–5bb | g10 |
| A6 | khnd | 30% | 4% | 0% | 0% | 0–5bb | g10 |
| A3 | khnd | 27% | 1% | 0% | 0% | 0–5bb | g10 |
| A4 | khnd | 27% | 1% | 0% | 0% | 0–5bb | g10 |
