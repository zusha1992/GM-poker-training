# 962-Qh-Td river (9♦ 6♦ 2♥ Q♥ T♦): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AK–AJ, A8, A7, A5–A2, KQ, KJ, K8, K7, K5–K2, QJ, Q8, Q7, Q5, J8, J7, 87, 75, 54, 43 | 98% | 99% | 98% | 97% |
| g2 | 25–50bb | Straights | KJ, J8, 87 | 91% | 96% | 89% | 82% |
| g3 | 15–25bb | Sets | QQ, TT, 99, 66, 22 | 88% | 91% | 72% | 71% |
| g4 | 15–25bb | Two pair | QT, Q9, Q6, T9, 96 | 85% | 86% | 57% | 65% |
| g5 | 0–5bb | Overpairs | AA, KK | 78% | 72% | 21% | 50% |
| g6 | 0–5bb | Top pair | AQ, KQ, QJ, Q8, Q7, Q5 | 78% | 73% | 10% | 48% |
| g7 | 0–5bb | Big pocket pairs | JJ | 73% | 65% | 0% | 43% |
| g8 | 0–5bb | Second pair | AT, KT, JT, T8, T7 | 72% | 66% | 0% | 45% |
| g9 | 0–5bb | Small pairs | 88, 77, 55–33, A9, A6, A2, K9, K6, K2, J9, 98, 97, 86, 76, 65, 64 | 34% | 18% | 0% | 25% |
| g10 | Pot is too big | Ace-high | AK, AJ, A8, A7, A5–A3 | 3% | 0% | 0% | 4% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| A8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 87+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AQ+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| AJ+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| AK+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| K2+fl | flush | 99% | 100% | 99% | 98% | 50–100bb | g1 |
| K8+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| K7+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| KJ+fl | flush | 98% | 99% | 98% | 97% | 50–100bb | g1 |
| K4+fl | flush | 98% | 99% | 99% | 97% | 50–100bb | g1 |
| K3+fl | flush | 98% | 100% | 98% | 97% | 50–100bb | g1 |
| K5+fl | flush | 98% | 100% | 99% | 97% | 50–100bb | g1 |
| KQ+fl | flush | 98% | 99% | 98% | 97% | 50–100bb | g1 |
| Q7+fl | flush | 97% | 100% | 98% | 96% | 50–100bb | g1 |
| Q8+fl | flush | 97% | 99% | 98% | 95% | 50–100bb | g1 |
| QJ+fl | flush | 97% | 99% | 98% | 94% | 50–100bb | g1 |
| J7+fl | flushlo | 96% | 99% | 95% | 94% | 50–100bb | g1 |
| Q5+fl | flush | 96% | 99% | 97% | 94% | 50–100bb | g1 |
| J8+fl | flushlo | 96% | 99% | 95% | 94% | 50–100bb | g1 |
| 75+fl | flushlo | 95% | 98% | 93% | 91% | 50–100bb | g1 |
| 54+fl | flushlo | 94% | 98% | 92% | 90% | 50–100bb | g1 |
| 43+fl | flushlo | 94% | 97% | 92% | 90% | 50–100bb | g1 |
| KJ | straight | 91% | 96% | 90% | 84% | 50–100bb | g2 |
| J8 | straight | 90% | 95% | 87% | 78% | 50–100bb | g2 |
| 87 | straight | 89% | 94% | 82% | 75% | 50–100bb | g2 |
| 22 | twopair | 91% | 92% | 78% | 75% | 50–100bb | g3 |
| QQ | twopair | 88% | 92% | 71% | 72% | 50–100bb | g3 |
| 66 | twopair | 85% | 91% | 74% | 71% | 50–100bb | g3 |
| TT | twopair | 88% | 90% | 66% | 70% | 50–100bb | g3 |
| 99 | twopair | 87% | 88% | 69% | 68% | 50–100bb | g3 |
| QT | twopair | 87% | 91% | 66% | 69% | 50–100bb | g4 |
| Q6 | twopair | 85% | 89% | 63% | 69% | 50–100bb | g4 |
| Q9 | twopair | 86% | 88% | 63% | 67% | 50–100bb | g4 |
| T9 | twopair | 82% | 81% | 45% | 59% | 50–100bb | g4 |
| 96 | twopair | 77% | 73% | 28% | 51% | 50–100bb | g4 |
| AA | op | 78% | 72% | 23% | 51% | 50–100bb | g5 |
| KK | op | 79% | 72% | 18% | 50% | 50–100bb | g5 |
| AQ | tpgk | 80% | 75% | 18% | 50% | 15–25bb | g6 |
| QJ | tpmk | 76% | 71% | 5% | 46% | 15–25bb | g6 |
| Q7 | tpmk | 76% | 71% | 2% | 43% | 15–25bb | g6 |
| Q8 | tpmk | 74% | 70% | 2% | 45% | 15–25bb | g6 |
| Q5 | tpmk | 74% | 69% | 1% | 45% | 15–25bb | g6 |
| KQ | tpgk | 79% | 74% | 13% | 51% | 50–100bb | g6 |
| JJ | pp1 | 73% | 65% | 0% | 43% | 15–25bb | g7 |
| AT | mp | 72% | 67% | 0% | 45% | 15–25bb | g8 |
| KT | mp | 72% | 67% | 0% | 45% | 15–25bb | g8 |
| JT | mp | 72% | 66% | 0% | 45% | 15–25bb | g8 |
| T8 | mp | 71% | 64% | 0% | 44% | 15–25bb | g8 |
| T7 | mp | 71% | 63% | 0% | 44% | 15–25bb | g8 |
| K9 | bp | 60% | 44% | 0% | 38% | 0–5bb | g9 |
| J9 | bp | 55% | 32% | 0% | 33% | 0–5bb | g9 |
| A9 | bp | 64% | 51% | 0% | 40% | 5–15bb | g9 |
| 98 | bp | 48% | 25% | 0% | 28% | 0–5bb | g9 |
| 97 | bp | 47% | 22% | 0% | 30% | 0–5bb | g9 |
| 88 | pp3 | 42% | 17% | 0% | 25% | 0–5bb | g9 |
| 77 | pp3 | 37% | 17% | 0% | 23% | 0–5bb | g9 |
| A6 | bp | 30% | 13% | 0% | 22% | 0–5bb | g9 |
| K6 | bp | 27% | 12% | 0% | 23% | 0–5bb | g9 |
| 86 | bp | 25% | 7% | 0% | 20% | 0–5bb | g9 |
| 76 | bp | 23% | 5% | 0% | 21% | 0–5bb | g9 |
| 65 | bp | 19% | 4% | 0% | 18% | 0–5bb | g9 |
| 64 | bp | 17% | 3% | 0% | 19% | 0–5bb | g9 |
| 44 | pp3 | 13% | 1% | 0% | 18% | 0–5bb | g9 |
| 55 | pp3 | 13% | 1% | 0% | 18% | 0–5bb | g9 |
| 33 | pp3 | 13% | 1% | 0% | 19% | 0–5bb | g9 |
| A2 | bp | 10% | 1% | 0% | 14% | 0–5bb | g9 |
| K2 | bp | 8% | 0% | 0% | 11% | 0–5bb | g9 |
| AJ | khnd | 4% | 0% | 0% | 5% | Pot is too big | g10 |
| AK | khnd | 4% | 0% | 0% | 5% | Pot is too big | g10 |
| A8 | khnd | 4% | 0% | 0% | 4% | Pot is too big | g10 |
| A7 | khnd | 3% | 0% | 0% | 3% | Pot is too big | g10 |
| A3 | khnd | 3% | 0% | 0% | 3% | Pot is too big | g10 |
| A4 | khnd | 3% | 0% | 0% | 3% | Pot is too big | g10 |
| A5 | khnd | 2% | 0% | 0% | 3% | Pot is too big | g10 |
