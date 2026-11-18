# T87-9h-Qh@xx river (T♥ 8♥ 7♠ 9♥ Q♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: AA, KK, JJ, 77–22, AK–A2, KQ–K2, QJ, JT, J9, J7, 76, 75, 65, 64, 54, 43 | 89% | 89% | 87% | 72% |
| g2 | 25–50bb | K-high straights | KJ | 70% | 73% | 67% | 56% |
| g3 | 25–50bb | Q-high straights | JJ, AJ, QJ, JT–J7 | 67% | 64% | 57% | 32% |
| g4 | 0–5bb | T-high straights | 66, A6, K6, Q6, 96, 86, 76, 65, 64 | 55% | 44% | 33% | 9% |
| g5 | 0–5bb | Sets | QQ, TT–77 | 47% | 32% | 20% | 9% |
| g6 | 0–5bb | Overpairs | AA, KK | 32% | 14% | 2% | 7% |
| g7 | 0–5bb | Two pair | QT–Q7, T9–T7, 98, 97, 87 | 42% | 26% | 11% | 9% |
| g8 | 0–5bb | Top pair | AQ, KQ, Q5 | 35% | 16% | 1% | 9% |
| g9 | 0–5bb | Second pair | AT, KT | 30% | 14% | 0% | 6% |
| g10 | 0–5bb | Small pairs | 55–22, A9–A7, K9–K7, 75 | 17% | 8% | 0% | 1% |
| g11 | Pot is too big | Ace-high | AK, A5–A2 | 7% | 4% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| JJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| JT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AJ+fl | flush | 97% | 96% | 95% | 85% | 50–100bb | g1 |
| KJ+fl | flush | 95% | 95% | 95% | 82% | 50–100bb | g1 |
| 76+fl | flush | 95% | 92% | 91% | 76% | 50–100bb | g1 |
| AQ+fl | flush | 94% | 91% | 90% | 74% | 50–100bb | g1 |
| A9+fl | flush | 94% | 92% | 91% | 73% | 50–100bb | g1 |
| AT+fl | flush | 95% | 92% | 90% | 73% | 50–100bb | g1 |
| A8+fl | flush | 95% | 92% | 90% | 73% | 50–100bb | g1 |
| AA+fl | flush | 94% | 92% | 90% | 72% | 50–100bb | g1 |
| A4+fl | flush | 87% | 86% | 83% | 70% | 50–100bb | g1 |
| AK+fl | flush | 92% | 91% | 89% | 69% | 50–100bb | g1 |
| A6+fl | flush | 89% | 88% | 86% | 69% | 50–100bb | g1 |
| A3+fl | flush | 87% | 86% | 83% | 68% | 50–100bb | g1 |
| A2+fl | flush | 86% | 86% | 83% | 68% | 50–100bb | g1 |
| A5+fl | flush | 88% | 86% | 84% | 68% | 50–100bb | g1 |
| K5+fl | flush | 88% | 91% | 88% | 68% | 50–100bb | g1 |
| K2+fl | flush | 89% | 91% | 89% | 68% | 50–100bb | g1 |
| KT+fl | flush | 88% | 90% | 89% | 68% | 50–100bb | g1 |
| K3+fl | flush | 89% | 90% | 90% | 67% | 50–100bb | g1 |
| A7+fl | flush | 89% | 89% | 86% | 67% | 50–100bb | g1 |
| K4+fl | flush | 88% | 91% | 89% | 67% | 50–100bb | g1 |
| KQ+fl | flush | 88% | 90% | 89% | 67% | 50–100bb | g1 |
| K8+fl | flush | 88% | 90% | 88% | 66% | 50–100bb | g1 |
| K9+fl | flush | 88% | 90% | 88% | 66% | 50–100bb | g1 |
| KK+fl | flush | 88% | 91% | 88% | 66% | 50–100bb | g1 |
| K7+fl | flush | 86% | 88% | 85% | 66% | 50–100bb | g1 |
| 75+fl | flushlo | 85% | 86% | 83% | 66% | 50–100bb | g1 |
| 64+fl | flushlo | 82% | 82% | 79% | 66% | 50–100bb | g1 |
| 54+fl | flushlo | 81% | 80% | 76% | 66% | 50–100bb | g1 |
| 65+fl | flushlo | 82% | 83% | 80% | 65% | 50–100bb | g1 |
| K6+fl | flush | 85% | 87% | 83% | 65% | 50–100bb | g1 |
| 43+fl | flushlo | 79% | 79% | 75% | 65% | 50–100bb | g1 |
| 22+fl | flushlo | 74% | 77% | 73% | 65% | 50–100bb | g1 |
| 33+fl | flushlo | 77% | 78% | 73% | 65% | 50–100bb | g1 |
| 66+fl | flushlo | 81% | 82% | 78% | 65% | 50–100bb | g1 |
| 55+fl | flushlo | 79% | 78% | 74% | 64% | 50–100bb | g1 |
| 77+fl | flushlo | 83% | 85% | 81% | 64% | 50–100bb | g1 |
| 44+fl | flushlo | 78% | 78% | 74% | 63% | 50–100bb | g1 |
| KJ | straight | 70% | 72% | 67% | 56% | 50–100bb | g2 |
| JJ | straight | 68% | 67% | 59% | 30% | 25–50bb | g3 |
| AJ | straight | 67% | 64% | 57% | 30% | 25–50bb | g3 |
| J9 | straight | 67% | 62% | 57% | 32% | 25–50bb | g3 |
| J7 | straight | 67% | 64% | 56% | 32% | 25–50bb | g3 |
| JT | straight | 66% | 64% | 56% | 33% | 25–50bb | g3 |
| J8 | straight | 66% | 64% | 56% | 32% | 25–50bb | g3 |
| QJ | straight | 66% | 63% | 55% | 33% | 25–50bb | g3 |
| 66 | straight | 56% | 46% | 32% | 9% | 0–5bb | g4 |
| Q6 | straight | 55% | 43% | 31% | 10% | 0–5bb | g4 |
| 64 | straight | 55% | 45% | 34% | 10% | 0–5bb | g4 |
| A6 | straight | 55% | 44% | 34% | 8% | 0–5bb | g4 |
| 65 | straight | 55% | 44% | 33% | 10% | 0–5bb | g4 |
| 86 | straight | 55% | 44% | 32% | 10% | 0–5bb | g4 |
| 96 | straight | 54% | 44% | 32% | 10% | 0–5bb | g4 |
| K6 | straight | 54% | 43% | 33% | 10% | 0–5bb | g4 |
| 76 | straight | 54% | 43% | 31% | 10% | 0–5bb | g4 |
| TT | twopair | 49% | 32% | 20% | 9% | 0–5bb | g5 |
| 88 | twopair | 47% | 33% | 21% | 8% | 0–5bb | g5 |
| QQ | twopair | 47% | 33% | 18% | 10% | 0–5bb | g5 |
| 77 | twopair | 47% | 33% | 20% | 9% | 0–5bb | g5 |
| 99 | twopair | 46% | 32% | 21% | 9% | 0–5bb | g5 |
| KK | op | 33% | 12% | 2% | 10% | 0–5bb | g6 |
| AA | op | 31% | 16% | 2% | 3% | 0–5bb | g6 |
| QT | twopair | 47% | 31% | 17% | 10% | 0–5bb | g7 |
| Q8 | twopair | 44% | 27% | 13% | 9% | 0–5bb | g7 |
| Q9 | twopair | 44% | 29% | 14% | 9% | 0–5bb | g7 |
| Q7 | twopair | 42% | 25% | 11% | 9% | 0–5bb | g7 |
| T9 | twopair | 41% | 24% | 9% | 9% | 0–5bb | g7 |
| T8 | twopair | 40% | 22% | 8% | 8% | 0–5bb | g7 |
| T7 | twopair | 39% | 21% | 7% | 9% | 0–5bb | g7 |
| 98 | twopair | 38% | 20% | 5% | 9% | 0–5bb | g7 |
| 87 | twopair | 37% | 18% | 3% | 8% | 0–5bb | g7 |
| 97 | twopair | 36% | 19% | 4% | 9% | 0–5bb | g7 |
| KQ | tpgk | 36% | 15% | 1% | 10% | 0–5bb | g8 |
| Q5 | tpmk | 35% | 16% | 0% | 10% | 0–5bb | g8 |
| AQ | tpgk | 34% | 17% | 2% | 7% | 0–5bb | g8 |
| KT | mp | 30% | 13% | 0% | 7% | 0–5bb | g9 |
| AT | mp | 30% | 15% | 0% | 5% | 0–5bb | g9 |
| K9 | bp | 24% | 10% | 0% | 4% | 0–5bb | g10 |
| A9 | bp | 24% | 12% | 0% | 3% | 0–5bb | g10 |
| A8 | bp | 20% | 9% | 0% | 1% | 0–5bb | g10 |
| K8 | bp | 19% | 8% | 0% | 1% | 0–5bb | g10 |
| A7 | bp | 15% | 7% | 0% | 0% | 0–5bb | g10 |
| K7 | bp | 14% | 6% | 0% | 0% | 0–5bb | g10 |
| 75 | bp | 13% | 6% | 0% | 0% | 0–5bb | g10 |
| 55 | pp3 | 11% | 5% | 0% | 0% | 0–5bb | g10 |
| 44 | pp3 | 10% | 5% | 0% | 0% | 0–5bb | g10 |
| 33 | pp3 | 9% | 5% | 0% | 0% | 0–5bb | g10 |
| 22 | pp3 | 8% | 4% | 0% | 0% | 0–5bb | g10 |
| AK | khnd | 9% | 3% | 0% | 0% | Pot is too big | g11 |
| A4 | khnd | 7% | 4% | 0% | 0% | Pot is too big | g11 |
| A3 | khnd | 7% | 4% | 0% | 0% | Pot is too big | g11 |
| A2 | khnd | 7% | 4% | 0% | 0% | Pot is too big | g11 |
| A5 | khnd | 7% | 4% | 0% | 0% | Pot is too big | g11 |
