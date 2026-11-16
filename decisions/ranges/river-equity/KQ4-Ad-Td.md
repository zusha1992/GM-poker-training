# KQ4-Ad-Td river (K♦ Q♦ 4♠ A♦ T♦): equity groups

Generated 2026-11-16 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: JJ, 99–22, AJ, A9–A2, KJ, K9–K6, QJ, Q9, JT–J7, T9, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 88% | 87% | 87% | 82% |
| g2 | 25–50bb | Straights | JJ, AJ, KJ, QJ, JT–J7 | 69% | 63% | 62% | 53% |
| g3 | 0–5bb | Sets | AA–QQ, TT, 44 | 53% | 41% | 40% | 28% |
| g4 | 0–5bb | Two pair | AK, AQ, AT, A4, KQ, KT, K4, QT | 43% | 28% | 27% | 21% |
| g5 | 0–5bb | Top pair, weak kicker | A9–A5, A3, A2 | 14% | 6% | 4% | 5% |
| g6 | 0–5bb | Second pair | K9–K5, K3, K2 | 6% | 1% | 0% | 2% |
| g7 | 0–5bb | Small pairs | 99–55, 33, 22, Q9–Q5, T9–T7, 64, 54, 43 | 2% | 0% | 0% | 0% |

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
| J9+fl | flush | 96% | 94% | 94% | 89% | 50–100bb | g1 |
| Q9+fl | flush | 91% | 87% | 87% | 79% | 50–100bb | g1 |
| 99+fl | flush | 90% | 87% | 87% | 79% | 50–100bb | g1 |
| A9+fl | flush | 90% | 86% | 85% | 79% | 50–100bb | g1 |
| K9+fl | flush | 90% | 87% | 87% | 79% | 50–100bb | g1 |
| 97+fl | flush | 90% | 87% | 87% | 79% | 50–100bb | g1 |
| 96+fl | flush | 91% | 86% | 86% | 79% | 50–100bb | g1 |
| 98+fl | flush | 91% | 87% | 86% | 79% | 50–100bb | g1 |
| T9+fl | flush | 90% | 87% | 86% | 78% | 50–100bb | g1 |
| 86+fl | flush | 87% | 85% | 85% | 77% | 50–100bb | g1 |
| K8+fl | flush | 87% | 85% | 85% | 77% | 50–100bb | g1 |
| 87+fl | flush | 86% | 84% | 85% | 77% | 50–100bb | g1 |
| 88+fl | flush | 87% | 85% | 84% | 76% | 50–100bb | g1 |
| K6+fl | flushlo | 84% | 82% | 83% | 76% | 50–100bb | g1 |
| 76+fl | flushlo | 85% | 83% | 82% | 76% | 50–100bb | g1 |
| 22+fl | flushlo | 80% | 80% | 80% | 76% | 50–100bb | g1 |
| A8+fl | flush | 85% | 84% | 84% | 76% | 50–100bb | g1 |
| 66+fl | flushlo | 83% | 83% | 83% | 76% | 50–100bb | g1 |
| K7+fl | flushlo | 85% | 84% | 84% | 76% | 50–100bb | g1 |
| 75+fl | flushlo | 84% | 84% | 83% | 76% | 50–100bb | g1 |
| 43+fl | flushlo | 82% | 82% | 83% | 76% | 50–100bb | g1 |
| A7+fl | flushlo | 84% | 82% | 83% | 76% | 50–100bb | g1 |
| A3+fl | flushlo | 79% | 80% | 79% | 76% | 50–100bb | g1 |
| 64+fl | flushlo | 83% | 82% | 83% | 76% | 50–100bb | g1 |
| A2+fl | flushlo | 79% | 81% | 80% | 76% | 50–100bb | g1 |
| 77+fl | flushlo | 84% | 83% | 82% | 75% | 50–100bb | g1 |
| A6+fl | flushlo | 82% | 83% | 82% | 75% | 50–100bb | g1 |
| 33+fl | flushlo | 80% | 81% | 79% | 75% | 50–100bb | g1 |
| 55+fl | flushlo | 82% | 83% | 83% | 75% | 50–100bb | g1 |
| A4+fl | flushlo | 81% | 81% | 82% | 75% | 50–100bb | g1 |
| 44+fl | flushlo | 82% | 83% | 82% | 75% | 50–100bb | g1 |
| 54+fl | flushlo | 83% | 83% | 82% | 74% | 50–100bb | g1 |
| A5+fl | flushlo | 81% | 82% | 82% | 74% | 50–100bb | g1 |
| 65+fl | flushlo | 83% | 82% | 83% | 74% | 50–100bb | g1 |
| J7 | straight | 68% | 63% | 63% | 54% | 50–100bb | g2 |
| KJ | straight | 68% | 65% | 64% | 54% | 50–100bb | g2 |
| JJ | straight | 71% | 66% | 65% | 54% | 50–100bb | g2 |
| QJ | straight | 70% | 65% | 64% | 54% | 50–100bb | g2 |
| J8 | straight | 69% | 64% | 62% | 53% | 50–100bb | g2 |
| AJ | straight | 67% | 60% | 59% | 53% | 50–100bb | g2 |
| J9 | straight | 69% | 63% | 64% | 53% | 50–100bb | g2 |
| JT | straight | 67% | 61% | 60% | 50% | 50–100bb | g2 |
| QQ | twopair | 58% | 48% | 47% | 32% | 0–5bb | g3 |
| KK | twopair | 57% | 47% | 47% | 30% | 0–5bb | g3 |
| 44 | twopair | 53% | 41% | 41% | 31% | 0–5bb | g3 |
| AA | twopair | 49% | 30% | 28% | 26% | 0–5bb | g3 |
| TT | twopair | 46% | 37% | 37% | 22% | 0–5bb | g3 |
| AQ | twopair | 55% | 41% | 40% | 30% | 0–5bb | g4 |
| AK | twopair | 53% | 40% | 39% | 29% | 0–5bb | g4 |
| AT | twopair | 47% | 31% | 29% | 22% | 0–5bb | g4 |
| A4 | twopair | 43% | 21% | 19% | 19% | 0–5bb | g4 |
| KQ | twopair | 38% | 21% | 21% | 18% | 0–5bb | g4 |
| K4 | twopair | 36% | 20% | 18% | 16% | 0–5bb | g4 |
| KT | twopair | 36% | 21% | 19% | 17% | 0–5bb | g4 |
| QT | twopair | 32% | 21% | 19% | 14% | 0–5bb | g4 |
| A9 | tpmk | 19% | 12% | 11% | 6% | 0–5bb | g5 |
| A8 | tpmk | 16% | 9% | 6% | 5% | 0–5bb | g5 |
| A7 | tpmk | 14% | 6% | 4% | 4% | 0–5bb | g5 |
| A6 | tpmk | 13% | 5% | 3% | 4% | 0–5bb | g5 |
| A5 | tpmk | 11% | 4% | 2% | 4% | 0–5bb | g5 |
| A2 | tpmk | 11% | 3% | 1% | 4% | 0–5bb | g5 |
| A3 | tpmk | 11% | 2% | 1% | 5% | 0–5bb | g5 |
| K9 | mp | 6% | 1% | 0% | 1% | 0–5bb | g6 |
| K8 | mp | 6% | 1% | 0% | 1% | 0–5bb | g6 |
| K6 | mp | 6% | 1% | 0% | 2% | 0–5bb | g6 |
| K3 | mp | 6% | 1% | 0% | 2% | 0–5bb | g6 |
| K2 | mp | 6% | 1% | 0% | 2% | 0–5bb | g6 |
| K5 | mp | 6% | 0% | 0% | 1% | 0–5bb | g6 |
| K7 | mp | 6% | 1% | 0% | 1% | 0–5bb | g6 |
| Q5 | bp | 4% | 0% | 0% | 0% | 0–5bb | g7 |
| Q9 | bp | 4% | 0% | 0% | 0% | 0–5bb | g7 |
| T7 | bp | 4% | 0% | 0% | 0% | 0–5bb | g7 |
| Q6 | bp | 4% | 0% | 0% | 0% | 0–5bb | g7 |
| T9 | bp | 3% | 0% | 0% | 0% | 0–5bb | g7 |
| T8 | bp | 3% | 0% | 0% | 0% | 0–5bb | g7 |
| Q8 | bp | 3% | 0% | 0% | 0% | 0–5bb | g7 |
| Q7 | bp | 3% | 0% | 0% | 0% | 0–5bb | g7 |
| 99 | pp3 | 3% | 0% | 0% | 0% | 0–5bb | g7 |
| 88 | spp | 2% | 0% | 0% | 0% | 0–5bb | g7 |
| 77 | spp | 1% | 0% | 0% | 0% | 0–5bb | g7 |
| 55 | spp | 1% | 0% | 0% | 0% | 0–5bb | g7 |
| 66 | spp | 1% | 0% | 0% | 0% | 0–5bb | g7 |
| 54 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 43 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 64 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 33 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 22 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
