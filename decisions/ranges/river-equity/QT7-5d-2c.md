# QT7-5d-2c river (Q♥ T♦ 7♠ 5♦ 2♣): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | QQ, TT, 77, 55, 22 | 100% | 100% | 100% | 100% |
| g2 | 50–100bb | Two pair | QT, Q7, Q5, T7, 75 | 99% | 100% | 100% | 97% |
| g3 | 25–50bb | Overpairs | AA, KK | 96% | 100% | 100% | 74% |
| g4 | 25–50bb | Top pair | AQ, KQ, QJ, Q9 | 93% | 97% | 76% | 67% |
| g5 | 15–25bb | Top pair, good kicker | Q8 | 83% | 88% | 3% | 46% |
| g6 | 15–25bb | Big pocket pairs | JJ | 70% | 86% | 0% | 44% |
| g7 | 5–15bb | Second pair | AT, KT | 60% | 62% | 0% | 10% |
| g8 | 0–5bb | Top pair, weak kicker | Q6 | 81% | 89% | 2% | 46% |
| g9 | 0–5bb | Second pair | JT, T9, T8 | 49% | 39% | 0% | 5% |
| g10 | 0–5bb | Small pairs | 99, 88, 66, 44, 33, A7, A5, A2, K7, K5, K2, J7, 97, 87, 76, 65, 54 | 22% | 8% | 0% | 1% |
| g11 | Pot is too big | Ace-high | AK, AJ, A9, A8, A6, A4, A3 | 13% | 1% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| TT | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 55 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 22 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| Q7 | twopair | 100% | 100% | 100% | 99% | 50–100bb | g2 |
| QT | twopair | 100% | 100% | 100% | 99% | 50–100bb | g2 |
| Q5 | twopair | 100% | 100% | 100% | 98% | 50–100bb | g2 |
| T7 | twopair | 97% | 100% | 100% | 89% | 50–100bb | g2 |
| 75 | twopair | 96% | 100% | 100% | 83% | 50–100bb | g2 |
| KK | op | 96% | 100% | 100% | 76% | 50–100bb | g3 |
| AA | op | 96% | 100% | 100% | 71% | 50–100bb | g3 |
| KQ | tpgk | 95% | 100% | 100% | 74% | 50–100bb | g4 |
| AQ | tpgk | 96% | 100% | 100% | 73% | 50–100bb | g4 |
| QJ | tpmk | 92% | 96% | 67% | 64% | 50–100bb | g4 |
| Q9 | tpmk | 87% | 90% | 14% | 50% | 50–100bb | g4 |
| Q8 | tpmk | 83% | 88% | 3% | 46% | 15–25bb | g5 |
| JJ | pp1 | 70% | 86% | 0% | 44% | 15–25bb | g6 |
| AT | mp | 63% | 67% | 0% | 14% | 15–25bb | g7 |
| KT | mp | 57% | 57% | 0% | 5% | 5–15bb | g7 |
| Q6 | tpmk | 81% | 89% | 2% | 46% | 15–25bb | g8 |
| JT | mp | 52% | 46% | 0% | 6% | 0–5bb | g9 |
| T9 | mp | 46% | 33% | 0% | 5% | 0–5bb | g9 |
| T8 | mp | 42% | 27% | 0% | 5% | 0–5bb | g9 |
| 99 | pp2 | 33% | 16% | 0% | 4% | 0–5bb | g10 |
| 88 | spp | 32% | 15% | 0% | 4% | 0–5bb | g10 |
| A7 | bp | 26% | 10% | 0% | 1% | 0–5bb | g10 |
| K7 | bp | 25% | 8% | 0% | 0% | 0–5bb | g10 |
| 97 | bp | 24% | 8% | 0% | 0% | 0–5bb | g10 |
| J7 | bp | 22% | 7% | 0% | 0% | 0–5bb | g10 |
| 87 | bp | 21% | 8% | 0% | 0% | 0–5bb | g10 |
| 76 | bp | 21% | 8% | 0% | 0% | 0–5bb | g10 |
| 54 | bp | 19% | 6% | 0% | 0% | 0–5bb | g10 |
| 33 | spp | 19% | 6% | 0% | 0% | 0–5bb | g10 |
| 66 | spp | 18% | 6% | 0% | 0% | 0–5bb | g10 |
| 44 | spp | 18% | 7% | 0% | 0% | 0–5bb | g10 |
| A5 | bp | 18% | 5% | 0% | 0% | 0–5bb | g10 |
| K5 | bp | 18% | 6% | 0% | 0% | 0–5bb | g10 |
| 65 | bp | 17% | 6% | 0% | 0% | 0–5bb | g10 |
| A2 | bp | 17% | 5% | 0% | 0% | 0–5bb | g10 |
| K2 | bp | 17% | 7% | 0% | 0% | 0–5bb | g10 |
| AK | khnd | 16% | 5% | 0% | 0% | Pot is too big | g11 |
| AJ | khnd | 14% | 2% | 0% | 0% | Pot is too big | g11 |
| A3 | khnd | 13% | 0% | 0% | 0% | Pot is too big | g11 |
| A4 | khnd | 13% | 0% | 0% | 0% | Pot is too big | g11 |
| A9 | khnd | 13% | 0% | 0% | 0% | Pot is too big | g11 |
| A8 | khnd | 13% | 0% | 0% | 0% | Pot is too big | g11 |
| A6 | khnd | 12% | 0% | 0% | 0% | Pot is too big | g11 |
