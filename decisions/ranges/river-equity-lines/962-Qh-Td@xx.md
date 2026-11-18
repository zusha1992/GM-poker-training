# 962-Qh-Td@xx river (9♦ 6♦ 2♥ Q♥ T♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AK–AJ, A8, A7, A5–A2, KQ, KJ, K8, K7, K5–K2, QJ, Q8, Q7, Q5, J8, J7, 87, 75, 54, 43 | 98% | 99% | 98% | 95% |
| g2 | 25–50bb | Straights | KJ, J8, 87 | 90% | 94% | 82% | 75% |
| g3 | 15–25bb | Sets | QQ, TT, 99, 66, 22 | 86% | 88% | 62% | 71% |
| g4 | 15–25bb | Two pair | QT, Q9, Q6, T9, 96 | 83% | 83% | 43% | 70% |
| g5 | 0–5bb | Overpairs | AA, KK | 76% | 75% | 28% | 69% |
| g6 | 0–5bb | Top pair | AQ, KQ, QJ, Q8, Q7, Q5 | 78% | 77% | 17% | 70% |
| g7 | 0–5bb | Big pocket pairs | JJ | 73% | 70% | 0% | 68% |
| g8 | 0–5bb | Second pair | AT, KT, JT, T8, T7 | 69% | 58% | 0% | 64% |
| g9 | 0–5bb | Small pairs | 88, 77, 55–33, A9, A6, A2, K9, K6, K2, J9, 98, 97, 86, 76, 65, 64 | 45% | 14% | 0% | 58% |
| g10 | Pot is too big | Ace-high | AK, AJ, A8, A7, A5–A3 | 20% | 1% | 0% | 39% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| A8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 87+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| AQ+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| AJ+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| AK+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| K7+fl | flush | 99% | 100% | 99% | 96% | 50–100bb | g1 |
| K8+fl | flush | 99% | 100% | 100% | 95% | 50–100bb | g1 |
| K3+fl | flush | 98% | 100% | 99% | 95% | 50–100bb | g1 |
| K2+fl | flush | 99% | 100% | 100% | 95% | 50–100bb | g1 |
| K4+fl | flush | 98% | 100% | 99% | 94% | 50–100bb | g1 |
| K5+fl | flush | 98% | 100% | 99% | 94% | 50–100bb | g1 |
| KQ+fl | flush | 98% | 100% | 98% | 94% | 50–100bb | g1 |
| KJ+fl | flush | 98% | 99% | 99% | 94% | 50–100bb | g1 |
| Q7+fl | flush | 97% | 100% | 99% | 91% | 50–100bb | g1 |
| Q8+fl | flush | 98% | 100% | 99% | 90% | 50–100bb | g1 |
| Q5+fl | flush | 97% | 99% | 98% | 90% | 50–100bb | g1 |
| J7+fl | flushlo | 96% | 98% | 94% | 90% | 50–100bb | g1 |
| J8+fl | flushlo | 96% | 98% | 95% | 89% | 50–100bb | g1 |
| QJ+fl | flush | 96% | 100% | 99% | 88% | 50–100bb | g1 |
| 75+fl | flushlo | 95% | 97% | 90% | 87% | 50–100bb | g1 |
| 54+fl | flushlo | 94% | 97% | 90% | 85% | 50–100bb | g1 |
| 43+fl | flushlo | 94% | 97% | 89% | 83% | 50–100bb | g1 |
| KJ | straight | 91% | 96% | 85% | 76% | 50–100bb | g2 |
| J8 | straight | 88% | 92% | 76% | 72% | 50–100bb | g2 |
| 87 | straight | 88% | 91% | 72% | 69% | 50–100bb | g2 |
| 22 | twopair | 86% | 89% | 64% | 71% | 50–100bb | g3 |
| 66 | twopair | 87% | 88% | 64% | 71% | 50–100bb | g3 |
| TT | twopair | 86% | 87% | 63% | 70% | 50–100bb | g3 |
| QQ | twopair | 87% | 91% | 58% | 70% | 50–100bb | g3 |
| 99 | twopair | 85% | 88% | 62% | 69% | 50–100bb | g3 |
| QT | twopair | 85% | 85% | 49% | 71% | 50–100bb | g4 |
| Q9 | twopair | 84% | 84% | 44% | 71% | 50–100bb | g4 |
| 96 | twopair | 78% | 78% | 31% | 70% | 50–100bb | g4 |
| T9 | twopair | 81% | 78% | 38% | 69% | 50–100bb | g4 |
| Q6 | twopair | 82% | 85% | 40% | 69% | 50–100bb | g4 |
| KK | op | 77% | 77% | 28% | 71% | 50–100bb | g5 |
| AA | op | 75% | 73% | 28% | 66% | 50–100bb | g5 |
| QJ | tpmk | 78% | 77% | 13% | 72% | 50–100bb | g6 |
| KQ | tpgk | 79% | 78% | 21% | 70% | 50–100bb | g6 |
| AQ | tpgk | 77% | 76% | 21% | 69% | 50–100bb | g6 |
| Q8 | tpmk | 75% | 74% | 6% | 68% | 50–100bb | g6 |
| Q7 | tpmk | 75% | 75% | 4% | 67% | 50–100bb | g6 |
| Q5 | tpmk | 74% | 74% | 3% | 66% | 50–100bb | g6 |
| JJ | pp1 | 73% | 70% | 0% | 68% | 50–100bb | g7 |
| JT | mp | 68% | 54% | 0% | 65% | 50–100bb | g8 |
| AT | mp | 69% | 63% | 0% | 64% | 50–100bb | g8 |
| KT | mp | 70% | 59% | 0% | 64% | 50–100bb | g8 |
| T8 | mp | 65% | 49% | 0% | 64% | 50–100bb | g8 |
| T7 | mp | 65% | 48% | 0% | 61% | 50–100bb | g8 |
| K9 | bp | 58% | 30% | 0% | 61% | 50–100bb | g9 |
| A9 | bp | 59% | 32% | 0% | 61% | 50–100bb | g9 |
| J9 | bp | 57% | 24% | 0% | 60% | 50–100bb | g9 |
| 88 | pp3 | 49% | 15% | 0% | 60% | 50–100bb | g9 |
| A6 | bp | 45% | 10% | 0% | 59% | 50–100bb | g9 |
| 98 | bp | 54% | 19% | 0% | 59% | 50–100bb | g9 |
| 97 | bp | 53% | 17% | 0% | 59% | 50–100bb | g9 |
| 77 | pp3 | 48% | 15% | 0% | 59% | 50–100bb | g9 |
| 44 | pp3 | 35% | 5% | 0% | 58% | 50–100bb | g9 |
| 64 | bp | 40% | 6% | 0% | 57% | 50–100bb | g9 |
| 55 | pp3 | 36% | 5% | 0% | 57% | 50–100bb | g9 |
| 76 | bp | 42% | 7% | 0% | 57% | 50–100bb | g9 |
| K6 | bp | 44% | 10% | 0% | 57% | 50–100bb | g9 |
| 86 | bp | 44% | 8% | 0% | 57% | 50–100bb | g9 |
| 33 | pp3 | 34% | 5% | 0% | 57% | 50–100bb | g9 |
| A2 | bp | 30% | 3% | 0% | 56% | 50–100bb | g9 |
| 65 | bp | 42% | 6% | 0% | 56% | 50–100bb | g9 |
| K2 | bp | 32% | 4% | 0% | 53% | 50–100bb | g9 |
| AJ | khnd | 27% | 1% | 0% | 47% | Pot is too big | g10 |
| AK | khnd | 27% | 2% | 0% | 46% | Pot is too big | g10 |
| A8 | khnd | 24% | 0% | 0% | 44% | Pot is too big | g10 |
| A7 | khnd | 19% | 0% | 0% | 39% | Pot is too big | g10 |
| A5 | khnd | 15% | 0% | 0% | 34% | Pot is too big | g10 |
| A4 | khnd | 15% | 0% | 0% | 33% | Pot is too big | g10 |
| A3 | khnd | 15% | 0% | 0% | 34% | Pot is too big | g10 |
