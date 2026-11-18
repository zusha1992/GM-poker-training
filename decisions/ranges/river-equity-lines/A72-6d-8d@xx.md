# A72-6d-8d@xx river (A♣ 7♦ 2♠ 6♦ 8♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AK–A9, A5–A2, KQ–K9, K5–K2, QJ–Q9, Q5, JT, J9, T9, 54, 43 | 99% | 98% | 97% | 93% |
| g2 | 25–50bb | Straights | T9, 54 | 90% | 95% | 91% | 73% |
| g3 | 15–25bb | Sets | AA, 88–66, 22 | 87% | 91% | 83% | 68% |
| g4 | 15–25bb | Two pair | A8–A6, A2, 87, 86, 76 | 81% | 82% | 65% | 68% |
| g5 | 0–5bb | Top pair | AK–A9, A5–A3 | 73% | 65% | 30% | 61% |
| g6 | 0–5bb | Big pocket pairs | KK–TT | 63% | 42% | 0% | 44% |
| g7 | 0–5bb | Medium pairs & second pair | 99, K8, Q8, J8, T8, 98 | 63% | 39% | 0% | 46% |
| g8 | 0–5bb | Small pairs | 55–33, K7, K6, K2, Q7, Q6, J7, T7, 97, 96, 75, 65, 64 | 49% | 18% | 0% | 45% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| A5+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| T9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 54+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A9+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| AQ+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| AJ+fl | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| A2+fl | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| A3+fl | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| AK+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| AT+fl | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| K9+fl | flush | 99% | 98% | 96% | 94% | 50–100bb | g1 |
| K3+fl | flush | 99% | 98% | 96% | 94% | 50–100bb | g1 |
| K4+fl | flush | 99% | 98% | 96% | 94% | 50–100bb | g1 |
| K5+fl | flush | 99% | 97% | 96% | 93% | 50–100bb | g1 |
| K2+fl | flush | 99% | 97% | 95% | 93% | 50–100bb | g1 |
| KT+fl | flush | 98% | 98% | 96% | 93% | 50–100bb | g1 |
| KJ+fl | flush | 98% | 97% | 95% | 92% | 50–100bb | g1 |
| KQ+fl | flush | 99% | 97% | 95% | 91% | 50–100bb | g1 |
| Q9+fl | flush | 98% | 97% | 94% | 87% | 50–100bb | g1 |
| 43+fl | flushlo | 95% | 97% | 95% | 85% | 50–100bb | g1 |
| QT+fl | flush | 97% | 97% | 94% | 85% | 50–100bb | g1 |
| Q5+fl | flush | 97% | 97% | 94% | 85% | 50–100bb | g1 |
| J9+fl | flushlo | 96% | 97% | 95% | 84% | 50–100bb | g1 |
| QJ+fl | flush | 97% | 96% | 93% | 84% | 50–100bb | g1 |
| JT+fl | flushlo | 96% | 96% | 94% | 82% | 50–100bb | g1 |
| T9 | straight | 91% | 95% | 91% | 75% | 50–100bb | g2 |
| 54 | straight | 88% | 93% | 89% | 65% | 50–100bb | g2 |
| 22 | twopair | 87% | 90% | 82% | 69% | 50–100bb | g3 |
| 77 | twopair | 87% | 91% | 85% | 68% | 50–100bb | g3 |
| 88 | twopair | 88% | 92% | 87% | 68% | 50–100bb | g3 |
| 66 | twopair | 86% | 89% | 82% | 68% | 50–100bb | g3 |
| AA | twopair | 88% | 92% | 79% | 67% | 50–100bb | g3 |
| A8 | twopair | 84% | 85% | 72% | 68% | 50–100bb | g4 |
| 76 | twopair | 79% | 79% | 63% | 68% | 50–100bb | g4 |
| 86 | twopair | 79% | 78% | 64% | 68% | 50–100bb | g4 |
| A7 | twopair | 82% | 83% | 66% | 68% | 50–100bb | g4 |
| 87 | twopair | 80% | 81% | 66% | 68% | 50–100bb | g4 |
| A6 | twopair | 80% | 81% | 62% | 67% | 50–100bb | g4 |
| A2 | twopair | 81% | 80% | 61% | 66% | 50–100bb | g4 |
| AT | tpmk | 75% | 70% | 41% | 67% | 50–100bb | g5 |
| AJ | tpmk | 75% | 75% | 49% | 66% | 50–100bb | g5 |
| AK | tpgk | 77% | 76% | 51% | 66% | 50–100bb | g5 |
| AQ | tpgk | 75% | 75% | 53% | 66% | 50–100bb | g5 |
| A9 | tpmk | 72% | 64% | 28% | 63% | 50–100bb | g5 |
| A5 | tpwk | 71% | 56% | 14% | 58% | 50–100bb | g5 |
| A4 | tpwk | 69% | 52% | 4% | 55% | 50–100bb | g5 |
| A3 | tpwk | 70% | 50% | 1% | 50% | 5–15bb | g5 |
| TT | pp1 | 65% | 43% | 0% | 46% | 0–5bb | g6 |
| KK | pp1 | 64% | 39% | 0% | 40% | 0–5bb | g6 |
| JJ | pp1 | 63% | 43% | 0% | 44% | 0–5bb | g6 |
| QQ | pp1 | 62% | 43% | 0% | 44% | 0–5bb | g6 |
| 99 | pp1 | 65% | 45% | 0% | 48% | 0–5bb | g7 |
| K8 | mp | 64% | 37% | 0% | 44% | 0–5bb | g7 |
| 98 | mp | 62% | 35% | 0% | 48% | 0–5bb | g7 |
| T8 | mp | 61% | 37% | 0% | 45% | 0–5bb | g7 |
| Q8 | mp | 61% | 37% | 0% | 44% | 0–5bb | g7 |
| J8 | mp | 61% | 37% | 0% | 44% | 0–5bb | g7 |
| K7 | bp | 57% | 28% | 0% | 44% | 0–5bb | g8 |
| 75 | bp | 55% | 24% | 0% | 45% | 0–5bb | g8 |
| 97 | bp | 55% | 27% | 0% | 46% | 0–5bb | g8 |
| J7 | bp | 55% | 28% | 0% | 44% | 0–5bb | g8 |
| T7 | bp | 55% | 29% | 0% | 46% | 0–5bb | g8 |
| Q7 | bp | 55% | 27% | 0% | 44% | 0–5bb | g8 |
| K6 | bp | 50% | 19% | 0% | 44% | 0–5bb | g8 |
| Q6 | bp | 49% | 19% | 0% | 43% | 0–5bb | g8 |
| 96 | bp | 49% | 19% | 0% | 47% | 0–5bb | g8 |
| 65 | bp | 48% | 16% | 0% | 45% | 0–5bb | g8 |
| 64 | bp | 48% | 15% | 0% | 45% | 0–5bb | g8 |
| 55 | pp3 | 45% | 12% | 0% | 46% | 0–5bb | g8 |
| 44 | pp3 | 42% | 9% | 0% | 46% | 0–5bb | g8 |
| 33 | pp3 | 41% | 6% | 0% | 44% | 0–5bb | g8 |
| K2 | bp | 38% | 4% | 0% | 39% | 0–5bb | g8 |
