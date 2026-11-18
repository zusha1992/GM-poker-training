# 962-Qh-Td@bx river (9♦ 6♦ 2♥ Q♥ T♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AK–AJ, A8, A7, A5–A2, KQ, KJ, K8, K7, K5–K2, QJ, Q8, Q7, Q5, J8, J7, 87, 75, 54, 43 | 99% | 100% | 99% | 95% |
| g2 | 25–50bb | Straights | KJ, J8, 87 | 92% | 96% | 88% | 69% |
| g3 | 15–25bb | Sets | QQ, TT, 99, 66, 22 | 89% | 92% | 74% | 60% |
| g4 | 15–25bb | Two pair | QT, Q9, Q6, T9, 96 | 86% | 84% | 51% | 59% |
| g5 | 0–5bb | Overpairs | AA, KK | 80% | 69% | 14% | 58% |
| g6 | 0–5bb | Top pair | AQ, KQ, QJ, Q8, Q7, Q5 | 80% | 73% | 6% | 59% |
| g7 | 0–5bb | Big pocket pairs | JJ | 77% | 66% | 0% | 62% |
| g8 | 0–5bb | Second pair | AT, KT, JT, T8, T7 | 72% | 57% | 0% | 55% |
| g9 | 0–5bb | Small pairs | 88, 77, 55–33, A9, A6, A2, K9, K6, K2, J9, 98, 97, 86, 76, 65, 64 | 45% | 17% | 0% | 45% |
| g10 | Pot is too big | Ace-high | AK, AJ, A8, A7, A5–A3 | 12% | 0% | 0% | 23% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| A8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 87+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| AK+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AQ+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AJ+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| K2+fl | flush | 99% | 100% | 100% | 96% | 50–100bb | g1 |
| K8+fl | flush | 99% | 100% | 100% | 96% | 50–100bb | g1 |
| K3+fl | flush | 99% | 100% | 99% | 96% | 50–100bb | g1 |
| K7+fl | flush | 99% | 100% | 100% | 95% | 50–100bb | g1 |
| KQ+fl | flush | 98% | 100% | 99% | 94% | 50–100bb | g1 |
| KJ+fl | flush | 98% | 100% | 99% | 94% | 50–100bb | g1 |
| K5+fl | flush | 99% | 100% | 99% | 94% | 50–100bb | g1 |
| K4+fl | flush | 99% | 100% | 99% | 94% | 50–100bb | g1 |
| Q8+fl | flush | 97% | 99% | 98% | 92% | 50–100bb | g1 |
| Q7+fl | flush | 98% | 100% | 98% | 91% | 50–100bb | g1 |
| QJ+fl | flush | 97% | 99% | 98% | 91% | 50–100bb | g1 |
| J7+fl | flushlo | 97% | 99% | 97% | 91% | 50–100bb | g1 |
| J8+fl | flushlo | 97% | 99% | 97% | 91% | 50–100bb | g1 |
| Q5+fl | flush | 97% | 99% | 98% | 90% | 50–100bb | g1 |
| 75+fl | flushlo | 97% | 98% | 94% | 88% | 50–100bb | g1 |
| 54+fl | flushlo | 96% | 98% | 93% | 87% | 50–100bb | g1 |
| 43+fl | flushlo | 95% | 98% | 93% | 85% | 50–100bb | g1 |
| KJ | straight | 92% | 96% | 90% | 73% | 50–100bb | g2 |
| J8 | straight | 91% | 95% | 85% | 61% | 50–100bb | g2 |
| 87 | straight | 90% | 94% | 82% | 60% | 50–100bb | g2 |
| 66 | twopair | 89% | 92% | 77% | 62% | 50–100bb | g3 |
| 22 | twopair | 91% | 94% | 81% | 61% | 50–100bb | g3 |
| QQ | twopair | 90% | 93% | 69% | 60% | 50–100bb | g3 |
| TT | twopair | 89% | 91% | 74% | 60% | 50–100bb | g3 |
| 99 | twopair | 88% | 90% | 69% | 59% | 50–100bb | g3 |
| QT | twopair | 89% | 91% | 69% | 62% | 50–100bb | g4 |
| Q9 | twopair | 87% | 88% | 58% | 59% | 50–100bb | g4 |
| Q6 | twopair | 85% | 83% | 44% | 59% | 50–100bb | g4 |
| 96 | twopair | 81% | 73% | 18% | 57% | 50–100bb | g4 |
| T9 | twopair | 83% | 76% | 30% | 57% | 50–100bb | g4 |
| KK | op | 81% | 70% | 12% | 61% | 50–100bb | g5 |
| AA | op | 79% | 68% | 15% | 54% | 50–100bb | g5 |
| QJ | tpmk | 80% | 72% | 3% | 60% | 50–100bb | g6 |
| KQ | tpgk | 82% | 74% | 8% | 60% | 50–100bb | g6 |
| Q8 | tpmk | 78% | 71% | 0% | 58% | 50–100bb | g6 |
| AQ | tpgk | 81% | 73% | 11% | 57% | 50–100bb | g6 |
| Q7 | tpmk | 77% | 70% | 0% | 56% | 50–100bb | g6 |
| Q5 | tpmk | 79% | 71% | 0% | 55% | 50–100bb | g6 |
| JJ | pp1 | 77% | 66% | 0% | 62% | 50–100bb | g7 |
| JT | mp | 71% | 55% | 0% | 55% | 50–100bb | g8 |
| KT | mp | 73% | 57% | 0% | 55% | 50–100bb | g8 |
| AT | mp | 73% | 62% | 0% | 54% | 50–100bb | g8 |
| T8 | mp | 71% | 54% | 0% | 53% | 50–100bb | g8 |
| T7 | mp | 68% | 53% | 0% | 52% | 50–100bb | g8 |
| 98 | bp | 57% | 23% | 0% | 46% | 0–5bb | g9 |
| 97 | bp | 56% | 23% | 0% | 46% | 0–5bb | g9 |
| J9 | bp | 61% | 30% | 0% | 52% | 50–100bb | g9 |
| K9 | bp | 64% | 37% | 0% | 51% | 50–100bb | g9 |
| A9 | bp | 65% | 42% | 0% | 51% | 50–100bb | g9 |
| 88 | pp3 | 51% | 18% | 0% | 45% | 0–5bb | g9 |
| 77 | pp3 | 49% | 17% | 0% | 44% | 0–5bb | g9 |
| K6 | bp | 45% | 13% | 0% | 46% | 0–5bb | g9 |
| A6 | bp | 44% | 13% | 0% | 43% | 0–5bb | g9 |
| 86 | bp | 42% | 9% | 0% | 44% | 0–5bb | g9 |
| 76 | bp | 40% | 7% | 0% | 43% | 0–5bb | g9 |
| 65 | bp | 38% | 6% | 0% | 42% | 0–5bb | g9 |
| 64 | bp | 35% | 7% | 0% | 42% | 0–5bb | g9 |
| 55 | pp3 | 31% | 5% | 0% | 41% | 0–5bb | g9 |
| 44 | pp3 | 29% | 4% | 0% | 42% | 0–5bb | g9 |
| 33 | pp3 | 26% | 4% | 0% | 42% | 0–5bb | g9 |
| K2 | bp | 24% | 3% | 0% | 38% | 0–5bb | g9 |
| A2 | bp | 22% | 3% | 0% | 39% | 0–5bb | g9 |
| AK | khnd | 19% | 2% | 0% | 27% | Pot is too big | g10 |
| AJ | khnd | 17% | 0% | 0% | 27% | Pot is too big | g10 |
| A8 | khnd | 14% | 0% | 0% | 24% | Pot is too big | g10 |
| A7 | khnd | 11% | 0% | 0% | 22% | Pot is too big | g10 |
| A3 | khnd | 8% | 0% | 0% | 19% | Pot is too big | g10 |
| A5 | khnd | 8% | 0% | 0% | 18% | Pot is too big | g10 |
| A4 | khnd | 8% | 0% | 0% | 19% | Pot is too big | g10 |
