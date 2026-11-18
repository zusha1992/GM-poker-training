# 986-Kd-Td@bx river (9♠ 8♦ 6♣ K♦ T♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AQ, AJ, A9, A7–A2, QJ, Q9, Q7–Q5, J9, J7, 97, 96, 76, 75, 65, 64, 54, 43 | 99% | 99% | 99% | 97% |
| g2 | 25–50bb | Straights | 77, A7, K7, QJ, Q7, J7, T7, 97, 87, 76, 75 | 85% | 90% | 85% | 67% |
| g3 | 15–25bb | Sets | KK, TT–88, 66 | 71% | 77% | 64% | 59% |
| g4 | 15–25bb | Two pair | KT–K8, K6, T9, T8 | 65% | 63% | 40% | 56% |
| g5 | 0–5bb | Overpair | AA | 55% | 38% | 5% | 47% |
| g6 | 0–5bb | Two pair | 98, 96, 86 | 56% | 40% | 7% | 47% |
| g7 | 0–5bb | Top pair | AK, KQ, KJ, K5–K2 | 59% | 39% | 3% | 53% |
| g8 | 0–5bb | Big pocket pairs | QQ, JJ | 55% | 30% | 0% | 56% |
| g9 | 0–5bb | Second pair | AT, QT, JT | 51% | 30% | 0% | 49% |
| g10 | 0–5bb | Small pairs | 55–22, A9, A8, A6, Q9, Q8, Q6, J9, J8, 65, 64 | 21% | 6% | 0% | 19% |
| g11 | Pot is too big | Ace-high | AQ, AJ, A5–A2 | 1% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AQ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A6+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 96+fl | flushlo | 99% | 99% | 98% | 99% | 50–100bb | g1 |
| Q6+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| Q9+fl | flush | 99% | 100% | 100% | 97% | 50–100bb | g1 |
| Q5+fl | flush | 99% | 100% | 100% | 96% | 50–100bb | g1 |
| Q7+fl | flush | 99% | 100% | 100% | 96% | 50–100bb | g1 |
| QJ+fl | flush | 98% | 100% | 100% | 96% | 50–100bb | g1 |
| J9+fl | flush | 98% | 99% | 98% | 95% | 50–100bb | g1 |
| 76+fl | flushlo | 98% | 99% | 98% | 94% | 50–100bb | g1 |
| 65+fl | flushlo | 97% | 98% | 97% | 94% | 50–100bb | g1 |
| 64+fl | flushlo | 98% | 98% | 97% | 94% | 50–100bb | g1 |
| 97+fl | flushlo | 98% | 99% | 98% | 93% | 50–100bb | g1 |
| J7+fl | flush | 98% | 99% | 99% | 92% | 50–100bb | g1 |
| 75+fl | flushlo | 97% | 98% | 97% | 88% | 50–100bb | g1 |
| 43+fl | flushlo | 95% | 97% | 96% | 87% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 97% | 95% | 87% | 50–100bb | g1 |
| QJ | straight | 92% | 96% | 94% | 78% | 50–100bb | g2 |
| J7 | straight | 89% | 93% | 89% | 68% | 50–100bb | g2 |
| Q7 | straight | 83% | 88% | 83% | 65% | 50–100bb | g2 |
| 87 | straight | 81% | 87% | 79% | 64% | 50–100bb | g2 |
| K7 | straight | 82% | 87% | 78% | 64% | 50–100bb | g2 |
| 75 | straight | 82% | 88% | 82% | 63% | 50–100bb | g2 |
| 77 | straight | 85% | 90% | 83% | 63% | 50–100bb | g2 |
| T7 | straight | 81% | 87% | 79% | 63% | 50–100bb | g2 |
| A7 | straight | 82% | 88% | 82% | 62% | 50–100bb | g2 |
| 76 | straight | 81% | 87% | 81% | 61% | 50–100bb | g2 |
| 97 | straight | 81% | 86% | 79% | 60% | 50–100bb | g2 |
| 66 | twopair | 74% | 81% | 70% | 62% | 50–100bb | g3 |
| 88 | twopair | 71% | 78% | 66% | 59% | 50–100bb | g3 |
| TT | twopair | 69% | 76% | 63% | 59% | 50–100bb | g3 |
| KK | twopair | 71% | 77% | 58% | 59% | 50–100bb | g3 |
| 99 | twopair | 68% | 75% | 63% | 56% | 50–100bb | g3 |
| KT | twopair | 69% | 74% | 60% | 61% | 50–100bb | g4 |
| K9 | twopair | 66% | 70% | 50% | 55% | 50–100bb | g4 |
| K6 | twopair | 65% | 59% | 34% | 55% | 50–100bb | g4 |
| K8 | twopair | 65% | 64% | 38% | 55% | 50–100bb | g4 |
| T9 | twopair | 59% | 48% | 22% | 52% | 50–100bb | g4 |
| T8 | twopair | 58% | 45% | 14% | 51% | 50–100bb | g4 |
| AA | op | 55% | 38% | 5% | 47% | 0–5bb | g5 |
| 86 | twopair | 57% | 40% | 6% | 46% | 0–5bb | g6 |
| 98 | twopair | 55% | 40% | 8% | 48% | 0–5bb | g6 |
| 96 | twopair | 55% | 38% | 7% | 44% | 0–5bb | g6 |
| KJ | tpmk | 60% | 38% | 3% | 55% | 50–100bb | g7 |
| KQ | tpgk | 59% | 39% | 4% | 54% | 50–100bb | g7 |
| K3 | tpmk | 58% | 39% | 1% | 52% | 50–100bb | g7 |
| K2 | tpmk | 58% | 39% | 1% | 52% | 50–100bb | g7 |
| K5 | tpmk | 57% | 38% | 1% | 52% | 50–100bb | g7 |
| AK | tpgk | 58% | 40% | 4% | 52% | 50–100bb | g7 |
| K4 | tpmk | 59% | 39% | 1% | 51% | 50–100bb | g7 |
| JJ | pp1 | 54% | 30% | 0% | 57% | 50–100bb | g8 |
| QQ | pp1 | 56% | 30% | 0% | 55% | 50–100bb | g8 |
| AT | mp | 54% | 33% | 0% | 48% | 0–5bb | g9 |
| QT | mp | 51% | 30% | 0% | 49% | 0–5bb | g9 |
| JT | mp | 49% | 26% | 0% | 49% | 0–5bb | g9 |
| A9 | bp | 40% | 19% | 0% | 41% | 0–5bb | g10 |
| Q9 | bp | 39% | 16% | 0% | 38% | 0–5bb | g10 |
| J9 | bp | 35% | 11% | 0% | 33% | 0–5bb | g10 |
| A8 | bp | 25% | 6% | 0% | 25% | 0–5bb | g10 |
| Q8 | bp | 23% | 5% | 0% | 22% | 0–5bb | g10 |
| J8 | bp | 21% | 4% | 0% | 22% | 0–5bb | g10 |
| A6 | bp | 16% | 2% | 0% | 16% | 0–5bb | g10 |
| Q6 | bp | 14% | 1% | 0% | 13% | 0–5bb | g10 |
| 64 | bp | 11% | 0% | 0% | 7% | 0–5bb | g10 |
| 65 | bp | 10% | 0% | 0% | 5% | 0–5bb | g10 |
| 55 | pp3 | 7% | 0% | 0% | 0% | 0–5bb | g10 |
| 44 | pp3 | 6% | 0% | 0% | 0% | 0–5bb | g10 |
| 33 | pp3 | 4% | 0% | 0% | 0% | 0–5bb | g10 |
| 22 | pp3 | 3% | 0% | 0% | 0% | 0–5bb | g10 |
| AQ | khnd | 2% | 0% | 0% | 0% | Pot is too big | g11 |
| AJ | khnd | 1% | 0% | 0% | 0% | Pot is too big | g11 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
