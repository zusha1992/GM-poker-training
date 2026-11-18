# T87-9h-Qh@xx river (T♥ 8♥ 7♠ 9♥ Q♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: AA, KK, JJ, 77–22, AK–A2, KQ–K2, QJ, JT, J9, J7, 76, 75, 65, 64, 54, 43 | 89% | 89% | 87% | 73% |
| g2 | 25–50bb | Straights | JJ, AJ, KJ, QJ, JT–J7 | 67% | 66% | 59% | 36% |
| g3 | 0–5bb | Straights | 66, A6, K6, Q6, 96, 86, 76, 65, 64 | 55% | 44% | 33% | 9% |
| g4 | 0–5bb | Sets | QQ, TT–77 | 48% | 32% | 20% | 9% |
| g5 | 0–5bb | Overpairs | AA, KK | 32% | 15% | 2% | 7% |
| g6 | 0–5bb | Two pair | QT–Q7, T9–T7, 98, 97, 87 | 42% | 25% | 11% | 9% |
| g7 | 0–5bb | Top pair | AQ, KQ, Q5 | 34% | 16% | 1% | 9% |
| g8 | 0–5bb | Second pair | AT, KT | 31% | 14% | 0% | 6% |
| g9 | 0–5bb | Small pairs | 55–22, A9–A7, K9–K7, 75 | 18% | 8% | 0% | 1% |
| g10 | Pot is too big | Ace-high | AK, A5–A2 | 7% | 4% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| JJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| JT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AJ+fl | flush | 98% | 96% | 95% | 86% | 50–100bb | g1 |
| KJ+fl | flush | 95% | 95% | 95% | 83% | 50–100bb | g1 |
| 76+fl | flush | 95% | 93% | 91% | 77% | 50–100bb | g1 |
| AQ+fl | flush | 94% | 92% | 89% | 73% | 50–100bb | g1 |
| AT+fl | flush | 95% | 92% | 90% | 73% | 50–100bb | g1 |
| AA+fl | flush | 95% | 91% | 90% | 73% | 50–100bb | g1 |
| A8+fl | flush | 94% | 91% | 89% | 72% | 50–100bb | g1 |
| A9+fl | flush | 95% | 92% | 90% | 72% | 50–100bb | g1 |
| AK+fl | flush | 91% | 91% | 90% | 70% | 50–100bb | g1 |
| A3+fl | flush | 87% | 85% | 84% | 70% | 50–100bb | g1 |
| K2+fl | flush | 89% | 91% | 89% | 70% | 50–100bb | g1 |
| A5+fl | flush | 88% | 86% | 84% | 69% | 50–100bb | g1 |
| A4+fl | flush | 87% | 86% | 84% | 69% | 50–100bb | g1 |
| A2+fl | flush | 86% | 85% | 84% | 69% | 50–100bb | g1 |
| A6+fl | flush | 89% | 88% | 85% | 69% | 50–100bb | g1 |
| K3+fl | flush | 89% | 91% | 89% | 68% | 50–100bb | g1 |
| K4+fl | flush | 88% | 91% | 89% | 68% | 50–100bb | g1 |
| A7+fl | flush | 89% | 89% | 87% | 68% | 50–100bb | g1 |
| KK+fl | flush | 87% | 90% | 89% | 67% | 50–100bb | g1 |
| K8+fl | flush | 88% | 90% | 89% | 67% | 50–100bb | g1 |
| KQ+fl | flush | 87% | 90% | 88% | 66% | 50–100bb | g1 |
| K5+fl | flush | 88% | 92% | 89% | 66% | 50–100bb | g1 |
| 65+fl | flushlo | 83% | 83% | 79% | 66% | 50–100bb | g1 |
| KT+fl | flush | 89% | 91% | 88% | 66% | 50–100bb | g1 |
| K9+fl | flush | 88% | 90% | 88% | 66% | 50–100bb | g1 |
| K7+fl | flush | 86% | 87% | 86% | 66% | 50–100bb | g1 |
| 64+fl | flushlo | 82% | 82% | 79% | 66% | 50–100bb | g1 |
| 54+fl | flushlo | 80% | 79% | 75% | 66% | 50–100bb | g1 |
| 75+fl | flushlo | 84% | 85% | 83% | 65% | 50–100bb | g1 |
| 66+fl | flushlo | 82% | 80% | 77% | 65% | 50–100bb | g1 |
| 43+fl | flushlo | 78% | 80% | 75% | 65% | 50–100bb | g1 |
| 77+fl | flushlo | 84% | 84% | 81% | 65% | 50–100bb | g1 |
| K6+fl | flush | 85% | 87% | 83% | 65% | 50–100bb | g1 |
| 55+fl | flushlo | 79% | 78% | 75% | 63% | 50–100bb | g1 |
| 44+fl | flushlo | 76% | 78% | 74% | 63% | 50–100bb | g1 |
| 33+fl | flushlo | 76% | 78% | 74% | 63% | 50–100bb | g1 |
| 22+fl | flushlo | 75% | 77% | 73% | 63% | 50–100bb | g1 |
| JJ | straight | 68% | 67% | 60% | 31% | 25–50bb | g2 |
| AJ | straight | 66% | 65% | 57% | 30% | 25–50bb | g2 |
| J7 | straight | 67% | 63% | 57% | 32% | 25–50bb | g2 |
| J8 | straight | 66% | 64% | 57% | 32% | 25–50bb | g2 |
| JT | straight | 65% | 63% | 56% | 32% | 25–50bb | g2 |
| KJ | straight | 72% | 73% | 68% | 56% | 50–100bb | g2 |
| J9 | straight | 66% | 64% | 56% | 32% | 25–50bb | g2 |
| QJ | straight | 65% | 64% | 55% | 33% | 25–50bb | g2 |
| 66 | straight | 57% | 46% | 32% | 10% | 0–5bb | g3 |
| 64 | straight | 55% | 44% | 34% | 10% | 0–5bb | g3 |
| 65 | straight | 55% | 44% | 34% | 10% | 0–5bb | g3 |
| 96 | straight | 55% | 44% | 32% | 10% | 0–5bb | g3 |
| A6 | straight | 55% | 44% | 33% | 7% | 0–5bb | g3 |
| K6 | straight | 54% | 43% | 35% | 10% | 0–5bb | g3 |
| 86 | straight | 54% | 43% | 31% | 10% | 0–5bb | g3 |
| 76 | straight | 54% | 43% | 31% | 10% | 0–5bb | g3 |
| Q6 | straight | 54% | 43% | 31% | 10% | 0–5bb | g3 |
| 88 | twopair | 49% | 33% | 21% | 8% | 0–5bb | g4 |
| QQ | twopair | 48% | 31% | 18% | 10% | 0–5bb | g4 |
| 77 | twopair | 47% | 32% | 20% | 9% | 0–5bb | g4 |
| 99 | twopair | 47% | 31% | 20% | 9% | 0–5bb | g4 |
| TT | twopair | 47% | 32% | 22% | 8% | 0–5bb | g4 |
| KK | op | 32% | 13% | 2% | 10% | 0–5bb | g5 |
| AA | op | 31% | 17% | 2% | 3% | 0–5bb | g5 |
| QT | twopair | 46% | 30% | 16% | 9% | 0–5bb | g6 |
| Q9 | twopair | 44% | 29% | 14% | 10% | 0–5bb | g6 |
| Q7 | twopair | 43% | 26% | 11% | 9% | 0–5bb | g6 |
| Q8 | twopair | 43% | 27% | 14% | 9% | 0–5bb | g6 |
| T9 | twopair | 40% | 25% | 10% | 9% | 0–5bb | g6 |
| T7 | twopair | 40% | 20% | 7% | 9% | 0–5bb | g6 |
| T8 | twopair | 39% | 22% | 8% | 8% | 0–5bb | g6 |
| 98 | twopair | 38% | 21% | 5% | 8% | 0–5bb | g6 |
| 97 | twopair | 37% | 18% | 4% | 9% | 0–5bb | g6 |
| 87 | twopair | 36% | 17% | 3% | 9% | 0–5bb | g6 |
| KQ | tpgk | 35% | 15% | 1% | 10% | 0–5bb | g7 |
| Q5 | tpmk | 34% | 16% | 0% | 10% | 0–5bb | g7 |
| AQ | tpgk | 33% | 18% | 2% | 7% | 0–5bb | g7 |
| AT | mp | 31% | 14% | 0% | 5% | 0–5bb | g8 |
| KT | mp | 30% | 13% | 0% | 7% | 0–5bb | g8 |
| K9 | bp | 24% | 10% | 0% | 4% | 0–5bb | g9 |
| A9 | bp | 24% | 12% | 0% | 3% | 0–5bb | g9 |
| A8 | bp | 20% | 9% | 0% | 1% | 0–5bb | g9 |
| K8 | bp | 19% | 8% | 0% | 1% | 0–5bb | g9 |
| K7 | bp | 15% | 6% | 0% | 0% | 0–5bb | g9 |
| A7 | bp | 15% | 7% | 0% | 0% | 0–5bb | g9 |
| 75 | bp | 14% | 6% | 0% | 0% | 0–5bb | g9 |
| 55 | pp3 | 11% | 5% | 0% | 0% | 0–5bb | g9 |
| 44 | pp3 | 11% | 5% | 0% | 0% | 0–5bb | g9 |
| 33 | pp3 | 10% | 4% | 0% | 0% | 0–5bb | g9 |
| 22 | pp3 | 8% | 4% | 0% | 0% | 0–5bb | g9 |
| AK | khnd | 8% | 4% | 0% | 0% | Pot is too big | g10 |
| A2 | khnd | 7% | 3% | 0% | 0% | Pot is too big | g10 |
| A5 | khnd | 7% | 4% | 0% | 0% | Pot is too big | g10 |
| A4 | khnd | 7% | 4% | 0% | 0% | Pot is too big | g10 |
| A3 | khnd | 7% | 4% | 0% | 0% | Pot is too big | g10 |
