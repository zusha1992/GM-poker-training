# T87-As-6s@xx river (T♥ 8♥ 7♠ A♠ 6♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♠ flushes: KQ–K8, K5–K2, QJ–Q8, Q5, JT–J8, T9, T8, 98, 54, 43 | 98% | 100% | 100% | 93% |
| g2 | 25–50bb | J-high straights | J9 | 90% | 99% | 99% | 73% |
| g3 | 25–50bb | T-high straights | 99, A9, K9, Q9, T9, 98–96 | 83% | 96% | 95% | 72% |
| g4 | 25–50bb | 8-high straights | 54 | 71% | 91% | 89% | 67% |
| g5 | 15–25bb | Sets | AA, TT, 88–66 | 71% | 91% | 89% | 70% |
| g6 | 15–25bb | Two pair | AT, A8–A6, T8, T7, 87, 86, 76 | 66% | 77% | 72% | 69% |
| g7 | 0–5bb | Top pair | AK–AJ, A5–A2 | 58% | 38% | 23% | 70% |
| g8 | 0–5bb | Big pocket pairs | KK–JJ | 49% | 14% | 0% | 68% |
| g9 | 0–5bb | Second pair | KT, QT, JT | 47% | 12% | 0% | 65% |
| g10 | 0–5bb | Small pairs | 55–22, K8–K6, Q8–Q6, J8, J7, 75, 65, 64 | 33% | 5% | 0% | 50% |

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
| Q5+fl | flush | 98% | 100% | 100% | 92% | 50–100bb | g1 |
| Q8+fl | flush | 98% | 100% | 100% | 91% | 50–100bb | g1 |
| QT+fl | flush | 98% | 100% | 100% | 91% | 50–100bb | g1 |
| QJ+fl | flush | 98% | 100% | 100% | 90% | 50–100bb | g1 |
| Q9+fl | flush | 98% | 100% | 100% | 90% | 50–100bb | g1 |
| J8+fl | flush | 97% | 100% | 100% | 88% | 50–100bb | g1 |
| JT+fl | flush | 97% | 100% | 100% | 86% | 50–100bb | g1 |
| J9+fl | flush | 96% | 100% | 100% | 85% | 50–100bb | g1 |
| T8+fl | flushlo | 96% | 100% | 100% | 85% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 99% | 99% | 84% | 50–100bb | g1 |
| 43+fl | flushlo | 95% | 98% | 99% | 81% | 50–100bb | g1 |
| 98+fl | flushlo | 95% | 99% | 99% | 81% | 50–100bb | g1 |
| T9+fl | flushlo | 95% | 100% | 100% | 81% | 50–100bb | g1 |
| J9 | straight | 90% | 99% | 99% | 73% | 50–100bb | g2 |
| 96 | straight | 83% | 96% | 95% | 73% | 50–100bb | g3 |
| 99 | straight | 86% | 97% | 96% | 73% | 50–100bb | g3 |
| 97 | straight | 83% | 95% | 95% | 73% | 50–100bb | g3 |
| A9 | straight | 82% | 95% | 94% | 72% | 50–100bb | g3 |
| 98 | straight | 83% | 95% | 94% | 72% | 50–100bb | g3 |
| Q9 | straight | 84% | 96% | 95% | 72% | 50–100bb | g3 |
| T9 | straight | 83% | 96% | 95% | 72% | 50–100bb | g3 |
| K9 | straight | 83% | 96% | 95% | 72% | 50–100bb | g3 |
| 54 | straight | 71% | 91% | 89% | 67% | 50–100bb | g4 |
| AA | twopair | 72% | 93% | 90% | 71% | 50–100bb | g5 |
| 88 | twopair | 73% | 91% | 88% | 71% | 50–100bb | g5 |
| 77 | twopair | 70% | 90% | 88% | 70% | 50–100bb | g5 |
| TT | twopair | 72% | 89% | 90% | 70% | 50–100bb | g5 |
| 66 | twopair | 70% | 90% | 87% | 69% | 50–100bb | g5 |
| AT | twopair | 69% | 90% | 88% | 70% | 50–100bb | g6 |
| A6 | twopair | 65% | 70% | 64% | 70% | 50–100bb | g6 |
| A8 | twopair | 68% | 85% | 83% | 70% | 50–100bb | g6 |
| A7 | twopair | 67% | 79% | 73% | 69% | 50–100bb | g6 |
| 76 | twopair | 61% | 56% | 47% | 69% | 50–100bb | g6 |
| 87 | twopair | 63% | 62% | 52% | 68% | 50–100bb | g6 |
| T7 | twopair | 62% | 61% | 55% | 68% | 50–100bb | g6 |
| 86 | twopair | 62% | 58% | 51% | 67% | 50–100bb | g6 |
| T8 | twopair | 63% | 63% | 58% | 66% | 50–100bb | g6 |
| A2 | tpmk | 56% | 31% | 14% | 71% | 50–100bb | g7 |
| A4 | tpmk | 55% | 31% | 15% | 71% | 50–100bb | g7 |
| AQ | tpgk | 61% | 47% | 36% | 70% | 50–100bb | g7 |
| AK | tpgk | 60% | 47% | 36% | 70% | 50–100bb | g7 |
| AJ | tpmk | 60% | 46% | 32% | 70% | 50–100bb | g7 |
| A3 | tpmk | 57% | 31% | 14% | 69% | 50–100bb | g7 |
| A5 | tpmk | 57% | 29% | 14% | 69% | 50–100bb | g7 |
| QQ | pp1 | 49% | 13% | 0% | 69% | 50–100bb | g8 |
| KK | pp1 | 48% | 15% | 0% | 68% | 50–100bb | g8 |
| JJ | pp1 | 50% | 14% | 0% | 68% | 50–100bb | g8 |
| KT | mp | 49% | 14% | 0% | 67% | 50–100bb | g9 |
| QT | mp | 48% | 11% | 0% | 65% | 50–100bb | g9 |
| JT | mp | 45% | 11% | 0% | 62% | 50–100bb | g9 |
| K8 | bp | 42% | 8% | 0% | 57% | 50–100bb | g10 |
| Q8 | bp | 41% | 9% | 0% | 55% | 50–100bb | g10 |
| J8 | bp | 40% | 9% | 0% | 53% | 50–100bb | g10 |
| K7 | bp | 38% | 8% | 0% | 51% | 50–100bb | g10 |
| J7 | bp | 38% | 8% | 0% | 49% | 0–5bb | g10 |
| Q7 | bp | 36% | 8% | 0% | 49% | 0–5bb | g10 |
| 75 | bp | 36% | 6% | 0% | 49% | 0–5bb | g10 |
| K6 | bp | 34% | 5% | 0% | 50% | 0–5bb | g10 |
| Q6 | bp | 33% | 5% | 0% | 49% | 0–5bb | g10 |
| 64 | bp | 32% | 4% | 0% | 49% | 0–5bb | g10 |
| 65 | bp | 31% | 4% | 0% | 48% | 0–5bb | g10 |
| 55 | pp3 | 30% | 2% | 0% | 49% | 0–5bb | g10 |
| 44 | pp3 | 27% | 1% | 0% | 50% | 0–5bb | g10 |
| 33 | pp3 | 24% | 0% | 0% | 48% | 0–5bb | g10 |
| 22 | pp3 | 21% | 0% | 0% | 48% | 0–5bb | g10 |
