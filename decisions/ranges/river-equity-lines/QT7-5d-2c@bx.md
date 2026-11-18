# QT7-5d-2c@bx river (Q♥ T♦ 7♠ 5♦ 2♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | QQ, TT, 77, 55, 22 | 100% | 100% | 100% | 96% |
| g2 | 50–100bb | Two pair | QT, Q7, Q5, T7, 75 | 97% | 100% | 100% | 68% |
| g3 | 25–50bb | Overpairs | AA, KK | 92% | 100% | 100% | 37% |
| g4 | 25–50bb | Top pair, top kicker | AQ, KQ | 92% | 99% | 95% | 36% |
| g5 | 15–25bb | Top pair | QJ, Q9, Q8, Q6 | 87% | 90% | 32% | 31% |
| g6 | 15–25bb | Big pocket pairs | JJ | 76% | 82% | 0% | 28% |
| g7 | 15–25bb | Second pair | AT, KT, JT, T9, T8 | 68% | 65% | 0% | 20% |
| g8 | 0–5bb | Small pairs | 99, 88, 66, 44, 33, A7, A5, A2, K7, K5, K2, J7, 97, 87, 76, 65, 54 | 37% | 20% | 0% | 4% |
| g9 | 0–5bb | Ace-high | AK, AJ, A9, A8, A6, A4, A3 | 20% | 3% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| TT | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 55 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 22 | twopair | 98% | 100% | 100% | 82% | 50–100bb | g1 |
| Q5 | twopair | 97% | 100% | 100% | 75% | 50–100bb | g2 |
| Q7 | twopair | 96% | 100% | 100% | 68% | 50–100bb | g2 |
| QT | twopair | 97% | 100% | 100% | 68% | 50–100bb | g2 |
| T7 | twopair | 94% | 100% | 100% | 60% | 50–100bb | g2 |
| 75 | twopair | 95% | 100% | 100% | 54% | 50–100bb | g2 |
| AA | op | 92% | 100% | 100% | 35% | 25–50bb | g3 |
| KK | op | 92% | 100% | 100% | 39% | 25–50bb | g3 |
| AQ | tpgk | 93% | 100% | 100% | 35% | 25–50bb | g4 |
| KQ | tpgk | 92% | 99% | 90% | 36% | 25–50bb | g4 |
| QJ | tpmk | 89% | 93% | 49% | 31% | 15–25bb | g5 |
| Q9 | tpmk | 86% | 87% | 19% | 30% | 15–25bb | g5 |
| Q6 | tpmk | 83% | 86% | 15% | 30% | 15–25bb | g5 |
| Q8 | tpmk | 83% | 86% | 15% | 30% | 15–25bb | g5 |
| JJ | pp1 | 76% | 82% | 0% | 28% | 15–25bb | g6 |
| AT | mp | 72% | 69% | 0% | 20% | 15–25bb | g7 |
| KT | mp | 70% | 65% | 0% | 20% | 15–25bb | g7 |
| JT | mp | 67% | 65% | 0% | 20% | 15–25bb | g7 |
| T9 | mp | 63% | 62% | 0% | 19% | 15–25bb | g7 |
| T8 | mp | 60% | 55% | 0% | 20% | 5–15bb | g7 |
| 99 | pp2 | 53% | 42% | 0% | 18% | 0–5bb | g8 |
| 88 | spp | 51% | 42% | 0% | 17% | 0–5bb | g8 |
| A7 | bp | 46% | 28% | 0% | 9% | 0–5bb | g8 |
| K7 | bp | 44% | 23% | 0% | 4% | 0–5bb | g8 |
| J7 | bp | 44% | 21% | 0% | 4% | 0–5bb | g8 |
| 87 | bp | 42% | 19% | 0% | 1% | 0–5bb | g8 |
| 97 | bp | 41% | 21% | 0% | 2% | 0–5bb | g8 |
| 76 | bp | 39% | 18% | 0% | 1% | 0–5bb | g8 |
| K5 | bp | 34% | 15% | 0% | 0% | 0–5bb | g8 |
| 65 | bp | 33% | 15% | 0% | 0% | 0–5bb | g8 |
| A5 | bp | 33% | 13% | 0% | 0% | 0–5bb | g8 |
| 66 | spp | 33% | 15% | 0% | 0% | 0–5bb | g8 |
| 54 | bp | 32% | 15% | 0% | 0% | 0–5bb | g8 |
| 44 | spp | 30% | 16% | 0% | 0% | 0–5bb | g8 |
| 33 | spp | 27% | 12% | 0% | 0% | 0–5bb | g8 |
| K2 | bp | 26% | 12% | 0% | 0% | 0–5bb | g8 |
| A2 | bp | 25% | 10% | 0% | 0% | 0–5bb | g8 |
| AK | khnd | 23% | 10% | 0% | 0% | 0–5bb | g9 |
| AJ | khnd | 23% | 5% | 0% | 0% | 0–5bb | g9 |
| A9 | khnd | 19% | 1% | 0% | 0% | 0–5bb | g9 |
| A8 | khnd | 19% | 1% | 0% | 0% | 0–5bb | g9 |
| A3 | khnd | 19% | 0% | 0% | 0% | 0–5bb | g9 |
| A4 | khnd | 18% | 0% | 0% | 0% | 0–5bb | g9 |
| A6 | khnd | 18% | 0% | 0% | 0% | 0–5bb | g9 |
