# T87-9h-Qh@bx river (T♥ 8♥ 7♠ 9♥ Q♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: AA, KK, JJ, 77–22, AK–A2, KQ–K2, QJ, JT, J9, J7, 76, 75, 65, 64, 54, 43 | 89% | 90% | 88% | 72% |
| g2 | 25–50bb | K-high straights | KJ | 76% | 77% | 73% | 57% |
| g3 | 25–50bb | Q-high straights | JJ, AJ, QJ, JT–J7 | 72% | 69% | 62% | 39% |
| g4 | 5–15bb | T-high straights | 66, A6, K6, Q6, 96, 86, 65, 64 | 61% | 51% | 41% | 21% |
| g5 | 0–5bb | T-high straights | 76 | 60% | 49% | 40% | 22% |
| g6 | 0–5bb | Sets | QQ, TT–77 | 53% | 40% | 27% | 21% |
| g7 | 0–5bb | Overpairs | AA, KK | 32% | 15% | 1% | 17% |
| g8 | 0–5bb | Two pair | QT–Q7, T9–T7, 98, 97, 87 | 46% | 29% | 14% | 21% |
| g9 | 0–5bb | Top pair | AQ, KQ, Q5 | 36% | 17% | 1% | 21% |
| g10 | 0–5bb | Second pair | AT, KT | 31% | 14% | 0% | 15% |
| g11 | 0–5bb | Small pairs | 55–22, A9–A7, K9–K7, 75 | 11% | 4% | 0% | 3% |
| g12 | Pot is too big | Ace-high | AK, A5–A2 | 3% | 1% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| JJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| JT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AJ+fl | flush | 98% | 97% | 96% | 89% | 50–100bb | g1 |
| 76+fl | flush | 95% | 94% | 92% | 83% | 50–100bb | g1 |
| KJ+fl | flush | 94% | 96% | 94% | 83% | 50–100bb | g1 |
| AT+fl | flush | 95% | 93% | 92% | 77% | 50–100bb | g1 |
| AQ+fl | flush | 95% | 93% | 91% | 77% | 50–100bb | g1 |
| A8+fl | flush | 94% | 93% | 91% | 77% | 50–100bb | g1 |
| A9+fl | flush | 94% | 93% | 91% | 76% | 50–100bb | g1 |
| AA+fl | flush | 95% | 94% | 93% | 75% | 50–100bb | g1 |
| A6+fl | flush | 88% | 88% | 86% | 69% | 50–100bb | g1 |
| A2+fl | flush | 87% | 87% | 84% | 69% | 50–100bb | g1 |
| AK+fl | flush | 92% | 92% | 91% | 68% | 50–100bb | g1 |
| A5+fl | flush | 88% | 88% | 85% | 68% | 50–100bb | g1 |
| A4+fl | flush | 87% | 87% | 85% | 68% | 50–100bb | g1 |
| A3+fl | flush | 87% | 87% | 84% | 68% | 50–100bb | g1 |
| A7+fl | flush | 89% | 90% | 88% | 68% | 50–100bb | g1 |
| K3+fl | flush | 87% | 91% | 89% | 64% | 50–100bb | g1 |
| KT+fl | flush | 87% | 90% | 89% | 63% | 50–100bb | g1 |
| K8+fl | flush | 86% | 90% | 87% | 63% | 50–100bb | g1 |
| K4+fl | flush | 87% | 90% | 89% | 63% | 50–100bb | g1 |
| K5+fl | flush | 86% | 91% | 88% | 63% | 50–100bb | g1 |
| 75+fl | flushlo | 84% | 85% | 85% | 62% | 50–100bb | g1 |
| KQ+fl | flush | 88% | 91% | 88% | 62% | 50–100bb | g1 |
| K7+fl | flush | 85% | 88% | 86% | 62% | 50–100bb | g1 |
| K9+fl | flush | 87% | 91% | 88% | 62% | 50–100bb | g1 |
| 64+fl | flushlo | 81% | 82% | 80% | 62% | 50–100bb | g1 |
| K2+fl | flush | 87% | 91% | 89% | 62% | 50–100bb | g1 |
| KK+fl | flush | 87% | 91% | 89% | 62% | 50–100bb | g1 |
| 77+fl | flushlo | 84% | 86% | 83% | 62% | 50–100bb | g1 |
| 65+fl | flushlo | 81% | 82% | 79% | 62% | 50–100bb | g1 |
| K6+fl | flush | 83% | 87% | 84% | 62% | 50–100bb | g1 |
| 66+fl | flushlo | 79% | 82% | 78% | 61% | 50–100bb | g1 |
| 54+fl | flushlo | 79% | 80% | 77% | 61% | 50–100bb | g1 |
| 33+fl | flushlo | 77% | 79% | 74% | 61% | 50–100bb | g1 |
| 22+fl | flushlo | 78% | 78% | 75% | 61% | 50–100bb | g1 |
| 55+fl | flushlo | 79% | 79% | 76% | 60% | 50–100bb | g1 |
| 44+fl | flushlo | 78% | 79% | 76% | 60% | 50–100bb | g1 |
| 43+fl | flushlo | 79% | 80% | 76% | 60% | 50–100bb | g1 |
| KJ | straight | 76% | 77% | 73% | 57% | 50–100bb | g2 |
| JJ | straight | 75% | 72% | 66% | 42% | 25–50bb | g3 |
| AJ | straight | 72% | 70% | 63% | 35% | 25–50bb | g3 |
| J9 | straight | 71% | 68% | 62% | 40% | 25–50bb | g3 |
| JT | straight | 71% | 68% | 62% | 41% | 25–50bb | g3 |
| J7 | straight | 71% | 69% | 62% | 39% | 25–50bb | g3 |
| QJ | straight | 71% | 69% | 61% | 41% | 25–50bb | g3 |
| J8 | straight | 70% | 69% | 61% | 40% | 25–50bb | g3 |
| A6 | straight | 60% | 52% | 42% | 18% | 5–15bb | g4 |
| 66 | straight | 63% | 52% | 41% | 22% | 5–15bb | g4 |
| 64 | straight | 61% | 51% | 40% | 23% | 5–15bb | g4 |
| 65 | straight | 61% | 51% | 41% | 23% | 5–15bb | g4 |
| 86 | straight | 59% | 51% | 40% | 21% | 5–15bb | g4 |
| K6 | straight | 60% | 51% | 42% | 23% | 5–15bb | g4 |
| 96 | straight | 60% | 51% | 39% | 21% | 5–15bb | g4 |
| Q6 | straight | 61% | 50% | 39% | 23% | 5–15bb | g4 |
| 76 | straight | 60% | 49% | 40% | 22% | 0–5bb | g5 |
| QQ | twopair | 54% | 40% | 25% | 24% | 0–5bb | g6 |
| 99 | twopair | 54% | 39% | 28% | 20% | 0–5bb | g6 |
| TT | twopair | 53% | 37% | 26% | 20% | 0–5bb | g6 |
| 77 | twopair | 52% | 40% | 28% | 22% | 0–5bb | g6 |
| 88 | twopair | 52% | 42% | 29% | 20% | 0–5bb | g6 |
| KK | op | 33% | 12% | 1% | 23% | 0–5bb | g7 |
| AA | op | 31% | 17% | 1% | 10% | 0–5bb | g7 |
| QT | twopair | 51% | 36% | 23% | 21% | 0–5bb | g8 |
| Q9 | twopair | 49% | 34% | 19% | 21% | 0–5bb | g8 |
| Q8 | twopair | 48% | 33% | 18% | 21% | 0–5bb | g8 |
| Q7 | twopair | 48% | 31% | 16% | 23% | 0–5bb | g8 |
| T9 | twopair | 44% | 26% | 11% | 19% | 0–5bb | g8 |
| T8 | twopair | 42% | 23% | 8% | 20% | 0–5bb | g8 |
| T7 | twopair | 40% | 21% | 7% | 21% | 0–5bb | g8 |
| 98 | twopair | 40% | 21% | 4% | 20% | 0–5bb | g8 |
| 97 | twopair | 38% | 18% | 3% | 21% | 0–5bb | g8 |
| 87 | twopair | 37% | 18% | 2% | 20% | 0–5bb | g8 |
| Q5 | tpmk | 38% | 18% | 0% | 23% | 0–5bb | g9 |
| AQ | tpgk | 36% | 18% | 1% | 18% | 0–5bb | g9 |
| KQ | tpgk | 36% | 15% | 1% | 23% | 0–5bb | g9 |
| AT | mp | 33% | 16% | 0% | 14% | 0–5bb | g10 |
| KT | mp | 29% | 12% | 0% | 16% | 0–5bb | g10 |
| A9 | bp | 21% | 9% | 0% | 7% | 0–5bb | g11 |
| K9 | bp | 20% | 6% | 0% | 8% | 0–5bb | g11 |
| A8 | bp | 14% | 5% | 0% | 2% | 0–5bb | g11 |
| K8 | bp | 11% | 4% | 0% | 1% | 0–5bb | g11 |
| A7 | bp | 6% | 2% | 0% | 0% | 0–5bb | g11 |
| K7 | bp | 5% | 2% | 0% | 0% | 0–5bb | g11 |
| 75 | bp | 4% | 2% | 0% | 0% | 0–5bb | g11 |
| 44 | pp3 | 3% | 1% | 0% | 0% | 0–5bb | g11 |
| 55 | pp3 | 3% | 1% | 0% | 0% | 0–5bb | g11 |
| 22 | pp3 | 3% | 1% | 0% | 0% | 0–5bb | g11 |
| 33 | pp3 | 3% | 1% | 0% | 0% | 0–5bb | g11 |
| AK | khnd | 4% | 1% | 0% | 0% | Pot is too big | g12 |
| A2 | khnd | 3% | 1% | 0% | 0% | Pot is too big | g12 |
| A5 | khnd | 3% | 1% | 0% | 0% | Pot is too big | g12 |
| A3 | khnd | 3% | 1% | 0% | 0% | Pot is too big | g12 |
| A4 | khnd | 3% | 1% | 0% | 0% | Pot is too big | g12 |
