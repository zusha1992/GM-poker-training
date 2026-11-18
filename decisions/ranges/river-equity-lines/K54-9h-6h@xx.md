# K54-9h-6h@xx river (K♠ 5♥ 4♣ 9♥ 6♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: AK–AT, A8, A7, A4–A2, KQ–KT, K8, K7, K4–K2, QJ, QT, Q8, Q7, JT, J8, J7, T8, T7, 87, 43 | 98% | 99% | 97% | 94% |
| g2 | 25–50bb | Straights | 87 | 91% | 97% | 89% | 75% |
| g3 | 15–25bb | Sets | KK, 99, 66–44 | 89% | 95% | 78% | 76% |
| g4 | 15–25bb | Two pair | K9, K6–K4, 96, 65, 64, 54 | 86% | 84% | 30% | 75% |
| g5 | 0–5bb | Overpair | AA | 79% | 70% | 4% | 73% |
| g6 | 0–5bb | Top pair | AK, KQ–KT, K8, K7, K3, K2 | 80% | 77% | 2% | 74% |
| g7 | 0–5bb | Big pocket pairs | QQ–TT | 72% | 73% | 0% | 67% |
| g8 | 0–5bb | Second pair | A9, Q9, J9, T9, 98, 97 | 68% | 62% | 0% | 64% |
| g9 | 0–5bb | Small pairs | 88, 77, 33, 22, A6–A4, Q6, Q5, 86, 76, 75, 43 | 48% | 29% | 0% | 53% |
| g10 | Pot is too big | Ace-high | AQ–AT, A8, A7, A3, A2 | 25% | 4% | 0% | 33% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| A8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 87+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| AQ+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| AK+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| AJ+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| AT+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| K8+fl | flush | 99% | 99% | 97% | 94% | 50–100bb | g1 |
| K7+fl | flush | 99% | 99% | 97% | 94% | 50–100bb | g1 |
| K2+fl | flush | 98% | 99% | 97% | 93% | 50–100bb | g1 |
| K3+fl | flush | 99% | 99% | 97% | 93% | 50–100bb | g1 |
| K4+fl | flush | 98% | 99% | 97% | 93% | 50–100bb | g1 |
| KT+fl | flush | 99% | 99% | 96% | 93% | 50–100bb | g1 |
| KJ+fl | flush | 98% | 99% | 96% | 92% | 50–100bb | g1 |
| KQ+fl | flush | 98% | 99% | 96% | 92% | 50–100bb | g1 |
| Q8+fl | flush | 97% | 99% | 95% | 91% | 50–100bb | g1 |
| Q7+fl | flush | 97% | 99% | 95% | 91% | 50–100bb | g1 |
| QT+fl | flush | 97% | 98% | 94% | 89% | 50–100bb | g1 |
| QJ+fl | flush | 97% | 98% | 93% | 88% | 50–100bb | g1 |
| J7+fl | flushlo | 96% | 98% | 95% | 87% | 50–100bb | g1 |
| T7+fl | flushlo | 95% | 99% | 94% | 87% | 50–100bb | g1 |
| J8+fl | flushlo | 96% | 99% | 94% | 86% | 50–100bb | g1 |
| 43+fl | flushlo | 96% | 99% | 96% | 86% | 50–100bb | g1 |
| T8+fl | flushlo | 95% | 99% | 95% | 86% | 50–100bb | g1 |
| JT+fl | flushlo | 95% | 98% | 94% | 84% | 50–100bb | g1 |
| 87 | straight | 91% | 97% | 89% | 75% | 50–100bb | g2 |
| KK | twopair | 91% | 98% | 89% | 77% | 50–100bb | g3 |
| 66 | twopair | 89% | 96% | 82% | 76% | 50–100bb | g3 |
| 44 | twopair | 89% | 91% | 61% | 76% | 50–100bb | g3 |
| 55 | twopair | 87% | 93% | 68% | 76% | 50–100bb | g3 |
| 99 | twopair | 89% | 96% | 87% | 75% | 50–100bb | g3 |
| K9 | twopair | 87% | 86% | 43% | 76% | 50–100bb | g4 |
| K6 | twopair | 86% | 86% | 36% | 76% | 50–100bb | g4 |
| 64 | twopair | 82% | 79% | 7% | 75% | 50–100bb | g4 |
| 65 | twopair | 84% | 80% | 12% | 74% | 50–100bb | g4 |
| 54 | twopair | 84% | 78% | 6% | 74% | 50–100bb | g4 |
| 96 | twopair | 84% | 82% | 24% | 74% | 50–100bb | g4 |
| K5 | twopair | 85% | 85% | 34% | 74% | 50–100bb | g4 |
| K4 | twopair | 86% | 86% | 31% | 74% | 50–100bb | g4 |
| AA | op | 79% | 70% | 4% | 73% | 50–100bb | g5 |
| KQ | tpgk | 82% | 77% | 3% | 76% | 50–100bb | g6 |
| KT | tpmk | 79% | 78% | 3% | 75% | 50–100bb | g6 |
| K8 | tpmk | 78% | 76% | 2% | 75% | 50–100bb | g6 |
| KJ | tpmk | 80% | 76% | 2% | 74% | 50–100bb | g6 |
| K7 | tpmk | 78% | 77% | 2% | 74% | 50–100bb | g6 |
| AK | tpgk | 81% | 75% | 3% | 73% | 50–100bb | g6 |
| K3 | tpmk | 77% | 76% | 1% | 71% | 50–100bb | g6 |
| K2 | tpmk | 77% | 77% | 1% | 70% | 50–100bb | g6 |
| TT | pp1 | 71% | 73% | 0% | 67% | 50–100bb | g7 |
| QQ | pp1 | 73% | 73% | 0% | 67% | 50–100bb | g7 |
| JJ | pp1 | 73% | 73% | 0% | 67% | 50–100bb | g7 |
| J9 | mp | 67% | 62% | 0% | 65% | 50–100bb | g8 |
| Q9 | mp | 70% | 65% | 0% | 65% | 50–100bb | g8 |
| A9 | mp | 71% | 67% | 0% | 64% | 50–100bb | g8 |
| T9 | mp | 65% | 58% | 0% | 63% | 50–100bb | g8 |
| 98 | mp | 63% | 55% | 0% | 61% | 50–100bb | g8 |
| 97 | mp | 63% | 52% | 0% | 61% | 50–100bb | g8 |
| 88 | pp2 | 59% | 46% | 0% | 59% | 50–100bb | g9 |
| 77 | pp2 | 57% | 43% | 0% | 59% | 50–100bb | g9 |
| 86 | bp | 54% | 40% | 0% | 56% | 50–100bb | g9 |
| 76 | bp | 54% | 37% | 0% | 56% | 50–100bb | g9 |
| Q6 | bp | 54% | 41% | 0% | 56% | 50–100bb | g9 |
| A6 | bp | 54% | 39% | 0% | 55% | 50–100bb | g9 |
| 75 | bp | 45% | 26% | 0% | 54% | 50–100bb | g9 |
| A5 | bp | 47% | 27% | 0% | 54% | 50–100bb | g9 |
| Q5 | bp | 48% | 26% | 0% | 54% | 50–100bb | g9 |
| A4 | bp | 40% | 17% | 0% | 52% | 50–100bb | g9 |
| 43 | bp | 37% | 16% | 0% | 48% | 0–5bb | g9 |
| 33 | pp3 | 36% | 14% | 0% | 46% | 0–5bb | g9 |
| 22 | pp3 | 34% | 11% | 0% | 45% | 0–5bb | g9 |
| AQ | khnd | 30% | 8% | 0% | 40% | Pot is too big | g10 |
| AJ | khnd | 30% | 8% | 0% | 40% | Pot is too big | g10 |
| AT | khnd | 27% | 8% | 0% | 40% | Pot is too big | g10 |
| A8 | khnd | 25% | 4% | 0% | 34% | Pot is too big | g10 |
| A7 | khnd | 22% | 2% | 0% | 30% | Pot is too big | g10 |
| A2 | khnd | 20% | 0% | 0% | 25% | Pot is too big | g10 |
| A3 | khnd | 20% | 0% | 0% | 23% | Pot is too big | g10 |
