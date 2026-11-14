# QT7-5d-9d river (Q♥ T♦ 7♠ 5♦ 9♦): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes, straights & sets | QQ, TT, 99, 77, 55, KJ, J8, 86 · ♦ flushes: AK–AJ, A8–A6, A4–A2, KQ, KJ, K8–K6, K4–K2, QJ, Q8–Q6, J8, J7, 87, 86, 76, 64, 43 | 93% | 92% | 87% | 86% |
| g2 | 50–100bb | Two pair | QT, Q9, Q7, Q5, T9 | 82% | 77% | 62% | 62% |
| g3 | 15–25bb | Overpairs | AA, KK | 72% | 65% | 42% | 48% |
| g4 | 15–25bb | Two pair | T7, 97, 75 | 73% | 66% | 46% | 47% |
| g5 | 15–25bb | Top pair, good kicker | AQ, KQ, QJ | 71% | 60% | 29% | 43% |
| g6 | 0–5bb | Top pair, weak kicker | Q8, Q6 | 64% | 48% | 7% | 32% |
| g7 | 0–5bb | Big pocket pairs | JJ | 56% | 37% | 0% | 24% |
| g8 | Pot is too big | Second pair | AT, KT, JT, T8 | 41% | 23% | 0% | 17% |
| g9 | Pot is too big | Small pairs | 88, 66, 44–22, A9, A7, A5, K9, K7, K5, J9, J7, 98, 96, 87, 76, 65, 54 | 13% | 1% | 0% | 6% |
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
| K4+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K2+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K6+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| KQ+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K8+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K3+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| KJ+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| Q6+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| Q8+fl | flush | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| QJ+fl | flush | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| 87+fl | flushlo | 96% | 96% | 93% | 94% | 50–100bb | g1 |
| 76+fl | flushlo | 96% | 95% | 92% | 94% | 50–100bb | g1 |
| J7+fl | flushlo | 96% | 95% | 93% | 94% | 50–100bb | g1 |
| 86+fl | flushlo | 95% | 96% | 94% | 93% | 50–100bb | g1 |
| J8+fl | flushlo | 95% | 96% | 94% | 92% | 50–100bb | g1 |
| 64+fl | flushlo | 95% | 96% | 93% | 92% | 50–100bb | g1 |
| 43+fl | flushlo | 94% | 95% | 93% | 91% | 50–100bb | g1 |
| KJ | straight | 91% | 91% | 87% | 83% | 50–100bb | g1 |
| J8 | straight | 88% | 87% | 79% | 76% | 50–100bb | g1 |
| 86 | straight | 87% | 86% | 76% | 75% | 50–100bb | g1 |
| 77 | twopair | 87% | 84% | 73% | 72% | 50–100bb | g1 |
| 55 | twopair | 86% | 84% | 73% | 71% | 50–100bb | g1 |
| TT | twopair | 82% | 79% | 72% | 69% | 50–100bb | g1 |
| QQ | twopair | 88% | 84% | 66% | 68% | 50–100bb | g1 |
| 99 | twopair | 85% | 82% | 70% | 68% | 50–100bb | g1 |
| QT | twopair | 85% | 80% | 69% | 68% | 50–100bb | g2 |
| Q9 | twopair | 85% | 79% | 64% | 65% | 50–100bb | g2 |
| Q5 | twopair | 80% | 75% | 54% | 57% | 50–100bb | g2 |
| T9 | twopair | 77% | 70% | 55% | 55% | 50–100bb | g2 |
| Q7 | twopair | 80% | 74% | 54% | 54% | 50–100bb | g2 |
| KK | op | 73% | 65% | 42% | 50% | 15–25bb | g3 |
| AA | op | 70% | 64% | 42% | 46% | 15–25bb | g3 |
| 97 | twopair | 74% | 68% | 48% | 49% | 15–25bb | g4 |
| 75 | twopair | 73% | 65% | 42% | 45% | 15–25bb | g4 |
| T7 | twopair | 72% | 63% | 48% | 46% | 15–25bb | g4 |
| AQ | tpgk | 72% | 63% | 36% | 43% | 15–25bb | g5 |
| KQ | tpgk | 73% | 63% | 33% | 45% | 15–25bb | g5 |
| QJ | tpmk | 69% | 54% | 19% | 40% | 5–15bb | g5 |
| Q6 | tpmk | 64% | 48% | 6% | 31% | 0–5bb | g6 |
| Q8 | tpmk | 64% | 48% | 7% | 32% | 0–5bb | g6 |
| JJ | pp1 | 56% | 37% | 0% | 24% | 0–5bb | g7 |
| AT | mp | 47% | 29% | 0% | 19% | Pot is too big | g8 |
| KT | mp | 44% | 25% | 0% | 18% | Pot is too big | g8 |
| JT | mp | 36% | 17% | 0% | 15% | Pot is too big | g8 |
| T8 | mp | 32% | 10% | 0% | 13% | Pot is too big | g8 |
| K9 | bp | 25% | 4% | 0% | 13% | Pot is too big | g9 |
| J9 | bp | 23% | 3% | 0% | 14% | Pot is too big | g9 |
| A9 | bp | 22% | 4% | 0% | 12% | Pot is too big | g9 |
| 98 | bp | 21% | 1% | 0% | 13% | Pot is too big | g9 |
| 96 | bp | 20% | 0% | 0% | 13% | Pot is too big | g9 |
| 88 | spp | 18% | 0% | 0% | 13% | Pot is too big | g9 |
| A7 | bp | 12% | 0% | 0% | 6% | Pot is too big | g9 |
| K7 | bp | 11% | 0% | 0% | 4% | Pot is too big | g9 |
| J7 | bp | 10% | 0% | 0% | 3% | Pot is too big | g9 |
| 87 | bp | 10% | 0% | 0% | 3% | Pot is too big | g9 |
| 76 | bp | 8% | 0% | 0% | 1% | Pot is too big | g9 |
| K5 | bp | 7% | 0% | 0% | 0% | Pot is too big | g9 |
| 54 | bp | 7% | 0% | 0% | 0% | Pot is too big | g9 |
| 33 | spp | 7% | 0% | 0% | 0% | Pot is too big | g9 |
| 65 | bp | 6% | 0% | 0% | 0% | Pot is too big | g9 |
| 66 | spp | 6% | 0% | 0% | 0% | Pot is too big | g9 |
| 44 | spp | 6% | 0% | 0% | 0% | Pot is too big | g9 |
| 22 | spp | 6% | 0% | 0% | 0% | Pot is too big | g9 |
| A5 | bp | 5% | 0% | 0% | 0% | Pot is too big | g9 |
| AK | khnd | 5% | 0% | 0% | 0% | Pot is too big | g10 |
| AJ | khnd | 2% | 0% | 0% | 0% | Pot is too big | g10 |
| A8 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
