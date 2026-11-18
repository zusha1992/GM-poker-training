# A76-8h-2d@bx river (A♥ 7♥ 6♣ 8♥ 2♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: KQ–K9, K6–K2, QJ–Q9, Q6, Q5, JT, J9, T9, 96, 65, 64, 54, 43 | 99% | 100% | 100% | 96% |
| g2 | 25–50bb | Straights | T9, 54 | 92% | 100% | 100% | 78% |
| g3 | 25–50bb | Sets | AA, 88–66, 22 | 90% | 100% | 100% | 72% |
| g4 | 15–25bb | Two pair | A8–A6, A2, 87, 86, 76 | 85% | 90% | 90% | 67% |
| g5 | 5–15bb | Top pair | AK–A9, A5–A3 | 66% | 51% | 49% | 60% |
| g6 | 0–5bb | Big pocket pairs | KK–TT | 43% | 2% | 0% | 45% |
| g7 | 0–5bb | Medium pairs & second pair | 99, K8, Q8, J8, T8, 98 | 42% | 1% | 0% | 46% |
| g8 | 0–5bb | Small pairs | 55–33, K7, K6, K2, Q7, Q6, J7, T7, 97, 96, 75, 65, 64 | 23% | 0% | 0% | 34% |

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
| Q6+fl | flush | 99% | 100% | 100% | 96% | 50–100bb | g1 |
| 96+fl | flushlo | 98% | 100% | 100% | 96% | 50–100bb | g1 |
| QT+fl | flush | 99% | 100% | 100% | 95% | 50–100bb | g1 |
| Q9+fl | flush | 98% | 100% | 100% | 95% | 50–100bb | g1 |
| 65+fl | flushlo | 98% | 100% | 100% | 95% | 50–100bb | g1 |
| 64+fl | flushlo | 98% | 100% | 100% | 95% | 50–100bb | g1 |
| QJ+fl | flush | 99% | 100% | 100% | 95% | 50–100bb | g1 |
| Q5+fl | flush | 98% | 100% | 100% | 94% | 50–100bb | g1 |
| JT+fl | flush | 98% | 100% | 100% | 93% | 50–100bb | g1 |
| J9+fl | flush | 97% | 100% | 100% | 92% | 50–100bb | g1 |
| T9+fl | flushlo | 96% | 100% | 100% | 89% | 50–100bb | g1 |
| 43+fl | flushlo | 96% | 100% | 100% | 88% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 100% | 100% | 86% | 50–100bb | g1 |
| T9 | straight | 93% | 100% | 100% | 79% | 50–100bb | g2 |
| 54 | straight | 90% | 100% | 100% | 74% | 50–100bb | g2 |
| 66 | twopair | 92% | 100% | 100% | 74% | 50–100bb | g3 |
| 88 | twopair | 91% | 100% | 100% | 74% | 50–100bb | g3 |
| 77 | twopair | 89% | 100% | 100% | 72% | 50–100bb | g3 |
| 22 | twopair | 91% | 100% | 100% | 71% | 50–100bb | g3 |
| AA | twopair | 89% | 100% | 100% | 71% | 50–100bb | g3 |
| 87 | twopair | 82% | 84% | 85% | 71% | 50–100bb | g4 |
| A8 | twopair | 87% | 96% | 96% | 68% | 50–100bb | g4 |
| A2 | twopair | 84% | 86% | 85% | 68% | 50–100bb | g4 |
| A6 | twopair | 85% | 90% | 89% | 67% | 50–100bb | g4 |
| A7 | twopair | 85% | 92% | 92% | 67% | 50–100bb | g4 |
| 76 | twopair | 80% | 86% | 85% | 65% | 50–100bb | g4 |
| 86 | twopair | 82% | 87% | 87% | 65% | 50–100bb | g4 |
| AJ | tpmk | 76% | 80% | 78% | 67% | 50–100bb | g5 |
| AQ | tpgk | 77% | 83% | 82% | 67% | 50–100bb | g5 |
| AT | tpmk | 71% | 66% | 66% | 66% | 50–100bb | g5 |
| AK | tpgk | 77% | 82% | 83% | 66% | 50–100bb | g5 |
| A9 | tpmk | 65% | 47% | 46% | 62% | 50–100bb | g5 |
| A5 | tpmk | 59% | 29% | 27% | 55% | 50–100bb | g5 |
| A4 | tpmk | 54% | 13% | 11% | 50% | 0–5bb | g5 |
| A3 | tpmk | 51% | 4% | 2% | 49% | 0–5bb | g5 |
| TT | pp1 | 45% | 2% | 0% | 48% | 0–5bb | g6 |
| JJ | pp1 | 44% | 2% | 0% | 45% | 0–5bb | g6 |
| QQ | pp1 | 43% | 1% | 0% | 44% | 0–5bb | g6 |
| KK | pp1 | 40% | 1% | 0% | 43% | 0–5bb | g6 |
| 99 | pp1 | 45% | 2% | 0% | 49% | 0–5bb | g7 |
| T8 | mp | 42% | 1% | 0% | 47% | 0–5bb | g7 |
| J8 | mp | 41% | 1% | 0% | 46% | 0–5bb | g7 |
| Q8 | mp | 40% | 1% | 0% | 44% | 0–5bb | g7 |
| 98 | mp | 40% | 2% | 0% | 47% | 0–5bb | g7 |
| K8 | mp | 40% | 1% | 0% | 45% | 0–5bb | g7 |
| K7 | bp | 34% | 1% | 0% | 44% | 0–5bb | g8 |
| T7 | bp | 31% | 1% | 0% | 47% | 0–5bb | g8 |
| Q7 | bp | 31% | 0% | 0% | 43% | 0–5bb | g8 |
| J7 | bp | 31% | 1% | 0% | 45% | 0–5bb | g8 |
| 97 | bp | 31% | 0% | 0% | 47% | 0–5bb | g8 |
| 75 | bp | 29% | 0% | 0% | 46% | 0–5bb | g8 |
| K6 | bp | 23% | 0% | 0% | 39% | 0–5bb | g8 |
| 96 | bp | 22% | 0% | 0% | 32% | 0–5bb | g8 |
| Q6 | bp | 21% | 0% | 0% | 34% | 0–5bb | g8 |
| 65 | bp | 21% | 0% | 0% | 31% | 0–5bb | g8 |
| 64 | bp | 20% | 0% | 0% | 28% | 0–5bb | g8 |
| 55 | pp3 | 18% | 0% | 0% | 25% | 0–5bb | g8 |
| 44 | pp3 | 16% | 0% | 0% | 24% | 0–5bb | g8 |
| 33 | pp3 | 13% | 0% | 0% | 21% | 0–5bb | g8 |
| K2 | bp | 12% | 0% | 0% | 21% | 0–5bb | g8 |
