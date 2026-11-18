# A76-8h-Th@bx river (A♥ 7♥ 6♣ 8♥ T♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: KK–JJ, 99, 66–22, AK–AJ, A9, A6–A2, KQ–K2, QJ–Q9, Q6, Q5, JT, J9, T9, 96, 65, 64, 54, 43 | 93% | 95% | 95% | 85% |
| g2 | 25–50bb | Straights | 99, A9, K9, Q9, J9, T9, 98–96, 54 | 73% | 71% | 69% | 68% |
| g3 | 15–25bb | Sets | AA, TT, 88–66 | 66% | 57% | 53% | 60% |
| g4 | 15–25bb | Two pair | AT, A8, A7 | 62% | 45% | 40% | 53% |
| g5 | 0–5bb | Two pair | A6, T8, T7, 87, 86, 76 | 55% | 36% | 32% | 46% |
| g6 | 0–5bb | Top pair | AK–AJ, A5–A2 | 44% | 22% | 16% | 37% |
| g7 | 0–5bb | Big pocket pairs | KK–JJ | 29% | 6% | 0% | 24% |
| g8 | 0–5bb | Second pair | KT, QT, JT | 30% | 6% | 0% | 28% |
| g9 | 0–5bb | Small pairs | 55–22, K8–K6, Q8–Q6, J8, J7, 75, 65, 64 | 20% | 5% | 0% | 21% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 96+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K5+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K4+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K3+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K2+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KK+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AK+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KQ+fl | flush | 98% | 100% | 100% | 94% | 50–100bb | g1 |
| KJ+fl | flush | 98% | 100% | 100% | 93% | 50–100bb | g1 |
| K9+fl | flush | 96% | 99% | 99% | 90% | 50–100bb | g1 |
| Q6+fl | flush | 97% | 100% | 100% | 90% | 50–100bb | g1 |
| K6+fl | flush | 95% | 95% | 95% | 89% | 50–100bb | g1 |
| Q5+fl | flush | 97% | 100% | 100% | 88% | 50–100bb | g1 |
| QQ+fl | flush | 97% | 100% | 100% | 87% | 50–100bb | g1 |
| QJ+fl | flush | 96% | 100% | 100% | 86% | 50–100bb | g1 |
| QT+fl | flush | 96% | 100% | 100% | 86% | 50–100bb | g1 |
| AQ+fl | flush | 96% | 100% | 100% | 86% | 50–100bb | g1 |
| JJ+fl | flush | 95% | 100% | 100% | 85% | 50–100bb | g1 |
| J9+fl | flush | 94% | 99% | 99% | 84% | 50–100bb | g1 |
| Q9+fl | flush | 94% | 99% | 99% | 83% | 50–100bb | g1 |
| AJ+fl | flush | 94% | 100% | 100% | 83% | 50–100bb | g1 |
| JT+fl | flush | 94% | 100% | 100% | 83% | 50–100bb | g1 |
| 65+fl | flushlo | 89% | 91% | 90% | 79% | 50–100bb | g1 |
| 99+fl | flushlo | 92% | 97% | 97% | 78% | 50–100bb | g1 |
| A9+fl | flushlo | 91% | 98% | 97% | 78% | 50–100bb | g1 |
| T9+fl | flushlo | 92% | 97% | 97% | 78% | 50–100bb | g1 |
| 64+fl | flushlo | 90% | 90% | 91% | 78% | 50–100bb | g1 |
| 66+fl | flushlo | 90% | 90% | 90% | 77% | 50–100bb | g1 |
| A6+fl | flushlo | 90% | 90% | 89% | 76% | 50–100bb | g1 |
| 54+fl | flushlo | 87% | 88% | 87% | 75% | 50–100bb | g1 |
| 43+fl | flushlo | 83% | 84% | 82% | 74% | 50–100bb | g1 |
| 55+fl | flushlo | 85% | 88% | 87% | 73% | 50–100bb | g1 |
| 44+fl | flushlo | 82% | 83% | 81% | 73% | 50–100bb | g1 |
| 22+fl | flushlo | 78% | 80% | 79% | 73% | 50–100bb | g1 |
| A5+fl | flushlo | 86% | 88% | 86% | 72% | 50–100bb | g1 |
| A2+fl | flushlo | 78% | 79% | 77% | 72% | 50–100bb | g1 |
| 33+fl | flushlo | 81% | 80% | 80% | 72% | 50–100bb | g1 |
| A4+fl | flushlo | 82% | 83% | 82% | 72% | 50–100bb | g1 |
| A3+fl | flushlo | 81% | 80% | 79% | 71% | 50–100bb | g1 |
| J9 | straight | 77% | 78% | 75% | 71% | 50–100bb | g2 |
| 99 | straight | 75% | 73% | 70% | 70% | 50–100bb | g2 |
| Q9 | straight | 73% | 71% | 69% | 69% | 50–100bb | g2 |
| A9 | straight | 73% | 71% | 67% | 68% | 50–100bb | g2 |
| 97 | straight | 73% | 71% | 69% | 67% | 50–100bb | g2 |
| 96 | straight | 73% | 70% | 69% | 67% | 50–100bb | g2 |
| 98 | straight | 73% | 70% | 69% | 67% | 50–100bb | g2 |
| T9 | straight | 73% | 69% | 67% | 66% | 50–100bb | g2 |
| K9 | straight | 73% | 71% | 70% | 65% | 50–100bb | g2 |
| 54 | straight | 66% | 59% | 55% | 60% | 50–100bb | g2 |
| 77 | twopair | 64% | 59% | 57% | 62% | 50–100bb | g3 |
| 88 | twopair | 67% | 58% | 55% | 61% | 50–100bb | g3 |
| AA | twopair | 67% | 57% | 49% | 61% | 50–100bb | g3 |
| 66 | twopair | 64% | 55% | 53% | 59% | 50–100bb | g3 |
| TT | twopair | 66% | 56% | 52% | 59% | 50–100bb | g3 |
| AT | twopair | 66% | 51% | 49% | 57% | 50–100bb | g4 |
| A8 | twopair | 60% | 44% | 36% | 51% | 50–100bb | g4 |
| A7 | twopair | 59% | 41% | 35% | 51% | 50–100bb | g4 |
| A6 | twopair | 59% | 39% | 33% | 48% | 0–5bb | g5 |
| T8 | twopair | 57% | 37% | 35% | 49% | 0–5bb | g5 |
| T7 | twopair | 54% | 37% | 31% | 47% | 0–5bb | g5 |
| 87 | twopair | 51% | 34% | 30% | 45% | 0–5bb | g5 |
| 86 | twopair | 51% | 32% | 29% | 40% | 0–5bb | g5 |
| 76 | twopair | 49% | 32% | 28% | 40% | 0–5bb | g5 |
| AK | tpgk | 50% | 30% | 25% | 38% | 0–5bb | g6 |
| AQ | tpgk | 48% | 30% | 24% | 42% | 0–5bb | g6 |
| AJ | tpmk | 47% | 28% | 22% | 39% | 0–5bb | g6 |
| A2 | tpmk | 42% | 16% | 9% | 35% | 0–5bb | g6 |
| A3 | tpmk | 42% | 15% | 9% | 36% | 0–5bb | g6 |
| A5 | tpmk | 41% | 16% | 9% | 35% | 0–5bb | g6 |
| A4 | tpmk | 41% | 15% | 9% | 36% | 0–5bb | g6 |
| JJ | pp1 | 31% | 5% | 0% | 28% | 0–5bb | g7 |
| QQ | pp1 | 29% | 6% | 0% | 28% | 0–5bb | g7 |
| KK | pp1 | 27% | 5% | 0% | 15% | 0–5bb | g7 |
| JT | mp | 31% | 6% | 0% | 29% | 0–5bb | g8 |
| QT | mp | 30% | 5% | 0% | 29% | 0–5bb | g8 |
| KT | mp | 30% | 6% | 0% | 25% | 0–5bb | g8 |
| K8 | bp | 30% | 6% | 0% | 22% | 0–5bb | g9 |
| J8 | bp | 30% | 6% | 0% | 27% | 0–5bb | g9 |
| Q8 | bp | 29% | 6% | 0% | 26% | 0–5bb | g9 |
| K7 | bp | 25% | 7% | 0% | 22% | 0–5bb | g9 |
| J7 | bp | 24% | 6% | 0% | 26% | 0–5bb | g9 |
| Q7 | bp | 24% | 6% | 0% | 26% | 0–5bb | g9 |
| 75 | bp | 20% | 5% | 0% | 27% | 0–5bb | g9 |
| K6 | bp | 17% | 5% | 0% | 16% | 0–5bb | g9 |
| Q6 | bp | 16% | 5% | 0% | 20% | 0–5bb | g9 |
| 65 | bp | 14% | 4% | 0% | 19% | 0–5bb | g9 |
| 64 | bp | 14% | 4% | 0% | 20% | 0–5bb | g9 |
| 55 | pp3 | 12% | 3% | 0% | 19% | 0–5bb | g9 |
| 44 | pp3 | 10% | 2% | 0% | 17% | 0–5bb | g9 |
| 33 | pp3 | 9% | 1% | 0% | 17% | 0–5bb | g9 |
| 22 | pp3 | 8% | 1% | 0% | 17% | 0–5bb | g9 |
