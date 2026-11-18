# KQ4-Ad-7c@b75 river (K♦ Q♦ 4♠ A♦ 7♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: JT–J7, T9–T7, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 100% | 100% | 100% | 99% |
| g2 | 25–50bb | Straights | JT | 96% | 100% | 100% | 86% |
| g3 | 15–25bb | Sets | AA–QQ, 77, 44 | 92% | 100% | 100% | 61% |
| g4 | 15–25bb | Two pair | AK, AQ, A7, A4, KQ, K7, K4, Q7 | 87% | 92% | 91% | 51% |
| g5 | 0–5bb | Top pair | AJ–A8, A6, A5, A3, A2 | 63% | 40% | 21% | 33% |
| g6 | 0–5bb | Second pair | KJ–K8, K6, K5, K3, K2 | 35% | 9% | 0% | 15% |
| g7 | 0–5bb | Small pairs | JJ–88, 66, 55, 33, 22, QJ–Q8, Q6, Q5, J7, T7, 97, 87, 76, 75, 64, 54, 43 | 7% | 0% | 0% | 3% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| JT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| T8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| T7+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| T9+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| 64+fl | flushlo | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| 54+fl | flushlo | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| 43+fl | flushlo | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| 87+fl | flushlo | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 96+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 86+fl | flushlo | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 98+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 75+fl | flushlo | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 65+fl | flushlo | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 97+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 76+fl | flushlo | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| JT | straight | 96% | 100% | 100% | 86% | 50–100bb | g2 |
| QQ | twopair | 91% | 100% | 100% | 64% | 50–100bb | g3 |
| 77 | twopair | 92% | 100% | 100% | 64% | 50–100bb | g3 |
| KK | twopair | 91% | 100% | 100% | 62% | 50–100bb | g3 |
| 44 | twopair | 93% | 100% | 100% | 61% | 50–100bb | g3 |
| AA | twopair | 89% | 100% | 100% | 54% | 50–100bb | g3 |
| A4 | twopair | 88% | 92% | 90% | 48% | 25–50bb | g4 |
| K4 | twopair | 84% | 86% | 84% | 42% | 25–50bb | g4 |
| Q7 | twopair | 83% | 83% | 81% | 44% | 25–50bb | g4 |
| K7 | twopair | 84% | 83% | 80% | 42% | 25–50bb | g4 |
| KQ | twopair | 81% | 81% | 79% | 41% | 25–50bb | g4 |
| AQ | twopair | 90% | 100% | 100% | 58% | 50–100bb | g4 |
| AK | twopair | 90% | 100% | 100% | 58% | 50–100bb | g4 |
| A7 | twopair | 90% | 99% | 98% | 56% | 50–100bb | g4 |
| AJ | tpmk | 82% | 77% | 70% | 44% | 25–50bb | g5 |
| A9 | tpmk | 64% | 42% | 23% | 31% | 0–5bb | g5 |
| A8 | tpmk | 60% | 35% | 15% | 31% | 0–5bb | g5 |
| A6 | tpmk | 58% | 31% | 9% | 30% | 0–5bb | g5 |
| A5 | tpmk | 57% | 28% | 5% | 29% | 0–5bb | g5 |
| AT | tpmk | 73% | 57% | 43% | 35% | 5–15bb | g5 |
| A3 | tpmk | 56% | 24% | 2% | 30% | 0–5bb | g5 |
| A2 | tpmk | 55% | 24% | 2% | 30% | 0–5bb | g5 |
| KJ | mp | 42% | 11% | 0% | 21% | 0–5bb | g6 |
| KT | mp | 37% | 10% | 0% | 17% | 0–5bb | g6 |
| K9 | mp | 32% | 7% | 0% | 12% | 0–5bb | g6 |
| K6 | mp | 31% | 7% | 0% | 11% | 0–5bb | g6 |
| K3 | mp | 31% | 7% | 0% | 12% | 0–5bb | g6 |
| K2 | mp | 31% | 7% | 0% | 11% | 0–5bb | g6 |
| K5 | mp | 31% | 7% | 0% | 11% | 0–5bb | g6 |
| K8 | mp | 30% | 8% | 0% | 12% | 0–5bb | g6 |
| QJ | bp | 19% | 3% | 0% | 7% | 0–5bb | g7 |
| QT | bp | 12% | 0% | 0% | 5% | 0–5bb | g7 |
| Q9 | bp | 7% | 0% | 0% | 3% | 0–5bb | g7 |
| TT | pp3 | 7% | 0% | 0% | 4% | 0–5bb | g7 |
| JJ | pp3 | 7% | 0% | 0% | 4% | 0–5bb | g7 |
| Q6 | bp | 7% | 0% | 0% | 3% | 0–5bb | g7 |
| Q5 | bp | 6% | 0% | 0% | 3% | 0–5bb | g7 |
| 99 | pp3 | 5% | 0% | 0% | 3% | 0–5bb | g7 |
| Q8 | bp | 5% | 0% | 0% | 3% | 0–5bb | g7 |
| 87 | bp | 3% | 0% | 0% | 4% | 0–5bb | g7 |
| 88 | spp | 3% | 0% | 0% | 3% | 0–5bb | g7 |
| J7 | bp | 2% | 0% | 0% | 3% | 0–5bb | g7 |
| T7 | bp | 2% | 0% | 0% | 4% | 0–5bb | g7 |
| 75 | bp | 2% | 0% | 0% | 3% | 0–5bb | g7 |
| 97 | bp | 2% | 0% | 0% | 3% | 0–5bb | g7 |
| 76 | bp | 2% | 0% | 0% | 3% | 0–5bb | g7 |
| 55 | spp | 2% | 0% | 0% | 3% | 0–5bb | g7 |
| 66 | spp | 2% | 0% | 0% | 3% | 0–5bb | g7 |
| 64 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 43 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 54 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 22 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 33 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
