# QT7-2c-3d river (Q♥ T♦ 7♠ 2♣ 3♦): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | QQ, TT, 77, 33, 22 | 100% | 100% | 100% | 100% |
| g2 | 50–100bb | Two pair | QT, Q7, T7 | 98% | 100% | 100% | 91% |
| g3 | 50–100bb | Overpairs | AA, KK | 91% | 100% | 100% | 71% |
| g4 | 50–100bb | Top pair | AQ, KQ, QJ, Q9 | 87% | 96% | 90% | 60% |
| g5 | 15–25bb | Top pair, good kicker | Q8 | 69% | 74% | 31% | 33% |
| g6 | 5–15bb | Big pocket pairs | JJ | 54% | 53% | 0% | 7% |
| g7 | 0–5bb | Top pair, weak kicker | Q6, Q5 | 66% | 69% | 20% | 24% |
| g8 | 0–5bb | Second pair | AT, KT, JT, T9, T8 | 40% | 36% | 0% | 2% |
| g9 | 0–5bb | Small pairs | 99, 88, 66–44, A7, A3, A2, K7, K3, K2, J7, 97, 87, 76, 75, 43 | 14% | 5% | 0% | 0% |
| g10 | Pot is too big | Ace-high | AK, AJ, A9, A8, A6–A4 | 8% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| TT | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 33 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 22 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| QT | twopair | 98% | 100% | 100% | 92% | 50–100bb | g2 |
| Q7 | twopair | 98% | 100% | 100% | 92% | 50–100bb | g2 |
| T7 | twopair | 93% | 100% | 100% | 78% | 50–100bb | g2 |
| AA | op | 92% | 100% | 100% | 72% | 50–100bb | g3 |
| KK | op | 91% | 100% | 100% | 71% | 50–100bb | g3 |
| AQ | tpgk | 92% | 100% | 100% | 70% | 50–100bb | g4 |
| KQ | tpgk | 91% | 100% | 100% | 64% | 50–100bb | g4 |
| Q9 | tpmk | 76% | 85% | 57% | 44% | 25–50bb | g4 |
| QJ | tpmk | 85% | 96% | 90% | 56% | 50–100bb | g4 |
| Q8 | tpmk | 69% | 73% | 31% | 33% | 15–25bb | g5 |
| JJ | pp1 | 54% | 53% | 0% | 7% | 5–15bb | g6 |
| Q6 | tpmk | 66% | 71% | 24% | 28% | 15–25bb | g7 |
| Q5 | tpmk | 65% | 66% | 16% | 21% | 15–25bb | g7 |
| AT | mp | 48% | 44% | 0% | 5% | 0–5bb | g8 |
| KT | mp | 40% | 38% | 0% | 2% | 0–5bb | g8 |
| JT | mp | 37% | 31% | 0% | 0% | 0–5bb | g8 |
| T9 | mp | 37% | 31% | 0% | 0% | 0–5bb | g8 |
| T8 | mp | 35% | 27% | 0% | 0% | 0–5bb | g8 |
| 99 | pp2 | 26% | 16% | 0% | 0% | 0–5bb | g9 |
| 88 | spp | 25% | 15% | 0% | 0% | 0–5bb | g9 |
| A7 | bp | 21% | 10% | 0% | 0% | 0–5bb | g9 |
| 97 | bp | 19% | 10% | 0% | 0% | 0–5bb | g9 |
| 87 | bp | 18% | 8% | 0% | 0% | 0–5bb | g9 |
| K7 | bp | 18% | 10% | 0% | 0% | 0–5bb | g9 |
| J7 | bp | 17% | 9% | 0% | 0% | 0–5bb | g9 |
| 76 | bp | 15% | 5% | 0% | 0% | 0–5bb | g9 |
| 75 | bp | 13% | 3% | 0% | 0% | 0–5bb | g9 |
| 43 | bp | 9% | 0% | 0% | 0% | 0–5bb | g9 |
| 66 | spp | 9% | 0% | 0% | 0% | 0–5bb | g9 |
| 44 | spp | 9% | 0% | 0% | 0% | 0–5bb | g9 |
| 55 | spp | 9% | 0% | 0% | 0% | 0–5bb | g9 |
| A3 | bp | 9% | 0% | 0% | 0% | 0–5bb | g9 |
| A2 | bp | 9% | 0% | 0% | 0% | 0–5bb | g9 |
| K3 | bp | 8% | 0% | 0% | 0% | 0–5bb | g9 |
| K2 | bp | 7% | 0% | 0% | 0% | 0–5bb | g9 |
| A5 | khnd | 9% | 0% | 0% | 0% | Pot is too big | g10 |
| A8 | khnd | 9% | 0% | 0% | 0% | Pot is too big | g10 |
| A9 | khnd | 8% | 0% | 0% | 0% | Pot is too big | g10 |
| A6 | khnd | 8% | 0% | 0% | 0% | Pot is too big | g10 |
| A4 | khnd | 8% | 0% | 0% | 0% | Pot is too big | g10 |
| AK | khnd | 7% | 0% | 0% | 0% | Pot is too big | g10 |
| AJ | khnd | 7% | 0% | 0% | 0% | Pot is too big | g10 |
