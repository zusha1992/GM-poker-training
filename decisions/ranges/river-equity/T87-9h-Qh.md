# T87-9h-Qh river (T♥ 8♥ 7♠ 9♥ Q♥): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes & straights | KJ · ♥ flushes: AA, KK, JJ, 77–22, AK–A2, KQ–K2, QJ, JT, J9, J7, 76, 75, 65, 64, 54, 43 | 86% | 88% | 87% | 74% |
| g2 | 25–50bb | Straights | JJ, AJ, QJ, JT–J7 | 64% | 66% | 63% | 40% |
| g3 | Pot is too big | Straights & sets | QQ, TT–66, A6, K6, Q6, 96, 86, 76, 65, 64 | 41% | 37% | 34% | 16% |
| g4 | Pot is too big | Overpairs | AA, KK | 8% | 3% | 0% | 5% |
| g5 | Pot is too big | Two pair | QT–Q7, T9–T7, 98, 97, 87 | 23% | 17% | 13% | 9% |
| g6 | Pot is too big | Top pair | AQ, KQ, Q5 | 10% | 4% | 0% | 7% |
| g7 | Pot is too big | Second pair | AT, KT | 8% | 3% | 0% | 5% |
| g8 | Pot is too big | Small pairs | 55–22, A9–A7, K9–K7, 75 | 3% | 1% | 0% | 1% |
| g9 | Pot is too big | Ace-high | AK, A5–A2 | 1% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| JJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| JT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AJ+fl | flush | 96% | 95% | 95% | 89% | 50–100bb | g1 |
| KJ+fl | flush | 93% | 95% | 94% | 85% | 50–100bb | g1 |
| 76+fl | flush | 92% | 90% | 91% | 80% | 50–100bb | g1 |
| AA+fl | flush | 91% | 90% | 90% | 78% | 50–100bb | g1 |
| A8+fl | flush | 90% | 90% | 90% | 78% | 50–100bb | g1 |
| A9+fl | flush | 90% | 90% | 89% | 78% | 50–100bb | g1 |
| AQ+fl | flush | 91% | 90% | 90% | 78% | 50–100bb | g1 |
| AT+fl | flush | 90% | 91% | 90% | 78% | 50–100bb | g1 |
| AK+fl | flush | 88% | 89% | 89% | 74% | 50–100bb | g1 |
| A2+fl | flush | 84% | 86% | 85% | 72% | 50–100bb | g1 |
| A6+fl | flush | 85% | 87% | 87% | 72% | 50–100bb | g1 |
| A7+fl | flush | 87% | 89% | 88% | 72% | 50–100bb | g1 |
| A5+fl | flush | 84% | 86% | 85% | 72% | 50–100bb | g1 |
| A4+fl | flush | 84% | 86% | 85% | 72% | 50–100bb | g1 |
| A3+fl | flush | 84% | 85% | 85% | 71% | 50–100bb | g1 |
| K2+fl | flush | 85% | 88% | 87% | 70% | 50–100bb | g1 |
| K5+fl | flush | 85% | 87% | 87% | 69% | 50–100bb | g1 |
| K4+fl | flush | 85% | 88% | 87% | 69% | 50–100bb | g1 |
| K8+fl | flush | 84% | 86% | 86% | 69% | 50–100bb | g1 |
| K9+fl | flush | 85% | 88% | 87% | 69% | 50–100bb | g1 |
| K3+fl | flush | 85% | 88% | 87% | 69% | 50–100bb | g1 |
| KQ+fl | flush | 85% | 88% | 87% | 69% | 50–100bb | g1 |
| KK+fl | flush | 85% | 88% | 87% | 69% | 50–100bb | g1 |
| KT+fl | flush | 84% | 88% | 87% | 69% | 50–100bb | g1 |
| K7+fl | flush | 83% | 87% | 87% | 68% | 50–100bb | g1 |
| K6+fl | flush | 81% | 86% | 85% | 68% | 50–100bb | g1 |
| 75+fl | flushlo | 82% | 87% | 86% | 68% | 50–100bb | g1 |
| 77+fl | flushlo | 81% | 87% | 86% | 67% | 50–100bb | g1 |
| 65+fl | flushlo | 79% | 84% | 83% | 66% | 50–100bb | g1 |
| 66+fl | flushlo | 78% | 82% | 82% | 65% | 50–100bb | g1 |
| 55+fl | flushlo | 76% | 80% | 80% | 65% | 50–100bb | g1 |
| 64+fl | flushlo | 79% | 84% | 83% | 65% | 50–100bb | g1 |
| 44+fl | flushlo | 75% | 80% | 79% | 65% | 50–100bb | g1 |
| 43+fl | flushlo | 76% | 80% | 79% | 64% | 50–100bb | g1 |
| 22+fl | flushlo | 75% | 79% | 79% | 64% | 50–100bb | g1 |
| 33+fl | flushlo | 76% | 79% | 79% | 64% | 50–100bb | g1 |
| 54+fl | flushlo | 76% | 81% | 79% | 64% | 50–100bb | g1 |
| KJ | straight | 74% | 78% | 76% | 59% | 50–100bb | g1 |
| JJ | straight | 67% | 69% | 67% | 42% | 25–50bb | g2 |
| AJ | straight | 65% | 66% | 63% | 39% | 25–50bb | g2 |
| QJ | straight | 64% | 66% | 63% | 40% | 25–50bb | g2 |
| J7 | straight | 63% | 65% | 63% | 39% | 25–50bb | g2 |
| JT | straight | 62% | 64% | 63% | 38% | 25–50bb | g2 |
| J9 | straight | 65% | 66% | 63% | 40% | 25–50bb | g2 |
| J8 | straight | 64% | 64% | 63% | 40% | 25–50bb | g2 |
| 66 | straight | 45% | 41% | 38% | 17% | Pot is too big | g3 |
| 65 | straight | 45% | 41% | 39% | 18% | Pot is too big | g3 |
| A6 | straight | 45% | 42% | 39% | 17% | Pot is too big | g3 |
| K6 | straight | 44% | 41% | 38% | 18% | Pot is too big | g3 |
| Q6 | straight | 44% | 40% | 37% | 17% | Pot is too big | g3 |
| 64 | straight | 44% | 42% | 39% | 18% | Pot is too big | g3 |
| 86 | straight | 43% | 40% | 38% | 18% | Pot is too big | g3 |
| 76 | straight | 42% | 40% | 37% | 17% | Pot is too big | g3 |
| 96 | straight | 42% | 38% | 36% | 17% | Pot is too big | g3 |
| 88 | twopair | 34% | 31% | 29% | 14% | Pot is too big | g3 |
| QQ | twopair | 33% | 28% | 26% | 13% | Pot is too big | g3 |
| 77 | twopair | 32% | 30% | 27% | 16% | Pot is too big | g3 |
| 99 | twopair | 31% | 27% | 25% | 14% | Pot is too big | g3 |
| TT | twopair | 29% | 24% | 21% | 9% | Pot is too big | g3 |
| KK | op | 9% | 3% | 0% | 6% | Pot is too big | g4 |
| AA | op | 8% | 3% | 0% | 4% | Pot is too big | g4 |
| QT | twopair | 30% | 24% | 22% | 10% | Pot is too big | g5 |
| Q8 | twopair | 26% | 21% | 17% | 10% | Pot is too big | g5 |
| Q9 | twopair | 26% | 21% | 17% | 10% | Pot is too big | g5 |
| Q7 | twopair | 26% | 20% | 17% | 11% | Pot is too big | g5 |
| T9 | twopair | 21% | 14% | 11% | 7% | Pot is too big | g5 |
| T8 | twopair | 19% | 12% | 8% | 7% | Pot is too big | g5 |
| T7 | twopair | 16% | 10% | 5% | 8% | Pot is too big | g5 |
| 98 | twopair | 15% | 7% | 3% | 6% | Pot is too big | g5 |
| 97 | twopair | 11% | 5% | 1% | 7% | Pot is too big | g5 |
| 87 | twopair | 11% | 5% | 0% | 7% | Pot is too big | g5 |
| Q5 | tpmk | 12% | 4% | 0% | 8% | Pot is too big | g6 |
| KQ | tpgk | 11% | 4% | 0% | 7% | Pot is too big | g6 |
| AQ | tpgk | 9% | 4% | 0% | 6% | Pot is too big | g6 |
| AT | mp | 9% | 3% | 0% | 5% | Pot is too big | g7 |
| KT | mp | 8% | 3% | 0% | 4% | Pot is too big | g7 |
| A9 | bp | 6% | 1% | 0% | 1% | Pot is too big | g8 |
| K9 | bp | 5% | 1% | 0% | 2% | Pot is too big | g8 |
| A8 | bp | 4% | 0% | 0% | 0% | Pot is too big | g8 |
| K8 | bp | 3% | 0% | 0% | 0% | Pot is too big | g8 |
| A7 | bp | 1% | 0% | 0% | 0% | Pot is too big | g8 |
| K7 | bp | 1% | 0% | 0% | 0% | Pot is too big | g8 |
| 75 | bp | 1% | 0% | 0% | 0% | Pot is too big | g8 |
| 33 | pp3 | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| 44 | pp3 | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| 22 | pp3 | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| 55 | pp3 | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A5 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| AK | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
