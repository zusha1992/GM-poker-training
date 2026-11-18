# A76-8h-2d@xx river (A♥ 7♥ 6♣ 8♥ 2♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: KQ–K9, K6–K2, QJ–Q9, Q6, Q5, JT, J9, T9, 96, 65, 64, 54, 43 | 98% | 99% | 99% | 92% |
| g2 | 25–50bb | Straights | T9, 54 | 90% | 96% | 94% | 71% |
| g3 | 15–25bb | Sets | AA, 88–66, 22 | 89% | 96% | 92% | 69% |
| g4 | 15–25bb | Two pair | A8–A6, A2, 87, 86, 76 | 85% | 91% | 84% | 69% |
| g5 | 0–5bb | Top pair | AK–A9, A5–A3 | 75% | 69% | 46% | 69% |
| g6 | 0–5bb | Big pocket pairs | KK–TT | 62% | 34% | 0% | 70% |
| g7 | 0–5bb | Medium pairs & second pair | 99, K8, Q8, J8, T8, 98 | 59% | 30% | 0% | 69% |
| g8 | 0–5bb | Small pairs | 55–33, K7, K6, K2, Q7, Q6, J7, T7, 97, 96, 75, 65, 64 | 45% | 14% | 0% | 64% |

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
| Q5+fl | flush | 98% | 98% | 98% | 90% | 50–100bb | g1 |
| QT+fl | flush | 98% | 98% | 98% | 90% | 50–100bb | g1 |
| Q6+fl | flush | 98% | 99% | 98% | 90% | 50–100bb | g1 |
| Q9+fl | flush | 98% | 98% | 97% | 89% | 50–100bb | g1 |
| QJ+fl | flush | 98% | 98% | 98% | 89% | 50–100bb | g1 |
| J9+fl | flush | 97% | 99% | 97% | 85% | 50–100bb | g1 |
| 43+fl | flushlo | 95% | 98% | 97% | 85% | 50–100bb | g1 |
| JT+fl | flush | 96% | 98% | 97% | 84% | 50–100bb | g1 |
| 65+fl | flushlo | 94% | 99% | 98% | 84% | 50–100bb | g1 |
| 64+fl | flushlo | 95% | 99% | 98% | 83% | 50–100bb | g1 |
| 54+fl | flushlo | 94% | 98% | 97% | 83% | 50–100bb | g1 |
| 96+fl | flushlo | 94% | 99% | 98% | 82% | 50–100bb | g1 |
| T9+fl | flushlo | 94% | 98% | 97% | 81% | 50–100bb | g1 |
| T9 | straight | 90% | 96% | 94% | 72% | 50–100bb | g2 |
| 54 | straight | 89% | 96% | 94% | 66% | 50–100bb | g2 |
| 66 | twopair | 90% | 96% | 94% | 70% | 50–100bb | g3 |
| AA | twopair | 88% | 94% | 86% | 70% | 50–100bb | g3 |
| 22 | twopair | 90% | 96% | 95% | 69% | 50–100bb | g3 |
| 77 | twopair | 89% | 95% | 93% | 69% | 50–100bb | g3 |
| 88 | twopair | 89% | 96% | 94% | 68% | 50–100bb | g3 |
| A8 | twopair | 87% | 94% | 89% | 70% | 50–100bb | g4 |
| A7 | twopair | 86% | 92% | 86% | 70% | 50–100bb | g4 |
| 87 | twopair | 82% | 88% | 83% | 70% | 50–100bb | g4 |
| A6 | twopair | 85% | 90% | 82% | 69% | 50–100bb | g4 |
| A2 | twopair | 85% | 88% | 78% | 69% | 50–100bb | g4 |
| 86 | twopair | 82% | 88% | 82% | 68% | 50–100bb | g4 |
| 76 | twopair | 83% | 88% | 82% | 67% | 50–100bb | g4 |
| A3 | tpmk | 68% | 43% | 2% | 70% | 50–100bb | g5 |
| A4 | tpmk | 70% | 47% | 10% | 70% | 50–100bb | g5 |
| AT | tpmk | 76% | 79% | 61% | 69% | 50–100bb | g5 |
| A9 | tpmk | 74% | 67% | 43% | 69% | 50–100bb | g5 |
| AQ | tpgk | 80% | 86% | 77% | 69% | 50–100bb | g5 |
| AK | tpgk | 79% | 87% | 78% | 69% | 50–100bb | g5 |
| A5 | tpmk | 72% | 58% | 25% | 69% | 50–100bb | g5 |
| AJ | tpmk | 78% | 85% | 74% | 68% | 50–100bb | g5 |
| KK | pp1 | 61% | 30% | 0% | 70% | 50–100bb | g6 |
| QQ | pp1 | 62% | 34% | 0% | 70% | 50–100bb | g6 |
| TT | pp1 | 63% | 36% | 0% | 70% | 50–100bb | g6 |
| JJ | pp1 | 63% | 35% | 0% | 69% | 50–100bb | g6 |
| 99 | pp1 | 62% | 34% | 0% | 70% | 50–100bb | g7 |
| T8 | mp | 58% | 29% | 0% | 70% | 50–100bb | g7 |
| 98 | mp | 57% | 27% | 0% | 70% | 50–100bb | g7 |
| J8 | mp | 57% | 28% | 0% | 69% | 50–100bb | g7 |
| K8 | mp | 60% | 29% | 0% | 68% | 50–100bb | g7 |
| Q8 | mp | 58% | 29% | 0% | 67% | 50–100bb | g7 |
| T7 | bp | 49% | 20% | 0% | 70% | 50–100bb | g8 |
| K7 | bp | 52% | 19% | 0% | 69% | 50–100bb | g8 |
| 97 | bp | 52% | 20% | 0% | 69% | 50–100bb | g8 |
| Q7 | bp | 50% | 20% | 0% | 69% | 50–100bb | g8 |
| J7 | bp | 49% | 19% | 0% | 68% | 50–100bb | g8 |
| 75 | bp | 49% | 18% | 0% | 67% | 50–100bb | g8 |
| K6 | bp | 46% | 14% | 0% | 67% | 50–100bb | g8 |
| 96 | bp | 47% | 15% | 0% | 64% | 50–100bb | g8 |
| 65 | bp | 44% | 14% | 0% | 63% | 50–100bb | g8 |
| Q6 | bp | 45% | 15% | 0% | 63% | 50–100bb | g8 |
| 64 | bp | 44% | 13% | 0% | 62% | 50–100bb | g8 |
| 44 | pp3 | 41% | 9% | 0% | 61% | 50–100bb | g8 |
| 55 | pp3 | 43% | 12% | 0% | 59% | 50–100bb | g8 |
| 33 | pp3 | 37% | 7% | 0% | 59% | 50–100bb | g8 |
| K2 | bp | 34% | 4% | 0% | 54% | 50–100bb | g8 |
