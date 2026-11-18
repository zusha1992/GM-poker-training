# A76-Ks-8h@xx river (A♥ 7♥ 6♣ K♠ 8♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: KQ–K9, K6–K2, QJ–Q9, Q6, Q5, JT, J9, T9, 96, 65, 64, 54, 43 | 98% | 99% | 98% | 92% |
| g2 | 25–50bb | Straights | T9, 54 | 89% | 96% | 95% | 71% |
| g3 | 15–25bb | Sets | AA, KK, 88–66 | 86% | 95% | 92% | 68% |
| g4 | 15–25bb | Two pair | AK, A8–A6, K8–K6, 87, 86, 76 | 80% | 89% | 84% | 68% |
| g5 | 0–5bb | Top pair | AQ–A9, A5–A2 | 70% | 60% | 39% | 68% |
| g6 | 0–5bb | Second pair | KQ–K9, K5–K2 | 56% | 20% | 0% | 61% |
| g7 | 0–5bb | Small pairs | QQ–99, 55–22, Q8–Q6, J8, J7, T8, T7, 98–96, 75, 65, 64 | 42% | 9% | 0% | 38% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| KQ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K6+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K5+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K4+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K3+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K2+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| Q5+fl | flush | 98% | 98% | 97% | 89% | 50–100bb | g1 |
| Q9+fl | flush | 98% | 97% | 97% | 89% | 50–100bb | g1 |
| Q6+fl | flush | 98% | 97% | 97% | 89% | 50–100bb | g1 |
| QT+fl | flush | 98% | 98% | 97% | 88% | 50–100bb | g1 |
| QJ+fl | flush | 98% | 97% | 96% | 88% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 98% | 97% | 84% | 50–100bb | g1 |
| J9+fl | flush | 96% | 98% | 97% | 83% | 50–100bb | g1 |
| JT+fl | flush | 96% | 97% | 97% | 83% | 50–100bb | g1 |
| 65+fl | flushlo | 95% | 98% | 97% | 82% | 50–100bb | g1 |
| 64+fl | flushlo | 95% | 98% | 97% | 82% | 50–100bb | g1 |
| 43+fl | flushlo | 95% | 98% | 98% | 82% | 50–100bb | g1 |
| 96+fl | flushlo | 95% | 98% | 97% | 81% | 50–100bb | g1 |
| T9+fl | flushlo | 95% | 98% | 97% | 81% | 50–100bb | g1 |
| T9 | straight | 90% | 96% | 95% | 72% | 50–100bb | g2 |
| 54 | straight | 87% | 96% | 94% | 65% | 50–100bb | g2 |
| 66 | twopair | 86% | 96% | 94% | 69% | 50–100bb | g3 |
| AA | twopair | 85% | 92% | 84% | 69% | 50–100bb | g3 |
| 88 | twopair | 86% | 96% | 94% | 68% | 50–100bb | g3 |
| 77 | twopair | 85% | 95% | 94% | 67% | 50–100bb | g3 |
| KK | twopair | 87% | 97% | 96% | 67% | 50–100bb | g3 |
| AK | twopair | 82% | 94% | 93% | 69% | 50–100bb | g4 |
| K7 | twopair | 78% | 84% | 81% | 68% | 50–100bb | g4 |
| A7 | twopair | 81% | 89% | 82% | 68% | 50–100bb | g4 |
| A6 | twopair | 80% | 86% | 79% | 68% | 50–100bb | g4 |
| K8 | twopair | 78% | 85% | 80% | 67% | 50–100bb | g4 |
| A8 | twopair | 83% | 93% | 89% | 67% | 50–100bb | g4 |
| 86 | twopair | 77% | 86% | 82% | 67% | 50–100bb | g4 |
| 87 | twopair | 78% | 87% | 83% | 67% | 50–100bb | g4 |
| K6 | twopair | 78% | 85% | 81% | 66% | 50–100bb | g4 |
| 76 | twopair | 77% | 86% | 81% | 66% | 50–100bb | g4 |
| A5 | tpmk | 67% | 46% | 16% | 69% | 50–100bb | g5 |
| A9 | tpmk | 70% | 62% | 42% | 68% | 50–100bb | g5 |
| A2 | tpmk | 67% | 45% | 16% | 68% | 50–100bb | g5 |
| AT | tpmk | 72% | 73% | 57% | 68% | 50–100bb | g5 |
| AJ | tpmk | 74% | 81% | 72% | 67% | 50–100bb | g5 |
| A4 | tpmk | 67% | 46% | 16% | 67% | 50–100bb | g5 |
| A3 | tpmk | 68% | 44% | 16% | 67% | 50–100bb | g5 |
| AQ | tpgk | 74% | 85% | 76% | 67% | 50–100bb | g5 |
| KQ | mp | 57% | 23% | 0% | 66% | 50–100bb | g6 |
| KJ | mp | 56% | 22% | 0% | 64% | 50–100bb | g6 |
| KT | mp | 57% | 20% | 0% | 63% | 50–100bb | g6 |
| K9 | mp | 54% | 19% | 0% | 61% | 50–100bb | g6 |
| K4 | mp | 53% | 14% | 0% | 49% | 0–5bb | g6 |
| K2 | mp | 53% | 15% | 0% | 50% | 0–5bb | g6 |
| K5 | mp | 52% | 16% | 0% | 49% | 0–5bb | g6 |
| K3 | mp | 52% | 15% | 0% | 49% | 0–5bb | g6 |
| 99 | pp2 | 51% | 15% | 0% | 43% | 0–5bb | g7 |
| TT | pp2 | 51% | 15% | 0% | 41% | 0–5bb | g7 |
| Q8 | bp | 48% | 14% | 0% | 37% | 0–5bb | g7 |
| JJ | pp2 | 48% | 15% | 0% | 39% | 0–5bb | g7 |
| 98 | bp | 48% | 12% | 0% | 43% | 0–5bb | g7 |
| T8 | bp | 47% | 14% | 0% | 40% | 0–5bb | g7 |
| QQ | pp2 | 47% | 14% | 0% | 36% | 0–5bb | g7 |
| J8 | bp | 47% | 13% | 0% | 40% | 0–5bb | g7 |
| T7 | bp | 43% | 10% | 0% | 40% | 0–5bb | g7 |
| Q7 | bp | 42% | 10% | 0% | 36% | 0–5bb | g7 |
| J7 | bp | 42% | 10% | 0% | 39% | 0–5bb | g7 |
| 97 | bp | 42% | 9% | 0% | 42% | 0–5bb | g7 |
| 75 | bp | 40% | 8% | 0% | 39% | 0–5bb | g7 |
| 96 | bp | 39% | 6% | 0% | 39% | 0–5bb | g7 |
| 65 | bp | 38% | 5% | 0% | 36% | 0–5bb | g7 |
| Q6 | bp | 37% | 6% | 0% | 35% | 0–5bb | g7 |
| 64 | bp | 36% | 5% | 0% | 37% | 0–5bb | g7 |
| 55 | pp3 | 36% | 5% | 0% | 36% | 0–5bb | g7 |
| 44 | pp3 | 32% | 3% | 0% | 35% | 0–5bb | g7 |
| 33 | pp3 | 30% | 2% | 0% | 36% | 0–5bb | g7 |
| 22 | pp3 | 28% | 0% | 0% | 36% | 0–5bb | g7 |
