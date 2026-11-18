# T87-As-6s@bx river (T♥ 8♥ 7♠ A♠ 6♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♠ flushes: KQ–K8, K5–K2, QJ–Q8, Q5, JT–J8, T9, T8, 98, 54, 43 | 99% | 100% | 100% | 96% |
| g2 | 25–50bb | Straights | 99, A9, K9, Q9, J9, T9, 98–96, 54 | 84% | 91% | 89% | 78% |
| g3 | 15–25bb | Sets | AA, TT, 88–66 | 70% | 77% | 73% | 73% |
| g4 | 15–25bb | Two pair | AT, A8–A6, T8, T7, 87, 86, 76 | 62% | 63% | 54% | 69% |
| g5 | 0–5bb | Top pair | AK–AJ, A5–A2 | 50% | 26% | 7% | 64% |
| g6 | 0–5bb | Big pocket pairs | KK–JJ | 43% | 15% | 0% | 57% |
| g7 | 0–5bb | Second pair | KT, QT, JT | 38% | 7% | 0% | 47% |
| g8 | 0–5bb | Small pairs | 55–22, K8–K6, Q8–Q6, J8, J7, 75, 65, 64 | 15% | 0% | 0% | 12% |

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
| T8+fl | flushlo | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| Q8+fl | flush | 99% | 100% | 100% | 97% | 50–100bb | g1 |
| J8+fl | flush | 98% | 99% | 99% | 95% | 50–100bb | g1 |
| QT+fl | flush | 98% | 100% | 100% | 95% | 50–100bb | g1 |
| Q5+fl | flush | 98% | 100% | 100% | 95% | 50–100bb | g1 |
| QJ+fl | flush | 98% | 100% | 100% | 95% | 50–100bb | g1 |
| Q9+fl | flush | 99% | 100% | 100% | 94% | 50–100bb | g1 |
| JT+fl | flush | 97% | 100% | 100% | 92% | 50–100bb | g1 |
| J9+fl | flush | 97% | 99% | 99% | 90% | 50–100bb | g1 |
| T9+fl | flushlo | 96% | 100% | 100% | 90% | 50–100bb | g1 |
| 98+fl | flushlo | 97% | 98% | 98% | 90% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 99% | 99% | 87% | 50–100bb | g1 |
| 43+fl | flushlo | 94% | 98% | 98% | 85% | 50–100bb | g1 |
| J9 | straight | 92% | 97% | 97% | 81% | 50–100bb | g2 |
| 99 | straight | 86% | 92% | 90% | 79% | 50–100bb | g2 |
| Q9 | straight | 84% | 90% | 88% | 78% | 50–100bb | g2 |
| 97 | straight | 82% | 90% | 86% | 78% | 50–100bb | g2 |
| K9 | straight | 83% | 90% | 88% | 78% | 50–100bb | g2 |
| 96 | straight | 84% | 90% | 87% | 78% | 50–100bb | g2 |
| A9 | straight | 83% | 91% | 88% | 77% | 50–100bb | g2 |
| T9 | straight | 83% | 89% | 88% | 77% | 50–100bb | g2 |
| 98 | straight | 82% | 90% | 87% | 76% | 50–100bb | g2 |
| 54 | straight | 70% | 78% | 74% | 71% | 50–100bb | g2 |
| AA | twopair | 71% | 86% | 80% | 75% | 50–100bb | g3 |
| 66 | twopair | 69% | 77% | 71% | 73% | 50–100bb | g3 |
| 77 | twopair | 68% | 75% | 70% | 73% | 50–100bb | g3 |
| 88 | twopair | 71% | 75% | 71% | 72% | 50–100bb | g3 |
| TT | twopair | 70% | 74% | 72% | 70% | 50–100bb | g3 |
| AT | twopair | 68% | 77% | 73% | 72% | 50–100bb | g4 |
| A8 | twopair | 65% | 72% | 64% | 71% | 50–100bb | g4 |
| A6 | twopair | 60% | 60% | 47% | 71% | 50–100bb | g4 |
| A7 | twopair | 62% | 65% | 56% | 71% | 50–100bb | g4 |
| 76 | twopair | 53% | 37% | 23% | 65% | 50–100bb | g4 |
| 87 | twopair | 54% | 43% | 31% | 62% | 50–100bb | g4 |
| 86 | twopair | 53% | 41% | 27% | 62% | 50–100bb | g4 |
| T7 | twopair | 54% | 45% | 37% | 61% | 50–100bb | g4 |
| T8 | twopair | 56% | 46% | 39% | 59% | 50–100bb | g4 |
| AQ | tpgk | 52% | 32% | 17% | 65% | 50–100bb | g5 |
| AK | tpgk | 51% | 33% | 17% | 64% | 50–100bb | g5 |
| AJ | tpmk | 49% | 27% | 9% | 64% | 50–100bb | g5 |
| A3 | tpmk | 49% | 22% | 2% | 64% | 50–100bb | g5 |
| A4 | tpmk | 49% | 23% | 2% | 64% | 50–100bb | g5 |
| A2 | tpmk | 50% | 22% | 2% | 63% | 50–100bb | g5 |
| A5 | tpmk | 48% | 23% | 2% | 63% | 50–100bb | g5 |
| JJ | pp1 | 43% | 16% | 0% | 60% | 50–100bb | g6 |
| QQ | pp1 | 42% | 14% | 0% | 56% | 50–100bb | g6 |
| KK | pp1 | 44% | 15% | 0% | 55% | 50–100bb | g6 |
| KT | mp | 42% | 11% | 0% | 52% | 50–100bb | g7 |
| QT | mp | 37% | 7% | 0% | 47% | 0–5bb | g7 |
| JT | mp | 35% | 4% | 0% | 42% | 0–5bb | g7 |
| K8 | bp | 27% | 1% | 0% | 23% | 0–5bb | g8 |
| Q8 | bp | 24% | 0% | 0% | 17% | 0–5bb | g8 |
| J8 | bp | 23% | 0% | 0% | 14% | 0–5bb | g8 |
| K7 | bp | 19% | 0% | 0% | 11% | 0–5bb | g8 |
| Q7 | bp | 18% | 0% | 0% | 11% | 0–5bb | g8 |
| J7 | bp | 16% | 0% | 0% | 11% | 0–5bb | g8 |
| 75 | bp | 15% | 0% | 0% | 10% | 0–5bb | g8 |
| K6 | bp | 13% | 0% | 0% | 11% | 0–5bb | g8 |
| 65 | bp | 12% | 0% | 0% | 10% | 0–5bb | g8 |
| Q6 | bp | 12% | 0% | 0% | 11% | 0–5bb | g8 |
| 64 | bp | 12% | 0% | 0% | 11% | 0–5bb | g8 |
| 55 | pp3 | 11% | 0% | 0% | 10% | 0–5bb | g8 |
| 22 | pp3 | 11% | 0% | 0% | 9% | 0–5bb | g8 |
| 33 | pp3 | 11% | 0% | 0% | 9% | 0–5bb | g8 |
| 44 | pp3 | 10% | 0% | 0% | 11% | 0–5bb | g8 |
