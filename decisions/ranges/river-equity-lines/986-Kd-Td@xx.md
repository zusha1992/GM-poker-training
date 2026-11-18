# 986-Kd-Td@xx river (9♠ 8♦ 6♣ K♦ T♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AQ, AJ, A9, A7–A2, QJ, Q9, Q7–Q5, J9, J7, 97, 96, 76, 75, 65, 64, 54, 43 | 98% | 100% | 99% | 92% |
| g2 | 25–50bb | Straights | 77, A7, K7, QJ, Q7, J7, T7, 97, 87, 76, 75 | 84% | 91% | 87% | 71% |
| g3 | 15–25bb | Sets | KK, TT–88, 66 | 75% | 87% | 80% | 70% |
| g4 | 15–25bb | Two pair | KT–K8, K6, T9, T8, 98, 96, 86 | 70% | 80% | 71% | 69% |
| g5 | 0–5bb | Overpair | AA | 62% | 61% | 43% | 64% |
| g6 | 0–5bb | Top pair | AK, KQ, KJ, K5–K2 | 62% | 51% | 24% | 67% |
| g7 | 0–5bb | Big pocket pairs | QQ, JJ | 56% | 29% | 0% | 69% |
| g8 | 0–5bb | Second pair | AT, QT, JT | 54% | 27% | 0% | 65% |
| g9 | 0–5bb | Small pairs | 55–22, A9, A8, A6, Q9, Q8, Q6, J9, J8, 65, 64 | 34% | 6% | 0% | 47% |
| g10 | Pot is too big | Ace-high | AQ, AJ, A5–A2 | 16% | 0% | 0% | 34% |

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
| Q9+fl | flush | 99% | 100% | 100% | 94% | 50–100bb | g1 |
| Q6+fl | flush | 99% | 100% | 100% | 94% | 50–100bb | g1 |
| Q5+fl | flush | 98% | 100% | 100% | 93% | 50–100bb | g1 |
| QJ+fl | flush | 98% | 100% | 100% | 92% | 50–100bb | g1 |
| Q7+fl | flush | 99% | 100% | 100% | 92% | 50–100bb | g1 |
| J9+fl | flush | 96% | 100% | 100% | 87% | 50–100bb | g1 |
| 96+fl | flushlo | 96% | 99% | 99% | 86% | 50–100bb | g1 |
| 65+fl | flushlo | 95% | 99% | 98% | 85% | 50–100bb | g1 |
| J7+fl | flush | 96% | 99% | 99% | 84% | 50–100bb | g1 |
| 64+fl | flushlo | 95% | 99% | 98% | 84% | 50–100bb | g1 |
| 76+fl | flushlo | 96% | 99% | 98% | 82% | 50–100bb | g1 |
| 43+fl | flushlo | 94% | 97% | 96% | 82% | 50–100bb | g1 |
| 97+fl | flushlo | 96% | 99% | 98% | 82% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 97% | 96% | 81% | 50–100bb | g1 |
| 75+fl | flushlo | 95% | 98% | 97% | 80% | 50–100bb | g1 |
| QJ | straight | 90% | 95% | 93% | 74% | 50–100bb | g2 |
| 77 | straight | 84% | 91% | 86% | 72% | 50–100bb | g2 |
| K7 | straight | 82% | 89% | 81% | 72% | 50–100bb | g2 |
| 87 | straight | 82% | 89% | 84% | 71% | 50–100bb | g2 |
| J7 | straight | 86% | 93% | 88% | 71% | 50–100bb | g2 |
| T7 | straight | 81% | 89% | 84% | 70% | 50–100bb | g2 |
| Q7 | straight | 83% | 91% | 86% | 70% | 50–100bb | g2 |
| 76 | straight | 82% | 90% | 85% | 69% | 50–100bb | g2 |
| 75 | straight | 81% | 90% | 85% | 69% | 50–100bb | g2 |
| A7 | straight | 82% | 90% | 85% | 69% | 50–100bb | g2 |
| 97 | straight | 82% | 89% | 84% | 69% | 50–100bb | g2 |
| KK | twopair | 74% | 85% | 74% | 71% | 50–100bb | g3 |
| 88 | twopair | 74% | 88% | 81% | 70% | 50–100bb | g3 |
| 66 | twopair | 76% | 89% | 84% | 70% | 50–100bb | g3 |
| 99 | twopair | 75% | 87% | 82% | 70% | 50–100bb | g3 |
| TT | twopair | 74% | 87% | 81% | 68% | 50–100bb | g3 |
| K8 | twopair | 70% | 84% | 73% | 70% | 50–100bb | g4 |
| K6 | twopair | 71% | 82% | 72% | 70% | 50–100bb | g4 |
| K9 | twopair | 71% | 85% | 76% | 69% | 50–100bb | g4 |
| KT | twopair | 72% | 86% | 78% | 69% | 50–100bb | g4 |
| T9 | twopair | 68% | 76% | 68% | 69% | 50–100bb | g4 |
| T8 | twopair | 66% | 73% | 60% | 67% | 50–100bb | g4 |
| 98 | twopair | 66% | 67% | 52% | 66% | 50–100bb | g4 |
| 86 | twopair | 66% | 64% | 48% | 65% | 50–100bb | g4 |
| 96 | twopair | 65% | 66% | 48% | 64% | 50–100bb | g4 |
| AA | op | 62% | 61% | 43% | 64% | 50–100bb | g5 |
| KQ | tpgk | 63% | 56% | 31% | 68% | 50–100bb | g6 |
| KJ | tpmk | 62% | 50% | 23% | 68% | 50–100bb | g6 |
| K5 | tpmk | 59% | 42% | 9% | 66% | 50–100bb | g6 |
| AK | tpgk | 62% | 58% | 34% | 66% | 50–100bb | g6 |
| K4 | tpmk | 59% | 42% | 9% | 65% | 50–100bb | g6 |
| K3 | tpmk | 59% | 42% | 8% | 65% | 50–100bb | g6 |
| K2 | tpmk | 59% | 42% | 8% | 65% | 50–100bb | g6 |
| QQ | pp1 | 58% | 28% | 0% | 69% | 50–100bb | g7 |
| JJ | pp1 | 55% | 29% | 0% | 68% | 50–100bb | g7 |
| QT | mp | 54% | 28% | 0% | 65% | 50–100bb | g8 |
| AT | mp | 55% | 30% | 0% | 65% | 50–100bb | g8 |
| JT | mp | 53% | 23% | 0% | 65% | 50–100bb | g8 |
| A9 | bp | 45% | 17% | 0% | 60% | 50–100bb | g9 |
| Q9 | bp | 45% | 15% | 0% | 58% | 50–100bb | g9 |
| J9 | bp | 43% | 10% | 0% | 56% | 50–100bb | g9 |
| A8 | bp | 36% | 6% | 0% | 51% | 50–100bb | g9 |
| Q8 | bp | 37% | 5% | 0% | 49% | 0–5bb | g9 |
| J8 | bp | 36% | 3% | 0% | 48% | 0–5bb | g9 |
| A6 | bp | 32% | 1% | 0% | 48% | 0–5bb | g9 |
| Q6 | bp | 31% | 1% | 0% | 43% | 0–5bb | g9 |
| 64 | bp | 30% | 0% | 0% | 37% | 0–5bb | g9 |
| 65 | bp | 29% | 0% | 0% | 39% | 0–5bb | g9 |
| 55 | pp3 | 26% | 0% | 0% | 35% | 0–5bb | g9 |
| 44 | pp3 | 25% | 0% | 0% | 35% | 0–5bb | g9 |
| 33 | pp3 | 23% | 0% | 0% | 34% | 0–5bb | g9 |
| 22 | pp3 | 21% | 0% | 0% | 34% | 0–5bb | g9 |
| AQ | khnd | 21% | 0% | 0% | 38% | Pot is too big | g10 |
| AJ | khnd | 20% | 0% | 0% | 37% | Pot is too big | g10 |
| A2 | khnd | 15% | 0% | 0% | 32% | Pot is too big | g10 |
| A3 | khnd | 14% | 0% | 0% | 33% | Pot is too big | g10 |
| A4 | khnd | 14% | 0% | 0% | 32% | Pot is too big | g10 |
| A5 | khnd | 14% | 0% | 0% | 32% | Pot is too big | g10 |
