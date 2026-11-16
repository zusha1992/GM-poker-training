# QT7-5d-2c river (Q♥ T♦ 7♠ 5♦ 2♣): equity groups

Generated 2026-11-16 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | QQ, TT, 77, 55, 22 | 100% | 100% | 100% | 100% |
| g2 | 50–100bb | Two pair | QT, Q7, Q5, T7, 75 | 99% | 100% | 100% | 97% |
| g3 | 25–50bb | Overpairs | AA, KK | 95% | 100% | 100% | 74% |
| g4 | 25–50bb | Top pair | AQ, KQ, QJ | 94% | 99% | 89% | 70% |
| g5 | 15–25bb | Top pair, good kicker | Q9, Q8 | 85% | 90% | 12% | 49% |
| g6 | 15–25bb | Big pocket pairs | JJ | 70% | 87% | 0% | 44% |
| g7 | 5–15bb | Second pair | AT, KT | 60% | 62% | 0% | 10% |
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
| Q7 | twopair | 100% | 100% | 100% | 99% | 50–100bb | g2 |
| QT | twopair | 100% | 100% | 100% | 99% | 50–100bb | g2 |
| Q5 | twopair | 100% | 100% | 100% | 99% | 50–100bb | g2 |
| T7 | twopair | 97% | 100% | 100% | 88% | 50–100bb | g2 |
| 75 | twopair | 97% | 100% | 100% | 84% | 50–100bb | g2 |
| KK | op | 96% | 100% | 100% | 77% | 50–100bb | g3 |
| AA | op | 95% | 100% | 100% | 72% | 50–100bb | g3 |
| KQ | tpgk | 95% | 100% | 100% | 74% | 50–100bb | g4 |
| AQ | tpgk | 96% | 100% | 100% | 73% | 50–100bb | g4 |
| QJ | tpmk | 92% | 96% | 67% | 63% | 50–100bb | g4 |
| Q9 | tpmk | 86% | 90% | 15% | 50% | 15–25bb | g5 |
| Q8 | tpmk | 83% | 89% | 4% | 45% | 15–25bb | g5 |
| JJ | pp1 | 70% | 87% | 0% | 44% | 15–25bb | g6 |
| AT | mp | 62% | 69% | 0% | 15% | 15–25bb | g7 |
| KT | mp | 58% | 56% | 0% | 5% | 5–15bb | g7 |
| Q6 | tpmk | 81% | 88% | 2% | 45% | 15–25bb | g8 |
| JT | mp | 52% | 46% | 0% | 5% | 0–5bb | g9 |
| T9 | mp | 46% | 33% | 0% | 5% | 0–5bb | g9 |
| T8 | mp | 43% | 27% | 0% | 5% | 0–5bb | g9 |
| 99 | pp2 | 33% | 16% | 0% | 4% | 0–5bb | g10 |
| 88 | spp | 31% | 16% | 0% | 4% | 0–5bb | g10 |
| A7 | bp | 27% | 9% | 0% | 1% | 0–5bb | g10 |
| K7 | bp | 24% | 9% | 0% | 0% | 0–5bb | g10 |
| 97 | bp | 23% | 8% | 0% | 0% | 0–5bb | g10 |
| J7 | bp | 23% | 7% | 0% | 0% | 0–5bb | g10 |
| 87 | bp | 22% | 8% | 0% | 0% | 0–5bb | g10 |
| 76 | bp | 20% | 8% | 0% | 0% | 0–5bb | g10 |
| 54 | bp | 19% | 7% | 0% | 0% | 0–5bb | g10 |
| 33 | spp | 19% | 7% | 0% | 0% | 0–5bb | g10 |
| 44 | spp | 19% | 6% | 0% | 0% | 0–5bb | g10 |
| K5 | bp | 18% | 6% | 0% | 0% | 0–5bb | g10 |
| 65 | bp | 18% | 7% | 0% | 0% | 0–5bb | g10 |
| 66 | spp | 18% | 7% | 0% | 0% | 0–5bb | g10 |
| A5 | bp | 17% | 5% | 0% | 0% | 0–5bb | g10 |
| A2 | bp | 17% | 5% | 0% | 0% | 0–5bb | g10 |
| K2 | bp | 17% | 6% | 0% | 0% | 0–5bb | g10 |
| AK | khnd | 17% | 5% | 0% | 0% | Pot is too big | g11 |
| AJ | khnd | 13% | 2% | 0% | 0% | Pot is too big | g11 |
| A3 | khnd | 12% | 0% | 0% | 0% | Pot is too big | g11 |
| A6 | khnd | 12% | 0% | 0% | 0% | Pot is too big | g11 |
| A9 | khnd | 12% | 0% | 0% | 0% | Pot is too big | g11 |
| A8 | khnd | 11% | 0% | 0% | 0% | Pot is too big | g11 |
| A4 | khnd | 11% | 0% | 0% | 0% | Pot is too big | g11 |
