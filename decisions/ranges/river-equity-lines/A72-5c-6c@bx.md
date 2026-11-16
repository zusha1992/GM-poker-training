# A72-5c-6c@bx river (A♣ 7♦ 2♠ 5♣ 6♣): equity groups

Generated 2026-11-16 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♣ flushes: KQ–K7, K4–K2, QJ–Q7, JT–J7, T9–T7, 98, 97, 87, 43 | 97% | 100% | 100% | 93% |
| g2 | 25–50bb | Straights | 98, 43 | 91% | 99% | 99% | 76% |
| g3 | 15–25bb | Sets | AA, 77–55, 22 | 89% | 97% | 97% | 76% |
| g4 | 15–25bb | Two pair | A7–A5, A2, 76, 75, 65 | 81% | 84% | 81% | 74% |
| g5 | 0–5bb | Big pocket pairs | KK–TT | 44% | 8% | 0% | 60% |
| g6 | 0–5bb | Top pair | AK–A8, A4, A3 | 64% | 48% | 42% | 69% |
| g7 | 0–5bb | Medium pairs & second pair | 99, 88, K7, Q7, J7, T7, 97, 87 | 39% | 6% | 0% | 55% |
| g8 | 0–5bb | Small pairs | 44, 33, K6, K5, K2, Q6, Q5, 96, 86, 64, 54 | 26% | 3% | 0% | 33% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| KQ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K4+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K3+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K2+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| Q7+fl | flush | 98% | 100% | 100% | 94% | 50–100bb | g1 |
| QT+fl | flush | 97% | 99% | 99% | 93% | 50–100bb | g1 |
| Q9+fl | flush | 97% | 99% | 100% | 93% | 50–100bb | g1 |
| Q8+fl | flush | 97% | 100% | 99% | 93% | 50–100bb | g1 |
| J7+fl | flush | 97% | 100% | 100% | 92% | 50–100bb | g1 |
| QJ+fl | flush | 97% | 99% | 99% | 92% | 50–100bb | g1 |
| T7+fl | flushlo | 96% | 100% | 100% | 90% | 50–100bb | g1 |
| 97+fl | flushlo | 95% | 100% | 100% | 89% | 50–100bb | g1 |
| JT+fl | flush | 96% | 99% | 99% | 89% | 50–100bb | g1 |
| 87+fl | flushlo | 95% | 100% | 100% | 88% | 50–100bb | g1 |
| J9+fl | flush | 96% | 99% | 99% | 87% | 50–100bb | g1 |
| J8+fl | flush | 96% | 99% | 99% | 87% | 50–100bb | g1 |
| T9+fl | flushlo | 94% | 99% | 99% | 84% | 50–100bb | g1 |
| T8+fl | flushlo | 95% | 99% | 99% | 83% | 50–100bb | g1 |
| 98+fl | flushlo | 93% | 99% | 99% | 80% | 50–100bb | g1 |
| 43+fl | flushlo | 91% | 99% | 99% | 77% | 50–100bb | g1 |
| 98 | straight | 91% | 99% | 99% | 76% | 50–100bb | g2 |
| 43 | straight | 90% | 99% | 99% | 75% | 50–100bb | g2 |
| 77 | twopair | 93% | 100% | 100% | 81% | 50–100bb | g3 |
| 66 | twopair | 91% | 99% | 99% | 77% | 50–100bb | g3 |
| AA | twopair | 88% | 98% | 97% | 75% | 50–100bb | g3 |
| 55 | twopair | 87% | 95% | 96% | 75% | 50–100bb | g3 |
| 22 | twopair | 86% | 94% | 93% | 74% | 50–100bb | g3 |
| 65 | twopair | 79% | 81% | 80% | 77% | 50–100bb | g4 |
| A6 | twopair | 83% | 90% | 88% | 74% | 50–100bb | g4 |
| A5 | twopair | 80% | 82% | 79% | 74% | 50–100bb | g4 |
| A7 | twopair | 84% | 92% | 91% | 73% | 50–100bb | g4 |
| A2 | twopair | 77% | 74% | 70% | 73% | 50–100bb | g4 |
| 76 | twopair | 77% | 78% | 76% | 72% | 50–100bb | g4 |
| 75 | twopair | 77% | 77% | 76% | 70% | 50–100bb | g4 |
| TT | pp1 | 46% | 8% | 0% | 62% | 50–100bb | g5 |
| JJ | pp1 | 44% | 8% | 0% | 61% | 50–100bb | g5 |
| QQ | pp1 | 44% | 7% | 0% | 59% | 50–100bb | g5 |
| KK | pp1 | 43% | 7% | 0% | 58% | 50–100bb | g5 |
| AK | tpgk | 73% | 72% | 69% | 73% | 50–100bb | g6 |
| AQ | tpgk | 73% | 73% | 69% | 73% | 50–100bb | g6 |
| AJ | tpmk | 71% | 70% | 68% | 72% | 50–100bb | g6 |
| AT | tpmk | 68% | 58% | 54% | 71% | 50–100bb | g6 |
| A9 | tpmk | 64% | 47% | 40% | 70% | 50–100bb | g6 |
| A8 | tpmk | 58% | 32% | 25% | 67% | 50–100bb | g6 |
| A4 | tpwk | 55% | 19% | 11% | 64% | 50–100bb | g6 |
| A3 | tpwk | 51% | 12% | 2% | 63% | 50–100bb | g6 |
| 99 | pp1 | 46% | 8% | 0% | 62% | 50–100bb | g7 |
| 88 | pp1 | 41% | 7% | 0% | 62% | 50–100bb | g7 |
| K7 | mp | 36% | 6% | 0% | 55% | 50–100bb | g7 |
| Q7 | mp | 36% | 6% | 0% | 47% | 0–5bb | g7 |
| T7 | mp | 35% | 6% | 0% | 44% | 0–5bb | g7 |
| 97 | mp | 35% | 6% | 0% | 43% | 0–5bb | g7 |
| J7 | mp | 34% | 5% | 0% | 44% | 0–5bb | g7 |
| 87 | mp | 34% | 5% | 0% | 42% | 0–5bb | g7 |
| 96 | bp | 32% | 5% | 0% | 35% | 0–5bb | g8 |
| 86 | bp | 31% | 4% | 0% | 35% | 0–5bb | g8 |
| Q6 | bp | 30% | 5% | 0% | 35% | 0–5bb | g8 |
| 64 | bp | 29% | 3% | 0% | 36% | 0–5bb | g8 |
| K6 | bp | 29% | 4% | 0% | 34% | 0–5bb | g8 |
| Q5 | bp | 29% | 4% | 0% | 35% | 0–5bb | g8 |
| 54 | bp | 29% | 3% | 0% | 36% | 0–5bb | g8 |
| K5 | bp | 27% | 4% | 0% | 32% | 0–5bb | g8 |
| 44 | pp3 | 26% | 2% | 0% | 35% | 0–5bb | g8 |
| 33 | pp3 | 18% | 1% | 0% | 28% | 0–5bb | g8 |
| K2 | bp | 12% | 0% | 0% | 17% | 0–5bb | g8 |
