# T87-9h-2c@xx river (T♥ 8♥ 7♠ 9♥ 2♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: AK–AJ, A7–A2, KQ, KJ, K7–K2, QJ, Q7–Q5, J7, 76, 75, 65, 64, 54, 43 | 98% | 99% | 99% | 94% |
| g2 | 25–50bb | Straights | JJ, 66, AJ, A6, KJ, K6, QJ, Q6, JT–J7, 96, 86, 76, 65, 64 | 79% | 82% | 78% | 71% |
| g3 | 15–25bb | Sets | TT–77, 22 | 59% | 51% | 41% | 57% |
| g4 | 15–25bb | Two pair | T9–T7, 98, 97, 87 | 55% | 38% | 26% | 57% |
| g5 | 0–5bb | Overpairs | AA–QQ | 51% | 27% | 14% | 57% |
| g6 | 0–5bb | Top pair, good kicker | AT, KT, QT | 48% | 23% | 6% | 56% |
| g7 | 0–5bb | Second pair | A9, K9, Q9 | 39% | 13% | 0% | 53% |
| g8 | 0–5bb | Small pairs | 55–33, A8, A7, A2, K8, K7, K2, Q8, Q7, 75 | 22% | 3% | 0% | 37% |
| g9 | Pot is too big | Ace-high | AK, AQ, A5–A3 | 11% | 0% | 0% | 16% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 76+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A6+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AQ+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| AK+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| AJ+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A2+fl | flush | 100% | 99% | 100% | 99% | 50–100bb | g1 |
| A5+fl | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| A4+fl | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| K7+fl | flush | 99% | 99% | 99% | 95% | 50–100bb | g1 |
| K2+fl | flush | 98% | 99% | 98% | 94% | 50–100bb | g1 |
| K6+fl | flush | 99% | 100% | 99% | 94% | 50–100bb | g1 |
| K3+fl | flush | 98% | 99% | 98% | 93% | 50–100bb | g1 |
| K4+fl | flush | 98% | 98% | 98% | 93% | 50–100bb | g1 |
| KJ+fl | flush | 98% | 99% | 98% | 92% | 50–100bb | g1 |
| KQ+fl | flush | 98% | 99% | 99% | 92% | 50–100bb | g1 |
| K5+fl | flush | 98% | 98% | 98% | 92% | 50–100bb | g1 |
| Q7+fl | flush | 97% | 99% | 99% | 90% | 50–100bb | g1 |
| Q6+fl | flush | 97% | 100% | 99% | 88% | 50–100bb | g1 |
| 75+fl | flushlo | 95% | 98% | 97% | 88% | 50–100bb | g1 |
| Q5+fl | flush | 96% | 98% | 98% | 86% | 50–100bb | g1 |
| 64+fl | flushlo | 96% | 99% | 99% | 84% | 50–100bb | g1 |
| 65+fl | flushlo | 95% | 99% | 98% | 82% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 96% | 96% | 82% | 50–100bb | g1 |
| 43+fl | flushlo | 94% | 96% | 96% | 82% | 50–100bb | g1 |
| QJ | straight | 90% | 95% | 95% | 76% | 50–100bb | g2 |
| JJ | straight | 86% | 91% | 88% | 74% | 50–100bb | g2 |
| J8 | straight | 83% | 88% | 85% | 74% | 50–100bb | g2 |
| J9 | straight | 82% | 88% | 86% | 73% | 50–100bb | g2 |
| KJ | straight | 84% | 89% | 86% | 73% | 50–100bb | g2 |
| JT | straight | 83% | 88% | 86% | 73% | 50–100bb | g2 |
| AJ | straight | 83% | 89% | 86% | 73% | 50–100bb | g2 |
| J7 | straight | 83% | 88% | 86% | 71% | 50–100bb | g2 |
| 66 | straight | 69% | 71% | 63% | 68% | 50–100bb | g2 |
| K6 | straight | 69% | 69% | 62% | 66% | 50–100bb | g2 |
| 65 | straight | 67% | 69% | 62% | 65% | 50–100bb | g2 |
| 86 | straight | 67% | 67% | 59% | 64% | 50–100bb | g2 |
| A6 | straight | 68% | 68% | 61% | 64% | 50–100bb | g2 |
| 64 | straight | 68% | 69% | 62% | 64% | 50–100bb | g2 |
| Q6 | straight | 67% | 67% | 62% | 64% | 50–100bb | g2 |
| 96 | straight | 68% | 67% | 61% | 64% | 50–100bb | g2 |
| 76 | straight | 67% | 67% | 60% | 62% | 50–100bb | g2 |
| 88 | twopair | 58% | 52% | 41% | 58% | 50–100bb | g3 |
| 99 | twopair | 59% | 52% | 44% | 58% | 50–100bb | g3 |
| TT | twopair | 59% | 50% | 36% | 57% | 50–100bb | g3 |
| 22 | twopair | 60% | 50% | 41% | 57% | 50–100bb | g3 |
| 77 | twopair | 60% | 51% | 41% | 56% | 50–100bb | g3 |
| 98 | twopair | 55% | 35% | 25% | 58% | 50–100bb | g4 |
| T9 | twopair | 57% | 43% | 31% | 58% | 50–100bb | g4 |
| T8 | twopair | 56% | 39% | 25% | 58% | 50–100bb | g4 |
| T7 | twopair | 55% | 37% | 23% | 55% | 50–100bb | g4 |
| 97 | twopair | 53% | 33% | 21% | 55% | 50–100bb | g4 |
| 87 | twopair | 54% | 32% | 19% | 54% | 50–100bb | g4 |
| KK | op | 50% | 28% | 14% | 59% | 50–100bb | g5 |
| QQ | op | 53% | 27% | 13% | 58% | 50–100bb | g5 |
| AA | op | 50% | 27% | 14% | 55% | 50–100bb | g5 |
| QT | tpmk | 46% | 20% | 3% | 56% | 50–100bb | g6 |
| KT | tpgk | 49% | 23% | 6% | 56% | 50–100bb | g6 |
| AT | tpgk | 50% | 25% | 10% | 56% | 50–100bb | g6 |
| A9 | mp | 41% | 14% | 0% | 54% | 50–100bb | g7 |
| Q9 | mp | 37% | 11% | 0% | 53% | 50–100bb | g7 |
| K9 | mp | 38% | 13% | 0% | 52% | 50–100bb | g7 |
| A8 | bp | 31% | 8% | 0% | 50% | 50–100bb | g8 |
| K8 | bp | 29% | 6% | 0% | 48% | 0–5bb | g8 |
| Q8 | bp | 28% | 5% | 0% | 48% | 0–5bb | g8 |
| A7 | bp | 24% | 2% | 0% | 44% | 0–5bb | g8 |
| K7 | bp | 23% | 2% | 0% | 37% | 0–5bb | g8 |
| Q7 | bp | 21% | 1% | 0% | 36% | 0–5bb | g8 |
| 75 | bp | 20% | 1% | 0% | 34% | 0–5bb | g8 |
| 55 | pp3 | 19% | 0% | 0% | 28% | 0–5bb | g8 |
| 44 | pp3 | 16% | 0% | 0% | 28% | 0–5bb | g8 |
| 33 | pp3 | 14% | 0% | 0% | 27% | 0–5bb | g8 |
| A2 | bp | 14% | 0% | 0% | 26% | 0–5bb | g8 |
| K2 | bp | 13% | 0% | 0% | 21% | 0–5bb | g8 |
| AK | khnd | 12% | 0% | 0% | 18% | Pot is too big | g9 |
| AQ | khnd | 11% | 0% | 0% | 18% | Pot is too big | g9 |
| A3 | khnd | 10% | 0% | 0% | 15% | Pot is too big | g9 |
| A5 | khnd | 10% | 0% | 0% | 16% | Pot is too big | g9 |
| A4 | khnd | 10% | 0% | 0% | 15% | Pot is too big | g9 |
