# T87-As-6s river (T♥ 8♥ 7♠ A♠ 6♠): equity groups

Generated 2026-11-16 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♠ flushes: KQ–K8, K5–K2, QJ–Q8, Q5, JT–J8, T9, T8, 98, 54, 43 | 99% | 100% | 100% | 99% |
| g2 | 25–50bb | Straights | 99, A9, K9, Q9, J9, T9, 98–96, 54 | 86% | 90% | 89% | 73% |
| g3 | 15–25bb | Sets | AA, TT, 88–66 | 70% | 69% | 67% | 44% |
| g4 | 15–25bb | Two pair | AT, A8, A7 | 65% | 65% | 62% | 47% |
| g5 | 0–5bb | Two pair | A6, T8, T7, 87, 86, 76 | 52% | 36% | 31% | 39% |
| g6 | 0–5bb | Top pair | AK–AJ, A5–A2 | 41% | 13% | 7% | 36% |
| g7 | 0–5bb | Big pocket pairs | KK–JJ | 29% | 4% | 0% | 28% |
| g8 | 0–5bb | Second pair | KT, QT, JT | 27% | 3% | 0% | 20% |
| g9 | 0–5bb | Small pairs | 55–22, K8–K6, Q8–Q6, J8, J7, 75, 65, 64 | 11% | 0% | 0% | 1% |

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
| Q5+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| JT+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| J8+fl | flush | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| QJ+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| Q9+fl | flush | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| T9+fl | flushlo | 97% | 100% | 100% | 97% | 50–100bb | g1 |
| J9+fl | flush | 98% | 100% | 100% | 96% | 50–100bb | g1 |
| 98+fl | flushlo | 97% | 100% | 100% | 96% | 50–100bb | g1 |
| 54+fl | flushlo | 96% | 100% | 100% | 93% | 50–100bb | g1 |
| 43+fl | flushlo | 95% | 100% | 100% | 92% | 50–100bb | g1 |
| J9 | straight | 95% | 99% | 99% | 90% | 50–100bb | g2 |
| 99 | straight | 88% | 91% | 90% | 74% | 50–100bb | g2 |
| A9 | straight | 84% | 89% | 88% | 73% | 50–100bb | g2 |
| K9 | straight | 86% | 88% | 88% | 71% | 50–100bb | g2 |
| Q9 | straight | 86% | 88% | 87% | 71% | 50–100bb | g2 |
| 97 | straight | 85% | 87% | 86% | 71% | 50–100bb | g2 |
| 96 | straight | 85% | 87% | 87% | 70% | 50–100bb | g2 |
| 54 | straight | 71% | 71% | 70% | 44% | 25–50bb | g2 |
| T9 | straight | 86% | 88% | 87% | 68% | 50–100bb | g2 |
| 98 | straight | 84% | 86% | 86% | 68% | 50–100bb | g2 |
| TT | twopair | 72% | 67% | 68% | 35% | 25–50bb | g3 |
| 66 | twopair | 70% | 69% | 67% | 45% | 25–50bb | g3 |
| 88 | twopair | 69% | 65% | 64% | 39% | 25–50bb | g3 |
| 77 | twopair | 67% | 66% | 62% | 43% | 25–50bb | g3 |
| AA | twopair | 70% | 77% | 75% | 60% | 50–100bb | g3 |
| AT | twopair | 71% | 71% | 69% | 47% | 25–50bb | g4 |
| A8 | twopair | 65% | 68% | 64% | 46% | 25–50bb | g4 |
| A7 | twopair | 59% | 55% | 51% | 47% | 25–50bb | g4 |
| A6 | twopair | 57% | 45% | 40% | 48% | 0–5bb | g5 |
| T8 | twopair | 50% | 30% | 28% | 27% | 0–5bb | g5 |
| T7 | twopair | 49% | 29% | 26% | 29% | 0–5bb | g5 |
| 87 | twopair | 48% | 28% | 22% | 32% | 0–5bb | g5 |
| 86 | twopair | 47% | 23% | 19% | 31% | 0–5bb | g5 |
| 76 | twopair | 45% | 25% | 20% | 33% | 0–5bb | g5 |
| AQ | tpgk | 46% | 22% | 15% | 37% | 0–5bb | g6 |
| AK | tpgk | 45% | 22% | 16% | 37% | 0–5bb | g6 |
| AJ | tpmk | 40% | 14% | 8% | 34% | 0–5bb | g6 |
| A3 | tpmk | 39% | 8% | 2% | 36% | 0–5bb | g6 |
| A5 | tpmk | 39% | 9% | 2% | 35% | 0–5bb | g6 |
| A2 | tpmk | 38% | 8% | 2% | 35% | 0–5bb | g6 |
| A4 | tpmk | 38% | 8% | 1% | 36% | 0–5bb | g6 |
| QQ | pp1 | 31% | 4% | 0% | 29% | 0–5bb | g7 |
| KK | pp1 | 29% | 5% | 0% | 29% | 0–5bb | g7 |
| JJ | pp1 | 28% | 3% | 0% | 26% | 0–5bb | g7 |
| KT | mp | 28% | 4% | 0% | 24% | 0–5bb | g8 |
| QT | mp | 27% | 4% | 0% | 21% | 0–5bb | g8 |
| JT | mp | 25% | 2% | 0% | 14% | 0–5bb | g8 |
| K8 | bp | 17% | 0% | 0% | 4% | 0–5bb | g9 |
| Q8 | bp | 17% | 0% | 0% | 3% | 0–5bb | g9 |
| J8 | bp | 16% | 0% | 0% | 2% | 0–5bb | g9 |
| K7 | bp | 13% | 0% | 0% | 0% | 0–5bb | g9 |
| Q7 | bp | 12% | 0% | 0% | 0% | 0–5bb | g9 |
| 75 | bp | 12% | 0% | 0% | 0% | 0–5bb | g9 |
| J7 | bp | 10% | 0% | 0% | 0% | 0–5bb | g9 |
| 64 | bp | 9% | 0% | 0% | 0% | 0–5bb | g9 |
| 65 | bp | 9% | 0% | 0% | 0% | 0–5bb | g9 |
| K6 | bp | 9% | 0% | 0% | 0% | 0–5bb | g9 |
| 22 | pp3 | 9% | 0% | 0% | 0% | 0–5bb | g9 |
| 33 | pp3 | 9% | 0% | 0% | 0% | 0–5bb | g9 |
| 44 | pp3 | 9% | 0% | 0% | 0% | 0–5bb | g9 |
| Q6 | bp | 8% | 0% | 0% | 0% | 0–5bb | g9 |
| 55 | pp3 | 8% | 0% | 0% | 0% | 0–5bb | g9 |
