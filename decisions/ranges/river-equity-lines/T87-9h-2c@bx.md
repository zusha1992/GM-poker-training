# T87-9h-2c@bx river (T♥ 8♥ 7♠ 9♥ 2♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: AK–AJ, A7–A2, KQ, KJ, K7–K2, QJ, Q7–Q5, J7, 76, 75, 65, 64, 54, 43 | 99% | 99% | 99% | 96% |
| g2 | 25–50bb | Q-high straights | QJ | 92% | 96% | 95% | 80% |
| g3 | 25–50bb | J-high straights | JJ, AJ, KJ, JT–J7 | 85% | 87% | 85% | 70% |
| g4 | 25–50bb | T-high straights | 66, A6, K6, Q6, 96, 86, 76, 65, 64 | 71% | 67% | 59% | 56% |
| g5 | 5–15bb | Sets | 88, 77, 22 | 64% | 53% | 45% | 47% |
| g6 | 0–5bb | Sets | TT, 99 | 61% | 47% | 37% | 47% |
| g7 | 0–5bb | Overpairs | AA–QQ | 52% | 32% | 21% | 47% |
| g8 | 0–5bb | Two pair | T9–T7, 98, 97, 87 | 57% | 41% | 31% | 46% |
| g9 | 0–5bb | Top pair, good kicker | AT, KT, QT | 46% | 25% | 10% | 43% |
| g10 | 0–5bb | Second pair | A9, K9, Q9 | 30% | 9% | 0% | 34% |
| g11 | 0–5bb | Small pairs | 55–33, A8, A7, A2, K8, K7, K2, Q8, Q7, 75 | 9% | 1% | 0% | 17% |
| g12 | Pot is too big | Ace-high | AK, AQ, A5–A3 | 3% | 0% | 0% | 5% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AJ+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| 76+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A6+fl | flush | 99% | 99% | 99% | 99% | 50–100bb | g1 |
| AQ+fl | flush | 99% | 99% | 99% | 98% | 50–100bb | g1 |
| A3+fl | flush | 99% | 99% | 99% | 98% | 50–100bb | g1 |
| A2+fl | flush | 99% | 99% | 99% | 98% | 50–100bb | g1 |
| A4+fl | flush | 99% | 99% | 99% | 98% | 50–100bb | g1 |
| AK+fl | flush | 99% | 99% | 99% | 98% | 50–100bb | g1 |
| Q7+fl | flush | 99% | 100% | 99% | 97% | 50–100bb | g1 |
| A5+fl | flush | 99% | 99% | 99% | 97% | 50–100bb | g1 |
| K7+fl | flush | 99% | 99% | 99% | 97% | 50–100bb | g1 |
| K6+fl | flush | 98% | 99% | 99% | 96% | 50–100bb | g1 |
| 75+fl | flushlo | 98% | 99% | 99% | 96% | 50–100bb | g1 |
| KJ+fl | flush | 99% | 99% | 99% | 96% | 50–100bb | g1 |
| KQ+fl | flush | 99% | 99% | 99% | 96% | 50–100bb | g1 |
| K2+fl | flush | 98% | 99% | 98% | 96% | 50–100bb | g1 |
| K3+fl | flush | 99% | 98% | 99% | 95% | 50–100bb | g1 |
| K5+fl | flush | 98% | 99% | 99% | 95% | 50–100bb | g1 |
| K4+fl | flush | 98% | 99% | 98% | 95% | 50–100bb | g1 |
| Q6+fl | flush | 98% | 99% | 99% | 93% | 50–100bb | g1 |
| Q5+fl | flush | 98% | 99% | 99% | 93% | 50–100bb | g1 |
| 54+fl | flushlo | 97% | 98% | 98% | 90% | 50–100bb | g1 |
| 65+fl | flushlo | 96% | 99% | 99% | 90% | 50–100bb | g1 |
| 64+fl | flushlo | 96% | 99% | 99% | 90% | 50–100bb | g1 |
| 43+fl | flushlo | 96% | 98% | 97% | 87% | 50–100bb | g1 |
| QJ | straight | 92% | 96% | 95% | 80% | 50–100bb | g2 |
| JJ | straight | 87% | 90% | 88% | 74% | 50–100bb | g3 |
| J8 | straight | 84% | 86% | 84% | 70% | 50–100bb | g3 |
| J9 | straight | 84% | 85% | 84% | 70% | 50–100bb | g3 |
| JT | straight | 84% | 86% | 82% | 70% | 50–100bb | g3 |
| KJ | straight | 85% | 86% | 85% | 70% | 50–100bb | g3 |
| AJ | straight | 84% | 86% | 85% | 69% | 50–100bb | g3 |
| J7 | straight | 84% | 86% | 84% | 68% | 50–100bb | g3 |
| Q6 | straight | 71% | 66% | 59% | 58% | 50–100bb | g4 |
| 66 | straight | 73% | 68% | 60% | 58% | 50–100bb | g4 |
| 65 | straight | 72% | 66% | 60% | 56% | 50–100bb | g4 |
| 64 | straight | 71% | 67% | 58% | 56% | 50–100bb | g4 |
| 96 | straight | 69% | 64% | 57% | 56% | 50–100bb | g4 |
| A6 | straight | 70% | 68% | 60% | 55% | 50–100bb | g4 |
| 86 | straight | 70% | 65% | 57% | 55% | 50–100bb | g4 |
| K6 | straight | 70% | 65% | 59% | 54% | 50–100bb | g4 |
| 76 | straight | 70% | 66% | 57% | 53% | 50–100bb | g4 |
| 77 | twopair | 65% | 54% | 45% | 48% | 5–15bb | g5 |
| 22 | twopair | 65% | 53% | 46% | 48% | 5–15bb | g5 |
| 88 | twopair | 61% | 51% | 44% | 46% | 5–15bb | g5 |
| 99 | twopair | 62% | 48% | 42% | 46% | 0–5bb | g6 |
| TT | twopair | 59% | 46% | 32% | 47% | 0–5bb | g6 |
| KK | op | 53% | 31% | 21% | 45% | 0–5bb | g7 |
| AA | op | 52% | 33% | 21% | 46% | 0–5bb | g7 |
| QQ | op | 52% | 32% | 21% | 51% | 50–100bb | g7 |
| T9 | twopair | 59% | 45% | 35% | 47% | 0–5bb | g8 |
| T7 | twopair | 57% | 41% | 28% | 44% | 0–5bb | g8 |
| 98 | twopair | 57% | 39% | 30% | 46% | 0–5bb | g8 |
| T8 | twopair | 56% | 42% | 30% | 47% | 0–5bb | g8 |
| 97 | twopair | 55% | 37% | 29% | 44% | 0–5bb | g8 |
| 87 | twopair | 54% | 37% | 27% | 43% | 0–5bb | g8 |
| AT | tpgk | 50% | 29% | 16% | 46% | 0–5bb | g9 |
| KT | tpgk | 46% | 25% | 10% | 42% | 0–5bb | g9 |
| QT | tpmk | 43% | 20% | 4% | 42% | 0–5bb | g9 |
| A9 | mp | 31% | 12% | 0% | 36% | 0–5bb | g10 |
| K9 | mp | 30% | 9% | 0% | 32% | 0–5bb | g10 |
| Q9 | mp | 27% | 7% | 0% | 34% | 0–5bb | g10 |
| A8 | bp | 20% | 3% | 0% | 28% | 0–5bb | g11 |
| K8 | bp | 17% | 2% | 0% | 26% | 0–5bb | g11 |
| Q8 | bp | 15% | 1% | 0% | 25% | 0–5bb | g11 |
| A7 | bp | 9% | 0% | 0% | 20% | 0–5bb | g11 |
| K7 | bp | 8% | 0% | 0% | 18% | 0–5bb | g11 |
| 75 | bp | 6% | 0% | 0% | 12% | 0–5bb | g11 |
| Q7 | bp | 6% | 0% | 0% | 15% | 0–5bb | g11 |
| 44 | pp3 | 4% | 0% | 0% | 9% | 0–5bb | g11 |
| A2 | bp | 4% | 0% | 0% | 7% | 0–5bb | g11 |
| 55 | pp3 | 4% | 0% | 0% | 8% | 0–5bb | g11 |
| 33 | pp3 | 4% | 0% | 0% | 8% | 0–5bb | g11 |
| K2 | bp | 3% | 0% | 0% | 7% | 0–5bb | g11 |
| AK | khnd | 3% | 0% | 0% | 5% | Pot is too big | g12 |
| AQ | khnd | 3% | 0% | 0% | 5% | Pot is too big | g12 |
| A5 | khnd | 3% | 0% | 0% | 4% | Pot is too big | g12 |
| A4 | khnd | 3% | 0% | 0% | 5% | Pot is too big | g12 |
| A3 | khnd | 3% | 0% | 0% | 4% | Pot is too big | g12 |
