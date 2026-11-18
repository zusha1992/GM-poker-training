# A76-8h-Th@xx river (A♥ 7♥ 6♣ 8♥ T♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: KK–JJ, 99, 66–22, AK–AJ, A9, A6–A2, KQ–K2, QJ–Q9, Q6, Q5, JT, J9, T9, 96, 65, 64, 54, 43 | 90% | 94% | 93% | 76% |
| g2 | 25–50bb | Straights | 99, A9, K9, Q9, J9, T9, 98–96, 54 | 71% | 72% | 70% | 56% |
| g3 | 15–25bb | Sets | 88–66 | 64% | 55% | 52% | 47% |
| g4 | 0–5bb | Sets | AA, TT | 64% | 51% | 48% | 48% |
| g5 | 0–5bb | Two pair | AT, A8–A6, T8, T7, 87, 86, 76 | 59% | 36% | 33% | 48% |
| g6 | 0–5bb | Top pair | AK–AJ, A5–A2 | 50% | 14% | 9% | 46% |
| g7 | 0–5bb | Big pocket pairs | KK–JJ | 40% | 3% | 0% | 39% |
| g8 | 0–5bb | Second pair | KT, QT, JT | 41% | 4% | 0% | 34% |
| g9 | 0–5bb | Small pairs | 55–22, K8–K6, Q8–Q6, J8, J7, 75, 65, 64 | 29% | 3% | 0% | 22% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 96+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KK+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K3+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K5+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K2+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K4+fl | flush | 100% | 99% | 100% | 100% | 50–100bb | g1 |
| AK+fl | flush | 100% | 99% | 99% | 100% | 50–100bb | g1 |
| KQ+fl | flush | 98% | 99% | 99% | 86% | 50–100bb | g1 |
| KJ+fl | flush | 96% | 99% | 99% | 85% | 50–100bb | g1 |
| K9+fl | flush | 93% | 98% | 97% | 83% | 50–100bb | g1 |
| K6+fl | flush | 92% | 94% | 93% | 78% | 50–100bb | g1 |
| QT+fl | flush | 95% | 99% | 98% | 76% | 50–100bb | g1 |
| Q6+fl | flush | 95% | 99% | 99% | 76% | 50–100bb | g1 |
| QQ+fl | flush | 94% | 98% | 98% | 76% | 50–100bb | g1 |
| Q5+fl | flush | 95% | 99% | 99% | 75% | 50–100bb | g1 |
| QJ+fl | flush | 93% | 99% | 98% | 74% | 50–100bb | g1 |
| AQ+fl | flush | 94% | 99% | 98% | 74% | 50–100bb | g1 |
| J9+fl | flush | 90% | 97% | 97% | 73% | 50–100bb | g1 |
| Q9+fl | flush | 91% | 97% | 97% | 73% | 50–100bb | g1 |
| JJ+fl | flush | 90% | 98% | 98% | 72% | 50–100bb | g1 |
| AJ+fl | flush | 90% | 97% | 97% | 72% | 50–100bb | g1 |
| JT+fl | flush | 91% | 98% | 98% | 72% | 50–100bb | g1 |
| 99+fl | flushlo | 86% | 95% | 95% | 67% | 50–100bb | g1 |
| T9+fl | flushlo | 86% | 94% | 94% | 66% | 50–100bb | g1 |
| A9+fl | flushlo | 86% | 94% | 94% | 66% | 50–100bb | g1 |
| A6+fl | flushlo | 84% | 86% | 86% | 65% | 50–100bb | g1 |
| 64+fl | flushlo | 85% | 87% | 87% | 64% | 50–100bb | g1 |
| A3+fl | flushlo | 77% | 82% | 79% | 64% | 50–100bb | g1 |
| 43+fl | flushlo | 82% | 83% | 81% | 63% | 50–100bb | g1 |
| 22+fl | flushlo | 76% | 80% | 80% | 63% | 50–100bb | g1 |
| 44+fl | flushlo | 79% | 82% | 82% | 63% | 50–100bb | g1 |
| A2+fl | flushlo | 76% | 80% | 79% | 63% | 50–100bb | g1 |
| 55+fl | flushlo | 82% | 85% | 84% | 63% | 50–100bb | g1 |
| 65+fl | flushlo | 84% | 87% | 86% | 63% | 50–100bb | g1 |
| 54+fl | flushlo | 83% | 85% | 84% | 62% | 50–100bb | g1 |
| A5+fl | flushlo | 82% | 84% | 82% | 62% | 50–100bb | g1 |
| 66+fl | flushlo | 84% | 87% | 86% | 62% | 50–100bb | g1 |
| A4+fl | flushlo | 80% | 82% | 81% | 62% | 50–100bb | g1 |
| 33+fl | flushlo | 77% | 81% | 81% | 62% | 50–100bb | g1 |
| J9 | straight | 74% | 80% | 79% | 61% | 50–100bb | g2 |
| 99 | straight | 71% | 75% | 72% | 58% | 50–100bb | g2 |
| 97 | straight | 71% | 71% | 69% | 57% | 50–100bb | g2 |
| A9 | straight | 70% | 70% | 68% | 57% | 50–100bb | g2 |
| Q9 | straight | 69% | 72% | 71% | 57% | 50–100bb | g2 |
| 98 | straight | 70% | 71% | 69% | 57% | 50–100bb | g2 |
| 96 | straight | 69% | 70% | 68% | 55% | 50–100bb | g2 |
| T9 | straight | 71% | 69% | 68% | 55% | 50–100bb | g2 |
| 54 | straight | 63% | 56% | 54% | 47% | 25–50bb | g2 |
| K9 | straight | 71% | 72% | 71% | 50% | 50–100bb | g2 |
| 88 | twopair | 63% | 56% | 53% | 47% | 25–50bb | g3 |
| 66 | twopair | 62% | 52% | 51% | 46% | 25–50bb | g3 |
| 77 | twopair | 64% | 55% | 51% | 47% | 25–50bb | g3 |
| AA | twopair | 64% | 50% | 47% | 50% | 0–5bb | g4 |
| TT | twopair | 64% | 52% | 49% | 47% | 5–15bb | g4 |
| AT | twopair | 62% | 47% | 43% | 47% | 0–5bb | g5 |
| A7 | twopair | 61% | 36% | 33% | 49% | 0–5bb | g5 |
| A8 | twopair | 60% | 40% | 39% | 49% | 0–5bb | g5 |
| A6 | twopair | 58% | 32% | 28% | 49% | 0–5bb | g5 |
| T8 | twopair | 58% | 30% | 26% | 47% | 0–5bb | g5 |
| T7 | twopair | 56% | 28% | 24% | 47% | 0–5bb | g5 |
| 87 | twopair | 54% | 25% | 21% | 47% | 0–5bb | g5 |
| 76 | twopair | 54% | 22% | 18% | 47% | 0–5bb | g5 |
| 86 | twopair | 53% | 23% | 19% | 47% | 0–5bb | g5 |
| AK | tpgk | 53% | 20% | 15% | 42% | 0–5bb | g6 |
| AQ | tpgk | 51% | 19% | 14% | 48% | 0–5bb | g6 |
| AJ | tpmk | 50% | 17% | 13% | 47% | 0–5bb | g6 |
| A5 | tpmk | 49% | 10% | 5% | 46% | 0–5bb | g6 |
| A2 | tpmk | 49% | 11% | 5% | 46% | 0–5bb | g6 |
| A4 | tpmk | 48% | 10% | 5% | 46% | 0–5bb | g6 |
| A3 | tpmk | 48% | 10% | 5% | 46% | 0–5bb | g6 |
| JJ | pp1 | 41% | 2% | 0% | 45% | 0–5bb | g7 |
| QQ | pp1 | 40% | 4% | 0% | 45% | 0–5bb | g7 |
| KK | pp1 | 40% | 4% | 0% | 27% | 0–5bb | g7 |
| QT | mp | 42% | 4% | 0% | 34% | 0–5bb | g8 |
| KT | mp | 41% | 4% | 0% | 34% | 0–5bb | g8 |
| JT | mp | 40% | 3% | 0% | 35% | 0–5bb | g8 |
| K8 | bp | 37% | 4% | 0% | 24% | 0–5bb | g9 |
| J8 | bp | 35% | 2% | 0% | 25% | 0–5bb | g9 |
| Q8 | bp | 35% | 3% | 0% | 24% | 0–5bb | g9 |
| K7 | bp | 31% | 3% | 0% | 22% | 0–5bb | g9 |
| J7 | bp | 30% | 2% | 0% | 23% | 0–5bb | g9 |
| Q7 | bp | 29% | 3% | 0% | 23% | 0–5bb | g9 |
| 75 | bp | 29% | 3% | 0% | 25% | 0–5bb | g9 |
| Q6 | bp | 26% | 3% | 0% | 22% | 0–5bb | g9 |
| K6 | bp | 26% | 3% | 0% | 19% | 0–5bb | g9 |
| 65 | bp | 26% | 3% | 0% | 22% | 0–5bb | g9 |
| 64 | bp | 25% | 3% | 0% | 23% | 0–5bb | g9 |
| 55 | pp3 | 23% | 3% | 0% | 21% | 0–5bb | g9 |
| 44 | pp3 | 22% | 3% | 0% | 21% | 0–5bb | g9 |
| 33 | pp3 | 21% | 2% | 0% | 21% | 0–5bb | g9 |
| 22 | pp3 | 20% | 2% | 0% | 19% | 0–5bb | g9 |
