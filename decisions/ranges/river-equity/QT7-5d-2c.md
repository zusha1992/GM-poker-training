# QT7-5d-2c river (Q♥ T♦ 7♠ 5♦ 2♣): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | QQ, TT, 77, 55, 22 | 100% | 100% | 100% | 100% |
| g2 | 50–100bb | Two pair | QT, Q7, Q5, T7, 75 | 99% | 100% | 100% | 97% |
| g3 | 50–100bb | Overpairs | AA, KK | 95% | 100% | 100% | 74% |
| g4 | 50–100bb | Top pair | AQ, KQ, QJ | 94% | 99% | 89% | 71% |
| g5 | 15–25bb | Top pair | Q9, Q8, Q6 | 84% | 89% | 9% | 48% |
| g6 | 15–25bb | Big pocket pairs | JJ | 70% | 86% | 0% | 44% |
| g7 | 5–15bb | Second pair | AT, KT, JT | 58% | 57% | 0% | 8% |
| g8 | Pot is too big | Second pair | T9, T8 | 46% | 31% | 0% | 5% |
| g9 | Pot is too big | Small pairs | 99, 88, 66, 44, 33, A7, A5, A2, K7, K5, K2, J7, 97, 87, 76, 65, 54 | 22% | 8% | 0% | 1% |
| g10 | Pot is too big | Ace-high | AK, AJ, A9, A8, A6, A4, A3 | 13% | 1% | 0% | 0% |

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
| KK | op | 96% | 100% | 100% | 77% | 50–100bb | g3 |
| AA | op | 95% | 100% | 100% | 71% | 50–100bb | g3 |
| KQ | tpgk | 95% | 100% | 100% | 75% | 50–100bb | g4 |
| AQ | tpgk | 96% | 100% | 100% | 73% | 50–100bb | g4 |
| QJ | tpmk | 92% | 96% | 66% | 63% | 50–100bb | g4 |
| Q9 | tpmk | 86% | 90% | 15% | 50% | 15–25bb | g5 |
| Q6 | tpmk | 80% | 89% | 2% | 46% | 15–25bb | g5 |
| Q8 | tpmk | 82% | 88% | 4% | 46% | 15–25bb | g5 |
| JJ | pp1 | 70% | 86% | 0% | 44% | 15–25bb | g6 |
| AT | mp | 63% | 67% | 0% | 15% | 15–25bb | g7 |
| KT | mp | 58% | 57% | 0% | 5% | 5–15bb | g7 |
| JT | mp | 52% | 46% | 0% | 5% | 0–5bb | g7 |
| T9 | mp | 48% | 33% | 0% | 5% | Pot is too big | g8 |
| T8 | mp | 42% | 26% | 0% | 5% | Pot is too big | g8 |
| 99 | pp2 | 35% | 16% | 0% | 4% | Pot is too big | g9 |
| 88 | spp | 32% | 16% | 0% | 4% | Pot is too big | g9 |
| A7 | bp | 26% | 9% | 0% | 1% | Pot is too big | g9 |
| K7 | bp | 25% | 9% | 0% | 0% | Pot is too big | g9 |
| 97 | bp | 23% | 8% | 0% | 0% | Pot is too big | g9 |
| J7 | bp | 22% | 8% | 0% | 0% | Pot is too big | g9 |
| 87 | bp | 22% | 8% | 0% | 0% | Pot is too big | g9 |
| 76 | bp | 21% | 7% | 0% | 0% | Pot is too big | g9 |
| 44 | spp | 19% | 6% | 0% | 0% | Pot is too big | g9 |
| 66 | spp | 19% | 6% | 0% | 0% | Pot is too big | g9 |
| 65 | bp | 18% | 7% | 0% | 0% | Pot is too big | g9 |
| 33 | spp | 18% | 7% | 0% | 0% | Pot is too big | g9 |
| 54 | bp | 18% | 7% | 0% | 0% | Pot is too big | g9 |
| K5 | bp | 18% | 7% | 0% | 0% | Pot is too big | g9 |
| A2 | bp | 18% | 5% | 0% | 0% | Pot is too big | g9 |
| A5 | bp | 17% | 6% | 0% | 0% | Pot is too big | g9 |
| K2 | bp | 17% | 7% | 0% | 0% | Pot is too big | g9 |
| AK | khnd | 17% | 5% | 0% | 0% | Pot is too big | g10 |
| AJ | khnd | 13% | 2% | 0% | 0% | Pot is too big | g10 |
| A4 | khnd | 13% | 0% | 0% | 0% | Pot is too big | g10 |
| A3 | khnd | 12% | 0% | 0% | 0% | Pot is too big | g10 |
| A9 | khnd | 12% | 0% | 0% | 0% | Pot is too big | g10 |
| A6 | khnd | 12% | 0% | 0% | 0% | Pot is too big | g10 |
| A8 | khnd | 12% | 0% | 0% | 0% | Pot is too big | g10 |
