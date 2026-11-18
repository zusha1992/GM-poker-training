# 962-Qh-Td@bx river (9♦ 6♦ 2♥ Q♥ T♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AK–AJ, A8, A7, A5–A2, KQ, KJ, K8, K7, K5–K2, QJ, Q8, Q7, Q5, J8, J7, 87, 75, 54, 43 | 99% | 100% | 99% | 95% |
| g2 | 25–50bb | Straights | KJ, J8, 87 | 92% | 96% | 88% | 70% |
| g3 | 15–25bb | Sets | QQ, TT, 99, 66, 22 | 89% | 92% | 73% | 61% |
| g4 | 15–25bb | Two pair | QT, Q9, Q6, T9, 96 | 86% | 85% | 52% | 59% |
| g5 | 0–5bb | Overpairs | AA, KK | 80% | 70% | 14% | 58% |
| g6 | 0–5bb | Top pair | AQ, KQ, QJ, Q8, Q7, Q5 | 80% | 73% | 7% | 59% |
| g7 | 0–5bb | Big pocket pairs | JJ | 76% | 65% | 0% | 61% |
| g8 | 0–5bb | Second pair | AT, KT, JT, T8, T7 | 73% | 58% | 0% | 54% |
| g9 | 0–5bb | Small pairs | 88, 77, 55–33, A9, A6, A2, K9, K6, K2, J9, 98, 97, 86, 76, 65, 64 | 45% | 17% | 0% | 45% |
| g10 | Pot is too big | Ace-high | AK, AJ, A8, A7, A5–A3 | 12% | 0% | 0% | 23% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| A8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 87+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| AQ+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| AJ+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| AK+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| K2+fl | flush | 99% | 100% | 99% | 96% | 50–100bb | g1 |
| K8+fl | flush | 99% | 100% | 100% | 96% | 50–100bb | g1 |
| K7+fl | flush | 98% | 100% | 100% | 96% | 50–100bb | g1 |
| K4+fl | flush | 98% | 100% | 99% | 95% | 50–100bb | g1 |
| K3+fl | flush | 99% | 100% | 99% | 95% | 50–100bb | g1 |
| KJ+fl | flush | 99% | 100% | 99% | 94% | 50–100bb | g1 |
| K5+fl | flush | 99% | 100% | 99% | 94% | 50–100bb | g1 |
| KQ+fl | flush | 99% | 100% | 99% | 94% | 50–100bb | g1 |
| Q7+fl | flush | 97% | 100% | 98% | 92% | 50–100bb | g1 |
| Q8+fl | flush | 98% | 99% | 98% | 92% | 50–100bb | g1 |
| J8+fl | flushlo | 97% | 99% | 97% | 91% | 50–100bb | g1 |
| QJ+fl | flush | 98% | 100% | 98% | 91% | 50–100bb | g1 |
| J7+fl | flushlo | 97% | 99% | 97% | 90% | 50–100bb | g1 |
| Q5+fl | flush | 97% | 99% | 97% | 90% | 50–100bb | g1 |
| 75+fl | flushlo | 96% | 98% | 93% | 89% | 50–100bb | g1 |
| 54+fl | flushlo | 96% | 98% | 93% | 87% | 50–100bb | g1 |
| 43+fl | flushlo | 95% | 97% | 93% | 84% | 50–100bb | g1 |
| KJ | straight | 92% | 97% | 90% | 73% | 50–100bb | g2 |
| J8 | straight | 91% | 95% | 86% | 64% | 50–100bb | g2 |
| 87 | straight | 89% | 93% | 82% | 58% | 50–100bb | g2 |
| TT | twopair | 88% | 91% | 73% | 62% | 50–100bb | g3 |
| QQ | twopair | 89% | 93% | 69% | 62% | 50–100bb | g3 |
| 66 | twopair | 88% | 92% | 75% | 61% | 50–100bb | g3 |
| 22 | twopair | 91% | 93% | 80% | 61% | 50–100bb | g3 |
| 99 | twopair | 88% | 89% | 70% | 60% | 50–100bb | g3 |
| QT | twopair | 89% | 92% | 70% | 61% | 50–100bb | g4 |
| Q9 | twopair | 87% | 87% | 58% | 60% | 50–100bb | g4 |
| Q6 | twopair | 86% | 84% | 45% | 59% | 50–100bb | g4 |
| 96 | twopair | 80% | 72% | 19% | 58% | 50–100bb | g4 |
| T9 | twopair | 82% | 76% | 31% | 55% | 50–100bb | g4 |
| KK | op | 81% | 71% | 13% | 60% | 50–100bb | g5 |
| AA | op | 78% | 68% | 16% | 55% | 50–100bb | g5 |
| KQ | tpgk | 81% | 74% | 9% | 60% | 50–100bb | g6 |
| QJ | tpmk | 79% | 72% | 3% | 60% | 50–100bb | g6 |
| Q8 | tpmk | 78% | 70% | 0% | 57% | 50–100bb | g6 |
| AQ | tpgk | 81% | 73% | 12% | 57% | 50–100bb | g6 |
| Q7 | tpmk | 79% | 71% | 0% | 56% | 50–100bb | g6 |
| Q5 | tpmk | 77% | 72% | 0% | 55% | 50–100bb | g6 |
| JJ | pp1 | 76% | 65% | 0% | 61% | 50–100bb | g7 |
| JT | mp | 72% | 55% | 0% | 56% | 50–100bb | g8 |
| KT | mp | 73% | 58% | 0% | 54% | 50–100bb | g8 |
| T8 | mp | 71% | 54% | 0% | 53% | 50–100bb | g8 |
| AT | mp | 74% | 62% | 0% | 53% | 50–100bb | g8 |
| T7 | mp | 70% | 53% | 0% | 52% | 50–100bb | g8 |
| 98 | bp | 57% | 23% | 0% | 45% | 0–5bb | g9 |
| 97 | bp | 54% | 23% | 0% | 46% | 0–5bb | g9 |
| K9 | bp | 66% | 36% | 0% | 53% | 50–100bb | g9 |
| 88 | pp3 | 52% | 18% | 0% | 45% | 0–5bb | g9 |
| J9 | bp | 60% | 29% | 0% | 51% | 50–100bb | g9 |
| A9 | bp | 65% | 43% | 0% | 50% | 50–100bb | g9 |
| 77 | pp3 | 49% | 17% | 0% | 43% | 0–5bb | g9 |
| K6 | bp | 44% | 13% | 0% | 45% | 0–5bb | g9 |
| A6 | bp | 43% | 13% | 0% | 43% | 0–5bb | g9 |
| 86 | bp | 41% | 9% | 0% | 43% | 0–5bb | g9 |
| 76 | bp | 41% | 8% | 0% | 42% | 0–5bb | g9 |
| 64 | bp | 37% | 6% | 0% | 41% | 0–5bb | g9 |
| 65 | bp | 37% | 7% | 0% | 41% | 0–5bb | g9 |
| 55 | pp3 | 32% | 4% | 0% | 40% | 0–5bb | g9 |
| 44 | pp3 | 28% | 4% | 0% | 41% | 0–5bb | g9 |
| 33 | pp3 | 26% | 3% | 0% | 42% | 0–5bb | g9 |
| K2 | bp | 24% | 3% | 0% | 38% | 0–5bb | g9 |
| A2 | bp | 22% | 3% | 0% | 40% | 0–5bb | g9 |
| AK | khnd | 19% | 2% | 0% | 27% | Pot is too big | g10 |
| AJ | khnd | 18% | 1% | 0% | 28% | Pot is too big | g10 |
| A8 | khnd | 13% | 0% | 0% | 24% | Pot is too big | g10 |
| A7 | khnd | 11% | 0% | 0% | 22% | Pot is too big | g10 |
| A3 | khnd | 8% | 0% | 0% | 20% | Pot is too big | g10 |
| A4 | khnd | 8% | 0% | 0% | 20% | Pot is too big | g10 |
| A5 | khnd | 8% | 0% | 0% | 18% | Pot is too big | g10 |
