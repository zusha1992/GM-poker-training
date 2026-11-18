# KQ4-8s-Td@x75 river (K♦ Q♦ 4♠ 8♠ T♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AJ, A9–A2, J9–J7, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 99% | 100% | 100% | 97% |
| g2 | 25–50bb | Straights | AJ, J9 | 91% | 98% | 98% | 77% |
| g3 | 15–25bb | Sets | KK, QQ, TT, 88, 44 | 87% | 96% | 94% | 67% |
| g4 | 15–25bb | Two pair | KQ, KT, K8, K4, QT, Q8, T8 | 82% | 87% | 80% | 60% |
| g5 | 0–5bb | Overpair | AA | 72% | 73% | 62% | 58% |
| g6 | 0–5bb | Top pair | AK, KJ, K9, K7–K5, K3, K2 | 67% | 60% | 34% | 56% |
| g7 | 0–5bb | Second pair | AQ, QJ, Q9, Q7–Q5 | 48% | 20% | 0% | 49% |
| g8 | 0–5bb | Small pairs | JJ, 99, 77–55, 33, 22, AT, A8, A4, JT, J8, T9, T7, 98, 87, 86, 64, 54, 43 | 19% | 2% | 0% | 28% |
| g9 | Pot is too big | Ace-high | A9, A7–A5, A3, A2 | 4% | 0% | 0% | 5% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A6+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 98+fl | flush | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| 87+fl | flushlo | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| 86+fl | flushlo | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| J8+fl | flush | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| J7+fl | flush | 98% | 100% | 100% | 96% | 50–100bb | g1 |
| 96+fl | flush | 98% | 100% | 99% | 95% | 50–100bb | g1 |
| 97+fl | flush | 98% | 100% | 99% | 95% | 50–100bb | g1 |
| 76+fl | flushlo | 97% | 100% | 99% | 93% | 50–100bb | g1 |
| 64+fl | flushlo | 96% | 99% | 99% | 93% | 50–100bb | g1 |
| 75+fl | flushlo | 97% | 99% | 99% | 93% | 50–100bb | g1 |
| 65+fl | flushlo | 96% | 100% | 99% | 93% | 50–100bb | g1 |
| 54+fl | flushlo | 96% | 99% | 99% | 92% | 50–100bb | g1 |
| 43+fl | flushlo | 96% | 99% | 99% | 92% | 50–100bb | g1 |
| AJ | straight | 92% | 99% | 99% | 80% | 50–100bb | g2 |
| J9 | straight | 89% | 97% | 96% | 71% | 50–100bb | g2 |
| 44 | twopair | 88% | 97% | 95% | 69% | 50–100bb | g3 |
| TT | twopair | 86% | 97% | 94% | 67% | 50–100bb | g3 |
| 88 | twopair | 88% | 97% | 96% | 66% | 50–100bb | g3 |
| KK | twopair | 86% | 95% | 89% | 65% | 50–100bb | g3 |
| QQ | twopair | 86% | 96% | 95% | 65% | 50–100bb | g3 |
| KQ | twopair | 85% | 94% | 92% | 64% | 50–100bb | g4 |
| KT | twopair | 85% | 90% | 85% | 62% | 50–100bb | g4 |
| K8 | twopair | 83% | 86% | 76% | 58% | 50–100bb | g4 |
| K4 | twopair | 81% | 84% | 74% | 57% | 50–100bb | g4 |
| QT | twopair | 78% | 81% | 72% | 57% | 50–100bb | g4 |
| T8 | twopair | 75% | 78% | 67% | 53% | 50–100bb | g4 |
| Q8 | twopair | 75% | 76% | 68% | 51% | 50–100bb | g4 |
| AA | op | 72% | 73% | 62% | 58% | 50–100bb | g5 |
| AK | tpgk | 73% | 74% | 58% | 59% | 50–100bb | g6 |
| KJ | tpmk | 71% | 69% | 48% | 59% | 50–100bb | g6 |
| K5 | tpmk | 62% | 47% | 13% | 54% | 50–100bb | g6 |
| K9 | tpmk | 66% | 59% | 32% | 54% | 50–100bb | g6 |
| K2 | tpmk | 61% | 43% | 5% | 53% | 50–100bb | g6 |
| K6 | tpmk | 63% | 50% | 17% | 53% | 50–100bb | g6 |
| K3 | tpmk | 61% | 43% | 5% | 52% | 50–100bb | g6 |
| K7 | tpmk | 64% | 53% | 22% | 52% | 50–100bb | g6 |
| QJ | mp | 51% | 22% | 0% | 51% | 50–100bb | g7 |
| AQ | mp | 51% | 28% | 0% | 51% | 50–100bb | g7 |
| Q9 | mp | 46% | 15% | 0% | 46% | 0–5bb | g7 |
| Q7 | mp | 43% | 13% | 0% | 43% | 0–5bb | g7 |
| Q6 | mp | 42% | 12% | 0% | 43% | 0–5bb | g7 |
| Q5 | mp | 40% | 12% | 0% | 44% | 0–5bb | g7 |
| JJ | pp2 | 36% | 7% | 0% | 47% | 0–5bb | g8 |
| AT | bp | 30% | 6% | 0% | 41% | 0–5bb | g8 |
| JT | bp | 30% | 3% | 0% | 44% | 0–5bb | g8 |
| T9 | bp | 28% | 2% | 0% | 41% | 0–5bb | g8 |
| 99 | pp3 | 27% | 2% | 0% | 40% | 0–5bb | g8 |
| T7 | bp | 27% | 2% | 0% | 40% | 0–5bb | g8 |
| A8 | bp | 20% | 1% | 0% | 31% | 0–5bb | g8 |
| J8 | bp | 18% | 1% | 0% | 29% | 0–5bb | g8 |
| 98 | bp | 16% | 0% | 0% | 24% | 0–5bb | g8 |
| 87 | bp | 13% | 0% | 0% | 22% | 0–5bb | g8 |
| 86 | bp | 13% | 0% | 0% | 19% | 0–5bb | g8 |
| 77 | spp | 12% | 0% | 0% | 15% | 0–5bb | g8 |
| 55 | spp | 11% | 0% | 0% | 17% | 0–5bb | g8 |
| 66 | spp | 10% | 0% | 0% | 15% | 0–5bb | g8 |
| A4 | bp | 9% | 0% | 0% | 14% | 0–5bb | g8 |
| 43 | bp | 7% | 0% | 0% | 11% | 0–5bb | g8 |
| 54 | bp | 7% | 0% | 0% | 11% | 0–5bb | g8 |
| 64 | bp | 7% | 0% | 0% | 11% | 0–5bb | g8 |
| 33 | spp | 6% | 0% | 0% | 9% | 0–5bb | g8 |
| 22 | spp | 6% | 0% | 0% | 8% | 0–5bb | g8 |
| A9 | khnd | 5% | 0% | 0% | 8% | Pot is too big | g9 |
| A2 | khnd | 3% | 0% | 0% | 4% | Pot is too big | g9 |
| A6 | khnd | 3% | 0% | 0% | 4% | Pot is too big | g9 |
| A7 | khnd | 3% | 0% | 0% | 4% | Pot is too big | g9 |
| A3 | khnd | 3% | 0% | 0% | 4% | Pot is too big | g9 |
| A5 | khnd | 3% | 0% | 0% | 4% | Pot is too big | g9 |
