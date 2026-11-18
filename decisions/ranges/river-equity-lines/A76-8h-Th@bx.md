# A76-8h-Th@bx river (A♥ 7♥ 6♣ 8♥ T♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: KK–JJ, 99, 66–22, AK–AJ, A9, A6–A2, KQ–K2, QJ–Q9, Q6, Q5, JT, J9, T9, 96, 65, 64, 54, 43 | 93% | 95% | 95% | 85% |
| g2 | 25–50bb | J-high straights | J9 | 77% | 78% | 76% | 71% |
| g3 | 25–50bb | T-high straights | 99, A9, K9, Q9, T9, 98–96 | 73% | 71% | 69% | 67% |
| g4 | 25–50bb | 8-high straights | 54 | 65% | 58% | 55% | 62% |
| g5 | 15–25bb | Sets | AA, TT, 88–66 | 66% | 57% | 53% | 60% |
| g6 | 15–25bb | Two pair | AT, A8–A6 | 61% | 43% | 39% | 52% |
| g7 | 0–5bb | Two pair | T8, T7, 87, 86, 76 | 53% | 35% | 30% | 45% |
| g8 | 0–5bb | Top pair | AK–AJ, A5–A2 | 44% | 21% | 16% | 37% |
| g9 | 0–5bb | Big pocket pairs | KK–JJ | 29% | 5% | 0% | 23% |
| g10 | 0–5bb | Second pair | KT, QT, JT | 30% | 6% | 0% | 27% |
| g11 | 0–5bb | Small pairs | 55–22, K8–K6, Q8–Q6, J8, J7, 75, 65, 64 | 20% | 5% | 0% | 21% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 96+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K3+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KK+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K4+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K5+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K2+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AK+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KQ+fl | flush | 99% | 100% | 100% | 94% | 50–100bb | g1 |
| KJ+fl | flush | 98% | 100% | 100% | 93% | 50–100bb | g1 |
| K9+fl | flush | 97% | 99% | 99% | 91% | 50–100bb | g1 |
| Q6+fl | flush | 97% | 100% | 100% | 90% | 50–100bb | g1 |
| Q5+fl | flush | 96% | 100% | 100% | 88% | 50–100bb | g1 |
| K6+fl | flush | 95% | 95% | 95% | 88% | 50–100bb | g1 |
| QQ+fl | flush | 97% | 100% | 100% | 88% | 50–100bb | g1 |
| QT+fl | flush | 97% | 100% | 100% | 86% | 50–100bb | g1 |
| QJ+fl | flush | 96% | 100% | 100% | 86% | 50–100bb | g1 |
| AQ+fl | flush | 96% | 100% | 100% | 86% | 50–100bb | g1 |
| JJ+fl | flush | 95% | 100% | 100% | 84% | 50–100bb | g1 |
| Q9+fl | flush | 95% | 99% | 99% | 84% | 50–100bb | g1 |
| J9+fl | flush | 94% | 99% | 99% | 84% | 50–100bb | g1 |
| JT+fl | flush | 94% | 100% | 100% | 83% | 50–100bb | g1 |
| AJ+fl | flush | 94% | 100% | 100% | 83% | 50–100bb | g1 |
| 99+fl | flushlo | 92% | 97% | 97% | 78% | 50–100bb | g1 |
| 64+fl | flushlo | 89% | 91% | 90% | 78% | 50–100bb | g1 |
| T9+fl | flushlo | 92% | 97% | 97% | 77% | 50–100bb | g1 |
| 65+fl | flushlo | 90% | 90% | 90% | 77% | 50–100bb | g1 |
| A9+fl | flushlo | 92% | 97% | 97% | 77% | 50–100bb | g1 |
| 66+fl | flushlo | 89% | 90% | 90% | 76% | 50–100bb | g1 |
| A6+fl | flushlo | 90% | 91% | 90% | 75% | 50–100bb | g1 |
| 54+fl | flushlo | 86% | 88% | 87% | 75% | 50–100bb | g1 |
| 55+fl | flushlo | 85% | 87% | 87% | 74% | 50–100bb | g1 |
| A5+fl | flushlo | 85% | 87% | 85% | 74% | 50–100bb | g1 |
| 44+fl | flushlo | 82% | 82% | 82% | 73% | 50–100bb | g1 |
| 43+fl | flushlo | 84% | 84% | 82% | 73% | 50–100bb | g1 |
| 22+fl | flushlo | 79% | 80% | 79% | 73% | 50–100bb | g1 |
| A4+fl | flushlo | 83% | 83% | 82% | 72% | 50–100bb | g1 |
| 33+fl | flushlo | 80% | 81% | 80% | 72% | 50–100bb | g1 |
| A2+fl | flushlo | 80% | 79% | 78% | 71% | 50–100bb | g1 |
| A3+fl | flushlo | 81% | 80% | 80% | 70% | 50–100bb | g1 |
| J9 | straight | 77% | 78% | 76% | 71% | 50–100bb | g2 |
| 99 | straight | 74% | 74% | 71% | 68% | 50–100bb | g3 |
| Q9 | straight | 73% | 71% | 68% | 68% | 50–100bb | g3 |
| 98 | straight | 72% | 70% | 69% | 68% | 50–100bb | g3 |
| 96 | straight | 72% | 70% | 68% | 67% | 50–100bb | g3 |
| 97 | straight | 73% | 70% | 70% | 67% | 50–100bb | g3 |
| A9 | straight | 73% | 71% | 68% | 67% | 50–100bb | g3 |
| K9 | straight | 74% | 71% | 69% | 66% | 50–100bb | g3 |
| T9 | straight | 73% | 70% | 68% | 65% | 50–100bb | g3 |
| 54 | straight | 65% | 58% | 55% | 62% | 50–100bb | g4 |
| 77 | twopair | 63% | 58% | 55% | 61% | 50–100bb | g5 |
| 88 | twopair | 66% | 58% | 56% | 61% | 50–100bb | g5 |
| AA | twopair | 67% | 54% | 50% | 60% | 50–100bb | g5 |
| 66 | twopair | 64% | 56% | 55% | 60% | 50–100bb | g5 |
| TT | twopair | 66% | 56% | 52% | 58% | 50–100bb | g5 |
| AT | twopair | 64% | 52% | 48% | 56% | 50–100bb | g6 |
| A8 | twopair | 61% | 43% | 38% | 51% | 50–100bb | g6 |
| A7 | twopair | 58% | 39% | 35% | 51% | 50–100bb | g6 |
| A6 | twopair | 58% | 36% | 33% | 50% | 50–100bb | g6 |
| T8 | twopair | 58% | 38% | 33% | 50% | 0–5bb | g7 |
| T7 | twopair | 54% | 36% | 31% | 47% | 0–5bb | g7 |
| 87 | twopair | 50% | 34% | 29% | 45% | 0–5bb | g7 |
| 86 | twopair | 50% | 33% | 28% | 40% | 0–5bb | g7 |
| 76 | twopair | 48% | 32% | 27% | 40% | 0–5bb | g7 |
| AK | tpgk | 48% | 29% | 25% | 37% | 0–5bb | g8 |
| AJ | tpmk | 48% | 28% | 23% | 40% | 0–5bb | g8 |
| AQ | tpgk | 48% | 30% | 24% | 42% | 0–5bb | g8 |
| A5 | tpmk | 42% | 16% | 9% | 35% | 0–5bb | g8 |
| A2 | tpmk | 41% | 16% | 9% | 36% | 0–5bb | g8 |
| A4 | tpmk | 41% | 16% | 9% | 35% | 0–5bb | g8 |
| A3 | tpmk | 41% | 16% | 10% | 35% | 0–5bb | g8 |
| JJ | pp1 | 30% | 5% | 0% | 28% | 0–5bb | g9 |
| QQ | pp1 | 28% | 5% | 0% | 28% | 0–5bb | g9 |
| KK | pp1 | 28% | 5% | 0% | 14% | 0–5bb | g9 |
| KT | mp | 31% | 6% | 0% | 24% | 0–5bb | g10 |
| JT | mp | 31% | 6% | 0% | 29% | 0–5bb | g10 |
| QT | mp | 30% | 6% | 0% | 28% | 0–5bb | g10 |
| J8 | bp | 29% | 6% | 0% | 26% | 0–5bb | g11 |
| Q8 | bp | 29% | 6% | 0% | 27% | 0–5bb | g11 |
| K8 | bp | 28% | 6% | 0% | 22% | 0–5bb | g11 |
| Q7 | bp | 25% | 6% | 0% | 26% | 0–5bb | g11 |
| K7 | bp | 24% | 6% | 0% | 21% | 0–5bb | g11 |
| J7 | bp | 22% | 6% | 0% | 26% | 0–5bb | g11 |
| 75 | bp | 20% | 6% | 0% | 27% | 0–5bb | g11 |
| Q6 | bp | 16% | 5% | 0% | 20% | 0–5bb | g11 |
| K6 | bp | 15% | 5% | 0% | 18% | 0–5bb | g11 |
| 65 | bp | 15% | 4% | 0% | 19% | 0–5bb | g11 |
| 64 | bp | 14% | 4% | 0% | 20% | 0–5bb | g11 |
| 55 | pp3 | 13% | 3% | 0% | 18% | 0–5bb | g11 |
| 44 | pp3 | 11% | 2% | 0% | 17% | 0–5bb | g11 |
| 33 | pp3 | 9% | 1% | 0% | 17% | 0–5bb | g11 |
| 22 | pp3 | 8% | 1% | 0% | 17% | 0–5bb | g11 |
