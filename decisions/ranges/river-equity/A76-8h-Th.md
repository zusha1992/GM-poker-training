# A76-8h-Th river (A♥ 7♥ 6♣ 8♥ T♥): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes & straights | 99, A9, K9, Q9, J9, T9, 98–96 · ♥ flushes: KK–JJ, 99, 66–22, AK–AJ, A9, A6–A2, KQ–K2, QJ–Q9, Q6, Q5, JT, J9, T9, 96, 65, 64, 54, 43 | 87% | 86% | 85% | 81% |
| g2 | 0–5bb | Straights & sets | AA, TT, 88–66, 54 | 58% | 46% | 44% | 45% |
| g3 | Pot is too big | Two pair | AT, A8–A6, T8, T7, 87, 86, 76 | 46% | 34% | 32% | 35% |
| g4 | Pot is too big | Top pair | AK–AJ, A5–A2 | 22% | 17% | 15% | 20% |
| g5 | Pot is too big | Big pocket pairs | KK–JJ | 6% | 2% | 0% | 3% |
| g6 | Pot is too big | Second pair | KT, QT, JT | 7% | 2% | 0% | 5% |
| g7 | Pot is too big | Small pairs | 55–22, K8–K6, Q8–Q6, J8, J7, 75, 65, 64 | 5% | 2% | 0% | 4% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 96+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KT+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| K4+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| K3+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| K7+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| K2+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| KK+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| K5+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| K8+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| AK+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| Q6+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| KQ+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| QQ+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| KJ+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| QT+fl | flush | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| Q5+fl | flush | 99% | 100% | 100% | 97% | 50–100bb | g1 |
| QJ+fl | flush | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| AQ+fl | flush | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| JJ+fl | flush | 97% | 100% | 100% | 95% | 50–100bb | g1 |
| JT+fl | flush | 97% | 100% | 100% | 95% | 50–100bb | g1 |
| K9+fl | flush | 97% | 99% | 99% | 95% | 50–100bb | g1 |
| AJ+fl | flush | 96% | 100% | 100% | 94% | 50–100bb | g1 |
| Q9+fl | flush | 96% | 99% | 99% | 94% | 50–100bb | g1 |
| J9+fl | flush | 96% | 99% | 99% | 92% | 50–100bb | g1 |
| K6+fl | flush | 94% | 94% | 95% | 90% | 50–100bb | g1 |
| T9+fl | flushlo | 93% | 98% | 98% | 88% | 50–100bb | g1 |
| A9+fl | flushlo | 94% | 98% | 98% | 87% | 50–100bb | g1 |
| 99+fl | flushlo | 94% | 98% | 98% | 87% | 50–100bb | g1 |
| 64+fl | flushlo | 89% | 88% | 88% | 80% | 50–100bb | g1 |
| 66+fl | flushlo | 88% | 88% | 88% | 80% | 50–100bb | g1 |
| A6+fl | flushlo | 88% | 88% | 88% | 79% | 50–100bb | g1 |
| 65+fl | flushlo | 89% | 88% | 87% | 78% | 50–100bb | g1 |
| 55+fl | flushlo | 84% | 84% | 84% | 75% | 50–100bb | g1 |
| 54+fl | flushlo | 85% | 85% | 84% | 75% | 50–100bb | g1 |
| A5+fl | flushlo | 84% | 85% | 83% | 74% | 50–100bb | g1 |
| 43+fl | flushlo | 80% | 79% | 78% | 72% | 50–100bb | g1 |
| 44+fl | flushlo | 78% | 77% | 78% | 72% | 50–100bb | g1 |
| A4+fl | flushlo | 78% | 77% | 76% | 71% | 50–100bb | g1 |
| 33+fl | flushlo | 77% | 75% | 74% | 71% | 50–100bb | g1 |
| 22+fl | flushlo | 78% | 75% | 75% | 70% | 50–100bb | g1 |
| A3+fl | flushlo | 76% | 74% | 73% | 70% | 50–100bb | g1 |
| A2+fl | flushlo | 78% | 75% | 73% | 70% | 50–100bb | g1 |
| J9 | straight | 76% | 72% | 71% | 67% | 50–100bb | g1 |
| 99 | straight | 72% | 66% | 65% | 61% | 50–100bb | g1 |
| Q9 | straight | 70% | 64% | 62% | 60% | 50–100bb | g1 |
| K9 | straight | 70% | 65% | 62% | 59% | 50–100bb | g1 |
| 98 | straight | 70% | 63% | 63% | 59% | 50–100bb | g1 |
| A9 | straight | 70% | 61% | 61% | 59% | 50–100bb | g1 |
| 97 | straight | 69% | 63% | 63% | 59% | 50–100bb | g1 |
| 96 | straight | 69% | 62% | 62% | 58% | 50–100bb | g1 |
| T9 | straight | 69% | 63% | 62% | 58% | 50–100bb | g1 |
| 77 | twopair | 60% | 49% | 48% | 46% | 0–5bb | g2 |
| 88 | twopair | 59% | 46% | 46% | 46% | 0–5bb | g2 |
| 66 | twopair | 58% | 45% | 44% | 44% | 0–5bb | g2 |
| 54 | straight | 58% | 45% | 43% | 44% | 0–5bb | g2 |
| AA | twopair | 57% | 44% | 40% | 43% | 0–5bb | g2 |
| TT | twopair | 57% | 45% | 44% | 43% | 0–5bb | g2 |
| AT | twopair | 54% | 42% | 40% | 39% | 0–5bb | g3 |
| A8 | twopair | 48% | 34% | 33% | 35% | Pot is too big | g3 |
| A7 | twopair | 46% | 34% | 32% | 35% | Pot is too big | g3 |
| A6 | twopair | 42% | 31% | 28% | 31% | Pot is too big | g3 |
| T8 | twopair | 42% | 31% | 29% | 33% | Pot is too big | g3 |
| T7 | twopair | 42% | 31% | 28% | 33% | Pot is too big | g3 |
| 87 | twopair | 37% | 29% | 27% | 33% | Pot is too big | g3 |
| 86 | twopair | 35% | 28% | 27% | 31% | Pot is too big | g3 |
| 76 | twopair | 33% | 28% | 26% | 32% | Pot is too big | g3 |
| AK | tpgk | 30% | 25% | 23% | 30% | Pot is too big | g4 |
| AQ | tpgk | 29% | 25% | 22% | 31% | Pot is too big | g4 |
| AJ | tpmk | 27% | 24% | 21% | 24% | Pot is too big | g4 |
| A3 | tpmk | 17% | 13% | 10% | 14% | Pot is too big | g4 |
| A2 | tpmk | 17% | 12% | 10% | 14% | Pot is too big | g4 |
| A4 | tpmk | 16% | 11% | 9% | 13% | Pot is too big | g4 |
| A5 | tpmk | 15% | 10% | 9% | 12% | Pot is too big | g4 |
| JJ | pp1 | 7% | 2% | 0% | 5% | Pot is too big | g5 |
| KK | pp1 | 5% | 2% | 0% | 2% | Pot is too big | g5 |
| QQ | pp1 | 5% | 2% | 0% | 2% | Pot is too big | g5 |
| JT | mp | 7% | 2% | 0% | 6% | Pot is too big | g6 |
| QT | mp | 6% | 2% | 0% | 4% | Pot is too big | g6 |
| KT | mp | 6% | 2% | 0% | 4% | Pot is too big | g6 |
| J8 | bp | 7% | 2% | 0% | 5% | Pot is too big | g7 |
| J7 | bp | 7% | 2% | 0% | 5% | Pot is too big | g7 |
| Q7 | bp | 6% | 2% | 0% | 4% | Pot is too big | g7 |
| K8 | bp | 6% | 2% | 0% | 3% | Pot is too big | g7 |
| Q8 | bp | 6% | 2% | 0% | 4% | Pot is too big | g7 |
| K7 | bp | 6% | 2% | 0% | 4% | Pot is too big | g7 |
| 75 | bp | 5% | 1% | 0% | 6% | Pot is too big | g7 |
| Q6 | bp | 5% | 2% | 0% | 2% | Pot is too big | g7 |
| K6 | bp | 5% | 2% | 0% | 3% | Pot is too big | g7 |
| 64 | bp | 4% | 1% | 0% | 3% | Pot is too big | g7 |
| 65 | bp | 3% | 1% | 0% | 3% | Pot is too big | g7 |
| 33 | pp3 | 2% | 0% | 0% | 2% | Pot is too big | g7 |
| 44 | pp3 | 2% | 0% | 0% | 3% | Pot is too big | g7 |
| 55 | pp3 | 2% | 0% | 0% | 3% | Pot is too big | g7 |
| 22 | pp3 | 2% | 0% | 0% | 3% | Pot is too big | g7 |
