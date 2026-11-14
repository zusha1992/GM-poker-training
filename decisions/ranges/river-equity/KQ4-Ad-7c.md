# KQ4-Ad-7c river (K♦ Q♦ 4♠ A♦ 7♣): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes, straights & sets | AA–QQ, 77, 44, JT · ♦ flushes: JT–J7, T9–T7, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 97% | 100% | 100% | 83% |
| g2 | 50–100bb | Two pair | AK, AQ, A7 | 91% | 99% | 99% | 58% |
| g3 | 25–50bb | Two pair | A4, KQ, K7, K4, Q7 | 85% | 86% | 83% | 45% |
| g4 | 25–50bb | Top pair, good kicker | AJ | 84% | 78% | 71% | 44% |
| g5 | 0–5bb | Top pair, weak kicker | AT–A8, A6, A5, A3, A2 | 63% | 38% | 14% | 29% |
| g6 | Pot is too big | Second pair | KJ–K8, K6, K5, K3, K2 | 36% | 11% | 0% | 12% |
| g7 | Pot is too big | Small pairs | JJ–88, 66, 55, 33, 22, QJ–Q8, Q6, Q5, J7, T7, 97, 87, 76, 75, 64, 54, 43 | 6% | 1% | 0% | 3% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| JT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| T8+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| T7+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| T9+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| 54+fl | flushlo | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| 64+fl | flushlo | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| 43+fl | flushlo | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| 97+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 96+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 65+fl | flushlo | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 76+fl | flushlo | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 87+fl | flushlo | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 75+fl | flushlo | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 86+fl | flushlo | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 98+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| JT | straight | 97% | 100% | 100% | 87% | 50–100bb | g1 |
| 77 | twopair | 94% | 100% | 100% | 67% | 50–100bb | g1 |
| QQ | twopair | 92% | 100% | 100% | 66% | 50–100bb | g1 |
| KK | twopair | 93% | 100% | 100% | 65% | 50–100bb | g1 |
| 44 | twopair | 93% | 100% | 100% | 63% | 50–100bb | g1 |
| AA | twopair | 91% | 100% | 100% | 56% | 50–100bb | g1 |
| AQ | twopair | 91% | 100% | 100% | 60% | 50–100bb | g2 |
| AK | twopair | 91% | 100% | 100% | 58% | 50–100bb | g2 |
| A7 | twopair | 91% | 98% | 98% | 56% | 50–100bb | g2 |
| A4 | twopair | 88% | 92% | 88% | 49% | 25–50bb | g3 |
| K4 | twopair | 85% | 86% | 83% | 42% | 25–50bb | g3 |
| Q7 | twopair | 84% | 83% | 80% | 45% | 25–50bb | g3 |
| K7 | twopair | 85% | 83% | 80% | 43% | 25–50bb | g3 |
| KQ | twopair | 81% | 82% | 79% | 42% | 25–50bb | g3 |
| AJ | tpmk | 84% | 78% | 71% | 44% | 25–50bb | g4 |
| A9 | tpmk | 66% | 45% | 23% | 30% | 0–5bb | g5 |
| A8 | tpmk | 63% | 38% | 15% | 27% | 0–5bb | g5 |
| A6 | tpmk | 62% | 34% | 9% | 27% | 0–5bb | g5 |
| AT | tpmk | 75% | 60% | 43% | 34% | 5–15bb | g5 |
| A5 | tpmk | 59% | 31% | 5% | 27% | 0–5bb | g5 |
| A2 | tpmk | 58% | 29% | 2% | 27% | 0–5bb | g5 |
| A3 | tpmk | 58% | 29% | 2% | 27% | 0–5bb | g5 |
| KJ | mp | 43% | 14% | 0% | 19% | Pot is too big | g6 |
| KT | mp | 38% | 11% | 0% | 14% | Pot is too big | g6 |
| K3 | mp | 34% | 10% | 0% | 9% | Pot is too big | g6 |
| K9 | mp | 34% | 11% | 0% | 10% | Pot is too big | g6 |
| K8 | mp | 34% | 10% | 0% | 9% | Pot is too big | g6 |
| K6 | mp | 33% | 10% | 0% | 10% | Pot is too big | g6 |
| K5 | mp | 33% | 11% | 0% | 8% | Pot is too big | g6 |
| K2 | mp | 33% | 10% | 0% | 10% | Pot is too big | g6 |
| QJ | bp | 20% | 4% | 0% | 6% | Pot is too big | g7 |
| QT | bp | 12% | 1% | 0% | 4% | Pot is too big | g7 |
| Q9 | bp | 6% | 0% | 0% | 3% | Pot is too big | g7 |
| TT | pp3 | 6% | 0% | 0% | 4% | Pot is too big | g7 |
| Q6 | bp | 5% | 0% | 0% | 3% | Pot is too big | g7 |
| Q5 | bp | 5% | 0% | 0% | 3% | Pot is too big | g7 |
| JJ | pp3 | 5% | 0% | 0% | 3% | Pot is too big | g7 |
| Q8 | bp | 4% | 0% | 0% | 3% | Pot is too big | g7 |
| 99 | pp3 | 4% | 0% | 0% | 3% | Pot is too big | g7 |
| 75 | bp | 2% | 0% | 0% | 3% | Pot is too big | g7 |
| 97 | bp | 2% | 0% | 0% | 3% | Pot is too big | g7 |
| 88 | spp | 2% | 0% | 0% | 3% | Pot is too big | g7 |
| 76 | bp | 2% | 0% | 0% | 3% | Pot is too big | g7 |
| T7 | bp | 2% | 0% | 0% | 4% | Pot is too big | g7 |
| 55 | spp | 2% | 0% | 0% | 3% | Pot is too big | g7 |
| J7 | bp | 2% | 0% | 0% | 3% | Pot is too big | g7 |
| 87 | bp | 2% | 0% | 0% | 2% | Pot is too big | g7 |
| 66 | spp | 1% | 0% | 0% | 3% | Pot is too big | g7 |
| 54 | bp | 0% | 0% | 0% | 0% | Pot is too big | g7 |
| 43 | bp | 0% | 0% | 0% | 0% | Pot is too big | g7 |
| 64 | bp | 0% | 0% | 0% | 0% | Pot is too big | g7 |
| 33 | spp | 0% | 0% | 0% | 0% | Pot is too big | g7 |
| 22 | spp | 0% | 0% | 0% | 0% | Pot is too big | g7 |
