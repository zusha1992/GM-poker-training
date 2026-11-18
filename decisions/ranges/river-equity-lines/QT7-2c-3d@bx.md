# QT7-2c-3d@bx river (Q♥ T♦ 7♠ 2♣ 3♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | QQ, TT, 77, 33, 22 | 100% | 100% | 100% | 96% |
| g2 | 50–100bb | Two pair | QT, Q7, T7 | 96% | 100% | 100% | 64% |
| g3 | 50–100bb | Overpairs | AA, KK | 93% | 100% | 100% | 56% |
| g4 | 25–50bb | Top pair | AQ, KQ, QJ, Q9, Q8 | 92% | 95% | 72% | 48% |
| g5 | 15–25bb | Top pair, weak kicker | Q6, Q5 | 84% | 83% | 13% | 41% |
| g6 | 15–25bb | Big pocket pairs | JJ | 79% | 77% | 0% | 39% |
| g7 | 15–25bb | Second pair | AT, KT, JT | 71% | 62% | 0% | 27% |
| g8 | 5–15bb | Second pair | T9, T8 | 63% | 57% | 0% | 25% |
| g9 | 0–5bb | Small pairs | 99, 88, 66–44, A7, A3, A2, K7, K3, K2, J7, 97, 87, 76, 75, 43 | 37% | 18% | 0% | 5% |
| g10 | 0–5bb | Ace-high | AK, AJ, A9, A8, A6–A4 | 19% | 2% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| TT | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 33 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 22 | twopair | 98% | 100% | 100% | 81% | 50–100bb | g1 |
| Q7 | twopair | 97% | 100% | 100% | 65% | 50–100bb | g2 |
| QT | twopair | 96% | 100% | 100% | 64% | 50–100bb | g2 |
| T7 | twopair | 94% | 100% | 100% | 64% | 50–100bb | g2 |
| KK | op | 94% | 100% | 100% | 59% | 50–100bb | g3 |
| AA | op | 93% | 100% | 100% | 54% | 50–100bb | g3 |
| Q9 | tpmk | 86% | 86% | 26% | 41% | 15–25bb | g4 |
| Q8 | tpmk | 85% | 84% | 16% | 41% | 15–25bb | g4 |
| QJ | tpmk | 91% | 93% | 63% | 44% | 25–50bb | g4 |
| AQ | tpgk | 94% | 100% | 100% | 54% | 50–100bb | g4 |
| KQ | tpgk | 94% | 99% | 95% | 52% | 50–100bb | g4 |
| Q5 | tpmk | 83% | 83% | 11% | 41% | 15–25bb | g5 |
| Q6 | tpmk | 85% | 83% | 14% | 41% | 15–25bb | g5 |
| JJ | pp1 | 78% | 77% | 0% | 39% | 15–25bb | g6 |
| AT | mp | 73% | 64% | 0% | 28% | 15–25bb | g7 |
| JT | mp | 68% | 62% | 0% | 26% | 15–25bb | g7 |
| KT | mp | 71% | 61% | 0% | 26% | 15–25bb | g7 |
| T9 | mp | 64% | 59% | 0% | 25% | 5–15bb | g8 |
| T8 | mp | 61% | 53% | 0% | 25% | 5–15bb | g8 |
| 88 | spp | 54% | 41% | 0% | 21% | 0–5bb | g9 |
| 99 | pp2 | 54% | 42% | 0% | 20% | 0–5bb | g9 |
| A7 | bp | 47% | 25% | 0% | 10% | 0–5bb | g9 |
| K7 | bp | 46% | 22% | 0% | 6% | 0–5bb | g9 |
| 87 | bp | 44% | 18% | 0% | 3% | 0–5bb | g9 |
| J7 | bp | 43% | 19% | 0% | 6% | 0–5bb | g9 |
| 97 | bp | 42% | 20% | 0% | 4% | 0–5bb | g9 |
| 76 | bp | 39% | 16% | 0% | 3% | 0–5bb | g9 |
| 75 | bp | 39% | 15% | 0% | 2% | 0–5bb | g9 |
| 66 | spp | 34% | 14% | 0% | 0% | 0–5bb | g9 |
| 55 | spp | 32% | 13% | 0% | 0% | 0–5bb | g9 |
| 44 | spp | 28% | 13% | 0% | 0% | 0–5bb | g9 |
| 43 | bp | 28% | 12% | 0% | 0% | 0–5bb | g9 |
| A2 | bp | 26% | 9% | 0% | 0% | 0–5bb | g9 |
| K2 | bp | 26% | 11% | 0% | 0% | 0–5bb | g9 |
| A3 | bp | 26% | 9% | 0% | 0% | 0–5bb | g9 |
| K3 | bp | 25% | 12% | 0% | 0% | 0–5bb | g9 |
| AK | khnd | 23% | 9% | 0% | 0% | 0–5bb | g10 |
| AJ | khnd | 22% | 5% | 0% | 0% | 0–5bb | g10 |
| A8 | khnd | 19% | 0% | 0% | 0% | 0–5bb | g10 |
| A9 | khnd | 19% | 1% | 0% | 0% | 0–5bb | g10 |
| A4 | khnd | 19% | 0% | 0% | 0% | 0–5bb | g10 |
| A5 | khnd | 18% | 0% | 0% | 0% | 0–5bb | g10 |
| A6 | khnd | 17% | 0% | 0% | 0% | 0–5bb | g10 |
