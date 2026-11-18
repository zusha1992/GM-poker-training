# KQ4-Ad-Td@b200 river (K♦ Q♦ 4♠ A♦ T♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: JJ, 99–22, AJ, A9–A2, KJ, K9–K6, QJ, Q9, JT–J7, T9, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 86% | 83% | 82% | 83% |
| g2 | 25–50bb | A-high straights | JJ, AJ, KJ, QJ, JT–J7 | 63% | 54% | 53% | 55% |
| g3 | 0–5bb | Sets | AA–QQ, TT, 44 | 46% | 32% | 30% | 32% |
| g4 | 0–5bb | Two pair | AK, AQ, AT, A4, KQ, KT, K4, QT | 32% | 17% | 15% | 17% |
| g5 | 0–5bb | Top pair, weak kicker | A9–A5, A3, A2 | 13% | 3% | 0% | 3% |
| g6 | 0–5bb | Second pair | K9–K5, K3, K2 | 6% | 0% | 0% | 0% |
| g7 | 0–5bb | Small pairs | 99–55, 33, 22, Q9–Q5, T9–T7, 64, 54, 43 | 3% | 0% | 0% | 0% |

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
| J9+fl | flush | 93% | 91% | 91% | 91% | 50–100bb | g1 |
| K9+fl | flush | 87% | 81% | 81% | 82% | 50–100bb | g1 |
| 97+fl | flush | 87% | 81% | 81% | 81% | 50–100bb | g1 |
| T9+fl | flush | 87% | 80% | 79% | 81% | 50–100bb | g1 |
| 96+fl | flush | 88% | 82% | 82% | 81% | 50–100bb | g1 |
| 99+fl | flush | 87% | 82% | 81% | 81% | 50–100bb | g1 |
| 98+fl | flush | 88% | 81% | 80% | 81% | 50–100bb | g1 |
| Q9+fl | flush | 87% | 82% | 81% | 80% | 50–100bb | g1 |
| K8+fl | flush | 84% | 79% | 80% | 80% | 50–100bb | g1 |
| A9+fl | flush | 86% | 81% | 79% | 80% | 50–100bb | g1 |
| K6+fl | flushlo | 81% | 78% | 78% | 79% | 50–100bb | g1 |
| 66+fl | flushlo | 81% | 79% | 78% | 79% | 50–100bb | g1 |
| 87+fl | flush | 84% | 80% | 80% | 79% | 50–100bb | g1 |
| 88+fl | flush | 84% | 79% | 79% | 79% | 50–100bb | g1 |
| 86+fl | flush | 84% | 80% | 78% | 79% | 50–100bb | g1 |
| 55+fl | flushlo | 81% | 78% | 77% | 79% | 50–100bb | g1 |
| K7+fl | flushlo | 83% | 79% | 79% | 79% | 50–100bb | g1 |
| 76+fl | flushlo | 82% | 80% | 78% | 78% | 50–100bb | g1 |
| 75+fl | flushlo | 83% | 79% | 78% | 78% | 50–100bb | g1 |
| 77+fl | flushlo | 83% | 78% | 78% | 78% | 50–100bb | g1 |
| 65+fl | flushlo | 82% | 79% | 78% | 78% | 50–100bb | g1 |
| A8+fl | flush | 83% | 79% | 78% | 78% | 50–100bb | g1 |
| 43+fl | flushlo | 80% | 78% | 77% | 78% | 50–100bb | g1 |
| A6+fl | flushlo | 81% | 77% | 77% | 78% | 50–100bb | g1 |
| 54+fl | flushlo | 82% | 77% | 77% | 77% | 50–100bb | g1 |
| A5+fl | flushlo | 80% | 78% | 78% | 77% | 50–100bb | g1 |
| 64+fl | flushlo | 82% | 78% | 77% | 77% | 50–100bb | g1 |
| A4+fl | flushlo | 81% | 76% | 76% | 76% | 50–100bb | g1 |
| 44+fl | flushlo | 80% | 76% | 76% | 76% | 50–100bb | g1 |
| A7+fl | flushlo | 81% | 77% | 77% | 75% | 50–100bb | g1 |
| 33+fl | flushlo | 77% | 73% | 72% | 73% | 50–100bb | g1 |
| A3+fl | flushlo | 76% | 72% | 72% | 72% | 50–100bb | g1 |
| A2+fl | flushlo | 77% | 72% | 72% | 72% | 50–100bb | g1 |
| 22+fl | flushlo | 77% | 71% | 73% | 71% | 50–100bb | g1 |
| JJ | straight | 66% | 56% | 55% | 56% | 50–100bb | g2 |
| QJ | straight | 64% | 55% | 55% | 56% | 50–100bb | g2 |
| J7 | straight | 64% | 55% | 54% | 55% | 50–100bb | g2 |
| J9 | straight | 63% | 55% | 53% | 55% | 50–100bb | g2 |
| KJ | straight | 64% | 55% | 54% | 55% | 50–100bb | g2 |
| J8 | straight | 64% | 54% | 54% | 55% | 50–100bb | g2 |
| AJ | straight | 62% | 53% | 52% | 54% | 50–100bb | g2 |
| JT | straight | 62% | 52% | 51% | 52% | 50–100bb | g2 |
| QQ | twopair | 51% | 37% | 36% | 37% | 0–5bb | g3 |
| KK | twopair | 48% | 36% | 36% | 37% | 0–5bb | g3 |
| AA | twopair | 44% | 29% | 25% | 28% | 0–5bb | g3 |
| 44 | twopair | 44% | 29% | 28% | 29% | 0–5bb | g3 |
| TT | twopair | 43% | 29% | 24% | 28% | 0–5bb | g3 |
| AK | twopair | 47% | 33% | 33% | 34% | 0–5bb | g4 |
| AQ | twopair | 47% | 35% | 33% | 35% | 0–5bb | g4 |
| AT | twopair | 38% | 23% | 22% | 23% | 0–5bb | g4 |
| A4 | twopair | 28% | 9% | 6% | 10% | 0–5bb | g4 |
| KT | twopair | 23% | 6% | 5% | 6% | 0–5bb | g4 |
| KQ | twopair | 23% | 6% | 4% | 6% | 0–5bb | g4 |
| QT | twopair | 22% | 7% | 5% | 6% | 0–5bb | g4 |
| K4 | twopair | 19% | 6% | 5% | 6% | 0–5bb | g4 |
| A9 | tpmk | 16% | 5% | 2% | 4% | 0–5bb | g5 |
| A6 | tpmk | 14% | 3% | 0% | 3% | 0–5bb | g5 |
| A8 | tpmk | 14% | 3% | 1% | 3% | 0–5bb | g5 |
| A7 | tpmk | 13% | 3% | 0% | 3% | 0–5bb | g5 |
| A5 | tpmk | 13% | 3% | 0% | 3% | 0–5bb | g5 |
| A2 | tpmk | 12% | 2% | 0% | 3% | 0–5bb | g5 |
| A3 | tpmk | 12% | 3% | 0% | 3% | 0–5bb | g5 |
| K9 | mp | 7% | 1% | 0% | 0% | 0–5bb | g6 |
| K8 | mp | 6% | 0% | 0% | 0% | 0–5bb | g6 |
| K3 | mp | 6% | 0% | 0% | 0% | 0–5bb | g6 |
| K2 | mp | 6% | 0% | 0% | 0% | 0–5bb | g6 |
| K7 | mp | 6% | 0% | 0% | 0% | 0–5bb | g6 |
| K5 | mp | 5% | 0% | 0% | 0% | 0–5bb | g6 |
| K6 | mp | 5% | 0% | 0% | 0% | 0–5bb | g6 |
| Q9 | bp | 5% | 0% | 0% | 0% | 0–5bb | g7 |
| T9 | bp | 4% | 0% | 0% | 0% | 0–5bb | g7 |
| Q8 | bp | 4% | 0% | 0% | 0% | 0–5bb | g7 |
| T8 | bp | 4% | 0% | 0% | 0% | 0–5bb | g7 |
| 88 | spp | 4% | 0% | 0% | 0% | 0–5bb | g7 |
| T7 | bp | 4% | 0% | 0% | 0% | 0–5bb | g7 |
| Q7 | bp | 4% | 0% | 0% | 0% | 0–5bb | g7 |
| 99 | pp3 | 4% | 0% | 0% | 0% | 0–5bb | g7 |
| Q5 | bp | 4% | 0% | 0% | 0% | 0–5bb | g7 |
| 55 | spp | 3% | 0% | 0% | 0% | 0–5bb | g7 |
| Q6 | bp | 3% | 0% | 0% | 0% | 0–5bb | g7 |
| 77 | spp | 3% | 0% | 0% | 0% | 0–5bb | g7 |
| 66 | spp | 3% | 0% | 0% | 0% | 0–5bb | g7 |
| 54 | bp | 1% | 0% | 0% | 0% | 0–5bb | g7 |
| 43 | bp | 1% | 0% | 0% | 0% | 0–5bb | g7 |
| 64 | bp | 1% | 0% | 0% | 0% | 0–5bb | g7 |
| 33 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 22 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
