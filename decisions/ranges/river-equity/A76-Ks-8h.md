# A76-Ks-8h river (A♥ 7♥ 6♣ K♠ 8♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: KQ–K9, K6–K2, QJ–Q9, Q6, Q5, JT, J9, T9, 96, 65, 64, 54, 43 | 99% | 100% | 100% | 99% |
| g2 | 25–50bb | Straights | T9, 54 | 94% | 99% | 99% | 96% |
| g3 | 15–25bb | Sets | AA, KK, 88–66 | 94% | 99% | 99% | 95% |
| g4 | 15–25bb | Two pair | AK, A8–A6, K8–K6, 87, 86, 76 | 81% | 87% | 87% | 61% |
| g5 | 0–5bb | Top pair | AQ–A9, A5–A2 | 36% | 30% | 30% | 19% |
| g6 | 0–5bb | Second pair | KQ–K9, K5–K2 | 9% | 0% | 0% | 4% |
| g7 | 0–5bb | Small pairs | QQ–99, 55–22, Q8–Q6, J8, J7, T8, T7, 98–96, 75, 65, 64 | 6% | 0% | 0% | 3% |

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
| 64+fl | flushlo | 99% | 100% | 100% | 100% | 50–100bb | g1 |
| Q6+fl | flush | 99% | 100% | 100% | 100% | 50–100bb | g1 |
| 96+fl | flushlo | 99% | 100% | 100% | 100% | 50–100bb | g1 |
| 65+fl | flushlo | 99% | 100% | 100% | 100% | 50–100bb | g1 |
| Q9+fl | flush | 98% | 99% | 99% | 98% | 50–100bb | g1 |
| QT+fl | flush | 98% | 99% | 99% | 98% | 50–100bb | g1 |
| Q5+fl | flush | 98% | 99% | 99% | 98% | 50–100bb | g1 |
| J9+fl | flush | 97% | 99% | 99% | 97% | 50–100bb | g1 |
| QJ+fl | flush | 98% | 99% | 99% | 97% | 50–100bb | g1 |
| JT+fl | flush | 97% | 99% | 99% | 97% | 50–100bb | g1 |
| T9+fl | flushlo | 98% | 99% | 99% | 97% | 50–100bb | g1 |
| 43+fl | flushlo | 96% | 99% | 99% | 97% | 50–100bb | g1 |
| 54+fl | flushlo | 96% | 99% | 99% | 96% | 50–100bb | g1 |
| T9 | straight | 94% | 99% | 99% | 96% | 50–100bb | g2 |
| 54 | straight | 94% | 99% | 99% | 95% | 50–100bb | g2 |
| 66 | twopair | 97% | 100% | 100% | 98% | 50–100bb | g3 |
| KK | twopair | 96% | 100% | 100% | 97% | 50–100bb | g3 |
| 77 | twopair | 94% | 99% | 99% | 95% | 50–100bb | g3 |
| 88 | twopair | 94% | 99% | 99% | 94% | 50–100bb | g3 |
| AA | twopair | 89% | 98% | 98% | 90% | 50–100bb | g3 |
| AK | twopair | 93% | 99% | 99% | 94% | 50–100bb | g4 |
| A6 | twopair | 79% | 85% | 84% | 49% | 25–50bb | g4 |
| A8 | twopair | 89% | 96% | 96% | 81% | 50–100bb | g4 |
| K8 | twopair | 77% | 79% | 79% | 48% | 25–50bb | g4 |
| 86 | twopair | 74% | 78% | 77% | 47% | 25–50bb | g4 |
| K6 | twopair | 74% | 77% | 77% | 41% | 25–50bb | g4 |
| 76 | twopair | 71% | 77% | 77% | 41% | 25–50bb | g4 |
| K7 | twopair | 74% | 77% | 77% | 42% | 25–50bb | g4 |
| 87 | twopair | 75% | 76% | 77% | 45% | 25–50bb | g4 |
| A7 | twopair | 81% | 89% | 90% | 59% | 50–100bb | g4 |
| AQ | tpgk | 63% | 67% | 65% | 40% | 25–50bb | g5 |
| AJ | tpmk | 59% | 61% | 61% | 36% | 25–50bb | g5 |
| AT | tpmk | 47% | 46% | 46% | 28% | 0–5bb | g5 |
| A9 | tpmk | 34% | 28% | 28% | 14% | 0–5bb | g5 |
| A4 | tpmk | 21% | 9% | 10% | 8% | 0–5bb | g5 |
| A2 | tpmk | 21% | 9% | 9% | 8% | 0–5bb | g5 |
| A3 | tpmk | 20% | 9% | 9% | 7% | 0–5bb | g5 |
| A5 | tpmk | 20% | 9% | 9% | 7% | 0–5bb | g5 |
| KJ | mp | 10% | 0% | 0% | 4% | 0–5bb | g6 |
| KT | mp | 9% | 0% | 0% | 5% | 0–5bb | g6 |
| K9 | mp | 9% | 0% | 0% | 5% | 0–5bb | g6 |
| KQ | mp | 9% | 0% | 0% | 4% | 0–5bb | g6 |
| K2 | mp | 9% | 0% | 0% | 4% | 0–5bb | g6 |
| K3 | mp | 8% | 0% | 0% | 4% | 0–5bb | g6 |
| K4 | mp | 8% | 0% | 0% | 4% | 0–5bb | g6 |
| K5 | mp | 8% | 0% | 0% | 5% | 0–5bb | g6 |
| 98 | bp | 9% | 0% | 0% | 5% | 0–5bb | g7 |
| JJ | pp2 | 9% | 0% | 0% | 4% | 0–5bb | g7 |
| 99 | pp2 | 9% | 0% | 0% | 4% | 0–5bb | g7 |
| J8 | bp | 8% | 0% | 0% | 4% | 0–5bb | g7 |
| TT | pp2 | 8% | 0% | 0% | 5% | 0–5bb | g7 |
| T8 | bp | 8% | 0% | 0% | 5% | 0–5bb | g7 |
| Q8 | bp | 8% | 0% | 0% | 5% | 0–5bb | g7 |
| 97 | bp | 8% | 0% | 0% | 4% | 0–5bb | g7 |
| T7 | bp | 8% | 0% | 0% | 4% | 0–5bb | g7 |
| QQ | pp2 | 8% | 0% | 0% | 4% | 0–5bb | g7 |
| Q7 | bp | 8% | 0% | 0% | 4% | 0–5bb | g7 |
| 75 | bp | 7% | 0% | 0% | 4% | 0–5bb | g7 |
| J7 | bp | 7% | 0% | 0% | 4% | 0–5bb | g7 |
| Q6 | bp | 5% | 0% | 0% | 2% | 0–5bb | g7 |
| 96 | bp | 3% | 0% | 0% | 1% | 0–5bb | g7 |
| 64 | bp | 2% | 0% | 0% | 1% | 0–5bb | g7 |
| 65 | bp | 2% | 0% | 0% | 1% | 0–5bb | g7 |
| 22 | pp3 | 2% | 0% | 0% | 0% | 0–5bb | g7 |
| 44 | pp3 | 2% | 0% | 0% | 0% | 0–5bb | g7 |
| 55 | pp3 | 1% | 0% | 0% | 0% | 0–5bb | g7 |
| 33 | pp3 | 1% | 0% | 0% | 0% | 0–5bb | g7 |
