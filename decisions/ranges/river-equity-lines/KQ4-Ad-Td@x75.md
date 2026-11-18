# KQ4-Ad-Td@x75 river (K♦ Q♦ 4♠ A♦ T♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: JJ, 99–22, AJ, A9–A2, KJ, K9–K6, QJ, Q9, JT–J7, T9, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 90% | 89% | 89% | 80% |
| g2 | 25–50bb | Straights | JJ, AJ, KJ, QJ, JT–J7 | 73% | 69% | 69% | 51% |
| g3 | 15–25bb | Sets | KK, QQ, TT, 44 | 65% | 56% | 56% | 33% |
| g4 | 15–25bb | Two pair | AK, AQ | 64% | 51% | 50% | 30% |
| g5 | 0–5bb | Sets | AA | 62% | 40% | 39% | 23% |
| g6 | 0–5bb | Two pair | AT, A4, KQ, KT, K4, QT | 56% | 41% | 41% | 26% |
| g7 | 0–5bb | Top pair, weak kicker | A9–A5, A3, A2 | 23% | 13% | 13% | 7% |
| g8 | 0–5bb | Second pair | K9–K5, K3, K2 | 9% | 0% | 0% | 2% |
| g9 | 0–5bb | Small pairs | 99–55, 33, 22, Q9–Q5, T9–T7, 64, 54, 43 | 6% | 0% | 0% | 0% |

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
| J9+fl | flush | 98% | 96% | 96% | 91% | 50–100bb | g1 |
| K9+fl | flush | 95% | 92% | 91% | 82% | 50–100bb | g1 |
| Q9+fl | flush | 95% | 92% | 92% | 81% | 50–100bb | g1 |
| T9+fl | flush | 95% | 92% | 91% | 81% | 50–100bb | g1 |
| 99+fl | flush | 95% | 92% | 90% | 81% | 50–100bb | g1 |
| 97+fl | flush | 95% | 91% | 92% | 81% | 50–100bb | g1 |
| 96+fl | flush | 95% | 91% | 92% | 81% | 50–100bb | g1 |
| 98+fl | flush | 94% | 90% | 92% | 80% | 50–100bb | g1 |
| A9+fl | flush | 94% | 90% | 90% | 80% | 50–100bb | g1 |
| 87+fl | flush | 91% | 90% | 90% | 76% | 50–100bb | g1 |
| 86+fl | flush | 92% | 90% | 90% | 76% | 50–100bb | g1 |
| K8+fl | flush | 92% | 90% | 90% | 76% | 50–100bb | g1 |
| A8+fl | flush | 91% | 89% | 89% | 75% | 50–100bb | g1 |
| 88+fl | flush | 90% | 89% | 89% | 74% | 50–100bb | g1 |
| A7+fl | flushlo | 87% | 85% | 86% | 73% | 50–100bb | g1 |
| 75+fl | flushlo | 87% | 87% | 86% | 72% | 50–100bb | g1 |
| 77+fl | flushlo | 87% | 86% | 86% | 72% | 50–100bb | g1 |
| 76+fl | flushlo | 88% | 87% | 87% | 72% | 50–100bb | g1 |
| 43+fl | flushlo | 81% | 82% | 82% | 72% | 50–100bb | g1 |
| A5+fl | flushlo | 83% | 84% | 84% | 72% | 50–100bb | g1 |
| A4+fl | flushlo | 82% | 81% | 82% | 72% | 50–100bb | g1 |
| K7+fl | flushlo | 88% | 86% | 86% | 72% | 50–100bb | g1 |
| 65+fl | flushlo | 85% | 84% | 84% | 72% | 50–100bb | g1 |
| 64+fl | flushlo | 85% | 85% | 84% | 71% | 50–100bb | g1 |
| 66+fl | flushlo | 85% | 84% | 85% | 71% | 50–100bb | g1 |
| 54+fl | flushlo | 85% | 84% | 83% | 71% | 50–100bb | g1 |
| A3+fl | flushlo | 80% | 80% | 80% | 71% | 50–100bb | g1 |
| 55+fl | flushlo | 84% | 85% | 84% | 71% | 50–100bb | g1 |
| 33+fl | flushlo | 79% | 80% | 80% | 71% | 50–100bb | g1 |
| 22+fl | flushlo | 79% | 80% | 80% | 71% | 50–100bb | g1 |
| A6+fl | flushlo | 85% | 85% | 85% | 70% | 50–100bb | g1 |
| 44+fl | flushlo | 80% | 81% | 81% | 70% | 50–100bb | g1 |
| A2+fl | flushlo | 80% | 80% | 81% | 70% | 50–100bb | g1 |
| K6+fl | flushlo | 86% | 84% | 86% | 70% | 50–100bb | g1 |
| J9 | straight | 72% | 69% | 69% | 49% | 25–50bb | g2 |
| QJ | straight | 74% | 70% | 70% | 53% | 50–100bb | g2 |
| JJ | straight | 74% | 71% | 71% | 52% | 50–100bb | g2 |
| KJ | straight | 74% | 71% | 70% | 51% | 50–100bb | g2 |
| J8 | straight | 73% | 69% | 68% | 51% | 50–100bb | g2 |
| J7 | straight | 73% | 69% | 69% | 51% | 50–100bb | g2 |
| JT | straight | 72% | 69% | 68% | 51% | 50–100bb | g2 |
| AJ | straight | 73% | 66% | 68% | 50% | 50–100bb | g2 |
| KK | twopair | 66% | 58% | 58% | 35% | 25–50bb | g3 |
| QQ | twopair | 64% | 58% | 57% | 33% | 25–50bb | g3 |
| 44 | twopair | 63% | 53% | 53% | 31% | 25–50bb | g3 |
| TT | twopair | 65% | 52% | 52% | 31% | 25–50bb | g3 |
| AQ | twopair | 64% | 50% | 51% | 29% | 25–50bb | g4 |
| AK | twopair | 64% | 52% | 50% | 30% | 25–50bb | g4 |
| AA | twopair | 62% | 40% | 39% | 23% | 0–5bb | g5 |
| AT | twopair | 61% | 45% | 46% | 26% | 0–5bb | g6 |
| KQ | twopair | 57% | 41% | 42% | 27% | 0–5bb | g6 |
| A4 | twopair | 57% | 37% | 37% | 23% | 0–5bb | g6 |
| KT | twopair | 56% | 41% | 41% | 27% | 0–5bb | g6 |
| K4 | twopair | 53% | 39% | 39% | 24% | 0–5bb | g6 |
| QT | twopair | 51% | 39% | 38% | 25% | 0–5bb | g6 |
| A9 | tpmk | 36% | 27% | 27% | 14% | 0–5bb | g7 |
| A8 | tpmk | 30% | 21% | 21% | 10% | 0–5bb | g7 |
| A7 | tpmk | 27% | 15% | 16% | 6% | 0–5bb | g7 |
| A6 | tpmk | 22% | 13% | 11% | 4% | 0–5bb | g7 |
| A5 | tpmk | 17% | 8% | 8% | 5% | 0–5bb | g7 |
| A2 | tpmk | 14% | 3% | 3% | 4% | 0–5bb | g7 |
| A3 | tpmk | 14% | 3% | 3% | 4% | 0–5bb | g7 |
| K9 | mp | 9% | 0% | 0% | 2% | 0–5bb | g8 |
| K8 | mp | 9% | 0% | 0% | 2% | 0–5bb | g8 |
| K6 | mp | 8% | 0% | 0% | 2% | 0–5bb | g8 |
| K7 | mp | 8% | 0% | 0% | 2% | 0–5bb | g8 |
| K5 | mp | 8% | 0% | 0% | 2% | 0–5bb | g8 |
| K3 | mp | 8% | 0% | 0% | 2% | 0–5bb | g8 |
| K2 | mp | 8% | 0% | 0% | 2% | 0–5bb | g8 |
| Q9 | bp | 8% | 0% | 0% | 0% | 0–5bb | g9 |
| T9 | bp | 7% | 0% | 0% | 0% | 0–5bb | g9 |
| Q8 | bp | 7% | 0% | 0% | 0% | 0–5bb | g9 |
| T7 | bp | 7% | 0% | 0% | 0% | 0–5bb | g9 |
| T8 | bp | 7% | 0% | 0% | 0% | 0–5bb | g9 |
| Q7 | bp | 7% | 0% | 0% | 0% | 0–5bb | g9 |
| Q5 | bp | 7% | 0% | 0% | 0% | 0–5bb | g9 |
| Q6 | bp | 6% | 0% | 0% | 0% | 0–5bb | g9 |
| 99 | pp3 | 6% | 0% | 0% | 0% | 0–5bb | g9 |
| 88 | spp | 5% | 0% | 0% | 0% | 0–5bb | g9 |
| 77 | spp | 5% | 0% | 0% | 0% | 0–5bb | g9 |
| 66 | spp | 4% | 0% | 0% | 0% | 0–5bb | g9 |
| 43 | bp | 4% | 0% | 0% | 0% | 0–5bb | g9 |
| 64 | bp | 4% | 0% | 0% | 0% | 0–5bb | g9 |
| 55 | spp | 3% | 0% | 0% | 0% | 0–5bb | g9 |
| 54 | bp | 3% | 0% | 0% | 0% | 0–5bb | g9 |
| 22 | spp | 3% | 0% | 0% | 0% | 0–5bb | g9 |
| 33 | spp | 2% | 0% | 0% | 0% | 0–5bb | g9 |
