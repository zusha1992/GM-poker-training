# T87-9h-2c@bx river (T♥ 8♥ 7♠ 9♥ 2♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: AK–AJ, A7–A2, KQ, KJ, K7–K2, QJ, Q7–Q5, J7, 76, 75, 65, 64, 54, 43 | 99% | 99% | 99% | 96% |
| g2 | 25–50bb | Straights | JJ, 66, AJ, A6, KJ, K6, QJ, Q6, JT–J7, 96, 86, 76, 65, 64 | 80% | 81% | 77% | 66% |
| g3 | 5–15bb | Sets | 88, 77, 22 | 63% | 53% | 44% | 48% |
| g4 | 0–5bb | Sets | TT, 99 | 61% | 47% | 38% | 47% |
| g5 | 0–5bb | Overpairs | AA–QQ | 53% | 32% | 21% | 47% |
| g6 | 0–5bb | Two pair | T9–T7, 98, 97, 87 | 57% | 41% | 31% | 46% |
| g7 | 0–5bb | Top pair, good kicker | AT, KT, QT | 47% | 25% | 10% | 43% |
| g8 | 0–5bb | Second pair | A9, K9, Q9 | 30% | 9% | 0% | 34% |
| g9 | 0–5bb | Small pairs | 55–33, A8, A7, A2, K8, K7, K2, Q8, Q7, 75 | 9% | 1% | 0% | 18% |
| g10 | Pot is too big | Ace-high | AK, AQ, A5–A3 | 3% | 0% | 0% | 5% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AJ+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A7+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 76+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| AQ+fl | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| A6+fl | flush | 99% | 99% | 99% | 98% | 50–100bb | g1 |
| A3+fl | flush | 99% | 99% | 99% | 98% | 50–100bb | g1 |
| A4+fl | flush | 99% | 99% | 99% | 98% | 50–100bb | g1 |
| A5+fl | flush | 99% | 99% | 99% | 98% | 50–100bb | g1 |
| A2+fl | flush | 99% | 99% | 99% | 98% | 50–100bb | g1 |
| K7+fl | flush | 99% | 99% | 99% | 97% | 50–100bb | g1 |
| AK+fl | flush | 99% | 99% | 99% | 97% | 50–100bb | g1 |
| Q7+fl | flush | 99% | 99% | 99% | 97% | 50–100bb | g1 |
| 75+fl | flushlo | 98% | 99% | 99% | 96% | 50–100bb | g1 |
| KJ+fl | flush | 99% | 99% | 99% | 96% | 50–100bb | g1 |
| K6+fl | flush | 98% | 99% | 99% | 96% | 50–100bb | g1 |
| K2+fl | flush | 99% | 99% | 98% | 96% | 50–100bb | g1 |
| KQ+fl | flush | 99% | 99% | 99% | 96% | 50–100bb | g1 |
| K3+fl | flush | 98% | 99% | 99% | 95% | 50–100bb | g1 |
| K4+fl | flush | 98% | 99% | 98% | 95% | 50–100bb | g1 |
| K5+fl | flush | 98% | 99% | 98% | 95% | 50–100bb | g1 |
| Q6+fl | flush | 98% | 100% | 99% | 94% | 50–100bb | g1 |
| Q5+fl | flush | 98% | 99% | 99% | 92% | 50–100bb | g1 |
| 54+fl | flushlo | 96% | 98% | 98% | 90% | 50–100bb | g1 |
| 64+fl | flushlo | 96% | 99% | 99% | 89% | 50–100bb | g1 |
| 65+fl | flushlo | 96% | 99% | 99% | 89% | 50–100bb | g1 |
| 43+fl | flushlo | 96% | 98% | 97% | 87% | 50–100bb | g1 |
| QJ | straight | 92% | 96% | 96% | 81% | 50–100bb | g2 |
| JJ | straight | 88% | 90% | 88% | 73% | 50–100bb | g2 |
| JT | straight | 84% | 86% | 83% | 71% | 50–100bb | g2 |
| J9 | straight | 84% | 87% | 84% | 70% | 50–100bb | g2 |
| AJ | straight | 84% | 87% | 85% | 70% | 50–100bb | g2 |
| KJ | straight | 85% | 87% | 85% | 70% | 50–100bb | g2 |
| J8 | straight | 84% | 86% | 84% | 69% | 50–100bb | g2 |
| J7 | straight | 84% | 87% | 84% | 68% | 50–100bb | g2 |
| Q6 | straight | 70% | 66% | 60% | 57% | 50–100bb | g2 |
| 66 | straight | 72% | 67% | 61% | 57% | 50–100bb | g2 |
| 96 | straight | 70% | 64% | 58% | 57% | 50–100bb | g2 |
| 65 | straight | 70% | 65% | 58% | 56% | 50–100bb | g2 |
| 86 | straight | 69% | 64% | 59% | 56% | 50–100bb | g2 |
| 64 | straight | 71% | 66% | 59% | 56% | 50–100bb | g2 |
| A6 | straight | 70% | 68% | 60% | 56% | 50–100bb | g2 |
| K6 | straight | 70% | 65% | 59% | 56% | 50–100bb | g2 |
| 76 | straight | 70% | 66% | 58% | 53% | 50–100bb | g2 |
| 77 | twopair | 63% | 53% | 44% | 48% | 5–15bb | g3 |
| 22 | twopair | 64% | 53% | 46% | 49% | 5–15bb | g3 |
| 88 | twopair | 61% | 53% | 43% | 46% | 5–15bb | g3 |
| 99 | twopair | 61% | 49% | 42% | 47% | 0–5bb | g4 |
| TT | twopair | 61% | 46% | 33% | 47% | 0–5bb | g4 |
| KK | op | 52% | 31% | 20% | 44% | 0–5bb | g5 |
| AA | op | 52% | 32% | 22% | 45% | 0–5bb | g5 |
| QQ | op | 54% | 33% | 22% | 52% | 50–100bb | g5 |
| T9 | twopair | 59% | 45% | 35% | 47% | 0–5bb | g6 |
| T8 | twopair | 58% | 42% | 29% | 47% | 0–5bb | g6 |
| T7 | twopair | 57% | 41% | 27% | 44% | 0–5bb | g6 |
| 98 | twopair | 57% | 39% | 31% | 47% | 0–5bb | g6 |
| 97 | twopair | 55% | 39% | 29% | 44% | 0–5bb | g6 |
| 87 | twopair | 55% | 37% | 27% | 46% | 0–5bb | g6 |
| AT | tpgk | 50% | 30% | 16% | 44% | 0–5bb | g7 |
| KT | tpgk | 47% | 24% | 10% | 41% | 0–5bb | g7 |
| QT | tpmk | 45% | 20% | 4% | 42% | 0–5bb | g7 |
| A9 | mp | 32% | 12% | 0% | 35% | 0–5bb | g8 |
| K9 | mp | 28% | 8% | 0% | 33% | 0–5bb | g8 |
| Q9 | mp | 27% | 7% | 0% | 33% | 0–5bb | g8 |
| A8 | bp | 19% | 3% | 0% | 30% | 0–5bb | g9 |
| K8 | bp | 16% | 2% | 0% | 26% | 0–5bb | g9 |
| Q8 | bp | 15% | 1% | 0% | 26% | 0–5bb | g9 |
| A7 | bp | 9% | 0% | 0% | 22% | 0–5bb | g9 |
| K7 | bp | 8% | 0% | 0% | 18% | 0–5bb | g9 |
| Q7 | bp | 6% | 0% | 0% | 14% | 0–5bb | g9 |
| 75 | bp | 5% | 0% | 0% | 13% | 0–5bb | g9 |
| A2 | bp | 5% | 0% | 0% | 8% | 0–5bb | g9 |
| 33 | pp3 | 4% | 0% | 0% | 8% | 0–5bb | g9 |
| 44 | pp3 | 4% | 0% | 0% | 9% | 0–5bb | g9 |
| 55 | pp3 | 4% | 0% | 0% | 9% | 0–5bb | g9 |
| K2 | bp | 4% | 0% | 0% | 6% | 0–5bb | g9 |
| AQ | khnd | 3% | 0% | 0% | 5% | Pot is too big | g10 |
| AK | khnd | 3% | 0% | 0% | 5% | Pot is too big | g10 |
| A4 | khnd | 3% | 0% | 0% | 4% | Pot is too big | g10 |
| A3 | khnd | 3% | 0% | 0% | 4% | Pot is too big | g10 |
| A5 | khnd | 3% | 0% | 0% | 5% | Pot is too big | g10 |
