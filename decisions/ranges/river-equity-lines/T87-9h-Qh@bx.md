# T87-9h-Qh@bx river (T♥ 8♥ 7♠ 9♥ Q♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: AA, KK, JJ, 77–22, AK–A2, KQ–K2, QJ, JT, J9, J7, 76, 75, 65, 64, 54, 43 | 89% | 90% | 88% | 72% |
| g2 | 25–50bb | Straights | JJ, AJ, KJ, QJ, JT–J7 | 72% | 70% | 64% | 42% |
| g3 | 5–15bb | Straights | 66, A6, K6, Q6, 86, 76, 65, 64 | 61% | 52% | 41% | 21% |
| g4 | 0–5bb | Straights | 96 | 61% | 49% | 39% | 22% |
| g5 | 0–5bb | Sets | QQ, TT–77 | 53% | 40% | 27% | 21% |
| g6 | 0–5bb | Overpairs | AA, KK | 32% | 14% | 1% | 17% |
| g7 | 0–5bb | Two pair | QT–Q7, T9–T7, 98, 97, 87 | 46% | 29% | 14% | 21% |
| g8 | 0–5bb | Top pair | AQ, KQ, Q5 | 37% | 17% | 1% | 21% |
| g9 | 0–5bb | Second pair | AT, KT | 30% | 14% | 0% | 15% |
| g10 | 0–5bb | Small pairs | 55–22, A9–A7, K9–K7, 75 | 11% | 4% | 0% | 3% |
| g11 | Pot is too big | Ace-high | AK, A5–A2 | 3% | 1% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| JJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| JT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AJ+fl | flush | 98% | 97% | 96% | 88% | 50–100bb | g1 |
| 76+fl | flush | 95% | 94% | 92% | 83% | 50–100bb | g1 |
| KJ+fl | flush | 95% | 96% | 95% | 83% | 50–100bb | g1 |
| AQ+fl | flush | 95% | 93% | 92% | 78% | 50–100bb | g1 |
| AT+fl | flush | 95% | 94% | 91% | 76% | 50–100bb | g1 |
| A9+fl | flush | 95% | 93% | 92% | 76% | 50–100bb | g1 |
| AA+fl | flush | 95% | 93% | 92% | 75% | 50–100bb | g1 |
| A8+fl | flush | 94% | 92% | 91% | 75% | 50–100bb | g1 |
| AK+fl | flush | 91% | 92% | 90% | 69% | 50–100bb | g1 |
| A5+fl | flush | 87% | 87% | 84% | 69% | 50–100bb | g1 |
| A2+fl | flush | 87% | 87% | 85% | 68% | 50–100bb | g1 |
| A7+fl | flush | 88% | 90% | 87% | 68% | 50–100bb | g1 |
| A3+fl | flush | 87% | 87% | 84% | 68% | 50–100bb | g1 |
| A6+fl | flush | 89% | 88% | 86% | 68% | 50–100bb | g1 |
| A4+fl | flush | 88% | 88% | 85% | 67% | 50–100bb | g1 |
| K2+fl | flush | 88% | 91% | 88% | 64% | 50–100bb | g1 |
| K8+fl | flush | 87% | 90% | 88% | 63% | 50–100bb | g1 |
| K5+fl | flush | 87% | 91% | 89% | 63% | 50–100bb | g1 |
| 75+fl | flushlo | 83% | 87% | 84% | 63% | 50–100bb | g1 |
| KQ+fl | flush | 87% | 91% | 89% | 63% | 50–100bb | g1 |
| K4+fl | flush | 87% | 91% | 89% | 63% | 50–100bb | g1 |
| KT+fl | flush | 86% | 91% | 88% | 62% | 50–100bb | g1 |
| K3+fl | flush | 88% | 91% | 89% | 62% | 50–100bb | g1 |
| 64+fl | flushlo | 79% | 83% | 80% | 62% | 50–100bb | g1 |
| K6+fl | flush | 83% | 87% | 84% | 62% | 50–100bb | g1 |
| 77+fl | flushlo | 84% | 85% | 83% | 62% | 50–100bb | g1 |
| 65+fl | flushlo | 80% | 82% | 78% | 62% | 50–100bb | g1 |
| K7+fl | flush | 85% | 88% | 87% | 62% | 50–100bb | g1 |
| K9+fl | flush | 87% | 90% | 89% | 61% | 50–100bb | g1 |
| 22+fl | flushlo | 77% | 79% | 75% | 61% | 50–100bb | g1 |
| 43+fl | flushlo | 79% | 80% | 76% | 61% | 50–100bb | g1 |
| KK+fl | flush | 87% | 91% | 89% | 61% | 50–100bb | g1 |
| 66+fl | flushlo | 79% | 82% | 77% | 61% | 50–100bb | g1 |
| 33+fl | flushlo | 77% | 81% | 75% | 61% | 50–100bb | g1 |
| 55+fl | flushlo | 78% | 79% | 74% | 60% | 50–100bb | g1 |
| 44+fl | flushlo | 78% | 79% | 75% | 60% | 50–100bb | g1 |
| 54+fl | flushlo | 80% | 81% | 77% | 60% | 50–100bb | g1 |
| JJ | straight | 74% | 72% | 66% | 41% | 25–50bb | g2 |
| AJ | straight | 72% | 70% | 63% | 36% | 25–50bb | g2 |
| J9 | straight | 71% | 68% | 62% | 39% | 25–50bb | g2 |
| J7 | straight | 70% | 68% | 61% | 40% | 25–50bb | g2 |
| J8 | straight | 71% | 69% | 61% | 39% | 25–50bb | g2 |
| JT | straight | 70% | 68% | 60% | 40% | 25–50bb | g2 |
| QJ | straight | 72% | 68% | 60% | 41% | 25–50bb | g2 |
| KJ | straight | 76% | 77% | 73% | 56% | 50–100bb | g2 |
| 64 | straight | 62% | 53% | 41% | 23% | 5–15bb | g3 |
| A6 | straight | 60% | 53% | 43% | 17% | 5–15bb | g3 |
| 66 | straight | 62% | 52% | 42% | 22% | 5–15bb | g3 |
| Q6 | straight | 61% | 51% | 39% | 23% | 5–15bb | g3 |
| 65 | straight | 60% | 51% | 41% | 23% | 5–15bb | g3 |
| K6 | straight | 60% | 51% | 42% | 23% | 5–15bb | g3 |
| 86 | straight | 60% | 50% | 40% | 22% | 5–15bb | g3 |
| 76 | straight | 61% | 50% | 38% | 22% | 5–15bb | g3 |
| 96 | straight | 61% | 49% | 39% | 21% | 0–5bb | g4 |
| QQ | twopair | 55% | 40% | 26% | 25% | 0–5bb | g5 |
| 99 | twopair | 54% | 41% | 28% | 19% | 0–5bb | g5 |
| TT | twopair | 53% | 37% | 26% | 20% | 0–5bb | g5 |
| 77 | twopair | 53% | 40% | 28% | 21% | 0–5bb | g5 |
| 88 | twopair | 52% | 41% | 29% | 19% | 0–5bb | g5 |
| KK | op | 32% | 12% | 1% | 23% | 0–5bb | g6 |
| AA | op | 31% | 17% | 1% | 10% | 0–5bb | g6 |
| QT | twopair | 51% | 36% | 23% | 21% | 0–5bb | g7 |
| Q8 | twopair | 50% | 33% | 18% | 22% | 0–5bb | g7 |
| Q9 | twopair | 50% | 33% | 19% | 21% | 0–5bb | g7 |
| Q7 | twopair | 47% | 32% | 15% | 22% | 0–5bb | g7 |
| T9 | twopair | 43% | 24% | 11% | 19% | 0–5bb | g7 |
| T8 | twopair | 40% | 23% | 8% | 20% | 0–5bb | g7 |
| T7 | twopair | 40% | 22% | 6% | 20% | 0–5bb | g7 |
| 97 | twopair | 39% | 19% | 3% | 20% | 0–5bb | g7 |
| 98 | twopair | 38% | 20% | 5% | 19% | 0–5bb | g7 |
| 87 | twopair | 37% | 19% | 2% | 21% | 0–5bb | g7 |
| KQ | tpgk | 38% | 15% | 1% | 23% | 0–5bb | g8 |
| Q5 | tpmk | 36% | 18% | 0% | 23% | 0–5bb | g8 |
| AQ | tpgk | 36% | 18% | 1% | 18% | 0–5bb | g8 |
| AT | mp | 31% | 16% | 0% | 14% | 0–5bb | g9 |
| KT | mp | 29% | 12% | 0% | 15% | 0–5bb | g9 |
| A9 | bp | 22% | 8% | 0% | 7% | 0–5bb | g10 |
| K9 | bp | 19% | 6% | 0% | 8% | 0–5bb | g10 |
| A8 | bp | 15% | 4% | 0% | 2% | 0–5bb | g10 |
| K8 | bp | 11% | 3% | 0% | 1% | 0–5bb | g10 |
| A7 | bp | 6% | 2% | 0% | 0% | 0–5bb | g10 |
| K7 | bp | 5% | 2% | 0% | 0% | 0–5bb | g10 |
| 75 | bp | 4% | 2% | 0% | 0% | 0–5bb | g10 |
| 44 | pp3 | 3% | 1% | 0% | 0% | 0–5bb | g10 |
| 55 | pp3 | 3% | 1% | 0% | 0% | 0–5bb | g10 |
| 33 | pp3 | 3% | 1% | 0% | 0% | 0–5bb | g10 |
| 22 | pp3 | 3% | 1% | 0% | 0% | 0–5bb | g10 |
| A5 | khnd | 3% | 1% | 0% | 0% | Pot is too big | g11 |
| AK | khnd | 3% | 1% | 0% | 0% | Pot is too big | g11 |
| A2 | khnd | 3% | 1% | 0% | 0% | Pot is too big | g11 |
| A4 | khnd | 3% | 1% | 0% | 0% | Pot is too big | g11 |
| A3 | khnd | 3% | 1% | 0% | 0% | Pot is too big | g11 |
