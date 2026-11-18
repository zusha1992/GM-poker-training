# A72-6d-8d@bx river (A♣ 7♦ 2♠ 6♦ 8♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AK–A9, A5–A2, KQ–K9, K5–K2, QJ–Q9, Q5, JT, J9, T9, 54, 43 | 98% | 98% | 98% | 94% |
| g2 | 25–50bb | Straights | T9, 54 | 93% | 96% | 95% | 83% |
| g3 | 15–25bb | Sets | AA, 88–66, 22 | 91% | 93% | 91% | 77% |
| g4 | 15–25bb | Two pair | A8–A6, A2, 87, 86, 76 | 83% | 78% | 73% | 61% |
| g5 | 0–5bb | Top pair | AK–A9, A5–A3 | 67% | 46% | 33% | 49% |
| g6 | 0–5bb | Big pocket pairs | KK–TT | 48% | 16% | 0% | 25% |
| g7 | 0–5bb | Medium pairs & second pair | 99, K8, Q8, J8, T8, 98 | 48% | 17% | 0% | 28% |
| g8 | 0–5bb | Small pairs | 55–33, K7, K6, K2, Q7, Q6, J7, T7, 97, 96, 75, 65, 64 | 33% | 10% | 0% | 25% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AK+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AQ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| T9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 54+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K3+fl | flush | 98% | 98% | 98% | 94% | 50–100bb | g1 |
| K2+fl | flush | 98% | 97% | 96% | 92% | 50–100bb | g1 |
| K4+fl | flush | 98% | 97% | 97% | 92% | 50–100bb | g1 |
| K9+fl | flush | 98% | 97% | 97% | 92% | 50–100bb | g1 |
| KT+fl | flush | 97% | 97% | 96% | 91% | 50–100bb | g1 |
| KQ+fl | flush | 98% | 97% | 95% | 89% | 50–100bb | g1 |
| K5+fl | flush | 97% | 96% | 96% | 89% | 50–100bb | g1 |
| KJ+fl | flush | 98% | 97% | 96% | 89% | 50–100bb | g1 |
| QT+fl | flush | 96% | 96% | 96% | 88% | 50–100bb | g1 |
| 43+fl | flushlo | 94% | 98% | 98% | 87% | 50–100bb | g1 |
| J9+fl | flushlo | 95% | 97% | 97% | 87% | 50–100bb | g1 |
| Q9+fl | flush | 96% | 96% | 96% | 87% | 50–100bb | g1 |
| QJ+fl | flush | 96% | 96% | 95% | 86% | 50–100bb | g1 |
| JT+fl | flushlo | 96% | 97% | 95% | 86% | 50–100bb | g1 |
| Q5+fl | flush | 95% | 97% | 95% | 85% | 50–100bb | g1 |
| T9 | straight | 93% | 96% | 95% | 83% | 50–100bb | g2 |
| 54 | straight | 93% | 96% | 95% | 82% | 50–100bb | g2 |
| AA | twopair | 93% | 97% | 96% | 84% | 50–100bb | g3 |
| 88 | twopair | 92% | 95% | 95% | 81% | 50–100bb | g3 |
| 77 | twopair | 90% | 92% | 91% | 77% | 50–100bb | g3 |
| 66 | twopair | 90% | 91% | 89% | 74% | 50–100bb | g3 |
| 22 | twopair | 91% | 88% | 86% | 70% | 50–100bb | g3 |
| A8 | twopair | 88% | 86% | 81% | 67% | 50–100bb | g4 |
| 86 | twopair | 82% | 77% | 74% | 65% | 50–100bb | g4 |
| A6 | twopair | 85% | 79% | 73% | 62% | 50–100bb | g4 |
| 87 | twopair | 80% | 74% | 70% | 61% | 50–100bb | g4 |
| 76 | twopair | 78% | 74% | 67% | 60% | 50–100bb | g4 |
| A7 | twopair | 83% | 78% | 72% | 58% | 50–100bb | g4 |
| A2 | twopair | 81% | 73% | 67% | 56% | 50–100bb | g4 |
| A5 | tpwk | 62% | 34% | 18% | 45% | 0–5bb | g5 |
| A4 | tpwk | 58% | 24% | 6% | 40% | 0–5bb | g5 |
| AQ | tpgk | 74% | 64% | 56% | 56% | 50–100bb | g5 |
| AT | tpmk | 70% | 54% | 41% | 56% | 50–100bb | g5 |
| AJ | tpmk | 75% | 62% | 52% | 56% | 50–100bb | g5 |
| A3 | tpwk | 55% | 22% | 1% | 34% | 0–5bb | g5 |
| AK | tpgk | 75% | 66% | 55% | 55% | 50–100bb | g5 |
| A9 | tpmk | 66% | 44% | 31% | 52% | 50–100bb | g5 |
| TT | pp1 | 49% | 17% | 0% | 26% | 0–5bb | g6 |
| QQ | pp1 | 48% | 16% | 0% | 25% | 0–5bb | g6 |
| JJ | pp1 | 47% | 17% | 0% | 25% | 0–5bb | g6 |
| KK | pp1 | 47% | 15% | 0% | 23% | 0–5bb | g6 |
| T8 | mp | 49% | 17% | 0% | 28% | 0–5bb | g7 |
| 98 | mp | 49% | 17% | 0% | 30% | 0–5bb | g7 |
| 99 | pp1 | 49% | 16% | 0% | 27% | 0–5bb | g7 |
| J8 | mp | 48% | 17% | 0% | 28% | 0–5bb | g7 |
| K8 | mp | 47% | 16% | 0% | 27% | 0–5bb | g7 |
| Q8 | mp | 47% | 16% | 0% | 29% | 0–5bb | g7 |
| K7 | bp | 43% | 14% | 0% | 25% | 0–5bb | g8 |
| J7 | bp | 41% | 14% | 0% | 26% | 0–5bb | g8 |
| T7 | bp | 41% | 14% | 0% | 26% | 0–5bb | g8 |
| Q7 | bp | 40% | 14% | 0% | 27% | 0–5bb | g8 |
| 97 | bp | 40% | 13% | 0% | 25% | 0–5bb | g8 |
| 96 | bp | 36% | 12% | 0% | 30% | 0–5bb | g8 |
| 75 | bp | 35% | 11% | 0% | 27% | 0–5bb | g8 |
| 65 | bp | 35% | 11% | 0% | 27% | 0–5bb | g8 |
| Q6 | bp | 35% | 11% | 0% | 27% | 0–5bb | g8 |
| K6 | bp | 34% | 12% | 0% | 28% | 0–5bb | g8 |
| 64 | bp | 33% | 10% | 0% | 27% | 0–5bb | g8 |
| 55 | pp3 | 32% | 8% | 0% | 26% | 0–5bb | g8 |
| 44 | pp3 | 24% | 5% | 0% | 23% | 0–5bb | g8 |
| 33 | pp3 | 17% | 1% | 0% | 20% | 0–5bb | g8 |
| K2 | bp | 12% | 0% | 0% | 11% | 0–5bb | g8 |
