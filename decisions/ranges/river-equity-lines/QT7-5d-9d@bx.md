# QT7-5d-9d@bx river (Q♥ T♦ 7♠ 5♦ 9♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AK–AJ, A8–A6, A4–A2, KQ, KJ, K8–K6, K4–K2, QJ, Q8–Q6, J8, J7, 87, 86, 76, 64, 43 | 99% | 99% | 98% | 96% |
| g2 | 25–50bb | Straights | KJ, J8, 86 | 92% | 92% | 84% | 74% |
| g3 | 15–25bb | Sets | QQ, TT, 99, 77, 55 | 86% | 85% | 71% | 62% |
| g4 | 15–25bb | Two pair | QT, Q9, Q7, Q5, T9, T7, 97, 75 | 82% | 75% | 54% | 60% |
| g5 | 0–5bb | Overpairs | AA, KK | 74% | 63% | 34% | 61% |
| g6 | 0–5bb | Top pair | AQ, KQ, QJ, Q8, Q6 | 74% | 61% | 20% | 60% |
| g7 | 0–5bb | Big pocket pairs | JJ | 65% | 46% | 0% | 50% |
| g8 | 0–5bb | Second pair | AT, KT, JT, T8 | 57% | 35% | 0% | 41% |
| g9 | 0–5bb | Small pairs | 88, 66, 44–22, A9, A7, A5, K9, K7, K5, J9, J7, 98, 96, 87, 76, 65, 54 | 26% | 5% | 0% | 22% |
| g10 | Pot is too big | Ace-high | AK, AJ, A8, A6, A4–A2 | 2% | 0% | 0% | 2% |

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
| K7+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| Q7+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| K8+fl | flush | 99% | 100% | 100% | 97% | 50–100bb | g1 |
| K3+fl | flush | 99% | 100% | 100% | 97% | 50–100bb | g1 |
| K6+fl | flush | 99% | 100% | 100% | 97% | 50–100bb | g1 |
| K4+fl | flush | 99% | 100% | 100% | 96% | 50–100bb | g1 |
| KJ+fl | flush | 99% | 100% | 100% | 96% | 50–100bb | g1 |
| K2+fl | flush | 99% | 100% | 100% | 96% | 50–100bb | g1 |
| KQ+fl | flush | 98% | 100% | 99% | 96% | 50–100bb | g1 |
| Q8+fl | flush | 98% | 99% | 99% | 95% | 50–100bb | g1 |
| Q6+fl | flush | 98% | 99% | 99% | 95% | 50–100bb | g1 |
| 87+fl | flushlo | 97% | 97% | 94% | 94% | 50–100bb | g1 |
| QJ+fl | flush | 98% | 100% | 99% | 94% | 50–100bb | g1 |
| 76+fl | flushlo | 97% | 96% | 92% | 93% | 50–100bb | g1 |
| J7+fl | flushlo | 97% | 96% | 93% | 92% | 50–100bb | g1 |
| J8+fl | flushlo | 96% | 96% | 93% | 91% | 50–100bb | g1 |
| 86+fl | flushlo | 96% | 96% | 93% | 90% | 50–100bb | g1 |
| 64+fl | flushlo | 95% | 96% | 92% | 86% | 50–100bb | g1 |
| 43+fl | flushlo | 95% | 95% | 91% | 85% | 50–100bb | g1 |
| KJ | straight | 92% | 92% | 86% | 77% | 50–100bb | g2 |
| J8 | straight | 89% | 90% | 81% | 68% | 50–100bb | g2 |
| 86 | straight | 88% | 88% | 79% | 64% | 50–100bb | g2 |
| 99 | twopair | 86% | 84% | 70% | 64% | 50–100bb | g3 |
| 55 | twopair | 86% | 85% | 70% | 63% | 50–100bb | g3 |
| 77 | twopair | 87% | 85% | 74% | 63% | 50–100bb | g3 |
| QQ | twopair | 87% | 87% | 69% | 62% | 50–100bb | g3 |
| TT | twopair | 85% | 84% | 73% | 61% | 50–100bb | g3 |
| Q9 | twopair | 84% | 80% | 57% | 62% | 50–100bb | g4 |
| QT | twopair | 85% | 79% | 62% | 61% | 50–100bb | g4 |
| T9 | twopair | 78% | 70% | 50% | 60% | 50–100bb | g4 |
| Q5 | twopair | 83% | 75% | 51% | 59% | 50–100bb | g4 |
| 97 | twopair | 77% | 67% | 41% | 58% | 50–100bb | g4 |
| 75 | twopair | 77% | 67% | 37% | 57% | 50–100bb | g4 |
| T7 | twopair | 75% | 65% | 41% | 56% | 50–100bb | g4 |
| Q7 | twopair | 80% | 75% | 49% | 54% | 50–100bb | g4 |
| KK | op | 75% | 63% | 33% | 63% | 50–100bb | g5 |
| AA | op | 73% | 63% | 35% | 59% | 50–100bb | g5 |
| QJ | tpmk | 73% | 59% | 15% | 62% | 50–100bb | g6 |
| KQ | tpgk | 76% | 63% | 24% | 62% | 50–100bb | g6 |
| AQ | tpgk | 75% | 64% | 27% | 59% | 50–100bb | g6 |
| Q8 | tpmk | 70% | 55% | 7% | 54% | 50–100bb | g6 |
| Q6 | tpmk | 69% | 54% | 6% | 53% | 50–100bb | g6 |
| JJ | pp1 | 65% | 46% | 0% | 50% | 0–5bb | g7 |
| AT | mp | 60% | 41% | 0% | 42% | 0–5bb | g8 |
| KT | mp | 58% | 36% | 0% | 41% | 0–5bb | g8 |
| JT | mp | 55% | 30% | 0% | 40% | 0–5bb | g8 |
| T8 | mp | 50% | 24% | 0% | 38% | 0–5bb | g8 |
| A9 | bp | 43% | 14% | 0% | 36% | 0–5bb | g9 |
| K9 | bp | 43% | 14% | 0% | 37% | 0–5bb | g9 |
| J9 | bp | 40% | 11% | 0% | 37% | 0–5bb | g9 |
| 98 | bp | 37% | 7% | 0% | 34% | 0–5bb | g9 |
| 96 | bp | 36% | 7% | 0% | 35% | 0–5bb | g9 |
| 88 | spp | 34% | 5% | 0% | 33% | 0–5bb | g9 |
| K7 | bp | 27% | 3% | 0% | 23% | 0–5bb | g9 |
| A7 | bp | 27% | 3% | 0% | 25% | 0–5bb | g9 |
| J7 | bp | 25% | 2% | 0% | 20% | 0–5bb | g9 |
| 87 | bp | 24% | 1% | 0% | 17% | 0–5bb | g9 |
| 76 | bp | 21% | 0% | 0% | 16% | 0–5bb | g9 |
| 66 | spp | 19% | 0% | 0% | 13% | 0–5bb | g9 |
| 65 | bp | 18% | 0% | 0% | 12% | 0–5bb | g9 |
| K5 | bp | 18% | 0% | 0% | 13% | 0–5bb | g9 |
| A5 | bp | 17% | 0% | 0% | 12% | 0–5bb | g9 |
| 54 | bp | 16% | 0% | 0% | 12% | 0–5bb | g9 |
| 44 | spp | 14% | 0% | 0% | 13% | 0–5bb | g9 |
| 33 | spp | 10% | 0% | 0% | 9% | 0–5bb | g9 |
| 22 | spp | 7% | 0% | 0% | 5% | 0–5bb | g9 |
| AK | khnd | 5% | 0% | 0% | 4% | Pot is too big | g10 |
| AJ | khnd | 3% | 0% | 0% | 4% | Pot is too big | g10 |
| A8 | khnd | 1% | 0% | 0% | 2% | Pot is too big | g10 |
| A4 | khnd | 0% | 0% | 0% | 1% | Pot is too big | g10 |
| A2 | khnd | 0% | 0% | 0% | 1% | Pot is too big | g10 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A3 | khnd | 0% | 0% | 0% | 1% | Pot is too big | g10 |
