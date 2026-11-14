# KQ4-Ad-Td river (K♦ Q♦ 4♠ A♦ T♦): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes & straights | JJ, AJ, KJ, QJ, JT–J7 · ♦ flushes: JJ, 99–22, AJ, A9–A2, KJ, K9–K6, QJ, Q9, JT–J7, T9, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 81% | 78% | 78% | 71% |
| g2 | 0–5bb | Sets | KK, QQ, 44 | 56% | 46% | 46% | 32% |
| g3 | 0–5bb | Two pair | AK, AQ | 53% | 40% | 38% | 29% |
| g4 | Pot is too big | Sets | AA, TT | 49% | 34% | 32% | 25% |
| g5 | Pot is too big | Two pair | AT, A4, KQ, KT, K4, QT | 39% | 23% | 21% | 18% |
| g6 | Pot is too big | Top pair, weak kicker | A9–A5, A3, A2 | 14% | 6% | 4% | 5% |
| g7 | Pot is too big | Second pair | K9–K5, K3, K2 | 6% | 1% | 0% | 2% |
| g8 | Pot is too big | Small pairs | 99–55, 33, 22, Q9–Q5, T9–T7, 64, 54, 43 | 2% | 0% | 0% | 0% |

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
| J9+fl | flush | 96% | 93% | 93% | 89% | 50–100bb | g1 |
| 96+fl | flush | 91% | 87% | 87% | 79% | 50–100bb | g1 |
| 98+fl | flush | 90% | 87% | 86% | 79% | 50–100bb | g1 |
| A9+fl | flush | 90% | 86% | 86% | 79% | 50–100bb | g1 |
| 99+fl | flush | 90% | 86% | 87% | 79% | 50–100bb | g1 |
| 97+fl | flush | 90% | 86% | 87% | 79% | 50–100bb | g1 |
| Q9+fl | flush | 90% | 88% | 87% | 79% | 50–100bb | g1 |
| T9+fl | flush | 90% | 86% | 86% | 78% | 50–100bb | g1 |
| K9+fl | flush | 91% | 87% | 87% | 78% | 50–100bb | g1 |
| 87+fl | flush | 87% | 85% | 85% | 77% | 50–100bb | g1 |
| 88+fl | flush | 86% | 85% | 85% | 77% | 50–100bb | g1 |
| 86+fl | flush | 87% | 85% | 84% | 77% | 50–100bb | g1 |
| K8+fl | flush | 87% | 86% | 84% | 76% | 50–100bb | g1 |
| 44+fl | flushlo | 82% | 82% | 83% | 76% | 50–100bb | g1 |
| A5+fl | flushlo | 81% | 83% | 83% | 76% | 50–100bb | g1 |
| 66+fl | flushlo | 83% | 83% | 82% | 76% | 50–100bb | g1 |
| A3+fl | flushlo | 81% | 79% | 80% | 76% | 50–100bb | g1 |
| A4+fl | flushlo | 81% | 81% | 82% | 76% | 50–100bb | g1 |
| 54+fl | flushlo | 83% | 83% | 81% | 76% | 50–100bb | g1 |
| A6+fl | flushlo | 82% | 83% | 82% | 76% | 50–100bb | g1 |
| A2+fl | flushlo | 79% | 80% | 80% | 76% | 50–100bb | g1 |
| A8+fl | flush | 86% | 83% | 84% | 76% | 50–100bb | g1 |
| 22+fl | flushlo | 81% | 80% | 80% | 76% | 50–100bb | g1 |
| 75+fl | flushlo | 85% | 83% | 83% | 76% | 50–100bb | g1 |
| K6+fl | flushlo | 84% | 84% | 84% | 76% | 50–100bb | g1 |
| K7+fl | flushlo | 84% | 83% | 83% | 76% | 50–100bb | g1 |
| 64+fl | flushlo | 83% | 83% | 83% | 76% | 50–100bb | g1 |
| 76+fl | flushlo | 85% | 82% | 84% | 75% | 50–100bb | g1 |
| 33+fl | flushlo | 80% | 81% | 80% | 75% | 50–100bb | g1 |
| 55+fl | flushlo | 82% | 83% | 84% | 75% | 50–100bb | g1 |
| 43+fl | flushlo | 82% | 83% | 83% | 75% | 50–100bb | g1 |
| A7+fl | flushlo | 83% | 83% | 83% | 75% | 50–100bb | g1 |
| 65+fl | flushlo | 84% | 83% | 84% | 75% | 50–100bb | g1 |
| 77+fl | flushlo | 83% | 84% | 83% | 75% | 50–100bb | g1 |
| JJ | straight | 70% | 66% | 65% | 55% | 50–100bb | g1 |
| QJ | straight | 70% | 64% | 65% | 54% | 50–100bb | g1 |
| J7 | straight | 69% | 64% | 63% | 54% | 50–100bb | g1 |
| KJ | straight | 68% | 64% | 64% | 53% | 50–100bb | g1 |
| J8 | straight | 68% | 64% | 62% | 53% | 50–100bb | g1 |
| AJ | straight | 67% | 61% | 61% | 53% | 50–100bb | g1 |
| J9 | straight | 68% | 62% | 63% | 52% | 50–100bb | g1 |
| JT | straight | 67% | 63% | 61% | 50% | 50–100bb | g1 |
| QQ | twopair | 58% | 47% | 47% | 32% | 0–5bb | g2 |
| KK | twopair | 55% | 46% | 46% | 31% | 0–5bb | g2 |
| 44 | twopair | 52% | 41% | 41% | 32% | 0–5bb | g2 |
| AQ | twopair | 53% | 41% | 38% | 29% | 0–5bb | g3 |
| AK | twopair | 53% | 39% | 38% | 29% | 0–5bb | g3 |
| AA | twopair | 50% | 30% | 28% | 27% | Pot is too big | g4 |
| TT | twopair | 48% | 38% | 36% | 22% | Pot is too big | g4 |
| AT | twopair | 46% | 30% | 29% | 22% | Pot is too big | g5 |
| A4 | twopair | 43% | 20% | 20% | 21% | Pot is too big | g5 |
| KQ | twopair | 39% | 22% | 19% | 18% | Pot is too big | g5 |
| KT | twopair | 36% | 21% | 20% | 17% | Pot is too big | g5 |
| K4 | twopair | 36% | 18% | 19% | 16% | Pot is too big | g5 |
| QT | twopair | 31% | 20% | 19% | 14% | Pot is too big | g5 |
| A9 | tpmk | 17% | 13% | 11% | 6% | Pot is too big | g6 |
| A8 | tpmk | 16% | 9% | 6% | 5% | Pot is too big | g6 |
| A7 | tpmk | 16% | 6% | 4% | 4% | Pot is too big | g6 |
| A6 | tpmk | 13% | 5% | 3% | 5% | Pot is too big | g6 |
| A5 | tpmk | 12% | 4% | 3% | 4% | Pot is too big | g6 |
| A3 | tpmk | 11% | 2% | 1% | 4% | Pot is too big | g6 |
| A2 | tpmk | 11% | 3% | 1% | 4% | Pot is too big | g6 |
| K5 | mp | 6% | 1% | 0% | 2% | Pot is too big | g7 |
| K3 | mp | 6% | 1% | 0% | 2% | Pot is too big | g7 |
| K9 | mp | 6% | 1% | 0% | 2% | Pot is too big | g7 |
| K7 | mp | 6% | 0% | 0% | 2% | Pot is too big | g7 |
| K2 | mp | 6% | 1% | 0% | 2% | Pot is too big | g7 |
| K8 | mp | 5% | 1% | 0% | 2% | Pot is too big | g7 |
| K6 | mp | 5% | 1% | 0% | 2% | Pot is too big | g7 |
| Q9 | bp | 4% | 0% | 0% | 0% | Pot is too big | g8 |
| Q5 | bp | 4% | 0% | 0% | 0% | Pot is too big | g8 |
| T7 | bp | 4% | 0% | 0% | 0% | Pot is too big | g8 |
| Q6 | bp | 3% | 0% | 0% | 0% | Pot is too big | g8 |
| T8 | bp | 3% | 0% | 0% | 0% | Pot is too big | g8 |
| T9 | bp | 3% | 0% | 0% | 0% | Pot is too big | g8 |
| Q7 | bp | 3% | 0% | 0% | 0% | Pot is too big | g8 |
| Q8 | bp | 3% | 0% | 0% | 0% | Pot is too big | g8 |
| 99 | pp3 | 2% | 0% | 0% | 0% | Pot is too big | g8 |
| 88 | spp | 2% | 0% | 0% | 0% | Pot is too big | g8 |
| 77 | spp | 1% | 0% | 0% | 0% | Pot is too big | g8 |
| 55 | spp | 1% | 0% | 0% | 0% | Pot is too big | g8 |
| 66 | spp | 1% | 0% | 0% | 0% | Pot is too big | g8 |
| 64 | bp | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| 43 | bp | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| 54 | bp | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| 33 | spp | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| 22 | spp | 0% | 0% | 0% | 0% | Pot is too big | g8 |
