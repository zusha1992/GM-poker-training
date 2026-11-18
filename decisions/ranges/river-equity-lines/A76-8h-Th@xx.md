# A76-8h-Th@xx river (A♥ 7♥ 6♣ 8♥ T♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: KK–JJ, 99, 66–22, AK–AJ, A9, A6–A2, KQ–K2, QJ–Q9, Q6, Q5, JT, J9, T9, 96, 65, 64, 54, 43 | 90% | 94% | 93% | 76% |
| g2 | 25–50bb | J-high straights | J9 | 74% | 80% | 78% | 60% |
| g3 | 25–50bb | T-high straights | 99, A9, K9, Q9, T9, 98–96 | 70% | 71% | 69% | 55% |
| g4 | 25–50bb | 8-high straights | 54 | 64% | 56% | 54% | 48% |
| g5 | 15–25bb | Sets | AA, 88–66 | 63% | 54% | 50% | 49% |
| g6 | 5–15bb | Sets | TT | 63% | 53% | 50% | 46% |
| g7 | 0–5bb | Two pair | AT, A8–A6, T8, T7, 87, 86, 76 | 60% | 36% | 33% | 48% |
| g8 | 0–5bb | Top pair | AK–AJ, A5–A2 | 50% | 14% | 9% | 47% |
| g9 | 0–5bb | Big pocket pairs | KK–JJ | 40% | 4% | 0% | 39% |
| g10 | 0–5bb | Second pair | KT, QT, JT | 41% | 4% | 0% | 34% |
| g11 | 0–5bb | Small pairs | 55–22, K8–K6, Q8–Q6, J8, J7, 75, 65, 64 | 29% | 3% | 0% | 22% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 96+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K3+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K2+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KT+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| KK+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K5+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K4+fl | flush | 100% | 99% | 100% | 100% | 50–100bb | g1 |
| AK+fl | flush | 100% | 99% | 100% | 100% | 50–100bb | g1 |
| KQ+fl | flush | 97% | 99% | 99% | 87% | 50–100bb | g1 |
| KJ+fl | flush | 95% | 99% | 99% | 85% | 50–100bb | g1 |
| K9+fl | flush | 95% | 98% | 97% | 84% | 50–100bb | g1 |
| K6+fl | flush | 91% | 94% | 93% | 79% | 50–100bb | g1 |
| Q6+fl | flush | 94% | 99% | 99% | 77% | 50–100bb | g1 |
| QT+fl | flush | 95% | 99% | 99% | 76% | 50–100bb | g1 |
| Q5+fl | flush | 95% | 99% | 99% | 75% | 50–100bb | g1 |
| QQ+fl | flush | 95% | 99% | 99% | 75% | 50–100bb | g1 |
| AQ+fl | flush | 95% | 98% | 98% | 74% | 50–100bb | g1 |
| J9+fl | flush | 90% | 97% | 96% | 74% | 50–100bb | g1 |
| JT+fl | flush | 91% | 98% | 97% | 73% | 50–100bb | g1 |
| QJ+fl | flush | 93% | 98% | 98% | 73% | 50–100bb | g1 |
| JJ+fl | flush | 90% | 98% | 98% | 72% | 50–100bb | g1 |
| AJ+fl | flush | 90% | 97% | 97% | 71% | 50–100bb | g1 |
| Q9+fl | flush | 91% | 97% | 97% | 71% | 50–100bb | g1 |
| A9+fl | flushlo | 86% | 94% | 93% | 67% | 50–100bb | g1 |
| T9+fl | flushlo | 86% | 94% | 94% | 67% | 50–100bb | g1 |
| 99+fl | flushlo | 86% | 95% | 94% | 67% | 50–100bb | g1 |
| 64+fl | flushlo | 85% | 87% | 87% | 65% | 50–100bb | g1 |
| 43+fl | flushlo | 82% | 83% | 82% | 64% | 50–100bb | g1 |
| 65+fl | flushlo | 85% | 88% | 86% | 64% | 50–100bb | g1 |
| 54+fl | flushlo | 83% | 85% | 85% | 64% | 50–100bb | g1 |
| A2+fl | flushlo | 76% | 81% | 80% | 64% | 50–100bb | g1 |
| A3+fl | flushlo | 78% | 82% | 81% | 64% | 50–100bb | g1 |
| 22+fl | flushlo | 77% | 82% | 81% | 63% | 50–100bb | g1 |
| A5+fl | flushlo | 81% | 84% | 82% | 63% | 50–100bb | g1 |
| A4+fl | flushlo | 80% | 82% | 81% | 63% | 50–100bb | g1 |
| A6+fl | flushlo | 83% | 86% | 86% | 63% | 50–100bb | g1 |
| 55+fl | flushlo | 81% | 85% | 84% | 62% | 50–100bb | g1 |
| 66+fl | flushlo | 82% | 86% | 86% | 62% | 50–100bb | g1 |
| 33+fl | flushlo | 77% | 82% | 80% | 62% | 50–100bb | g1 |
| 44+fl | flushlo | 79% | 83% | 82% | 61% | 50–100bb | g1 |
| J9 | straight | 74% | 80% | 78% | 60% | 50–100bb | g2 |
| K9 | straight | 70% | 72% | 70% | 50% | 25–50bb | g3 |
| 99 | straight | 73% | 74% | 73% | 58% | 50–100bb | g3 |
| T9 | straight | 70% | 70% | 68% | 57% | 50–100bb | g3 |
| A9 | straight | 70% | 70% | 68% | 57% | 50–100bb | g3 |
| 97 | straight | 70% | 71% | 69% | 56% | 50–100bb | g3 |
| Q9 | straight | 70% | 71% | 71% | 56% | 50–100bb | g3 |
| 98 | straight | 71% | 71% | 68% | 55% | 50–100bb | g3 |
| 96 | straight | 70% | 69% | 69% | 55% | 50–100bb | g3 |
| 54 | straight | 64% | 56% | 54% | 48% | 25–50bb | g4 |
| 88 | twopair | 63% | 56% | 54% | 47% | 25–50bb | g5 |
| 77 | twopair | 62% | 55% | 52% | 50% | 25–50bb | g5 |
| AA | twopair | 63% | 51% | 46% | 51% | 50–100bb | g5 |
| 66 | twopair | 63% | 52% | 50% | 47% | 25–50bb | g5 |
| TT | twopair | 63% | 53% | 50% | 46% | 5–15bb | g6 |
| AT | twopair | 63% | 46% | 44% | 48% | 0–5bb | g7 |
| A8 | twopair | 61% | 41% | 37% | 48% | 0–5bb | g7 |
| A7 | twopair | 60% | 36% | 33% | 50% | 0–5bb | g7 |
| A6 | twopair | 59% | 31% | 28% | 48% | 0–5bb | g7 |
| T8 | twopair | 57% | 30% | 27% | 45% | 0–5bb | g7 |
| T7 | twopair | 56% | 28% | 24% | 47% | 0–5bb | g7 |
| 87 | twopair | 55% | 26% | 22% | 46% | 0–5bb | g7 |
| 86 | twopair | 54% | 24% | 20% | 47% | 0–5bb | g7 |
| 76 | twopair | 53% | 22% | 19% | 47% | 0–5bb | g7 |
| AK | tpgk | 51% | 20% | 14% | 44% | 0–5bb | g8 |
| AQ | tpgk | 51% | 19% | 15% | 48% | 0–5bb | g8 |
| AJ | tpmk | 50% | 16% | 13% | 48% | 0–5bb | g8 |
| A2 | tpmk | 50% | 10% | 5% | 46% | 0–5bb | g8 |
| A5 | tpmk | 49% | 10% | 5% | 48% | 0–5bb | g8 |
| A4 | tpmk | 48% | 11% | 5% | 46% | 0–5bb | g8 |
| A3 | tpmk | 48% | 10% | 5% | 47% | 0–5bb | g8 |
| KK | pp1 | 41% | 5% | 0% | 26% | 0–5bb | g9 |
| JJ | pp1 | 41% | 2% | 0% | 45% | 0–5bb | g9 |
| QQ | pp1 | 40% | 4% | 0% | 46% | 0–5bb | g9 |
| KT | mp | 43% | 4% | 0% | 33% | 0–5bb | g10 |
| QT | mp | 40% | 4% | 0% | 34% | 0–5bb | g10 |
| JT | mp | 39% | 3% | 0% | 35% | 0–5bb | g10 |
| K8 | bp | 37% | 4% | 0% | 24% | 0–5bb | g11 |
| J8 | bp | 35% | 3% | 0% | 26% | 0–5bb | g11 |
| Q8 | bp | 35% | 3% | 0% | 25% | 0–5bb | g11 |
| K7 | bp | 31% | 3% | 0% | 21% | 0–5bb | g11 |
| Q7 | bp | 31% | 3% | 0% | 23% | 0–5bb | g11 |
| 75 | bp | 30% | 3% | 0% | 24% | 0–5bb | g11 |
| J7 | bp | 29% | 2% | 0% | 24% | 0–5bb | g11 |
| Q6 | bp | 28% | 3% | 0% | 22% | 0–5bb | g11 |
| K6 | bp | 27% | 3% | 0% | 20% | 0–5bb | g11 |
| 65 | bp | 26% | 3% | 0% | 21% | 0–5bb | g11 |
| 64 | bp | 25% | 3% | 0% | 22% | 0–5bb | g11 |
| 55 | pp3 | 25% | 2% | 0% | 21% | 0–5bb | g11 |
| 44 | pp3 | 22% | 3% | 0% | 21% | 0–5bb | g11 |
| 33 | pp3 | 21% | 3% | 0% | 20% | 0–5bb | g11 |
| 22 | pp3 | 19% | 2% | 0% | 19% | 0–5bb | g11 |
