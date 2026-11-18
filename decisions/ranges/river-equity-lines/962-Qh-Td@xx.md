# 962-Qh-Td@xx river (9♦ 6♦ 2♥ Q♥ T♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AK–AJ, A8, A7, A5–A2, KQ, KJ, K8, K7, K5–K2, QJ, Q8, Q7, Q5, J8, J7, 87, 75, 54, 43 | 98% | 99% | 98% | 95% |
| g2 | 25–50bb | Straights | KJ, J8, 87 | 90% | 94% | 82% | 74% |
| g3 | 15–25bb | Sets | QQ, TT, 99, 66, 22 | 86% | 89% | 63% | 71% |
| g4 | 15–25bb | Two pair | QT, Q9, Q6, T9, 96 | 82% | 82% | 43% | 70% |
| g5 | 0–5bb | Overpairs | AA, KK | 76% | 76% | 27% | 69% |
| g6 | 0–5bb | Top pair | AQ, KQ, QJ, Q8, Q7, Q5 | 78% | 77% | 16% | 70% |
| g7 | 0–5bb | Big pocket pairs | JJ | 73% | 69% | 0% | 70% |
| g8 | 0–5bb | Second pair | AT, KT, JT, T8, T7 | 68% | 57% | 0% | 64% |
| g9 | 0–5bb | Small pairs | 88, 77, 55–33, A9, A6, A2, K9, K6, K2, J9, 98, 97, 86, 76, 65, 64 | 45% | 14% | 0% | 58% |
| g10 | Pot is too big | Ace-high | AK, AJ, A8, A7, A5–A3 | 20% | 1% | 0% | 39% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| A8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 87+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AJ+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| AK+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| AQ+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| K7+fl | flush | 99% | 100% | 99% | 96% | 50–100bb | g1 |
| K8+fl | flush | 99% | 100% | 100% | 95% | 50–100bb | g1 |
| K3+fl | flush | 99% | 100% | 99% | 95% | 50–100bb | g1 |
| K2+fl | flush | 99% | 100% | 99% | 95% | 50–100bb | g1 |
| K4+fl | flush | 99% | 100% | 99% | 95% | 50–100bb | g1 |
| KQ+fl | flush | 98% | 100% | 99% | 94% | 50–100bb | g1 |
| K5+fl | flush | 98% | 100% | 99% | 94% | 50–100bb | g1 |
| KJ+fl | flush | 98% | 99% | 99% | 93% | 50–100bb | g1 |
| Q7+fl | flush | 97% | 100% | 99% | 91% | 50–100bb | g1 |
| Q8+fl | flush | 97% | 100% | 98% | 91% | 50–100bb | g1 |
| J7+fl | flushlo | 96% | 98% | 95% | 89% | 50–100bb | g1 |
| Q5+fl | flush | 97% | 100% | 98% | 89% | 50–100bb | g1 |
| J8+fl | flushlo | 96% | 98% | 95% | 89% | 50–100bb | g1 |
| QJ+fl | flush | 97% | 100% | 98% | 88% | 50–100bb | g1 |
| 75+fl | flushlo | 95% | 98% | 91% | 87% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 97% | 91% | 85% | 50–100bb | g1 |
| 43+fl | flushlo | 94% | 97% | 90% | 84% | 50–100bb | g1 |
| KJ | straight | 90% | 95% | 85% | 76% | 50–100bb | g2 |
| J8 | straight | 88% | 93% | 77% | 72% | 50–100bb | g2 |
| 87 | straight | 88% | 91% | 72% | 69% | 50–100bb | g2 |
| QQ | twopair | 87% | 90% | 59% | 71% | 50–100bb | g3 |
| 22 | twopair | 86% | 88% | 63% | 71% | 50–100bb | g3 |
| 99 | twopair | 85% | 87% | 64% | 71% | 50–100bb | g3 |
| 66 | twopair | 86% | 88% | 64% | 71% | 50–100bb | g3 |
| TT | twopair | 86% | 88% | 62% | 70% | 50–100bb | g3 |
| Q6 | twopair | 81% | 84% | 41% | 71% | 50–100bb | g4 |
| Q9 | twopair | 83% | 84% | 43% | 70% | 50–100bb | g4 |
| 96 | twopair | 78% | 78% | 31% | 70% | 50–100bb | g4 |
| QT | twopair | 83% | 85% | 50% | 70% | 50–100bb | g4 |
| T9 | twopair | 79% | 78% | 38% | 69% | 50–100bb | g4 |
| KK | op | 77% | 78% | 28% | 72% | 50–100bb | g5 |
| AA | op | 74% | 75% | 26% | 67% | 50–100bb | g5 |
| QJ | tpmk | 78% | 76% | 14% | 71% | 50–100bb | g6 |
| KQ | tpgk | 79% | 79% | 22% | 70% | 50–100bb | g6 |
| Q8 | tpmk | 76% | 74% | 6% | 69% | 50–100bb | g6 |
| AQ | tpgk | 77% | 78% | 20% | 69% | 50–100bb | g6 |
| Q7 | tpmk | 75% | 73% | 4% | 68% | 50–100bb | g6 |
| Q5 | tpmk | 76% | 73% | 2% | 66% | 50–100bb | g6 |
| JJ | pp1 | 73% | 69% | 0% | 70% | 50–100bb | g7 |
| JT | mp | 67% | 54% | 0% | 66% | 50–100bb | g8 |
| AT | mp | 69% | 63% | 0% | 64% | 50–100bb | g8 |
| T8 | mp | 66% | 49% | 0% | 63% | 50–100bb | g8 |
| KT | mp | 69% | 59% | 0% | 63% | 50–100bb | g8 |
| T7 | mp | 66% | 47% | 0% | 63% | 50–100bb | g8 |
| 88 | pp3 | 50% | 14% | 0% | 61% | 50–100bb | g9 |
| A9 | bp | 59% | 32% | 0% | 61% | 50–100bb | g9 |
| J9 | bp | 57% | 24% | 0% | 61% | 50–100bb | g9 |
| 98 | bp | 53% | 19% | 0% | 60% | 50–100bb | g9 |
| K9 | bp | 60% | 30% | 0% | 59% | 50–100bb | g9 |
| 77 | pp3 | 47% | 14% | 0% | 59% | 50–100bb | g9 |
| 86 | bp | 43% | 8% | 0% | 59% | 50–100bb | g9 |
| 97 | bp | 51% | 17% | 0% | 59% | 50–100bb | g9 |
| K6 | bp | 45% | 10% | 0% | 58% | 50–100bb | g9 |
| A6 | bp | 44% | 11% | 0% | 58% | 50–100bb | g9 |
| 76 | bp | 42% | 7% | 0% | 57% | 50–100bb | g9 |
| 55 | pp3 | 36% | 5% | 0% | 57% | 50–100bb | g9 |
| 44 | pp3 | 36% | 4% | 0% | 57% | 50–100bb | g9 |
| 65 | bp | 41% | 6% | 0% | 57% | 50–100bb | g9 |
| 64 | bp | 40% | 6% | 0% | 56% | 50–100bb | g9 |
| 33 | pp3 | 33% | 5% | 0% | 56% | 50–100bb | g9 |
| A2 | bp | 31% | 3% | 0% | 55% | 50–100bb | g9 |
| K2 | bp | 31% | 4% | 0% | 52% | 50–100bb | g9 |
| AK | khnd | 27% | 3% | 0% | 46% | Pot is too big | g10 |
| AJ | khnd | 26% | 1% | 0% | 46% | Pot is too big | g10 |
| A8 | khnd | 23% | 0% | 0% | 43% | Pot is too big | g10 |
| A7 | khnd | 19% | 0% | 0% | 40% | Pot is too big | g10 |
| A3 | khnd | 16% | 0% | 0% | 34% | Pot is too big | g10 |
| A5 | khnd | 15% | 0% | 0% | 34% | Pot is too big | g10 |
| A4 | khnd | 15% | 0% | 0% | 33% | Pot is too big | g10 |
