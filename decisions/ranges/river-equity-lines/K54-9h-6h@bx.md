# K54-9h-6h@bx river (K♠ 5♥ 4♣ 9♥ 6♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: AK–AT, A8, A7, A4–A2, KQ–KT, K8, K7, K4–K2, QJ, QT, Q8, Q7, JT, J8, J7, T8, T7, 87, 43 | 98% | 99% | 97% | 94% |
| g2 | 25–50bb | Straights | 87 | 90% | 94% | 86% | 73% |
| g3 | 15–25bb | Sets | KK, 99, 66–44 | 90% | 91% | 80% | 71% |
| g4 | 15–25bb | Two pair | K9, K6–K4, 96, 65, 64, 54 | 86% | 83% | 56% | 65% |
| g5 | 0–5bb | Overpair | AA | 79% | 70% | 39% | 63% |
| g6 | 0–5bb | Top pair | AK, KQ–KT, K8, K7, K3, K2 | 78% | 71% | 23% | 64% |
| g7 | 0–5bb | Big pocket pairs | QQ–TT | 66% | 56% | 0% | 50% |
| g8 | 0–5bb | Second pair | A9, Q9, J9, T9, 98, 97 | 63% | 51% | 0% | 51% |
| g9 | 0–5bb | Small pairs | 88, 77, 33, 22, A6–A4, Q6, Q5, 86, 76, 75, 43 | 45% | 29% | 0% | 42% |
| g10 | Pot is too big | Ace-high | AQ–AT, A8, A7, A3, A2 | 9% | 1% | 0% | 14% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| A8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 87+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AK+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AQ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K8+fl | flush | 98% | 100% | 99% | 94% | 50–100bb | g1 |
| K7+fl | flush | 98% | 99% | 99% | 94% | 50–100bb | g1 |
| K2+fl | flush | 98% | 100% | 98% | 94% | 50–100bb | g1 |
| KJ+fl | flush | 98% | 100% | 98% | 93% | 50–100bb | g1 |
| KT+fl | flush | 98% | 99% | 98% | 93% | 50–100bb | g1 |
| K3+fl | flush | 98% | 99% | 98% | 93% | 50–100bb | g1 |
| KQ+fl | flush | 97% | 100% | 98% | 93% | 50–100bb | g1 |
| K4+fl | flush | 98% | 100% | 100% | 93% | 50–100bb | g1 |
| Q7+fl | flush | 96% | 97% | 91% | 90% | 50–100bb | g1 |
| Q8+fl | flush | 96% | 97% | 92% | 89% | 50–100bb | g1 |
| 43+fl | flushlo | 95% | 97% | 93% | 88% | 50–100bb | g1 |
| QT+fl | flush | 96% | 96% | 91% | 88% | 50–100bb | g1 |
| QJ+fl | flush | 95% | 96% | 91% | 87% | 50–100bb | g1 |
| J7+fl | flushlo | 95% | 97% | 92% | 87% | 50–100bb | g1 |
| J8+fl | flushlo | 95% | 97% | 93% | 86% | 50–100bb | g1 |
| JT+fl | flushlo | 96% | 96% | 90% | 85% | 50–100bb | g1 |
| T8+fl | flushlo | 95% | 96% | 91% | 85% | 50–100bb | g1 |
| T7+fl | flushlo | 94% | 96% | 92% | 85% | 50–100bb | g1 |
| 87 | straight | 90% | 94% | 86% | 73% | 50–100bb | g2 |
| 44 | twopair | 89% | 88% | 75% | 72% | 50–100bb | g3 |
| 55 | twopair | 86% | 86% | 72% | 71% | 50–100bb | g3 |
| KK | twopair | 91% | 96% | 86% | 71% | 50–100bb | g3 |
| 66 | twopair | 90% | 93% | 80% | 71% | 50–100bb | g3 |
| 99 | twopair | 91% | 94% | 85% | 70% | 50–100bb | g3 |
| K9 | twopair | 87% | 86% | 64% | 68% | 50–100bb | g4 |
| K6 | twopair | 87% | 85% | 58% | 66% | 50–100bb | g4 |
| 96 | twopair | 87% | 84% | 63% | 66% | 50–100bb | g4 |
| 65 | twopair | 84% | 79% | 51% | 64% | 50–100bb | g4 |
| K5 | twopair | 84% | 78% | 46% | 63% | 50–100bb | g4 |
| 54 | twopair | 80% | 74% | 42% | 61% | 50–100bb | g4 |
| 64 | twopair | 84% | 79% | 49% | 60% | 50–100bb | g4 |
| K4 | twopair | 84% | 80% | 47% | 58% | 50–100bb | g4 |
| AA | op | 79% | 70% | 39% | 63% | 50–100bb | g5 |
| KT | tpmk | 76% | 70% | 20% | 65% | 50–100bb | g6 |
| KQ | tpgk | 82% | 75% | 31% | 65% | 50–100bb | g6 |
| KJ | tpmk | 78% | 73% | 26% | 65% | 50–100bb | g6 |
| AK | tpgk | 82% | 73% | 34% | 64% | 50–100bb | g6 |
| K8 | tpmk | 74% | 68% | 14% | 64% | 50–100bb | g6 |
| K7 | tpmk | 72% | 67% | 9% | 63% | 50–100bb | g6 |
| K2 | tpmk | 70% | 64% | 3% | 57% | 50–100bb | g6 |
| K3 | tpmk | 71% | 62% | 3% | 57% | 50–100bb | g6 |
| TT | pp1 | 66% | 56% | 0% | 48% | 5–15bb | g7 |
| QQ | pp1 | 66% | 57% | 0% | 50% | 50–100bb | g7 |
| JJ | pp1 | 66% | 56% | 0% | 50% | 50–100bb | g7 |
| A9 | mp | 64% | 53% | 0% | 49% | 5–15bb | g8 |
| T9 | mp | 63% | 50% | 0% | 52% | 50–100bb | g8 |
| J9 | mp | 62% | 50% | 0% | 52% | 50–100bb | g8 |
| 98 | mp | 63% | 49% | 0% | 52% | 50–100bb | g8 |
| 97 | mp | 62% | 49% | 0% | 51% | 50–100bb | g8 |
| Q9 | mp | 63% | 50% | 0% | 51% | 50–100bb | g8 |
| 77 | pp2 | 56% | 41% | 0% | 48% | 0–5bb | g9 |
| 86 | bp | 56% | 39% | 0% | 49% | 0–5bb | g9 |
| Q6 | bp | 56% | 41% | 0% | 47% | 0–5bb | g9 |
| 76 | bp | 55% | 40% | 0% | 49% | 0–5bb | g9 |
| A6 | bp | 54% | 40% | 0% | 46% | 0–5bb | g9 |
| 88 | pp2 | 60% | 46% | 0% | 52% | 50–100bb | g9 |
| A5 | bp | 48% | 31% | 0% | 45% | 0–5bb | g9 |
| Q5 | bp | 47% | 30% | 0% | 46% | 0–5bb | g9 |
| 75 | bp | 43% | 26% | 0% | 47% | 0–5bb | g9 |
| A4 | bp | 33% | 18% | 0% | 40% | 0–5bb | g9 |
| 43 | bp | 31% | 12% | 0% | 30% | 0–5bb | g9 |
| 33 | pp3 | 29% | 10% | 0% | 25% | 0–5bb | g9 |
| 22 | pp3 | 24% | 5% | 0% | 25% | 0–5bb | g9 |
| AQ | khnd | 18% | 3% | 0% | 20% | Pot is too big | g10 |
| AJ | khnd | 16% | 2% | 0% | 21% | Pot is too big | g10 |
| AT | khnd | 10% | 1% | 0% | 17% | Pot is too big | g10 |
| A8 | khnd | 7% | 0% | 0% | 13% | Pot is too big | g10 |
| A7 | khnd | 5% | 0% | 0% | 11% | Pot is too big | g10 |
| A2 | khnd | 3% | 0% | 0% | 8% | Pot is too big | g10 |
| A3 | khnd | 3% | 0% | 0% | 8% | Pot is too big | g10 |
