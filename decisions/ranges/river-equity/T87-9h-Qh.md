# T87-9h-Qh river (T♥ 8♥ 7♠ 9♥ Q♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: AA, KK, JJ, 77–22, AK–A2, KQ–K2, QJ, JT, J9, J7, 76, 75, 65, 64, 54, 43 | 87% | 88% | 88% | 75% |
| g2 | 25–50bb | K-high straights | KJ | 74% | 78% | 76% | 59% |
| g3 | 25–50bb | Q-high straights | JJ, AJ, QJ, JT–J7 | 63% | 65% | 64% | 39% |
| g4 | 0–5bb | T-high straights | 66, A6, K6, Q6, 96, 86, 76, 65, 64 | 44% | 41% | 37% | 17% |
| g5 | 0–5bb | Sets | QQ, TT–77 | 32% | 28% | 25% | 13% |
| g6 | 0–5bb | Overpairs | AA, KK | 8% | 3% | 0% | 6% |
| g7 | 0–5bb | Two pair | QT–Q7, T9–T7, 98, 97, 87 | 23% | 16% | 13% | 9% |
| g8 | 0–5bb | Top pair | AQ, KQ, Q5 | 10% | 4% | 0% | 7% |
| g9 | 0–5bb | Second pair | AT, KT | 9% | 3% | 0% | 5% |
| g10 | 0–5bb | Small pairs | 55–22, A9–A7, K9–K7, 75 | 3% | 1% | 0% | 0% |
| g11 | Pot is too big | Ace-high | AK, A5–A2 | 0% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| JJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| JT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AJ+fl | flush | 95% | 95% | 95% | 89% | 50–100bb | g1 |
| KJ+fl | flush | 93% | 94% | 94% | 85% | 50–100bb | g1 |
| 76+fl | flush | 92% | 91% | 91% | 80% | 50–100bb | g1 |
| AA+fl | flush | 91% | 90% | 90% | 79% | 50–100bb | g1 |
| A8+fl | flush | 90% | 89% | 89% | 78% | 50–100bb | g1 |
| A9+fl | flush | 91% | 90% | 89% | 77% | 50–100bb | g1 |
| AQ+fl | flush | 91% | 90% | 89% | 77% | 50–100bb | g1 |
| AT+fl | flush | 90% | 90% | 90% | 77% | 50–100bb | g1 |
| AK+fl | flush | 89% | 89% | 89% | 72% | 50–100bb | g1 |
| A7+fl | flush | 86% | 87% | 87% | 72% | 50–100bb | g1 |
| A2+fl | flush | 84% | 87% | 85% | 71% | 50–100bb | g1 |
| A4+fl | flush | 85% | 86% | 85% | 71% | 50–100bb | g1 |
| A6+fl | flush | 85% | 87% | 86% | 71% | 50–100bb | g1 |
| A3+fl | flush | 83% | 85% | 86% | 71% | 50–100bb | g1 |
| A5+fl | flush | 84% | 86% | 85% | 70% | 50–100bb | g1 |
| K9+fl | flush | 84% | 88% | 87% | 69% | 50–100bb | g1 |
| K3+fl | flush | 86% | 89% | 87% | 69% | 50–100bb | g1 |
| K2+fl | flush | 86% | 87% | 87% | 69% | 50–100bb | g1 |
| K4+fl | flush | 85% | 88% | 87% | 69% | 50–100bb | g1 |
| KK+fl | flush | 85% | 88% | 87% | 69% | 50–100bb | g1 |
| K5+fl | flush | 85% | 88% | 88% | 68% | 50–100bb | g1 |
| KT+fl | flush | 85% | 88% | 87% | 68% | 50–100bb | g1 |
| K8+fl | flush | 84% | 88% | 87% | 68% | 50–100bb | g1 |
| K7+fl | flush | 84% | 88% | 87% | 68% | 50–100bb | g1 |
| 75+fl | flushlo | 83% | 86% | 87% | 68% | 50–100bb | g1 |
| KQ+fl | flush | 85% | 88% | 87% | 68% | 50–100bb | g1 |
| K6+fl | flush | 81% | 86% | 85% | 68% | 50–100bb | g1 |
| 77+fl | flushlo | 83% | 86% | 85% | 67% | 50–100bb | g1 |
| 64+fl | flushlo | 78% | 84% | 83% | 67% | 50–100bb | g1 |
| 65+fl | flushlo | 80% | 84% | 83% | 65% | 50–100bb | g1 |
| 54+fl | flushlo | 76% | 81% | 80% | 65% | 50–100bb | g1 |
| 22+fl | flushlo | 75% | 78% | 79% | 65% | 50–100bb | g1 |
| 33+fl | flushlo | 75% | 80% | 78% | 65% | 50–100bb | g1 |
| 66+fl | flushlo | 77% | 82% | 82% | 65% | 50–100bb | g1 |
| 43+fl | flushlo | 75% | 81% | 79% | 65% | 50–100bb | g1 |
| 55+fl | flushlo | 76% | 80% | 79% | 64% | 50–100bb | g1 |
| 44+fl | flushlo | 76% | 80% | 79% | 63% | 50–100bb | g1 |
| KJ | straight | 74% | 78% | 76% | 59% | 50–100bb | g2 |
| JJ | straight | 68% | 69% | 68% | 41% | 25–50bb | g3 |
| AJ | straight | 64% | 66% | 64% | 39% | 25–50bb | g3 |
| J8 | straight | 63% | 65% | 64% | 40% | 25–50bb | g3 |
| QJ | straight | 62% | 66% | 63% | 39% | 25–50bb | g3 |
| J7 | straight | 63% | 64% | 63% | 40% | 25–50bb | g3 |
| J9 | straight | 62% | 65% | 63% | 40% | 25–50bb | g3 |
| JT | straight | 63% | 64% | 62% | 38% | 25–50bb | g3 |
| 64 | straight | 46% | 40% | 37% | 18% | 0–5bb | g4 |
| 66 | straight | 45% | 40% | 39% | 17% | 0–5bb | g4 |
| A6 | straight | 45% | 41% | 38% | 17% | 0–5bb | g4 |
| 65 | straight | 44% | 42% | 37% | 17% | 0–5bb | g4 |
| K6 | straight | 44% | 41% | 37% | 18% | 0–5bb | g4 |
| Q6 | straight | 44% | 40% | 36% | 16% | 0–5bb | g4 |
| 86 | straight | 43% | 40% | 37% | 17% | 0–5bb | g4 |
| 96 | straight | 43% | 39% | 35% | 16% | 0–5bb | g4 |
| 76 | straight | 42% | 39% | 35% | 18% | 0–5bb | g4 |
| 88 | twopair | 34% | 31% | 28% | 15% | 0–5bb | g5 |
| QQ | twopair | 33% | 29% | 26% | 13% | 0–5bb | g5 |
| 77 | twopair | 32% | 30% | 27% | 15% | 0–5bb | g5 |
| 99 | twopair | 32% | 27% | 24% | 13% | 0–5bb | g5 |
| TT | twopair | 28% | 24% | 20% | 9% | 0–5bb | g5 |
| KK | op | 9% | 3% | 0% | 8% | 0–5bb | g6 |
| AA | op | 7% | 3% | 0% | 4% | 0–5bb | g6 |
| QT | twopair | 29% | 23% | 22% | 10% | 0–5bb | g7 |
| Q8 | twopair | 28% | 20% | 16% | 10% | 0–5bb | g7 |
| Q9 | twopair | 26% | 19% | 16% | 9% | 0–5bb | g7 |
| Q7 | twopair | 25% | 20% | 16% | 11% | 0–5bb | g7 |
| T9 | twopair | 21% | 15% | 11% | 8% | 0–5bb | g7 |
| T8 | twopair | 18% | 11% | 8% | 7% | 0–5bb | g7 |
| T7 | twopair | 16% | 9% | 6% | 7% | 0–5bb | g7 |
| 98 | twopair | 14% | 6% | 3% | 7% | 0–5bb | g7 |
| 97 | twopair | 12% | 5% | 1% | 7% | 0–5bb | g7 |
| 87 | twopair | 10% | 4% | 0% | 8% | 0–5bb | g7 |
| Q5 | tpmk | 12% | 5% | 0% | 8% | 0–5bb | g8 |
| KQ | tpgk | 11% | 4% | 0% | 8% | 0–5bb | g8 |
| AQ | tpgk | 10% | 3% | 0% | 6% | 0–5bb | g8 |
| AT | mp | 9% | 3% | 0% | 5% | 0–5bb | g9 |
| KT | mp | 8% | 3% | 0% | 5% | 0–5bb | g9 |
| A9 | bp | 6% | 1% | 0% | 1% | 0–5bb | g10 |
| K9 | bp | 5% | 1% | 0% | 1% | 0–5bb | g10 |
| A8 | bp | 3% | 1% | 0% | 0% | 0–5bb | g10 |
| K8 | bp | 3% | 0% | 0% | 0% | 0–5bb | g10 |
| A7 | bp | 1% | 0% | 0% | 0% | 0–5bb | g10 |
| K7 | bp | 1% | 0% | 0% | 0% | 0–5bb | g10 |
| 75 | bp | 1% | 0% | 0% | 0% | 0–5bb | g10 |
| 55 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g10 |
| 22 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g10 |
| 44 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g10 |
| 33 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g10 |
| AK | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
