# 962-Qh-Td river (9♦ 6♦ 2♥ Q♥ T♦): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes, straights & sets | QQ, TT, 99, 66, 22, KJ, J8, 87 · ♦ flushes: AK–AJ, A8, A7, A5–A2, KQ, KJ, K8, K7, K5–K2, QJ, Q8, Q7, Q5, J8, J7, 87, 75, 54, 43 | 93% | 96% | 88% | 86% |
| g2 | 15–25bb | Two pair | QT, Q9, Q6, T9, 96 | 85% | 86% | 57% | 65% |
| g3 | 0–5bb | Overpairs | AA, KK | 79% | 73% | 21% | 50% |
| g4 | 0–5bb | Top pair | AQ, KQ, QJ, Q8, Q7, Q5 | 78% | 73% | 10% | 49% |
| g5 | 0–5bb | Big pocket pairs | JJ | 73% | 65% | 0% | 42% |
| g6 | 0–5bb | Second pair | AT, KT, JT, T8, T7 | 73% | 67% | 0% | 45% |
| g7 | 0–5bb | Small pairs | 88, 77, 55–33, A9, A6, A2, K9, K6, K2, J9, 98, 97, 86, 76, 65, 64 | 34% | 18% | 0% | 25% |
| g8 | Pot is too big | Ace-high | AK, AJ, A8, A7, A5–A3 | 3% | 0% | 0% | 4% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| A8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 87+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| AK+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| AJ+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| AQ+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| K2+fl | flush | 99% | 100% | 99% | 98% | 50–100bb | g1 |
| K8+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| K7+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| K3+fl | flush | 98% | 100% | 99% | 98% | 50–100bb | g1 |
| KJ+fl | flush | 98% | 99% | 98% | 97% | 50–100bb | g1 |
| K4+fl | flush | 98% | 99% | 99% | 97% | 50–100bb | g1 |
| KQ+fl | flush | 98% | 99% | 98% | 97% | 50–100bb | g1 |
| K5+fl | flush | 98% | 100% | 99% | 97% | 50–100bb | g1 |
| Q7+fl | flush | 97% | 99% | 98% | 95% | 50–100bb | g1 |
| Q8+fl | flush | 97% | 99% | 98% | 95% | 50–100bb | g1 |
| J8+fl | flushlo | 97% | 98% | 95% | 95% | 50–100bb | g1 |
| QJ+fl | flush | 97% | 99% | 98% | 95% | 50–100bb | g1 |
| J7+fl | flushlo | 96% | 99% | 95% | 94% | 50–100bb | g1 |
| Q5+fl | flush | 97% | 99% | 97% | 94% | 50–100bb | g1 |
| 75+fl | flushlo | 95% | 98% | 92% | 91% | 50–100bb | g1 |
| 54+fl | flushlo | 94% | 97% | 92% | 90% | 50–100bb | g1 |
| 43+fl | flushlo | 93% | 97% | 92% | 89% | 50–100bb | g1 |
| KJ | straight | 91% | 97% | 90% | 83% | 50–100bb | g1 |
| J8 | straight | 90% | 95% | 86% | 77% | 50–100bb | g1 |
| 87 | straight | 90% | 94% | 82% | 76% | 50–100bb | g1 |
| 22 | twopair | 91% | 93% | 78% | 75% | 50–100bb | g1 |
| QQ | twopair | 88% | 92% | 70% | 71% | 50–100bb | g1 |
| 66 | twopair | 86% | 91% | 75% | 71% | 50–100bb | g1 |
| TT | twopair | 87% | 91% | 65% | 70% | 50–100bb | g1 |
| 99 | twopair | 86% | 87% | 70% | 69% | 50–100bb | g1 |
| QT | twopair | 87% | 91% | 66% | 70% | 50–100bb | g2 |
| Q6 | twopair | 86% | 89% | 64% | 69% | 50–100bb | g2 |
| Q9 | twopair | 86% | 89% | 63% | 67% | 50–100bb | g2 |
| T9 | twopair | 83% | 81% | 45% | 59% | 50–100bb | g2 |
| 96 | twopair | 76% | 72% | 26% | 50% | 50–100bb | g2 |
| AA | op | 79% | 72% | 23% | 49% | 15–25bb | g3 |
| KK | op | 79% | 74% | 19% | 51% | 50–100bb | g3 |
| AQ | tpgk | 80% | 75% | 19% | 50% | 15–25bb | g4 |
| QJ | tpmk | 77% | 72% | 5% | 48% | 15–25bb | g4 |
| Q7 | tpmk | 75% | 71% | 1% | 45% | 15–25bb | g4 |
| Q8 | tpmk | 75% | 70% | 2% | 45% | 15–25bb | g4 |
| Q5 | tpmk | 75% | 70% | 1% | 44% | 15–25bb | g4 |
| KQ | tpgk | 79% | 73% | 13% | 51% | 50–100bb | g4 |
| JJ | pp1 | 73% | 65% | 0% | 42% | 15–25bb | g5 |
| AT | mp | 73% | 68% | 0% | 44% | 15–25bb | g6 |
| KT | mp | 74% | 67% | 0% | 45% | 15–25bb | g6 |
| T8 | mp | 71% | 66% | 0% | 43% | 15–25bb | g6 |
| JT | mp | 74% | 65% | 0% | 46% | 15–25bb | g6 |
| T7 | mp | 70% | 63% | 0% | 44% | 15–25bb | g6 |
| K9 | bp | 59% | 44% | 0% | 38% | 0–5bb | g7 |
| J9 | bp | 55% | 32% | 0% | 33% | 0–5bb | g7 |
| A9 | bp | 63% | 51% | 0% | 41% | 5–15bb | g7 |
| 98 | bp | 49% | 25% | 0% | 29% | 0–5bb | g7 |
| 97 | bp | 49% | 23% | 0% | 30% | 0–5bb | g7 |
| 88 | pp3 | 42% | 18% | 0% | 25% | 0–5bb | g7 |
| 77 | pp3 | 37% | 17% | 0% | 23% | 0–5bb | g7 |
| A6 | bp | 30% | 13% | 0% | 22% | 0–5bb | g7 |
| K6 | bp | 28% | 11% | 0% | 23% | 0–5bb | g7 |
| 86 | bp | 24% | 7% | 0% | 21% | 0–5bb | g7 |
| 76 | bp | 22% | 5% | 0% | 20% | 0–5bb | g7 |
| 65 | bp | 19% | 5% | 0% | 18% | 0–5bb | g7 |
| 64 | bp | 19% | 4% | 0% | 19% | 0–5bb | g7 |
| 55 | pp3 | 13% | 1% | 0% | 18% | 0–5bb | g7 |
| 44 | pp3 | 13% | 1% | 0% | 19% | 0–5bb | g7 |
| 33 | pp3 | 13% | 1% | 0% | 19% | 0–5bb | g7 |
| A2 | bp | 9% | 1% | 0% | 14% | 0–5bb | g7 |
| K2 | bp | 8% | 0% | 0% | 11% | 0–5bb | g7 |
| AJ | khnd | 4% | 0% | 0% | 5% | Pot is too big | g8 |
| AK | khnd | 4% | 0% | 0% | 5% | Pot is too big | g8 |
| A8 | khnd | 4% | 0% | 0% | 4% | Pot is too big | g8 |
| A7 | khnd | 4% | 0% | 0% | 3% | Pot is too big | g8 |
| A3 | khnd | 2% | 0% | 0% | 3% | Pot is too big | g8 |
| A4 | khnd | 2% | 0% | 0% | 2% | Pot is too big | g8 |
| A5 | khnd | 2% | 0% | 0% | 3% | Pot is too big | g8 |
