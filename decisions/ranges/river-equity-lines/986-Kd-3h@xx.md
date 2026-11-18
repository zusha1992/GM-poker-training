# 986-Kd-3h@xx river (9♠ 8♦ 6♣ K♦ 3♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | T7, 75 | 99% | 100% | 100% | 90% |
| g2 | 25–50bb | Sets | KK, 99, 88, 66, 33 | 98% | 100% | 100% | 52% |
| g3 | 15–25bb | Overpair | AA | 88% | 90% | 56% | 0% |
| g4 | 15–25bb | Two pair | K9, K8, K6, K3, 98, 96, 86 | 94% | 99% | 96% | 11% |
| g5 | 15–25bb | Top pair | AK, KQ–KT, K7, K5, K4, K2 | 88% | 90% | 30% | 0% |
| g6 | 15–25bb | Big pocket pairs | QQ–TT | 80% | 82% | 0% | 0% |
| g7 | 15–25bb | Second pair | A9, Q9, J9, T9, 97 | 76% | 71% | 0% | 0% |
| g8 | 0–5bb | Small pairs | 77, 55, 44, 22, A8, A6, A3, Q8, Q6, J8, T8, 87, 76, 65, 64, 43 | 55% | 31% | 0% | 0% |
| g9 | Pot is too big | Ace-high | AQ–AT, A7, A5, A4, A2 | 31% | 9% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| T7 | straight | 100% | 100% | 100% | 96% | 50–100bb | g1 |
| 75 | straight | 99% | 100% | 100% | 84% | 50–100bb | g1 |
| 66 | twopair | 97% | 100% | 100% | 45% | 25–50bb | g2 |
| 33 | twopair | 96% | 100% | 100% | 34% | 25–50bb | g2 |
| KK | twopair | 98% | 100% | 100% | 64% | 50–100bb | g2 |
| 99 | twopair | 98% | 100% | 100% | 64% | 50–100bb | g2 |
| 88 | twopair | 98% | 100% | 100% | 54% | 50–100bb | g2 |
| AA | op | 88% | 90% | 56% | 0% | 25–50bb | g3 |
| K9 | twopair | 95% | 100% | 100% | 18% | 25–50bb | g4 |
| K8 | twopair | 94% | 100% | 100% | 12% | 25–50bb | g4 |
| K6 | twopair | 94% | 100% | 98% | 10% | 25–50bb | g4 |
| K3 | twopair | 93% | 99% | 93% | 10% | 25–50bb | g4 |
| 98 | twopair | 92% | 98% | 86% | 4% | 25–50bb | g4 |
| 96 | twopair | 91% | 97% | 81% | 2% | 25–50bb | g4 |
| 86 | twopair | 92% | 96% | 77% | 1% | 25–50bb | g4 |
| AK | tpgk | 89% | 93% | 48% | 0% | 15–25bb | g5 |
| KQ | tpgk | 89% | 92% | 43% | 0% | 15–25bb | g5 |
| KJ | tpmk | 88% | 90% | 30% | 0% | 15–25bb | g5 |
| KT | tpmk | 87% | 89% | 22% | 0% | 15–25bb | g5 |
| K5 | tpmk | 86% | 88% | 16% | 0% | 15–25bb | g5 |
| K7 | tpmk | 86% | 87% | 19% | 0% | 15–25bb | g5 |
| K4 | tpmk | 85% | 87% | 11% | 0% | 15–25bb | g5 |
| K2 | tpmk | 85% | 87% | 4% | 0% | 15–25bb | g5 |
| JJ | pp1 | 80% | 83% | 0% | 0% | 15–25bb | g6 |
| QQ | pp1 | 79% | 82% | 0% | 0% | 15–25bb | g6 |
| TT | pp1 | 80% | 82% | 0% | 0% | 15–25bb | g6 |
| A9 | mp | 78% | 77% | 0% | 0% | 15–25bb | g7 |
| Q9 | mp | 78% | 72% | 0% | 0% | 15–25bb | g7 |
| J9 | mp | 75% | 69% | 0% | 0% | 15–25bb | g7 |
| T9 | mp | 73% | 65% | 0% | 0% | 15–25bb | g7 |
| 97 | mp | 73% | 61% | 0% | 0% | 15–25bb | g7 |
| A8 | bp | 67% | 46% | 0% | 0% | 0–5bb | g8 |
| Q8 | bp | 65% | 45% | 0% | 0% | 0–5bb | g8 |
| J8 | bp | 65% | 45% | 0% | 0% | 0–5bb | g8 |
| 87 | bp | 63% | 40% | 0% | 0% | 0–5bb | g8 |
| T8 | bp | 62% | 44% | 0% | 0% | 0–5bb | g8 |
| 77 | pp3 | 59% | 34% | 0% | 0% | 0–5bb | g8 |
| Q6 | bp | 56% | 32% | 0% | 0% | 0–5bb | g8 |
| A6 | bp | 56% | 31% | 0% | 0% | 0–5bb | g8 |
| 76 | bp | 54% | 29% | 0% | 0% | 0–5bb | g8 |
| 65 | bp | 52% | 29% | 0% | 0% | 0–5bb | g8 |
| 64 | bp | 52% | 27% | 0% | 0% | 0–5bb | g8 |
| 55 | pp3 | 48% | 24% | 0% | 0% | 0–5bb | g8 |
| 44 | pp3 | 48% | 22% | 0% | 0% | 0–5bb | g8 |
| A3 | bp | 46% | 20% | 0% | 0% | 0–5bb | g8 |
| 43 | bp | 43% | 20% | 0% | 0% | 0–5bb | g8 |
| 22 | pp3 | 41% | 16% | 0% | 0% | 0–5bb | g8 |
| AQ | khnd | 37% | 14% | 0% | 0% | Pot is too big | g9 |
| AJ | khnd | 36% | 15% | 0% | 0% | Pot is too big | g9 |
| AT | khnd | 34% | 14% | 0% | 0% | Pot is too big | g9 |
| A7 | khnd | 32% | 9% | 0% | 0% | Pot is too big | g9 |
| A5 | khnd | 27% | 4% | 0% | 0% | Pot is too big | g9 |
| A2 | khnd | 27% | 4% | 0% | 0% | Pot is too big | g9 |
| A4 | khnd | 26% | 4% | 0% | 0% | Pot is too big | g9 |
