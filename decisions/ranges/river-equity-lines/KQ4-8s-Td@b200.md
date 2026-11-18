# KQ4-8s-Td@b200 river (K♦ Q♦ 4♠ 8♠ T♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AJ, A9–A2, J9–J7, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 99% | 100% | 100% | 100% |
| g2 | 25–50bb | Straights | AJ, J9 | 94% | 94% | 94% | 94% |
| g3 | 15–25bb | Sets | KK, QQ, TT, 88, 44 | 92% | 89% | 88% | 90% |
| g4 | 15–25bb | Two pair | KQ, KT, K8, K4, QT, Q8, T8 | 85% | 69% | 65% | 69% |
| g5 | 0–5bb | Overpair | AA | 76% | 48% | 41% | 47% |
| g6 | 0–5bb | Top pair | AK, KJ, K9, K7–K5, K3, K2 | 64% | 26% | 15% | 26% |
| g7 | 0–5bb | Second pair | AQ, QJ, Q9, Q7–Q5 | 27% | 7% | 0% | 8% |
| g8 | 0–5bb | Small pairs | JJ, 99, 77–55, 33, 22, AT, A8, A4, JT, J8, T9, T7, 98, 87, 86, 64, 54, 43 | 9% | 5% | 0% | 5% |
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
| J8+fl | flush | 99% | 99% | 100% | 100% | 50–100bb | g1 |
| 54+fl | flushlo | 98% | 99% | 99% | 100% | 50–100bb | g1 |
| 43+fl | flushlo | 98% | 100% | 99% | 99% | 50–100bb | g1 |
| 64+fl | flushlo | 99% | 99% | 100% | 99% | 50–100bb | g1 |
| 98+fl | flush | 99% | 99% | 99% | 99% | 50–100bb | g1 |
| J7+fl | flush | 98% | 99% | 99% | 99% | 50–100bb | g1 |
| 87+fl | flushlo | 99% | 99% | 99% | 99% | 50–100bb | g1 |
| 86+fl | flushlo | 98% | 99% | 99% | 99% | 50–100bb | g1 |
| 96+fl | flush | 98% | 99% | 99% | 99% | 50–100bb | g1 |
| 75+fl | flushlo | 98% | 99% | 99% | 99% | 50–100bb | g1 |
| 76+fl | flushlo | 98% | 99% | 99% | 99% | 50–100bb | g1 |
| 97+fl | flush | 98% | 99% | 99% | 99% | 50–100bb | g1 |
| 65+fl | flushlo | 97% | 98% | 98% | 98% | 50–100bb | g1 |
| AJ | straight | 95% | 95% | 94% | 95% | 50–100bb | g2 |
| J9 | straight | 93% | 93% | 92% | 92% | 50–100bb | g2 |
| 44 | twopair | 94% | 92% | 91% | 92% | 50–100bb | g3 |
| QQ | twopair | 91% | 91% | 90% | 91% | 50–100bb | g3 |
| TT | twopair | 92% | 90% | 89% | 91% | 50–100bb | g3 |
| 88 | twopair | 93% | 90% | 88% | 90% | 50–100bb | g3 |
| KK | twopair | 88% | 84% | 79% | 84% | 50–100bb | g3 |
| KQ | twopair | 90% | 86% | 85% | 88% | 50–100bb | g4 |
| KT | twopair | 89% | 80% | 77% | 80% | 50–100bb | g4 |
| K8 | twopair | 83% | 62% | 56% | 63% | 50–100bb | g4 |
| T8 | twopair | 80% | 55% | 48% | 55% | 50–100bb | g4 |
| QT | twopair | 79% | 54% | 50% | 54% | 50–100bb | g4 |
| K4 | twopair | 80% | 52% | 46% | 53% | 50–100bb | g4 |
| Q8 | twopair | 78% | 52% | 48% | 52% | 50–100bb | g4 |
| AA | op | 76% | 47% | 41% | 47% | 0–5bb | g5 |
| AK | tpgk | 76% | 45% | 36% | 45% | 0–5bb | g6 |
| KJ | tpmk | 72% | 33% | 24% | 33% | 0–5bb | g6 |
| K9 | tpmk | 65% | 20% | 7% | 20% | 0–5bb | g6 |
| K7 | tpmk | 59% | 16% | 2% | 15% | 0–5bb | g6 |
| K6 | tpmk | 56% | 15% | 2% | 15% | 0–5bb | g6 |
| K5 | tpmk | 52% | 14% | 2% | 14% | 0–5bb | g6 |
| K3 | tpmk | 46% | 13% | 1% | 14% | 0–5bb | g6 |
| K2 | tpmk | 45% | 14% | 1% | 14% | 0–5bb | g6 |
| QJ | mp | 30% | 8% | 0% | 8% | 0–5bb | g7 |
| AQ | mp | 28% | 8% | 0% | 9% | 0–5bb | g7 |
| Q9 | mp | 28% | 6% | 0% | 6% | 0–5bb | g7 |
| Q7 | mp | 23% | 6% | 0% | 6% | 0–5bb | g7 |
| Q6 | mp | 21% | 6% | 0% | 6% | 0–5bb | g7 |
| Q5 | mp | 20% | 6% | 0% | 7% | 0–5bb | g7 |
| JJ | pp2 | 15% | 7% | 0% | 7% | 0–5bb | g8 |
| T9 | bp | 13% | 7% | 0% | 6% | 0–5bb | g8 |
| JT | bp | 13% | 8% | 0% | 7% | 0–5bb | g8 |
| AT | bp | 13% | 7% | 0% | 6% | 0–5bb | g8 |
| T7 | bp | 12% | 7% | 0% | 6% | 0–5bb | g8 |
| 99 | pp3 | 12% | 6% | 0% | 7% | 0–5bb | g8 |
| 86 | bp | 9% | 5% | 0% | 6% | 0–5bb | g8 |
| J8 | bp | 9% | 6% | 0% | 7% | 0–5bb | g8 |
| 87 | bp | 9% | 6% | 0% | 5% | 0–5bb | g8 |
| 98 | bp | 8% | 7% | 0% | 6% | 0–5bb | g8 |
| A8 | bp | 8% | 6% | 0% | 6% | 0–5bb | g8 |
| 55 | spp | 8% | 6% | 0% | 5% | 0–5bb | g8 |
| 77 | spp | 8% | 5% | 0% | 5% | 0–5bb | g8 |
| 66 | spp | 8% | 5% | 0% | 5% | 0–5bb | g8 |
| A4 | bp | 6% | 4% | 0% | 4% | 0–5bb | g8 |
| 64 | bp | 4% | 2% | 0% | 2% | 0–5bb | g8 |
| 54 | bp | 4% | 2% | 0% | 2% | 0–5bb | g8 |
| 43 | bp | 4% | 2% | 0% | 2% | 0–5bb | g8 |
| 33 | spp | 3% | 1% | 0% | 1% | 0–5bb | g8 |
| 22 | spp | 3% | 1% | 0% | 1% | 0–5bb | g8 |
| A9 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A3 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A6 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A7 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A2 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A5 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
