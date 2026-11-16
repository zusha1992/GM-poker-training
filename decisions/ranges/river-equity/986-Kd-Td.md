# 986-Kd-Td river (9♠ 8♦ 6♣ K♦ T♦): equity groups

Generated 2026-11-16 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AQ, AJ, A9, A7–A2, QJ, Q9, Q7–Q5, J9, J7, 97, 96, 76, 75, 65, 64, 54, 43 | 99% | 100% | 100% | 98% |
| g2 | 25–50bb | Straights | 77, A7, K7, QJ, Q7, J7, T7, 97, 87, 76, 75 | 89% | 93% | 90% | 77% |
| g3 | 15–25bb | Sets | KK, TT–88, 66 | 75% | 73% | 59% | 52% |
| g4 | 15–25bb | Two pair | KT–K8, K6, T8, 86 | 70% | 62% | 43% | 53% |
| g5 | 0–5bb | Overpair | AA | 55% | 34% | 4% | 51% |
| g6 | 0–5bb | Two pair | T9, 98, 96 | 59% | 39% | 18% | 46% |
| g7 | 0–5bb | Top pair | AK, KQ, KJ, K5–K2 | 58% | 34% | 2% | 51% |
| g8 | 0–5bb | Big pocket pairs | QQ, JJ | 53% | 25% | 0% | 48% |
| g9 | 0–5bb | Second pair | AT, QT, JT | 54% | 28% | 0% | 48% |
| g10 | 0–5bb | Small pairs | 55–22, A9, A8, A6, Q9, Q8, Q6, J9, J8, 65, 64 | 14% | 4% | 0% | 13% |
| g11 | Pot is too big | Ace-high | AQ, AJ, A5–A2 | 0% | 0% | 0% | 0% |

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
| Q9+fl | flush | 99% | 100% | 99% | 99% | 50–100bb | g1 |
| 96+fl | flushlo | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| J9+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| Q6+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| QJ+fl | flush | 99% | 100% | 99% | 98% | 50–100bb | g1 |
| Q5+fl | flush | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| Q7+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 97+fl | flushlo | 99% | 100% | 100% | 96% | 50–100bb | g1 |
| J7+fl | flush | 98% | 99% | 99% | 95% | 50–100bb | g1 |
| 65+fl | flushlo | 98% | 99% | 99% | 95% | 50–100bb | g1 |
| 64+fl | flushlo | 98% | 99% | 98% | 95% | 50–100bb | g1 |
| 76+fl | flushlo | 97% | 99% | 99% | 94% | 50–100bb | g1 |
| 75+fl | flushlo | 97% | 99% | 98% | 93% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 98% | 98% | 91% | 50–100bb | g1 |
| 43+fl | flushlo | 96% | 99% | 98% | 91% | 50–100bb | g1 |
| QJ | straight | 93% | 98% | 98% | 87% | 50–100bb | g2 |
| J7 | straight | 92% | 98% | 97% | 83% | 50–100bb | g2 |
| 77 | straight | 89% | 94% | 91% | 76% | 50–100bb | g2 |
| 87 | straight | 86% | 90% | 85% | 73% | 50–100bb | g2 |
| Q7 | straight | 87% | 90% | 86% | 73% | 50–100bb | g2 |
| A7 | straight | 87% | 91% | 87% | 73% | 50–100bb | g2 |
| 75 | straight | 87% | 91% | 86% | 73% | 50–100bb | g2 |
| K7 | straight | 86% | 90% | 84% | 73% | 50–100bb | g2 |
| T7 | straight | 86% | 90% | 84% | 73% | 50–100bb | g2 |
| 76 | straight | 86% | 91% | 86% | 71% | 50–100bb | g2 |
| 97 | straight | 85% | 90% | 86% | 68% | 50–100bb | g2 |
| 99 | twopair | 73% | 71% | 63% | 44% | 25–50bb | g3 |
| 88 | twopair | 73% | 73% | 58% | 56% | 50–100bb | g3 |
| 66 | twopair | 79% | 77% | 64% | 55% | 50–100bb | g3 |
| KK | twopair | 76% | 73% | 56% | 54% | 50–100bb | g3 |
| TT | twopair | 72% | 71% | 56% | 53% | 50–100bb | g3 |
| K8 | twopair | 71% | 63% | 43% | 55% | 50–100bb | g4 |
| T8 | twopair | 61% | 43% | 14% | 54% | 50–100bb | g4 |
| KT | twopair | 73% | 70% | 54% | 53% | 50–100bb | g4 |
| K6 | twopair | 70% | 60% | 37% | 53% | 50–100bb | g4 |
| K9 | twopair | 72% | 65% | 52% | 49% | 25–50bb | g4 |
| 86 | twopair | 58% | 38% | 6% | 51% | 50–100bb | g4 |
| AA | op | 55% | 34% | 4% | 51% | 50–100bb | g5 |
| T9 | twopair | 61% | 42% | 23% | 47% | 0–5bb | g6 |
| 98 | twopair | 55% | 33% | 8% | 46% | 0–5bb | g6 |
| 96 | twopair | 54% | 31% | 6% | 42% | 0–5bb | g6 |
| AK | tpgk | 59% | 36% | 3% | 52% | 50–100bb | g7 |
| K2 | tpmk | 59% | 34% | 0% | 52% | 50–100bb | g7 |
| K5 | tpmk | 59% | 33% | 0% | 52% | 50–100bb | g7 |
| KQ | tpgk | 58% | 34% | 3% | 51% | 50–100bb | g7 |
| K4 | tpmk | 57% | 33% | 0% | 51% | 50–100bb | g7 |
| KJ | tpmk | 58% | 31% | 2% | 51% | 50–100bb | g7 |
| K3 | tpmk | 58% | 33% | 0% | 51% | 50–100bb | g7 |
| JJ | pp1 | 53% | 25% | 0% | 48% | 0–5bb | g8 |
| QQ | pp1 | 52% | 25% | 0% | 48% | 0–5bb | g8 |
| AT | mp | 55% | 31% | 0% | 50% | 0–5bb | g9 |
| QT | mp | 55% | 28% | 0% | 48% | 0–5bb | g9 |
| JT | mp | 52% | 24% | 0% | 45% | 0–5bb | g9 |
| A9 | bp | 39% | 16% | 0% | 37% | 0–5bb | g10 |
| Q9 | bp | 34% | 12% | 0% | 30% | 0–5bb | g10 |
| J9 | bp | 26% | 5% | 0% | 20% | 0–5bb | g10 |
| A8 | bp | 15% | 2% | 0% | 12% | 0–5bb | g10 |
| J8 | bp | 12% | 1% | 0% | 13% | 0–5bb | g10 |
| Q8 | bp | 12% | 2% | 0% | 13% | 0–5bb | g10 |
| A6 | bp | 5% | 0% | 0% | 8% | 0–5bb | g10 |
| Q6 | bp | 4% | 0% | 0% | 6% | 0–5bb | g10 |
| 64 | bp | 2% | 0% | 0% | 2% | 0–5bb | g10 |
| 65 | bp | 1% | 0% | 0% | 2% | 0–5bb | g10 |
| 55 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g10 |
| 44 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g10 |
| 33 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g10 |
| 22 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g10 |
| AQ | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
| AJ | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
