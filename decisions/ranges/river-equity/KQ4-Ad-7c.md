# KQ4-Ad-7c river (K♦ Q♦ 4♠ A♦ 7♣): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes, straights & sets | AA–QQ, 77, 44, JT · ♦ flushes: JT–J7, T9–T7, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 96% | 100% | 100% | 83% |
| g2 | 15–25bb | Two pair | AK, AQ, A7, A4, KQ, K7, K4, Q7 | 88% | 93% | 91% | 52% |
| g3 | 0–5bb | Top pair | AJ–A8, A6, A5, A3, A2 | 66% | 43% | 21% | 31% |
| g4 | 0–5bb | Second pair | KJ–K8, K6, K5, K3, K2 | 37% | 11% | 0% | 12% |
| g5 | 0–5bb | Small pairs | JJ–88, 66, 55, 33, 22, QJ–Q8, Q6, Q5, J7, T7, 97, 87, 76, 75, 64, 54, 43 | 6% | 1% | 0% | 3% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| JT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| T9+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| T7+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| T8+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| 43+fl | flushlo | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| 54+fl | flushlo | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| 64+fl | flushlo | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| 87+fl | flushlo | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 96+fl | flush | 100% | 100% | 100% | 98% | 50–100bb | g1 |
| 76+fl | flushlo | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 75+fl | flushlo | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 65+fl | flushlo | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 98+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 97+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 86+fl | flushlo | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| JT | straight | 97% | 100% | 100% | 87% | 50–100bb | g1 |
| QQ | twopair | 93% | 100% | 100% | 66% | 50–100bb | g1 |
| 77 | twopair | 94% | 100% | 100% | 66% | 50–100bb | g1 |
| KK | twopair | 93% | 100% | 100% | 65% | 50–100bb | g1 |
| 44 | twopair | 93% | 100% | 100% | 63% | 50–100bb | g1 |
| AA | twopair | 91% | 100% | 100% | 54% | 50–100bb | g1 |
| A4 | twopair | 88% | 92% | 88% | 49% | 25–50bb | g2 |
| K4 | twopair | 86% | 86% | 83% | 43% | 25–50bb | g2 |
| Q7 | twopair | 83% | 84% | 81% | 45% | 25–50bb | g2 |
| K7 | twopair | 84% | 84% | 81% | 42% | 25–50bb | g2 |
| KQ | twopair | 82% | 81% | 79% | 42% | 25–50bb | g2 |
| AQ | twopair | 91% | 100% | 100% | 60% | 50–100bb | g2 |
| AK | twopair | 92% | 100% | 100% | 59% | 50–100bb | g2 |
| A7 | twopair | 92% | 98% | 97% | 57% | 50–100bb | g2 |
| AJ | tpmk | 82% | 78% | 70% | 44% | 25–50bb | g3 |
| A9 | tpmk | 67% | 45% | 24% | 29% | 0–5bb | g3 |
| A8 | tpmk | 63% | 39% | 14% | 28% | 0–5bb | g3 |
| A6 | tpmk | 61% | 34% | 9% | 28% | 0–5bb | g3 |
| AT | tpmk | 74% | 60% | 44% | 35% | 5–15bb | g3 |
| A5 | tpmk | 59% | 32% | 5% | 28% | 0–5bb | g3 |
| A2 | tpmk | 59% | 30% | 2% | 28% | 0–5bb | g3 |
| A3 | tpmk | 58% | 30% | 2% | 27% | 0–5bb | g3 |
| KJ | mp | 44% | 14% | 0% | 17% | 0–5bb | g4 |
| KT | mp | 39% | 12% | 0% | 13% | 0–5bb | g4 |
| K9 | mp | 35% | 10% | 0% | 10% | 0–5bb | g4 |
| K6 | mp | 34% | 11% | 0% | 8% | 0–5bb | g4 |
| K8 | mp | 34% | 10% | 0% | 10% | 0–5bb | g4 |
| K3 | mp | 33% | 10% | 0% | 9% | 0–5bb | g4 |
| K2 | mp | 33% | 10% | 0% | 9% | 0–5bb | g4 |
| K5 | mp | 32% | 10% | 0% | 9% | 0–5bb | g4 |
| QJ | bp | 21% | 4% | 0% | 6% | 0–5bb | g5 |
| QT | bp | 12% | 1% | 0% | 4% | 0–5bb | g5 |
| Q9 | bp | 6% | 0% | 0% | 3% | 0–5bb | g5 |
| TT | pp3 | 6% | 0% | 0% | 4% | 0–5bb | g5 |
| JJ | pp3 | 5% | 0% | 0% | 3% | 0–5bb | g5 |
| Q5 | bp | 5% | 0% | 0% | 3% | 0–5bb | g5 |
| Q6 | bp | 5% | 0% | 0% | 3% | 0–5bb | g5 |
| Q8 | bp | 4% | 0% | 0% | 3% | 0–5bb | g5 |
| 99 | pp3 | 4% | 0% | 0% | 3% | 0–5bb | g5 |
| 88 | spp | 2% | 0% | 0% | 3% | 0–5bb | g5 |
| 55 | spp | 2% | 0% | 0% | 2% | 0–5bb | g5 |
| T7 | bp | 2% | 0% | 0% | 3% | 0–5bb | g5 |
| J7 | bp | 2% | 0% | 0% | 3% | 0–5bb | g5 |
| 75 | bp | 2% | 0% | 0% | 3% | 0–5bb | g5 |
| 97 | bp | 2% | 0% | 0% | 3% | 0–5bb | g5 |
| 76 | bp | 2% | 0% | 0% | 3% | 0–5bb | g5 |
| 87 | bp | 1% | 0% | 0% | 3% | 0–5bb | g5 |
| 66 | spp | 1% | 0% | 0% | 2% | 0–5bb | g5 |
| 64 | bp | 0% | 0% | 0% | 0% | 0–5bb | g5 |
| 54 | bp | 0% | 0% | 0% | 0% | 0–5bb | g5 |
| 43 | bp | 0% | 0% | 0% | 0% | 0–5bb | g5 |
| 33 | spp | 0% | 0% | 0% | 0% | 0–5bb | g5 |
| 22 | spp | 0% | 0% | 0% | 0% | 0–5bb | g5 |
