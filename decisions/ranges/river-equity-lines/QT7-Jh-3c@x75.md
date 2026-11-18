# QT7-Jh-3c@x75 river (Q♥ T♦ 7♠ J♥ 3♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | AK, K9, 98 | 99% | 100% | 100% | 94% |
| g2 | 25–50bb | Sets | QQ–TT, 77, 33 | 94% | 100% | 100% | 58% |
| g3 | 15–25bb | Overpairs | AA, KK | 76% | 65% | 49% | 37% |
| g4 | 15–25bb | Two pair | QJ, QT, Q7, JT, J7, T7 | 87% | 87% | 80% | 43% |
| g5 | 15–25bb | Top pair, good kicker | AQ, KQ | 78% | 66% | 44% | 38% |
| g6 | 0–5bb | Top pair, weak kicker | Q9, Q8, Q6, Q5 | 72% | 56% | 24% | 35% |
| g7 | 0–5bb | Second pair | AJ, KJ, J9, J8 | 53% | 28% | 0% | 25% |
| g8 | 0–5bb | Small pairs | 99, 88, 66–44, 22, AT, A7, A3, KT, K7, K3, T9, T8, 97, 87, 76, 75, 43 | 16% | 2% | 0% | 3% |
| g9 | Pot is too big | Ace-high | A9, A8, A6–A4, A2 | 2% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AK | straight | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K9 | straight | 99% | 100% | 100% | 92% | 50–100bb | g1 |
| 98 | straight | 97% | 100% | 100% | 77% | 50–100bb | g1 |
| 77 | twopair | 94% | 100% | 100% | 61% | 50–100bb | g2 |
| 33 | twopair | 94% | 100% | 100% | 59% | 50–100bb | g2 |
| TT | twopair | 94% | 100% | 100% | 57% | 50–100bb | g2 |
| JJ | twopair | 94% | 100% | 100% | 56% | 50–100bb | g2 |
| QQ | twopair | 95% | 100% | 100% | 56% | 50–100bb | g2 |
| KK | op | 77% | 65% | 48% | 40% | 15–25bb | g3 |
| AA | op | 75% | 65% | 50% | 35% | 15–25bb | g3 |
| QJ | twopair | 91% | 98% | 96% | 50% | 25–50bb | g4 |
| QT | twopair | 89% | 90% | 83% | 42% | 25–50bb | g4 |
| Q7 | twopair | 87% | 86% | 75% | 45% | 25–50bb | g4 |
| JT | twopair | 83% | 79% | 69% | 38% | 25–50bb | g4 |
| J7 | twopair | 81% | 74% | 62% | 41% | 25–50bb | g4 |
| T7 | twopair | 79% | 71% | 56% | 39% | 25–50bb | g4 |
| AQ | tpgk | 78% | 67% | 44% | 38% | 15–25bb | g5 |
| KQ | tpgk | 78% | 66% | 44% | 39% | 15–25bb | g5 |
| Q9 | tpmk | 73% | 61% | 33% | 38% | 15–25bb | g6 |
| Q8 | tpmk | 71% | 55% | 23% | 35% | 5–15bb | g6 |
| Q6 | tpmk | 70% | 52% | 17% | 33% | 5–15bb | g6 |
| Q5 | tpmk | 70% | 51% | 13% | 32% | 5–15bb | g6 |
| AJ | mp | 55% | 31% | 0% | 27% | 0–5bb | g7 |
| KJ | mp | 54% | 27% | 0% | 25% | 0–5bb | g7 |
| J9 | mp | 51% | 24% | 0% | 24% | 0–5bb | g7 |
| J8 | mp | 49% | 22% | 0% | 21% | 0–5bb | g7 |
| AT | bp | 32% | 11% | 0% | 12% | 0–5bb | g8 |
| KT | bp | 31% | 8% | 0% | 9% | 0–5bb | g8 |
| T9 | bp | 26% | 4% | 0% | 5% | 0–5bb | g8 |
| T8 | bp | 24% | 1% | 0% | 6% | 0–5bb | g8 |
| 99 | pp3 | 20% | 1% | 0% | 3% | 0–5bb | g8 |
| 88 | spp | 18% | 1% | 0% | 2% | 0–5bb | g8 |
| A7 | bp | 13% | 1% | 0% | 1% | 0–5bb | g8 |
| K7 | bp | 11% | 0% | 0% | 0% | 0–5bb | g8 |
| 97 | bp | 11% | 0% | 0% | 0% | 0–5bb | g8 |
| 87 | bp | 9% | 0% | 0% | 0% | 0–5bb | g8 |
| 75 | bp | 8% | 0% | 0% | 0% | 0–5bb | g8 |
| 76 | bp | 8% | 0% | 0% | 0% | 0–5bb | g8 |
| 44 | spp | 7% | 0% | 0% | 0% | 0–5bb | g8 |
| 55 | spp | 7% | 0% | 0% | 0% | 0–5bb | g8 |
| K3 | bp | 7% | 0% | 0% | 0% | 0–5bb | g8 |
| 66 | spp | 7% | 0% | 0% | 0% | 0–5bb | g8 |
| 22 | spp | 7% | 0% | 0% | 0% | 0–5bb | g8 |
| 43 | bp | 7% | 0% | 0% | 0% | 0–5bb | g8 |
| A3 | bp | 6% | 0% | 0% | 0% | 0–5bb | g8 |
| A9 | khnd | 4% | 0% | 0% | 0% | Pot is too big | g9 |
| A8 | khnd | 3% | 0% | 0% | 0% | Pot is too big | g9 |
| A4 | khnd | 2% | 0% | 0% | 0% | Pot is too big | g9 |
| A5 | khnd | 2% | 0% | 0% | 0% | Pot is too big | g9 |
| A2 | khnd | 2% | 0% | 0% | 0% | Pot is too big | g9 |
| A6 | khnd | 2% | 0% | 0% | 0% | Pot is too big | g9 |
