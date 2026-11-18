# KQ4-8s-Td@x75 river (K♦ Q♦ 4♠ 8♠ T♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AJ, A9–A2, J9–J7, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 99% | 100% | 100% | 97% |
| g2 | 25–50bb | Straights | AJ, J9 | 91% | 98% | 98% | 77% |
| g3 | 15–25bb | Sets | KK, QQ, TT, 88, 44 | 87% | 96% | 94% | 66% |
| g4 | 15–25bb | Two pair | KQ, KT, K8, K4, QT, Q8, T8 | 82% | 87% | 80% | 59% |
| g5 | 0–5bb | Overpair | AA | 73% | 74% | 62% | 59% |
| g6 | 0–5bb | Top pair | AK, KJ, K9, K7–K5, K3, K2 | 68% | 60% | 33% | 56% |
| g7 | 0–5bb | Second pair | AQ, QJ, Q9, Q7–Q5 | 48% | 20% | 0% | 48% |
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
| J8+fl | flush | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| 87+fl | flushlo | 98% | 100% | 100% | 96% | 50–100bb | g1 |
| 86+fl | flushlo | 98% | 100% | 100% | 96% | 50–100bb | g1 |
| J7+fl | flush | 98% | 100% | 100% | 96% | 50–100bb | g1 |
| 97+fl | flush | 98% | 100% | 99% | 95% | 50–100bb | g1 |
| 96+fl | flush | 97% | 100% | 99% | 94% | 50–100bb | g1 |
| 76+fl | flushlo | 97% | 100% | 99% | 94% | 50–100bb | g1 |
| 75+fl | flushlo | 97% | 99% | 99% | 93% | 50–100bb | g1 |
| 65+fl | flushlo | 96% | 99% | 99% | 93% | 50–100bb | g1 |
| 64+fl | flushlo | 96% | 99% | 99% | 93% | 50–100bb | g1 |
| 54+fl | flushlo | 96% | 100% | 99% | 92% | 50–100bb | g1 |
| 43+fl | flushlo | 96% | 100% | 99% | 92% | 50–100bb | g1 |
| AJ | straight | 92% | 99% | 98% | 80% | 50–100bb | g2 |
| J9 | straight | 89% | 97% | 96% | 71% | 50–100bb | g2 |
| 44 | twopair | 89% | 97% | 96% | 68% | 50–100bb | g3 |
| TT | twopair | 87% | 96% | 94% | 66% | 50–100bb | g3 |
| QQ | twopair | 86% | 96% | 95% | 66% | 50–100bb | g3 |
| 88 | twopair | 89% | 97% | 95% | 65% | 50–100bb | g3 |
| KK | twopair | 86% | 95% | 90% | 65% | 50–100bb | g3 |
| KQ | twopair | 86% | 94% | 92% | 64% | 50–100bb | g4 |
| KT | twopair | 85% | 91% | 84% | 61% | 50–100bb | g4 |
| K4 | twopair | 82% | 84% | 74% | 58% | 50–100bb | g4 |
| K8 | twopair | 83% | 86% | 77% | 57% | 50–100bb | g4 |
| QT | twopair | 77% | 79% | 73% | 57% | 50–100bb | g4 |
| Q8 | twopair | 73% | 76% | 67% | 52% | 50–100bb | g4 |
| T8 | twopair | 74% | 78% | 67% | 52% | 50–100bb | g4 |
| AA | op | 73% | 74% | 62% | 59% | 50–100bb | g5 |
| AK | tpgk | 73% | 74% | 56% | 60% | 50–100bb | g6 |
| KJ | tpmk | 71% | 68% | 49% | 59% | 50–100bb | g6 |
| K9 | tpmk | 67% | 58% | 31% | 55% | 50–100bb | g6 |
| K7 | tpmk | 64% | 53% | 23% | 53% | 50–100bb | g6 |
| K5 | tpmk | 63% | 48% | 13% | 52% | 50–100bb | g6 |
| K2 | tpmk | 60% | 42% | 5% | 52% | 50–100bb | g6 |
| K3 | tpmk | 60% | 43% | 5% | 52% | 50–100bb | g6 |
| K6 | tpmk | 64% | 49% | 17% | 52% | 50–100bb | g6 |
| AQ | mp | 52% | 27% | 0% | 51% | 50–100bb | g7 |
| QJ | mp | 52% | 22% | 0% | 50% | 50–100bb | g7 |
| Q9 | mp | 46% | 16% | 0% | 45% | 0–5bb | g7 |
| Q7 | mp | 43% | 12% | 0% | 44% | 0–5bb | g7 |
| Q6 | mp | 41% | 13% | 0% | 42% | 0–5bb | g7 |
| Q5 | mp | 40% | 11% | 0% | 43% | 0–5bb | g7 |
| JJ | pp2 | 35% | 7% | 0% | 49% | 0–5bb | g8 |
| AT | bp | 30% | 7% | 0% | 41% | 0–5bb | g8 |
| JT | bp | 30% | 3% | 0% | 44% | 0–5bb | g8 |
| T9 | bp | 28% | 2% | 0% | 40% | 0–5bb | g8 |
| 99 | pp3 | 28% | 2% | 0% | 38% | 0–5bb | g8 |
| T7 | bp | 27% | 2% | 0% | 40% | 0–5bb | g8 |
| A8 | bp | 20% | 1% | 0% | 32% | 0–5bb | g8 |
| J8 | bp | 19% | 1% | 0% | 27% | 0–5bb | g8 |
| 98 | bp | 17% | 0% | 0% | 24% | 0–5bb | g8 |
| 87 | bp | 15% | 0% | 0% | 20% | 0–5bb | g8 |
| 86 | bp | 14% | 0% | 0% | 19% | 0–5bb | g8 |
| 77 | spp | 11% | 0% | 0% | 16% | 0–5bb | g8 |
| 66 | spp | 11% | 0% | 0% | 15% | 0–5bb | g8 |
| 55 | spp | 11% | 0% | 0% | 17% | 0–5bb | g8 |
| A4 | bp | 8% | 0% | 0% | 14% | 0–5bb | g8 |
| 43 | bp | 7% | 0% | 0% | 10% | 0–5bb | g8 |
| 64 | bp | 7% | 0% | 0% | 10% | 0–5bb | g8 |
| 54 | bp | 7% | 0% | 0% | 10% | 0–5bb | g8 |
| 33 | spp | 6% | 0% | 0% | 9% | 0–5bb | g8 |
| 22 | spp | 6% | 0% | 0% | 8% | 0–5bb | g8 |
| A9 | khnd | 5% | 0% | 0% | 7% | Pot is too big | g9 |
| A7 | khnd | 3% | 0% | 0% | 4% | Pot is too big | g9 |
| A3 | khnd | 3% | 0% | 0% | 4% | Pot is too big | g9 |
| A5 | khnd | 3% | 0% | 0% | 4% | Pot is too big | g9 |
| A2 | khnd | 3% | 0% | 0% | 4% | Pot is too big | g9 |
| A6 | khnd | 3% | 0% | 0% | 4% | Pot is too big | g9 |
