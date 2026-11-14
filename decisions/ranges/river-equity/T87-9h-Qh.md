# T87-9h-Qh river (T♥ 8♥ 7♠ 9♥ Q♥): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes & straights | KJ · ♥ flushes: AA, KK, JJ, 77–22, AK–A2, KQ–K2, QJ, JT, J9, J7, 76, 75, 65, 64, 54, 43 | 86% | 88% | 87% | 74% |
| g2 | 25–50bb | Straights | JJ, AJ, QJ, JT–J7 | 64% | 65% | 63% | 40% |
| g3 | 0–5bb | Straights & sets | QQ, TT–66, A6, K6, Q6, 96, 86, 76, 65, 64 | 41% | 37% | 35% | 16% |
| g4 | 0–5bb | Overpairs | AA, KK | 8% | 3% | 0% | 5% |
| g5 | 0–5bb | Two pair | QT–Q7, T9–T7, 98, 97, 87 | 23% | 16% | 13% | 9% |
| g6 | 0–5bb | Top pair | AQ, KQ, Q5 | 11% | 4% | 0% | 7% |
| g7 | 0–5bb | Second pair | AT, KT | 9% | 3% | 0% | 4% |
| g8 | 0–5bb | Small pairs | 55–22, A9–A7, K9–K7, 75 | 3% | 1% | 0% | 1% |
| g9 | Pot is too big | Ace-high | AK, A5–A2 | 1% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| JJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| JT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AJ+fl | flush | 95% | 95% | 94% | 89% | 50–100bb | g1 |
| KJ+fl | flush | 94% | 94% | 95% | 85% | 50–100bb | g1 |
| 76+fl | flush | 92% | 91% | 90% | 81% | 50–100bb | g1 |
| A8+fl | flush | 91% | 90% | 89% | 78% | 50–100bb | g1 |
| AA+fl | flush | 91% | 91% | 90% | 77% | 50–100bb | g1 |
| A9+fl | flush | 90% | 90% | 90% | 77% | 50–100bb | g1 |
| AQ+fl | flush | 91% | 90% | 90% | 77% | 50–100bb | g1 |
| AT+fl | flush | 90% | 90% | 89% | 77% | 50–100bb | g1 |
| AK+fl | flush | 89% | 89% | 89% | 73% | 50–100bb | g1 |
| A2+fl | flush | 84% | 85% | 85% | 72% | 50–100bb | g1 |
| A3+fl | flush | 84% | 86% | 85% | 72% | 50–100bb | g1 |
| A7+fl | flush | 87% | 88% | 88% | 71% | 50–100bb | g1 |
| A6+fl | flush | 86% | 88% | 86% | 71% | 50–100bb | g1 |
| A4+fl | flush | 84% | 86% | 86% | 70% | 50–100bb | g1 |
| K5+fl | flush | 84% | 88% | 86% | 70% | 50–100bb | g1 |
| A5+fl | flush | 84% | 86% | 86% | 70% | 50–100bb | g1 |
| K3+fl | flush | 85% | 88% | 88% | 70% | 50–100bb | g1 |
| KK+fl | flush | 85% | 88% | 87% | 69% | 50–100bb | g1 |
| K4+fl | flush | 86% | 88% | 88% | 69% | 50–100bb | g1 |
| K8+fl | flush | 84% | 87% | 87% | 69% | 50–100bb | g1 |
| K7+fl | flush | 83% | 87% | 86% | 68% | 50–100bb | g1 |
| K9+fl | flush | 85% | 88% | 87% | 68% | 50–100bb | g1 |
| K2+fl | flush | 85% | 88% | 87% | 68% | 50–100bb | g1 |
| KT+fl | flush | 84% | 88% | 87% | 68% | 50–100bb | g1 |
| KQ+fl | flush | 84% | 88% | 87% | 68% | 50–100bb | g1 |
| 65+fl | flushlo | 80% | 84% | 82% | 67% | 50–100bb | g1 |
| K6+fl | flush | 83% | 86% | 85% | 67% | 50–100bb | g1 |
| 75+fl | flushlo | 83% | 88% | 86% | 67% | 50–100bb | g1 |
| 64+fl | flushlo | 79% | 84% | 84% | 66% | 50–100bb | g1 |
| 66+fl | flushlo | 78% | 83% | 83% | 65% | 50–100bb | g1 |
| 77+fl | flushlo | 82% | 87% | 86% | 65% | 50–100bb | g1 |
| 54+fl | flushlo | 76% | 80% | 81% | 65% | 50–100bb | g1 |
| 22+fl | flushlo | 76% | 80% | 79% | 64% | 50–100bb | g1 |
| 43+fl | flushlo | 76% | 80% | 80% | 64% | 50–100bb | g1 |
| 44+fl | flushlo | 75% | 80% | 80% | 64% | 50–100bb | g1 |
| 33+fl | flushlo | 75% | 80% | 79% | 64% | 50–100bb | g1 |
| 55+fl | flushlo | 76% | 80% | 80% | 63% | 50–100bb | g1 |
| KJ | straight | 73% | 78% | 76% | 58% | 50–100bb | g1 |
| JJ | straight | 67% | 69% | 67% | 42% | 25–50bb | g2 |
| AJ | straight | 64% | 67% | 64% | 41% | 25–50bb | g2 |
| J8 | straight | 62% | 64% | 63% | 40% | 25–50bb | g2 |
| QJ | straight | 63% | 65% | 63% | 40% | 25–50bb | g2 |
| J7 | straight | 63% | 65% | 63% | 39% | 25–50bb | g2 |
| JT | straight | 63% | 64% | 63% | 38% | 25–50bb | g2 |
| J9 | straight | 63% | 64% | 63% | 40% | 25–50bb | g2 |
| 66 | straight | 46% | 40% | 39% | 17% | 0–5bb | g3 |
| K6 | straight | 45% | 41% | 39% | 18% | 0–5bb | g3 |
| Q6 | straight | 45% | 39% | 38% | 16% | 0–5bb | g3 |
| A6 | straight | 45% | 41% | 39% | 16% | 0–5bb | g3 |
| 65 | straight | 44% | 41% | 39% | 17% | 0–5bb | g3 |
| 86 | straight | 44% | 40% | 37% | 17% | 0–5bb | g3 |
| 96 | straight | 43% | 39% | 36% | 17% | 0–5bb | g3 |
| 64 | straight | 43% | 41% | 39% | 17% | 0–5bb | g3 |
| 76 | straight | 43% | 39% | 37% | 18% | 0–5bb | g3 |
| 88 | twopair | 34% | 32% | 29% | 15% | 0–5bb | g3 |
| QQ | twopair | 33% | 29% | 25% | 13% | 0–5bb | g3 |
| 77 | twopair | 33% | 30% | 28% | 15% | 0–5bb | g3 |
| 99 | twopair | 32% | 28% | 25% | 13% | 0–5bb | g3 |
| TT | twopair | 29% | 23% | 21% | 10% | 0–5bb | g3 |
| KK | op | 9% | 2% | 0% | 6% | 0–5bb | g4 |
| AA | op | 7% | 3% | 0% | 4% | 0–5bb | g4 |
| QT | twopair | 30% | 24% | 21% | 11% | 0–5bb | g5 |
| Q8 | twopair | 26% | 20% | 17% | 11% | 0–5bb | g5 |
| Q7 | twopair | 25% | 20% | 17% | 11% | 0–5bb | g5 |
| Q9 | twopair | 25% | 20% | 16% | 9% | 0–5bb | g5 |
| T9 | twopair | 21% | 14% | 10% | 8% | 0–5bb | g5 |
| T8 | twopair | 19% | 12% | 8% | 7% | 0–5bb | g5 |
| T7 | twopair | 17% | 9% | 5% | 7% | 0–5bb | g5 |
| 98 | twopair | 13% | 7% | 3% | 6% | 0–5bb | g5 |
| 97 | twopair | 13% | 5% | 2% | 7% | 0–5bb | g5 |
| 87 | twopair | 11% | 5% | 0% | 7% | 0–5bb | g5 |
| Q5 | tpmk | 12% | 4% | 0% | 8% | 0–5bb | g6 |
| AQ | tpgk | 11% | 4% | 0% | 6% | 0–5bb | g6 |
| KQ | tpgk | 10% | 4% | 0% | 8% | 0–5bb | g6 |
| AT | mp | 9% | 3% | 0% | 4% | 0–5bb | g7 |
| KT | mp | 8% | 3% | 0% | 4% | 0–5bb | g7 |
| A9 | bp | 6% | 2% | 0% | 2% | 0–5bb | g8 |
| K9 | bp | 5% | 1% | 0% | 2% | 0–5bb | g8 |
| A8 | bp | 3% | 0% | 0% | 0% | 0–5bb | g8 |
| K8 | bp | 3% | 0% | 0% | 0% | 0–5bb | g8 |
| A7 | bp | 1% | 0% | 0% | 0% | 0–5bb | g8 |
| K7 | bp | 1% | 0% | 0% | 0% | 0–5bb | g8 |
| 75 | bp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 44 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 55 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 33 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 22 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| A5 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A4 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| AK | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
