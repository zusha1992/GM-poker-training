# KQ4-2c-7h river (K♦ Q♦ 4♠ 2♣ 7♥): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | KK, QQ, 77, 44, 22 | 100% | 100% | 100% | 100% |
| g2 | 50–100bb | Two pair | KQ, K7, K4, K2, Q7 | 99% | 100% | 100% | 97% |
| g3 | 50–100bb | Overpair | AA | 89% | 100% | 100% | 67% |
| g4 | 50–100bb | Top pair, good kicker | AK, KJ, KT | 85% | 97% | 95% | 56% |
| g5 | 0–5bb | Top pair, weak kicker | K9, K8, K6, K5, K3 | 64% | 63% | 44% | 29% |
| g6 | 0–5bb | Second pair | AQ, QJ–Q8, Q6, Q5 | 36% | 17% | 0% | 1% |
| g7 | 0–5bb | Small pairs | JJ–88, 66, 55, 33, A7, A4, A2, J7, T7, 97, 87, 76, 75, 64, 54, 43 | 18% | 2% | 0% | 0% |
| g8 | Pot is too big | Ace-high | AJ–A8, A6, A5, A3 | 5% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| KK | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 44 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 22 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g2 |
| K7 | twopair | 99% | 100% | 100% | 98% | 50–100bb | g2 |
| K4 | twopair | 97% | 100% | 100% | 93% | 50–100bb | g2 |
| K2 | twopair | 97% | 100% | 100% | 92% | 50–100bb | g2 |
| Q7 | twopair | 94% | 100% | 100% | 86% | 50–100bb | g2 |
| AA | op | 89% | 100% | 100% | 67% | 50–100bb | g3 |
| AK | tpgk | 88% | 100% | 100% | 60% | 50–100bb | g4 |
| KJ | tpmk | 86% | 98% | 97% | 57% | 50–100bb | g4 |
| KT | tpmk | 79% | 93% | 89% | 50% | 50–100bb | g4 |
| K9 | tpmk | 72% | 81% | 71% | 44% | 25–50bb | g5 |
| K5 | tpmk | 57% | 47% | 21% | 15% | 0–5bb | g5 |
| K6 | tpmk | 60% | 57% | 33% | 23% | 5–15bb | g5 |
| K3 | tpmk | 55% | 38% | 7% | 6% | 0–5bb | g5 |
| K8 | tpmk | 65% | 68% | 50% | 33% | 25–50bb | g5 |
| AQ | mp | 39% | 20% | 0% | 1% | 0–5bb | g6 |
| QJ | mp | 38% | 18% | 0% | 1% | 0–5bb | g6 |
| QT | mp | 36% | 16% | 0% | 1% | 0–5bb | g6 |
| Q9 | mp | 35% | 15% | 0% | 1% | 0–5bb | g6 |
| Q8 | mp | 34% | 14% | 0% | 1% | 0–5bb | g6 |
| Q6 | mp | 30% | 11% | 0% | 1% | 0–5bb | g6 |
| Q5 | mp | 27% | 8% | 0% | 1% | 0–5bb | g6 |
| 99 | pp2 | 22% | 3% | 0% | 0% | 0–5bb | g7 |
| 76 | bp | 22% | 2% | 0% | 0% | 0–5bb | g7 |
| 87 | bp | 22% | 2% | 0% | 0% | 0–5bb | g7 |
| 97 | bp | 21% | 3% | 0% | 0% | 0–5bb | g7 |
| 88 | spp | 21% | 3% | 0% | 0% | 0–5bb | g7 |
| 75 | bp | 21% | 3% | 0% | 0% | 0–5bb | g7 |
| 66 | spp | 21% | 2% | 0% | 0% | 0–5bb | g7 |
| 55 | spp | 21% | 2% | 0% | 0% | 0–5bb | g7 |
| T7 | bp | 20% | 3% | 0% | 0% | 0–5bb | g7 |
| TT | pp2 | 20% | 3% | 0% | 0% | 0–5bb | g7 |
| J7 | bp | 20% | 2% | 0% | 0% | 0–5bb | g7 |
| JJ | pp2 | 19% | 2% | 0% | 0% | 0–5bb | g7 |
| A7 | bp | 19% | 2% | 0% | 0% | 0–5bb | g7 |
| A4 | bp | 15% | 1% | 0% | 0% | 0–5bb | g7 |
| 54 | bp | 14% | 1% | 0% | 0% | 0–5bb | g7 |
| 64 | bp | 13% | 1% | 0% | 0% | 0–5bb | g7 |
| 43 | bp | 12% | 0% | 0% | 0% | 0–5bb | g7 |
| 33 | spp | 11% | 0% | 0% | 0% | 0–5bb | g7 |
| A2 | bp | 10% | 0% | 0% | 0% | 0–5bb | g7 |
| AJ | khnd | 7% | 0% | 0% | 0% | Pot is too big | g8 |
| A9 | khnd | 5% | 0% | 0% | 0% | Pot is too big | g8 |
| AT | khnd | 5% | 0% | 0% | 0% | Pot is too big | g8 |
| A8 | khnd | 5% | 0% | 0% | 0% | Pot is too big | g8 |
| A5 | khnd | 5% | 0% | 0% | 0% | Pot is too big | g8 |
| A3 | khnd | 4% | 0% | 0% | 0% | Pot is too big | g8 |
| A6 | khnd | 4% | 0% | 0% | 0% | Pot is too big | g8 |
