# QT7-5d-9d river (Q♥ T♦ 7♠ 5♦ 9♦): equity groups

Generated 2026-11-16 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AK–AJ, A8–A6, A4–A2, KQ, KJ, K8–K6, K4–K2, QJ, Q8–Q6, J8, J7, 87, 86, 76, 64, 43 | 99% | 99% | 99% | 98% |
| g2 | 25–50bb | Straights | KJ, J8, 86 | 90% | 90% | 84% | 82% |
| g3 | 15–25bb | Sets | QQ, TT, 99, 77, 55 | 86% | 82% | 71% | 70% |
| g4 | 15–25bb | Two pair | QT, Q9, Q7, Q5, T9, T7, 97, 75 | 81% | 75% | 59% | 60% |
| g5 | 0–5bb | Overpairs | AA, KK | 72% | 64% | 42% | 48% |
| g6 | 0–5bb | Top pair | AQ, KQ, QJ, Q8, Q6 | 71% | 59% | 27% | 42% |
| g7 | 0–5bb | Big pocket pairs | JJ | 56% | 38% | 0% | 24% |
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
| KJ+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| KQ+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K3+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K6+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K4+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K8+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K2+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| Q8+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| Q6+fl | flush | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| QJ+fl | flush | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| 87+fl | flushlo | 97% | 96% | 93% | 94% | 50–100bb | g1 |
| 76+fl | flushlo | 96% | 95% | 92% | 94% | 50–100bb | g1 |
| J7+fl | flushlo | 96% | 96% | 92% | 94% | 50–100bb | g1 |
| 86+fl | flushlo | 95% | 96% | 94% | 93% | 50–100bb | g1 |
| J8+fl | flushlo | 95% | 96% | 94% | 92% | 50–100bb | g1 |
| 43+fl | flushlo | 94% | 95% | 92% | 92% | 50–100bb | g1 |
| 64+fl | flushlo | 95% | 96% | 93% | 92% | 50–100bb | g1 |
| KJ | straight | 91% | 91% | 86% | 84% | 50–100bb | g2 |
| J8 | straight | 88% | 87% | 78% | 77% | 50–100bb | g2 |
| 86 | straight | 87% | 85% | 77% | 74% | 50–100bb | g2 |
| 77 | twopair | 87% | 84% | 74% | 72% | 50–100bb | g3 |
| 55 | twopair | 87% | 83% | 74% | 72% | 50–100bb | g3 |
| TT | twopair | 83% | 80% | 73% | 70% | 50–100bb | g3 |
| QQ | twopair | 87% | 83% | 65% | 69% | 50–100bb | g3 |
| 99 | twopair | 85% | 82% | 69% | 68% | 50–100bb | g3 |
| 97 | twopair | 76% | 68% | 47% | 48% | 15–25bb | g4 |
| QT | twopair | 85% | 80% | 69% | 67% | 50–100bb | g4 |
| 75 | twopair | 72% | 65% | 42% | 45% | 15–25bb | g4 |
| Q9 | twopair | 86% | 81% | 62% | 65% | 50–100bb | g4 |
| T7 | twopair | 72% | 64% | 46% | 45% | 15–25bb | g4 |
| Q5 | twopair | 81% | 75% | 54% | 58% | 50–100bb | g4 |
| T9 | twopair | 77% | 70% | 54% | 55% | 50–100bb | g4 |
| Q7 | twopair | 80% | 74% | 55% | 54% | 50–100bb | g4 |
| KK | op | 73% | 65% | 43% | 49% | 15–25bb | g5 |
| AA | op | 71% | 62% | 42% | 46% | 15–25bb | g5 |
| Q8 | tpmk | 65% | 49% | 8% | 32% | 0–5bb | g6 |
| Q6 | tpmk | 64% | 48% | 6% | 31% | 0–5bb | g6 |
| AQ | tpgk | 72% | 63% | 35% | 44% | 15–25bb | g6 |
| KQ | tpgk | 73% | 62% | 33% | 45% | 15–25bb | g6 |
| QJ | tpmk | 69% | 55% | 20% | 40% | 5–15bb | g6 |
| JJ | pp1 | 56% | 38% | 0% | 24% | 0–5bb | g7 |
| AT | mp | 46% | 29% | 0% | 18% | 0–5bb | g8 |
| KT | mp | 43% | 26% | 0% | 18% | 0–5bb | g8 |
| JT | mp | 37% | 16% | 0% | 16% | 0–5bb | g8 |
| T8 | mp | 31% | 10% | 0% | 13% | 0–5bb | g8 |
| K9 | bp | 24% | 4% | 0% | 13% | 0–5bb | g9 |
| A9 | bp | 23% | 4% | 0% | 12% | 0–5bb | g9 |
| J9 | bp | 23% | 3% | 0% | 14% | 0–5bb | g9 |
| 98 | bp | 21% | 1% | 0% | 12% | 0–5bb | g9 |
| 96 | bp | 20% | 1% | 0% | 13% | 0–5bb | g9 |
| 88 | spp | 19% | 0% | 0% | 12% | 0–5bb | g9 |
| K7 | bp | 12% | 0% | 0% | 4% | 0–5bb | g9 |
| A7 | bp | 11% | 0% | 0% | 7% | 0–5bb | g9 |
| 87 | bp | 10% | 0% | 0% | 2% | 0–5bb | g9 |
| J7 | bp | 9% | 0% | 0% | 3% | 0–5bb | g9 |
| 76 | bp | 8% | 0% | 0% | 1% | 0–5bb | g9 |
| 66 | spp | 7% | 0% | 0% | 0% | 0–5bb | g9 |
| 44 | spp | 7% | 0% | 0% | 0% | 0–5bb | g9 |
| K5 | bp | 7% | 0% | 0% | 0% | 0–5bb | g9 |
| 33 | spp | 7% | 0% | 0% | 0% | 0–5bb | g9 |
| 54 | bp | 7% | 0% | 0% | 0% | 0–5bb | g9 |
| 65 | bp | 6% | 0% | 0% | 0% | 0–5bb | g9 |
| 22 | spp | 6% | 0% | 0% | 0% | 0–5bb | g9 |
| A5 | bp | 5% | 0% | 0% | 0% | 0–5bb | g9 |
| AK | khnd | 5% | 0% | 0% | 0% | Pot is too big | g10 |
| AJ | khnd | 2% | 0% | 0% | 0% | Pot is too big | g10 |
| A8 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
