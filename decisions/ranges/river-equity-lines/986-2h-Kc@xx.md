# 986-2h-Kc@xx river (9♠ 8♦ 6♣ 2♥ K♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | T7, 75 | 100% | 100% | 100% | 92% |
| g2 | 25–50bb | Sets | KK, 99, 88, 66, 22 | 99% | 100% | 100% | 71% |
| g3 | 15–25bb | Overpair | AA | 88% | 88% | 64% | 14% |
| g4 | 15–25bb | Two pair | K9, K8, K6, K2, 98, 96, 86 | 94% | 98% | 91% | 34% |
| g5 | 15–25bb | Top pair | AK, KQ–KT, K7, K5–K3 | 89% | 87% | 35% | 19% |
| g6 | 15–25bb | Big pocket pairs | QQ–TT | 81% | 75% | 0% | 17% |
| g7 | 15–25bb | Second pair | A9, Q9, J9, T9, 97 | 79% | 65% | 0% | 14% |
| g8 | 0–5bb | Small pairs | 77, 55–33, A8, A6, A2, Q8, Q6, J8, T8, 87, 76, 65, 64 | 60% | 33% | 0% | 4% |
| g9 | Pot is too big | Ace-high | AQ–AT, A7, A5–A3 | 33% | 8% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| T7 | straight | 100% | 100% | 100% | 97% | 50–100bb | g1 |
| 75 | straight | 99% | 100% | 100% | 88% | 50–100bb | g1 |
| 99 | twopair | 99% | 100% | 100% | 76% | 50–100bb | g2 |
| KK | twopair | 99% | 100% | 100% | 76% | 50–100bb | g2 |
| 88 | twopair | 99% | 100% | 100% | 75% | 50–100bb | g2 |
| 66 | twopair | 99% | 100% | 100% | 69% | 50–100bb | g2 |
| 22 | twopair | 98% | 100% | 100% | 59% | 50–100bb | g2 |
| AA | op | 88% | 88% | 64% | 14% | 25–50bb | g3 |
| K9 | twopair | 96% | 100% | 100% | 42% | 25–50bb | g4 |
| K8 | twopair | 95% | 100% | 98% | 33% | 25–50bb | g4 |
| K6 | twopair | 94% | 98% | 92% | 35% | 25–50bb | g4 |
| K2 | twopair | 94% | 97% | 83% | 33% | 25–50bb | g4 |
| 98 | twopair | 92% | 93% | 76% | 26% | 25–50bb | g4 |
| 96 | twopair | 91% | 93% | 74% | 23% | 25–50bb | g4 |
| 86 | twopair | 92% | 93% | 73% | 21% | 25–50bb | g4 |
| KJ | tpmk | 89% | 87% | 32% | 19% | 15–25bb | g5 |
| KT | tpmk | 89% | 84% | 23% | 21% | 15–25bb | g5 |
| K7 | tpmk | 88% | 84% | 20% | 20% | 15–25bb | g5 |
| K5 | tpmk | 87% | 82% | 16% | 18% | 15–25bb | g5 |
| K4 | tpmk | 87% | 82% | 10% | 19% | 15–25bb | g5 |
| K3 | tpmk | 86% | 80% | 3% | 19% | 15–25bb | g5 |
| AK | tpgk | 91% | 92% | 60% | 17% | 25–50bb | g5 |
| KQ | tpgk | 90% | 90% | 50% | 20% | 25–50bb | g5 |
| QQ | pp1 | 80% | 75% | 0% | 16% | 15–25bb | g6 |
| TT | pp1 | 82% | 74% | 0% | 18% | 15–25bb | g6 |
| JJ | pp1 | 81% | 74% | 0% | 17% | 15–25bb | g6 |
| Q9 | mp | 80% | 67% | 0% | 14% | 15–25bb | g7 |
| A9 | mp | 80% | 66% | 0% | 14% | 15–25bb | g7 |
| J9 | mp | 78% | 64% | 0% | 14% | 15–25bb | g7 |
| T9 | mp | 77% | 61% | 0% | 15% | 15–25bb | g7 |
| 97 | mp | 77% | 59% | 0% | 13% | 5–15bb | g7 |
| Q8 | bp | 72% | 50% | 0% | 8% | 0–5bb | g8 |
| J8 | bp | 70% | 50% | 0% | 8% | 0–5bb | g8 |
| 87 | bp | 70% | 43% | 0% | 6% | 0–5bb | g8 |
| T8 | bp | 69% | 46% | 0% | 7% | 0–5bb | g8 |
| 77 | pp3 | 65% | 37% | 0% | 4% | 0–5bb | g8 |
| Q6 | bp | 63% | 34% | 0% | 3% | 0–5bb | g8 |
| A6 | bp | 62% | 34% | 0% | 3% | 0–5bb | g8 |
| 76 | bp | 60% | 30% | 0% | 3% | 0–5bb | g8 |
| 65 | bp | 59% | 30% | 0% | 2% | 0–5bb | g8 |
| 64 | bp | 58% | 28% | 0% | 3% | 0–5bb | g8 |
| 55 | pp3 | 54% | 24% | 0% | 0% | 0–5bb | g8 |
| A8 | bp | 72% | 51% | 0% | 10% | 5–15bb | g8 |
| 44 | pp3 | 50% | 22% | 0% | 0% | 0–5bb | g8 |
| 33 | pp3 | 49% | 21% | 0% | 0% | 0–5bb | g8 |
| A2 | bp | 46% | 15% | 0% | 0% | 0–5bb | g8 |
| AQ | khnd | 41% | 14% | 0% | 0% | Pot is too big | g9 |
| AJ | khnd | 38% | 13% | 0% | 0% | Pot is too big | g9 |
| AT | khnd | 36% | 12% | 0% | 0% | Pot is too big | g9 |
| A7 | khnd | 33% | 9% | 0% | 0% | Pot is too big | g9 |
| A5 | khnd | 27% | 2% | 0% | 0% | Pot is too big | g9 |
| A3 | khnd | 27% | 3% | 0% | 0% | Pot is too big | g9 |
| A4 | khnd | 26% | 3% | 0% | 0% | Pot is too big | g9 |
