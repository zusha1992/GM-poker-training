# 986-Kd-Td river (9♠ 8♦ 6♣ K♦ T♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AQ, AJ, A9, A7–A2, QJ, Q9, Q7–Q5, J9, J7, 97, 96, 76, 75, 65, 64, 54, 43 | 99% | 100% | 100% | 98% |
| g2 | 25–50bb | K-high straights | QJ | 92% | 99% | 98% | 87% |
| g3 | 25–50bb | J-high straights | J7 | 92% | 98% | 97% | 84% |
| g4 | 25–50bb | T-high straights | 77, A7, K7, Q7, T7, 97, 87, 76, 75 | 87% | 91% | 86% | 73% |
| g5 | 15–25bb | Sets | KK, TT–88, 66 | 74% | 73% | 60% | 52% |
| g6 | 15–25bb | Two pair | KT–K8, K6, T8, 86 | 71% | 62% | 43% | 52% |
| g7 | 0–5bb | Overpair | AA | 55% | 34% | 4% | 52% |
| g8 | 0–5bb | Two pair | T9, 98, 96 | 60% | 39% | 18% | 45% |
| g9 | 0–5bb | Top pair | AK, KQ, KJ, K5–K2 | 58% | 33% | 2% | 51% |
| g10 | 0–5bb | Big pocket pairs | QQ, JJ | 53% | 25% | 0% | 48% |
| g11 | 0–5bb | Second pair | AT, QT, JT | 54% | 28% | 0% | 47% |
| g12 | 0–5bb | Small pairs | 55–22, A9, A8, A6, Q9, Q8, Q6, J9, J8, 65, 64 | 14% | 4% | 0% | 13% |
| g13 | Pot is too big | Ace-high | AQ, AJ, A5–A2 | 0% | 0% | 0% | 0% |

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
| Q9+fl | flush | 99% | 100% | 99% | 100% | 50–100bb | g1 |
| 96+fl | flushlo | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| Q5+fl | flush | 99% | 100% | 99% | 99% | 50–100bb | g1 |
| Q6+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| J9+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| QJ+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| Q7+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 97+fl | flushlo | 99% | 100% | 100% | 96% | 50–100bb | g1 |
| J7+fl | flush | 97% | 99% | 99% | 95% | 50–100bb | g1 |
| 65+fl | flushlo | 97% | 99% | 98% | 95% | 50–100bb | g1 |
| 64+fl | flushlo | 97% | 99% | 98% | 95% | 50–100bb | g1 |
| 76+fl | flushlo | 98% | 99% | 99% | 94% | 50–100bb | g1 |
| 75+fl | flushlo | 97% | 99% | 98% | 93% | 50–100bb | g1 |
| 43+fl | flushlo | 96% | 98% | 98% | 91% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 98% | 98% | 91% | 50–100bb | g1 |
| QJ | straight | 92% | 99% | 98% | 87% | 50–100bb | g2 |
| J7 | straight | 92% | 98% | 97% | 84% | 50–100bb | g3 |
| 77 | straight | 88% | 94% | 91% | 76% | 50–100bb | g4 |
| K7 | straight | 87% | 90% | 85% | 74% | 50–100bb | g4 |
| 75 | straight | 86% | 91% | 86% | 73% | 50–100bb | g4 |
| 87 | straight | 86% | 90% | 85% | 73% | 50–100bb | g4 |
| A7 | straight | 87% | 91% | 86% | 72% | 50–100bb | g4 |
| T7 | straight | 86% | 89% | 84% | 72% | 50–100bb | g4 |
| Q7 | straight | 86% | 90% | 87% | 72% | 50–100bb | g4 |
| 76 | straight | 87% | 91% | 86% | 71% | 50–100bb | g4 |
| 97 | straight | 85% | 90% | 86% | 68% | 50–100bb | g4 |
| 99 | twopair | 72% | 71% | 63% | 43% | 25–50bb | g5 |
| KK | twopair | 74% | 72% | 58% | 56% | 50–100bb | g5 |
| 66 | twopair | 79% | 76% | 65% | 55% | 50–100bb | g5 |
| 88 | twopair | 73% | 73% | 58% | 55% | 50–100bb | g5 |
| TT | twopair | 73% | 70% | 56% | 53% | 50–100bb | g5 |
| K8 | twopair | 71% | 65% | 45% | 55% | 50–100bb | g6 |
| KT | twopair | 74% | 69% | 54% | 54% | 50–100bb | g6 |
| T8 | twopair | 61% | 42% | 15% | 53% | 50–100bb | g6 |
| K6 | twopair | 72% | 59% | 39% | 52% | 50–100bb | g6 |
| K9 | twopair | 71% | 65% | 52% | 48% | 25–50bb | g6 |
| 86 | twopair | 58% | 38% | 6% | 51% | 50–100bb | g6 |
| AA | op | 55% | 34% | 4% | 52% | 50–100bb | g7 |
| T9 | twopair | 62% | 43% | 23% | 45% | 0–5bb | g8 |
| 98 | twopair | 54% | 32% | 8% | 46% | 0–5bb | g8 |
| 96 | twopair | 53% | 30% | 6% | 43% | 0–5bb | g8 |
| AK | tpgk | 59% | 36% | 3% | 52% | 50–100bb | g9 |
| K2 | tpmk | 58% | 33% | 0% | 52% | 50–100bb | g9 |
| K5 | tpmk | 58% | 34% | 0% | 51% | 50–100bb | g9 |
| K3 | tpmk | 58% | 33% | 0% | 51% | 50–100bb | g9 |
| K4 | tpmk | 58% | 33% | 0% | 51% | 50–100bb | g9 |
| KQ | tpgk | 58% | 33% | 3% | 51% | 50–100bb | g9 |
| KJ | tpmk | 57% | 31% | 2% | 50% | 50–100bb | g9 |
| QQ | pp1 | 53% | 26% | 0% | 47% | 0–5bb | g10 |
| JJ | pp1 | 52% | 24% | 0% | 48% | 0–5bb | g10 |
| AT | mp | 56% | 32% | 0% | 49% | 0–5bb | g11 |
| QT | mp | 55% | 27% | 0% | 47% | 0–5bb | g11 |
| JT | mp | 51% | 25% | 0% | 45% | 0–5bb | g11 |
| A9 | bp | 39% | 17% | 0% | 38% | 0–5bb | g12 |
| Q9 | bp | 35% | 12% | 0% | 31% | 0–5bb | g12 |
| J9 | bp | 26% | 5% | 0% | 19% | 0–5bb | g12 |
| A8 | bp | 14% | 2% | 0% | 12% | 0–5bb | g12 |
| Q8 | bp | 13% | 1% | 0% | 12% | 0–5bb | g12 |
| J8 | bp | 11% | 1% | 0% | 13% | 0–5bb | g12 |
| A6 | bp | 5% | 0% | 0% | 8% | 0–5bb | g12 |
| Q6 | bp | 3% | 0% | 0% | 6% | 0–5bb | g12 |
| 65 | bp | 2% | 0% | 0% | 2% | 0–5bb | g12 |
| 64 | bp | 1% | 0% | 0% | 2% | 0–5bb | g12 |
| 55 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g12 |
| 44 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g12 |
| 33 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g12 |
| 22 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g12 |
| AQ | khnd | 0% | 0% | 0% | 0% | Pot is too big | g13 |
| AJ | khnd | 0% | 0% | 0% | 0% | Pot is too big | g13 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g13 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g13 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g13 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g13 |
