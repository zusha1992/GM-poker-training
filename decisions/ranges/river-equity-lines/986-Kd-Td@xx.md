# 986-Kd-Td@xx river (9♠ 8♦ 6♣ K♦ T♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AQ, AJ, A9, A7–A2, QJ, Q9, Q7–Q5, J9, J7, 97, 96, 76, 75, 65, 64, 54, 43 | 98% | 100% | 99% | 92% |
| g2 | 25–50bb | Straights | 77, A7, K7, QJ, Q7, J7, T7, 97, 87, 76, 75 | 84% | 91% | 87% | 71% |
| g3 | 15–25bb | Sets | KK, TT–88, 66 | 74% | 87% | 80% | 70% |
| g4 | 15–25bb | Two pair | KT–K8, K6, T9, T8, 98, 96, 86 | 70% | 81% | 70% | 69% |
| g5 | 0–5bb | Overpair | AA | 62% | 61% | 43% | 64% |
| g6 | 0–5bb | Top pair | AK, KQ, KJ, K5–K2 | 62% | 52% | 24% | 66% |
| g7 | 0–5bb | Big pocket pairs | QQ, JJ | 56% | 29% | 0% | 70% |
| g8 | 0–5bb | Second pair | AT, QT, JT | 53% | 27% | 0% | 65% |
| g9 | 0–5bb | Small pairs | 55–22, A9, A8, A6, Q9, Q8, Q6, J9, J8, 65, 64 | 35% | 6% | 0% | 47% |
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
| Q6+fl | flush | 99% | 100% | 100% | 94% | 50–100bb | g1 |
| Q9+fl | flush | 99% | 100% | 100% | 94% | 50–100bb | g1 |
| Q7+fl | flush | 99% | 100% | 100% | 92% | 50–100bb | g1 |
| Q5+fl | flush | 98% | 100% | 100% | 92% | 50–100bb | g1 |
| QJ+fl | flush | 98% | 100% | 100% | 92% | 50–100bb | g1 |
| J9+fl | flush | 97% | 100% | 99% | 86% | 50–100bb | g1 |
| 96+fl | flushlo | 96% | 99% | 99% | 85% | 50–100bb | g1 |
| 64+fl | flushlo | 96% | 98% | 98% | 85% | 50–100bb | g1 |
| J7+fl | flush | 97% | 99% | 99% | 84% | 50–100bb | g1 |
| 65+fl | flushlo | 95% | 99% | 98% | 84% | 50–100bb | g1 |
| 76+fl | flushlo | 95% | 99% | 98% | 83% | 50–100bb | g1 |
| 97+fl | flushlo | 96% | 99% | 98% | 82% | 50–100bb | g1 |
| 54+fl | flushlo | 94% | 97% | 96% | 82% | 50–100bb | g1 |
| 43+fl | flushlo | 94% | 97% | 96% | 81% | 50–100bb | g1 |
| 75+fl | flushlo | 96% | 98% | 97% | 80% | 50–100bb | g1 |
| QJ | straight | 90% | 95% | 93% | 73% | 50–100bb | g2 |
| K7 | straight | 81% | 89% | 82% | 71% | 50–100bb | g2 |
| 87 | straight | 82% | 89% | 85% | 70% | 50–100bb | g2 |
| J7 | straight | 87% | 92% | 89% | 70% | 50–100bb | g2 |
| A7 | straight | 82% | 90% | 85% | 70% | 50–100bb | g2 |
| 77 | straight | 85% | 91% | 86% | 70% | 50–100bb | g2 |
| Q7 | straight | 82% | 91% | 87% | 70% | 50–100bb | g2 |
| T7 | straight | 82% | 89% | 84% | 70% | 50–100bb | g2 |
| 75 | straight | 82% | 90% | 85% | 70% | 50–100bb | g2 |
| 76 | straight | 82% | 90% | 84% | 69% | 50–100bb | g2 |
| 97 | straight | 82% | 89% | 85% | 68% | 50–100bb | g2 |
| KK | twopair | 74% | 85% | 74% | 71% | 50–100bb | g3 |
| 66 | twopair | 75% | 89% | 83% | 70% | 50–100bb | g3 |
| 99 | twopair | 74% | 88% | 82% | 69% | 50–100bb | g3 |
| 88 | twopair | 74% | 87% | 81% | 69% | 50–100bb | g3 |
| TT | twopair | 73% | 87% | 80% | 68% | 50–100bb | g3 |
| K6 | twopair | 71% | 82% | 72% | 71% | 50–100bb | g4 |
| K8 | twopair | 70% | 84% | 73% | 70% | 50–100bb | g4 |
| K9 | twopair | 70% | 85% | 77% | 70% | 50–100bb | g4 |
| KT | twopair | 71% | 86% | 77% | 70% | 50–100bb | g4 |
| T9 | twopair | 68% | 78% | 67% | 69% | 50–100bb | g4 |
| T8 | twopair | 66% | 71% | 59% | 66% | 50–100bb | g4 |
| 86 | twopair | 65% | 66% | 46% | 65% | 50–100bb | g4 |
| 98 | twopair | 66% | 67% | 52% | 65% | 50–100bb | g4 |
| 96 | twopair | 65% | 66% | 49% | 63% | 50–100bb | g4 |
| AA | op | 62% | 61% | 43% | 64% | 50–100bb | g5 |
| KQ | tpgk | 64% | 55% | 31% | 67% | 50–100bb | g6 |
| KJ | tpmk | 61% | 50% | 23% | 67% | 50–100bb | g6 |
| K5 | tpmk | 59% | 41% | 8% | 66% | 50–100bb | g6 |
| K3 | tpmk | 59% | 41% | 8% | 65% | 50–100bb | g6 |
| K2 | tpmk | 61% | 41% | 9% | 65% | 50–100bb | g6 |
| AK | tpgk | 62% | 59% | 35% | 65% | 50–100bb | g6 |
| K4 | tpmk | 59% | 44% | 9% | 65% | 50–100bb | g6 |
| QQ | pp1 | 56% | 28% | 0% | 70% | 50–100bb | g7 |
| JJ | pp1 | 57% | 29% | 0% | 69% | 50–100bb | g7 |
| JT | mp | 52% | 23% | 0% | 66% | 50–100bb | g8 |
| AT | mp | 54% | 31% | 0% | 66% | 50–100bb | g8 |
| QT | mp | 54% | 28% | 0% | 64% | 50–100bb | g8 |
| A9 | bp | 46% | 17% | 0% | 61% | 50–100bb | g9 |
| Q9 | bp | 46% | 14% | 0% | 58% | 50–100bb | g9 |
| J9 | bp | 44% | 10% | 0% | 56% | 50–100bb | g9 |
| A8 | bp | 38% | 6% | 0% | 50% | 0–5bb | g9 |
| Q8 | bp | 37% | 5% | 0% | 49% | 0–5bb | g9 |
| J8 | bp | 37% | 3% | 0% | 48% | 0–5bb | g9 |
| Q6 | bp | 33% | 1% | 0% | 43% | 0–5bb | g9 |
| A6 | bp | 31% | 1% | 0% | 47% | 0–5bb | g9 |
| 65 | bp | 30% | 0% | 0% | 38% | 0–5bb | g9 |
| 64 | bp | 29% | 0% | 0% | 38% | 0–5bb | g9 |
| 55 | pp3 | 26% | 0% | 0% | 36% | 0–5bb | g9 |
| 44 | pp3 | 25% | 0% | 0% | 35% | 0–5bb | g9 |
| 33 | pp3 | 23% | 0% | 0% | 34% | 0–5bb | g9 |
| 22 | pp3 | 21% | 0% | 0% | 34% | 0–5bb | g9 |
| AQ | khnd | 19% | 0% | 0% | 38% | Pot is too big | g10 |
| AJ | khnd | 18% | 0% | 0% | 37% | Pot is too big | g10 |
| A3 | khnd | 14% | 0% | 0% | 32% | Pot is too big | g10 |
| A5 | khnd | 14% | 0% | 0% | 31% | Pot is too big | g10 |
| A4 | khnd | 14% | 0% | 0% | 31% | Pot is too big | g10 |
| A2 | khnd | 14% | 0% | 0% | 32% | Pot is too big | g10 |
