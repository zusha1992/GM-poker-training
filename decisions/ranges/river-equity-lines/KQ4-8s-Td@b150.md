# KQ4-8s-Td@b150 river (K♦ Q♦ 4♠ 8♠ T♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AJ, A9–A2, J9–J7, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 99% | 100% | 100% | 99% |
| g2 | 25–50bb | Straights | AJ, J9 | 93% | 100% | 100% | 90% |
| g3 | 15–25bb | Sets | KK, QQ, TT, 88, 44 | 91% | 100% | 100% | 81% |
| g4 | 15–25bb | Two pair | KQ, KT, K8, K4, QT, Q8, T8 | 84% | 92% | 89% | 63% |
| g5 | 0–5bb | Overpair | AA | 77% | 76% | 70% | 49% |
| g6 | 0–5bb | Top pair | AK, KJ, K9, K7–K5, K3, K2 | 64% | 58% | 41% | 31% |
| g7 | 0–5bb | Second pair | AQ, QJ, Q9, Q7–Q5 | 28% | 12% | 0% | 12% |
| g8 | 0–5bb | Small pairs | JJ, 99, 77–55, 33, 22, AT, A8, A4, JT, J8, T9, T7, 98, 87, 86, 64, 54, 43 | 9% | 0% | 0% | 7% |
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
| 64+fl | flushlo | 98% | 100% | 100% | 99% | 50–100bb | g1 |
| 54+fl | flushlo | 98% | 100% | 100% | 99% | 50–100bb | g1 |
| 43+fl | flushlo | 98% | 100% | 100% | 99% | 50–100bb | g1 |
| 87+fl | flushlo | 98% | 100% | 100% | 99% | 50–100bb | g1 |
| 76+fl | flushlo | 98% | 100% | 100% | 99% | 50–100bb | g1 |
| J7+fl | flush | 98% | 100% | 100% | 99% | 50–100bb | g1 |
| 86+fl | flushlo | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 96+fl | flush | 98% | 100% | 100% | 99% | 50–100bb | g1 |
| 97+fl | flush | 98% | 100% | 100% | 99% | 50–100bb | g1 |
| 75+fl | flushlo | 98% | 100% | 100% | 99% | 50–100bb | g1 |
| 65+fl | flushlo | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| AJ | straight | 95% | 100% | 100% | 92% | 50–100bb | g2 |
| J9 | straight | 91% | 100% | 100% | 86% | 50–100bb | g2 |
| 44 | twopair | 94% | 100% | 100% | 85% | 50–100bb | g3 |
| 88 | twopair | 92% | 100% | 100% | 82% | 50–100bb | g3 |
| QQ | twopair | 90% | 100% | 100% | 82% | 50–100bb | g3 |
| TT | twopair | 92% | 100% | 100% | 80% | 50–100bb | g3 |
| KK | twopair | 88% | 100% | 100% | 74% | 50–100bb | g3 |
| KQ | twopair | 89% | 100% | 100% | 79% | 50–100bb | g4 |
| Q8 | twopair | 76% | 82% | 78% | 47% | 25–50bb | g4 |
| KT | twopair | 87% | 98% | 97% | 72% | 50–100bb | g4 |
| K8 | twopair | 83% | 91% | 87% | 55% | 50–100bb | g4 |
| T8 | twopair | 81% | 84% | 79% | 53% | 50–100bb | g4 |
| QT | twopair | 80% | 83% | 79% | 51% | 50–100bb | g4 |
| K4 | twopair | 81% | 85% | 80% | 51% | 50–100bb | g4 |
| AA | op | 76% | 76% | 70% | 49% | 25–50bb | g5 |
| AK | tpgk | 76% | 77% | 67% | 47% | 25–50bb | g6 |
| KJ | tpmk | 72% | 70% | 60% | 36% | 25–50bb | g6 |
| K9 | tpmk | 65% | 58% | 41% | 25% | 5–15bb | g6 |
| K7 | tpmk | 57% | 48% | 28% | 23% | 0–5bb | g6 |
| K6 | tpmk | 56% | 44% | 22% | 22% | 0–5bb | g6 |
| K5 | tpmk | 53% | 40% | 16% | 23% | 0–5bb | g6 |
| K2 | tpmk | 49% | 34% | 7% | 23% | 0–5bb | g6 |
| K3 | tpmk | 48% | 34% | 7% | 22% | 0–5bb | g6 |
| AQ | mp | 32% | 16% | 0% | 15% | 0–5bb | g7 |
| QJ | mp | 31% | 13% | 0% | 12% | 0–5bb | g7 |
| Q9 | mp | 26% | 9% | 0% | 8% | 0–5bb | g7 |
| Q7 | mp | 24% | 8% | 0% | 8% | 0–5bb | g7 |
| Q6 | mp | 21% | 6% | 0% | 7% | 0–5bb | g7 |
| Q5 | mp | 20% | 5% | 0% | 8% | 0–5bb | g7 |
| JJ | pp2 | 14% | 1% | 0% | 9% | 0–5bb | g8 |
| JT | bp | 13% | 0% | 0% | 9% | 0–5bb | g8 |
| T7 | bp | 12% | 0% | 0% | 8% | 0–5bb | g8 |
| T9 | bp | 12% | 0% | 0% | 9% | 0–5bb | g8 |
| 99 | pp3 | 12% | 0% | 0% | 8% | 0–5bb | g8 |
| AT | bp | 12% | 0% | 0% | 8% | 0–5bb | g8 |
| A8 | bp | 9% | 0% | 0% | 8% | 0–5bb | g8 |
| J8 | bp | 9% | 0% | 0% | 8% | 0–5bb | g8 |
| 86 | bp | 8% | 0% | 0% | 7% | 0–5bb | g8 |
| 98 | bp | 8% | 0% | 0% | 6% | 0–5bb | g8 |
| 87 | bp | 8% | 0% | 0% | 7% | 0–5bb | g8 |
| 55 | spp | 8% | 0% | 0% | 7% | 0–5bb | g8 |
| 66 | spp | 8% | 0% | 0% | 6% | 0–5bb | g8 |
| 77 | spp | 7% | 0% | 0% | 6% | 0–5bb | g8 |
| A4 | bp | 5% | 0% | 0% | 5% | 0–5bb | g8 |
| 64 | bp | 4% | 0% | 0% | 2% | 0–5bb | g8 |
| 43 | bp | 4% | 0% | 0% | 3% | 0–5bb | g8 |
| 54 | bp | 4% | 0% | 0% | 2% | 0–5bb | g8 |
| 33 | spp | 3% | 0% | 0% | 1% | 0–5bb | g8 |
| 22 | spp | 3% | 0% | 0% | 1% | 0–5bb | g8 |
| A9 | khnd | 2% | 0% | 0% | 1% | Pot is too big | g9 |
| A3 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A6 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A2 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A7 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A5 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
