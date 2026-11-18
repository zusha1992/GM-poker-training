# T87-2d-9h@xx river (T♥ 8♥ 7♠ 2♦ 9♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: AK–AJ, A7–A2, KQ, KJ, K7–K2, QJ, Q7–Q5, J7, 76, 75, 65, 64, 54, 43 | 98% | 99% | 98% | 93% |
| g2 | 25–50bb | Straights | JJ, 66, AJ, A6, KJ, K6, QJ, Q6, JT–J7, 96, 86, 76, 65, 64 | 78% | 85% | 81% | 71% |
| g3 | 15–25bb | Sets | TT–77, 22 | 60% | 55% | 43% | 62% |
| g4 | 15–25bb | Two pair | T9–T7, 98, 97, 87 | 57% | 43% | 28% | 61% |
| g5 | 0–5bb | Overpairs | AA–QQ | 53% | 33% | 18% | 62% |
| g6 | 0–5bb | Top pair, good kicker | AT, KT, QT | 52% | 29% | 9% | 61% |
| g7 | 0–5bb | Second pair | A9, K9, Q9 | 44% | 15% | 0% | 57% |
| g8 | 0–5bb | Small pairs | 55–33, A8, A7, A2, K8, K7, K2, Q8, Q7, 75 | 29% | 4% | 0% | 42% |
| g9 | Pot is too big | Ace-high | AK, AQ, A5–A3 | 14% | 0% | 0% | 18% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A6+fl | flush | 99% | 100% | 99% | 100% | 50–100bb | g1 |
| 76+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AJ+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A5+fl | flush | 99% | 99% | 99% | 99% | 50–100bb | g1 |
| AQ+fl | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| A2+fl | flush | 99% | 99% | 99% | 99% | 50–100bb | g1 |
| A4+fl | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| AK+fl | flush | 99% | 99% | 99% | 99% | 50–100bb | g1 |
| A3+fl | flush | 99% | 99% | 99% | 99% | 50–100bb | g1 |
| K7+fl | flush | 98% | 99% | 98% | 93% | 50–100bb | g1 |
| K2+fl | flush | 98% | 98% | 97% | 93% | 50–100bb | g1 |
| K6+fl | flush | 98% | 99% | 99% | 92% | 50–100bb | g1 |
| K3+fl | flush | 98% | 98% | 97% | 92% | 50–100bb | g1 |
| K4+fl | flush | 98% | 98% | 97% | 91% | 50–100bb | g1 |
| KQ+fl | flush | 98% | 98% | 98% | 91% | 50–100bb | g1 |
| K5+fl | flush | 98% | 98% | 97% | 91% | 50–100bb | g1 |
| KJ+fl | flush | 98% | 98% | 98% | 90% | 50–100bb | g1 |
| Q7+fl | flush | 97% | 99% | 98% | 88% | 50–100bb | g1 |
| Q6+fl | flush | 97% | 100% | 99% | 86% | 50–100bb | g1 |
| 75+fl | flushlo | 94% | 98% | 97% | 85% | 50–100bb | g1 |
| Q5+fl | flush | 96% | 98% | 98% | 84% | 50–100bb | g1 |
| 64+fl | flushlo | 95% | 98% | 98% | 82% | 50–100bb | g1 |
| 43+fl | flushlo | 93% | 96% | 95% | 81% | 50–100bb | g1 |
| 65+fl | flushlo | 94% | 98% | 98% | 81% | 50–100bb | g1 |
| 54+fl | flushlo | 94% | 97% | 96% | 81% | 50–100bb | g1 |
| QJ | straight | 89% | 95% | 94% | 74% | 50–100bb | g2 |
| JJ | straight | 85% | 92% | 90% | 73% | 50–100bb | g2 |
| J8 | straight | 81% | 90% | 86% | 73% | 50–100bb | g2 |
| KJ | straight | 82% | 90% | 87% | 73% | 50–100bb | g2 |
| JT | straight | 82% | 89% | 86% | 73% | 50–100bb | g2 |
| AJ | straight | 82% | 90% | 88% | 72% | 50–100bb | g2 |
| J9 | straight | 83% | 91% | 87% | 72% | 50–100bb | g2 |
| 66 | straight | 69% | 76% | 69% | 71% | 50–100bb | g2 |
| J7 | straight | 82% | 89% | 86% | 70% | 50–100bb | g2 |
| 86 | straight | 68% | 72% | 65% | 69% | 50–100bb | g2 |
| K6 | straight | 69% | 74% | 67% | 69% | 50–100bb | g2 |
| 65 | straight | 68% | 74% | 66% | 68% | 50–100bb | g2 |
| 96 | straight | 68% | 72% | 65% | 68% | 50–100bb | g2 |
| A6 | straight | 67% | 74% | 67% | 67% | 50–100bb | g2 |
| Q6 | straight | 67% | 74% | 67% | 67% | 50–100bb | g2 |
| 64 | straight | 68% | 74% | 66% | 66% | 50–100bb | g2 |
| 76 | straight | 67% | 73% | 64% | 65% | 50–100bb | g2 |
| 77 | twopair | 60% | 54% | 43% | 62% | 50–100bb | g3 |
| TT | twopair | 60% | 56% | 39% | 62% | 50–100bb | g3 |
| 88 | twopair | 60% | 55% | 45% | 62% | 50–100bb | g3 |
| 22 | twopair | 61% | 54% | 42% | 61% | 50–100bb | g3 |
| 99 | twopair | 60% | 56% | 46% | 61% | 50–100bb | g3 |
| 98 | twopair | 55% | 41% | 28% | 62% | 50–100bb | g4 |
| T8 | twopair | 57% | 45% | 28% | 62% | 50–100bb | g4 |
| T9 | twopair | 58% | 47% | 32% | 61% | 50–100bb | g4 |
| T7 | twopair | 56% | 44% | 27% | 59% | 50–100bb | g4 |
| 97 | twopair | 55% | 38% | 25% | 58% | 50–100bb | g4 |
| 87 | twopair | 55% | 39% | 22% | 57% | 50–100bb | g4 |
| QQ | op | 53% | 33% | 17% | 63% | 50–100bb | g5 |
| KK | op | 54% | 35% | 18% | 62% | 50–100bb | g5 |
| AA | op | 52% | 32% | 18% | 60% | 50–100bb | g5 |
| KT | tpgk | 52% | 30% | 9% | 62% | 50–100bb | g6 |
| AT | tpgk | 52% | 30% | 13% | 62% | 50–100bb | g6 |
| QT | tpmk | 51% | 26% | 4% | 60% | 50–100bb | g6 |
| A9 | mp | 44% | 17% | 0% | 58% | 50–100bb | g7 |
| K9 | mp | 45% | 15% | 0% | 57% | 50–100bb | g7 |
| Q9 | mp | 43% | 14% | 0% | 57% | 50–100bb | g7 |
| A8 | bp | 38% | 9% | 0% | 54% | 50–100bb | g8 |
| K8 | bp | 37% | 10% | 0% | 53% | 50–100bb | g8 |
| Q8 | bp | 36% | 9% | 0% | 51% | 50–100bb | g8 |
| A7 | bp | 32% | 4% | 0% | 50% | 50–100bb | g8 |
| Q7 | bp | 31% | 3% | 0% | 40% | 0–5bb | g8 |
| K7 | bp | 30% | 3% | 0% | 44% | 0–5bb | g8 |
| 75 | bp | 27% | 2% | 0% | 40% | 0–5bb | g8 |
| 55 | pp3 | 24% | 1% | 0% | 35% | 0–5bb | g8 |
| 44 | pp3 | 22% | 1% | 0% | 33% | 0–5bb | g8 |
| 33 | pp3 | 20% | 1% | 0% | 31% | 0–5bb | g8 |
| A2 | bp | 19% | 0% | 0% | 30% | 0–5bb | g8 |
| K2 | bp | 18% | 0% | 0% | 24% | 0–5bb | g8 |
| AK | khnd | 16% | 0% | 0% | 18% | Pot is too big | g9 |
| AQ | khnd | 15% | 0% | 0% | 21% | Pot is too big | g9 |
| A3 | khnd | 13% | 0% | 0% | 16% | Pot is too big | g9 |
| A4 | khnd | 13% | 0% | 0% | 17% | Pot is too big | g9 |
| A5 | khnd | 12% | 0% | 0% | 17% | Pot is too big | g9 |
