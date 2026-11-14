# T87-As-6s river (T♥ 8♥ 7♠ A♠ 6♠): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes, straights & sets | AA, 99, A9, K9, Q9, J9, T9, 98–96 · ♠ flushes: KQ–K8, K5–K2, QJ–Q8, Q5, JT–J8, T9, T8, 98, 54, 43 | 89% | 92% | 92% | 80% |
| g2 | 25–50bb | Straights & sets | TT, 88–66, 54 | 70% | 67% | 66% | 41% |
| g3 | 15–25bb | Two pair | AT, A8, A7 | 65% | 65% | 62% | 47% |
| g4 | 0–5bb | Two pair | A6, T8, T7, 87, 86, 76 | 52% | 36% | 32% | 40% |
| g5 | 0–5bb | Top pair | AK–AJ, A5–A2 | 41% | 13% | 7% | 36% |
| g6 | 0–5bb | Big pocket pairs | KK–JJ | 29% | 4% | 0% | 28% |
| g7 | 0–5bb | Second pair | KT, QT, JT | 27% | 3% | 0% | 20% |
| g8 | 0–5bb | Small pairs | 55–22, K8–K6, Q8–Q6, J8, J7, 75, 65, 64 | 11% | 0% | 0% | 1% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| KQ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K5+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K4+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K3+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K2+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| T8+fl | flushlo | 99% | 100% | 100% | 100% | 50–100bb | g1 |
| QT+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| Q8+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| JT+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| Q5+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| QJ+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| Q9+fl | flush | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| J8+fl | flush | 99% | 100% | 100% | 97% | 50–100bb | g1 |
| T9+fl | flushlo | 97% | 100% | 100% | 96% | 50–100bb | g1 |
| J9+fl | flush | 98% | 100% | 100% | 96% | 50–100bb | g1 |
| 98+fl | flushlo | 97% | 100% | 100% | 95% | 50–100bb | g1 |
| 54+fl | flushlo | 96% | 100% | 100% | 93% | 50–100bb | g1 |
| 43+fl | flushlo | 96% | 100% | 100% | 92% | 50–100bb | g1 |
| J9 | straight | 95% | 99% | 99% | 91% | 50–100bb | g1 |
| 99 | straight | 87% | 91% | 90% | 74% | 50–100bb | g1 |
| A9 | straight | 86% | 89% | 88% | 72% | 50–100bb | g1 |
| 96 | straight | 85% | 87% | 87% | 70% | 50–100bb | g1 |
| Q9 | straight | 85% | 87% | 87% | 70% | 50–100bb | g1 |
| K9 | straight | 85% | 88% | 88% | 70% | 50–100bb | g1 |
| 97 | straight | 84% | 87% | 86% | 70% | 50–100bb | g1 |
| T9 | straight | 85% | 87% | 87% | 69% | 50–100bb | g1 |
| 98 | straight | 84% | 87% | 86% | 68% | 50–100bb | g1 |
| AA | twopair | 70% | 78% | 76% | 60% | 50–100bb | g1 |
| 54 | straight | 70% | 71% | 68% | 44% | 25–50bb | g2 |
| 66 | twopair | 70% | 69% | 68% | 45% | 25–50bb | g2 |
| TT | twopair | 73% | 67% | 67% | 35% | 25–50bb | g2 |
| 88 | twopair | 70% | 65% | 64% | 38% | 25–50bb | g2 |
| 77 | twopair | 68% | 63% | 62% | 43% | 25–50bb | g2 |
| AT | twopair | 70% | 72% | 71% | 46% | 25–50bb | g3 |
| A8 | twopair | 66% | 68% | 65% | 47% | 25–50bb | g3 |
| A7 | twopair | 59% | 56% | 51% | 47% | 25–50bb | g3 |
| A6 | twopair | 57% | 45% | 41% | 48% | 0–5bb | g4 |
| T8 | twopair | 49% | 31% | 27% | 30% | 0–5bb | g4 |
| T7 | twopair | 48% | 29% | 27% | 30% | 0–5bb | g4 |
| 87 | twopair | 47% | 27% | 24% | 33% | 0–5bb | g4 |
| 76 | twopair | 46% | 24% | 20% | 33% | 0–5bb | g4 |
| 86 | twopair | 45% | 25% | 20% | 32% | 0–5bb | g4 |
| AQ | tpgk | 45% | 21% | 16% | 36% | 0–5bb | g5 |
| AK | tpgk | 45% | 21% | 16% | 37% | 0–5bb | g5 |
| A5 | tpmk | 40% | 9% | 2% | 35% | 0–5bb | g5 |
| A2 | tpmk | 40% | 8% | 2% | 36% | 0–5bb | g5 |
| AJ | tpmk | 39% | 14% | 9% | 34% | 0–5bb | g5 |
| A4 | tpmk | 39% | 8% | 2% | 36% | 0–5bb | g5 |
| A3 | tpmk | 39% | 8% | 1% | 35% | 0–5bb | g5 |
| QQ | pp1 | 30% | 5% | 0% | 30% | 0–5bb | g6 |
| KK | pp1 | 28% | 5% | 0% | 28% | 0–5bb | g6 |
| JJ | pp1 | 28% | 3% | 0% | 25% | 0–5bb | g6 |
| KT | mp | 29% | 4% | 0% | 24% | 0–5bb | g7 |
| QT | mp | 27% | 3% | 0% | 22% | 0–5bb | g7 |
| JT | mp | 24% | 1% | 0% | 14% | 0–5bb | g7 |
| K8 | bp | 18% | 0% | 0% | 4% | 0–5bb | g8 |
| Q8 | bp | 17% | 0% | 0% | 3% | 0–5bb | g8 |
| J8 | bp | 16% | 0% | 0% | 2% | 0–5bb | g8 |
| K7 | bp | 13% | 0% | 0% | 0% | 0–5bb | g8 |
| Q7 | bp | 12% | 0% | 0% | 0% | 0–5bb | g8 |
| 75 | bp | 11% | 0% | 0% | 0% | 0–5bb | g8 |
| J7 | bp | 11% | 0% | 0% | 0% | 0–5bb | g8 |
| 64 | bp | 10% | 0% | 0% | 0% | 0–5bb | g8 |
| 65 | bp | 9% | 0% | 0% | 0% | 0–5bb | g8 |
| 44 | pp3 | 9% | 0% | 0% | 0% | 0–5bb | g8 |
| 55 | pp3 | 9% | 0% | 0% | 0% | 0–5bb | g8 |
| 33 | pp3 | 9% | 0% | 0% | 0% | 0–5bb | g8 |
| 22 | pp3 | 9% | 0% | 0% | 0% | 0–5bb | g8 |
| Q6 | bp | 9% | 0% | 0% | 0% | 0–5bb | g8 |
| K6 | bp | 8% | 0% | 0% | 0% | 0–5bb | g8 |
