# T87-9h-Qh river (T♥ 8♥ 7♠ 9♥ Q♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: AA, KK, JJ, 77–22, AK–A2, KQ–K2, QJ, JT, J9, J7, 76, 75, 65, 64, 54, 43 | 87% | 88% | 88% | 75% |
| g2 | 25–50bb | Straights | JJ, AJ, KJ, QJ, JT–J7 | 66% | 67% | 66% | 43% |
| g3 | 0–5bb | Straights | 66, A6, K6, Q6, 96, 86, 76, 65, 64 | 44% | 41% | 39% | 17% |
| g4 | 0–5bb | Sets | QQ, TT–77 | 32% | 28% | 25% | 13% |
| g5 | 0–5bb | Overpairs | AA, KK | 8% | 3% | 0% | 6% |
| g6 | 0–5bb | Two pair | QT–Q7, T9–T7, 98, 97, 87 | 23% | 16% | 13% | 9% |
| g7 | 0–5bb | Top pair | AQ, KQ, Q5 | 10% | 4% | 0% | 7% |
| g8 | 0–5bb | Second pair | AT, KT | 8% | 3% | 0% | 4% |
| g9 | 0–5bb | Small pairs | 55–22, A9–A7, K9–K7, 75 | 3% | 1% | 0% | 1% |
| g10 | Pot is too big | Ace-high | AK, A5–A2 | 0% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| JJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| JT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AJ+fl | flush | 96% | 95% | 95% | 88% | 50–100bb | g1 |
| KJ+fl | flush | 93% | 95% | 94% | 86% | 50–100bb | g1 |
| 76+fl | flush | 92% | 91% | 91% | 80% | 50–100bb | g1 |
| AQ+fl | flush | 91% | 90% | 89% | 78% | 50–100bb | g1 |
| AA+fl | flush | 91% | 90% | 90% | 77% | 50–100bb | g1 |
| A8+fl | flush | 90% | 89% | 89% | 77% | 50–100bb | g1 |
| A9+fl | flush | 90% | 90% | 90% | 76% | 50–100bb | g1 |
| AT+fl | flush | 91% | 90% | 90% | 76% | 50–100bb | g1 |
| AK+fl | flush | 89% | 89% | 89% | 74% | 50–100bb | g1 |
| A3+fl | flush | 83% | 86% | 85% | 72% | 50–100bb | g1 |
| A6+fl | flush | 85% | 87% | 87% | 72% | 50–100bb | g1 |
| A7+fl | flush | 87% | 89% | 88% | 71% | 50–100bb | g1 |
| A2+fl | flush | 84% | 85% | 85% | 71% | 50–100bb | g1 |
| A4+fl | flush | 85% | 86% | 85% | 71% | 50–100bb | g1 |
| A5+fl | flush | 84% | 86% | 85% | 70% | 50–100bb | g1 |
| K3+fl | flush | 86% | 88% | 87% | 70% | 50–100bb | g1 |
| K2+fl | flush | 86% | 88% | 88% | 70% | 50–100bb | g1 |
| K5+fl | flush | 85% | 87% | 87% | 70% | 50–100bb | g1 |
| KK+fl | flush | 85% | 88% | 87% | 69% | 50–100bb | g1 |
| K4+fl | flush | 85% | 88% | 87% | 69% | 50–100bb | g1 |
| K9+fl | flush | 85% | 88% | 86% | 69% | 50–100bb | g1 |
| KQ+fl | flush | 85% | 87% | 87% | 69% | 50–100bb | g1 |
| KT+fl | flush | 84% | 88% | 87% | 68% | 50–100bb | g1 |
| K7+fl | flush | 83% | 87% | 86% | 68% | 50–100bb | g1 |
| K8+fl | flush | 85% | 87% | 87% | 68% | 50–100bb | g1 |
| 75+fl | flushlo | 82% | 87% | 86% | 68% | 50–100bb | g1 |
| K6+fl | flush | 82% | 86% | 84% | 68% | 50–100bb | g1 |
| 77+fl | flushlo | 82% | 86% | 86% | 67% | 50–100bb | g1 |
| 64+fl | flushlo | 79% | 84% | 84% | 66% | 50–100bb | g1 |
| 65+fl | flushlo | 80% | 84% | 84% | 66% | 50–100bb | g1 |
| 33+fl | flushlo | 75% | 81% | 80% | 65% | 50–100bb | g1 |
| 22+fl | flushlo | 75% | 81% | 78% | 65% | 50–100bb | g1 |
| 55+fl | flushlo | 75% | 80% | 79% | 65% | 50–100bb | g1 |
| 66+fl | flushlo | 78% | 83% | 83% | 65% | 50–100bb | g1 |
| 43+fl | flushlo | 76% | 80% | 79% | 64% | 50–100bb | g1 |
| 44+fl | flushlo | 76% | 80% | 79% | 64% | 50–100bb | g1 |
| 54+fl | flushlo | 76% | 81% | 80% | 63% | 50–100bb | g1 |
| JJ | straight | 66% | 69% | 67% | 41% | 25–50bb | g2 |
| AJ | straight | 64% | 66% | 65% | 39% | 25–50bb | g2 |
| J8 | straight | 64% | 65% | 64% | 41% | 25–50bb | g2 |
| QJ | straight | 64% | 65% | 63% | 40% | 25–50bb | g2 |
| J9 | straight | 63% | 64% | 63% | 40% | 25–50bb | g2 |
| J7 | straight | 64% | 64% | 63% | 40% | 25–50bb | g2 |
| JT | straight | 62% | 63% | 62% | 37% | 25–50bb | g2 |
| KJ | straight | 74% | 77% | 77% | 58% | 50–100bb | g2 |
| 65 | straight | 46% | 42% | 39% | 17% | 0–5bb | g3 |
| 66 | straight | 45% | 42% | 39% | 17% | 0–5bb | g3 |
| 64 | straight | 45% | 41% | 39% | 18% | 0–5bb | g3 |
| A6 | straight | 45% | 41% | 40% | 17% | 0–5bb | g3 |
| K6 | straight | 44% | 41% | 40% | 17% | 0–5bb | g3 |
| Q6 | straight | 43% | 40% | 36% | 17% | 0–5bb | g3 |
| 86 | straight | 43% | 40% | 38% | 17% | 0–5bb | g3 |
| 96 | straight | 43% | 39% | 37% | 16% | 0–5bb | g3 |
| 76 | straight | 43% | 41% | 37% | 17% | 0–5bb | g3 |
| 88 | twopair | 34% | 30% | 29% | 15% | 0–5bb | g4 |
| 77 | twopair | 33% | 30% | 27% | 15% | 0–5bb | g4 |
| QQ | twopair | 33% | 28% | 25% | 14% | 0–5bb | g4 |
| 99 | twopair | 32% | 28% | 24% | 13% | 0–5bb | g4 |
| TT | twopair | 28% | 24% | 20% | 10% | 0–5bb | g4 |
| KK | op | 9% | 3% | 0% | 7% | 0–5bb | g5 |
| AA | op | 7% | 3% | 0% | 4% | 0–5bb | g5 |
| QT | twopair | 29% | 25% | 20% | 11% | 0–5bb | g6 |
| Q9 | twopair | 27% | 19% | 16% | 10% | 0–5bb | g6 |
| Q8 | twopair | 27% | 20% | 17% | 11% | 0–5bb | g6 |
| Q7 | twopair | 26% | 20% | 16% | 11% | 0–5bb | g6 |
| T9 | twopair | 21% | 14% | 11% | 8% | 0–5bb | g6 |
| T8 | twopair | 18% | 11% | 8% | 7% | 0–5bb | g6 |
| T7 | twopair | 16% | 9% | 6% | 7% | 0–5bb | g6 |
| 98 | twopair | 14% | 6% | 3% | 7% | 0–5bb | g6 |
| 97 | twopair | 12% | 5% | 2% | 7% | 0–5bb | g6 |
| 87 | twopair | 11% | 5% | 0% | 8% | 0–5bb | g6 |
| Q5 | tpmk | 12% | 4% | 0% | 8% | 0–5bb | g7 |
| KQ | tpgk | 11% | 4% | 0% | 7% | 0–5bb | g7 |
| AQ | tpgk | 9% | 4% | 0% | 6% | 0–5bb | g7 |
| KT | mp | 9% | 3% | 0% | 4% | 0–5bb | g8 |
| AT | mp | 8% | 3% | 0% | 5% | 0–5bb | g8 |
| A9 | bp | 6% | 1% | 0% | 2% | 0–5bb | g9 |
| K9 | bp | 5% | 1% | 0% | 2% | 0–5bb | g9 |
| A8 | bp | 3% | 0% | 0% | 0% | 0–5bb | g9 |
| K8 | bp | 3% | 0% | 0% | 0% | 0–5bb | g9 |
| A7 | bp | 1% | 0% | 0% | 0% | 0–5bb | g9 |
| K7 | bp | 1% | 0% | 0% | 0% | 0–5bb | g9 |
| 75 | bp | 0% | 0% | 0% | 0% | 0–5bb | g9 |
| 44 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g9 |
| 33 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g9 |
| 22 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g9 |
| 55 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g9 |
| AK | khnd | 1% | 0% | 0% | 0% | Pot is too big | g10 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
