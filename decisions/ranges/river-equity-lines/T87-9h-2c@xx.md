# T87-9h-2c@xx river (T♥ 8♥ 7♠ 9♥ 2♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: AK–AJ, A7–A2, KQ, KJ, K7–K2, QJ, Q7–Q5, J7, 76, 75, 65, 64, 54, 43 | 98% | 99% | 99% | 94% |
| g2 | 25–50bb | Q-high straights | QJ | 90% | 96% | 94% | 75% |
| g3 | 25–50bb | J-high straights | JJ, AJ, KJ, JT–J7 | 83% | 89% | 86% | 73% |
| g4 | 25–50bb | T-high straights | 66, A6, K6, Q6, 96, 86, 76, 65, 64 | 68% | 69% | 62% | 65% |
| g5 | 15–25bb | Sets | TT–77, 22 | 59% | 51% | 40% | 58% |
| g6 | 15–25bb | Two pair | T9–T7, 98, 97, 87 | 55% | 38% | 25% | 57% |
| g7 | 0–5bb | Overpairs | AA–QQ | 51% | 27% | 14% | 57% |
| g8 | 0–5bb | Top pair, good kicker | AT, KT, QT | 48% | 23% | 6% | 56% |
| g9 | 0–5bb | Second pair | A9, K9, Q9 | 39% | 13% | 0% | 52% |
| g10 | 0–5bb | Small pairs | 55–33, A8, A7, A2, K8, K7, K2, Q8, Q7, 75 | 22% | 3% | 0% | 37% |
| g11 | Pot is too big | Ace-high | AK, AQ, A5–A3 | 10% | 0% | 0% | 16% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 76+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A6+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A5+fl | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| AJ+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| AK+fl | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| AQ+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A3+fl | flush | 99% | 99% | 99% | 99% | 50–100bb | g1 |
| A2+fl | flush | 99% | 100% | 99% | 99% | 50–100bb | g1 |
| K7+fl | flush | 99% | 99% | 99% | 96% | 50–100bb | g1 |
| K2+fl | flush | 98% | 99% | 99% | 94% | 50–100bb | g1 |
| K3+fl | flush | 98% | 99% | 98% | 94% | 50–100bb | g1 |
| K6+fl | flush | 99% | 100% | 100% | 93% | 50–100bb | g1 |
| K4+fl | flush | 98% | 98% | 98% | 93% | 50–100bb | g1 |
| K5+fl | flush | 98% | 99% | 98% | 92% | 50–100bb | g1 |
| KJ+fl | flush | 98% | 99% | 99% | 92% | 50–100bb | g1 |
| KQ+fl | flush | 98% | 99% | 98% | 92% | 50–100bb | g1 |
| Q7+fl | flush | 97% | 99% | 99% | 90% | 50–100bb | g1 |
| Q6+fl | flush | 98% | 100% | 99% | 88% | 50–100bb | g1 |
| Q5+fl | flush | 97% | 98% | 98% | 87% | 50–100bb | g1 |
| 75+fl | flushlo | 95% | 98% | 97% | 87% | 50–100bb | g1 |
| 64+fl | flushlo | 95% | 99% | 98% | 84% | 50–100bb | g1 |
| 65+fl | flushlo | 95% | 99% | 98% | 83% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 97% | 96% | 83% | 50–100bb | g1 |
| 43+fl | flushlo | 95% | 97% | 96% | 82% | 50–100bb | g1 |
| QJ | straight | 90% | 96% | 94% | 75% | 50–100bb | g2 |
| J9 | straight | 82% | 89% | 86% | 74% | 50–100bb | g3 |
| JJ | straight | 85% | 91% | 89% | 74% | 50–100bb | g3 |
| KJ | straight | 83% | 88% | 87% | 74% | 50–100bb | g3 |
| JT | straight | 83% | 88% | 85% | 73% | 50–100bb | g3 |
| J8 | straight | 83% | 88% | 85% | 73% | 50–100bb | g3 |
| AJ | straight | 82% | 89% | 86% | 72% | 50–100bb | g3 |
| J7 | straight | 83% | 88% | 85% | 70% | 50–100bb | g3 |
| 66 | straight | 69% | 72% | 64% | 67% | 50–100bb | g4 |
| 96 | straight | 68% | 68% | 62% | 66% | 50–100bb | g4 |
| A6 | straight | 68% | 69% | 62% | 65% | 50–100bb | g4 |
| 86 | straight | 67% | 67% | 60% | 65% | 50–100bb | g4 |
| K6 | straight | 67% | 69% | 61% | 65% | 50–100bb | g4 |
| Q6 | straight | 68% | 68% | 61% | 65% | 50–100bb | g4 |
| 65 | straight | 68% | 68% | 62% | 64% | 50–100bb | g4 |
| 64 | straight | 67% | 69% | 63% | 64% | 50–100bb | g4 |
| 76 | straight | 67% | 67% | 59% | 62% | 50–100bb | g4 |
| 99 | twopair | 59% | 51% | 43% | 60% | 50–100bb | g5 |
| TT | twopair | 60% | 50% | 35% | 58% | 50–100bb | g5 |
| 22 | twopair | 59% | 52% | 41% | 58% | 50–100bb | g5 |
| 88 | twopair | 58% | 50% | 41% | 57% | 50–100bb | g5 |
| 77 | twopair | 60% | 50% | 40% | 57% | 50–100bb | g5 |
| T9 | twopair | 57% | 42% | 30% | 58% | 50–100bb | g6 |
| 98 | twopair | 53% | 36% | 23% | 57% | 50–100bb | g6 |
| T8 | twopair | 56% | 39% | 26% | 56% | 50–100bb | g6 |
| T7 | twopair | 54% | 37% | 23% | 55% | 50–100bb | g6 |
| 97 | twopair | 54% | 33% | 21% | 55% | 50–100bb | g6 |
| 87 | twopair | 51% | 31% | 18% | 55% | 50–100bb | g6 |
| QQ | op | 52% | 25% | 13% | 58% | 50–100bb | g7 |
| KK | op | 51% | 28% | 15% | 58% | 50–100bb | g7 |
| AA | op | 50% | 27% | 14% | 54% | 50–100bb | g7 |
| AT | tpgk | 50% | 25% | 9% | 56% | 50–100bb | g8 |
| QT | tpmk | 48% | 21% | 3% | 56% | 50–100bb | g8 |
| KT | tpgk | 47% | 24% | 6% | 55% | 50–100bb | g8 |
| Q9 | mp | 37% | 10% | 0% | 53% | 50–100bb | g9 |
| K9 | mp | 38% | 13% | 0% | 52% | 50–100bb | g9 |
| A9 | mp | 41% | 14% | 0% | 52% | 50–100bb | g9 |
| A8 | bp | 31% | 7% | 0% | 50% | 50–100bb | g10 |
| K8 | bp | 30% | 6% | 0% | 48% | 0–5bb | g10 |
| Q8 | bp | 28% | 6% | 0% | 48% | 0–5bb | g10 |
| A7 | bp | 24% | 3% | 0% | 43% | 0–5bb | g10 |
| K7 | bp | 23% | 2% | 0% | 38% | 0–5bb | g10 |
| Q7 | bp | 23% | 2% | 0% | 34% | 0–5bb | g10 |
| 75 | bp | 20% | 1% | 0% | 33% | 0–5bb | g10 |
| 55 | pp3 | 18% | 0% | 0% | 28% | 0–5bb | g10 |
| 44 | pp3 | 16% | 0% | 0% | 28% | 0–5bb | g10 |
| K2 | bp | 14% | 0% | 0% | 21% | 0–5bb | g10 |
| 33 | pp3 | 14% | 0% | 0% | 26% | 0–5bb | g10 |
| A2 | bp | 13% | 0% | 0% | 26% | 0–5bb | g10 |
| AK | khnd | 11% | 0% | 0% | 18% | Pot is too big | g11 |
| AQ | khnd | 11% | 0% | 0% | 18% | Pot is too big | g11 |
| A5 | khnd | 10% | 0% | 0% | 15% | Pot is too big | g11 |
| A4 | khnd | 9% | 0% | 0% | 15% | Pot is too big | g11 |
| A3 | khnd | 9% | 0% | 0% | 15% | Pot is too big | g11 |
