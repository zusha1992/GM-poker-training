# 986-Kd-Td river (9♠ 8♦ 6♣ K♦ T♦): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes, straights & sets | KK, TT–66, A7, K7, QJ, Q7, J7, T7, 97, 87, 76, 75 · ♦ flushes: AQ, AJ, A9, A7–A2, QJ, Q9, Q7–Q5, J9, J7, 97, 96, 76, 75, 65, 64, 54, 43 | 89% | 92% | 88% | 78% |
| g2 | 50–100bb | Overpair | AA | 55% | 33% | 5% | 52% |
| g3 | 50–100bb | Two pair | KT–K8, K6, T8, 86 | 71% | 62% | 43% | 52% |
| g4 | 50–100bb | Top pair | AK, KQ, KJ, K5–K2 | 58% | 33% | 2% | 51% |
| g5 | 0–5bb | Two pair | T9, 98, 96 | 59% | 40% | 17% | 46% |
| g6 | 0–5bb | Big pocket pairs | QQ, JJ | 52% | 25% | 0% | 47% |
| g7 | 0–5bb | Second pair | AT, QT, JT | 53% | 27% | 0% | 47% |
| g8 | Pot is too big | Small pairs | 55–22, A9, A8, A6, Q9, Q8, Q6, J9, J8, 65, 64 | 14% | 4% | 0% | 13% |
| g9 | Pot is too big | Ace-high | AQ, AJ, A5–A2 | 0% | 0% | 0% | 0% |

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
| Q9+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| Q6+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 96+fl | flushlo | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| J9+fl | flush | 99% | 99% | 100% | 99% | 50–100bb | g1 |
| Q5+fl | flush | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| QJ+fl | flush | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| Q7+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 97+fl | flushlo | 98% | 100% | 100% | 96% | 50–100bb | g1 |
| 65+fl | flushlo | 98% | 99% | 98% | 95% | 50–100bb | g1 |
| J7+fl | flush | 98% | 99% | 99% | 95% | 50–100bb | g1 |
| 64+fl | flushlo | 98% | 99% | 98% | 95% | 50–100bb | g1 |
| 76+fl | flushlo | 98% | 99% | 99% | 94% | 50–100bb | g1 |
| 75+fl | flushlo | 97% | 99% | 98% | 93% | 50–100bb | g1 |
| 43+fl | flushlo | 96% | 99% | 98% | 92% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 99% | 98% | 91% | 50–100bb | g1 |
| QJ | straight | 93% | 99% | 98% | 87% | 50–100bb | g1 |
| J7 | straight | 92% | 98% | 97% | 83% | 50–100bb | g1 |
| 77 | straight | 89% | 94% | 91% | 77% | 50–100bb | g1 |
| 87 | straight | 86% | 91% | 85% | 74% | 50–100bb | g1 |
| K7 | straight | 86% | 90% | 84% | 73% | 50–100bb | g1 |
| A7 | straight | 87% | 91% | 87% | 73% | 50–100bb | g1 |
| 75 | straight | 87% | 91% | 87% | 73% | 50–100bb | g1 |
| Q7 | straight | 87% | 90% | 85% | 72% | 50–100bb | g1 |
| T7 | straight | 87% | 90% | 84% | 72% | 50–100bb | g1 |
| 76 | straight | 86% | 90% | 86% | 71% | 50–100bb | g1 |
| 97 | straight | 86% | 90% | 86% | 68% | 50–100bb | g1 |
| 99 | twopair | 72% | 71% | 64% | 43% | 25–50bb | g1 |
| 88 | twopair | 72% | 74% | 58% | 56% | 50–100bb | g1 |
| 66 | twopair | 78% | 77% | 66% | 55% | 50–100bb | g1 |
| KK | twopair | 76% | 72% | 56% | 54% | 50–100bb | g1 |
| TT | twopair | 73% | 70% | 56% | 52% | 50–100bb | g1 |
| AA | op | 55% | 33% | 4% | 52% | 50–100bb | g2 |
| K8 | twopair | 72% | 64% | 46% | 53% | 50–100bb | g3 |
| KT | twopair | 73% | 69% | 54% | 53% | 50–100bb | g3 |
| T8 | twopair | 62% | 43% | 15% | 53% | 50–100bb | g3 |
| K6 | twopair | 71% | 59% | 38% | 53% | 50–100bb | g3 |
| K9 | twopair | 71% | 66% | 51% | 50% | 25–50bb | g3 |
| 86 | twopair | 58% | 36% | 6% | 51% | 50–100bb | g3 |
| AK | tpgk | 59% | 36% | 3% | 52% | 50–100bb | g4 |
| K5 | tpmk | 57% | 33% | 0% | 52% | 50–100bb | g4 |
| K2 | tpmk | 58% | 33% | 0% | 52% | 50–100bb | g4 |
| K4 | tpmk | 58% | 33% | 0% | 52% | 50–100bb | g4 |
| KQ | tpgk | 57% | 33% | 3% | 51% | 50–100bb | g4 |
| K3 | tpmk | 58% | 33% | 0% | 51% | 50–100bb | g4 |
| KJ | tpmk | 58% | 30% | 2% | 50% | 50–100bb | g4 |
| T9 | twopair | 61% | 44% | 22% | 46% | 0–5bb | g5 |
| 98 | twopair | 56% | 33% | 8% | 47% | 0–5bb | g5 |
| 96 | twopair | 54% | 31% | 6% | 43% | 0–5bb | g5 |
| QQ | pp1 | 53% | 26% | 0% | 47% | 0–5bb | g6 |
| JJ | pp1 | 52% | 24% | 0% | 46% | 0–5bb | g6 |
| AT | mp | 55% | 30% | 0% | 49% | 0–5bb | g7 |
| QT | mp | 53% | 27% | 0% | 47% | 0–5bb | g7 |
| JT | mp | 52% | 24% | 0% | 45% | 0–5bb | g7 |
| A9 | bp | 40% | 16% | 0% | 37% | Pot is too big | g8 |
| Q9 | bp | 35% | 12% | 0% | 31% | Pot is too big | g8 |
| J9 | bp | 27% | 5% | 0% | 19% | Pot is too big | g8 |
| A8 | bp | 16% | 2% | 0% | 12% | Pot is too big | g8 |
| Q8 | bp | 12% | 1% | 0% | 13% | Pot is too big | g8 |
| J8 | bp | 11% | 1% | 0% | 13% | Pot is too big | g8 |
| A6 | bp | 4% | 0% | 0% | 8% | Pot is too big | g8 |
| Q6 | bp | 4% | 0% | 0% | 6% | Pot is too big | g8 |
| 65 | bp | 2% | 0% | 0% | 2% | Pot is too big | g8 |
| 64 | bp | 1% | 0% | 0% | 2% | Pot is too big | g8 |
| 55 | pp3 | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| 44 | pp3 | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| 33 | pp3 | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| 22 | pp3 | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| AQ | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| AJ | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
