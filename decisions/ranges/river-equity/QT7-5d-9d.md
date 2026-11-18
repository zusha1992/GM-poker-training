# QT7-5d-9d river (Q♥ T♦ 7♠ 5♦ 9♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AK–AJ, A8–A6, A4–A2, KQ, KJ, K8–K6, K4–K2, QJ, Q8–Q6, J8, J7, 87, 86, 76, 64, 43 | 99% | 99% | 99% | 98% |
| g2 | 25–50bb | Straights | KJ, J8, 86 | 91% | 90% | 84% | 82% |
| g3 | 15–25bb | Sets | QQ, TT, 99, 77, 55 | 86% | 83% | 71% | 70% |
| g4 | 15–25bb | Two pair | QT, Q9, Q7, Q5, T9, T7, 97, 75 | 81% | 76% | 60% | 60% |
| g5 | 0–5bb | Overpairs | AA, KK | 72% | 64% | 43% | 48% |
| g6 | 0–5bb | Top pair | AQ, KQ, QJ, Q8, Q6 | 71% | 60% | 27% | 42% |
| g7 | 0–5bb | Big pocket pairs | JJ | 55% | 38% | 0% | 24% |
| g8 | 0–5bb | Second pair | AT, KT, JT, T8 | 41% | 23% | 0% | 17% |
| g9 | 0–5bb | Small pairs | 88, 66, 44–22, A9, A7, A5, K9, K7, K5, J9, J7, 98, 96, 87, 76, 65, 54 | 13% | 1% | 0% | 6% |
| g10 | Pot is too big | Ace-high | AK, AJ, A8, A6, A4–A2 | 1% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AK+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AQ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A6+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| Q7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K2+fl | flush | 99% | 100% | 100% | 100% | 50–100bb | g1 |
| K8+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K4+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| KJ+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K6+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K3+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| KQ+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| Q8+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| Q6+fl | flush | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| QJ+fl | flush | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| 87+fl | flushlo | 96% | 96% | 93% | 95% | 50–100bb | g1 |
| 76+fl | flushlo | 96% | 95% | 93% | 94% | 50–100bb | g1 |
| J7+fl | flushlo | 95% | 95% | 93% | 93% | 50–100bb | g1 |
| 86+fl | flushlo | 95% | 96% | 94% | 93% | 50–100bb | g1 |
| J8+fl | flushlo | 95% | 96% | 94% | 92% | 50–100bb | g1 |
| 43+fl | flushlo | 94% | 96% | 93% | 92% | 50–100bb | g1 |
| 64+fl | flushlo | 95% | 96% | 93% | 92% | 50–100bb | g1 |
| KJ | straight | 91% | 92% | 86% | 84% | 50–100bb | g2 |
| J8 | straight | 89% | 86% | 79% | 77% | 50–100bb | g2 |
| 86 | straight | 87% | 85% | 76% | 72% | 50–100bb | g2 |
| 55 | twopair | 87% | 84% | 72% | 73% | 50–100bb | g3 |
| 77 | twopair | 87% | 85% | 74% | 72% | 50–100bb | g3 |
| TT | twopair | 83% | 79% | 73% | 70% | 50–100bb | g3 |
| 99 | twopair | 85% | 83% | 69% | 69% | 50–100bb | g3 |
| QQ | twopair | 87% | 84% | 66% | 69% | 50–100bb | g3 |
| 97 | twopair | 75% | 69% | 48% | 49% | 15–25bb | g4 |
| QT | twopair | 85% | 80% | 69% | 68% | 50–100bb | g4 |
| 75 | twopair | 74% | 65% | 44% | 44% | 15–25bb | g4 |
| Q9 | twopair | 85% | 81% | 63% | 65% | 50–100bb | g4 |
| T7 | twopair | 71% | 64% | 47% | 45% | 15–25bb | g4 |
| Q5 | twopair | 82% | 74% | 54% | 57% | 50–100bb | g4 |
| T9 | twopair | 76% | 71% | 56% | 56% | 50–100bb | g4 |
| Q7 | twopair | 80% | 75% | 54% | 55% | 50–100bb | g4 |
| KK | op | 73% | 64% | 43% | 50% | 15–25bb | g5 |
| AA | op | 71% | 63% | 43% | 46% | 15–25bb | g5 |
| Q8 | tpmk | 65% | 48% | 7% | 32% | 0–5bb | g6 |
| KQ | tpgk | 73% | 64% | 34% | 46% | 15–25bb | g6 |
| Q6 | tpmk | 64% | 47% | 6% | 31% | 0–5bb | g6 |
| AQ | tpgk | 72% | 63% | 34% | 44% | 15–25bb | g6 |
| QJ | tpmk | 69% | 56% | 19% | 40% | 5–15bb | g6 |
| JJ | pp1 | 55% | 37% | 0% | 24% | 0–5bb | g7 |
| AT | mp | 46% | 30% | 0% | 19% | 0–5bb | g8 |
| KT | mp | 42% | 25% | 0% | 17% | 0–5bb | g8 |
| JT | mp | 36% | 17% | 0% | 15% | 0–5bb | g8 |
| T8 | mp | 31% | 10% | 0% | 13% | 0–5bb | g8 |
| K9 | bp | 25% | 4% | 0% | 13% | 0–5bb | g9 |
| J9 | bp | 22% | 2% | 0% | 14% | 0–5bb | g9 |
| A9 | bp | 22% | 4% | 0% | 12% | 0–5bb | g9 |
| 98 | bp | 21% | 1% | 0% | 14% | 0–5bb | g9 |
| 96 | bp | 20% | 0% | 0% | 13% | 0–5bb | g9 |
| 88 | spp | 19% | 0% | 0% | 11% | 0–5bb | g9 |
| A7 | bp | 11% | 0% | 0% | 6% | 0–5bb | g9 |
| K7 | bp | 11% | 0% | 0% | 5% | 0–5bb | g9 |
| 87 | bp | 10% | 0% | 0% | 2% | 0–5bb | g9 |
| J7 | bp | 10% | 0% | 0% | 3% | 0–5bb | g9 |
| 76 | bp | 9% | 0% | 0% | 1% | 0–5bb | g9 |
| 66 | spp | 7% | 0% | 0% | 0% | 0–5bb | g9 |
| 65 | bp | 6% | 0% | 0% | 0% | 0–5bb | g9 |
| 44 | spp | 6% | 0% | 0% | 0% | 0–5bb | g9 |
| K5 | bp | 6% | 0% | 0% | 0% | 0–5bb | g9 |
| 22 | spp | 6% | 0% | 0% | 0% | 0–5bb | g9 |
| 33 | spp | 6% | 0% | 0% | 0% | 0–5bb | g9 |
| 54 | bp | 6% | 0% | 0% | 0% | 0–5bb | g9 |
| A5 | bp | 6% | 0% | 0% | 0% | 0–5bb | g9 |
| AK | khnd | 4% | 0% | 0% | 0% | Pot is too big | g10 |
| AJ | khnd | 2% | 0% | 0% | 0% | Pot is too big | g10 |
| A8 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
