# KQ4-Ad-7c@x75 river (K♦ Q♦ 4♠ A♦ 7♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: JT–J7, T9–T7, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 100% | 100% | 100% | 99% |
| g2 | 25–50bb | Straights | JT | 97% | 100% | 100% | 87% |
| g3 | 15–25bb | Sets | AA–QQ, 77, 44 | 93% | 100% | 100% | 64% |
| g4 | 15–25bb | Two pair | AK, AQ, A7, A4, KQ, K7, K4, Q7 | 88% | 93% | 92% | 52% |
| g5 | 0–5bb | Top pair | AJ–A8, A6, A5, A3, A2 | 56% | 42% | 33% | 28% |
| g6 | 0–5bb | Second pair | KJ–K8, K6, K5, K3, K2 | 21% | 3% | 0% | 9% |
| g7 | 0–5bb | Small pairs | JJ–88, 66, 55, 33, 22, QJ–Q8, Q6, Q5, J7, T7, 97, 87, 76, 75, 64, 54, 43 | 8% | 0% | 0% | 7% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| JT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| T9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| T8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| T7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 97+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 86+fl | flushlo | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 75+fl | flushlo | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 76+fl | flushlo | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 65+fl | flushlo | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 98+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 87+fl | flushlo | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 96+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 64+fl | flushlo | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 54+fl | flushlo | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 43+fl | flushlo | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| JT | straight | 97% | 100% | 100% | 87% | 50–100bb | g2 |
| QQ | twopair | 93% | 100% | 100% | 69% | 50–100bb | g3 |
| KK | twopair | 93% | 100% | 100% | 67% | 50–100bb | g3 |
| 44 | twopair | 94% | 100% | 100% | 66% | 50–100bb | g3 |
| 77 | twopair | 94% | 100% | 100% | 66% | 50–100bb | g3 |
| AA | twopair | 91% | 100% | 100% | 51% | 50–100bb | g3 |
| A4 | twopair | 87% | 91% | 89% | 45% | 25–50bb | g4 |
| K4 | twopair | 82% | 85% | 85% | 44% | 25–50bb | g4 |
| Q7 | twopair | 81% | 85% | 85% | 47% | 25–50bb | g4 |
| K7 | twopair | 84% | 86% | 84% | 46% | 25–50bb | g4 |
| KQ | twopair | 84% | 84% | 83% | 43% | 25–50bb | g4 |
| AQ | twopair | 92% | 100% | 100% | 61% | 50–100bb | g4 |
| AK | twopair | 92% | 100% | 100% | 60% | 50–100bb | g4 |
| A7 | twopair | 91% | 97% | 97% | 56% | 50–100bb | g4 |
| AJ | tpmk | 76% | 78% | 75% | 45% | 25–50bb | g5 |
| AT | tpmk | 72% | 68% | 63% | 44% | 25–50bb | g5 |
| A8 | tpmk | 57% | 43% | 34% | 30% | 0–5bb | g5 |
| A9 | tpmk | 65% | 54% | 48% | 36% | 5–15bb | g5 |
| A6 | tpmk | 51% | 34% | 24% | 23% | 0–5bb | g5 |
| A5 | tpmk | 45% | 26% | 14% | 18% | 0–5bb | g5 |
| A3 | tpmk | 40% | 17% | 4% | 15% | 0–5bb | g5 |
| A2 | tpmk | 40% | 17% | 3% | 16% | 0–5bb | g5 |
| KJ | mp | 26% | 4% | 0% | 11% | 0–5bb | g6 |
| KT | mp | 21% | 2% | 0% | 10% | 0–5bb | g6 |
| K9 | mp | 19% | 2% | 0% | 9% | 0–5bb | g6 |
| K8 | mp | 19% | 2% | 0% | 7% | 0–5bb | g6 |
| K2 | mp | 18% | 2% | 0% | 6% | 0–5bb | g6 |
| K5 | mp | 18% | 2% | 0% | 5% | 0–5bb | g6 |
| K6 | mp | 18% | 2% | 0% | 6% | 0–5bb | g6 |
| K3 | mp | 18% | 2% | 0% | 6% | 0–5bb | g6 |
| QJ | bp | 13% | 0% | 0% | 7% | 0–5bb | g7 |
| QT | bp | 11% | 0% | 0% | 7% | 0–5bb | g7 |
| TT | pp3 | 8% | 0% | 0% | 7% | 0–5bb | g7 |
| JJ | pp3 | 8% | 0% | 0% | 8% | 0–5bb | g7 |
| Q8 | bp | 8% | 0% | 0% | 8% | 0–5bb | g7 |
| 99 | pp3 | 8% | 0% | 0% | 7% | 0–5bb | g7 |
| Q9 | bp | 8% | 0% | 0% | 7% | 0–5bb | g7 |
| Q6 | bp | 8% | 0% | 0% | 6% | 0–5bb | g7 |
| Q5 | bp | 7% | 0% | 0% | 6% | 0–5bb | g7 |
| J7 | bp | 7% | 0% | 0% | 8% | 0–5bb | g7 |
| 88 | spp | 7% | 0% | 0% | 6% | 0–5bb | g7 |
| T7 | bp | 7% | 0% | 0% | 8% | 0–5bb | g7 |
| 97 | bp | 7% | 0% | 0% | 8% | 0–5bb | g7 |
| 76 | bp | 6% | 0% | 0% | 6% | 0–5bb | g7 |
| 75 | bp | 6% | 0% | 0% | 6% | 0–5bb | g7 |
| 87 | bp | 6% | 0% | 0% | 7% | 0–5bb | g7 |
| 66 | spp | 5% | 0% | 0% | 6% | 0–5bb | g7 |
| 55 | spp | 5% | 0% | 0% | 5% | 0–5bb | g7 |
| 64 | bp | 5% | 0% | 0% | 5% | 0–5bb | g7 |
| 43 | bp | 4% | 0% | 0% | 5% | 0–5bb | g7 |
| 33 | spp | 4% | 0% | 0% | 4% | 0–5bb | g7 |
| 22 | spp | 4% | 0% | 0% | 4% | 0–5bb | g7 |
| 54 | bp | 4% | 0% | 0% | 4% | 0–5bb | g7 |
