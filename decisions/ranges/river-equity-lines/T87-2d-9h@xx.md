# T87-2d-9h@xx river (T♥ 8♥ 7♠ 2♦ 9♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: AK–AJ, A7–A2, KQ, KJ, K7–K2, QJ, Q7–Q5, J7, 76, 75, 65, 64, 54, 43 | 98% | 99% | 99% | 93% |
| g2 | 25–50bb | Q-high straights | QJ | 89% | 95% | 94% | 73% |
| g3 | 25–50bb | J-high straights | JJ, AJ, KJ, JT–J7 | 82% | 90% | 87% | 73% |
| g4 | 25–50bb | T-high straights | 66, A6, K6, Q6, 96, 86, 76, 65, 64 | 68% | 74% | 67% | 68% |
| g5 | 15–25bb | Sets | TT–77, 22 | 59% | 55% | 44% | 62% |
| g6 | 15–25bb | Two pair | T9–T7, 98, 97, 87 | 56% | 43% | 28% | 60% |
| g7 | 0–5bb | Overpairs | AA–QQ | 53% | 33% | 17% | 62% |
| g8 | 0–5bb | Top pair, good kicker | AT, KT, QT | 51% | 29% | 9% | 60% |
| g9 | 0–5bb | Second pair | A9, K9, Q9 | 44% | 15% | 0% | 57% |
| g10 | 0–5bb | Small pairs | 55–33, A8, A7, A2, K8, K7, K2, Q8, Q7, 75 | 29% | 4% | 0% | 42% |
| g11 | Pot is too big | Ace-high | AK, AQ, A5–A3 | 14% | 0% | 0% | 18% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 76+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A6+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AJ+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| AQ+fl | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| A5+fl | flush | 99% | 99% | 99% | 99% | 50–100bb | g1 |
| A2+fl | flush | 99% | 99% | 99% | 99% | 50–100bb | g1 |
| AK+fl | flush | 99% | 99% | 99% | 99% | 50–100bb | g1 |
| A3+fl | flush | 99% | 99% | 99% | 99% | 50–100bb | g1 |
| A4+fl | flush | 99% | 99% | 99% | 99% | 50–100bb | g1 |
| K7+fl | flush | 99% | 99% | 98% | 93% | 50–100bb | g1 |
| K2+fl | flush | 98% | 98% | 98% | 93% | 50–100bb | g1 |
| K6+fl | flush | 98% | 99% | 99% | 92% | 50–100bb | g1 |
| K3+fl | flush | 98% | 98% | 97% | 92% | 50–100bb | g1 |
| K4+fl | flush | 98% | 98% | 98% | 92% | 50–100bb | g1 |
| KJ+fl | flush | 98% | 98% | 98% | 91% | 50–100bb | g1 |
| K5+fl | flush | 98% | 98% | 97% | 90% | 50–100bb | g1 |
| KQ+fl | flush | 98% | 98% | 98% | 90% | 50–100bb | g1 |
| Q7+fl | flush | 98% | 99% | 98% | 89% | 50–100bb | g1 |
| Q6+fl | flush | 97% | 99% | 99% | 86% | 50–100bb | g1 |
| 75+fl | flushlo | 95% | 98% | 97% | 86% | 50–100bb | g1 |
| Q5+fl | flush | 96% | 98% | 98% | 84% | 50–100bb | g1 |
| 64+fl | flushlo | 94% | 98% | 98% | 82% | 50–100bb | g1 |
| 43+fl | flushlo | 93% | 96% | 95% | 81% | 50–100bb | g1 |
| 65+fl | flushlo | 94% | 98% | 98% | 80% | 50–100bb | g1 |
| 54+fl | flushlo | 93% | 97% | 96% | 80% | 50–100bb | g1 |
| QJ | straight | 89% | 95% | 94% | 73% | 50–100bb | g2 |
| JJ | straight | 84% | 92% | 90% | 75% | 50–100bb | g3 |
| J9 | straight | 82% | 90% | 87% | 74% | 50–100bb | g3 |
| KJ | straight | 82% | 90% | 87% | 73% | 50–100bb | g3 |
| JT | straight | 82% | 90% | 86% | 73% | 50–100bb | g3 |
| AJ | straight | 81% | 90% | 88% | 73% | 50–100bb | g3 |
| J8 | straight | 80% | 89% | 86% | 72% | 50–100bb | g3 |
| J7 | straight | 82% | 89% | 86% | 70% | 50–100bb | g3 |
| 66 | straight | 70% | 77% | 70% | 71% | 50–100bb | g4 |
| 96 | straight | 68% | 73% | 66% | 69% | 50–100bb | g4 |
| K6 | straight | 69% | 75% | 66% | 69% | 50–100bb | g4 |
| 86 | straight | 68% | 73% | 66% | 68% | 50–100bb | g4 |
| 65 | straight | 67% | 74% | 67% | 68% | 50–100bb | g4 |
| Q6 | straight | 68% | 74% | 66% | 68% | 50–100bb | g4 |
| 64 | straight | 68% | 74% | 67% | 67% | 50–100bb | g4 |
| A6 | straight | 68% | 74% | 67% | 67% | 50–100bb | g4 |
| 76 | straight | 67% | 72% | 64% | 66% | 50–100bb | g4 |
| TT | twopair | 60% | 55% | 39% | 63% | 50–100bb | g5 |
| 22 | twopair | 61% | 54% | 44% | 62% | 50–100bb | g5 |
| 88 | twopair | 58% | 56% | 44% | 62% | 50–100bb | g5 |
| 99 | twopair | 59% | 57% | 46% | 61% | 50–100bb | g5 |
| 77 | twopair | 59% | 56% | 44% | 61% | 50–100bb | g5 |
| T8 | twopair | 56% | 45% | 29% | 61% | 50–100bb | g6 |
| 98 | twopair | 55% | 41% | 28% | 61% | 50–100bb | g6 |
| T9 | twopair | 58% | 46% | 31% | 61% | 50–100bb | g6 |
| 87 | twopair | 55% | 39% | 23% | 59% | 50–100bb | g6 |
| 97 | twopair | 56% | 38% | 25% | 58% | 50–100bb | g6 |
| T7 | twopair | 56% | 43% | 26% | 58% | 50–100bb | g6 |
| KK | op | 54% | 35% | 17% | 63% | 50–100bb | g7 |
| QQ | op | 52% | 33% | 16% | 63% | 50–100bb | g7 |
| AA | op | 52% | 32% | 18% | 59% | 50–100bb | g7 |
| QT | tpmk | 51% | 27% | 4% | 60% | 50–100bb | g8 |
| KT | tpgk | 52% | 30% | 9% | 60% | 50–100bb | g8 |
| AT | tpgk | 51% | 30% | 13% | 60% | 50–100bb | g8 |
| A9 | mp | 45% | 16% | 0% | 58% | 50–100bb | g9 |
| K9 | mp | 43% | 15% | 0% | 56% | 50–100bb | g9 |
| Q9 | mp | 43% | 14% | 0% | 56% | 50–100bb | g9 |
| A8 | bp | 39% | 10% | 0% | 55% | 50–100bb | g10 |
| Q8 | bp | 36% | 9% | 0% | 54% | 50–100bb | g10 |
| K8 | bp | 37% | 10% | 0% | 53% | 50–100bb | g10 |
| K7 | bp | 30% | 4% | 0% | 44% | 0–5bb | g10 |
| A7 | bp | 30% | 5% | 0% | 49% | 0–5bb | g10 |
| Q7 | bp | 30% | 3% | 0% | 40% | 0–5bb | g10 |
| 75 | bp | 27% | 2% | 0% | 38% | 0–5bb | g10 |
| 55 | pp3 | 23% | 1% | 0% | 33% | 0–5bb | g10 |
| 44 | pp3 | 21% | 1% | 0% | 32% | 0–5bb | g10 |
| 33 | pp3 | 21% | 1% | 0% | 31% | 0–5bb | g10 |
| A2 | bp | 20% | 0% | 0% | 30% | 0–5bb | g10 |
| K2 | bp | 18% | 0% | 0% | 25% | 0–5bb | g10 |
| AQ | khnd | 16% | 0% | 0% | 21% | Pot is too big | g11 |
| AK | khnd | 15% | 0% | 0% | 19% | Pot is too big | g11 |
| A5 | khnd | 13% | 0% | 0% | 17% | Pot is too big | g11 |
| A3 | khnd | 13% | 0% | 0% | 16% | Pot is too big | g11 |
| A4 | khnd | 12% | 0% | 0% | 17% | Pot is too big | g11 |
