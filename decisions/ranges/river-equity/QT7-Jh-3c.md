# QT7-Jh-3c river (Q♥ T♦ 7♠ J♥ 3♣): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | QQ–TT, 77, 33, AK, K9, 98 | 97% | 100% | 100% | 85% |
| g2 | 50–100bb | Two pair | QJ, QT, Q7 | 89% | 94% | 89% | 55% |
| g3 | 25–50bb | Two pair | JT, J7, T7 | 83% | 81% | 71% | 45% |
| g4 | 15–25bb | Overpairs | AA, KK | 78% | 69% | 52% | 40% |
| g5 | 15–25bb | Top pair, good kicker | AQ, KQ | 77% | 69% | 46% | 39% |
| g6 | 5–15bb | Top pair, weak kicker | Q9, Q8, Q6, Q5 | 70% | 54% | 17% | 30% |
| g7 | 0–5bb | Second pair | AJ, KJ | 50% | 32% | 0% | 21% |
| g8 | Pot is too big | Second pair | J9, J8 | 45% | 27% | 0% | 23% |
| g9 | Pot is too big | Small pairs | 99, 88, 66–44, 22, AT, A7, A3, KT, K7, K3, T9, T8, 97, 87, 76, 75, 43 | 10% | 3% | 0% | 3% |
| g10 | Pot is too big | Ace-high | A9, A8, A6–A4, A2 | 0% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AK | straight | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K9 | straight | 98% | 100% | 100% | 92% | 50–100bb | g1 |
| 98 | straight | 96% | 100% | 100% | 78% | 50–100bb | g1 |
| 33 | twopair | 94% | 100% | 100% | 71% | 50–100bb | g1 |
| 77 | twopair | 94% | 100% | 100% | 70% | 50–100bb | g1 |
| TT | twopair | 93% | 100% | 100% | 66% | 50–100bb | g1 |
| JJ | twopair | 93% | 100% | 100% | 64% | 50–100bb | g1 |
| QQ | twopair | 92% | 100% | 100% | 61% | 50–100bb | g1 |
| QJ | twopair | 91% | 97% | 95% | 60% | 50–100bb | g2 |
| Q7 | twopair | 89% | 92% | 86% | 54% | 50–100bb | g2 |
| QT | twopair | 88% | 91% | 84% | 50% | 50–100bb | g2 |
| JT | twopair | 84% | 82% | 74% | 46% | 25–50bb | g3 |
| J7 | twopair | 82% | 78% | 65% | 44% | 25–50bb | g3 |
| T7 | twopair | 78% | 74% | 59% | 39% | 25–50bb | g3 |
| KK | op | 79% | 68% | 50% | 44% | 15–25bb | g4 |
| AA | op | 77% | 70% | 55% | 36% | 25–50bb | g4 |
| AQ | tpgk | 77% | 70% | 49% | 37% | 15–25bb | g5 |
| KQ | tpgk | 77% | 67% | 43% | 41% | 15–25bb | g5 |
| Q5 | tpmk | 65% | 49% | 8% | 27% | 0–5bb | g6 |
| Q9 | tpmk | 73% | 58% | 24% | 33% | 5–15bb | g6 |
| Q8 | tpmk | 69% | 52% | 13% | 27% | 5–15bb | g6 |
| Q6 | tpmk | 66% | 51% | 10% | 26% | 5–15bb | g6 |
| AJ | mp | 51% | 33% | 0% | 19% | 0–5bb | g7 |
| KJ | mp | 50% | 30% | 0% | 22% | 0–5bb | g7 |
| J9 | mp | 46% | 27% | 0% | 23% | Pot is too big | g8 |
| J8 | mp | 44% | 27% | 0% | 22% | Pot is too big | g8 |
| AT | bp | 31% | 15% | 0% | 11% | Pot is too big | g9 |
| KT | bp | 26% | 8% | 0% | 9% | Pot is too big | g9 |
| T9 | bp | 20% | 4% | 0% | 6% | Pot is too big | g9 |
| T8 | bp | 18% | 2% | 0% | 5% | Pot is too big | g9 |
| 99 | pp3 | 15% | 2% | 0% | 5% | Pot is too big | g9 |
| 88 | spp | 14% | 2% | 0% | 4% | Pot is too big | g9 |
| A7 | bp | 7% | 1% | 0% | 1% | Pot is too big | g9 |
| K7 | bp | 4% | 0% | 0% | 0% | Pot is too big | g9 |
| 97 | bp | 3% | 0% | 0% | 0% | Pot is too big | g9 |
| 87 | bp | 2% | 0% | 0% | 0% | Pot is too big | g9 |
| 76 | bp | 2% | 0% | 0% | 0% | Pot is too big | g9 |
| 75 | bp | 2% | 0% | 0% | 0% | Pot is too big | g9 |
| 66 | spp | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| 44 | spp | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| K3 | bp | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| 43 | bp | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| 55 | spp | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| 22 | spp | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A3 | bp | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A9 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A8 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
