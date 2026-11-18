# KQ4-Ad-Td@bx river (K♦ Q♦ 4♠ A♦ T♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: JJ, 99–22, AJ, A9–A2, KJ, K9–K6, QJ, Q9, JT–J7, T9, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 89% | 89% | 87% | 74% |
| g2 | 25–50bb | Straights | JJ, AJ, KJ, QJ, JT–J7 | 69% | 70% | 64% | 37% |
| g3 | 5–15bb | Sets | KK, QQ, 44 | 59% | 53% | 46% | 13% |
| g4 | 0–5bb | Sets | AA, TT | 61% | 47% | 35% | 15% |
| g5 | 0–5bb | Two pair | AK, AQ, AT, A4, KQ, KT, K4, QT | 56% | 40% | 30% | 14% |
| g6 | 0–5bb | Top pair, weak kicker | A9–A5, A3, A2 | 47% | 18% | 3% | 13% |
| g7 | 0–5bb | Second pair | K9–K5, K3, K2 | 37% | 10% | 0% | 7% |
| g8 | 0–5bb | Small pairs | 99–55, 33, 22, Q9–Q5, T9–T7, 64, 54, 43 | 16% | 2% | 0% | 1% |

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
| J9+fl | flush | 98% | 95% | 94% | 85% | 50–100bb | g1 |
| Q9+fl | flush | 94% | 89% | 87% | 73% | 50–100bb | g1 |
| A9+fl | flush | 94% | 88% | 86% | 73% | 50–100bb | g1 |
| K9+fl | flush | 94% | 89% | 87% | 73% | 50–100bb | g1 |
| 97+fl | flush | 94% | 89% | 87% | 72% | 50–100bb | g1 |
| T9+fl | flush | 94% | 89% | 86% | 72% | 50–100bb | g1 |
| 96+fl | flush | 94% | 89% | 87% | 72% | 50–100bb | g1 |
| 98+fl | flush | 94% | 90% | 87% | 71% | 50–100bb | g1 |
| 99+fl | flush | 94% | 89% | 88% | 71% | 50–100bb | g1 |
| A8+fl | flush | 89% | 86% | 85% | 66% | 50–100bb | g1 |
| 66+fl | flushlo | 84% | 86% | 83% | 65% | 50–100bb | g1 |
| A7+fl | flushlo | 87% | 85% | 82% | 65% | 50–100bb | g1 |
| K7+fl | flushlo | 87% | 86% | 84% | 65% | 50–100bb | g1 |
| A6+fl | flushlo | 84% | 85% | 82% | 65% | 50–100bb | g1 |
| 87+fl | flush | 89% | 87% | 86% | 65% | 50–100bb | g1 |
| K8+fl | flush | 90% | 87% | 85% | 65% | 50–100bb | g1 |
| 54+fl | flushlo | 83% | 85% | 84% | 65% | 50–100bb | g1 |
| 22+fl | flushlo | 76% | 82% | 81% | 65% | 50–100bb | g1 |
| A4+fl | flushlo | 81% | 85% | 82% | 65% | 50–100bb | g1 |
| 86+fl | flush | 90% | 87% | 85% | 65% | 50–100bb | g1 |
| 88+fl | flush | 88% | 86% | 85% | 65% | 50–100bb | g1 |
| 33+fl | flushlo | 78% | 83% | 80% | 65% | 50–100bb | g1 |
| 44+fl | flushlo | 80% | 85% | 82% | 65% | 50–100bb | g1 |
| 76+fl | flushlo | 87% | 87% | 83% | 65% | 50–100bb | g1 |
| A5+fl | flushlo | 82% | 86% | 82% | 65% | 50–100bb | g1 |
| 64+fl | flushlo | 85% | 86% | 84% | 65% | 50–100bb | g1 |
| 55+fl | flushlo | 81% | 85% | 83% | 65% | 50–100bb | g1 |
| 43+fl | flushlo | 82% | 86% | 83% | 64% | 50–100bb | g1 |
| A2+fl | flushlo | 77% | 84% | 80% | 64% | 50–100bb | g1 |
| 75+fl | flushlo | 87% | 86% | 83% | 64% | 50–100bb | g1 |
| 77+fl | flushlo | 86% | 86% | 84% | 64% | 50–100bb | g1 |
| 65+fl | flushlo | 84% | 85% | 83% | 64% | 50–100bb | g1 |
| K6+fl | flushlo | 85% | 85% | 84% | 64% | 50–100bb | g1 |
| A3+fl | flushlo | 77% | 84% | 80% | 64% | 50–100bb | g1 |
| JJ | straight | 71% | 73% | 67% | 36% | 25–50bb | g2 |
| J8 | straight | 69% | 70% | 65% | 38% | 25–50bb | g2 |
| KJ | straight | 69% | 69% | 65% | 37% | 25–50bb | g2 |
| J7 | straight | 70% | 71% | 65% | 38% | 25–50bb | g2 |
| J9 | straight | 69% | 70% | 64% | 35% | 25–50bb | g2 |
| QJ | straight | 69% | 70% | 64% | 38% | 25–50bb | g2 |
| AJ | straight | 70% | 69% | 62% | 38% | 25–50bb | g2 |
| JT | straight | 69% | 68% | 62% | 38% | 25–50bb | g2 |
| QQ | twopair | 59% | 54% | 47% | 14% | 5–15bb | g3 |
| 44 | twopair | 60% | 52% | 44% | 13% | 5–15bb | g3 |
| KK | twopair | 59% | 52% | 46% | 12% | 5–15bb | g3 |
| AA | twopair | 62% | 48% | 36% | 16% | 0–5bb | g4 |
| TT | twopair | 61% | 45% | 34% | 15% | 0–5bb | g4 |
| AK | twopair | 60% | 50% | 42% | 13% | 0–5bb | g5 |
| AT | twopair | 60% | 44% | 32% | 15% | 0–5bb | g5 |
| AQ | twopair | 59% | 50% | 41% | 14% | 0–5bb | g5 |
| A4 | twopair | 57% | 40% | 29% | 15% | 0–5bb | g5 |
| KT | twopair | 55% | 33% | 22% | 13% | 0–5bb | g5 |
| K4 | twopair | 54% | 32% | 22% | 13% | 0–5bb | g5 |
| KQ | twopair | 53% | 34% | 26% | 12% | 0–5bb | g5 |
| QT | twopair | 51% | 29% | 16% | 14% | 0–5bb | g5 |
| A8 | tpmk | 49% | 20% | 5% | 14% | 0–5bb | g6 |
| A9 | tpmk | 48% | 21% | 7% | 11% | 0–5bb | g6 |
| A7 | tpmk | 47% | 19% | 3% | 13% | 0–5bb | g6 |
| A3 | tpmk | 47% | 16% | 0% | 14% | 0–5bb | g6 |
| A2 | tpmk | 46% | 15% | 1% | 14% | 0–5bb | g6 |
| A6 | tpmk | 46% | 18% | 2% | 14% | 0–5bb | g6 |
| A5 | tpmk | 45% | 17% | 2% | 13% | 0–5bb | g6 |
| K9 | mp | 40% | 12% | 0% | 7% | 0–5bb | g7 |
| K8 | mp | 38% | 11% | 0% | 6% | 0–5bb | g7 |
| K7 | mp | 38% | 10% | 0% | 7% | 0–5bb | g7 |
| K6 | mp | 35% | 11% | 0% | 6% | 0–5bb | g7 |
| K5 | mp | 35% | 10% | 0% | 6% | 0–5bb | g7 |
| K2 | mp | 35% | 8% | 0% | 6% | 0–5bb | g7 |
| K3 | mp | 34% | 7% | 0% | 7% | 0–5bb | g7 |
| Q9 | bp | 28% | 4% | 0% | 2% | 0–5bb | g8 |
| Q8 | bp | 24% | 4% | 0% | 2% | 0–5bb | g8 |
| Q7 | bp | 23% | 4% | 0% | 1% | 0–5bb | g8 |
| Q6 | bp | 21% | 3% | 0% | 2% | 0–5bb | g8 |
| Q5 | bp | 20% | 4% | 0% | 2% | 0–5bb | g8 |
| T9 | bp | 18% | 1% | 0% | 0% | 0–5bb | g8 |
| 99 | pp3 | 17% | 1% | 0% | 0% | 0–5bb | g8 |
| T8 | bp | 16% | 1% | 0% | 0% | 0–5bb | g8 |
| T7 | bp | 16% | 0% | 0% | 0% | 0–5bb | g8 |
| 88 | spp | 14% | 0% | 0% | 0% | 0–5bb | g8 |
| 77 | spp | 12% | 0% | 0% | 0% | 0–5bb | g8 |
| 66 | spp | 10% | 0% | 0% | 0% | 0–5bb | g8 |
| 55 | spp | 8% | 0% | 0% | 0% | 0–5bb | g8 |
| 64 | bp | 6% | 0% | 0% | 0% | 0–5bb | g8 |
| 43 | bp | 5% | 0% | 0% | 0% | 0–5bb | g8 |
| 54 | bp | 5% | 0% | 0% | 0% | 0–5bb | g8 |
| 33 | spp | 3% | 0% | 0% | 0% | 0–5bb | g8 |
| 22 | spp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
