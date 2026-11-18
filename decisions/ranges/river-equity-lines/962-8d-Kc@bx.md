# 962-8d-Kc@bx river (9♦ 6♦ 2♥ 8♦ K♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AK–AT, A7, A5–A2, KQ–KT, K7, K5–K2, QJ, QT, Q7, Q5, JT, J7, T7, 75, 54, 43 | 98% | 99% | 98% | 92% |
| g2 | 25–50bb | Straights | T7, 75 | 92% | 98% | 92% | 69% |
| g3 | 15–25bb | Sets | KK, 99, 88, 66, 22 | 91% | 97% | 89% | 61% |
| g4 | 15–25bb | Two pair | K9, K8, K6, K2, 98, 96, 86 | 87% | 90% | 58% | 53% |
| g5 | 0–5bb | Overpair | AA | 80% | 77% | 24% | 45% |
| g6 | 0–5bb | Top pair | AK, KQ–KT, K7, K5–K3 | 81% | 79% | 9% | 50% |
| g7 | 0–5bb | Big pocket pairs | QQ–TT | 77% | 73% | 0% | 47% |
| g8 | 0–5bb | Second pair | A9, Q9, J9, T9, 97 | 71% | 63% | 0% | 46% |
| g9 | 0–5bb | Small pairs | 77, 55–33, A8, A6, A2, Q8, Q6, J8, T8, 87, 76, 65, 64 | 44% | 24% | 0% | 38% |
| g10 | Pot is too big | Ace-high | AQ–AT, A7, A5–A3 | 12% | 1% | 0% | 15% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| A7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| T7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 75+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 100% | 98% | 50–100bb | g1 |
| AT+fl | flush | 100% | 100% | 100% | 98% | 50–100bb | g1 |
| A4+fl | flush | 99% | 100% | 100% | 96% | 50–100bb | g1 |
| A3+fl | flush | 99% | 100% | 100% | 95% | 50–100bb | g1 |
| AJ+fl | flush | 99% | 100% | 100% | 95% | 50–100bb | g1 |
| AQ+fl | flush | 99% | 100% | 100% | 95% | 50–100bb | g1 |
| K7+fl | flush | 99% | 99% | 97% | 95% | 50–100bb | g1 |
| A2+fl | flush | 99% | 100% | 100% | 95% | 50–100bb | g1 |
| AK+fl | flush | 99% | 100% | 100% | 95% | 50–100bb | g1 |
| KT+fl | flush | 99% | 99% | 97% | 93% | 50–100bb | g1 |
| K5+fl | flush | 98% | 99% | 97% | 92% | 50–100bb | g1 |
| K2+fl | flush | 98% | 100% | 99% | 91% | 50–100bb | g1 |
| K4+fl | flush | 98% | 99% | 97% | 91% | 50–100bb | g1 |
| K3+fl | flush | 98% | 99% | 97% | 90% | 50–100bb | g1 |
| KQ+fl | flush | 98% | 99% | 97% | 90% | 50–100bb | g1 |
| KJ+fl | flush | 98% | 99% | 97% | 90% | 50–100bb | g1 |
| Q7+fl | flush | 97% | 98% | 94% | 90% | 50–100bb | g1 |
| QT+fl | flush | 98% | 98% | 94% | 89% | 50–100bb | g1 |
| Q5+fl | flush | 97% | 98% | 94% | 88% | 50–100bb | g1 |
| J7+fl | flushlo | 97% | 99% | 95% | 88% | 50–100bb | g1 |
| QJ+fl | flush | 97% | 98% | 94% | 86% | 50–100bb | g1 |
| JT+fl | flushlo | 97% | 99% | 95% | 86% | 50–100bb | g1 |
| 54+fl | flushlo | 96% | 98% | 93% | 83% | 50–100bb | g1 |
| 43+fl | flushlo | 95% | 98% | 93% | 79% | 50–100bb | g1 |
| T7 | straight | 92% | 97% | 91% | 70% | 50–100bb | g2 |
| 75 | straight | 92% | 98% | 92% | 67% | 50–100bb | g2 |
| KK | twopair | 91% | 98% | 88% | 62% | 50–100bb | g3 |
| 88 | twopair | 91% | 97% | 88% | 61% | 50–100bb | g3 |
| 99 | twopair | 90% | 97% | 89% | 61% | 50–100bb | g3 |
| 66 | twopair | 89% | 96% | 85% | 60% | 50–100bb | g3 |
| 22 | twopair | 92% | 98% | 92% | 59% | 50–100bb | g3 |
| 96 | twopair | 84% | 84% | 43% | 50% | 15–25bb | g4 |
| K9 | twopair | 89% | 95% | 76% | 56% | 50–100bb | g4 |
| K8 | twopair | 89% | 92% | 62% | 55% | 50–100bb | g4 |
| K2 | twopair | 87% | 89% | 54% | 46% | 25–50bb | g4 |
| K6 | twopair | 87% | 90% | 56% | 53% | 50–100bb | g4 |
| 98 | twopair | 86% | 85% | 47% | 50% | 50–100bb | g4 |
| 86 | twopair | 84% | 83% | 34% | 50% | 50–100bb | g4 |
| AA | op | 80% | 77% | 24% | 45% | 15–25bb | g5 |
| AK | tpgk | 82% | 81% | 22% | 49% | 15–25bb | g6 |
| KJ | tpmk | 82% | 79% | 6% | 50% | 15–25bb | g6 |
| K4 | tpmk | 80% | 77% | 0% | 48% | 15–25bb | g6 |
| K3 | tpmk | 80% | 76% | 0% | 48% | 15–25bb | g6 |
| K5 | tpmk | 80% | 76% | 0% | 50% | 15–25bb | g6 |
| K7 | tpmk | 80% | 77% | 1% | 51% | 50–100bb | g6 |
| KT | tpmk | 79% | 77% | 1% | 50% | 50–100bb | g6 |
| KQ | tpgk | 83% | 81% | 15% | 50% | 50–100bb | g6 |
| QQ | pp1 | 78% | 74% | 0% | 46% | 15–25bb | g7 |
| JJ | pp1 | 76% | 74% | 0% | 47% | 15–25bb | g7 |
| TT | pp1 | 77% | 71% | 0% | 48% | 15–25bb | g7 |
| A9 | mp | 74% | 68% | 0% | 45% | 15–25bb | g8 |
| Q9 | mp | 73% | 65% | 0% | 45% | 15–25bb | g8 |
| J9 | mp | 71% | 61% | 0% | 46% | 15–25bb | g8 |
| T9 | mp | 67% | 56% | 0% | 46% | 5–15bb | g8 |
| 97 | mp | 65% | 52% | 0% | 46% | 5–15bb | g8 |
| Q8 | bp | 59% | 41% | 0% | 42% | 0–5bb | g9 |
| J8 | bp | 59% | 42% | 0% | 41% | 0–5bb | g9 |
| A8 | bp | 59% | 40% | 0% | 42% | 0–5bb | g9 |
| T8 | bp | 59% | 40% | 0% | 44% | 0–5bb | g9 |
| 87 | bp | 58% | 38% | 0% | 42% | 0–5bb | g9 |
| 77 | pp3 | 54% | 32% | 0% | 42% | 0–5bb | g9 |
| Q6 | bp | 48% | 25% | 0% | 36% | 0–5bb | g9 |
| A6 | bp | 47% | 26% | 0% | 36% | 0–5bb | g9 |
| 76 | bp | 44% | 23% | 0% | 40% | 0–5bb | g9 |
| 65 | bp | 41% | 20% | 0% | 37% | 0–5bb | g9 |
| 64 | bp | 40% | 18% | 0% | 36% | 0–5bb | g9 |
| 55 | pp3 | 35% | 14% | 0% | 37% | 0–5bb | g9 |
| 44 | pp3 | 31% | 11% | 0% | 35% | 0–5bb | g9 |
| 33 | pp3 | 28% | 8% | 0% | 35% | 0–5bb | g9 |
| A2 | bp | 23% | 5% | 0% | 33% | 0–5bb | g9 |
| AQ | khnd | 20% | 4% | 0% | 17% | Pot is too big | g10 |
| AJ | khnd | 16% | 3% | 0% | 18% | Pot is too big | g10 |
| AT | khnd | 13% | 2% | 0% | 18% | Pot is too big | g10 |
| A7 | khnd | 11% | 1% | 0% | 15% | Pot is too big | g10 |
| A5 | khnd | 8% | 0% | 0% | 12% | Pot is too big | g10 |
| A4 | khnd | 7% | 0% | 0% | 12% | Pot is too big | g10 |
| A3 | khnd | 7% | 0% | 0% | 11% | Pot is too big | g10 |
