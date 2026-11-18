# KQ4-8s-Td@xx river (K♦ Q♦ 4♠ 8♠ T♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AJ, A9–A2, J9–J7, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 98% | 100% | 99% | 94% |
| g2 | 25–50bb | Straights | AJ, J9 | 90% | 97% | 95% | 70% |
| g3 | 15–25bb | Sets | KK, QQ, TT, 88, 44 | 85% | 92% | 81% | 68% |
| g4 | 15–25bb | Two pair | KQ, KT, K8, K4, QT, Q8, T8 | 81% | 87% | 71% | 67% |
| g5 | 0–5bb | Overpair | AA | 76% | 83% | 62% | 68% |
| g6 | 0–5bb | Top pair | AK, KJ, K9, K7–K5, K3, K2 | 74% | 75% | 37% | 68% |
| g7 | 0–5bb | Second pair | AQ, QJ, Q9, Q7–Q5 | 65% | 43% | 0% | 68% |
| g8 | 0–5bb | Small pairs | JJ, 99, 77–55, 33, 22, AT, A8, A4, JT, J8, T9, T7, 98, 87, 86, 64, 54, 43 | 43% | 8% | 0% | 61% |
| g9 | Pot is too big | Ace-high | A9, A7–A5, A3, A2 | 18% | 0% | 0% | 37% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A6+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J8+fl | flush | 98% | 100% | 100% | 93% | 50–100bb | g1 |
| J7+fl | flush | 98% | 100% | 100% | 93% | 50–100bb | g1 |
| 96+fl | flush | 97% | 99% | 98% | 89% | 50–100bb | g1 |
| 86+fl | flushlo | 97% | 100% | 99% | 89% | 50–100bb | g1 |
| 97+fl | flush | 97% | 99% | 98% | 89% | 50–100bb | g1 |
| 87+fl | flushlo | 96% | 100% | 99% | 88% | 50–100bb | g1 |
| 98+fl | flush | 97% | 100% | 99% | 88% | 50–100bb | g1 |
| 76+fl | flushlo | 97% | 99% | 98% | 87% | 50–100bb | g1 |
| 65+fl | flushlo | 96% | 99% | 98% | 85% | 50–100bb | g1 |
| 75+fl | flushlo | 96% | 99% | 97% | 85% | 50–100bb | g1 |
| 64+fl | flushlo | 96% | 99% | 97% | 84% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 99% | 98% | 82% | 50–100bb | g1 |
| 43+fl | flushlo | 94% | 99% | 97% | 80% | 50–100bb | g1 |
| AJ | straight | 91% | 98% | 96% | 71% | 50–100bb | g2 |
| J9 | straight | 88% | 96% | 92% | 68% | 50–100bb | g2 |
| KK | twopair | 85% | 90% | 68% | 69% | 50–100bb | g3 |
| 44 | twopair | 86% | 93% | 85% | 68% | 50–100bb | g3 |
| TT | twopair | 84% | 92% | 83% | 68% | 50–100bb | g3 |
| QQ | twopair | 85% | 91% | 83% | 68% | 50–100bb | g3 |
| 88 | twopair | 87% | 93% | 85% | 67% | 50–100bb | g3 |
| K8 | twopair | 82% | 87% | 70% | 68% | 50–100bb | g4 |
| QT | twopair | 78% | 84% | 70% | 68% | 50–100bb | g4 |
| KT | twopair | 82% | 88% | 71% | 68% | 50–100bb | g4 |
| Q8 | twopair | 78% | 84% | 67% | 67% | 50–100bb | g4 |
| KQ | twopair | 83% | 90% | 76% | 67% | 50–100bb | g4 |
| K4 | twopair | 81% | 87% | 66% | 66% | 50–100bb | g4 |
| T8 | twopair | 76% | 85% | 67% | 65% | 50–100bb | g4 |
| AA | op | 76% | 83% | 62% | 68% | 50–100bb | g5 |
| KJ | tpmk | 76% | 82% | 53% | 69% | 50–100bb | g6 |
| AK | tpgk | 77% | 83% | 56% | 69% | 50–100bb | g6 |
| K9 | tpmk | 74% | 76% | 38% | 68% | 50–100bb | g6 |
| K6 | tpmk | 72% | 69% | 21% | 68% | 50–100bb | g6 |
| K7 | tpmk | 72% | 70% | 25% | 68% | 50–100bb | g6 |
| K2 | tpmk | 71% | 63% | 6% | 67% | 50–100bb | g6 |
| K5 | tpmk | 70% | 67% | 15% | 67% | 50–100bb | g6 |
| K3 | tpmk | 70% | 63% | 7% | 66% | 50–100bb | g6 |
| QJ | mp | 69% | 46% | 0% | 69% | 50–100bb | g7 |
| AQ | mp | 66% | 50% | 0% | 69% | 50–100bb | g7 |
| Q9 | mp | 64% | 39% | 0% | 68% | 50–100bb | g7 |
| Q7 | mp | 61% | 36% | 0% | 67% | 50–100bb | g7 |
| Q5 | mp | 60% | 32% | 0% | 67% | 50–100bb | g7 |
| Q6 | mp | 60% | 34% | 0% | 66% | 50–100bb | g7 |
| JJ | pp2 | 59% | 26% | 0% | 69% | 50–100bb | g8 |
| T9 | bp | 52% | 12% | 0% | 69% | 50–100bb | g8 |
| JT | bp | 55% | 17% | 0% | 68% | 50–100bb | g8 |
| AT | bp | 55% | 21% | 0% | 68% | 50–100bb | g8 |
| A8 | bp | 44% | 4% | 0% | 68% | 50–100bb | g8 |
| 99 | pp3 | 49% | 7% | 0% | 67% | 50–100bb | g8 |
| T7 | bp | 49% | 9% | 0% | 66% | 50–100bb | g8 |
| J8 | bp | 45% | 4% | 0% | 63% | 50–100bb | g8 |
| 98 | bp | 43% | 3% | 0% | 63% | 50–100bb | g8 |
| 87 | bp | 41% | 2% | 0% | 61% | 50–100bb | g8 |
| 86 | bp | 41% | 2% | 0% | 59% | 50–100bb | g8 |
| 77 | spp | 38% | 2% | 0% | 56% | 50–100bb | g8 |
| 55 | spp | 34% | 2% | 0% | 56% | 50–100bb | g8 |
| 66 | spp | 36% | 2% | 0% | 56% | 50–100bb | g8 |
| A4 | bp | 32% | 1% | 0% | 55% | 50–100bb | g8 |
| 64 | bp | 31% | 0% | 0% | 48% | 0–5bb | g8 |
| 54 | bp | 31% | 0% | 0% | 49% | 0–5bb | g8 |
| 43 | bp | 30% | 0% | 0% | 49% | 0–5bb | g8 |
| 33 | spp | 27% | 0% | 0% | 45% | 0–5bb | g8 |
| 22 | spp | 27% | 0% | 0% | 44% | 0–5bb | g8 |
| A9 | khnd | 24% | 0% | 0% | 42% | Pot is too big | g9 |
| A3 | khnd | 17% | 0% | 0% | 36% | Pot is too big | g9 |
| A5 | khnd | 16% | 0% | 0% | 35% | Pot is too big | g9 |
| A2 | khnd | 16% | 0% | 0% | 37% | Pot is too big | g9 |
| A7 | khnd | 16% | 0% | 0% | 36% | Pot is too big | g9 |
| A6 | khnd | 16% | 0% | 0% | 37% | Pot is too big | g9 |
