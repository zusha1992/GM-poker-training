# QT7-Jh-3c river (Q♥ T♦ 7♠ J♥ 3♣): equity groups

Generated 2026-11-16 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | AK, K9, 98 | 99% | 100% | 100% | 94% |
| g2 | 25–50bb | Sets | QQ–TT, 77, 33 | 94% | 100% | 100% | 67% |
| g3 | 15–25bb | Overpairs | AA, KK | 78% | 69% | 52% | 40% |
| g4 | 15–25bb | Two pair | QJ, QT, Q7, JT, J7, T7 | 87% | 89% | 83% | 51% |
| g5 | 15–25bb | Top pair, good kicker | AQ, KQ | 78% | 68% | 45% | 39% |
| g6 | 0–5bb | Top pair, weak kicker | Q9, Q8, Q6, Q5 | 70% | 55% | 17% | 29% |
| g7 | 0–5bb | Second pair | AJ, KJ, J9, J8 | 48% | 31% | 0% | 22% |
| g8 | 0–5bb | Small pairs | 99, 88, 66–44, 22, AT, A7, A3, KT, K7, K3, T9, T8, 97, 87, 76, 75, 43 | 11% | 3% | 0% | 3% |
| g9 | Pot is too big | Ace-high | A9, A8, A6–A4, A2 | 0% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AK | straight | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K9 | straight | 99% | 100% | 100% | 91% | 50–100bb | g1 |
| 98 | straight | 96% | 100% | 100% | 78% | 50–100bb | g1 |
| 33 | twopair | 94% | 100% | 100% | 70% | 50–100bb | g2 |
| 77 | twopair | 94% | 100% | 100% | 70% | 50–100bb | g2 |
| TT | twopair | 93% | 100% | 100% | 67% | 50–100bb | g2 |
| JJ | twopair | 93% | 100% | 100% | 64% | 50–100bb | g2 |
| QQ | twopair | 93% | 100% | 100% | 61% | 50–100bb | g2 |
| KK | op | 80% | 67% | 50% | 45% | 15–25bb | g3 |
| AA | op | 76% | 70% | 55% | 35% | 25–50bb | g3 |
| QT | twopair | 88% | 91% | 85% | 50% | 25–50bb | g4 |
| JT | twopair | 84% | 83% | 75% | 46% | 25–50bb | g4 |
| J7 | twopair | 82% | 78% | 65% | 45% | 25–50bb | g4 |
| QJ | twopair | 92% | 97% | 94% | 60% | 50–100bb | g4 |
| T7 | twopair | 80% | 75% | 58% | 39% | 25–50bb | g4 |
| Q7 | twopair | 89% | 92% | 86% | 55% | 50–100bb | g4 |
| AQ | tpgk | 79% | 70% | 48% | 37% | 15–25bb | g5 |
| KQ | tpgk | 77% | 67% | 42% | 41% | 15–25bb | g5 |
| Q5 | tpmk | 66% | 50% | 8% | 27% | 0–5bb | g6 |
| Q9 | tpmk | 73% | 59% | 25% | 32% | 5–15bb | g6 |
| Q8 | tpmk | 68% | 52% | 13% | 27% | 5–15bb | g6 |
| Q6 | tpmk | 67% | 51% | 10% | 27% | 5–15bb | g6 |
| AJ | mp | 50% | 34% | 0% | 20% | 0–5bb | g7 |
| KJ | mp | 49% | 30% | 0% | 23% | 0–5bb | g7 |
| J8 | mp | 45% | 26% | 0% | 21% | 0–5bb | g7 |
| J9 | mp | 44% | 28% | 0% | 23% | 0–5bb | g7 |
| AT | bp | 31% | 14% | 0% | 10% | 0–5bb | g8 |
| KT | bp | 27% | 9% | 0% | 9% | 0–5bb | g8 |
| T9 | bp | 21% | 4% | 0% | 7% | 0–5bb | g8 |
| T8 | bp | 18% | 2% | 0% | 5% | 0–5bb | g8 |
| 99 | pp3 | 15% | 2% | 0% | 5% | 0–5bb | g8 |
| 88 | spp | 13% | 1% | 0% | 4% | 0–5bb | g8 |
| A7 | bp | 7% | 1% | 0% | 1% | 0–5bb | g8 |
| K7 | bp | 5% | 0% | 0% | 0% | 0–5bb | g8 |
| 97 | bp | 3% | 0% | 0% | 0% | 0–5bb | g8 |
| 76 | bp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| 87 | bp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| 75 | bp | 1% | 0% | 0% | 0% | 0–5bb | g8 |
| A3 | bp | 1% | 0% | 0% | 0% | 0–5bb | g8 |
| 44 | spp | 1% | 0% | 0% | 0% | 0–5bb | g8 |
| K3 | bp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 22 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 66 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 43 | bp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 55 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| A9 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A8 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
