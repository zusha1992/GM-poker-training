# QT7-Jh-3c@b200 river (Q♥ T♦ 7♠ J♥ 3♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | QQ–TT, 77, 33, AK, K9, 98 | 93% | 89% | 88% | 89% |
| g2 | 50–100bb | Two pair | QJ, Q7 | 78% | 60% | 55% | 60% |
| g3 | 0–5bb | Overpairs | AA, KK | 60% | 27% | 20% | 27% |
| g4 | 0–5bb | Two pair | QT, JT, J7, T7 | 71% | 44% | 37% | 44% |
| g5 | 0–5bb | Top pair | AQ, KQ, Q9, Q8, Q6, Q5 | 57% | 20% | 10% | 20% |
| g6 | 0–5bb | Second pair | AJ, KJ, J9, J8 | 37% | 7% | 0% | 7% |
| g7 | 0–5bb | Small pairs | 99, 88, 66–44, 22, AT, A7, A3, KT, K7, K3, T9, T8, 97, 87, 76, 75, 43 | 11% | 0% | 0% | 0% |
| g8 | Pot is too big | Ace-high | A9, A8, A6–A4, A2 | 1% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AK | straight | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K9 | straight | 96% | 94% | 93% | 94% | 50–100bb | g1 |
| 98 | straight | 90% | 85% | 83% | 85% | 50–100bb | g1 |
| 77 | twopair | 84% | 80% | 78% | 80% | 50–100bb | g1 |
| 33 | twopair | 84% | 80% | 78% | 80% | 50–100bb | g1 |
| TT | twopair | 82% | 77% | 74% | 76% | 50–100bb | g1 |
| QQ | twopair | 83% | 69% | 64% | 69% | 50–100bb | g1 |
| JJ | twopair | 81% | 68% | 65% | 68% | 50–100bb | g1 |
| QJ | twopair | 79% | 62% | 57% | 62% | 50–100bb | g2 |
| Q7 | twopair | 74% | 51% | 46% | 51% | 50–100bb | g2 |
| KK | op | 60% | 24% | 19% | 23% | 0–5bb | g3 |
| AA | op | 59% | 30% | 22% | 30% | 0–5bb | g3 |
| QT | twopair | 74% | 48% | 41% | 48% | 0–5bb | g4 |
| JT | twopair | 69% | 42% | 36% | 42% | 0–5bb | g4 |
| J7 | twopair | 65% | 36% | 29% | 35% | 0–5bb | g4 |
| T7 | twopair | 61% | 32% | 25% | 31% | 0–5bb | g4 |
| AQ | tpgk | 61% | 28% | 18% | 28% | 0–5bb | g5 |
| KQ | tpgk | 59% | 21% | 13% | 21% | 0–5bb | g5 |
| Q9 | tpmk | 55% | 16% | 3% | 15% | 0–5bb | g5 |
| Q5 | tpmk | 49% | 11% | 0% | 11% | 0–5bb | g5 |
| Q8 | tpmk | 49% | 12% | 0% | 12% | 0–5bb | g5 |
| Q6 | tpmk | 48% | 11% | 0% | 12% | 0–5bb | g5 |
| AJ | mp | 41% | 9% | 0% | 9% | 0–5bb | g6 |
| J9 | mp | 35% | 5% | 0% | 5% | 0–5bb | g6 |
| KJ | mp | 35% | 6% | 0% | 6% | 0–5bb | g6 |
| J8 | mp | 32% | 5% | 0% | 4% | 0–5bb | g6 |
| AT | bp | 23% | 3% | 0% | 3% | 0–5bb | g7 |
| KT | bp | 21% | 1% | 0% | 1% | 0–5bb | g7 |
| T9 | bp | 18% | 0% | 0% | 0% | 0–5bb | g7 |
| T8 | bp | 16% | 0% | 0% | 0% | 0–5bb | g7 |
| 99 | pp3 | 14% | 0% | 0% | 0% | 0–5bb | g7 |
| 88 | spp | 12% | 0% | 0% | 0% | 0–5bb | g7 |
| A7 | bp | 10% | 0% | 0% | 0% | 0–5bb | g7 |
| K7 | bp | 9% | 0% | 0% | 0% | 0–5bb | g7 |
| 97 | bp | 6% | 0% | 0% | 0% | 0–5bb | g7 |
| 87 | bp | 6% | 0% | 0% | 0% | 0–5bb | g7 |
| 76 | bp | 5% | 0% | 0% | 0% | 0–5bb | g7 |
| 75 | bp | 4% | 0% | 0% | 0% | 0–5bb | g7 |
| K3 | bp | 4% | 0% | 0% | 0% | 0–5bb | g7 |
| 44 | spp | 3% | 0% | 0% | 0% | 0–5bb | g7 |
| 55 | spp | 3% | 0% | 0% | 0% | 0–5bb | g7 |
| 22 | spp | 3% | 0% | 0% | 0% | 0–5bb | g7 |
| 43 | bp | 3% | 0% | 0% | 0% | 0–5bb | g7 |
| A3 | bp | 3% | 0% | 0% | 0% | 0–5bb | g7 |
| 66 | spp | 3% | 0% | 0% | 0% | 0–5bb | g7 |
| A9 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g8 |
| A8 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g8 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
