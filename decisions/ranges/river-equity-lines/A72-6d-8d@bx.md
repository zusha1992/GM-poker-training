# A72-6d-8d@bx river (A♣ 7♦ 2♠ 6♦ 8♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AK–A9, A5–A2, KQ–K9, K5–K2, QJ–Q9, Q5, JT, J9, T9, 54, 43 | 98% | 98% | 98% | 94% |
| g2 | 25–50bb | Straights | T9, 54 | 94% | 96% | 95% | 83% |
| g3 | 15–25bb | Sets | AA, 88–66, 22 | 92% | 93% | 91% | 78% |
| g4 | 15–25bb | Two pair | A8–A6, A2, 87, 86, 76 | 84% | 79% | 72% | 61% |
| g5 | 0–5bb | Top pair | AK–A9, A5–A3 | 67% | 46% | 33% | 49% |
| g6 | 0–5bb | Big pocket pairs | KK–TT | 48% | 16% | 0% | 25% |
| g7 | 0–5bb | Medium pairs & second pair | 99, K8, Q8, J8, T8, 98 | 49% | 17% | 0% | 29% |
| g8 | 0–5bb | Small pairs | 55–33, K7, K6, K2, Q7, Q6, J7, T7, 97, 96, 75, 65, 64 | 33% | 9% | 0% | 25% |

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
| K3+fl | flush | 98% | 98% | 98% | 93% | 50–100bb | g1 |
| K2+fl | flush | 98% | 97% | 97% | 92% | 50–100bb | g1 |
| K9+fl | flush | 98% | 97% | 97% | 91% | 50–100bb | g1 |
| K4+fl | flush | 98% | 97% | 97% | 91% | 50–100bb | g1 |
| KT+fl | flush | 98% | 97% | 96% | 90% | 50–100bb | g1 |
| KQ+fl | flush | 98% | 97% | 96% | 90% | 50–100bb | g1 |
| KJ+fl | flush | 97% | 96% | 96% | 90% | 50–100bb | g1 |
| K5+fl | flush | 98% | 96% | 96% | 89% | 50–100bb | g1 |
| QT+fl | flush | 96% | 97% | 95% | 87% | 50–100bb | g1 |
| JT+fl | flushlo | 95% | 97% | 96% | 87% | 50–100bb | g1 |
| QJ+fl | flush | 96% | 96% | 96% | 86% | 50–100bb | g1 |
| 43+fl | flushlo | 95% | 98% | 98% | 86% | 50–100bb | g1 |
| J9+fl | flushlo | 95% | 97% | 96% | 86% | 50–100bb | g1 |
| Q9+fl | flush | 96% | 97% | 96% | 86% | 50–100bb | g1 |
| Q5+fl | flush | 95% | 96% | 95% | 84% | 50–100bb | g1 |
| T9 | straight | 94% | 96% | 95% | 83% | 50–100bb | g2 |
| 54 | straight | 93% | 96% | 95% | 82% | 50–100bb | g2 |
| AA | twopair | 94% | 97% | 96% | 84% | 50–100bb | g3 |
| 88 | twopair | 93% | 96% | 94% | 81% | 50–100bb | g3 |
| 77 | twopair | 90% | 91% | 90% | 77% | 50–100bb | g3 |
| 66 | twopair | 91% | 91% | 89% | 76% | 50–100bb | g3 |
| 22 | twopair | 90% | 89% | 87% | 71% | 50–100bb | g3 |
| A8 | twopair | 87% | 85% | 81% | 67% | 50–100bb | g4 |
| 86 | twopair | 82% | 78% | 73% | 64% | 50–100bb | g4 |
| A6 | twopair | 85% | 79% | 73% | 61% | 50–100bb | g4 |
| 87 | twopair | 81% | 74% | 70% | 61% | 50–100bb | g4 |
| 76 | twopair | 78% | 73% | 67% | 59% | 50–100bb | g4 |
| A7 | twopair | 83% | 79% | 72% | 58% | 50–100bb | g4 |
| A2 | twopair | 82% | 73% | 65% | 55% | 50–100bb | g4 |
| A5 | tpwk | 63% | 34% | 19% | 46% | 0–5bb | g5 |
| A4 | tpwk | 57% | 25% | 6% | 39% | 0–5bb | g5 |
| AQ | tpgk | 75% | 66% | 56% | 56% | 50–100bb | g5 |
| A3 | tpwk | 55% | 20% | 1% | 33% | 0–5bb | g5 |
| AJ | tpmk | 74% | 61% | 52% | 55% | 50–100bb | g5 |
| AT | tpmk | 71% | 54% | 42% | 55% | 50–100bb | g5 |
| AK | tpgk | 75% | 65% | 56% | 54% | 50–100bb | g5 |
| A9 | tpmk | 66% | 46% | 30% | 52% | 50–100bb | g5 |
| TT | pp1 | 50% | 17% | 0% | 26% | 0–5bb | g6 |
| JJ | pp1 | 49% | 17% | 0% | 26% | 0–5bb | g6 |
| QQ | pp1 | 47% | 16% | 0% | 27% | 0–5bb | g6 |
| KK | pp1 | 46% | 15% | 0% | 23% | 0–5bb | g6 |
| T8 | mp | 51% | 18% | 0% | 28% | 0–5bb | g7 |
| 99 | pp1 | 50% | 16% | 0% | 28% | 0–5bb | g7 |
| 98 | mp | 49% | 16% | 0% | 29% | 0–5bb | g7 |
| J8 | mp | 48% | 17% | 0% | 29% | 0–5bb | g7 |
| K8 | mp | 48% | 17% | 0% | 28% | 0–5bb | g7 |
| Q8 | mp | 46% | 17% | 0% | 29% | 0–5bb | g7 |
| T7 | bp | 42% | 14% | 0% | 26% | 0–5bb | g8 |
| K7 | bp | 42% | 14% | 0% | 25% | 0–5bb | g8 |
| Q7 | bp | 41% | 13% | 0% | 27% | 0–5bb | g8 |
| J7 | bp | 41% | 13% | 0% | 26% | 0–5bb | g8 |
| 97 | bp | 39% | 13% | 0% | 27% | 0–5bb | g8 |
| 96 | bp | 37% | 12% | 0% | 27% | 0–5bb | g8 |
| K6 | bp | 35% | 11% | 0% | 27% | 0–5bb | g8 |
| 75 | bp | 35% | 11% | 0% | 27% | 0–5bb | g8 |
| 65 | bp | 34% | 10% | 0% | 28% | 0–5bb | g8 |
| Q6 | bp | 34% | 11% | 0% | 27% | 0–5bb | g8 |
| 64 | bp | 34% | 10% | 0% | 28% | 0–5bb | g8 |
| 55 | pp3 | 30% | 8% | 0% | 26% | 0–5bb | g8 |
| 44 | pp3 | 25% | 5% | 0% | 23% | 0–5bb | g8 |
| 33 | pp3 | 17% | 1% | 0% | 20% | 0–5bb | g8 |
| K2 | bp | 12% | 0% | 0% | 11% | 0–5bb | g8 |
