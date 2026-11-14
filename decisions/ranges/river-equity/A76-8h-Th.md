# A76-8h-Th river (A♥ 7♥ 6♣ 8♥ T♥): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes & straights | 99, A9, K9, Q9, J9, T9, 98–96 · ♥ flushes: KK–JJ, 99, 66–22, AK–AJ, A9, A6–A2, KQ–K2, QJ–Q9, Q6, Q5, JT, J9, T9, 96, 65, 64, 54, 43 | 87% | 86% | 85% | 81% |
| g2 | 0–5bb | Straights & sets | AA, TT, 88–66, 54 | 57% | 46% | 44% | 43% |
| g3 | 0–5bb | Two pair | AT, A8–A6, T8, T7, 87, 86, 76 | 45% | 34% | 33% | 34% |
| g4 | 0–5bb | Top pair | AK–AJ, A5–A2 | 21% | 17% | 15% | 19% |
| g5 | 0–5bb | Big pocket pairs | KK–JJ | 6% | 2% | 0% | 4% |
| g6 | 0–5bb | Second pair | KT, QT, JT | 7% | 3% | 0% | 4% |
| g7 | 0–5bb | Small pairs | 55–22, K8–K6, Q8–Q6, J8, J7, 75, 65, 64 | 5% | 2% | 0% | 4% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 96+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K7+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| K5+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| KK+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| K2+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| KT+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| K3+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| K4+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| K8+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| AK+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| Q6+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| KQ+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| KJ+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| QQ+fl | flush | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| QT+fl | flush | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| Q5+fl | flush | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| QJ+fl | flush | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| AQ+fl | flush | 98% | 100% | 100% | 96% | 50–100bb | g1 |
| JJ+fl | flush | 97% | 100% | 100% | 95% | 50–100bb | g1 |
| JT+fl | flush | 97% | 100% | 100% | 95% | 50–100bb | g1 |
| K9+fl | flush | 97% | 99% | 99% | 95% | 50–100bb | g1 |
| Q9+fl | flush | 96% | 99% | 99% | 93% | 50–100bb | g1 |
| AJ+fl | flush | 97% | 100% | 100% | 93% | 50–100bb | g1 |
| J9+fl | flush | 96% | 99% | 99% | 92% | 50–100bb | g1 |
| K6+fl | flush | 94% | 94% | 94% | 90% | 50–100bb | g1 |
| T9+fl | flushlo | 93% | 98% | 98% | 88% | 50–100bb | g1 |
| A9+fl | flushlo | 93% | 98% | 98% | 87% | 50–100bb | g1 |
| 99+fl | flushlo | 93% | 98% | 98% | 86% | 50–100bb | g1 |
| 64+fl | flushlo | 89% | 89% | 88% | 81% | 50–100bb | g1 |
| 66+fl | flushlo | 88% | 88% | 87% | 80% | 50–100bb | g1 |
| A6+fl | flushlo | 89% | 88% | 88% | 80% | 50–100bb | g1 |
| 65+fl | flushlo | 88% | 88% | 87% | 79% | 50–100bb | g1 |
| 54+fl | flushlo | 84% | 84% | 84% | 76% | 50–100bb | g1 |
| 55+fl | flushlo | 84% | 84% | 84% | 75% | 50–100bb | g1 |
| A5+fl | flushlo | 85% | 85% | 84% | 75% | 50–100bb | g1 |
| 43+fl | flushlo | 81% | 78% | 78% | 72% | 50–100bb | g1 |
| 33+fl | flushlo | 77% | 76% | 75% | 72% | 50–100bb | g1 |
| 44+fl | flushlo | 79% | 76% | 77% | 71% | 50–100bb | g1 |
| A4+fl | flushlo | 78% | 77% | 77% | 71% | 50–100bb | g1 |
| A3+fl | flushlo | 76% | 75% | 75% | 71% | 50–100bb | g1 |
| 22+fl | flushlo | 77% | 75% | 74% | 70% | 50–100bb | g1 |
| A2+fl | flushlo | 77% | 75% | 74% | 69% | 50–100bb | g1 |
| J9 | straight | 75% | 73% | 72% | 66% | 50–100bb | g1 |
| 99 | straight | 71% | 66% | 64% | 61% | 50–100bb | g1 |
| Q9 | straight | 70% | 63% | 63% | 60% | 50–100bb | g1 |
| K9 | straight | 70% | 63% | 63% | 60% | 50–100bb | g1 |
| 97 | straight | 69% | 63% | 63% | 59% | 50–100bb | g1 |
| A9 | straight | 69% | 62% | 61% | 59% | 50–100bb | g1 |
| 96 | straight | 68% | 62% | 61% | 59% | 50–100bb | g1 |
| 98 | straight | 69% | 62% | 62% | 58% | 50–100bb | g1 |
| T9 | straight | 69% | 62% | 61% | 57% | 50–100bb | g1 |
| 54 | straight | 57% | 45% | 43% | 42% | 0–5bb | g2 |
| TT | twopair | 57% | 46% | 44% | 40% | 0–5bb | g2 |
| AA | twopair | 57% | 44% | 41% | 41% | 0–5bb | g2 |
| 88 | twopair | 57% | 47% | 46% | 46% | 0–5bb | g2 |
| 66 | twopair | 56% | 44% | 44% | 43% | 0–5bb | g2 |
| 77 | twopair | 60% | 50% | 46% | 46% | 5–15bb | g2 |
| AT | twopair | 54% | 42% | 41% | 38% | 0–5bb | g3 |
| A8 | twopair | 47% | 34% | 33% | 35% | 0–5bb | g3 |
| A7 | twopair | 46% | 34% | 32% | 35% | 0–5bb | g3 |
| A6 | twopair | 43% | 29% | 28% | 32% | 0–5bb | g3 |
| T8 | twopair | 41% | 31% | 31% | 33% | 0–5bb | g3 |
| T7 | twopair | 41% | 30% | 29% | 33% | 0–5bb | g3 |
| 87 | twopair | 38% | 29% | 28% | 32% | 0–5bb | g3 |
| 86 | twopair | 35% | 28% | 26% | 31% | 0–5bb | g3 |
| 76 | twopair | 34% | 29% | 26% | 30% | 0–5bb | g3 |
| AK | tpgk | 30% | 25% | 23% | 30% | 0–5bb | g4 |
| AQ | tpgk | 30% | 25% | 22% | 30% | 0–5bb | g4 |
| AJ | tpmk | 26% | 24% | 21% | 24% | 0–5bb | g4 |
| A2 | tpmk | 17% | 13% | 10% | 14% | 0–5bb | g4 |
| A3 | tpmk | 17% | 13% | 10% | 13% | 0–5bb | g4 |
| A4 | tpmk | 15% | 11% | 9% | 13% | 0–5bb | g4 |
| A5 | tpmk | 15% | 10% | 8% | 12% | 0–5bb | g4 |
| JJ | pp1 | 6% | 2% | 0% | 5% | 0–5bb | g5 |
| KK | pp1 | 6% | 2% | 0% | 3% | 0–5bb | g5 |
| QQ | pp1 | 6% | 2% | 0% | 3% | 0–5bb | g5 |
| JT | mp | 7% | 2% | 0% | 5% | 0–5bb | g6 |
| QT | mp | 7% | 2% | 0% | 4% | 0–5bb | g6 |
| KT | mp | 6% | 3% | 0% | 4% | 0–5bb | g6 |
| J8 | bp | 7% | 2% | 0% | 6% | 0–5bb | g7 |
| K7 | bp | 6% | 2% | 0% | 4% | 0–5bb | g7 |
| J7 | bp | 6% | 2% | 0% | 5% | 0–5bb | g7 |
| K8 | bp | 6% | 2% | 0% | 4% | 0–5bb | g7 |
| Q8 | bp | 6% | 2% | 0% | 4% | 0–5bb | g7 |
| Q7 | bp | 6% | 3% | 0% | 4% | 0–5bb | g7 |
| 75 | bp | 5% | 1% | 0% | 5% | 0–5bb | g7 |
| K6 | bp | 4% | 2% | 0% | 3% | 0–5bb | g7 |
| Q6 | bp | 4% | 2% | 0% | 2% | 0–5bb | g7 |
| 64 | bp | 4% | 2% | 0% | 3% | 0–5bb | g7 |
| 65 | bp | 3% | 1% | 0% | 3% | 0–5bb | g7 |
| 55 | pp3 | 2% | 0% | 0% | 3% | 0–5bb | g7 |
| 44 | pp3 | 2% | 0% | 0% | 3% | 0–5bb | g7 |
| 33 | pp3 | 2% | 0% | 0% | 3% | 0–5bb | g7 |
| 22 | pp3 | 2% | 0% | 0% | 3% | 0–5bb | g7 |
