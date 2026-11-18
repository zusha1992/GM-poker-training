# T87-As-6s@xx river (T♥ 8♥ 7♠ A♠ 6♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♠ flushes: KQ–K8, K5–K2, QJ–Q8, Q5, JT–J8, T9, T8, 98, 54, 43 | 98% | 100% | 100% | 93% |
| g2 | 25–50bb | Straights | 99, A9, K9, Q9, J9, T9, 98–96, 54 | 84% | 96% | 95% | 72% |
| g3 | 15–25bb | Sets | AA, TT, 88–66 | 71% | 91% | 89% | 70% |
| g4 | 15–25bb | Two pair | AT, A8–A6, T8, T7, 87, 86, 76 | 66% | 77% | 72% | 70% |
| g5 | 0–5bb | Top pair | AK–AJ, A5–A2 | 57% | 38% | 24% | 70% |
| g6 | 0–5bb | Big pocket pairs | KK–JJ | 49% | 14% | 0% | 68% |
| g7 | 0–5bb | Second pair | KT, QT, JT | 47% | 12% | 0% | 65% |
| g8 | 0–5bb | Small pairs | 55–22, K8–K6, Q8–Q6, J8, J7, 75, 65, 64 | 33% | 5% | 0% | 50% |

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
| QT+fl | flush | 98% | 100% | 100% | 92% | 50–100bb | g1 |
| Q5+fl | flush | 98% | 100% | 100% | 92% | 50–100bb | g1 |
| Q8+fl | flush | 98% | 100% | 100% | 91% | 50–100bb | g1 |
| QJ+fl | flush | 98% | 100% | 100% | 91% | 50–100bb | g1 |
| Q9+fl | flush | 98% | 100% | 100% | 90% | 50–100bb | g1 |
| JT+fl | flush | 96% | 100% | 100% | 87% | 50–100bb | g1 |
| J8+fl | flush | 96% | 100% | 100% | 87% | 50–100bb | g1 |
| T8+fl | flushlo | 95% | 100% | 100% | 85% | 50–100bb | g1 |
| J9+fl | flush | 97% | 100% | 100% | 85% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 99% | 99% | 83% | 50–100bb | g1 |
| 43+fl | flushlo | 95% | 99% | 99% | 83% | 50–100bb | g1 |
| 98+fl | flushlo | 95% | 99% | 99% | 83% | 50–100bb | g1 |
| T9+fl | flushlo | 95% | 100% | 100% | 82% | 50–100bb | g1 |
| J9 | straight | 90% | 99% | 98% | 73% | 50–100bb | g2 |
| T9 | straight | 84% | 96% | 95% | 73% | 50–100bb | g2 |
| A9 | straight | 83% | 96% | 95% | 73% | 50–100bb | g2 |
| 97 | straight | 82% | 95% | 94% | 73% | 50–100bb | g2 |
| 99 | straight | 86% | 97% | 96% | 72% | 50–100bb | g2 |
| 96 | straight | 83% | 96% | 95% | 72% | 50–100bb | g2 |
| Q9 | straight | 84% | 96% | 95% | 72% | 50–100bb | g2 |
| K9 | straight | 83% | 96% | 95% | 72% | 50–100bb | g2 |
| 98 | straight | 83% | 96% | 95% | 70% | 50–100bb | g2 |
| 54 | straight | 71% | 91% | 89% | 67% | 50–100bb | g2 |
| AA | twopair | 71% | 93% | 90% | 71% | 50–100bb | g3 |
| 66 | twopair | 69% | 90% | 88% | 71% | 50–100bb | g3 |
| 88 | twopair | 72% | 91% | 89% | 70% | 50–100bb | g3 |
| TT | twopair | 73% | 91% | 89% | 70% | 50–100bb | g3 |
| 77 | twopair | 71% | 90% | 88% | 70% | 50–100bb | g3 |
| A8 | twopair | 68% | 85% | 83% | 71% | 50–100bb | g4 |
| AT | twopair | 69% | 90% | 88% | 71% | 50–100bb | g4 |
| A7 | twopair | 65% | 79% | 73% | 70% | 50–100bb | g4 |
| A6 | twopair | 64% | 71% | 63% | 70% | 50–100bb | g4 |
| 76 | twopair | 61% | 54% | 48% | 69% | 50–100bb | g4 |
| 86 | twopair | 62% | 59% | 50% | 69% | 50–100bb | g4 |
| 87 | twopair | 62% | 61% | 53% | 68% | 50–100bb | g4 |
| T7 | twopair | 62% | 62% | 57% | 68% | 50–100bb | g4 |
| T8 | twopair | 63% | 63% | 57% | 66% | 50–100bb | g4 |
| AQ | tpgk | 60% | 49% | 37% | 71% | 50–100bb | g5 |
| A5 | tpmk | 56% | 29% | 14% | 71% | 50–100bb | g5 |
| AJ | tpmk | 59% | 46% | 34% | 70% | 50–100bb | g5 |
| AK | tpgk | 60% | 49% | 37% | 70% | 50–100bb | g5 |
| A4 | tpmk | 55% | 30% | 14% | 70% | 50–100bb | g5 |
| A2 | tpmk | 55% | 31% | 15% | 69% | 50–100bb | g5 |
| A3 | tpmk | 56% | 31% | 14% | 69% | 50–100bb | g5 |
| QQ | pp1 | 49% | 14% | 0% | 69% | 50–100bb | g6 |
| KK | pp1 | 49% | 14% | 0% | 68% | 50–100bb | g6 |
| JJ | pp1 | 50% | 14% | 0% | 68% | 50–100bb | g6 |
| KT | mp | 49% | 13% | 0% | 66% | 50–100bb | g7 |
| QT | mp | 47% | 11% | 0% | 64% | 50–100bb | g7 |
| JT | mp | 46% | 10% | 0% | 64% | 50–100bb | g7 |
| K8 | bp | 42% | 8% | 0% | 57% | 50–100bb | g8 |
| Q8 | bp | 41% | 9% | 0% | 54% | 50–100bb | g8 |
| J8 | bp | 41% | 8% | 0% | 52% | 50–100bb | g8 |
| Q7 | bp | 37% | 8% | 0% | 51% | 50–100bb | g8 |
| K7 | bp | 39% | 7% | 0% | 50% | 50–100bb | g8 |
| K6 | bp | 34% | 5% | 0% | 50% | 50–100bb | g8 |
| J7 | bp | 37% | 7% | 0% | 49% | 0–5bb | g8 |
| 75 | bp | 36% | 6% | 0% | 48% | 0–5bb | g8 |
| Q6 | bp | 33% | 5% | 0% | 49% | 0–5bb | g8 |
| 64 | bp | 32% | 4% | 0% | 48% | 0–5bb | g8 |
| 65 | bp | 32% | 4% | 0% | 49% | 0–5bb | g8 |
| 55 | pp3 | 30% | 3% | 0% | 50% | 0–5bb | g8 |
| 44 | pp3 | 27% | 1% | 0% | 49% | 0–5bb | g8 |
| 33 | pp3 | 24% | 0% | 0% | 48% | 0–5bb | g8 |
| 22 | pp3 | 21% | 0% | 0% | 48% | 0–5bb | g8 |
