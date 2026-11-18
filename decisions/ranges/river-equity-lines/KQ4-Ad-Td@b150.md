# KQ4-Ad-Td@b150 river (K♦ Q♦ 4♠ A♦ T♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: JJ, 99–22, AJ, A9–A2, KJ, K9–K6, QJ, Q9, JT–J7, T9, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 87% | 87% | 87% | 82% |
| g2 | 25–50bb | Straights | JJ, AJ, KJ, QJ, JT–J7 | 66% | 64% | 64% | 56% |
| g3 | 0–5bb | Sets | AA–QQ, TT, 44 | 52% | 42% | 42% | 34% |
| g4 | 0–5bb | Two pair | AK, AQ, AT, A4, KQ, KT, K4, QT | 39% | 24% | 24% | 21% |
| g5 | 0–5bb | Top pair, weak kicker | A9–A5, A3, A2 | 18% | 3% | 3% | 8% |
| g6 | 0–5bb | Second pair | K9–K5, K3, K2 | 8% | 0% | 0% | 2% |
| g7 | 0–5bb | Small pairs | 99–55, 33, 22, Q9–Q5, T9–T7, 64, 54, 43 | 4% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| QJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| JJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| JT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J9+fl | flush | 95% | 93% | 93% | 90% | 50–100bb | g1 |
| Q9+fl | flush | 90% | 85% | 86% | 81% | 50–100bb | g1 |
| 96+fl | flush | 89% | 86% | 85% | 81% | 50–100bb | g1 |
| 97+fl | flush | 90% | 84% | 86% | 80% | 50–100bb | g1 |
| K9+fl | flush | 90% | 86% | 85% | 80% | 50–100bb | g1 |
| 98+fl | flush | 89% | 86% | 85% | 80% | 50–100bb | g1 |
| 99+fl | flush | 89% | 87% | 86% | 80% | 50–100bb | g1 |
| A9+fl | flush | 89% | 84% | 84% | 79% | 50–100bb | g1 |
| T9+fl | flush | 90% | 84% | 84% | 78% | 50–100bb | g1 |
| K8+fl | flush | 86% | 84% | 84% | 78% | 50–100bb | g1 |
| 87+fl | flush | 86% | 85% | 85% | 77% | 50–100bb | g1 |
| 88+fl | flush | 86% | 85% | 84% | 77% | 50–100bb | g1 |
| 86+fl | flush | 86% | 85% | 84% | 77% | 50–100bb | g1 |
| K7+fl | flushlo | 85% | 85% | 83% | 77% | 50–100bb | g1 |
| 43+fl | flushlo | 82% | 83% | 83% | 76% | 50–100bb | g1 |
| 44+fl | flushlo | 80% | 81% | 81% | 76% | 50–100bb | g1 |
| 55+fl | flushlo | 82% | 83% | 83% | 76% | 50–100bb | g1 |
| A6+fl | flushlo | 82% | 82% | 82% | 76% | 50–100bb | g1 |
| 65+fl | flushlo | 83% | 84% | 83% | 76% | 50–100bb | g1 |
| 66+fl | flushlo | 83% | 84% | 84% | 76% | 50–100bb | g1 |
| A8+fl | flush | 85% | 84% | 84% | 76% | 50–100bb | g1 |
| 77+fl | flushlo | 84% | 84% | 84% | 75% | 50–100bb | g1 |
| 64+fl | flushlo | 82% | 83% | 83% | 75% | 50–100bb | g1 |
| A7+fl | flushlo | 83% | 83% | 83% | 75% | 50–100bb | g1 |
| 33+fl | flushlo | 77% | 79% | 79% | 75% | 50–100bb | g1 |
| K6+fl | flushlo | 84% | 84% | 84% | 75% | 50–100bb | g1 |
| 76+fl | flushlo | 84% | 84% | 83% | 75% | 50–100bb | g1 |
| 54+fl | flushlo | 82% | 83% | 84% | 75% | 50–100bb | g1 |
| 22+fl | flushlo | 78% | 78% | 79% | 75% | 50–100bb | g1 |
| A4+fl | flushlo | 82% | 82% | 81% | 75% | 50–100bb | g1 |
| 75+fl | flushlo | 84% | 84% | 83% | 75% | 50–100bb | g1 |
| A2+fl | flushlo | 76% | 79% | 79% | 74% | 50–100bb | g1 |
| A3+fl | flushlo | 77% | 78% | 78% | 74% | 50–100bb | g1 |
| A5+fl | flushlo | 81% | 82% | 83% | 74% | 50–100bb | g1 |
| JJ | straight | 69% | 67% | 66% | 58% | 50–100bb | g2 |
| J7 | straight | 67% | 65% | 64% | 57% | 50–100bb | g2 |
| QJ | straight | 66% | 65% | 64% | 57% | 50–100bb | g2 |
| J8 | straight | 68% | 63% | 64% | 56% | 50–100bb | g2 |
| KJ | straight | 67% | 65% | 65% | 56% | 50–100bb | g2 |
| AJ | straight | 66% | 62% | 62% | 56% | 50–100bb | g2 |
| J9 | straight | 65% | 64% | 65% | 55% | 50–100bb | g2 |
| JT | straight | 65% | 61% | 62% | 53% | 50–100bb | g2 |
| QQ | twopair | 55% | 49% | 48% | 36% | 0–5bb | g3 |
| KK | twopair | 54% | 47% | 48% | 36% | 0–5bb | g3 |
| 44 | twopair | 50% | 43% | 43% | 37% | 0–5bb | g3 |
| AA | twopair | 50% | 34% | 35% | 35% | 0–5bb | g3 |
| TT | twopair | 48% | 38% | 37% | 27% | 0–5bb | g3 |
| AK | twopair | 53% | 44% | 43% | 35% | 0–5bb | g4 |
| AQ | twopair | 53% | 44% | 44% | 36% | 0–5bb | g4 |
| AT | twopair | 45% | 29% | 31% | 24% | 0–5bb | g4 |
| A4 | twopair | 35% | 15% | 14% | 15% | 0–5bb | g4 |
| KT | twopair | 31% | 13% | 12% | 12% | 0–5bb | g4 |
| KQ | twopair | 30% | 11% | 12% | 12% | 0–5bb | g4 |
| QT | twopair | 29% | 13% | 12% | 12% | 0–5bb | g4 |
| K4 | twopair | 29% | 11% | 11% | 10% | 0–5bb | g4 |
| A9 | tpmk | 22% | 7% | 7% | 9% | 0–5bb | g5 |
| A8 | tpmk | 21% | 6% | 6% | 8% | 0–5bb | g5 |
| A7 | tpmk | 18% | 3% | 3% | 8% | 0–5bb | g5 |
| A6 | tpmk | 17% | 3% | 2% | 7% | 0–5bb | g5 |
| A5 | tpmk | 16% | 2% | 2% | 8% | 0–5bb | g5 |
| A3 | tpmk | 15% | 1% | 1% | 8% | 0–5bb | g5 |
| A2 | tpmk | 15% | 1% | 1% | 7% | 0–5bb | g5 |
| K9 | mp | 9% | 0% | 0% | 2% | 0–5bb | g6 |
| K8 | mp | 9% | 0% | 0% | 2% | 0–5bb | g6 |
| K6 | mp | 8% | 0% | 0% | 1% | 0–5bb | g6 |
| K3 | mp | 8% | 0% | 0% | 1% | 0–5bb | g6 |
| K5 | mp | 8% | 0% | 0% | 2% | 0–5bb | g6 |
| K2 | mp | 7% | 0% | 0% | 2% | 0–5bb | g6 |
| K7 | mp | 7% | 0% | 0% | 2% | 0–5bb | g6 |
| Q9 | bp | 5% | 0% | 0% | 0% | 0–5bb | g7 |
| Q5 | bp | 5% | 0% | 0% | 0% | 0–5bb | g7 |
| Q8 | bp | 5% | 0% | 0% | 0% | 0–5bb | g7 |
| T9 | bp | 5% | 0% | 0% | 0% | 0–5bb | g7 |
| T8 | bp | 5% | 0% | 0% | 0% | 0–5bb | g7 |
| 99 | pp3 | 5% | 0% | 0% | 0% | 0–5bb | g7 |
| Q7 | bp | 4% | 0% | 0% | 0% | 0–5bb | g7 |
| Q6 | bp | 4% | 0% | 0% | 0% | 0–5bb | g7 |
| 88 | spp | 4% | 0% | 0% | 0% | 0–5bb | g7 |
| T7 | bp | 4% | 0% | 0% | 0% | 0–5bb | g7 |
| 55 | spp | 4% | 0% | 0% | 0% | 0–5bb | g7 |
| 66 | spp | 3% | 0% | 0% | 0% | 0–5bb | g7 |
| 77 | spp | 3% | 0% | 0% | 0% | 0–5bb | g7 |
| 43 | bp | 1% | 0% | 0% | 0% | 0–5bb | g7 |
| 64 | bp | 1% | 0% | 0% | 0% | 0–5bb | g7 |
| 54 | bp | 1% | 0% | 0% | 0% | 0–5bb | g7 |
| 33 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 22 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
