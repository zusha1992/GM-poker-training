# QT7-5d-9d@xx river (Q♥ T♦ 7♠ 5♦ 9♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AK–AJ, A8–A6, A4–A2, KQ, KJ, K8–K6, K4–K2, QJ, Q8–Q6, J8, J7, 87, 86, 76, 64, 43 | 98% | 99% | 98% | 93% |
| g2 | 25–50bb | Straights | KJ, J8, 86 | 89% | 93% | 80% | 72% |
| g3 | 15–25bb | Sets | QQ, TT, 99, 77, 55 | 86% | 87% | 63% | 68% |
| g4 | 15–25bb | Two pair | QT, Q9, Q7, Q5, T9, T7, 97, 75 | 81% | 80% | 45% | 68% |
| g5 | 0–5bb | Overpairs | AA, KK | 75% | 72% | 31% | 68% |
| g6 | 0–5bb | Top pair | AQ, KQ, QJ, Q8, Q6 | 76% | 73% | 19% | 67% |
| g7 | 0–5bb | Big pocket pairs | JJ | 71% | 65% | 0% | 65% |
| g8 | 0–5bb | Second pair | AT, KT, JT, T8 | 66% | 51% | 0% | 61% |
| g9 | 0–5bb | Small pairs | 88, 66, 44–22, A9, A7, A5, K9, K7, K5, J9, J7, 98, 96, 87, 76, 65, 54 | 43% | 12% | 0% | 52% |
| g10 | Pot is too big | Ace-high | AK, AJ, A8, A6, A4–A2 | 18% | 0% | 0% | 39% |

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
| K2+fl | flush | 98% | 100% | 99% | 94% | 50–100bb | g1 |
| K3+fl | flush | 99% | 100% | 99% | 94% | 50–100bb | g1 |
| K7+fl | flush | 99% | 100% | 100% | 94% | 50–100bb | g1 |
| K6+fl | flush | 99% | 100% | 100% | 94% | 50–100bb | g1 |
| K4+fl | flush | 98% | 100% | 99% | 93% | 50–100bb | g1 |
| K8+fl | flush | 99% | 100% | 99% | 93% | 50–100bb | g1 |
| KJ+fl | flush | 98% | 100% | 99% | 93% | 50–100bb | g1 |
| KQ+fl | flush | 98% | 100% | 99% | 93% | 50–100bb | g1 |
| Q7+fl | flush | 97% | 100% | 99% | 88% | 50–100bb | g1 |
| Q6+fl | flush | 97% | 99% | 98% | 88% | 50–100bb | g1 |
| Q8+fl | flush | 97% | 99% | 98% | 88% | 50–100bb | g1 |
| QJ+fl | flush | 97% | 100% | 99% | 86% | 50–100bb | g1 |
| J7+fl | flushlo | 96% | 98% | 94% | 86% | 50–100bb | g1 |
| 87+fl | flushlo | 95% | 98% | 93% | 86% | 50–100bb | g1 |
| J8+fl | flushlo | 95% | 98% | 93% | 85% | 50–100bb | g1 |
| 86+fl | flushlo | 95% | 97% | 91% | 85% | 50–100bb | g1 |
| 76+fl | flushlo | 95% | 97% | 91% | 84% | 50–100bb | g1 |
| 43+fl | flushlo | 94% | 96% | 88% | 84% | 50–100bb | g1 |
| 64+fl | flushlo | 94% | 97% | 89% | 83% | 50–100bb | g1 |
| KJ | straight | 90% | 94% | 82% | 74% | 50–100bb | g2 |
| J8 | straight | 87% | 90% | 75% | 69% | 50–100bb | g2 |
| 86 | straight | 86% | 90% | 72% | 67% | 50–100bb | g2 |
| QQ | twopair | 87% | 89% | 61% | 69% | 50–100bb | g3 |
| 77 | twopair | 87% | 88% | 67% | 69% | 50–100bb | g3 |
| 55 | twopair | 86% | 86% | 63% | 68% | 50–100bb | g3 |
| 99 | twopair | 85% | 86% | 63% | 68% | 50–100bb | g3 |
| TT | twopair | 86% | 85% | 63% | 67% | 50–100bb | g3 |
| QT | twopair | 84% | 83% | 52% | 68% | 50–100bb | g4 |
| Q9 | twopair | 83% | 82% | 46% | 68% | 50–100bb | g4 |
| T9 | twopair | 79% | 77% | 42% | 68% | 50–100bb | g4 |
| T7 | twopair | 79% | 75% | 36% | 67% | 50–100bb | g4 |
| 75 | twopair | 77% | 75% | 32% | 67% | 50–100bb | g4 |
| Q5 | twopair | 82% | 81% | 42% | 67% | 50–100bb | g4 |
| 97 | twopair | 78% | 75% | 35% | 66% | 50–100bb | g4 |
| Q7 | twopair | 82% | 80% | 41% | 65% | 50–100bb | g4 |
| KK | op | 77% | 74% | 31% | 70% | 50–100bb | g5 |
| AA | op | 74% | 70% | 31% | 65% | 50–100bb | g5 |
| QJ | tpmk | 76% | 73% | 15% | 68% | 50–100bb | g6 |
| KQ | tpgk | 77% | 75% | 23% | 68% | 50–100bb | g6 |
| AQ | tpgk | 76% | 74% | 23% | 66% | 50–100bb | g6 |
| Q8 | tpmk | 74% | 69% | 6% | 66% | 50–100bb | g6 |
| Q6 | tpmk | 73% | 69% | 5% | 65% | 50–100bb | g6 |
| JJ | pp1 | 71% | 65% | 0% | 65% | 50–100bb | g7 |
| JT | mp | 65% | 47% | 0% | 62% | 50–100bb | g8 |
| KT | mp | 67% | 52% | 0% | 61% | 50–100bb | g8 |
| T8 | mp | 64% | 41% | 0% | 61% | 50–100bb | g8 |
| AT | mp | 67% | 56% | 0% | 59% | 50–100bb | g8 |
| 88 | spp | 47% | 14% | 0% | 60% | 50–100bb | g9 |
| J9 | bp | 55% | 21% | 0% | 60% | 50–100bb | g9 |
| A9 | bp | 57% | 28% | 0% | 60% | 50–100bb | g9 |
| K9 | bp | 57% | 25% | 0% | 58% | 50–100bb | g9 |
| 96 | bp | 52% | 16% | 0% | 57% | 50–100bb | g9 |
| 98 | bp | 53% | 17% | 0% | 57% | 50–100bb | g9 |
| A7 | bp | 46% | 11% | 0% | 55% | 50–100bb | g9 |
| K7 | bp | 45% | 10% | 0% | 52% | 50–100bb | g9 |
| J7 | bp | 45% | 10% | 0% | 52% | 50–100bb | g9 |
| 87 | bp | 45% | 9% | 0% | 50% | 0–5bb | g9 |
| 76 | bp | 42% | 8% | 0% | 49% | 0–5bb | g9 |
| 66 | spp | 40% | 7% | 0% | 44% | 0–5bb | g9 |
| A5 | bp | 37% | 5% | 0% | 46% | 0–5bb | g9 |
| K5 | bp | 37% | 6% | 0% | 43% | 0–5bb | g9 |
| 65 | bp | 33% | 2% | 0% | 42% | 0–5bb | g9 |
| 54 | bp | 31% | 2% | 0% | 43% | 0–5bb | g9 |
| 44 | spp | 28% | 2% | 0% | 44% | 0–5bb | g9 |
| 33 | spp | 26% | 2% | 0% | 43% | 0–5bb | g9 |
| 22 | spp | 25% | 2% | 0% | 44% | 0–5bb | g9 |
| AK | khnd | 23% | 1% | 0% | 42% | Pot is too big | g10 |
| AJ | khnd | 23% | 0% | 0% | 45% | Pot is too big | g10 |
| A8 | khnd | 20% | 0% | 0% | 42% | Pot is too big | g10 |
| A6 | khnd | 16% | 0% | 0% | 35% | Pot is too big | g10 |
| A2 | khnd | 15% | 0% | 0% | 35% | Pot is too big | g10 |
| A3 | khnd | 15% | 0% | 0% | 35% | Pot is too big | g10 |
| A4 | khnd | 15% | 0% | 0% | 35% | Pot is too big | g10 |
