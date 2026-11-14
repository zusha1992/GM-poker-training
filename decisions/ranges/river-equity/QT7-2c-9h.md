# QT7-2c-9h river (Q♥ T♦ 7♠ 2♣ 9♥): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | QQ, TT, 99, 77, 22, KJ, J8, 86 | 94% | 100% | 100% | 80% |
| g2 | 50–100bb | Two pair | QT, Q9, 97 | 86% | 98% | 97% | 58% |
| g3 | 25–50bb | Two pair | Q7, T9, T7 | 79% | 90% | 87% | 47% |
| g4 | 15–25bb | Overpairs | AA, KK | 80% | 86% | 83% | 48% |
| g5 | 15–25bb | Top pair, good kicker | AQ, KQ, QJ | 77% | 78% | 72% | 39% |
| g6 | 0–5bb | Top pair, weak kicker | Q8, Q6, Q5 | 63% | 45% | 27% | 20% |
| g7 | 0–5bb | Big pocket pairs | JJ | 54% | 18% | 0% | 18% |
| g8 | 0–5bb | Second pair | AT, KT, JT, T8 | 35% | 10% | 0% | 10% |
| g9 | 0–5bb | Small pairs | 88, 66–33, A9, A7, A2, K9, K7, K2, J9, J7, 98, 96, 87, 76, 75 | 10% | 1% | 0% | 0% |
| g10 | Pot is too big | Ace-high | AK, AJ, A8, A6–A3 | 0% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| KJ | straight | 98% | 100% | 100% | 91% | 50–100bb | g1 |
| J8 | straight | 94% | 100% | 100% | 77% | 50–100bb | g1 |
| 77 | twopair | 91% | 100% | 100% | 75% | 50–100bb | g1 |
| 86 | straight | 91% | 100% | 100% | 74% | 50–100bb | g1 |
| 22 | twopair | 92% | 100% | 100% | 74% | 50–100bb | g1 |
| TT | twopair | 90% | 100% | 100% | 72% | 50–100bb | g1 |
| 99 | twopair | 91% | 100% | 100% | 69% | 50–100bb | g1 |
| QQ | twopair | 89% | 100% | 100% | 60% | 50–100bb | g1 |
| QT | twopair | 87% | 100% | 100% | 62% | 50–100bb | g2 |
| Q9 | twopair | 87% | 97% | 96% | 55% | 50–100bb | g2 |
| 97 | twopair | 80% | 89% | 87% | 51% | 50–100bb | g2 |
| Q7 | twopair | 81% | 93% | 90% | 46% | 25–50bb | g3 |
| T9 | twopair | 79% | 89% | 86% | 47% | 25–50bb | g3 |
| T7 | twopair | 75% | 85% | 84% | 44% | 25–50bb | g3 |
| AA | op | 78% | 87% | 84% | 47% | 25–50bb | g4 |
| KK | op | 81% | 86% | 82% | 48% | 25–50bb | g4 |
| AQ | tpgk | 80% | 88% | 84% | 44% | 25–50bb | g5 |
| KQ | tpgk | 79% | 82% | 78% | 43% | 25–50bb | g5 |
| QJ | tpmk | 72% | 65% | 53% | 30% | 25–50bb | g5 |
| Q8 | tpmk | 64% | 50% | 35% | 20% | 0–5bb | g6 |
| Q6 | tpmk | 63% | 44% | 27% | 20% | 0–5bb | g6 |
| Q5 | tpmk | 62% | 40% | 18% | 20% | 0–5bb | g6 |
| JJ | pp1 | 54% | 18% | 0% | 18% | 0–5bb | g7 |
| AT | mp | 40% | 13% | 0% | 12% | 0–5bb | g8 |
| KT | mp | 36% | 11% | 0% | 11% | 0–5bb | g8 |
| JT | mp | 33% | 8% | 0% | 8% | 0–5bb | g8 |
| T8 | mp | 26% | 5% | 0% | 4% | 0–5bb | g8 |
| J9 | bp | 18% | 2% | 0% | 0% | 0–5bb | g9 |
| A9 | bp | 18% | 2% | 0% | 0% | 0–5bb | g9 |
| K9 | bp | 18% | 2% | 0% | 0% | 0–5bb | g9 |
| 98 | bp | 17% | 2% | 0% | 0% | 0–5bb | g9 |
| 88 | spp | 17% | 2% | 0% | 0% | 0–5bb | g9 |
| 96 | bp | 17% | 2% | 0% | 0% | 0–5bb | g9 |
| J7 | bp | 12% | 0% | 0% | 0% | 0–5bb | g9 |
| A7 | bp | 12% | 1% | 0% | 0% | 0–5bb | g9 |
| K7 | bp | 11% | 1% | 0% | 0% | 0–5bb | g9 |
| 87 | bp | 11% | 1% | 0% | 0% | 0–5bb | g9 |
| 76 | bp | 7% | 1% | 0% | 0% | 0–5bb | g9 |
| 75 | bp | 5% | 0% | 0% | 0% | 0–5bb | g9 |
| 44 | spp | 1% | 0% | 0% | 0% | 0–5bb | g9 |
| 55 | spp | 1% | 0% | 0% | 0% | 0–5bb | g9 |
| 66 | spp | 1% | 0% | 0% | 0% | 0–5bb | g9 |
| 33 | spp | 1% | 0% | 0% | 0% | 0–5bb | g9 |
| A2 | bp | 1% | 0% | 0% | 0% | 0–5bb | g9 |
| K2 | bp | 1% | 0% | 0% | 0% | 0–5bb | g9 |
| AK | khnd | 1% | 0% | 0% | 0% | Pot is too big | g10 |
| AJ | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A8 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
