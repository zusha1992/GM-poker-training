# QT7-5d-9d river (Q♥ T♦ 7♠ 5♦ 9♦): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes, straights & sets | QQ, TT, 99, 77, 55, KJ, J8, 86 · ♦ flushes: AK–AJ, A8–A6, A4–A2, KQ, KJ, K8–K6, K4–K2, QJ, Q8–Q6, J8, J7, 87, 86, 76, 64, 43 | 93% | 92% | 87% | 86% |
| g2 | 15–25bb | Two pair | QT, Q9, Q7, Q5, T9, T7, 97, 75 | 81% | 75% | 59% | 60% |
| g3 | 0–5bb | Overpairs | AA, KK | 72% | 64% | 42% | 48% |
| g4 | 0–5bb | Top pair | AQ, KQ, QJ, Q8, Q6 | 71% | 59% | 27% | 42% |
| g5 | 0–5bb | Big pocket pairs | JJ | 56% | 38% | 0% | 24% |
| g6 | 0–5bb | Second pair | AT, KT, JT, T8 | 41% | 23% | 0% | 17% |
| g7 | 0–5bb | Small pairs | 88, 66, 44–22, A9, A7, A5, K9, K7, K5, J9, J7, 98, 96, 87, 76, 65, 54 | 13% | 1% | 0% | 6% |
| g8 | Pot is too big | Ace-high | AK, AJ, A8, A6, A4–A2 | 1% | 0% | 0% | 0% |

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
| K2+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K3+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K6+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K8+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K4+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| KJ+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| KQ+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| QJ+fl | flush | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| Q8+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| Q6+fl | flush | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| 87+fl | flushlo | 96% | 96% | 93% | 94% | 50–100bb | g1 |
| 76+fl | flushlo | 96% | 96% | 92% | 93% | 50–100bb | g1 |
| 86+fl | flushlo | 95% | 97% | 94% | 93% | 50–100bb | g1 |
| J8+fl | flushlo | 96% | 97% | 94% | 93% | 50–100bb | g1 |
| J7+fl | flushlo | 96% | 95% | 93% | 93% | 50–100bb | g1 |
| 64+fl | flushlo | 95% | 96% | 94% | 92% | 50–100bb | g1 |
| 43+fl | flushlo | 95% | 96% | 93% | 91% | 50–100bb | g1 |
| KJ | straight | 91% | 91% | 86% | 84% | 50–100bb | g1 |
| J8 | straight | 88% | 87% | 79% | 77% | 50–100bb | g1 |
| 86 | straight | 87% | 85% | 76% | 75% | 50–100bb | g1 |
| 77 | twopair | 87% | 84% | 73% | 73% | 50–100bb | g1 |
| 55 | twopair | 87% | 84% | 74% | 73% | 50–100bb | g1 |
| TT | twopair | 83% | 78% | 73% | 70% | 50–100bb | g1 |
| QQ | twopair | 87% | 83% | 64% | 69% | 50–100bb | g1 |
| 99 | twopair | 85% | 81% | 69% | 68% | 50–100bb | g1 |
| 97 | twopair | 75% | 69% | 49% | 48% | 15–25bb | g2 |
| QT | twopair | 85% | 80% | 67% | 68% | 50–100bb | g2 |
| 75 | twopair | 73% | 65% | 42% | 46% | 15–25bb | g2 |
| T7 | twopair | 72% | 64% | 48% | 47% | 15–25bb | g2 |
| Q9 | twopair | 84% | 80% | 63% | 64% | 50–100bb | g2 |
| Q5 | twopair | 80% | 74% | 54% | 56% | 50–100bb | g2 |
| Q7 | twopair | 80% | 75% | 54% | 55% | 50–100bb | g2 |
| T9 | twopair | 78% | 70% | 56% | 55% | 50–100bb | g2 |
| KK | op | 74% | 65% | 42% | 50% | 15–25bb | g3 |
| AA | op | 70% | 62% | 42% | 46% | 15–25bb | g3 |
| Q6 | tpmk | 64% | 47% | 6% | 32% | 0–5bb | g4 |
| AQ | tpgk | 72% | 64% | 36% | 45% | 15–25bb | g4 |
| Q8 | tpmk | 64% | 48% | 8% | 32% | 0–5bb | g4 |
| KQ | tpgk | 73% | 63% | 33% | 45% | 15–25bb | g4 |
| QJ | tpmk | 69% | 56% | 19% | 39% | 5–15bb | g4 |
| JJ | pp1 | 56% | 38% | 0% | 23% | 0–5bb | g5 |
| AT | mp | 47% | 30% | 0% | 19% | 0–5bb | g6 |
| KT | mp | 42% | 25% | 0% | 18% | 0–5bb | g6 |
| JT | mp | 36% | 17% | 0% | 16% | 0–5bb | g6 |
| T8 | mp | 31% | 10% | 0% | 13% | 0–5bb | g6 |
| K9 | bp | 25% | 4% | 0% | 13% | 0–5bb | g7 |
| A9 | bp | 23% | 4% | 0% | 13% | 0–5bb | g7 |
| J9 | bp | 22% | 2% | 0% | 14% | 0–5bb | g7 |
| 96 | bp | 21% | 1% | 0% | 12% | 0–5bb | g7 |
| 88 | spp | 19% | 0% | 0% | 13% | 0–5bb | g7 |
| 98 | bp | 19% | 1% | 0% | 13% | 0–5bb | g7 |
| A7 | bp | 12% | 0% | 0% | 6% | 0–5bb | g7 |
| K7 | bp | 12% | 0% | 0% | 5% | 0–5bb | g7 |
| J7 | bp | 10% | 0% | 0% | 4% | 0–5bb | g7 |
| 87 | bp | 9% | 0% | 0% | 2% | 0–5bb | g7 |
| 76 | bp | 8% | 0% | 0% | 1% | 0–5bb | g7 |
| 65 | bp | 7% | 0% | 0% | 0% | 0–5bb | g7 |
| 66 | spp | 7% | 0% | 0% | 0% | 0–5bb | g7 |
| 44 | spp | 7% | 0% | 0% | 0% | 0–5bb | g7 |
| K5 | bp | 6% | 0% | 0% | 0% | 0–5bb | g7 |
| 54 | bp | 6% | 0% | 0% | 0% | 0–5bb | g7 |
| 22 | spp | 6% | 0% | 0% | 0% | 0–5bb | g7 |
| 33 | spp | 6% | 0% | 0% | 0% | 0–5bb | g7 |
| A5 | bp | 5% | 0% | 0% | 0% | 0–5bb | g7 |
| AK | khnd | 4% | 0% | 0% | 0% | Pot is too big | g8 |
| AJ | khnd | 2% | 0% | 0% | 0% | Pot is too big | g8 |
| A8 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
