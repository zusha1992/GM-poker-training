# QT7-2c-9h river (Q♥ T♦ 7♠ 2♣ 9♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | QQ, TT, 99, 77, 22, KJ, J8, 86 | 94% | 100% | 100% | 80% |
| g2 | 50–100bb | Two pair | QT, Q9, 97 | 86% | 98% | 97% | 59% |
| g3 | 25–50bb | Two pair | Q7, T9, T7 | 80% | 89% | 86% | 47% |
| g4 | 15–25bb | Overpairs | AA, KK | 79% | 86% | 84% | 48% |
| g5 | 15–25bb | Top pair, good kicker | AQ, KQ, QJ | 78% | 78% | 72% | 39% |
| g6 | 0–5bb | Top pair, weak kicker | Q8, Q6, Q5 | 63% | 44% | 26% | 20% |
| g7 | 0–5bb | Big pocket pairs | JJ | 52% | 20% | 0% | 18% |
| g8 | 0–5bb | Second pair | AT, KT, JT, T8 | 35% | 11% | 0% | 10% |
| g9 | 0–5bb | Small pairs | 88, 66–33, A9, A7, A2, K9, K7, K2, J9, J7, 98, 96, 87, 76, 75 | 10% | 1% | 0% | 0% |
| g10 | Pot is too big | Ace-high | AK, AJ, A8, A6–A3 | 0% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| KJ | straight | 97% | 100% | 100% | 91% | 50–100bb | g1 |
| J8 | straight | 94% | 100% | 100% | 78% | 50–100bb | g1 |
| 77 | twopair | 92% | 100% | 100% | 75% | 50–100bb | g1 |
| 22 | twopair | 92% | 100% | 100% | 74% | 50–100bb | g1 |
| 86 | straight | 91% | 100% | 100% | 74% | 50–100bb | g1 |
| TT | twopair | 90% | 100% | 100% | 72% | 50–100bb | g1 |
| 99 | twopair | 91% | 100% | 100% | 70% | 50–100bb | g1 |
| QQ | twopair | 89% | 100% | 100% | 59% | 50–100bb | g1 |
| QT | twopair | 88% | 100% | 100% | 63% | 50–100bb | g2 |
| Q9 | twopair | 86% | 97% | 97% | 56% | 50–100bb | g2 |
| 97 | twopair | 82% | 89% | 87% | 51% | 50–100bb | g2 |
| Q7 | twopair | 82% | 93% | 89% | 45% | 25–50bb | g3 |
| T9 | twopair | 80% | 89% | 86% | 48% | 25–50bb | g3 |
| T7 | twopair | 75% | 87% | 83% | 43% | 25–50bb | g3 |
| AA | op | 78% | 87% | 84% | 45% | 25–50bb | g4 |
| KK | op | 80% | 85% | 83% | 50% | 50–100bb | g4 |
| AQ | tpgk | 80% | 89% | 84% | 44% | 25–50bb | g5 |
| KQ | tpgk | 79% | 82% | 77% | 44% | 25–50bb | g5 |
| QJ | tpmk | 74% | 65% | 54% | 30% | 25–50bb | g5 |
| Q8 | tpmk | 65% | 49% | 33% | 20% | 0–5bb | g6 |
| Q6 | tpmk | 63% | 44% | 25% | 20% | 0–5bb | g6 |
| Q5 | tpmk | 62% | 39% | 19% | 20% | 0–5bb | g6 |
| JJ | pp1 | 52% | 20% | 0% | 18% | 0–5bb | g7 |
| AT | mp | 40% | 14% | 0% | 11% | 0–5bb | g8 |
| KT | mp | 36% | 10% | 0% | 11% | 0–5bb | g8 |
| JT | mp | 32% | 8% | 0% | 8% | 0–5bb | g8 |
| T8 | mp | 26% | 6% | 0% | 4% | 0–5bb | g8 |
| J9 | bp | 19% | 2% | 0% | 0% | 0–5bb | g9 |
| K9 | bp | 19% | 2% | 0% | 0% | 0–5bb | g9 |
| A9 | bp | 19% | 2% | 0% | 0% | 0–5bb | g9 |
| 98 | bp | 17% | 2% | 0% | 0% | 0–5bb | g9 |
| 88 | spp | 17% | 2% | 0% | 0% | 0–5bb | g9 |
| 96 | bp | 16% | 2% | 0% | 0% | 0–5bb | g9 |
| K7 | bp | 12% | 1% | 0% | 0% | 0–5bb | g9 |
| A7 | bp | 11% | 1% | 0% | 0% | 0–5bb | g9 |
| J7 | bp | 11% | 0% | 0% | 0% | 0–5bb | g9 |
| 87 | bp | 10% | 0% | 0% | 0% | 0–5bb | g9 |
| 76 | bp | 8% | 0% | 0% | 0% | 0–5bb | g9 |
| 75 | bp | 5% | 0% | 0% | 0% | 0–5bb | g9 |
| 66 | spp | 2% | 0% | 0% | 0% | 0–5bb | g9 |
| 44 | spp | 1% | 0% | 0% | 0% | 0–5bb | g9 |
| 33 | spp | 1% | 0% | 0% | 0% | 0–5bb | g9 |
| 55 | spp | 1% | 0% | 0% | 0% | 0–5bb | g9 |
| K2 | bp | 1% | 0% | 0% | 0% | 0–5bb | g9 |
| A2 | bp | 1% | 0% | 0% | 0% | 0–5bb | g9 |
| AK | khnd | 1% | 0% | 0% | 0% | Pot is too big | g10 |
| AJ | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A8 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
