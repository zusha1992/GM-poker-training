# KQ4-Ad-Td@xx river (K♦ Q♦ 4♠ A♦ T♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: JJ, 99–22, AJ, A9–A2, KJ, K9–K6, QJ, Q9, JT–J7, T9, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 89% | 89% | 89% | 74% |
| g2 | 25–50bb | Straights | JJ, AJ, KJ, QJ, JT–J7 | 70% | 67% | 66% | 28% |
| g3 | 0–5bb | Sets | AA–QQ, TT, 44 | 62% | 47% | 45% | 0% |
| g4 | 0–5bb | Two pair | AK, AQ, AT, A4, KQ, KT, K4, QT | 60% | 40% | 37% | 0% |
| g5 | 0–5bb | Top pair, weak kicker | A9–A5, A3, A2 | 47% | 11% | 8% | 0% |
| g6 | 0–5bb | Second pair | K9–K5, K3, K2 | 36% | 2% | 0% | 0% |
| g7 | 0–5bb | Small pairs | 99–55, 33, 22, Q9–Q5, T9–T7, 64, 54, 43 | 21% | 0% | 0% | 0% |

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
| J9+fl | flush | 98% | 95% | 95% | 82% | 50–100bb | g1 |
| 97+fl | flush | 95% | 90% | 90% | 69% | 50–100bb | g1 |
| A9+fl | flush | 95% | 88% | 88% | 69% | 50–100bb | g1 |
| T9+fl | flush | 96% | 90% | 88% | 68% | 50–100bb | g1 |
| Q9+fl | flush | 95% | 89% | 89% | 68% | 50–100bb | g1 |
| 96+fl | flush | 95% | 91% | 90% | 68% | 50–100bb | g1 |
| K9+fl | flush | 95% | 90% | 89% | 68% | 50–100bb | g1 |
| 99+fl | flush | 95% | 90% | 89% | 68% | 50–100bb | g1 |
| A5+fl | flushlo | 82% | 84% | 84% | 68% | 50–100bb | g1 |
| 98+fl | flush | 95% | 90% | 89% | 67% | 50–100bb | g1 |
| A3+fl | flushlo | 79% | 82% | 82% | 67% | 50–100bb | g1 |
| 75+fl | flushlo | 87% | 87% | 86% | 67% | 50–100bb | g1 |
| 43+fl | flushlo | 80% | 84% | 83% | 67% | 50–100bb | g1 |
| A4+fl | flushlo | 80% | 82% | 81% | 67% | 50–100bb | g1 |
| A6+fl | flushlo | 85% | 85% | 84% | 67% | 50–100bb | g1 |
| 77+fl | flushlo | 87% | 86% | 86% | 66% | 50–100bb | g1 |
| 87+fl | flush | 90% | 88% | 89% | 66% | 50–100bb | g1 |
| 65+fl | flushlo | 86% | 85% | 84% | 66% | 50–100bb | g1 |
| 33+fl | flushlo | 77% | 82% | 81% | 66% | 50–100bb | g1 |
| 55+fl | flushlo | 82% | 85% | 84% | 66% | 50–100bb | g1 |
| 66+fl | flushlo | 85% | 85% | 84% | 66% | 50–100bb | g1 |
| 76+fl | flushlo | 89% | 86% | 87% | 66% | 50–100bb | g1 |
| K6+fl | flushlo | 84% | 85% | 85% | 66% | 50–100bb | g1 |
| 64+fl | flushlo | 86% | 86% | 85% | 66% | 50–100bb | g1 |
| 54+fl | flushlo | 83% | 84% | 83% | 66% | 50–100bb | g1 |
| 86+fl | flush | 92% | 89% | 88% | 66% | 50–100bb | g1 |
| 44+fl | flushlo | 79% | 82% | 81% | 66% | 50–100bb | g1 |
| A2+fl | flushlo | 78% | 82% | 81% | 66% | 50–100bb | g1 |
| K7+fl | flushlo | 87% | 85% | 85% | 66% | 50–100bb | g1 |
| K8+fl | flush | 91% | 89% | 88% | 66% | 50–100bb | g1 |
| 22+fl | flushlo | 76% | 81% | 81% | 65% | 50–100bb | g1 |
| A8+fl | flush | 91% | 87% | 87% | 65% | 50–100bb | g1 |
| 88+fl | flush | 91% | 88% | 87% | 65% | 50–100bb | g1 |
| A7+fl | flushlo | 88% | 85% | 84% | 65% | 50–100bb | g1 |
| JJ | straight | 71% | 71% | 69% | 20% | 25–50bb | g2 |
| J9 | straight | 69% | 69% | 67% | 28% | 25–50bb | g2 |
| QJ | straight | 69% | 67% | 66% | 29% | 25–50bb | g2 |
| KJ | straight | 71% | 67% | 66% | 28% | 25–50bb | g2 |
| J8 | straight | 71% | 67% | 66% | 28% | 25–50bb | g2 |
| J7 | straight | 69% | 67% | 66% | 28% | 25–50bb | g2 |
| JT | straight | 71% | 66% | 65% | 29% | 25–50bb | g2 |
| AJ | straight | 71% | 66% | 64% | 28% | 25–50bb | g2 |
| KK | twopair | 63% | 49% | 48% | 0% | 0–5bb | g3 |
| AA | twopair | 62% | 41% | 39% | 0% | 0–5bb | g3 |
| 44 | twopair | 62% | 48% | 45% | 0% | 0–5bb | g3 |
| TT | twopair | 62% | 45% | 44% | 0% | 0–5bb | g3 |
| QQ | twopair | 63% | 50% | 49% | 0% | 5–15bb | g3 |
| AQ | twopair | 64% | 46% | 44% | 0% | 0–5bb | g4 |
| AK | twopair | 62% | 45% | 44% | 0% | 0–5bb | g4 |
| AT | twopair | 60% | 43% | 39% | 0% | 0–5bb | g4 |
| A4 | twopair | 59% | 40% | 37% | 0% | 0–5bb | g4 |
| KQ | twopair | 59% | 39% | 37% | 0% | 0–5bb | g4 |
| KT | twopair | 58% | 35% | 34% | 0% | 0–5bb | g4 |
| K4 | twopair | 56% | 33% | 32% | 0% | 0–5bb | g4 |
| QT | twopair | 56% | 31% | 28% | 0% | 0–5bb | g4 |
| A9 | tpmk | 52% | 20% | 16% | 0% | 0–5bb | g5 |
| A8 | tpmk | 50% | 16% | 13% | 0% | 0–5bb | g5 |
| A7 | tpmk | 49% | 12% | 10% | 0% | 0–5bb | g5 |
| A6 | tpmk | 47% | 10% | 6% | 0% | 0–5bb | g5 |
| A5 | tpmk | 46% | 8% | 4% | 0% | 0–5bb | g5 |
| A2 | tpmk | 44% | 4% | 1% | 0% | 0–5bb | g5 |
| A3 | tpmk | 44% | 5% | 1% | 0% | 0–5bb | g5 |
| K9 | mp | 39% | 3% | 0% | 0% | 0–5bb | g6 |
| K8 | mp | 37% | 2% | 0% | 0% | 0–5bb | g6 |
| K7 | mp | 36% | 2% | 0% | 0% | 0–5bb | g6 |
| K6 | mp | 36% | 2% | 0% | 0% | 0–5bb | g6 |
| K5 | mp | 35% | 2% | 0% | 0% | 0–5bb | g6 |
| K3 | mp | 35% | 2% | 0% | 0% | 0–5bb | g6 |
| K2 | mp | 34% | 1% | 0% | 0% | 0–5bb | g6 |
| Q9 | bp | 30% | 1% | 0% | 0% | 0–5bb | g7 |
| Q8 | bp | 29% | 1% | 0% | 0% | 0–5bb | g7 |
| Q7 | bp | 28% | 1% | 0% | 0% | 0–5bb | g7 |
| Q6 | bp | 27% | 1% | 0% | 0% | 0–5bb | g7 |
| Q5 | bp | 26% | 1% | 0% | 0% | 0–5bb | g7 |
| T9 | bp | 24% | 0% | 0% | 0% | 0–5bb | g7 |
| T8 | bp | 22% | 0% | 0% | 0% | 0–5bb | g7 |
| T7 | bp | 21% | 0% | 0% | 0% | 0–5bb | g7 |
| 99 | pp3 | 20% | 0% | 0% | 0% | 0–5bb | g7 |
| 88 | spp | 19% | 0% | 0% | 0% | 0–5bb | g7 |
| 77 | spp | 18% | 0% | 0% | 0% | 0–5bb | g7 |
| 55 | spp | 16% | 0% | 0% | 0% | 0–5bb | g7 |
| 66 | spp | 16% | 0% | 0% | 0% | 0–5bb | g7 |
| 43 | bp | 15% | 0% | 0% | 0% | 0–5bb | g7 |
| 64 | bp | 14% | 0% | 0% | 0% | 0–5bb | g7 |
| 54 | bp | 14% | 0% | 0% | 0% | 0–5bb | g7 |
| 33 | spp | 13% | 0% | 0% | 0% | 0–5bb | g7 |
| 22 | spp | 12% | 0% | 0% | 0% | 0–5bb | g7 |
