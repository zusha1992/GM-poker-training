# QT7-5d-2c river (Q♥ T♦ 7♠ 5♦ 2♣): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | QQ, TT, 77, 55, 22 | 100% | 100% | 100% | 100% |
| g2 | 50–100bb | Two pair | QT, Q7, Q5, T7, 75 | 99% | 100% | 100% | 97% |
| g3 | 50–100bb | Overpairs | AA, KK | 96% | 100% | 100% | 74% |
| g4 | 50–100bb | Top pair | AQ, KQ, QJ | 94% | 99% | 89% | 71% |
| g5 | 15–25bb | Top pair, good kicker | Q9, Q8 | 85% | 90% | 11% | 49% |
| g6 | 15–25bb | Big pocket pairs | JJ | 69% | 87% | 0% | 44% |
| g7 | 5–15bb | Second pair | AT, KT | 60% | 63% | 0% | 10% |
| g8 | 0–5bb | Top pair, weak kicker | Q6 | 81% | 88% | 2% | 45% |
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
| QT | twopair | 100% | 100% | 100% | 99% | 50–100bb | g2 |
| Q7 | twopair | 100% | 100% | 100% | 99% | 50–100bb | g2 |
| Q5 | twopair | 100% | 100% | 100% | 99% | 50–100bb | g2 |
| T7 | twopair | 97% | 100% | 100% | 89% | 50–100bb | g2 |
| 75 | twopair | 97% | 100% | 100% | 84% | 50–100bb | g2 |
| KK | op | 95% | 100% | 100% | 75% | 50–100bb | g3 |
| AA | op | 96% | 100% | 100% | 72% | 50–100bb | g3 |
| KQ | tpgk | 95% | 100% | 100% | 74% | 50–100bb | g4 |
| AQ | tpgk | 96% | 100% | 100% | 73% | 50–100bb | g4 |
| QJ | tpmk | 92% | 97% | 67% | 65% | 50–100bb | g4 |
| Q9 | tpmk | 86% | 90% | 14% | 50% | 15–25bb | g5 |
| Q8 | tpmk | 83% | 88% | 4% | 46% | 15–25bb | g5 |
| JJ | pp1 | 69% | 87% | 0% | 44% | 15–25bb | g6 |
| AT | mp | 61% | 68% | 0% | 14% | 15–25bb | g7 |
| KT | mp | 58% | 58% | 0% | 5% | 5–15bb | g7 |
| Q6 | tpmk | 81% | 88% | 2% | 45% | 15–25bb | g8 |
| JT | mp | 51% | 46% | 0% | 5% | 0–5bb | g9 |
| T9 | mp | 48% | 33% | 0% | 5% | 0–5bb | g9 |
| T8 | mp | 41% | 27% | 0% | 5% | 0–5bb | g9 |
| 99 | pp2 | 34% | 17% | 0% | 4% | 0–5bb | g10 |
| 88 | spp | 31% | 17% | 0% | 4% | 0–5bb | g10 |
| A7 | bp | 26% | 9% | 0% | 1% | 0–5bb | g10 |
| K7 | bp | 24% | 9% | 0% | 0% | 0–5bb | g10 |
| 97 | bp | 22% | 7% | 0% | 0% | 0–5bb | g10 |
| J7 | bp | 22% | 7% | 0% | 0% | 0–5bb | g10 |
| 87 | bp | 22% | 7% | 0% | 0% | 0–5bb | g10 |
| 76 | bp | 21% | 8% | 0% | 0% | 0–5bb | g10 |
| 33 | spp | 19% | 7% | 0% | 0% | 0–5bb | g10 |
| 66 | spp | 18% | 6% | 0% | 0% | 0–5bb | g10 |
| 54 | bp | 18% | 7% | 0% | 0% | 0–5bb | g10 |
| 65 | bp | 18% | 7% | 0% | 0% | 0–5bb | g10 |
| 44 | spp | 18% | 7% | 0% | 0% | 0–5bb | g10 |
| A5 | bp | 18% | 5% | 0% | 0% | 0–5bb | g10 |
| K5 | bp | 17% | 6% | 0% | 0% | 0–5bb | g10 |
| A2 | bp | 17% | 6% | 0% | 0% | 0–5bb | g10 |
| K2 | bp | 17% | 7% | 0% | 0% | 0–5bb | g10 |
| AK | khnd | 17% | 5% | 0% | 0% | Pot is too big | g11 |
| AJ | khnd | 14% | 2% | 0% | 0% | Pot is too big | g11 |
| A6 | khnd | 12% | 0% | 0% | 0% | Pot is too big | g11 |
| A3 | khnd | 12% | 0% | 0% | 0% | Pot is too big | g11 |
| A9 | khnd | 12% | 0% | 0% | 0% | Pot is too big | g11 |
| A8 | khnd | 12% | 0% | 0% | 0% | Pot is too big | g11 |
| A4 | khnd | 12% | 0% | 0% | 0% | Pot is too big | g11 |
