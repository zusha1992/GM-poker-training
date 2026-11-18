# 986-2h-Kc@bx river (9♠ 8♦ 6♣ 2♥ K♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | T7, 75 | 100% | 100% | 100% | 100% |
| g2 | 25–50bb | Sets | KK, 99, 88, 66, 22 | 100% | 100% | 100% | 98% |
| g3 | 15–25bb | Overpair | AA | 88% | 93% | 64% | 13% |
| g4 | 15–25bb | Two pair | K9, K8, K6, K2, 98, 96, 86 | 95% | 98% | 88% | 38% |
| g5 | 15–25bb | Top pair | AK, KQ–KT, K7, K5–K3 | 91% | 93% | 40% | 16% |
| g6 | 15–25bb | Big pocket pairs | QQ–TT | 85% | 85% | 0% | 13% |
| g7 | 15–25bb | Second pair | A9, Q9, J9, T9 | 81% | 68% | 0% | 15% |
| g8 | 0–5bb | Second pair | 97 | 73% | 50% | 0% | 12% |
| g9 | 0–5bb | Small pairs | 77, 55–33, A8, A6, A2, Q8, Q6, J8, T8, 87, 76, 65, 64 | 46% | 18% | 0% | 5% |
| g10 | Pot is too big | Ace-high | AQ–AT, A7, A5–A3 | 22% | 3% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| T7 | straight | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 75 | straight | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KK | twopair | 100% | 100% | 100% | 100% | 50–100bb | g2 |
| 99 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g2 |
| 88 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g2 |
| 66 | twopair | 100% | 100% | 100% | 97% | 50–100bb | g2 |
| 22 | twopair | 100% | 100% | 100% | 91% | 50–100bb | g2 |
| AA | op | 88% | 93% | 64% | 13% | 25–50bb | g3 |
| K8 | twopair | 96% | 100% | 97% | 40% | 25–50bb | g4 |
| K6 | twopair | 94% | 98% | 85% | 30% | 25–50bb | g4 |
| 86 | twopair | 91% | 96% | 75% | 15% | 25–50bb | g4 |
| 96 | twopair | 91% | 96% | 74% | 19% | 25–50bb | g4 |
| K2 | twopair | 94% | 97% | 73% | 33% | 25–50bb | g4 |
| 98 | twopair | 92% | 95% | 73% | 23% | 25–50bb | g4 |
| K9 | twopair | 98% | 100% | 100% | 59% | 50–100bb | g4 |
| KT | tpmk | 90% | 92% | 30% | 16% | 15–25bb | g5 |
| K7 | tpmk | 89% | 90% | 10% | 12% | 15–25bb | g5 |
| K3 | tpmk | 89% | 89% | 0% | 16% | 15–25bb | g5 |
| K5 | tpmk | 89% | 89% | 4% | 15% | 15–25bb | g5 |
| K4 | tpmk | 89% | 88% | 0% | 16% | 15–25bb | g5 |
| AK | tpgk | 91% | 95% | 62% | 16% | 25–50bb | g5 |
| KQ | tpgk | 92% | 95% | 61% | 16% | 25–50bb | g5 |
| KJ | tpmk | 91% | 95% | 56% | 16% | 25–50bb | g5 |
| TT | pp1 | 85% | 87% | 0% | 13% | 15–25bb | g6 |
| JJ | pp1 | 85% | 85% | 0% | 14% | 15–25bb | g6 |
| QQ | pp1 | 84% | 83% | 0% | 14% | 15–25bb | g6 |
| A9 | mp | 84% | 77% | 0% | 15% | 15–25bb | g7 |
| Q9 | mp | 82% | 70% | 0% | 16% | 15–25bb | g7 |
| J9 | mp | 78% | 60% | 0% | 15% | 15–25bb | g7 |
| T9 | mp | 76% | 57% | 0% | 15% | 5–15bb | g7 |
| 97 | mp | 73% | 50% | 0% | 12% | 0–5bb | g8 |
| A8 | bp | 65% | 32% | 0% | 13% | 0–5bb | g9 |
| Q8 | bp | 64% | 32% | 0% | 14% | 0–5bb | g9 |
| J8 | bp | 62% | 31% | 0% | 13% | 0–5bb | g9 |
| T8 | bp | 60% | 31% | 0% | 13% | 0–5bb | g9 |
| 87 | bp | 56% | 26% | 0% | 9% | 0–5bb | g9 |
| 77 | pp3 | 50% | 20% | 0% | 6% | 0–5bb | g9 |
| A6 | bp | 47% | 16% | 0% | 4% | 0–5bb | g9 |
| Q6 | bp | 45% | 15% | 0% | 4% | 0–5bb | g9 |
| 76 | bp | 43% | 13% | 0% | 4% | 0–5bb | g9 |
| 65 | bp | 43% | 13% | 0% | 3% | 0–5bb | g9 |
| 64 | bp | 42% | 13% | 0% | 3% | 0–5bb | g9 |
| 55 | pp3 | 36% | 10% | 0% | 0% | 0–5bb | g9 |
| 44 | pp3 | 34% | 9% | 0% | 0% | 0–5bb | g9 |
| 33 | pp3 | 33% | 8% | 0% | 0% | 0–5bb | g9 |
| A2 | bp | 32% | 7% | 0% | 0% | 0–5bb | g9 |
| AJ | khnd | 28% | 7% | 0% | 0% | Pot is too big | g10 |
| AQ | khnd | 28% | 7% | 0% | 0% | Pot is too big | g10 |
| AT | khnd | 25% | 7% | 0% | 0% | Pot is too big | g10 |
| A7 | khnd | 20% | 3% | 0% | 0% | Pot is too big | g10 |
| A3 | khnd | 19% | 0% | 0% | 0% | Pot is too big | g10 |
| A5 | khnd | 18% | 0% | 0% | 0% | Pot is too big | g10 |
| A4 | khnd | 18% | 0% | 0% | 0% | Pot is too big | g10 |
