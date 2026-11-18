# QT7-Jh-3c@b150 river (Q♥ T♦ 7♠ J♥ 3♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | QQ–TT, 77, 33, AK, K9, 98 | 94% | 100% | 100% | 82% |
| g2 | 25–50bb | Two pair | QJ, QT, Q7, JT, J7, T7 | 78% | 89% | 82% | 45% |
| g3 | 15–25bb | Overpairs | AA, KK | 66% | 69% | 52% | 35% |
| g4 | 15–25bb | Top pair, good kicker | AQ, KQ | 65% | 68% | 44% | 33% |
| g5 | 0–5bb | Top pair, weak kicker | Q9, Q8, Q6, Q5 | 56% | 48% | 7% | 27% |
| g6 | 0–5bb | Second pair | AJ, KJ, J9, J8 | 39% | 28% | 0% | 18% |
| g7 | 0–5bb | Small pairs | 99, 88, 66–44, 22, AT, A7, A3, KT, K7, K3, T9, T8, 97, 87, 76, 75, 43 | 10% | 2% | 0% | 2% |
| g8 | Pot is too big | Ace-high | A9, A8, A6–A4, A2 | 0% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AK | straight | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K9 | straight | 97% | 100% | 100% | 91% | 50–100bb | g1 |
| 98 | straight | 93% | 100% | 100% | 75% | 50–100bb | g1 |
| 33 | twopair | 89% | 100% | 100% | 64% | 50–100bb | g1 |
| 77 | twopair | 87% | 100% | 100% | 64% | 50–100bb | g1 |
| TT | twopair | 86% | 100% | 100% | 59% | 50–100bb | g1 |
| QQ | twopair | 86% | 100% | 100% | 55% | 50–100bb | g1 |
| JJ | twopair | 85% | 100% | 100% | 54% | 50–100bb | g1 |
| Q7 | twopair | 80% | 90% | 83% | 48% | 25–50bb | g2 |
| QT | twopair | 77% | 89% | 82% | 43% | 25–50bb | g2 |
| JT | twopair | 75% | 85% | 78% | 41% | 25–50bb | g2 |
| J7 | twopair | 72% | 79% | 66% | 40% | 25–50bb | g2 |
| T7 | twopair | 68% | 74% | 60% | 35% | 25–50bb | g2 |
| QJ | twopair | 83% | 96% | 93% | 51% | 50–100bb | g2 |
| KK | op | 67% | 66% | 49% | 36% | 15–25bb | g3 |
| AA | op | 64% | 71% | 55% | 35% | 25–50bb | g3 |
| AQ | tpgk | 65% | 70% | 48% | 33% | 15–25bb | g4 |
| KQ | tpgk | 65% | 65% | 40% | 34% | 15–25bb | g4 |
| Q8 | tpmk | 54% | 44% | 1% | 26% | 0–5bb | g5 |
| Q9 | tpmk | 60% | 53% | 15% | 30% | 5–15bb | g5 |
| Q6 | tpmk | 53% | 43% | 0% | 25% | 0–5bb | g5 |
| Q5 | tpmk | 52% | 43% | 0% | 25% | 0–5bb | g5 |
| AJ | mp | 43% | 33% | 0% | 19% | 0–5bb | g6 |
| J9 | mp | 39% | 25% | 0% | 19% | 0–5bb | g6 |
| KJ | mp | 37% | 27% | 0% | 18% | 0–5bb | g6 |
| J8 | mp | 37% | 23% | 0% | 17% | 0–5bb | g6 |
| AT | bp | 25% | 13% | 0% | 8% | 0–5bb | g7 |
| KT | bp | 19% | 6% | 0% | 3% | 0–5bb | g7 |
| T9 | bp | 16% | 3% | 0% | 1% | 0–5bb | g7 |
| T8 | bp | 15% | 2% | 0% | 1% | 0–5bb | g7 |
| 99 | pp3 | 13% | 0% | 0% | 1% | 0–5bb | g7 |
| 88 | spp | 11% | 1% | 0% | 1% | 0–5bb | g7 |
| A7 | bp | 8% | 0% | 0% | 0% | 0–5bb | g7 |
| K7 | bp | 8% | 0% | 0% | 0% | 0–5bb | g7 |
| 97 | bp | 6% | 0% | 0% | 0% | 0–5bb | g7 |
| 87 | bp | 5% | 0% | 0% | 0% | 0–5bb | g7 |
| 76 | bp | 5% | 0% | 0% | 0% | 0–5bb | g7 |
| 75 | bp | 4% | 0% | 0% | 0% | 0–5bb | g7 |
| K3 | bp | 3% | 0% | 0% | 0% | 0–5bb | g7 |
| 55 | spp | 2% | 0% | 0% | 0% | 0–5bb | g7 |
| 66 | spp | 2% | 0% | 0% | 0% | 0–5bb | g7 |
| 43 | bp | 2% | 0% | 0% | 0% | 0–5bb | g7 |
| 44 | spp | 2% | 0% | 0% | 0% | 0–5bb | g7 |
| 22 | spp | 2% | 0% | 0% | 0% | 0–5bb | g7 |
| A3 | bp | 2% | 0% | 0% | 0% | 0–5bb | g7 |
| A9 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g8 |
| A8 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
