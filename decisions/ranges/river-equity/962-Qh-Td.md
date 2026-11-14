# 962-Qh-Td river (9♦ 6♦ 2♥ Q♥ T♦): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes, straights & sets | QQ, TT, 99, 66, 22, KJ, J8, 87 · ♦ flushes: AK–AJ, A8, A7, A5–A2, KQ, KJ, K8, K7, K5–K2, QJ, Q8, Q7, Q5, J8, J7, 87, 75, 54, 43 | 93% | 96% | 89% | 85% |
| g2 | 50–100bb | Overpairs | AA, KK | 78% | 73% | 21% | 51% |
| g3 | 50–100bb | Two pair | QT, Q9, Q6, T9, 96 | 85% | 86% | 57% | 66% |
| g4 | 50–100bb | Top pair, good kicker | AQ, KQ | 79% | 74% | 15% | 51% |
| g5 | 15–25bb | Top pair | QJ, Q8, Q7, Q5 | 76% | 71% | 4% | 46% |
| g6 | 15–25bb | Big pocket pairs | JJ | 73% | 64% | 0% | 43% |
| g7 | 15–25bb | Second pair | AT, KT, JT, T8, T7 | 72% | 67% | 0% | 45% |
| g8 | 0–5bb | Small pairs | A9, K9, J9 | 60% | 44% | 0% | 37% |
| g9 | Pot is too big | Small pairs | 88, 77, 55–33, A6, A2, K6, K2, 98, 97, 86, 76, 65, 64 | 24% | 8% | 0% | 21% |
| g10 | Pot is too big | Ace-high | AK, AJ, A8, A7, A5–A3 | 3% | 0% | 0% | 4% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| A8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 87+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AQ+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| AK+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| AJ+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| K2+fl | flush | 99% | 100% | 99% | 98% | 50–100bb | g1 |
| K8+fl | flush | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| K7+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| K3+fl | flush | 98% | 100% | 98% | 98% | 50–100bb | g1 |
| K4+fl | flush | 98% | 100% | 99% | 97% | 50–100bb | g1 |
| K5+fl | flush | 98% | 100% | 98% | 97% | 50–100bb | g1 |
| KQ+fl | flush | 98% | 100% | 98% | 97% | 50–100bb | g1 |
| KJ+fl | flush | 98% | 99% | 99% | 97% | 50–100bb | g1 |
| Q7+fl | flush | 97% | 100% | 98% | 95% | 50–100bb | g1 |
| Q8+fl | flush | 97% | 99% | 98% | 95% | 50–100bb | g1 |
| QJ+fl | flush | 97% | 99% | 98% | 95% | 50–100bb | g1 |
| J7+fl | flushlo | 96% | 99% | 96% | 94% | 50–100bb | g1 |
| Q5+fl | flush | 96% | 99% | 97% | 94% | 50–100bb | g1 |
| J8+fl | flushlo | 96% | 99% | 95% | 94% | 50–100bb | g1 |
| 75+fl | flushlo | 95% | 97% | 93% | 91% | 50–100bb | g1 |
| 43+fl | flushlo | 94% | 97% | 93% | 89% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 97% | 92% | 89% | 50–100bb | g1 |
| KJ | straight | 91% | 96% | 90% | 83% | 50–100bb | g1 |
| J8 | straight | 90% | 95% | 86% | 77% | 50–100bb | g1 |
| 87 | straight | 89% | 94% | 82% | 76% | 50–100bb | g1 |
| 22 | twopair | 91% | 93% | 78% | 75% | 50–100bb | g1 |
| 66 | twopair | 86% | 91% | 74% | 71% | 50–100bb | g1 |
| QQ | twopair | 88% | 92% | 72% | 71% | 50–100bb | g1 |
| TT | twopair | 87% | 91% | 66% | 71% | 50–100bb | g1 |
| 99 | twopair | 86% | 88% | 69% | 68% | 50–100bb | g1 |
| KK | op | 78% | 73% | 19% | 51% | 50–100bb | g2 |
| AA | op | 78% | 74% | 23% | 51% | 50–100bb | g2 |
| QT | twopair | 87% | 91% | 66% | 70% | 50–100bb | g3 |
| Q6 | twopair | 86% | 89% | 63% | 70% | 50–100bb | g3 |
| Q9 | twopair | 86% | 88% | 64% | 68% | 50–100bb | g3 |
| T9 | twopair | 82% | 81% | 45% | 60% | 50–100bb | g3 |
| 96 | twopair | 77% | 72% | 28% | 50% | 50–100bb | g3 |
| KQ | tpgk | 79% | 73% | 13% | 51% | 50–100bb | g4 |
| AQ | tpgk | 80% | 74% | 18% | 51% | 50–100bb | g4 |
| Q7 | tpmk | 75% | 71% | 1% | 46% | 15–25bb | g5 |
| QJ | tpmk | 77% | 71% | 5% | 46% | 15–25bb | g5 |
| Q5 | tpmk | 75% | 71% | 1% | 45% | 15–25bb | g5 |
| Q8 | tpmk | 76% | 70% | 2% | 45% | 15–25bb | g5 |
| JJ | pp1 | 73% | 64% | 0% | 43% | 15–25bb | g6 |
| KT | mp | 73% | 68% | 0% | 45% | 15–25bb | g7 |
| AT | mp | 72% | 67% | 0% | 45% | 15–25bb | g7 |
| JT | mp | 72% | 66% | 0% | 45% | 15–25bb | g7 |
| T8 | mp | 71% | 66% | 0% | 45% | 15–25bb | g7 |
| T7 | mp | 71% | 63% | 0% | 45% | 15–25bb | g7 |
| K9 | bp | 60% | 44% | 0% | 39% | 0–5bb | g8 |
| J9 | bp | 54% | 32% | 0% | 33% | 0–5bb | g8 |
| A9 | bp | 64% | 51% | 0% | 39% | 5–15bb | g8 |
| 98 | bp | 49% | 24% | 0% | 29% | Pot is too big | g9 |
| 97 | bp | 46% | 23% | 0% | 30% | Pot is too big | g9 |
| 88 | pp3 | 41% | 17% | 0% | 26% | Pot is too big | g9 |
| 77 | pp3 | 38% | 17% | 0% | 23% | Pot is too big | g9 |
| A6 | bp | 30% | 12% | 0% | 22% | Pot is too big | g9 |
| K6 | bp | 29% | 11% | 0% | 23% | Pot is too big | g9 |
| 86 | bp | 25% | 7% | 0% | 21% | Pot is too big | g9 |
| 76 | bp | 21% | 5% | 0% | 20% | Pot is too big | g9 |
| 65 | bp | 19% | 5% | 0% | 19% | Pot is too big | g9 |
| 64 | bp | 17% | 3% | 0% | 19% | Pot is too big | g9 |
| 33 | pp3 | 13% | 1% | 0% | 20% | Pot is too big | g9 |
| 44 | pp3 | 13% | 1% | 0% | 18% | Pot is too big | g9 |
| 55 | pp3 | 13% | 1% | 0% | 18% | Pot is too big | g9 |
| A2 | bp | 10% | 1% | 0% | 14% | Pot is too big | g9 |
| K2 | bp | 8% | 0% | 0% | 11% | Pot is too big | g9 |
| AJ | khnd | 5% | 0% | 0% | 5% | Pot is too big | g10 |
| AK | khnd | 4% | 0% | 0% | 5% | Pot is too big | g10 |
| A8 | khnd | 4% | 0% | 0% | 4% | Pot is too big | g10 |
| A7 | khnd | 3% | 0% | 0% | 4% | Pot is too big | g10 |
| A4 | khnd | 3% | 0% | 0% | 2% | Pot is too big | g10 |
| A5 | khnd | 3% | 0% | 0% | 3% | Pot is too big | g10 |
| A3 | khnd | 3% | 0% | 0% | 3% | Pot is too big | g10 |
