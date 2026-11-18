# A76-8h-Th@xx river (A♥ 7♥ 6♣ 8♥ T♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: KK–JJ, 99, 66–22, AK–AJ, A9, A6–A2, KQ–K2, QJ–Q9, Q6, Q5, JT, J9, T9, 96, 65, 64, 54, 43 | 90% | 94% | 93% | 76% |
| g2 | 25–50bb | Straights | 99, A9, K9, Q9, J9, T9, 98–96, 54 | 71% | 72% | 70% | 56% |
| g3 | 15–25bb | Sets | AA, TT, 88–66 | 64% | 52% | 50% | 48% |
| g4 | 0–5bb | Two pair | AT, A8–A6, T8, T7, 87, 86, 76 | 59% | 36% | 33% | 48% |
| g5 | 0–5bb | Top pair | AK–AJ, A5–A2 | 50% | 14% | 9% | 46% |
| g6 | 0–5bb | Big pocket pairs | KK–JJ | 40% | 4% | 0% | 38% |
| g7 | 0–5bb | Second pair | KT, QT, JT | 40% | 4% | 0% | 33% |
| g8 | 0–5bb | Small pairs | 55–22, K8–K6, Q8–Q6, J8, J7, 75, 65, 64 | 29% | 3% | 0% | 22% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 96+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KK+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K7+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| K3+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K4+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AK+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| K8+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| K5+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KT+fl | flush | 100% | 99% | 99% | 100% | 50–100bb | g1 |
| K2+fl | flush | 100% | 99% | 100% | 100% | 50–100bb | g1 |
| KQ+fl | flush | 97% | 99% | 99% | 87% | 50–100bb | g1 |
| KJ+fl | flush | 96% | 99% | 99% | 86% | 50–100bb | g1 |
| K9+fl | flush | 94% | 97% | 97% | 83% | 50–100bb | g1 |
| K6+fl | flush | 92% | 94% | 94% | 78% | 50–100bb | g1 |
| QT+fl | flush | 95% | 99% | 99% | 76% | 50–100bb | g1 |
| Q6+fl | flush | 95% | 99% | 99% | 76% | 50–100bb | g1 |
| QQ+fl | flush | 94% | 99% | 99% | 75% | 50–100bb | g1 |
| Q5+fl | flush | 95% | 99% | 99% | 75% | 50–100bb | g1 |
| AQ+fl | flush | 94% | 99% | 98% | 75% | 50–100bb | g1 |
| QJ+fl | flush | 93% | 98% | 98% | 74% | 50–100bb | g1 |
| J9+fl | flush | 90% | 97% | 97% | 74% | 50–100bb | g1 |
| JT+fl | flush | 90% | 98% | 98% | 73% | 50–100bb | g1 |
| AJ+fl | flush | 90% | 97% | 97% | 72% | 50–100bb | g1 |
| JJ+fl | flush | 91% | 98% | 98% | 72% | 50–100bb | g1 |
| Q9+fl | flush | 91% | 97% | 97% | 71% | 50–100bb | g1 |
| 99+fl | flushlo | 86% | 95% | 94% | 67% | 50–100bb | g1 |
| A9+fl | flushlo | 85% | 94% | 93% | 66% | 50–100bb | g1 |
| T9+fl | flushlo | 86% | 95% | 94% | 66% | 50–100bb | g1 |
| 65+fl | flushlo | 85% | 87% | 86% | 63% | 50–100bb | g1 |
| 22+fl | flushlo | 76% | 81% | 81% | 63% | 50–100bb | g1 |
| A5+fl | flushlo | 82% | 84% | 83% | 63% | 50–100bb | g1 |
| 66+fl | flushlo | 84% | 87% | 86% | 63% | 50–100bb | g1 |
| 43+fl | flushlo | 82% | 83% | 83% | 63% | 50–100bb | g1 |
| 54+fl | flushlo | 82% | 86% | 84% | 62% | 50–100bb | g1 |
| 55+fl | flushlo | 82% | 84% | 84% | 62% | 50–100bb | g1 |
| 64+fl | flushlo | 85% | 87% | 87% | 62% | 50–100bb | g1 |
| A6+fl | flushlo | 84% | 87% | 85% | 62% | 50–100bb | g1 |
| A3+fl | flushlo | 78% | 81% | 81% | 62% | 50–100bb | g1 |
| 44+fl | flushlo | 80% | 83% | 81% | 62% | 50–100bb | g1 |
| 33+fl | flushlo | 78% | 81% | 80% | 62% | 50–100bb | g1 |
| A2+fl | flushlo | 77% | 80% | 79% | 62% | 50–100bb | g1 |
| A4+fl | flushlo | 80% | 82% | 81% | 62% | 50–100bb | g1 |
| J9 | straight | 73% | 80% | 79% | 62% | 50–100bb | g2 |
| 99 | straight | 71% | 75% | 73% | 58% | 50–100bb | g2 |
| A9 | straight | 71% | 69% | 68% | 57% | 50–100bb | g2 |
| Q9 | straight | 70% | 71% | 70% | 56% | 50–100bb | g2 |
| 96 | straight | 70% | 70% | 68% | 56% | 50–100bb | g2 |
| 98 | straight | 70% | 70% | 70% | 56% | 50–100bb | g2 |
| 97 | straight | 70% | 70% | 68% | 56% | 50–100bb | g2 |
| T9 | straight | 70% | 70% | 69% | 56% | 50–100bb | g2 |
| 54 | straight | 63% | 55% | 53% | 47% | 25–50bb | g2 |
| K9 | straight | 71% | 73% | 68% | 50% | 50–100bb | g2 |
| 88 | twopair | 64% | 55% | 53% | 46% | 25–50bb | g3 |
| 77 | twopair | 64% | 52% | 51% | 48% | 25–50bb | g3 |
| AA | twopair | 64% | 49% | 46% | 51% | 50–100bb | g3 |
| TT | twopair | 64% | 50% | 51% | 46% | 25–50bb | g3 |
| 66 | twopair | 63% | 53% | 51% | 47% | 25–50bb | g3 |
| AT | twopair | 63% | 46% | 44% | 48% | 0–5bb | g4 |
| A8 | twopair | 61% | 41% | 38% | 48% | 0–5bb | g4 |
| A7 | twopair | 60% | 36% | 33% | 48% | 0–5bb | g4 |
| A6 | twopair | 58% | 31% | 28% | 46% | 0–5bb | g4 |
| T8 | twopair | 56% | 29% | 26% | 46% | 0–5bb | g4 |
| T7 | twopair | 55% | 27% | 24% | 47% | 0–5bb | g4 |
| 87 | twopair | 54% | 25% | 22% | 47% | 0–5bb | g4 |
| 86 | twopair | 53% | 23% | 19% | 48% | 0–5bb | g4 |
| 76 | twopair | 52% | 22% | 20% | 46% | 0–5bb | g4 |
| AK | tpgk | 52% | 19% | 14% | 42% | 0–5bb | g5 |
| AJ | tpmk | 51% | 16% | 12% | 48% | 0–5bb | g5 |
| AQ | tpgk | 51% | 19% | 15% | 48% | 0–5bb | g5 |
| A3 | tpmk | 49% | 10% | 6% | 47% | 0–5bb | g5 |
| A2 | tpmk | 49% | 10% | 5% | 46% | 0–5bb | g5 |
| A5 | tpmk | 49% | 11% | 5% | 46% | 0–5bb | g5 |
| A4 | tpmk | 47% | 10% | 5% | 47% | 0–5bb | g5 |
| JJ | pp1 | 42% | 2% | 0% | 45% | 0–5bb | g6 |
| KK | pp1 | 40% | 4% | 0% | 25% | 0–5bb | g6 |
| QQ | pp1 | 39% | 4% | 0% | 45% | 0–5bb | g6 |
| KT | mp | 42% | 4% | 0% | 33% | 0–5bb | g7 |
| JT | mp | 40% | 3% | 0% | 35% | 0–5bb | g7 |
| QT | mp | 39% | 5% | 0% | 32% | 0–5bb | g7 |
| K8 | bp | 36% | 3% | 0% | 25% | 0–5bb | g8 |
| J8 | bp | 34% | 3% | 0% | 25% | 0–5bb | g8 |
| Q8 | bp | 34% | 3% | 0% | 25% | 0–5bb | g8 |
| K7 | bp | 32% | 3% | 0% | 21% | 0–5bb | g8 |
| 75 | bp | 30% | 3% | 0% | 24% | 0–5bb | g8 |
| J7 | bp | 30% | 2% | 0% | 24% | 0–5bb | g8 |
| Q7 | bp | 30% | 4% | 0% | 24% | 0–5bb | g8 |
| K6 | bp | 28% | 3% | 0% | 19% | 0–5bb | g8 |
| 65 | bp | 26% | 3% | 0% | 22% | 0–5bb | g8 |
| 64 | bp | 26% | 3% | 0% | 22% | 0–5bb | g8 |
| Q6 | bp | 26% | 3% | 0% | 21% | 0–5bb | g8 |
| 55 | pp3 | 24% | 2% | 0% | 21% | 0–5bb | g8 |
| 44 | pp3 | 22% | 2% | 0% | 21% | 0–5bb | g8 |
| 33 | pp3 | 21% | 3% | 0% | 21% | 0–5bb | g8 |
| 22 | pp3 | 20% | 2% | 0% | 19% | 0–5bb | g8 |
