# T87-As-6s@bx river (T♥ 8♥ 7♠ A♠ 6♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♠ flushes: KQ–K8, K5–K2, QJ–Q8, Q5, JT–J8, T9, T8, 98, 54, 43 | 99% | 100% | 100% | 96% |
| g2 | 25–50bb | J-high straights | J9 | 92% | 98% | 97% | 81% |
| g3 | 25–50bb | T-high straights | 99, A9, K9, Q9, T9, 98–96 | 83% | 90% | 88% | 77% |
| g4 | 25–50bb | 8-high straights | 54 | 70% | 78% | 74% | 73% |
| g5 | 15–25bb | Sets | AA, TT, 88–66 | 69% | 78% | 73% | 73% |
| g6 | 15–25bb | Two pair | AT, A8–A6, T8, T7, 87, 86, 76 | 62% | 63% | 54% | 70% |
| g7 | 0–5bb | Top pair | AK–AJ, A5–A2 | 50% | 26% | 7% | 64% |
| g8 | 0–5bb | Big pocket pairs | KK–JJ | 43% | 15% | 0% | 57% |
| g9 | 0–5bb | Second pair | KT, QT, JT | 38% | 7% | 0% | 47% |
| g10 | 0–5bb | Small pairs | 55–22, K8–K6, Q8–Q6, J8, J7, 75, 65, 64 | 15% | 0% | 0% | 12% |

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
| J8+fl | flush | 98% | 100% | 99% | 95% | 50–100bb | g1 |
| QT+fl | flush | 98% | 100% | 100% | 95% | 50–100bb | g1 |
| QJ+fl | flush | 98% | 100% | 100% | 95% | 50–100bb | g1 |
| Q5+fl | flush | 98% | 100% | 100% | 94% | 50–100bb | g1 |
| Q9+fl | flush | 98% | 100% | 100% | 94% | 50–100bb | g1 |
| JT+fl | flush | 97% | 100% | 100% | 92% | 50–100bb | g1 |
| J9+fl | flush | 97% | 99% | 99% | 91% | 50–100bb | g1 |
| 98+fl | flushlo | 97% | 98% | 98% | 90% | 50–100bb | g1 |
| T9+fl | flushlo | 96% | 100% | 100% | 90% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 99% | 98% | 87% | 50–100bb | g1 |
| 43+fl | flushlo | 94% | 98% | 98% | 84% | 50–100bb | g1 |
| J9 | straight | 92% | 98% | 97% | 81% | 50–100bb | g2 |
| 96 | straight | 83% | 90% | 88% | 79% | 50–100bb | g3 |
| 99 | straight | 86% | 93% | 90% | 78% | 50–100bb | g3 |
| K9 | straight | 83% | 90% | 88% | 78% | 50–100bb | g3 |
| 97 | straight | 82% | 90% | 87% | 78% | 50–100bb | g3 |
| Q9 | straight | 83% | 90% | 89% | 77% | 50–100bb | g3 |
| A9 | straight | 83% | 91% | 88% | 77% | 50–100bb | g3 |
| T9 | straight | 82% | 89% | 87% | 76% | 50–100bb | g3 |
| 98 | straight | 82% | 90% | 87% | 74% | 50–100bb | g3 |
| 54 | straight | 70% | 78% | 74% | 73% | 50–100bb | g4 |
| AA | twopair | 69% | 86% | 79% | 75% | 50–100bb | g5 |
| 77 | twopair | 66% | 75% | 69% | 73% | 50–100bb | g5 |
| 88 | twopair | 71% | 76% | 71% | 73% | 50–100bb | g5 |
| 66 | twopair | 69% | 76% | 73% | 73% | 50–100bb | g5 |
| TT | twopair | 69% | 75% | 73% | 70% | 50–100bb | g5 |
| AT | twopair | 68% | 78% | 73% | 73% | 50–100bb | g6 |
| A8 | twopair | 65% | 73% | 65% | 72% | 50–100bb | g6 |
| A7 | twopair | 62% | 64% | 56% | 71% | 50–100bb | g6 |
| A6 | twopair | 61% | 60% | 48% | 70% | 50–100bb | g6 |
| 76 | twopair | 53% | 37% | 24% | 64% | 50–100bb | g6 |
| 86 | twopair | 53% | 41% | 28% | 62% | 50–100bb | g6 |
| 87 | twopair | 53% | 43% | 32% | 62% | 50–100bb | g6 |
| T7 | twopair | 55% | 44% | 37% | 61% | 50–100bb | g6 |
| T8 | twopair | 54% | 45% | 39% | 59% | 50–100bb | g6 |
| AK | tpgk | 53% | 34% | 17% | 67% | 50–100bb | g7 |
| AQ | tpgk | 51% | 33% | 17% | 66% | 50–100bb | g7 |
| A4 | tpmk | 49% | 22% | 2% | 64% | 50–100bb | g7 |
| A2 | tpmk | 48% | 22% | 2% | 64% | 50–100bb | g7 |
| AJ | tpmk | 50% | 28% | 9% | 63% | 50–100bb | g7 |
| A3 | tpmk | 49% | 21% | 2% | 62% | 50–100bb | g7 |
| A5 | tpmk | 50% | 22% | 2% | 62% | 50–100bb | g7 |
| JJ | pp1 | 44% | 15% | 0% | 60% | 50–100bb | g8 |
| QQ | pp1 | 41% | 14% | 0% | 57% | 50–100bb | g8 |
| KK | pp1 | 42% | 14% | 0% | 55% | 50–100bb | g8 |
| KT | mp | 42% | 11% | 0% | 53% | 50–100bb | g9 |
| QT | mp | 37% | 7% | 0% | 46% | 0–5bb | g9 |
| JT | mp | 34% | 4% | 0% | 42% | 0–5bb | g9 |
| K8 | bp | 26% | 1% | 0% | 23% | 0–5bb | g10 |
| Q8 | bp | 23% | 0% | 0% | 16% | 0–5bb | g10 |
| J8 | bp | 23% | 0% | 0% | 15% | 0–5bb | g10 |
| K7 | bp | 21% | 0% | 0% | 11% | 0–5bb | g10 |
| Q7 | bp | 17% | 0% | 0% | 11% | 0–5bb | g10 |
| J7 | bp | 16% | 0% | 0% | 11% | 0–5bb | g10 |
| 75 | bp | 15% | 0% | 0% | 11% | 0–5bb | g10 |
| K6 | bp | 14% | 0% | 0% | 11% | 0–5bb | g10 |
| 65 | bp | 12% | 0% | 0% | 10% | 0–5bb | g10 |
| Q6 | bp | 12% | 0% | 0% | 11% | 0–5bb | g10 |
| 64 | bp | 12% | 0% | 0% | 10% | 0–5bb | g10 |
| 44 | pp3 | 11% | 0% | 0% | 10% | 0–5bb | g10 |
| 33 | pp3 | 11% | 0% | 0% | 10% | 0–5bb | g10 |
| 22 | pp3 | 11% | 0% | 0% | 10% | 0–5bb | g10 |
| 55 | pp3 | 11% | 0% | 0% | 10% | 0–5bb | g10 |
