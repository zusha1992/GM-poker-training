# QT7-5d-9d@xx river (Q♥ T♦ 7♠ 5♦ 9♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AK–AJ, A8–A6, A4–A2, KQ, KJ, K8–K6, K4–K2, QJ, Q8–Q6, J8, J7, 87, 86, 76, 64, 43 | 98% | 99% | 98% | 93% |
| g2 | 25–50bb | Straights | KJ, J8, 86 | 90% | 93% | 80% | 72% |
| g3 | 15–25bb | Sets | QQ, TT, 99, 77, 55 | 86% | 87% | 64% | 68% |
| g4 | 15–25bb | Two pair | QT, Q9, Q7, Q5, T9, T7, 97, 75 | 82% | 80% | 45% | 68% |
| g5 | 0–5bb | Overpairs | AA, KK | 75% | 73% | 30% | 68% |
| g6 | 0–5bb | Top pair | AQ, KQ, QJ, Q8, Q6 | 76% | 74% | 19% | 67% |
| g7 | 0–5bb | Big pocket pairs | JJ | 70% | 64% | 0% | 64% |
| g8 | 0–5bb | Second pair | AT, KT, JT, T8 | 66% | 52% | 0% | 61% |
| g9 | 0–5bb | Small pairs | 88, 66, 44–22, A9, A7, A5, K9, K7, K5, J9, J7, 98, 96, 87, 76, 65, 54 | 43% | 12% | 0% | 51% |
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
| K2+fl | flush | 99% | 100% | 99% | 94% | 50–100bb | g1 |
| K3+fl | flush | 98% | 100% | 99% | 94% | 50–100bb | g1 |
| K7+fl | flush | 98% | 100% | 100% | 94% | 50–100bb | g1 |
| K6+fl | flush | 99% | 100% | 100% | 93% | 50–100bb | g1 |
| K8+fl | flush | 99% | 100% | 99% | 93% | 50–100bb | g1 |
| K4+fl | flush | 98% | 100% | 99% | 93% | 50–100bb | g1 |
| KJ+fl | flush | 98% | 100% | 99% | 93% | 50–100bb | g1 |
| KQ+fl | flush | 99% | 100% | 99% | 93% | 50–100bb | g1 |
| Q7+fl | flush | 97% | 100% | 99% | 89% | 50–100bb | g1 |
| Q8+fl | flush | 97% | 99% | 98% | 89% | 50–100bb | g1 |
| Q6+fl | flush | 97% | 100% | 98% | 88% | 50–100bb | g1 |
| QJ+fl | flush | 96% | 99% | 99% | 86% | 50–100bb | g1 |
| 87+fl | flushlo | 95% | 97% | 93% | 86% | 50–100bb | g1 |
| J8+fl | flushlo | 96% | 98% | 93% | 86% | 50–100bb | g1 |
| J7+fl | flushlo | 95% | 98% | 93% | 86% | 50–100bb | g1 |
| 76+fl | flushlo | 95% | 96% | 91% | 85% | 50–100bb | g1 |
| 86+fl | flushlo | 95% | 97% | 92% | 84% | 50–100bb | g1 |
| 64+fl | flushlo | 95% | 97% | 90% | 84% | 50–100bb | g1 |
| 43+fl | flushlo | 94% | 96% | 89% | 82% | 50–100bb | g1 |
| KJ | straight | 90% | 94% | 83% | 74% | 50–100bb | g2 |
| J8 | straight | 88% | 91% | 75% | 70% | 50–100bb | g2 |
| 86 | straight | 88% | 89% | 71% | 68% | 50–100bb | g2 |
| QQ | twopair | 87% | 89% | 60% | 69% | 50–100bb | g3 |
| 99 | twopair | 85% | 86% | 64% | 69% | 50–100bb | g3 |
| 55 | twopair | 86% | 87% | 63% | 69% | 50–100bb | g3 |
| 77 | twopair | 86% | 88% | 68% | 68% | 50–100bb | g3 |
| TT | twopair | 86% | 84% | 64% | 68% | 50–100bb | g3 |
| QT | twopair | 84% | 82% | 51% | 68% | 50–100bb | g4 |
| T9 | twopair | 80% | 77% | 42% | 68% | 50–100bb | g4 |
| Q9 | twopair | 83% | 83% | 46% | 68% | 50–100bb | g4 |
| Q5 | twopair | 81% | 82% | 42% | 68% | 50–100bb | g4 |
| 75 | twopair | 77% | 76% | 31% | 67% | 50–100bb | g4 |
| 97 | twopair | 79% | 74% | 34% | 66% | 50–100bb | g4 |
| T7 | twopair | 79% | 76% | 37% | 66% | 50–100bb | g4 |
| Q7 | twopair | 82% | 82% | 43% | 66% | 50–100bb | g4 |
| KK | op | 76% | 74% | 31% | 70% | 50–100bb | g5 |
| AA | op | 74% | 72% | 30% | 65% | 50–100bb | g5 |
| KQ | tpgk | 77% | 75% | 23% | 68% | 50–100bb | g6 |
| QJ | tpmk | 77% | 73% | 16% | 68% | 50–100bb | g6 |
| AQ | tpgk | 76% | 74% | 23% | 66% | 50–100bb | g6 |
| Q8 | tpmk | 73% | 68% | 6% | 65% | 50–100bb | g6 |
| Q6 | tpmk | 73% | 69% | 5% | 64% | 50–100bb | g6 |
| JJ | pp1 | 70% | 64% | 0% | 64% | 50–100bb | g7 |
| JT | mp | 66% | 48% | 0% | 62% | 50–100bb | g8 |
| T8 | mp | 63% | 42% | 0% | 61% | 50–100bb | g8 |
| AT | mp | 67% | 57% | 0% | 60% | 50–100bb | g8 |
| KT | mp | 67% | 53% | 0% | 60% | 50–100bb | g8 |
| J9 | bp | 55% | 21% | 0% | 59% | 50–100bb | g9 |
| K9 | bp | 56% | 25% | 0% | 59% | 50–100bb | g9 |
| A9 | bp | 55% | 27% | 0% | 59% | 50–100bb | g9 |
| 88 | spp | 47% | 14% | 0% | 58% | 50–100bb | g9 |
| 98 | bp | 51% | 17% | 0% | 58% | 50–100bb | g9 |
| 96 | bp | 51% | 17% | 0% | 57% | 50–100bb | g9 |
| A7 | bp | 45% | 11% | 0% | 55% | 50–100bb | g9 |
| K7 | bp | 46% | 11% | 0% | 53% | 50–100bb | g9 |
| 87 | bp | 45% | 9% | 0% | 52% | 50–100bb | g9 |
| J7 | bp | 45% | 9% | 0% | 51% | 50–100bb | g9 |
| 76 | bp | 42% | 8% | 0% | 48% | 0–5bb | g9 |
| 66 | spp | 39% | 7% | 0% | 45% | 0–5bb | g9 |
| K5 | bp | 37% | 5% | 0% | 43% | 0–5bb | g9 |
| A5 | bp | 36% | 6% | 0% | 44% | 0–5bb | g9 |
| 65 | bp | 34% | 3% | 0% | 43% | 0–5bb | g9 |
| 54 | bp | 33% | 2% | 0% | 42% | 0–5bb | g9 |
| 44 | spp | 28% | 2% | 0% | 44% | 0–5bb | g9 |
| 33 | spp | 27% | 1% | 0% | 42% | 0–5bb | g9 |
| 22 | spp | 24% | 1% | 0% | 43% | 0–5bb | g9 |
| AK | khnd | 24% | 2% | 0% | 42% | Pot is too big | g10 |
| AJ | khnd | 23% | 0% | 0% | 44% | Pot is too big | g10 |
| A8 | khnd | 19% | 0% | 0% | 44% | Pot is too big | g10 |
| A6 | khnd | 15% | 0% | 0% | 36% | Pot is too big | g10 |
| A4 | khnd | 15% | 0% | 0% | 35% | Pot is too big | g10 |
| A3 | khnd | 15% | 0% | 0% | 35% | Pot is too big | g10 |
| A2 | khnd | 15% | 0% | 0% | 35% | Pot is too big | g10 |
