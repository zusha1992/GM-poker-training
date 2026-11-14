# QT7-2c-9h river (Q♥ T♦ 7♠ 2♣ 9♥): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | QQ, TT, 99, 77, 22, KJ, J8, 86 | 94% | 100% | 100% | 80% |
| g2 | 50–100bb | Two pair | QT, Q9 | 87% | 99% | 99% | 60% |
| g3 | 25–50bb | Overpairs | AA, KK | 79% | 86% | 83% | 48% |
| g4 | 25–50bb | Two pair | Q7, T9, T7, 97 | 79% | 89% | 87% | 48% |
| g5 | 25–50bb | Top pair, good kicker | AQ, KQ, QJ | 77% | 78% | 71% | 39% |
| g6 | 0–5bb | Top pair, weak kicker | Q8, Q6, Q5 | 63% | 45% | 27% | 20% |
| g7 | 0–5bb | Big pocket pairs | JJ | 52% | 19% | 0% | 17% |
| g8 | Pot is too big | Second pair | AT, KT, JT, T8 | 35% | 11% | 0% | 10% |
| g9 | Pot is too big | Small pairs | 88, 66–33, A9, A7, A2, K9, K7, K2, J9, J7, 98, 96, 87, 76, 75 | 10% | 1% | 0% | 0% |
| g10 | Pot is too big | Ace-high | AK, AJ, A8, A6–A3 | 0% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| KJ | straight | 97% | 100% | 100% | 91% | 50–100bb | g1 |
| J8 | straight | 94% | 100% | 100% | 78% | 50–100bb | g1 |
| 86 | straight | 92% | 100% | 100% | 75% | 50–100bb | g1 |
| 77 | twopair | 92% | 100% | 100% | 75% | 50–100bb | g1 |
| 22 | twopair | 91% | 100% | 100% | 74% | 50–100bb | g1 |
| TT | twopair | 90% | 100% | 100% | 73% | 50–100bb | g1 |
| 99 | twopair | 91% | 100% | 100% | 69% | 50–100bb | g1 |
| QQ | twopair | 88% | 100% | 100% | 60% | 50–100bb | g1 |
| QT | twopair | 87% | 100% | 100% | 62% | 50–100bb | g2 |
| Q9 | twopair | 87% | 97% | 96% | 56% | 50–100bb | g2 |
| AA | op | 78% | 87% | 84% | 47% | 25–50bb | g3 |
| KK | op | 80% | 86% | 82% | 50% | 25–50bb | g3 |
| Q7 | twopair | 81% | 92% | 90% | 46% | 25–50bb | g4 |
| 97 | twopair | 82% | 90% | 87% | 49% | 25–50bb | g4 |
| T9 | twopair | 79% | 89% | 87% | 48% | 25–50bb | g4 |
| T7 | twopair | 76% | 86% | 84% | 44% | 25–50bb | g4 |
| AQ | tpgk | 80% | 88% | 84% | 44% | 25–50bb | g5 |
| KQ | tpgk | 79% | 83% | 77% | 43% | 25–50bb | g5 |
| QJ | tpmk | 73% | 64% | 53% | 31% | 25–50bb | g5 |
| Q6 | tpmk | 63% | 45% | 27% | 20% | 0–5bb | g6 |
| Q5 | tpmk | 60% | 39% | 19% | 19% | 0–5bb | g6 |
| Q8 | tpmk | 65% | 51% | 34% | 21% | 5–15bb | g6 |
| JJ | pp1 | 52% | 19% | 0% | 17% | 0–5bb | g7 |
| AT | mp | 40% | 14% | 0% | 11% | Pot is too big | g8 |
| KT | mp | 36% | 11% | 0% | 10% | Pot is too big | g8 |
| JT | mp | 32% | 8% | 0% | 9% | Pot is too big | g8 |
| T8 | mp | 27% | 6% | 0% | 4% | Pot is too big | g8 |
| J9 | bp | 18% | 2% | 0% | 0% | Pot is too big | g9 |
| K9 | bp | 18% | 2% | 0% | 0% | Pot is too big | g9 |
| 88 | spp | 18% | 2% | 0% | 0% | Pot is too big | g9 |
| 96 | bp | 17% | 2% | 0% | 0% | Pot is too big | g9 |
| A9 | bp | 17% | 2% | 0% | 0% | Pot is too big | g9 |
| 98 | bp | 17% | 2% | 0% | 0% | Pot is too big | g9 |
| A7 | bp | 13% | 1% | 0% | 0% | Pot is too big | g9 |
| K7 | bp | 12% | 1% | 0% | 0% | Pot is too big | g9 |
| J7 | bp | 11% | 0% | 0% | 0% | Pot is too big | g9 |
| 87 | bp | 10% | 0% | 0% | 0% | Pot is too big | g9 |
| 76 | bp | 7% | 0% | 0% | 0% | Pot is too big | g9 |
| 75 | bp | 5% | 0% | 0% | 0% | Pot is too big | g9 |
| 44 | spp | 2% | 0% | 0% | 0% | Pot is too big | g9 |
| 66 | spp | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| 55 | spp | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| 33 | spp | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| K2 | bp | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A2 | bp | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| AK | khnd | 1% | 0% | 0% | 0% | Pot is too big | g10 |
| AJ | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A8 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
