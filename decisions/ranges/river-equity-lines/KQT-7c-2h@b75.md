# KQT-7c-2h@b75 river (K♦ Q♣ T♥ 7♣ 2♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | AJ, J9 | 100% | 100% | 100% | 98% |
| g2 | 25–50bb | Sets | KK, QQ, TT, 77, 22 | 97% | 100% | 100% | 82% |
| g3 | 15–25bb | Overpair | AA | 73% | 65% | 54% | 40% |
| g4 | 15–25bb | Two pair | KQ, KT, K7, K2, QT, Q7, T7 | 89% | 91% | 88% | 58% |
| g5 | 5–15bb | Top pair, good kicker | AK, KJ | 74% | 62% | 45% | 34% |
| g6 | 0–5bb | Top pair, weak kicker | K9, K8, K6–K3 | 60% | 43% | 16% | 22% |
| g7 | 0–5bb | Second pair | AQ, QJ, Q9, Q8, Q6, Q5 | 34% | 20% | 0% | 6% |
| g8 | 0–5bb | Small pairs | JJ, 99, 88, 66–33, AT, A7, A2, JT, J7, T9, T8, 97, 87, 76, 75 | 7% | 2% | 0% | 0% |
| g9 | Pot is too big | Ace-high | A9, A8, A6–A3 | 1% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AJ | straight | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J9 | straight | 99% | 100% | 100% | 95% | 50–100bb | g1 |
| 22 | twopair | 97% | 100% | 100% | 86% | 50–100bb | g2 |
| 77 | twopair | 97% | 100% | 100% | 86% | 50–100bb | g2 |
| TT | twopair | 96% | 100% | 100% | 83% | 50–100bb | g2 |
| QQ | twopair | 97% | 100% | 100% | 80% | 50–100bb | g2 |
| KK | twopair | 96% | 100% | 100% | 76% | 50–100bb | g2 |
| AA | op | 73% | 65% | 54% | 40% | 25–50bb | g3 |
| QT | twopair | 84% | 81% | 76% | 47% | 25–50bb | g4 |
| KQ | twopair | 95% | 100% | 100% | 74% | 50–100bb | g4 |
| Q7 | twopair | 81% | 75% | 68% | 40% | 25–50bb | g4 |
| T7 | twopair | 79% | 73% | 64% | 45% | 25–50bb | g4 |
| KT | twopair | 92% | 98% | 97% | 62% | 50–100bb | g4 |
| K7 | twopair | 90% | 93% | 91% | 56% | 50–100bb | g4 |
| K2 | twopair | 88% | 89% | 85% | 55% | 50–100bb | g4 |
| AK | tpgk | 76% | 66% | 49% | 40% | 15–25bb | g5 |
| KJ | tpmk | 73% | 59% | 40% | 27% | 5–15bb | g5 |
| K8 | tpmk | 62% | 45% | 17% | 22% | 0–5bb | g6 |
| K6 | tpmk | 57% | 41% | 13% | 22% | 0–5bb | g6 |
| K5 | tpmk | 55% | 39% | 10% | 22% | 0–5bb | g6 |
| K4 | tpmk | 52% | 37% | 6% | 21% | 0–5bb | g6 |
| K9 | tpmk | 68% | 52% | 28% | 22% | 5–15bb | g6 |
| K3 | tpmk | 50% | 34% | 2% | 20% | 0–5bb | g6 |
| AQ | mp | 37% | 23% | 0% | 13% | 0–5bb | g7 |
| QJ | mp | 35% | 20% | 0% | 6% | 0–5bb | g7 |
| Q9 | mp | 31% | 18% | 0% | 0% | 0–5bb | g7 |
| Q8 | mp | 31% | 17% | 0% | 0% | 0–5bb | g7 |
| Q6 | mp | 30% | 17% | 0% | 0% | 0–5bb | g7 |
| Q5 | mp | 30% | 17% | 0% | 0% | 0–5bb | g7 |
| JJ | pp2 | 27% | 14% | 0% | 0% | 0–5bb | g8 |
| AT | bp | 16% | 8% | 0% | 0% | 0–5bb | g8 |
| JT | bp | 11% | 2% | 0% | 0% | 0–5bb | g8 |
| T8 | bp | 8% | 0% | 0% | 0% | 0–5bb | g8 |
| T9 | bp | 8% | 0% | 0% | 0% | 0–5bb | g8 |
| 99 | pp3 | 5% | 0% | 0% | 0% | 0–5bb | g8 |
| 88 | spp | 4% | 0% | 0% | 0% | 0–5bb | g8 |
| J7 | bp | 3% | 0% | 0% | 0% | 0–5bb | g8 |
| 55 | spp | 3% | 0% | 0% | 0% | 0–5bb | g8 |
| 97 | bp | 3% | 0% | 0% | 0% | 0–5bb | g8 |
| A7 | bp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| 75 | bp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| 87 | bp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| 66 | spp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| 33 | spp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| 76 | bp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| 44 | spp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| A2 | bp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| A9 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A8 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
