# T87-As-6s river (T♥ 8♥ 7♠ A♠ 6♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♠ flushes: KQ–K8, K5–K2, QJ–Q8, Q5, JT–J8, T9, T8, 98, 54, 43 | 99% | 100% | 100% | 99% |
| g2 | 25–50bb | J-high straights | J9 | 95% | 99% | 99% | 90% |
| g3 | 25–50bb | T-high straights | 99, A9, K9, Q9, T9, 98–96 | 85% | 88% | 88% | 71% |
| g4 | 25–50bb | 8-high straights | 54 | 70% | 71% | 70% | 44% |
| g5 | 15–25bb | Sets | AA, TT, 88–66 | 70% | 70% | 67% | 45% |
| g6 | 15–25bb | Two pair | AT, A8, A7 | 65% | 65% | 62% | 46% |
| g7 | 0–5bb | Two pair | A6, T8, T7, 87, 86, 76 | 52% | 36% | 31% | 40% |
| g8 | 0–5bb | Top pair | AK–AJ, A5–A2 | 41% | 13% | 6% | 36% |
| g9 | 0–5bb | Big pocket pairs | KK–JJ | 29% | 4% | 0% | 28% |
| g10 | 0–5bb | Second pair | KT, QT, JT | 26% | 3% | 0% | 20% |
| g11 | 0–5bb | Small pairs | 55–22, K8–K6, Q8–Q6, J8, J7, 75, 65, 64 | 11% | 0% | 0% | 1% |

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
| JT+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| Q5+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| QJ+fl | flush | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| Q9+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| J8+fl | flush | 99% | 100% | 100% | 97% | 50–100bb | g1 |
| T9+fl | flushlo | 97% | 100% | 100% | 97% | 50–100bb | g1 |
| J9+fl | flush | 98% | 100% | 100% | 96% | 50–100bb | g1 |
| 98+fl | flushlo | 97% | 100% | 100% | 95% | 50–100bb | g1 |
| 54+fl | flushlo | 96% | 100% | 100% | 93% | 50–100bb | g1 |
| 43+fl | flushlo | 96% | 100% | 99% | 92% | 50–100bb | g1 |
| J9 | straight | 95% | 99% | 99% | 90% | 50–100bb | g2 |
| 99 | straight | 88% | 91% | 90% | 74% | 50–100bb | g3 |
| A9 | straight | 85% | 88% | 88% | 73% | 50–100bb | g3 |
| K9 | straight | 85% | 88% | 87% | 71% | 50–100bb | g3 |
| 96 | straight | 84% | 88% | 87% | 71% | 50–100bb | g3 |
| Q9 | straight | 85% | 88% | 87% | 71% | 50–100bb | g3 |
| 97 | straight | 84% | 87% | 86% | 70% | 50–100bb | g3 |
| T9 | straight | 84% | 88% | 87% | 69% | 50–100bb | g3 |
| 98 | straight | 84% | 87% | 86% | 68% | 50–100bb | g3 |
| 54 | straight | 70% | 71% | 70% | 44% | 25–50bb | g4 |
| TT | twopair | 71% | 69% | 68% | 35% | 25–50bb | g5 |
| 66 | twopair | 70% | 69% | 67% | 45% | 25–50bb | g5 |
| 88 | twopair | 69% | 67% | 64% | 39% | 25–50bb | g5 |
| 77 | twopair | 67% | 65% | 63% | 44% | 25–50bb | g5 |
| AA | twopair | 71% | 78% | 75% | 59% | 50–100bb | g5 |
| AT | twopair | 70% | 72% | 71% | 46% | 25–50bb | g6 |
| A8 | twopair | 66% | 68% | 64% | 46% | 25–50bb | g6 |
| A7 | twopair | 59% | 54% | 51% | 47% | 25–50bb | g6 |
| A6 | twopair | 56% | 46% | 40% | 48% | 0–5bb | g7 |
| T8 | twopair | 50% | 30% | 27% | 29% | 0–5bb | g7 |
| T7 | twopair | 48% | 30% | 26% | 30% | 0–5bb | g7 |
| 87 | twopair | 48% | 27% | 23% | 34% | 0–5bb | g7 |
| 86 | twopair | 46% | 25% | 20% | 32% | 0–5bb | g7 |
| 76 | twopair | 45% | 24% | 20% | 34% | 0–5bb | g7 |
| AQ | tpgk | 46% | 21% | 16% | 37% | 0–5bb | g8 |
| AK | tpgk | 45% | 21% | 15% | 36% | 0–5bb | g8 |
| AJ | tpmk | 39% | 14% | 8% | 33% | 0–5bb | g8 |
| A2 | tpmk | 39% | 9% | 1% | 35% | 0–5bb | g8 |
| A3 | tpmk | 39% | 8% | 2% | 36% | 0–5bb | g8 |
| A5 | tpmk | 39% | 9% | 2% | 36% | 0–5bb | g8 |
| A4 | tpmk | 38% | 8% | 2% | 36% | 0–5bb | g8 |
| QQ | pp1 | 30% | 5% | 0% | 30% | 0–5bb | g9 |
| JJ | pp1 | 29% | 3% | 0% | 24% | 0–5bb | g9 |
| KK | pp1 | 29% | 5% | 0% | 28% | 0–5bb | g9 |
| KT | mp | 29% | 3% | 0% | 24% | 0–5bb | g10 |
| QT | mp | 28% | 4% | 0% | 21% | 0–5bb | g10 |
| JT | mp | 23% | 2% | 0% | 14% | 0–5bb | g10 |
| K8 | bp | 18% | 0% | 0% | 4% | 0–5bb | g11 |
| Q8 | bp | 17% | 0% | 0% | 3% | 0–5bb | g11 |
| J8 | bp | 16% | 0% | 0% | 2% | 0–5bb | g11 |
| K7 | bp | 14% | 0% | 0% | 0% | 0–5bb | g11 |
| Q7 | bp | 12% | 0% | 0% | 0% | 0–5bb | g11 |
| 75 | bp | 11% | 0% | 0% | 0% | 0–5bb | g11 |
| J7 | bp | 10% | 0% | 0% | 0% | 0–5bb | g11 |
| 22 | pp3 | 10% | 0% | 0% | 0% | 0–5bb | g11 |
| 64 | bp | 9% | 0% | 0% | 0% | 0–5bb | g11 |
| 65 | bp | 9% | 0% | 0% | 0% | 0–5bb | g11 |
| Q6 | bp | 9% | 0% | 0% | 0% | 0–5bb | g11 |
| 33 | pp3 | 9% | 0% | 0% | 0% | 0–5bb | g11 |
| 44 | pp3 | 9% | 0% | 0% | 0% | 0–5bb | g11 |
| 55 | pp3 | 8% | 0% | 0% | 0% | 0–5bb | g11 |
| K6 | bp | 8% | 0% | 0% | 0% | 0–5bb | g11 |
