# KQ4-Ad-7c@xx river (K♦ Q♦ 4♠ A♦ 7♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: JT–J7, T9–T7, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 98% | 100% | 100% | 92% |
| g2 | 25–50bb | Straights | JT | 92% | 100% | 99% | 71% |
| g3 | 15–25bb | Sets | AA–QQ, 77, 44 | 91% | 100% | 99% | 66% |
| g4 | 15–25bb | Two pair | AK, AQ, A7, A4, KQ, K7, K4, Q7 | 88% | 96% | 94% | 66% |
| g5 | 0–5bb | Top pair | AJ–A8, A6, A5, A3, A2 | 75% | 64% | 41% | 66% |
| g6 | 0–5bb | Second pair | KJ–K8, K6, K5, K3, K2 | 58% | 17% | 0% | 66% |
| g7 | 0–5bb | Small pairs | JJ–88, 66, 55, 33, 22, QJ–Q8, Q6, Q5, J7, T7, 97, 87, 76, 75, 64, 54, 43 | 36% | 2% | 0% | 63% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| JT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| T8+fl | flush | 98% | 100% | 100% | 93% | 50–100bb | g1 |
| T7+fl | flush | 98% | 100% | 100% | 93% | 50–100bb | g1 |
| T9+fl | flush | 98% | 100% | 100% | 92% | 50–100bb | g1 |
| 96+fl | flush | 98% | 100% | 100% | 90% | 50–100bb | g1 |
| 97+fl | flush | 98% | 100% | 100% | 90% | 50–100bb | g1 |
| 65+fl | flushlo | 97% | 100% | 100% | 90% | 50–100bb | g1 |
| 87+fl | flushlo | 98% | 100% | 100% | 89% | 50–100bb | g1 |
| 86+fl | flushlo | 98% | 100% | 100% | 89% | 50–100bb | g1 |
| 98+fl | flush | 98% | 100% | 100% | 89% | 50–100bb | g1 |
| 76+fl | flushlo | 98% | 100% | 100% | 89% | 50–100bb | g1 |
| 75+fl | flushlo | 97% | 100% | 100% | 87% | 50–100bb | g1 |
| 64+fl | flushlo | 96% | 100% | 100% | 85% | 50–100bb | g1 |
| 54+fl | flushlo | 96% | 100% | 100% | 82% | 50–100bb | g1 |
| 43+fl | flushlo | 95% | 100% | 100% | 80% | 50–100bb | g1 |
| JT | straight | 92% | 100% | 99% | 71% | 50–100bb | g2 |
| 44 | twopair | 91% | 100% | 99% | 67% | 50–100bb | g3 |
| QQ | twopair | 90% | 100% | 100% | 66% | 50–100bb | g3 |
| AA | twopair | 90% | 99% | 99% | 66% | 50–100bb | g3 |
| KK | twopair | 90% | 100% | 99% | 66% | 50–100bb | g3 |
| 77 | twopair | 92% | 100% | 100% | 65% | 50–100bb | g3 |
| A4 | twopair | 88% | 94% | 91% | 67% | 50–100bb | g4 |
| K7 | twopair | 86% | 93% | 91% | 66% | 50–100bb | g4 |
| AK | twopair | 89% | 99% | 99% | 66% | 50–100bb | g4 |
| A7 | twopair | 90% | 98% | 97% | 66% | 50–100bb | g4 |
| K4 | twopair | 85% | 93% | 90% | 66% | 50–100bb | g4 |
| AQ | twopair | 89% | 99% | 99% | 66% | 50–100bb | g4 |
| KQ | twopair | 85% | 91% | 89% | 65% | 50–100bb | g4 |
| Q7 | twopair | 85% | 93% | 91% | 65% | 50–100bb | g4 |
| AT | tpmk | 80% | 87% | 80% | 67% | 50–100bb | g5 |
| AJ | tpmk | 82% | 91% | 88% | 66% | 50–100bb | g5 |
| A5 | tpmk | 71% | 49% | 17% | 66% | 50–100bb | g5 |
| A9 | tpmk | 77% | 79% | 63% | 66% | 50–100bb | g5 |
| A2 | tpmk | 69% | 41% | 4% | 65% | 50–100bb | g5 |
| A3 | tpmk | 71% | 42% | 4% | 65% | 50–100bb | g5 |
| A6 | tpmk | 74% | 57% | 30% | 65% | 50–100bb | g5 |
| A8 | tpmk | 76% | 67% | 44% | 65% | 50–100bb | g5 |
| KT | mp | 59% | 18% | 0% | 67% | 50–100bb | g6 |
| KJ | mp | 62% | 22% | 0% | 67% | 50–100bb | g6 |
| K9 | mp | 59% | 16% | 0% | 66% | 50–100bb | g6 |
| K8 | mp | 56% | 16% | 0% | 65% | 50–100bb | g6 |
| K2 | mp | 54% | 11% | 0% | 65% | 50–100bb | g6 |
| K6 | mp | 55% | 14% | 0% | 64% | 50–100bb | g6 |
| K3 | mp | 52% | 12% | 0% | 64% | 50–100bb | g6 |
| K5 | mp | 52% | 13% | 0% | 63% | 50–100bb | g6 |
| TT | pp3 | 37% | 1% | 0% | 69% | 50–100bb | g7 |
| QJ | bp | 47% | 6% | 0% | 68% | 50–100bb | g7 |
| JJ | pp3 | 37% | 1% | 0% | 68% | 50–100bb | g7 |
| QT | bp | 46% | 4% | 0% | 68% | 50–100bb | g7 |
| Q9 | bp | 43% | 3% | 0% | 67% | 50–100bb | g7 |
| 99 | pp3 | 35% | 1% | 0% | 66% | 50–100bb | g7 |
| 88 | spp | 34% | 1% | 0% | 65% | 50–100bb | g7 |
| Q8 | bp | 41% | 2% | 0% | 65% | 50–100bb | g7 |
| Q5 | bp | 38% | 1% | 0% | 65% | 50–100bb | g7 |
| T7 | bp | 34% | 0% | 0% | 64% | 50–100bb | g7 |
| Q6 | bp | 40% | 2% | 0% | 63% | 50–100bb | g7 |
| J7 | bp | 34% | 1% | 0% | 62% | 50–100bb | g7 |
| 97 | bp | 33% | 0% | 0% | 61% | 50–100bb | g7 |
| 87 | bp | 33% | 1% | 0% | 60% | 50–100bb | g7 |
| 76 | bp | 30% | 0% | 0% | 58% | 50–100bb | g7 |
| 75 | bp | 30% | 0% | 0% | 57% | 50–100bb | g7 |
| 55 | spp | 26% | 0% | 0% | 55% | 50–100bb | g7 |
| 43 | bp | 23% | 0% | 0% | 55% | 50–100bb | g7 |
| 66 | spp | 28% | 0% | 0% | 54% | 50–100bb | g7 |
| 64 | bp | 25% | 0% | 0% | 54% | 50–100bb | g7 |
| 22 | spp | 20% | 0% | 0% | 53% | 50–100bb | g7 |
| 54 | bp | 25% | 0% | 0% | 53% | 50–100bb | g7 |
| 33 | spp | 22% | 0% | 0% | 52% | 50–100bb | g7 |
