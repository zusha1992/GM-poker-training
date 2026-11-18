# A76-Qc-5h@bx river (A♥ 7♥ 6♣ Q♣ 5♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: KQ–K8, K6, K4–K2, QJ–Q8, Q6, JT–J8, T9, T8, 98, 96, 86, 64, 43 | 99% | 100% | 100% | 96% |
| g2 | 25–50bb | Straights | 98, 43 | 93% | 99% | 99% | 78% |
| g3 | 15–25bb | Sets | AA, QQ, 77–55 | 91% | 99% | 99% | 72% |
| g4 | 15–25bb | Two pair | AQ, A7–A5, Q7–Q5, 76, 75, 65 | 86% | 90% | 89% | 69% |
| g5 | 0–5bb | Top pair | AK, AJ–A8, A4–A2 | 65% | 47% | 41% | 57% |
| g6 | 0–5bb | Big pocket pairs | KK | 44% | 6% | 0% | 42% |
| g7 | 0–5bb | Second pair | KQ, QJ–Q8 | 46% | 6% | 0% | 38% |
| g8 | 0–5bb | Small pairs | JJ–88, 44–22, K7–K5, J7, T7, 97, 96, 87, 86, 64, 54 | 32% | 3% | 0% | 23% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| KQ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K6+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K4+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K3+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K2+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| Q6+fl | flush | 99% | 100% | 100% | 97% | 50–100bb | g1 |
| QJ+fl | flush | 98% | 100% | 100% | 96% | 50–100bb | g1 |
| QT+fl | flush | 99% | 100% | 100% | 96% | 50–100bb | g1 |
| Q8+fl | flush | 98% | 100% | 100% | 96% | 50–100bb | g1 |
| Q9+fl | flush | 99% | 100% | 100% | 96% | 50–100bb | g1 |
| 64+fl | flushlo | 98% | 100% | 100% | 94% | 50–100bb | g1 |
| 86+fl | flushlo | 98% | 100% | 100% | 94% | 50–100bb | g1 |
| 96+fl | flushlo | 97% | 100% | 100% | 94% | 50–100bb | g1 |
| J8+fl | flush | 98% | 100% | 100% | 93% | 50–100bb | g1 |
| JT+fl | flush | 97% | 100% | 100% | 93% | 50–100bb | g1 |
| J9+fl | flush | 98% | 100% | 100% | 92% | 50–100bb | g1 |
| T9+fl | flushlo | 97% | 100% | 100% | 90% | 50–100bb | g1 |
| T8+fl | flushlo | 97% | 100% | 100% | 89% | 50–100bb | g1 |
| 98+fl | flushlo | 96% | 100% | 100% | 88% | 50–100bb | g1 |
| 43+fl | flushlo | 95% | 100% | 100% | 87% | 50–100bb | g1 |
| 98 | straight | 93% | 99% | 99% | 79% | 50–100bb | g2 |
| 43 | straight | 92% | 99% | 99% | 76% | 50–100bb | g2 |
| 66 | twopair | 93% | 99% | 99% | 75% | 50–100bb | g3 |
| 77 | twopair | 91% | 99% | 99% | 74% | 50–100bb | g3 |
| 55 | twopair | 90% | 99% | 99% | 73% | 50–100bb | g3 |
| QQ | twopair | 92% | 99% | 99% | 72% | 50–100bb | g3 |
| AA | twopair | 88% | 97% | 97% | 67% | 50–100bb | g3 |
| A5 | twopair | 86% | 87% | 85% | 70% | 50–100bb | g4 |
| A6 | twopair | 88% | 92% | 92% | 70% | 50–100bb | g4 |
| Q7 | twopair | 81% | 79% | 78% | 70% | 50–100bb | g4 |
| A7 | twopair | 88% | 95% | 95% | 69% | 50–100bb | g4 |
| 75 | twopair | 81% | 83% | 83% | 69% | 50–100bb | g4 |
| Q5 | twopair | 83% | 82% | 82% | 68% | 50–100bb | g4 |
| AQ | twopair | 89% | 96% | 96% | 68% | 50–100bb | g4 |
| 65 | twopair | 81% | 84% | 83% | 67% | 50–100bb | g4 |
| 76 | twopair | 81% | 82% | 79% | 67% | 50–100bb | g4 |
| Q6 | twopair | 83% | 80% | 80% | 65% | 50–100bb | g4 |
| AJ | tpmk | 75% | 76% | 74% | 66% | 50–100bb | g5 |
| AK | tpgk | 76% | 78% | 75% | 63% | 50–100bb | g5 |
| AT | tpmk | 71% | 69% | 67% | 63% | 50–100bb | g5 |
| A9 | tpmk | 66% | 56% | 50% | 58% | 50–100bb | g5 |
| A2 | tpmk | 56% | 19% | 11% | 50% | 0–5bb | g5 |
| A8 | tpmk | 61% | 37% | 30% | 54% | 50–100bb | g5 |
| A4 | tpmk | 57% | 18% | 10% | 53% | 50–100bb | g5 |
| A3 | tpmk | 56% | 19% | 11% | 51% | 50–100bb | g5 |
| KK | pp1 | 44% | 6% | 0% | 42% | 0–5bb | g6 |
| Q9 | mp | 46% | 6% | 0% | 37% | 0–5bb | g7 |
| KQ | mp | 46% | 6% | 0% | 39% | 0–5bb | g7 |
| QJ | mp | 45% | 6% | 0% | 37% | 0–5bb | g7 |
| Q8 | mp | 45% | 5% | 0% | 35% | 0–5bb | g7 |
| QT | mp | 44% | 6% | 0% | 37% | 0–5bb | g7 |
| JJ | pp2 | 46% | 5% | 0% | 31% | 0–5bb | g8 |
| TT | pp2 | 43% | 6% | 0% | 33% | 0–5bb | g8 |
| 99 | pp2 | 42% | 6% | 0% | 33% | 0–5bb | g8 |
| 88 | pp2 | 41% | 5% | 0% | 31% | 0–5bb | g8 |
| K7 | bp | 38% | 4% | 0% | 28% | 0–5bb | g8 |
| J7 | bp | 37% | 4% | 0% | 29% | 0–5bb | g8 |
| 97 | bp | 35% | 4% | 0% | 29% | 0–5bb | g8 |
| T7 | bp | 34% | 4% | 0% | 29% | 0–5bb | g8 |
| 87 | bp | 33% | 4% | 0% | 30% | 0–5bb | g8 |
| K6 | bp | 27% | 2% | 0% | 24% | 0–5bb | g8 |
| 86 | bp | 27% | 2% | 0% | 17% | 0–5bb | g8 |
| 96 | bp | 26% | 1% | 0% | 18% | 0–5bb | g8 |
| 64 | bp | 25% | 1% | 0% | 14% | 0–5bb | g8 |
| K5 | bp | 22% | 0% | 0% | 9% | 0–5bb | g8 |
| 54 | bp | 22% | 0% | 0% | 11% | 0–5bb | g8 |
| 44 | pp3 | 22% | 0% | 0% | 12% | 0–5bb | g8 |
| 33 | pp3 | 18% | 0% | 0% | 12% | 0–5bb | g8 |
| 22 | pp3 | 15% | 0% | 0% | 9% | 0–5bb | g8 |
