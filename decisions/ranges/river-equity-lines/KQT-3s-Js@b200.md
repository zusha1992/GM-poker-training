# KQT-3s-Js@b200 river (K♦ Q♣ T♥ 3♠ J♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | A-high straights | AA, AK–A2 | 97% | 90% | 90% | 90% |
| g2 | 0–5bb | K-high straights | 99, K9, Q9, J9, T9, 98–96 | 83% | 45% | 45% | 45% |
| g3 | 0–5bb | Sets | KK–TT, 33 | 69% | 16% | 17% | 16% |
| g4 | 0–5bb | Two pair | KQ–KT, K3, QJ, QT, JT | 44% | 14% | 14% | 14% |
| g5 | 0–5bb | Top pair, weak kicker | K8–K4, K2 | 2% | 0% | 0% | 0% |
| g6 | 0–5bb | Second pair | Q8–Q5 | 0% | 0% | 0% | 0% |
| g7 | 0–5bb | Small pairs | 88–44, 22, J8, J7, T8, T7, 43 | 0% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | straight | 98% | 92% | 93% | 93% | 50–100bb | g1 |
| AT | straight | 97% | 92% | 92% | 92% | 50–100bb | g1 |
| A4 | straight | 97% | 90% | 90% | 90% | 50–100bb | g1 |
| A5 | straight | 97% | 90% | 90% | 90% | 50–100bb | g1 |
| A2 | straight | 97% | 90% | 90% | 90% | 50–100bb | g1 |
| A8 | straight | 97% | 90% | 90% | 90% | 50–100bb | g1 |
| A6 | straight | 97% | 90% | 90% | 90% | 50–100bb | g1 |
| A3 | straight | 97% | 90% | 89% | 90% | 50–100bb | g1 |
| AQ | straight | 97% | 89% | 90% | 89% | 50–100bb | g1 |
| A7 | straight | 97% | 90% | 90% | 89% | 50–100bb | g1 |
| AJ | straight | 96% | 89% | 89% | 89% | 50–100bb | g1 |
| AK | straight | 96% | 88% | 88% | 88% | 50–100bb | g1 |
| A9 | straight | 97% | 88% | 88% | 88% | 50–100bb | g1 |
| 99 | straight | 86% | 46% | 45% | 44% | 0–5bb | g2 |
| 97 | straight | 84% | 45% | 47% | 46% | 0–5bb | g2 |
| 96 | straight | 84% | 46% | 46% | 45% | 0–5bb | g2 |
| T9 | straight | 84% | 47% | 47% | 47% | 0–5bb | g2 |
| 98 | straight | 83% | 45% | 45% | 46% | 0–5bb | g2 |
| J9 | straight | 83% | 44% | 43% | 44% | 0–5bb | g2 |
| K9 | straight | 82% | 45% | 46% | 46% | 0–5bb | g2 |
| Q9 | straight | 82% | 44% | 44% | 44% | 0–5bb | g2 |
| KK | twopair | 72% | 24% | 25% | 25% | 0–5bb | g3 |
| 33 | twopair | 71% | 16% | 16% | 16% | 0–5bb | g3 |
| TT | twopair | 70% | 15% | 15% | 15% | 0–5bb | g3 |
| JJ | twopair | 68% | 15% | 15% | 15% | 0–5bb | g3 |
| QQ | twopair | 65% | 12% | 12% | 12% | 0–5bb | g3 |
| KQ | twopair | 67% | 18% | 18% | 18% | 0–5bb | g4 |
| KJ | twopair | 63% | 19% | 19% | 20% | 0–5bb | g4 |
| KT | twopair | 56% | 19% | 20% | 20% | 0–5bb | g4 |
| K3 | twopair | 51% | 19% | 20% | 20% | 0–5bb | g4 |
| QJ | twopair | 36% | 14% | 13% | 13% | 0–5bb | g4 |
| QT | twopair | 25% | 10% | 9% | 9% | 0–5bb | g4 |
| JT | twopair | 14% | 3% | 3% | 3% | 0–5bb | g4 |
| K8 | tpmk | 4% | 0% | 0% | 0% | 0–5bb | g5 |
| K7 | tpmk | 2% | 0% | 0% | 0% | 0–5bb | g5 |
| K6 | tpmk | 1% | 0% | 0% | 0% | 0–5bb | g5 |
| K4 | tpmk | 1% | 0% | 0% | 0% | 0–5bb | g5 |
| K5 | tpmk | 1% | 0% | 0% | 0% | 0–5bb | g5 |
| K2 | tpmk | 0% | 0% | 0% | 0% | 0–5bb | g5 |
| Q8 | mp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| Q7 | mp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| Q6 | mp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| Q5 | mp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| J8 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| J7 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| T8 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| T7 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 88 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 77 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 66 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 55 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 44 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 43 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 22 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
