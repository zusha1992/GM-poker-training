# A72-6d-8d@xx river (A♣ 7♦ 2♠ 6♦ 8♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AK–A9, A5–A2, KQ–K9, K5–K2, QJ–Q9, Q5, JT, J9, T9, 54, 43 | 99% | 98% | 97% | 93% |
| g2 | 25–50bb | Straights | T9, 54 | 91% | 94% | 90% | 73% |
| g3 | 15–25bb | Sets | AA, 88–66, 22 | 87% | 91% | 83% | 68% |
| g4 | 15–25bb | Two pair | A8–A6, A2, 87, 86, 76 | 81% | 82% | 65% | 67% |
| g5 | 0–5bb | Top pair | AK–A9, A5–A3 | 73% | 64% | 30% | 61% |
| g6 | 0–5bb | Big pocket pairs | KK–TT | 63% | 41% | 0% | 44% |
| g7 | 0–5bb | Medium pairs & second pair | 99, K8, Q8, J8, T8, 98 | 62% | 38% | 0% | 45% |
| g8 | 0–5bb | Small pairs | 55–33, K7, K6, K2, Q7, Q6, J7, T7, 97, 96, 75, 65, 64 | 49% | 18% | 0% | 45% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| A5+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| T9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 54+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A9+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| AJ+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| AT+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| AK+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| AQ+fl | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| K9+fl | flush | 99% | 98% | 97% | 94% | 50–100bb | g1 |
| K4+fl | flush | 99% | 98% | 96% | 93% | 50–100bb | g1 |
| K3+fl | flush | 99% | 98% | 96% | 93% | 50–100bb | g1 |
| K2+fl | flush | 98% | 97% | 95% | 93% | 50–100bb | g1 |
| KT+fl | flush | 99% | 97% | 96% | 93% | 50–100bb | g1 |
| K5+fl | flush | 99% | 97% | 96% | 92% | 50–100bb | g1 |
| KQ+fl | flush | 99% | 97% | 95% | 92% | 50–100bb | g1 |
| KJ+fl | flush | 98% | 97% | 95% | 92% | 50–100bb | g1 |
| QT+fl | flush | 97% | 97% | 94% | 86% | 50–100bb | g1 |
| 43+fl | flushlo | 95% | 97% | 95% | 86% | 50–100bb | g1 |
| Q9+fl | flush | 97% | 97% | 95% | 86% | 50–100bb | g1 |
| Q5+fl | flush | 97% | 96% | 94% | 86% | 50–100bb | g1 |
| J9+fl | flushlo | 96% | 97% | 95% | 85% | 50–100bb | g1 |
| QJ+fl | flush | 97% | 96% | 94% | 84% | 50–100bb | g1 |
| JT+fl | flushlo | 96% | 96% | 94% | 83% | 50–100bb | g1 |
| T9 | straight | 91% | 95% | 91% | 74% | 50–100bb | g2 |
| 54 | straight | 87% | 92% | 88% | 67% | 50–100bb | g2 |
| 88 | twopair | 88% | 92% | 86% | 69% | 50–100bb | g3 |
| 22 | twopair | 87% | 90% | 81% | 69% | 50–100bb | g3 |
| 66 | twopair | 85% | 89% | 82% | 68% | 50–100bb | g3 |
| 77 | twopair | 87% | 91% | 84% | 68% | 50–100bb | g3 |
| AA | twopair | 88% | 92% | 79% | 67% | 50–100bb | g3 |
| 87 | twopair | 79% | 80% | 66% | 68% | 50–100bb | g4 |
| A8 | twopair | 83% | 85% | 72% | 68% | 50–100bb | g4 |
| 76 | twopair | 78% | 79% | 64% | 67% | 50–100bb | g4 |
| A7 | twopair | 82% | 84% | 66% | 67% | 50–100bb | g4 |
| A6 | twopair | 80% | 80% | 62% | 67% | 50–100bb | g4 |
| 86 | twopair | 78% | 79% | 65% | 67% | 50–100bb | g4 |
| A2 | twopair | 81% | 80% | 60% | 66% | 50–100bb | g4 |
| AJ | tpmk | 75% | 74% | 49% | 67% | 50–100bb | g5 |
| AT | tpmk | 75% | 70% | 41% | 67% | 50–100bb | g5 |
| AK | tpgk | 76% | 75% | 51% | 66% | 50–100bb | g5 |
| AQ | tpgk | 77% | 76% | 51% | 64% | 50–100bb | g5 |
| A9 | tpmk | 73% | 64% | 28% | 64% | 50–100bb | g5 |
| A5 | tpwk | 70% | 56% | 14% | 58% | 50–100bb | g5 |
| A4 | tpwk | 69% | 51% | 4% | 54% | 50–100bb | g5 |
| A3 | tpwk | 69% | 50% | 1% | 50% | 50–100bb | g5 |
| TT | pp1 | 65% | 42% | 0% | 47% | 0–5bb | g6 |
| KK | pp1 | 63% | 39% | 0% | 40% | 0–5bb | g6 |
| JJ | pp1 | 63% | 41% | 0% | 45% | 0–5bb | g6 |
| QQ | pp1 | 62% | 41% | 0% | 44% | 0–5bb | g6 |
| 99 | pp1 | 64% | 43% | 0% | 49% | 0–5bb | g7 |
| K8 | mp | 63% | 37% | 0% | 43% | 0–5bb | g7 |
| J8 | mp | 61% | 36% | 0% | 45% | 0–5bb | g7 |
| T8 | mp | 61% | 38% | 0% | 45% | 0–5bb | g7 |
| 98 | mp | 61% | 35% | 0% | 47% | 0–5bb | g7 |
| Q8 | mp | 61% | 37% | 0% | 43% | 0–5bb | g7 |
| K7 | bp | 57% | 28% | 0% | 44% | 0–5bb | g8 |
| 97 | bp | 57% | 27% | 0% | 46% | 0–5bb | g8 |
| T7 | bp | 56% | 28% | 0% | 46% | 0–5bb | g8 |
| Q7 | bp | 55% | 29% | 0% | 44% | 0–5bb | g8 |
| 75 | bp | 54% | 24% | 0% | 45% | 0–5bb | g8 |
| J7 | bp | 54% | 27% | 0% | 45% | 0–5bb | g8 |
| K6 | bp | 51% | 19% | 0% | 45% | 0–5bb | g8 |
| 65 | bp | 50% | 17% | 0% | 45% | 0–5bb | g8 |
| Q6 | bp | 49% | 19% | 0% | 43% | 0–5bb | g8 |
| 96 | bp | 49% | 20% | 0% | 47% | 0–5bb | g8 |
| 64 | bp | 49% | 15% | 0% | 45% | 0–5bb | g8 |
| 55 | pp3 | 46% | 11% | 0% | 45% | 0–5bb | g8 |
| 44 | pp3 | 42% | 9% | 0% | 46% | 0–5bb | g8 |
| 33 | pp3 | 40% | 6% | 0% | 45% | 0–5bb | g8 |
| K2 | bp | 37% | 4% | 0% | 39% | 0–5bb | g8 |
