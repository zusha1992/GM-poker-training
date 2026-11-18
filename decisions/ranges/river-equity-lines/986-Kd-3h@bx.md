# 986-Kd-3h@bx river (9♠ 8♦ 6♣ K♦ 3♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | T7, 75 | 100% | 100% | 100% | 100% |
| g2 | 25–50bb | Sets | KK, 99, 88, 66, 33 | 100% | 100% | 100% | 98% |
| g3 | 15–25bb | Overpair | AA | 88% | 89% | 56% | 14% |
| g4 | 15–25bb | Two pair | K9, K8, K6, K3, 98, 96, 86 | 95% | 99% | 91% | 45% |
| g5 | 15–25bb | Top pair | AK, KQ–KT, K7, K5, K4, K2 | 90% | 90% | 33% | 19% |
| g6 | 15–25bb | Big pocket pairs | QQ–TT | 84% | 81% | 0% | 17% |
| g7 | 15–25bb | Second pair | A9, Q9 | 82% | 70% | 0% | 19% |
| g8 | 5–15bb | Second pair | J9, T9, 97 | 73% | 56% | 0% | 19% |
| g9 | 0–5bb | Small pairs | 77, 55, 44, 22, A8, A6, A3, Q8, Q6, J8, T8, 87, 76, 65, 64, 43 | 45% | 18% | 0% | 8% |
| g10 | Pot is too big | Ace-high | AQ–AT, A7, A5, A4, A2 | 23% | 4% | 0% | 1% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| T7 | straight | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 75 | straight | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KK | twopair | 100% | 100% | 100% | 100% | 50–100bb | g2 |
| 99 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g2 |
| 88 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g2 |
| 66 | twopair | 100% | 100% | 100% | 97% | 50–100bb | g2 |
| 33 | twopair | 100% | 100% | 100% | 92% | 50–100bb | g2 |
| AA | op | 88% | 89% | 56% | 14% | 25–50bb | g3 |
| K8 | twopair | 95% | 100% | 97% | 44% | 25–50bb | g4 |
| K6 | twopair | 94% | 98% | 86% | 37% | 25–50bb | g4 |
| 86 | twopair | 91% | 97% | 81% | 24% | 25–50bb | g4 |
| 98 | twopair | 93% | 96% | 81% | 32% | 25–50bb | g4 |
| K3 | twopair | 94% | 97% | 79% | 39% | 25–50bb | g4 |
| 96 | twopair | 91% | 96% | 77% | 29% | 25–50bb | g4 |
| K9 | twopair | 98% | 100% | 100% | 67% | 50–100bb | g4 |
| KJ | tpmk | 90% | 92% | 46% | 20% | 15–25bb | g5 |
| AK | tpgk | 90% | 91% | 49% | 19% | 15–25bb | g5 |
| KT | tpmk | 89% | 89% | 24% | 20% | 15–25bb | g5 |
| K7 | tpmk | 87% | 87% | 8% | 16% | 15–25bb | g5 |
| K5 | tpmk | 88% | 86% | 3% | 19% | 15–25bb | g5 |
| K4 | tpmk | 88% | 85% | 0% | 20% | 15–25bb | g5 |
| K2 | tpmk | 88% | 85% | 0% | 20% | 15–25bb | g5 |
| KQ | tpgk | 91% | 93% | 51% | 19% | 25–50bb | g5 |
| TT | pp1 | 84% | 82% | 0% | 17% | 15–25bb | g6 |
| JJ | pp1 | 84% | 81% | 0% | 16% | 15–25bb | g6 |
| QQ | pp1 | 83% | 80% | 0% | 17% | 15–25bb | g6 |
| A9 | mp | 83% | 72% | 0% | 18% | 15–25bb | g7 |
| Q9 | mp | 79% | 67% | 0% | 19% | 15–25bb | g7 |
| 97 | mp | 71% | 49% | 0% | 15% | 0–5bb | g8 |
| J9 | mp | 75% | 59% | 0% | 19% | 5–15bb | g8 |
| T9 | mp | 72% | 55% | 0% | 19% | 5–15bb | g8 |
| A8 | bp | 63% | 32% | 0% | 15% | 0–5bb | g9 |
| Q8 | bp | 61% | 30% | 0% | 16% | 0–5bb | g9 |
| J8 | bp | 61% | 30% | 0% | 17% | 0–5bb | g9 |
| T8 | bp | 57% | 29% | 0% | 16% | 0–5bb | g9 |
| 87 | bp | 56% | 24% | 0% | 12% | 0–5bb | g9 |
| 77 | pp3 | 48% | 19% | 0% | 6% | 0–5bb | g9 |
| A6 | bp | 45% | 15% | 0% | 7% | 0–5bb | g9 |
| Q6 | bp | 45% | 14% | 0% | 7% | 0–5bb | g9 |
| 76 | bp | 43% | 12% | 0% | 6% | 0–5bb | g9 |
| 65 | bp | 41% | 14% | 0% | 5% | 0–5bb | g9 |
| 64 | bp | 41% | 12% | 0% | 6% | 0–5bb | g9 |
| 55 | pp3 | 36% | 11% | 0% | 4% | 0–5bb | g9 |
| 43 | bp | 35% | 11% | 0% | 4% | 0–5bb | g9 |
| 44 | pp3 | 34% | 11% | 0% | 4% | 0–5bb | g9 |
| A3 | bp | 33% | 10% | 0% | 3% | 0–5bb | g9 |
| 22 | pp3 | 33% | 9% | 0% | 4% | 0–5bb | g9 |
| AJ | khnd | 28% | 8% | 0% | 2% | Pot is too big | g10 |
| AQ | khnd | 28% | 8% | 0% | 3% | Pot is too big | g10 |
| AT | khnd | 25% | 8% | 0% | 3% | Pot is too big | g10 |
| A7 | khnd | 21% | 3% | 0% | 1% | Pot is too big | g10 |
| A2 | khnd | 19% | 0% | 0% | 0% | Pot is too big | g10 |
| A5 | khnd | 19% | 0% | 0% | 0% | Pot is too big | g10 |
| A4 | khnd | 18% | 0% | 0% | 0% | Pot is too big | g10 |
