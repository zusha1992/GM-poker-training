# T87-2d-9h@bx river (T♥ 8♥ 7♠ 2♦ 9♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: AK–AJ, A7–A2, KQ, KJ, K7–K2, QJ, Q7–Q5, J7, 76, 75, 65, 64, 54, 43 | 99% | 99% | 99% | 96% |
| g2 | 25–50bb | Q-high straights | QJ | 92% | 96% | 95% | 79% |
| g3 | 25–50bb | J-high straights | JJ, AJ, KJ, JT–J7 | 84% | 87% | 85% | 69% |
| g4 | 25–50bb | T-high straights | 66, A6, K6, Q6, 96, 86, 76, 65, 64 | 70% | 68% | 62% | 53% |
| g5 | 5–15bb | Sets | 88, 77, 22 | 63% | 53% | 47% | 45% |
| g6 | 0–5bb | Sets | TT, 99 | 61% | 47% | 39% | 45% |
| g7 | 0–5bb | Overpairs | AA–QQ | 52% | 30% | 21% | 44% |
| g8 | 0–5bb | Two pair | T9–T7, 98, 97, 87 | 57% | 40% | 32% | 43% |
| g9 | 0–5bb | Top pair, good kicker | AT, KT, QT | 47% | 23% | 10% | 41% |
| g10 | 0–5bb | Second pair | A9, K9, Q9 | 31% | 7% | 0% | 34% |
| g11 | 0–5bb | Small pairs | 55–33, A8, A7, A2, K8, K7, K2, Q8, Q7, 75 | 10% | 1% | 0% | 17% |
| g12 | Pot is too big | Ace-high | AK, AQ, A5–A3 | 3% | 0% | 0% | 5% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| AJ+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| AQ+fl | flush | 99% | 99% | 99% | 99% | 50–100bb | g1 |
| 76+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A6+fl | flush | 99% | 99% | 99% | 99% | 50–100bb | g1 |
| A3+fl | flush | 99% | 99% | 99% | 98% | 50–100bb | g1 |
| A5+fl | flush | 99% | 99% | 99% | 98% | 50–100bb | g1 |
| A2+fl | flush | 99% | 99% | 99% | 98% | 50–100bb | g1 |
| AK+fl | flush | 99% | 99% | 99% | 98% | 50–100bb | g1 |
| A4+fl | flush | 99% | 99% | 99% | 98% | 50–100bb | g1 |
| K7+fl | flush | 99% | 99% | 99% | 97% | 50–100bb | g1 |
| Q7+fl | flush | 99% | 99% | 99% | 97% | 50–100bb | g1 |
| KJ+fl | flush | 99% | 99% | 99% | 96% | 50–100bb | g1 |
| 75+fl | flushlo | 98% | 99% | 99% | 96% | 50–100bb | g1 |
| K6+fl | flush | 98% | 99% | 99% | 96% | 50–100bb | g1 |
| KQ+fl | flush | 99% | 99% | 99% | 96% | 50–100bb | g1 |
| K2+fl | flush | 98% | 99% | 98% | 95% | 50–100bb | g1 |
| K3+fl | flush | 98% | 99% | 98% | 95% | 50–100bb | g1 |
| K4+fl | flush | 98% | 99% | 98% | 94% | 50–100bb | g1 |
| K5+fl | flush | 98% | 99% | 99% | 94% | 50–100bb | g1 |
| Q6+fl | flush | 98% | 99% | 99% | 94% | 50–100bb | g1 |
| Q5+fl | flush | 98% | 99% | 99% | 93% | 50–100bb | g1 |
| 65+fl | flushlo | 96% | 99% | 99% | 89% | 50–100bb | g1 |
| 54+fl | flushlo | 96% | 98% | 98% | 89% | 50–100bb | g1 |
| 64+fl | flushlo | 96% | 99% | 99% | 88% | 50–100bb | g1 |
| 43+fl | flushlo | 96% | 98% | 97% | 88% | 50–100bb | g1 |
| QJ | straight | 92% | 96% | 95% | 79% | 50–100bb | g2 |
| JJ | straight | 87% | 90% | 88% | 72% | 50–100bb | g3 |
| JT | straight | 84% | 87% | 84% | 70% | 50–100bb | g3 |
| J9 | straight | 84% | 86% | 85% | 69% | 50–100bb | g3 |
| J8 | straight | 84% | 87% | 85% | 68% | 50–100bb | g3 |
| AJ | straight | 84% | 88% | 85% | 68% | 50–100bb | g3 |
| KJ | straight | 84% | 87% | 86% | 68% | 50–100bb | g3 |
| J7 | straight | 84% | 88% | 84% | 66% | 50–100bb | g3 |
| 66 | straight | 72% | 70% | 64% | 55% | 50–100bb | g4 |
| 64 | straight | 70% | 67% | 62% | 54% | 50–100bb | g4 |
| A6 | straight | 70% | 68% | 62% | 54% | 50–100bb | g4 |
| Q6 | straight | 71% | 68% | 63% | 54% | 50–100bb | g4 |
| 86 | straight | 69% | 66% | 61% | 53% | 50–100bb | g4 |
| 96 | straight | 69% | 65% | 61% | 53% | 50–100bb | g4 |
| K6 | straight | 70% | 67% | 61% | 52% | 50–100bb | g4 |
| 65 | straight | 71% | 67% | 62% | 52% | 50–100bb | g4 |
| 76 | straight | 70% | 66% | 61% | 50% | 50–100bb | g4 |
| 77 | twopair | 65% | 54% | 47% | 44% | 5–15bb | g5 |
| 22 | twopair | 63% | 53% | 47% | 46% | 5–15bb | g5 |
| 88 | twopair | 62% | 53% | 46% | 44% | 5–15bb | g5 |
| TT | twopair | 61% | 45% | 34% | 45% | 0–5bb | g6 |
| 99 | twopair | 60% | 48% | 44% | 45% | 0–5bb | g6 |
| QQ | op | 53% | 30% | 21% | 47% | 0–5bb | g7 |
| KK | op | 53% | 31% | 22% | 41% | 0–5bb | g7 |
| AA | op | 51% | 30% | 21% | 44% | 0–5bb | g7 |
| T9 | twopair | 59% | 43% | 36% | 44% | 0–5bb | g8 |
| T8 | twopair | 57% | 41% | 31% | 45% | 0–5bb | g8 |
| T7 | twopair | 57% | 40% | 30% | 41% | 0–5bb | g8 |
| 97 | twopair | 56% | 37% | 28% | 40% | 0–5bb | g8 |
| 98 | twopair | 56% | 38% | 31% | 44% | 0–5bb | g8 |
| 87 | twopair | 55% | 37% | 28% | 40% | 0–5bb | g8 |
| AT | tpgk | 51% | 27% | 16% | 44% | 0–5bb | g9 |
| KT | tpgk | 47% | 24% | 11% | 39% | 0–5bb | g9 |
| QT | tpmk | 43% | 19% | 4% | 41% | 0–5bb | g9 |
| A9 | mp | 33% | 9% | 0% | 34% | 0–5bb | g10 |
| K9 | mp | 30% | 6% | 0% | 33% | 0–5bb | g10 |
| Q9 | mp | 29% | 5% | 0% | 33% | 0–5bb | g10 |
| A8 | bp | 21% | 2% | 0% | 29% | 0–5bb | g11 |
| K8 | bp | 18% | 2% | 0% | 26% | 0–5bb | g11 |
| Q8 | bp | 15% | 1% | 0% | 25% | 0–5bb | g11 |
| A7 | bp | 9% | 0% | 0% | 21% | 0–5bb | g11 |
| K7 | bp | 7% | 0% | 0% | 18% | 0–5bb | g11 |
| Q7 | bp | 6% | 0% | 0% | 15% | 0–5bb | g11 |
| 75 | bp | 6% | 0% | 0% | 12% | 0–5bb | g11 |
| A2 | bp | 4% | 0% | 0% | 8% | 0–5bb | g11 |
| 44 | pp3 | 4% | 0% | 0% | 10% | 0–5bb | g11 |
| 55 | pp3 | 4% | 0% | 0% | 10% | 0–5bb | g11 |
| 33 | pp3 | 4% | 0% | 0% | 8% | 0–5bb | g11 |
| K2 | bp | 4% | 0% | 0% | 6% | 0–5bb | g11 |
| AK | khnd | 3% | 0% | 0% | 5% | Pot is too big | g12 |
| AQ | khnd | 3% | 0% | 0% | 5% | Pot is too big | g12 |
| A3 | khnd | 3% | 0% | 0% | 4% | Pot is too big | g12 |
| A5 | khnd | 3% | 0% | 0% | 5% | Pot is too big | g12 |
| A4 | khnd | 2% | 0% | 0% | 4% | Pot is too big | g12 |
