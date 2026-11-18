# 986-Kd-3h@bx river (9♠ 8♦ 6♣ K♦ 3♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | T7, 75 | 100% | 100% | 100% | 100% |
| g2 | 25–50bb | Sets | KK, 99, 88, 66, 33 | 100% | 100% | 100% | 98% |
| g3 | 15–25bb | Overpair | AA | 87% | 89% | 56% | 14% |
| g4 | 15–25bb | Two pair | K9, K8, K6, K3, 98, 96, 86 | 95% | 98% | 91% | 45% |
| g5 | 15–25bb | Top pair | AK, KQ–KT, K7, K5, K4, K2 | 90% | 90% | 33% | 19% |
| g6 | 15–25bb | Big pocket pairs | QQ–TT | 84% | 81% | 0% | 17% |
| g7 | 15–25bb | Second pair | A9, Q9 | 81% | 70% | 0% | 18% |
| g8 | 5–15bb | Second pair | J9, T9, 97 | 73% | 55% | 0% | 18% |
| g9 | 0–5bb | Small pairs | 77, 55, 44, 22, A8, A6, A3, Q8, Q6, J8, T8, 87, 76, 65, 64, 43 | 46% | 18% | 0% | 8% |
| g10 | Pot is too big | Ace-high | AQ–AT, A7, A5, A4, A2 | 23% | 4% | 0% | 1% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| T7 | straight | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 75 | straight | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KK | twopair | 100% | 100% | 100% | 100% | 50–100bb | g2 |
| 99 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g2 |
| 88 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g2 |
| 66 | twopair | 100% | 100% | 100% | 98% | 50–100bb | g2 |
| 33 | twopair | 100% | 100% | 100% | 92% | 50–100bb | g2 |
| AA | op | 87% | 89% | 56% | 14% | 25–50bb | g3 |
| K8 | twopair | 96% | 99% | 97% | 45% | 25–50bb | g4 |
| K6 | twopair | 94% | 98% | 86% | 38% | 25–50bb | g4 |
| 86 | twopair | 92% | 97% | 82% | 24% | 25–50bb | g4 |
| 98 | twopair | 93% | 96% | 81% | 34% | 25–50bb | g4 |
| K3 | twopair | 94% | 97% | 80% | 41% | 25–50bb | g4 |
| 96 | twopair | 91% | 96% | 78% | 27% | 25–50bb | g4 |
| K9 | twopair | 98% | 100% | 100% | 67% | 50–100bb | g4 |
| KQ | tpgk | 90% | 92% | 49% | 20% | 15–25bb | g5 |
| KJ | tpmk | 90% | 92% | 46% | 21% | 15–25bb | g5 |
| AK | tpgk | 90% | 91% | 50% | 19% | 15–25bb | g5 |
| KT | tpmk | 89% | 89% | 24% | 21% | 15–25bb | g5 |
| K7 | tpmk | 88% | 86% | 8% | 15% | 15–25bb | g5 |
| K5 | tpmk | 87% | 86% | 3% | 19% | 15–25bb | g5 |
| K4 | tpmk | 88% | 85% | 0% | 20% | 15–25bb | g5 |
| K2 | tpmk | 89% | 85% | 0% | 20% | 15–25bb | g5 |
| TT | pp1 | 85% | 83% | 0% | 16% | 15–25bb | g6 |
| JJ | pp1 | 83% | 81% | 0% | 17% | 15–25bb | g6 |
| QQ | pp1 | 83% | 80% | 0% | 16% | 15–25bb | g6 |
| A9 | mp | 82% | 72% | 0% | 18% | 15–25bb | g7 |
| Q9 | mp | 79% | 67% | 0% | 19% | 15–25bb | g7 |
| 97 | mp | 71% | 49% | 0% | 15% | 0–5bb | g8 |
| J9 | mp | 75% | 59% | 0% | 19% | 5–15bb | g8 |
| T9 | mp | 73% | 54% | 0% | 19% | 5–15bb | g8 |
| A8 | bp | 63% | 32% | 0% | 16% | 0–5bb | g9 |
| Q8 | bp | 61% | 29% | 0% | 15% | 0–5bb | g9 |
| J8 | bp | 60% | 30% | 0% | 16% | 0–5bb | g9 |
| T8 | bp | 59% | 29% | 0% | 16% | 0–5bb | g9 |
| 87 | bp | 55% | 24% | 0% | 12% | 0–5bb | g9 |
| 77 | pp3 | 47% | 21% | 0% | 6% | 0–5bb | g9 |
| A6 | bp | 46% | 15% | 0% | 7% | 0–5bb | g9 |
| Q6 | bp | 45% | 15% | 0% | 7% | 0–5bb | g9 |
| 76 | bp | 42% | 12% | 0% | 6% | 0–5bb | g9 |
| 65 | bp | 42% | 13% | 0% | 5% | 0–5bb | g9 |
| 64 | bp | 41% | 12% | 0% | 6% | 0–5bb | g9 |
| 55 | pp3 | 37% | 12% | 0% | 4% | 0–5bb | g9 |
| 44 | pp3 | 35% | 10% | 0% | 4% | 0–5bb | g9 |
| 22 | pp3 | 34% | 10% | 0% | 3% | 0–5bb | g9 |
| 43 | bp | 34% | 11% | 0% | 4% | 0–5bb | g9 |
| A3 | bp | 33% | 10% | 0% | 2% | 0–5bb | g9 |
| AQ | khnd | 30% | 8% | 0% | 2% | Pot is too big | g10 |
| AJ | khnd | 28% | 8% | 0% | 2% | Pot is too big | g10 |
| AT | khnd | 25% | 8% | 0% | 3% | Pot is too big | g10 |
| A7 | khnd | 22% | 3% | 0% | 1% | Pot is too big | g10 |
| A2 | khnd | 19% | 0% | 0% | 0% | Pot is too big | g10 |
| A4 | khnd | 19% | 0% | 0% | 0% | Pot is too big | g10 |
| A5 | khnd | 18% | 0% | 0% | 0% | Pot is too big | g10 |
