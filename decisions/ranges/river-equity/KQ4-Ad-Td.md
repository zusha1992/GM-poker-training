# KQ4-Ad-Td river (K♦ Q♦ 4♠ A♦ T♦): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes & straights | JJ, AJ, KJ, QJ, JT–J7 · ♦ flushes: JJ, 99–22, AJ, A9–A2, KJ, K9–K6, QJ, Q9, JT–J7, T9, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 81% | 78% | 78% | 71% |
| g2 | 0–5bb | Sets | AA–QQ, TT, 44 | 53% | 40% | 39% | 28% |
| g3 | 0–5bb | Two pair | AK, AQ, AT, A4, KQ, KT, K4, QT | 43% | 28% | 26% | 21% |
| g4 | 0–5bb | Top pair, weak kicker | A9–A5, A3, A2 | 14% | 6% | 4% | 5% |
| g5 | 0–5bb | Second pair | K9–K5, K3, K2 | 6% | 1% | 0% | 2% |
| g6 | 0–5bb | Small pairs | 99–55, 33, 22, Q9–Q5, T9–T7, 64, 54, 43 | 2% | 0% | 0% | 0% |

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
| 97+fl | flush | 90% | 87% | 87% | 79% | 50–100bb | g1 |
| 96+fl | flush | 91% | 87% | 87% | 79% | 50–100bb | g1 |
| Q9+fl | flush | 91% | 87% | 87% | 79% | 50–100bb | g1 |
| A9+fl | flush | 90% | 86% | 85% | 79% | 50–100bb | g1 |
| K9+fl | flush | 90% | 87% | 87% | 79% | 50–100bb | g1 |
| 98+fl | flush | 91% | 88% | 87% | 78% | 50–100bb | g1 |
| T9+fl | flush | 91% | 87% | 86% | 78% | 50–100bb | g1 |
| 99+fl | flush | 90% | 87% | 87% | 78% | 50–100bb | g1 |
| 87+fl | flush | 87% | 85% | 85% | 77% | 50–100bb | g1 |
| A8+fl | flush | 86% | 84% | 84% | 77% | 50–100bb | g1 |
| 86+fl | flush | 87% | 85% | 85% | 77% | 50–100bb | g1 |
| K8+fl | flush | 86% | 85% | 84% | 76% | 50–100bb | g1 |
| 76+fl | flushlo | 84% | 83% | 83% | 76% | 50–100bb | g1 |
| K7+fl | flushlo | 85% | 83% | 83% | 76% | 50–100bb | g1 |
| A7+fl | flushlo | 83% | 82% | 82% | 76% | 50–100bb | g1 |
| 77+fl | flushlo | 85% | 83% | 83% | 76% | 50–100bb | g1 |
| 88+fl | flush | 87% | 85% | 85% | 76% | 50–100bb | g1 |
| A5+fl | flushlo | 81% | 83% | 81% | 76% | 50–100bb | g1 |
| A2+fl | flushlo | 80% | 80% | 80% | 76% | 50–100bb | g1 |
| 44+fl | flushlo | 82% | 83% | 83% | 76% | 50–100bb | g1 |
| 33+fl | flushlo | 81% | 80% | 80% | 76% | 50–100bb | g1 |
| A4+fl | flushlo | 82% | 82% | 81% | 75% | 50–100bb | g1 |
| 55+fl | flushlo | 82% | 83% | 83% | 75% | 50–100bb | g1 |
| A3+fl | flushlo | 79% | 81% | 80% | 75% | 50–100bb | g1 |
| K6+fl | flushlo | 84% | 84% | 83% | 75% | 50–100bb | g1 |
| A6+fl | flushlo | 84% | 82% | 82% | 75% | 50–100bb | g1 |
| 43+fl | flushlo | 82% | 83% | 82% | 75% | 50–100bb | g1 |
| 66+fl | flushlo | 83% | 83% | 83% | 75% | 50–100bb | g1 |
| 54+fl | flushlo | 82% | 83% | 83% | 75% | 50–100bb | g1 |
| 22+fl | flushlo | 80% | 80% | 81% | 75% | 50–100bb | g1 |
| 75+fl | flushlo | 85% | 83% | 83% | 75% | 50–100bb | g1 |
| 64+fl | flushlo | 83% | 83% | 83% | 75% | 50–100bb | g1 |
| 65+fl | flushlo | 83% | 83% | 83% | 75% | 50–100bb | g1 |
| JJ | straight | 71% | 66% | 66% | 54% | 50–100bb | g1 |
| KJ | straight | 69% | 65% | 64% | 54% | 50–100bb | g1 |
| J7 | straight | 69% | 62% | 63% | 54% | 50–100bb | g1 |
| QJ | straight | 69% | 65% | 64% | 53% | 50–100bb | g1 |
| J8 | straight | 69% | 63% | 62% | 53% | 50–100bb | g1 |
| J9 | straight | 68% | 63% | 62% | 52% | 50–100bb | g1 |
| AJ | straight | 68% | 61% | 60% | 52% | 50–100bb | g1 |
| JT | straight | 67% | 61% | 61% | 51% | 50–100bb | g1 |
| QQ | twopair | 57% | 48% | 48% | 31% | 0–5bb | g2 |
| KK | twopair | 55% | 45% | 44% | 31% | 0–5bb | g2 |
| 44 | twopair | 53% | 41% | 40% | 31% | 0–5bb | g2 |
| AA | twopair | 49% | 30% | 27% | 26% | 0–5bb | g2 |
| TT | twopair | 49% | 38% | 37% | 22% | 0–5bb | g2 |
| AK | twopair | 53% | 40% | 38% | 29% | 0–5bb | g3 |
| AQ | twopair | 53% | 41% | 39% | 28% | 0–5bb | g3 |
| AT | twopair | 45% | 30% | 29% | 22% | 0–5bb | g3 |
| A4 | twopair | 42% | 22% | 19% | 21% | 0–5bb | g3 |
| KQ | twopair | 40% | 21% | 21% | 17% | 0–5bb | g3 |
| KT | twopair | 36% | 20% | 20% | 16% | 0–5bb | g3 |
| K4 | twopair | 36% | 19% | 19% | 16% | 0–5bb | g3 |
| QT | twopair | 32% | 20% | 19% | 14% | 0–5bb | g3 |
| A9 | tpmk | 18% | 12% | 11% | 6% | 0–5bb | g4 |
| A8 | tpmk | 16% | 8% | 6% | 5% | 0–5bb | g4 |
| A7 | tpmk | 15% | 7% | 4% | 4% | 0–5bb | g4 |
| A6 | tpmk | 13% | 4% | 3% | 4% | 0–5bb | g4 |
| A5 | tpmk | 12% | 4% | 2% | 4% | 0–5bb | g4 |
| A3 | tpmk | 11% | 2% | 1% | 4% | 0–5bb | g4 |
| A2 | tpmk | 10% | 3% | 1% | 4% | 0–5bb | g4 |
| K6 | mp | 6% | 1% | 0% | 2% | 0–5bb | g5 |
| K9 | mp | 6% | 1% | 0% | 1% | 0–5bb | g5 |
| K3 | mp | 6% | 1% | 0% | 2% | 0–5bb | g5 |
| K5 | mp | 6% | 0% | 0% | 2% | 0–5bb | g5 |
| K7 | mp | 6% | 1% | 0% | 1% | 0–5bb | g5 |
| K2 | mp | 6% | 1% | 0% | 2% | 0–5bb | g5 |
| K8 | mp | 6% | 1% | 0% | 2% | 0–5bb | g5 |
| Q9 | bp | 4% | 0% | 0% | 0% | 0–5bb | g6 |
| T9 | bp | 4% | 0% | 0% | 0% | 0–5bb | g6 |
| T7 | bp | 3% | 0% | 0% | 0% | 0–5bb | g6 |
| Q7 | bp | 3% | 0% | 0% | 0% | 0–5bb | g6 |
| Q6 | bp | 3% | 0% | 0% | 0% | 0–5bb | g6 |
| T8 | bp | 3% | 0% | 0% | 0% | 0–5bb | g6 |
| 99 | pp3 | 3% | 0% | 0% | 0% | 0–5bb | g6 |
| Q5 | bp | 3% | 0% | 0% | 0% | 0–5bb | g6 |
| Q8 | bp | 3% | 0% | 0% | 0% | 0–5bb | g6 |
| 88 | spp | 1% | 0% | 0% | 0% | 0–5bb | g6 |
| 77 | spp | 1% | 0% | 0% | 0% | 0–5bb | g6 |
| 66 | spp | 1% | 0% | 0% | 0% | 0–5bb | g6 |
| 55 | spp | 1% | 0% | 0% | 0% | 0–5bb | g6 |
| 64 | bp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| 43 | bp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| 54 | bp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| 33 | spp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| 22 | spp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
