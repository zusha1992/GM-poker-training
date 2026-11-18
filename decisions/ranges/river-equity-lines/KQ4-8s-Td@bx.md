# KQ4-8s-Td@bx river (K♦ Q♦ 4♠ 8♠ T♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AJ, A9–A2, J9–J7, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 99% | 100% | 100% | 97% |
| g2 | 25–50bb | Straights | AJ, J9 | 92% | 99% | 98% | 76% |
| g3 | 15–25bb | Sets | KK, QQ, TT, 88, 44 | 86% | 92% | 86% | 60% |
| g4 | 15–25bb | Two pair | KQ, KT, K8, K4, QT, Q8, T8 | 82% | 84% | 73% | 57% |
| g5 | 0–5bb | Overpair | AA | 77% | 74% | 56% | 60% |
| g6 | 0–5bb | Top pair | AK, KJ, K9, K7–K5, K3, K2 | 73% | 65% | 33% | 57% |
| g7 | 0–5bb | Second pair | AQ, QJ, Q9, Q7–Q5 | 57% | 28% | 0% | 53% |
| g8 | 0–5bb | Small pairs | JJ, 99, 77–55, 33, 22, AT, A8, A4, JT, J8, T9, T7, 98, 87, 86, 64, 54, 43 | 29% | 3% | 0% | 38% |
| g9 | Pot is too big | Ace-high | A9, A7–A5, A3, A2 | 5% | 0% | 0% | 5% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A6+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 64+fl | flushlo | 98% | 100% | 100% | 96% | 50–100bb | g1 |
| J7+fl | flush | 99% | 100% | 100% | 96% | 50–100bb | g1 |
| J8+fl | flush | 99% | 100% | 100% | 96% | 50–100bb | g1 |
| 43+fl | flushlo | 98% | 100% | 100% | 96% | 50–100bb | g1 |
| 96+fl | flush | 98% | 100% | 99% | 95% | 50–100bb | g1 |
| 98+fl | flush | 98% | 100% | 100% | 95% | 50–100bb | g1 |
| 54+fl | flushlo | 98% | 100% | 100% | 95% | 50–100bb | g1 |
| 97+fl | flush | 98% | 100% | 99% | 95% | 50–100bb | g1 |
| 87+fl | flushlo | 98% | 100% | 100% | 94% | 50–100bb | g1 |
| 86+fl | flushlo | 98% | 100% | 99% | 94% | 50–100bb | g1 |
| 76+fl | flushlo | 98% | 100% | 99% | 94% | 50–100bb | g1 |
| 75+fl | flushlo | 98% | 99% | 99% | 93% | 50–100bb | g1 |
| 65+fl | flushlo | 97% | 100% | 99% | 93% | 50–100bb | g1 |
| AJ | straight | 94% | 100% | 99% | 80% | 50–100bb | g2 |
| J9 | straight | 90% | 98% | 96% | 70% | 50–100bb | g2 |
| QQ | twopair | 85% | 91% | 88% | 61% | 50–100bb | g3 |
| 88 | twopair | 87% | 93% | 89% | 60% | 50–100bb | g3 |
| TT | twopair | 85% | 92% | 87% | 60% | 50–100bb | g3 |
| KK | twopair | 85% | 91% | 78% | 60% | 50–100bb | g3 |
| 44 | twopair | 87% | 91% | 86% | 57% | 50–100bb | g3 |
| T8 | twopair | 78% | 80% | 64% | 59% | 50–100bb | g4 |
| K8 | twopair | 83% | 86% | 71% | 59% | 50–100bb | g4 |
| KT | twopair | 84% | 87% | 76% | 58% | 50–100bb | g4 |
| KQ | twopair | 84% | 88% | 80% | 57% | 50–100bb | g4 |
| Q8 | twopair | 79% | 78% | 62% | 57% | 50–100bb | g4 |
| QT | twopair | 79% | 78% | 68% | 55% | 50–100bb | g4 |
| K4 | twopair | 81% | 83% | 67% | 53% | 50–100bb | g4 |
| AA | op | 77% | 74% | 55% | 60% | 50–100bb | g5 |
| KJ | tpmk | 77% | 71% | 48% | 60% | 50–100bb | g6 |
| AK | tpgk | 76% | 74% | 48% | 58% | 50–100bb | g6 |
| K9 | tpmk | 74% | 66% | 36% | 57% | 50–100bb | g6 |
| K2 | tpmk | 68% | 51% | 6% | 56% | 50–100bb | g6 |
| K3 | tpmk | 67% | 53% | 7% | 55% | 50–100bb | g6 |
| K6 | tpmk | 69% | 59% | 19% | 54% | 50–100bb | g6 |
| K5 | tpmk | 69% | 57% | 14% | 54% | 50–100bb | g6 |
| K7 | tpmk | 71% | 61% | 25% | 53% | 50–100bb | g6 |
| QJ | mp | 61% | 30% | 0% | 56% | 50–100bb | g7 |
| AQ | mp | 60% | 36% | 0% | 55% | 50–100bb | g7 |
| Q9 | mp | 55% | 24% | 0% | 53% | 50–100bb | g7 |
| Q6 | mp | 52% | 19% | 0% | 49% | 0–5bb | g7 |
| Q7 | mp | 51% | 21% | 0% | 48% | 0–5bb | g7 |
| Q5 | mp | 50% | 19% | 0% | 49% | 0–5bb | g7 |
| JJ | pp2 | 47% | 10% | 0% | 56% | 50–100bb | g8 |
| JT | bp | 40% | 6% | 0% | 49% | 0–5bb | g8 |
| AT | bp | 40% | 9% | 0% | 49% | 0–5bb | g8 |
| T9 | bp | 37% | 2% | 0% | 48% | 0–5bb | g8 |
| T7 | bp | 36% | 1% | 0% | 42% | 0–5bb | g8 |
| 99 | pp3 | 35% | 1% | 0% | 48% | 0–5bb | g8 |
| J8 | bp | 33% | 0% | 0% | 44% | 0–5bb | g8 |
| 98 | bp | 33% | 1% | 0% | 43% | 0–5bb | g8 |
| A8 | bp | 31% | 1% | 0% | 44% | 0–5bb | g8 |
| 86 | bp | 30% | 1% | 0% | 40% | 0–5bb | g8 |
| 77 | spp | 29% | 1% | 0% | 36% | 0–5bb | g8 |
| 87 | bp | 29% | 1% | 0% | 39% | 0–5bb | g8 |
| 66 | spp | 25% | 0% | 0% | 33% | 0–5bb | g8 |
| 55 | spp | 21% | 1% | 0% | 31% | 0–5bb | g8 |
| A4 | bp | 17% | 0% | 0% | 26% | 0–5bb | g8 |
| 54 | bp | 14% | 0% | 0% | 18% | 0–5bb | g8 |
| 64 | bp | 14% | 0% | 0% | 16% | 0–5bb | g8 |
| 43 | bp | 13% | 0% | 0% | 16% | 0–5bb | g8 |
| 33 | spp | 11% | 0% | 0% | 11% | 0–5bb | g8 |
| 22 | spp | 8% | 0% | 0% | 9% | 0–5bb | g8 |
| A9 | khnd | 7% | 0% | 0% | 8% | Pot is too big | g9 |
| A7 | khnd | 4% | 0% | 0% | 5% | Pot is too big | g9 |
| A5 | khnd | 4% | 0% | 0% | 5% | Pot is too big | g9 |
| A3 | khnd | 4% | 0% | 0% | 5% | Pot is too big | g9 |
| A6 | khnd | 4% | 0% | 0% | 5% | Pot is too big | g9 |
| A2 | khnd | 4% | 0% | 0% | 5% | Pot is too big | g9 |
