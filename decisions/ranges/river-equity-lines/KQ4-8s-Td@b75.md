# KQ4-8s-Td@b75 river (K♦ Q♦ 4♠ 8♠ T♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AJ, A9–A2, J9–J7, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 99% | 100% | 100% | 99% |
| g2 | 25–50bb | Straights | AJ, J9 | 93% | 100% | 100% | 81% |
| g3 | 15–25bb | Sets | KK, QQ, TT, 88, 44 | 90% | 100% | 100% | 68% |
| g4 | 15–25bb | Two pair | KQ, KT, K8, K4, QT, Q8, T8 | 85% | 91% | 87% | 59% |
| g5 | 0–5bb | Overpair | AA | 78% | 71% | 61% | 55% |
| g6 | 0–5bb | Top pair | AK, KJ, K9, K7–K5, K3, K2 | 69% | 56% | 34% | 40% |
| g7 | 0–5bb | Second pair | AQ, QJ, Q9, Q7–Q5 | 38% | 15% | 0% | 22% |
| g8 | 0–5bb | Small pairs | JJ, 99, 77–55, 33, 22, AT, A8, A4, JT, J8, T9, T7, 98, 87, 86, 64, 54, 43 | 9% | 0% | 0% | 9% |
| g9 | Pot is too big | Ace-high | A9, A7–A5, A3, A2 | 1% | 0% | 0% | 0% |

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
| J8+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 98+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 87+fl | flushlo | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 86+fl | flushlo | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| J7+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 64+fl | flushlo | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 54+fl | flushlo | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| 97+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 96+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 43+fl | flushlo | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 76+fl | flushlo | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| 75+fl | flushlo | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| 65+fl | flushlo | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| AJ | straight | 94% | 100% | 100% | 86% | 50–100bb | g2 |
| J9 | straight | 91% | 100% | 100% | 73% | 50–100bb | g2 |
| 44 | twopair | 92% | 100% | 100% | 73% | 50–100bb | g3 |
| 88 | twopair | 92% | 100% | 100% | 70% | 50–100bb | g3 |
| TT | twopair | 88% | 100% | 100% | 68% | 50–100bb | g3 |
| KK | twopair | 89% | 100% | 100% | 65% | 50–100bb | g3 |
| QQ | twopair | 88% | 100% | 100% | 62% | 50–100bb | g3 |
| Q8 | twopair | 77% | 75% | 67% | 46% | 25–50bb | g4 |
| KT | twopair | 88% | 96% | 95% | 64% | 50–100bb | g4 |
| KQ | twopair | 88% | 100% | 100% | 64% | 50–100bb | g4 |
| K8 | twopair | 86% | 91% | 86% | 62% | 50–100bb | g4 |
| K4 | twopair | 84% | 89% | 83% | 60% | 50–100bb | g4 |
| QT | twopair | 81% | 83% | 78% | 52% | 50–100bb | g4 |
| T8 | twopair | 81% | 79% | 70% | 51% | 50–100bb | g4 |
| AA | op | 78% | 71% | 61% | 55% | 50–100bb | g5 |
| KJ | tpmk | 76% | 66% | 50% | 43% | 15–25bb | g6 |
| K7 | tpmk | 64% | 48% | 21% | 35% | 0–5bb | g6 |
| K6 | tpmk | 64% | 44% | 16% | 35% | 0–5bb | g6 |
| K5 | tpmk | 61% | 41% | 12% | 36% | 0–5bb | g6 |
| K3 | tpmk | 58% | 37% | 5% | 36% | 0–5bb | g6 |
| K2 | tpmk | 57% | 36% | 5% | 36% | 0–5bb | g6 |
| AK | tpgk | 77% | 71% | 56% | 49% | 25–50bb | g6 |
| K9 | tpmk | 69% | 55% | 33% | 37% | 5–15bb | g6 |
| AQ | mp | 44% | 22% | 0% | 31% | 0–5bb | g7 |
| QJ | mp | 42% | 18% | 0% | 24% | 0–5bb | g7 |
| Q9 | mp | 34% | 11% | 0% | 15% | 0–5bb | g7 |
| Q7 | mp | 29% | 8% | 0% | 14% | 0–5bb | g7 |
| Q6 | mp | 26% | 7% | 0% | 13% | 0–5bb | g7 |
| Q5 | mp | 25% | 6% | 0% | 13% | 0–5bb | g7 |
| JJ | pp2 | 16% | 1% | 0% | 14% | 0–5bb | g8 |
| JT | bp | 13% | 1% | 0% | 14% | 0–5bb | g8 |
| AT | bp | 13% | 2% | 0% | 13% | 0–5bb | g8 |
| 99 | pp3 | 12% | 0% | 0% | 11% | 0–5bb | g8 |
| T9 | bp | 12% | 0% | 0% | 11% | 0–5bb | g8 |
| T7 | bp | 11% | 0% | 0% | 12% | 0–5bb | g8 |
| A8 | bp | 8% | 0% | 0% | 10% | 0–5bb | g8 |
| J8 | bp | 8% | 0% | 0% | 10% | 0–5bb | g8 |
| 98 | bp | 8% | 0% | 0% | 9% | 0–5bb | g8 |
| 87 | bp | 8% | 0% | 0% | 9% | 0–5bb | g8 |
| 86 | bp | 7% | 0% | 0% | 9% | 0–5bb | g8 |
| 55 | spp | 7% | 0% | 0% | 8% | 0–5bb | g8 |
| 66 | spp | 6% | 0% | 0% | 8% | 0–5bb | g8 |
| 77 | spp | 6% | 0% | 0% | 8% | 0–5bb | g8 |
| A4 | bp | 4% | 0% | 0% | 6% | 0–5bb | g8 |
| 43 | bp | 3% | 0% | 0% | 3% | 0–5bb | g8 |
| 64 | bp | 3% | 0% | 0% | 3% | 0–5bb | g8 |
| 54 | bp | 3% | 0% | 0% | 3% | 0–5bb | g8 |
| 22 | spp | 2% | 0% | 0% | 1% | 0–5bb | g8 |
| 33 | spp | 2% | 0% | 0% | 2% | 0–5bb | g8 |
| A9 | khnd | 1% | 0% | 0% | 1% | Pot is too big | g9 |
| A7 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
