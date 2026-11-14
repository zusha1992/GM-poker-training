# T87-9h-Qh river (T♥ 8♥ 7♠ 9♥ Q♥): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: AA, KK, JJ, 77–22, AK–A2, KQ–K2, QJ, JT, J9, J7, 76, 75, 65, 64, 54, 43 | 87% | 89% | 88% | 75% |
| g2 | 25–50bb | Straights | JJ, AJ, KJ, QJ, JT–J7 | 66% | 67% | 66% | 43% |
| g3 | 0–5bb | Straights | 66, A6, K6, Q6, 96, 86, 76, 65, 64 | 44% | 41% | 38% | 17% |
| g4 | 0–5bb | Sets | QQ, TT–77 | 32% | 28% | 25% | 13% |
| g5 | 0–5bb | Overpairs | AA, KK | 9% | 3% | 0% | 6% |
| g6 | 0–5bb | Two pair | QT–Q7, T9–T7, 98, 97, 87 | 23% | 16% | 13% | 9% |
| g7 | 0–5bb | Top pair | AQ, KQ, Q5 | 11% | 4% | 0% | 7% |
| g8 | 0–5bb | Second pair | AT, KT | 9% | 3% | 0% | 4% |
| g9 | 0–5bb | Small pairs | 55–22, A9–A7, K9–K7, 75 | 3% | 0% | 0% | 1% |
| g10 | Pot is too big | Ace-high | AK, A5–A2 | 0% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| JJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| JT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AJ+fl | flush | 96% | 95% | 96% | 88% | 50–100bb | g1 |
| KJ+fl | flush | 94% | 94% | 94% | 85% | 50–100bb | g1 |
| 76+fl | flush | 91% | 91% | 91% | 80% | 50–100bb | g1 |
| AA+fl | flush | 91% | 91% | 90% | 78% | 50–100bb | g1 |
| AQ+fl | flush | 91% | 90% | 90% | 78% | 50–100bb | g1 |
| A8+fl | flush | 90% | 89% | 89% | 78% | 50–100bb | g1 |
| A9+fl | flush | 90% | 89% | 90% | 77% | 50–100bb | g1 |
| AT+fl | flush | 90% | 90% | 89% | 77% | 50–100bb | g1 |
| AK+fl | flush | 89% | 89% | 89% | 73% | 50–100bb | g1 |
| A6+fl | flush | 85% | 87% | 87% | 73% | 50–100bb | g1 |
| A2+fl | flush | 84% | 86% | 86% | 72% | 50–100bb | g1 |
| A7+fl | flush | 87% | 89% | 88% | 72% | 50–100bb | g1 |
| A3+fl | flush | 84% | 86% | 85% | 71% | 50–100bb | g1 |
| A5+fl | flush | 84% | 86% | 86% | 71% | 50–100bb | g1 |
| A4+fl | flush | 84% | 86% | 85% | 71% | 50–100bb | g1 |
| K3+fl | flush | 85% | 89% | 87% | 70% | 50–100bb | g1 |
| K4+fl | flush | 85% | 87% | 87% | 70% | 50–100bb | g1 |
| K2+fl | flush | 86% | 88% | 87% | 70% | 50–100bb | g1 |
| K5+fl | flush | 85% | 88% | 86% | 70% | 50–100bb | g1 |
| K9+fl | flush | 85% | 87% | 87% | 69% | 50–100bb | g1 |
| K8+fl | flush | 85% | 87% | 86% | 69% | 50–100bb | g1 |
| KK+fl | flush | 85% | 88% | 87% | 69% | 50–100bb | g1 |
| KQ+fl | flush | 85% | 87% | 87% | 69% | 50–100bb | g1 |
| KT+fl | flush | 85% | 87% | 87% | 68% | 50–100bb | g1 |
| K6+fl | flush | 82% | 86% | 85% | 68% | 50–100bb | g1 |
| K7+fl | flush | 84% | 87% | 87% | 68% | 50–100bb | g1 |
| 75+fl | flushlo | 84% | 87% | 86% | 67% | 50–100bb | g1 |
| 77+fl | flushlo | 82% | 86% | 86% | 66% | 50–100bb | g1 |
| 65+fl | flushlo | 80% | 84% | 84% | 66% | 50–100bb | g1 |
| 64+fl | flushlo | 80% | 84% | 83% | 66% | 50–100bb | g1 |
| 66+fl | flushlo | 79% | 83% | 82% | 65% | 50–100bb | g1 |
| 54+fl | flushlo | 77% | 80% | 80% | 65% | 50–100bb | g1 |
| 55+fl | flushlo | 75% | 80% | 78% | 65% | 50–100bb | g1 |
| 44+fl | flushlo | 75% | 81% | 80% | 64% | 50–100bb | g1 |
| 33+fl | flushlo | 75% | 80% | 79% | 64% | 50–100bb | g1 |
| 22+fl | flushlo | 75% | 80% | 80% | 63% | 50–100bb | g1 |
| 43+fl | flushlo | 76% | 81% | 80% | 62% | 50–100bb | g1 |
| JJ | straight | 68% | 70% | 68% | 42% | 25–50bb | g2 |
| AJ | straight | 65% | 66% | 64% | 40% | 25–50bb | g2 |
| J8 | straight | 64% | 64% | 63% | 40% | 25–50bb | g2 |
| J7 | straight | 63% | 64% | 63% | 40% | 25–50bb | g2 |
| QJ | straight | 64% | 64% | 63% | 39% | 25–50bb | g2 |
| J9 | straight | 63% | 64% | 62% | 41% | 25–50bb | g2 |
| JT | straight | 63% | 63% | 61% | 37% | 25–50bb | g2 |
| KJ | straight | 72% | 78% | 77% | 58% | 50–100bb | g2 |
| 66 | straight | 45% | 41% | 37% | 17% | 0–5bb | g3 |
| 65 | straight | 45% | 41% | 38% | 17% | 0–5bb | g3 |
| A6 | straight | 45% | 42% | 38% | 17% | 0–5bb | g3 |
| K6 | straight | 44% | 41% | 40% | 17% | 0–5bb | g3 |
| 64 | straight | 44% | 41% | 39% | 19% | 0–5bb | g3 |
| 86 | straight | 44% | 40% | 38% | 18% | 0–5bb | g3 |
| 96 | straight | 43% | 38% | 37% | 16% | 0–5bb | g3 |
| Q6 | straight | 43% | 40% | 37% | 17% | 0–5bb | g3 |
| 76 | straight | 42% | 39% | 37% | 17% | 0–5bb | g3 |
| 88 | twopair | 34% | 31% | 28% | 15% | 0–5bb | g4 |
| QQ | twopair | 33% | 29% | 25% | 14% | 0–5bb | g4 |
| 77 | twopair | 33% | 31% | 27% | 15% | 0–5bb | g4 |
| 99 | twopair | 32% | 27% | 25% | 14% | 0–5bb | g4 |
| TT | twopair | 29% | 23% | 21% | 10% | 0–5bb | g4 |
| KK | op | 10% | 3% | 0% | 7% | 0–5bb | g5 |
| AA | op | 7% | 3% | 0% | 4% | 0–5bb | g5 |
| QT | twopair | 30% | 24% | 22% | 11% | 0–5bb | g6 |
| Q8 | twopair | 26% | 20% | 16% | 10% | 0–5bb | g6 |
| Q9 | twopair | 26% | 20% | 17% | 10% | 0–5bb | g6 |
| Q7 | twopair | 26% | 19% | 15% | 10% | 0–5bb | g6 |
| T9 | twopair | 21% | 14% | 11% | 8% | 0–5bb | g6 |
| T8 | twopair | 20% | 11% | 8% | 6% | 0–5bb | g6 |
| T7 | twopair | 16% | 9% | 6% | 7% | 0–5bb | g6 |
| 98 | twopair | 13% | 6% | 3% | 6% | 0–5bb | g6 |
| 97 | twopair | 12% | 6% | 1% | 7% | 0–5bb | g6 |
| 87 | twopair | 11% | 4% | 0% | 7% | 0–5bb | g6 |
| Q5 | tpmk | 12% | 4% | 0% | 8% | 0–5bb | g7 |
| KQ | tpgk | 11% | 4% | 0% | 8% | 0–5bb | g7 |
| AQ | tpgk | 10% | 3% | 0% | 6% | 0–5bb | g7 |
| AT | mp | 9% | 3% | 0% | 4% | 0–5bb | g8 |
| KT | mp | 9% | 3% | 0% | 4% | 0–5bb | g8 |
| A9 | bp | 6% | 1% | 0% | 2% | 0–5bb | g9 |
| K9 | bp | 5% | 1% | 0% | 2% | 0–5bb | g9 |
| A8 | bp | 3% | 0% | 0% | 0% | 0–5bb | g9 |
| K8 | bp | 3% | 0% | 0% | 0% | 0–5bb | g9 |
| A7 | bp | 1% | 0% | 0% | 0% | 0–5bb | g9 |
| K7 | bp | 1% | 0% | 0% | 0% | 0–5bb | g9 |
| 75 | bp | 1% | 0% | 0% | 0% | 0–5bb | g9 |
| 22 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g9 |
| 44 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g9 |
| 33 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g9 |
| 55 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g9 |
| AK | khnd | 1% | 0% | 0% | 0% | Pot is too big | g10 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
