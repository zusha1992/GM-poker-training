# K54-9h-6h@xx river (K♠ 5♥ 4♣ 9♥ 6♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: AK–AT, A8, A7, A4–A2, KQ–KT, K8, K7, K4–K2, QJ, QT, Q8, Q7, JT, J8, J7, T8, T7, 87, 43 | 98% | 99% | 97% | 93% |
| g2 | 25–50bb | Straights | 87 | 91% | 97% | 90% | 76% |
| g3 | 15–25bb | Sets | KK, 99, 66–44 | 89% | 95% | 77% | 77% |
| g4 | 15–25bb | Two pair | K9, K6–K4, 96, 65, 64, 54 | 85% | 85% | 30% | 75% |
| g5 | 0–5bb | Overpair | AA | 79% | 70% | 4% | 74% |
| g6 | 0–5bb | Top pair | AK, KQ–KT, K8, K7, K3, K2 | 80% | 76% | 2% | 74% |
| g7 | 0–5bb | Big pocket pairs | QQ–TT | 72% | 73% | 0% | 67% |
| g8 | 0–5bb | Second pair | A9, Q9, J9, T9, 98, 97 | 67% | 63% | 0% | 64% |
| g9 | 0–5bb | Small pairs | 88, 77, 33, 22, A6–A4, Q6, Q5, 86, 76, 75, 43 | 48% | 29% | 0% | 54% |
| g10 | Pot is too big | Ace-high | AQ–AT, A8, A7, A3, A2 | 25% | 4% | 0% | 33% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| A8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 87+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| AQ+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| AJ+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| AT+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| AK+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| K7+fl | flush | 99% | 99% | 97% | 94% | 50–100bb | g1 |
| K3+fl | flush | 99% | 99% | 96% | 93% | 50–100bb | g1 |
| K8+fl | flush | 99% | 99% | 97% | 93% | 50–100bb | g1 |
| KT+fl | flush | 99% | 99% | 96% | 93% | 50–100bb | g1 |
| K2+fl | flush | 99% | 99% | 97% | 93% | 50–100bb | g1 |
| K4+fl | flush | 98% | 99% | 97% | 92% | 50–100bb | g1 |
| KQ+fl | flush | 98% | 99% | 96% | 92% | 50–100bb | g1 |
| KJ+fl | flush | 98% | 99% | 96% | 92% | 50–100bb | g1 |
| Q7+fl | flush | 97% | 98% | 94% | 91% | 50–100bb | g1 |
| Q8+fl | flush | 97% | 98% | 95% | 90% | 50–100bb | g1 |
| QT+fl | flush | 97% | 98% | 94% | 88% | 50–100bb | g1 |
| QJ+fl | flush | 97% | 99% | 94% | 88% | 50–100bb | g1 |
| J8+fl | flushlo | 96% | 98% | 94% | 87% | 50–100bb | g1 |
| J7+fl | flushlo | 96% | 99% | 94% | 87% | 50–100bb | g1 |
| T7+fl | flushlo | 95% | 98% | 95% | 86% | 50–100bb | g1 |
| 43+fl | flushlo | 95% | 99% | 96% | 86% | 50–100bb | g1 |
| T8+fl | flushlo | 95% | 99% | 95% | 86% | 50–100bb | g1 |
| JT+fl | flushlo | 95% | 98% | 94% | 84% | 50–100bb | g1 |
| 87 | straight | 91% | 97% | 90% | 76% | 50–100bb | g2 |
| 44 | twopair | 89% | 91% | 61% | 77% | 50–100bb | g3 |
| KK | twopair | 90% | 98% | 89% | 77% | 50–100bb | g3 |
| 99 | twopair | 89% | 97% | 87% | 76% | 50–100bb | g3 |
| 55 | twopair | 88% | 92% | 68% | 76% | 50–100bb | g3 |
| 66 | twopair | 89% | 96% | 82% | 76% | 50–100bb | g3 |
| K6 | twopair | 86% | 87% | 36% | 76% | 50–100bb | g4 |
| K9 | twopair | 86% | 87% | 43% | 75% | 50–100bb | g4 |
| 96 | twopair | 83% | 82% | 24% | 75% | 50–100bb | g4 |
| K5 | twopair | 85% | 85% | 34% | 75% | 50–100bb | g4 |
| 54 | twopair | 83% | 77% | 5% | 74% | 50–100bb | g4 |
| 65 | twopair | 84% | 81% | 12% | 74% | 50–100bb | g4 |
| 64 | twopair | 83% | 80% | 7% | 74% | 50–100bb | g4 |
| K4 | twopair | 85% | 85% | 31% | 73% | 50–100bb | g4 |
| AA | op | 79% | 70% | 4% | 74% | 50–100bb | g5 |
| K8 | tpmk | 78% | 77% | 3% | 76% | 50–100bb | g6 |
| KT | tpmk | 78% | 76% | 3% | 75% | 50–100bb | g6 |
| KQ | tpgk | 81% | 77% | 3% | 75% | 50–100bb | g6 |
| KJ | tpmk | 80% | 77% | 2% | 75% | 50–100bb | g6 |
| K7 | tpmk | 77% | 76% | 2% | 74% | 50–100bb | g6 |
| AK | tpgk | 83% | 76% | 2% | 74% | 50–100bb | g6 |
| K3 | tpmk | 77% | 76% | 1% | 71% | 50–100bb | g6 |
| K2 | tpmk | 77% | 76% | 1% | 71% | 50–100bb | g6 |
| QQ | pp1 | 72% | 73% | 0% | 68% | 50–100bb | g7 |
| TT | pp1 | 72% | 74% | 0% | 67% | 50–100bb | g7 |
| JJ | pp1 | 72% | 72% | 0% | 67% | 50–100bb | g7 |
| Q9 | mp | 69% | 66% | 0% | 65% | 50–100bb | g8 |
| A9 | mp | 70% | 69% | 0% | 65% | 50–100bb | g8 |
| J9 | mp | 68% | 61% | 0% | 64% | 50–100bb | g8 |
| T9 | mp | 65% | 58% | 0% | 64% | 50–100bb | g8 |
| 97 | mp | 63% | 52% | 0% | 62% | 50–100bb | g8 |
| 98 | mp | 64% | 55% | 0% | 62% | 50–100bb | g8 |
| 88 | pp2 | 59% | 46% | 0% | 62% | 50–100bb | g9 |
| 77 | pp2 | 57% | 43% | 0% | 60% | 50–100bb | g9 |
| 86 | bp | 53% | 39% | 0% | 58% | 50–100bb | g9 |
| 76 | bp | 52% | 38% | 0% | 57% | 50–100bb | g9 |
| Q6 | bp | 55% | 41% | 0% | 56% | 50–100bb | g9 |
| A6 | bp | 56% | 39% | 0% | 55% | 50–100bb | g9 |
| A5 | bp | 47% | 27% | 0% | 55% | 50–100bb | g9 |
| 75 | bp | 46% | 25% | 0% | 55% | 50–100bb | g9 |
| Q5 | bp | 46% | 27% | 0% | 53% | 50–100bb | g9 |
| A4 | bp | 40% | 18% | 0% | 51% | 50–100bb | g9 |
| 43 | bp | 38% | 15% | 0% | 47% | 0–5bb | g9 |
| 33 | pp3 | 38% | 14% | 0% | 45% | 0–5bb | g9 |
| 22 | pp3 | 35% | 11% | 0% | 45% | 0–5bb | g9 |
| AQ | khnd | 31% | 9% | 0% | 42% | Pot is too big | g10 |
| AJ | khnd | 29% | 8% | 0% | 40% | Pot is too big | g10 |
| AT | khnd | 26% | 7% | 0% | 38% | Pot is too big | g10 |
| A8 | khnd | 25% | 4% | 0% | 33% | Pot is too big | g10 |
| A7 | khnd | 23% | 2% | 0% | 30% | Pot is too big | g10 |
| A2 | khnd | 20% | 0% | 0% | 23% | Pot is too big | g10 |
| A3 | khnd | 20% | 0% | 0% | 24% | Pot is too big | g10 |
