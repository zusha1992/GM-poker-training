# K54-3s-9d@xx river (K♠ 5♥ 4♣ 3♠ 9♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | A2, 76 | 99% | 100% | 100% | 60% |
| g2 | 25–50bb | Sets | KK, 99, 55–33 | 97% | 100% | 100% | 33% |
| g3 | 15–25bb | Overpair | AA | 89% | 85% | 65% | 25% |
| g4 | 15–25bb | Two pair | K9, K5–K3, 54, 43 | 93% | 96% | 85% | 25% |
| g5 | 15–25bb | Top pair | AK, KQ–KT, K8–K6, K2 | 87% | 82% | 34% | 24% |
| g6 | 15–25bb | Big pocket pairs | QQ–TT | 79% | 66% | 0% | 21% |
| g7 | 5–15bb | Second pair | A9, Q9, J9, T9 | 75% | 54% | 0% | 19% |
| g8 | 0–5bb | Second pair | 98–96 | 70% | 46% | 0% | 19% |
| g9 | 0–5bb | Small pairs | 88–66, 22, A5–A3, Q5, 75, 65, 64 | 54% | 26% | 0% | 14% |
| g10 | Pot is too big | Ace-high | AQ–AT, A8–A6 | 32% | 8% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 76 | straight | 100% | 100% | 100% | 90% | 50–100bb | g1 |
| A2 | straight | 98% | 100% | 100% | 53% | 50–100bb | g1 |
| KK | twopair | 97% | 100% | 100% | 42% | 25–50bb | g2 |
| 99 | twopair | 98% | 100% | 100% | 38% | 25–50bb | g2 |
| 55 | twopair | 97% | 100% | 100% | 32% | 25–50bb | g2 |
| 44 | twopair | 97% | 100% | 100% | 27% | 25–50bb | g2 |
| 33 | twopair | 96% | 100% | 100% | 25% | 25–50bb | g2 |
| AA | op | 89% | 85% | 65% | 25% | 25–50bb | g3 |
| K9 | twopair | 94% | 99% | 96% | 25% | 25–50bb | g4 |
| K5 | twopair | 93% | 96% | 86% | 26% | 25–50bb | g4 |
| K4 | twopair | 94% | 95% | 83% | 25% | 25–50bb | g4 |
| K3 | twopair | 93% | 95% | 78% | 24% | 25–50bb | g4 |
| 54 | twopair | 92% | 90% | 74% | 26% | 25–50bb | g4 |
| 43 | twopair | 92% | 89% | 71% | 25% | 25–50bb | g4 |
| KJ | tpmk | 89% | 84% | 40% | 23% | 15–25bb | g5 |
| KT | tpmk | 86% | 80% | 27% | 24% | 15–25bb | g5 |
| K8 | tpmk | 85% | 77% | 17% | 23% | 15–25bb | g5 |
| K7 | tpmk | 85% | 75% | 10% | 25% | 15–25bb | g5 |
| K6 | tpmk | 85% | 73% | 6% | 25% | 15–25bb | g5 |
| K2 | tpmk | 84% | 73% | 3% | 20% | 15–25bb | g5 |
| AK | tpgk | 90% | 88% | 62% | 23% | 25–50bb | g5 |
| KQ | tpgk | 89% | 88% | 55% | 24% | 25–50bb | g5 |
| QQ | pp1 | 79% | 66% | 0% | 21% | 15–25bb | g6 |
| TT | pp1 | 79% | 66% | 0% | 22% | 15–25bb | g6 |
| JJ | pp1 | 79% | 65% | 0% | 21% | 15–25bb | g6 |
| A9 | mp | 78% | 57% | 0% | 20% | 5–15bb | g7 |
| Q9 | mp | 76% | 55% | 0% | 19% | 5–15bb | g7 |
| J9 | mp | 74% | 53% | 0% | 18% | 5–15bb | g7 |
| T9 | mp | 71% | 50% | 0% | 18% | 5–15bb | g7 |
| 98 | mp | 70% | 47% | 0% | 18% | 0–5bb | g8 |
| 96 | mp | 69% | 44% | 0% | 19% | 0–5bb | g8 |
| 97 | mp | 69% | 45% | 0% | 20% | 0–5bb | g8 |
| 88 | pp2 | 64% | 40% | 0% | 18% | 0–5bb | g9 |
| 77 | pp2 | 63% | 38% | 0% | 20% | 0–5bb | g9 |
| 66 | pp2 | 63% | 36% | 0% | 19% | 0–5bb | g9 |
| A5 | bp | 58% | 29% | 0% | 17% | 0–5bb | g9 |
| Q5 | bp | 58% | 31% | 0% | 14% | 0–5bb | g9 |
| 65 | bp | 57% | 28% | 0% | 15% | 0–5bb | g9 |
| 75 | bp | 56% | 28% | 0% | 17% | 0–5bb | g9 |
| A4 | bp | 51% | 21% | 0% | 13% | 0–5bb | g9 |
| 64 | bp | 48% | 21% | 0% | 13% | 0–5bb | g9 |
| A3 | bp | 44% | 16% | 0% | 11% | 0–5bb | g9 |
| 22 | pp3 | 42% | 15% | 0% | 1% | 0–5bb | g9 |
| AJ | khnd | 38% | 11% | 0% | 0% | Pot is too big | g10 |
| AQ | khnd | 37% | 12% | 0% | 0% | Pot is too big | g10 |
| AT | khnd | 34% | 10% | 0% | 0% | Pot is too big | g10 |
| A8 | khnd | 30% | 8% | 0% | 0% | Pot is too big | g10 |
| A7 | khnd | 28% | 4% | 0% | 0% | Pot is too big | g10 |
| A6 | khnd | 25% | 1% | 0% | 0% | Pot is too big | g10 |
