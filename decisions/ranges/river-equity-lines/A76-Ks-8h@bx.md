# A76-Ks-8h@bx river (A♥ 7♥ 6♣ K♠ 8♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: KQ–K9, K6–K2, QJ–Q9, Q6, Q5, JT, J9, T9, 96, 65, 64, 54, 43 | 99% | 100% | 100% | 96% |
| g2 | 25–50bb | Straights | T9, 54 | 91% | 98% | 98% | 73% |
| g3 | 15–25bb | Sets | AA, KK, 88–66 | 86% | 96% | 96% | 59% |
| g4 | 15–25bb | Two pair | AK, A8–A6, K8–K6, 87, 86, 76 | 80% | 83% | 82% | 55% |
| g5 | 0–5bb | Top pair | AQ–A9, A5–A2 | 60% | 44% | 40% | 51% |
| g6 | 0–5bb | Second pair | KQ–K9, K5–K2 | 39% | 5% | 0% | 36% |
| g7 | 0–5bb | Small pairs | QQ–99, 55–22, Q8–Q6, J8, J7, T8, T7, 98–96, 75, 65, 64 | 24% | 3% | 0% | 20% |

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
| Q6+fl | flush | 99% | 100% | 100% | 95% | 50–100bb | g1 |
| QJ+fl | flush | 99% | 100% | 100% | 95% | 50–100bb | g1 |
| Q5+fl | flush | 99% | 100% | 100% | 95% | 50–100bb | g1 |
| QT+fl | flush | 98% | 100% | 100% | 95% | 50–100bb | g1 |
| Q9+fl | flush | 99% | 100% | 100% | 94% | 50–100bb | g1 |
| 64+fl | flushlo | 98% | 100% | 100% | 93% | 50–100bb | g1 |
| 65+fl | flushlo | 98% | 100% | 100% | 93% | 50–100bb | g1 |
| 96+fl | flushlo | 98% | 100% | 100% | 93% | 50–100bb | g1 |
| JT+fl | flush | 98% | 100% | 100% | 92% | 50–100bb | g1 |
| J9+fl | flush | 98% | 100% | 100% | 92% | 50–100bb | g1 |
| T9+fl | flushlo | 97% | 100% | 100% | 90% | 50–100bb | g1 |
| 43+fl | flushlo | 95% | 100% | 100% | 89% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 100% | 100% | 88% | 50–100bb | g1 |
| T9 | straight | 91% | 98% | 98% | 75% | 50–100bb | g2 |
| 54 | straight | 88% | 97% | 97% | 61% | 50–100bb | g2 |
| 77 | twopair | 85% | 95% | 95% | 60% | 50–100bb | g3 |
| 88 | twopair | 87% | 97% | 98% | 60% | 50–100bb | g3 |
| KK | twopair | 88% | 98% | 98% | 58% | 50–100bb | g3 |
| AA | twopair | 85% | 95% | 93% | 58% | 50–100bb | g3 |
| 66 | twopair | 88% | 96% | 96% | 57% | 50–100bb | g3 |
| A8 | twopair | 84% | 91% | 90% | 58% | 50–100bb | g4 |
| 87 | twopair | 78% | 81% | 81% | 57% | 50–100bb | g4 |
| A7 | twopair | 79% | 80% | 80% | 57% | 50–100bb | g4 |
| AK | twopair | 85% | 94% | 94% | 55% | 50–100bb | g4 |
| K8 | twopair | 79% | 81% | 80% | 55% | 50–100bb | g4 |
| A6 | twopair | 80% | 78% | 76% | 55% | 50–100bb | g4 |
| 86 | twopair | 77% | 82% | 81% | 54% | 50–100bb | g4 |
| K7 | twopair | 77% | 78% | 76% | 53% | 50–100bb | g4 |
| 76 | twopair | 74% | 78% | 77% | 52% | 50–100bb | g4 |
| K6 | twopair | 78% | 77% | 77% | 51% | 50–100bb | g4 |
| A9 | tpmk | 61% | 49% | 45% | 55% | 50–100bb | g5 |
| AT | tpmk | 67% | 63% | 59% | 54% | 50–100bb | g5 |
| AJ | tpmk | 70% | 71% | 69% | 54% | 50–100bb | g5 |
| A2 | tpmk | 54% | 24% | 18% | 49% | 0–5bb | g5 |
| A3 | tpmk | 53% | 24% | 18% | 48% | 0–5bb | g5 |
| A5 | tpmk | 53% | 23% | 17% | 49% | 0–5bb | g5 |
| AQ | tpgk | 70% | 75% | 73% | 52% | 50–100bb | g5 |
| A4 | tpmk | 51% | 23% | 18% | 48% | 0–5bb | g5 |
| K9 | mp | 40% | 5% | 0% | 34% | 0–5bb | g6 |
| KT | mp | 39% | 5% | 0% | 37% | 0–5bb | g6 |
| KQ | mp | 39% | 5% | 0% | 39% | 0–5bb | g6 |
| KJ | mp | 39% | 4% | 0% | 38% | 0–5bb | g6 |
| K4 | mp | 37% | 4% | 0% | 28% | 0–5bb | g6 |
| K5 | mp | 37% | 4% | 0% | 28% | 0–5bb | g6 |
| K3 | mp | 36% | 4% | 0% | 27% | 0–5bb | g6 |
| K2 | mp | 35% | 4% | 0% | 28% | 0–5bb | g6 |
| 99 | pp2 | 36% | 4% | 0% | 28% | 0–5bb | g7 |
| TT | pp2 | 36% | 5% | 0% | 28% | 0–5bb | g7 |
| J8 | bp | 36% | 5% | 0% | 23% | 0–5bb | g7 |
| JJ | pp2 | 35% | 4% | 0% | 24% | 0–5bb | g7 |
| T8 | bp | 35% | 5% | 0% | 27% | 0–5bb | g7 |
| Q8 | bp | 35% | 4% | 0% | 23% | 0–5bb | g7 |
| QQ | pp2 | 35% | 4% | 0% | 23% | 0–5bb | g7 |
| 98 | bp | 34% | 5% | 0% | 26% | 0–5bb | g7 |
| Q7 | bp | 28% | 3% | 0% | 22% | 0–5bb | g7 |
| T7 | bp | 27% | 3% | 0% | 26% | 0–5bb | g7 |
| J7 | bp | 27% | 3% | 0% | 24% | 0–5bb | g7 |
| 97 | bp | 26% | 4% | 0% | 25% | 0–5bb | g7 |
| 75 | bp | 22% | 2% | 0% | 23% | 0–5bb | g7 |
| Q6 | bp | 18% | 1% | 0% | 18% | 0–5bb | g7 |
| 96 | bp | 17% | 1% | 0% | 18% | 0–5bb | g7 |
| 64 | bp | 15% | 0% | 0% | 14% | 0–5bb | g7 |
| 65 | bp | 14% | 0% | 0% | 14% | 0–5bb | g7 |
| 55 | pp3 | 12% | 0% | 0% | 12% | 0–5bb | g7 |
| 44 | pp3 | 10% | 0% | 0% | 11% | 0–5bb | g7 |
| 33 | pp3 | 7% | 0% | 0% | 10% | 0–5bb | g7 |
| 22 | pp3 | 6% | 0% | 0% | 11% | 0–5bb | g7 |
