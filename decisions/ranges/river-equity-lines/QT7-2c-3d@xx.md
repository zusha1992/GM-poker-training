# QT7-2c-3d@xx river (Q♥ T♦ 7♠ 2♣ 3♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | QQ, TT, 77, 33, 22 | 100% | 100% | 100% | 87% |
| g2 | 25–50bb | Two pair | QT, Q7, T7 | 96% | 100% | 100% | 34% |
| g3 | 25–50bb | Overpairs | AA, KK | 92% | 100% | 100% | 7% |
| g4 | 25–50bb | Top pair | AQ, KQ, QJ, Q9, Q8 | 92% | 97% | 81% | 8% |
| g5 | 15–25bb | Top pair, weak kicker | Q6, Q5 | 88% | 86% | 17% | 8% |
| g6 | 15–25bb | Big pocket pairs | JJ | 82% | 80% | 0% | 7% |
| g7 | 15–25bb | Second pair | AT, KT, JT, T9, T8 | 79% | 69% | 0% | 6% |
| g8 | 5–15bb | Small pairs | 99, 88 | 68% | 54% | 0% | 6% |
| g9 | 0–5bb | Small pairs | 66–44, A7, A3, A2, K7, K3, K2, J7, 97, 87, 76, 75, 43 | 57% | 34% | 0% | 1% |
| g10 | 0–5bb | Ace-high | AK, AJ, A9, A8, A6–A4 | 36% | 9% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| TT | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 33 | twopair | 99% | 100% | 100% | 79% | 50–100bb | g1 |
| 22 | twopair | 98% | 100% | 100% | 58% | 50–100bb | g1 |
| QT | twopair | 97% | 100% | 100% | 37% | 25–50bb | g2 |
| Q7 | twopair | 96% | 100% | 100% | 35% | 25–50bb | g2 |
| T7 | twopair | 95% | 100% | 100% | 15% | 25–50bb | g2 |
| AA | op | 92% | 100% | 100% | 5% | 25–50bb | g3 |
| KK | op | 92% | 100% | 100% | 8% | 25–50bb | g3 |
| AQ | tpgk | 94% | 100% | 100% | 7% | 25–50bb | g4 |
| KQ | tpgk | 94% | 100% | 98% | 8% | 25–50bb | g4 |
| Q9 | tpmk | 90% | 92% | 47% | 9% | 15–25bb | g4 |
| Q8 | tpmk | 88% | 88% | 28% | 9% | 15–25bb | g4 |
| QJ | tpmk | 92% | 97% | 81% | 9% | 25–50bb | g4 |
| Q6 | tpmk | 88% | 87% | 21% | 8% | 15–25bb | g5 |
| Q5 | tpmk | 87% | 86% | 13% | 8% | 15–25bb | g5 |
| JJ | pp1 | 82% | 80% | 0% | 7% | 15–25bb | g6 |
| AT | mp | 82% | 71% | 0% | 6% | 15–25bb | g7 |
| KT | mp | 80% | 70% | 0% | 6% | 15–25bb | g7 |
| JT | mp | 78% | 69% | 0% | 6% | 15–25bb | g7 |
| T9 | mp | 76% | 66% | 0% | 6% | 15–25bb | g7 |
| T8 | mp | 74% | 62% | 0% | 7% | 15–25bb | g7 |
| 99 | pp2 | 70% | 54% | 0% | 6% | 5–15bb | g8 |
| 88 | spp | 67% | 54% | 0% | 6% | 5–15bb | g8 |
| A7 | bp | 68% | 43% | 0% | 3% | 0–5bb | g9 |
| J7 | bp | 66% | 42% | 0% | 2% | 0–5bb | g9 |
| K7 | bp | 66% | 44% | 0% | 2% | 0–5bb | g9 |
| 87 | bp | 65% | 40% | 0% | 1% | 0–5bb | g9 |
| 97 | bp | 65% | 42% | 0% | 1% | 0–5bb | g9 |
| 76 | bp | 63% | 39% | 0% | 1% | 0–5bb | g9 |
| 75 | bp | 62% | 38% | 0% | 1% | 0–5bb | g9 |
| 66 | spp | 58% | 36% | 0% | 0% | 0–5bb | g9 |
| 55 | spp | 55% | 34% | 0% | 0% | 0–5bb | g9 |
| 44 | spp | 53% | 33% | 0% | 0% | 0–5bb | g9 |
| K3 | bp | 52% | 30% | 0% | 0% | 0–5bb | g9 |
| A3 | bp | 52% | 29% | 0% | 0% | 0–5bb | g9 |
| 43 | bp | 52% | 28% | 0% | 0% | 0–5bb | g9 |
| A2 | bp | 47% | 23% | 0% | 0% | 0–5bb | g9 |
| K2 | bp | 46% | 26% | 0% | 0% | 0–5bb | g9 |
| AK | khnd | 42% | 19% | 0% | 0% | 0–5bb | g10 |
| AJ | khnd | 42% | 18% | 0% | 0% | 0–5bb | g10 |
| A9 | khnd | 39% | 13% | 0% | 0% | 0–5bb | g10 |
| A8 | khnd | 34% | 8% | 0% | 0% | 0–5bb | g10 |
| A6 | khnd | 33% | 5% | 0% | 0% | 0–5bb | g10 |
| A5 | khnd | 31% | 3% | 0% | 0% | 0–5bb | g10 |
| A4 | khnd | 29% | 1% | 0% | 0% | 0–5bb | g10 |
