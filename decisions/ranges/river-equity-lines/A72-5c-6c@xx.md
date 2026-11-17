# A72-5c-6c@xx river (A♣ 7♦ 2♠ 5♣ 6♣): equity groups

Generated 2026-11-17 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♣ flushes: KQ–K7, K4–K2, QJ–Q7, JT–J7, T9–T7, 98, 97, 87, 43 | 98% | 99% | 98% | 91% |
| g2 | 25–50bb | Straights | 98, 43 | 91% | 96% | 94% | 67% |
| g3 | 15–25bb | Sets | AA, 77–55, 22 | 89% | 95% | 91% | 62% |
| g4 | 15–25bb | Two pair | A7–A5, A2, 76, 75, 65 | 85% | 86% | 76% | 61% |
| g5 | 0–5bb | Big pocket pairs | KK–TT | 64% | 35% | 0% | 59% |
| g6 | 0–5bb | Top pair | AK–A8, A4, A3 | 76% | 66% | 40% | 61% |
| g7 | 0–5bb | Medium pairs & second pair | 99, 88, K7, Q7, J7, T7, 97, 87 | 64% | 34% | 0% | 60% |
| g8 | 0–5bb | Small pairs | 44, 33, K6, K5, K2, Q6, Q5, 96, 86, 64, 54 | 53% | 19% | 0% | 51% |

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
| Q7+fl | flush | 98% | 99% | 98% | 90% | 50–100bb | g1 |
| Q8+fl | flush | 98% | 99% | 98% | 90% | 50–100bb | g1 |
| QJ+fl | flush | 98% | 98% | 97% | 89% | 50–100bb | g1 |
| QT+fl | flush | 98% | 99% | 98% | 89% | 50–100bb | g1 |
| Q9+fl | flush | 98% | 98% | 98% | 89% | 50–100bb | g1 |
| JT+fl | flush | 96% | 98% | 96% | 86% | 50–100bb | g1 |
| J8+fl | flush | 96% | 98% | 97% | 86% | 50–100bb | g1 |
| J7+fl | flush | 97% | 99% | 98% | 85% | 50–100bb | g1 |
| J9+fl | flush | 96% | 98% | 96% | 85% | 50–100bb | g1 |
| 87+fl | flushlo | 96% | 99% | 98% | 84% | 50–100bb | g1 |
| 98+fl | flushlo | 95% | 98% | 96% | 84% | 50–100bb | g1 |
| T7+fl | flushlo | 95% | 99% | 98% | 83% | 50–100bb | g1 |
| 97+fl | flushlo | 95% | 98% | 98% | 83% | 50–100bb | g1 |
| T8+fl | flushlo | 96% | 98% | 97% | 83% | 50–100bb | g1 |
| T9+fl | flushlo | 95% | 98% | 96% | 82% | 50–100bb | g1 |
| 43+fl | flushlo | 95% | 98% | 97% | 82% | 50–100bb | g1 |
| 98 | straight | 91% | 97% | 94% | 70% | 50–100bb | g2 |
| 43 | straight | 90% | 96% | 94% | 63% | 50–100bb | g2 |
| AA | twopair | 89% | 95% | 86% | 63% | 50–100bb | g3 |
| 66 | twopair | 89% | 95% | 93% | 62% | 50–100bb | g3 |
| 22 | twopair | 89% | 94% | 90% | 62% | 50–100bb | g3 |
| 77 | twopair | 91% | 97% | 96% | 61% | 50–100bb | g3 |
| 55 | twopair | 88% | 93% | 90% | 61% | 50–100bb | g3 |
| A5 | twopair | 85% | 84% | 73% | 62% | 50–100bb | g4 |
| A2 | twopair | 84% | 83% | 69% | 61% | 50–100bb | g4 |
| A7 | twopair | 88% | 91% | 84% | 61% | 50–100bb | g4 |
| A6 | twopair | 85% | 87% | 77% | 61% | 50–100bb | g4 |
| 76 | twopair | 83% | 85% | 76% | 61% | 50–100bb | g4 |
| 65 | twopair | 83% | 84% | 76% | 60% | 50–100bb | g4 |
| 75 | twopair | 83% | 84% | 76% | 60% | 50–100bb | g4 |
| TT | pp1 | 63% | 37% | 0% | 61% | 50–100bb | g5 |
| JJ | pp1 | 63% | 37% | 0% | 59% | 50–100bb | g5 |
| KK | pp1 | 64% | 31% | 0% | 58% | 50–100bb | g5 |
| QQ | pp1 | 65% | 33% | 0% | 58% | 50–100bb | g5 |
| A9 | tpmk | 75% | 66% | 37% | 63% | 50–100bb | g6 |
| A8 | tpmk | 74% | 54% | 20% | 63% | 50–100bb | g6 |
| A3 | tpwk | 72% | 44% | 2% | 62% | 50–100bb | g6 |
| A4 | tpwk | 72% | 47% | 8% | 62% | 50–100bb | g6 |
| AJ | tpmk | 79% | 81% | 63% | 61% | 50–100bb | g6 |
| AT | tpmk | 77% | 75% | 53% | 61% | 50–100bb | g6 |
| AQ | tpgk | 80% | 81% | 67% | 60% | 50–100bb | g6 |
| AK | tpgk | 79% | 82% | 67% | 60% | 50–100bb | g6 |
| 88 | pp1 | 65% | 34% | 0% | 63% | 50–100bb | g7 |
| 99 | pp1 | 65% | 37% | 0% | 63% | 50–100bb | g7 |
| K7 | mp | 63% | 32% | 0% | 59% | 50–100bb | g7 |
| 97 | mp | 63% | 33% | 0% | 56% | 50–100bb | g7 |
| J7 | mp | 63% | 31% | 0% | 56% | 50–100bb | g7 |
| 87 | mp | 63% | 32% | 0% | 55% | 50–100bb | g7 |
| Q7 | mp | 62% | 32% | 0% | 55% | 50–100bb | g7 |
| T7 | mp | 63% | 34% | 0% | 55% | 50–100bb | g7 |
| Q6 | bp | 58% | 26% | 0% | 49% | 0–5bb | g8 |
| 44 | pp3 | 49% | 13% | 0% | 54% | 50–100bb | g8 |
| Q5 | bp | 53% | 19% | 0% | 48% | 0–5bb | g8 |
| K5 | bp | 52% | 18% | 0% | 46% | 0–5bb | g8 |
| 64 | bp | 58% | 23% | 0% | 52% | 50–100bb | g8 |
| 96 | bp | 59% | 27% | 0% | 52% | 50–100bb | g8 |
| 54 | bp | 52% | 15% | 0% | 51% | 50–100bb | g8 |
| K6 | bp | 58% | 27% | 0% | 51% | 50–100bb | g8 |
| 33 | pp3 | 47% | 9% | 0% | 51% | 50–100bb | g8 |
| 86 | bp | 58% | 26% | 0% | 51% | 50–100bb | g8 |
| K2 | bp | 42% | 7% | 0% | 46% | 0–5bb | g8 |
