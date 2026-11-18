# 886-Jd-3h@bx river (8♠ 8♦ 6♣ J♦ 3♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Full houses | JJ, 88, 66, 33, J8, 86 | 99% | 100% | 100% | 95% |
| g2 | 25–50bb | Trips | A8, K8, Q8, T8, 98, 87 | 94% | 100% | 100% | 26% |
| g3 | 25–50bb | Overpairs | AA–QQ | 87% | 100% | 100% | 0% |
| g4 | 15–25bb | Top pair | AJ, KJ, QJ, JT, J9, J7 | 82% | 92% | 10% | 0% |
| g5 | 15–25bb | Pocket pairs under the J | TT, 99 | 76% | 86% | 0% | 0% |
| g6 | 15–25bb | Small pairs | 77, 55, 44, A6, K6, Q6, 96, 76, 65, 64 | 69% | 77% | 0% | 0% |
| g7 | 5–15bb | Small pairs | 22, A3, K3, 43 | 54% | 53% | 0% | 0% |
| g8 | 0–5bb | Ace-high | AK, AQ, AT, A9, A7, A5, A4, A2 | 30% | 21% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| JJ | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J8 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 88 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 86 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 66 | boat | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| 33 | boat | 98% | 100% | 100% | 82% | 50–100bb | g1 |
| A8 | trips | 95% | 100% | 100% | 35% | 25–50bb | g2 |
| K8 | trips | 94% | 100% | 100% | 25% | 25–50bb | g2 |
| Q8 | trips | 94% | 100% | 100% | 24% | 25–50bb | g2 |
| T8 | trips | 94% | 100% | 100% | 20% | 25–50bb | g2 |
| 98 | trips | 93% | 100% | 100% | 13% | 25–50bb | g2 |
| 87 | trips | 92% | 100% | 100% | 6% | 25–50bb | g2 |
| AA | op | 86% | 100% | 100% | 0% | 25–50bb | g3 |
| KK | op | 87% | 100% | 100% | 0% | 25–50bb | g3 |
| QQ | op | 87% | 100% | 100% | 0% | 25–50bb | g3 |
| QJ | tpmk | 80% | 91% | 0% | 0% | 15–25bb | g4 |
| KJ | tpgk | 83% | 91% | 0% | 0% | 15–25bb | g4 |
| JT | tpmk | 80% | 91% | 0% | 0% | 15–25bb | g4 |
| J9 | tpmk | 81% | 90% | 0% | 0% | 15–25bb | g4 |
| J7 | tpmk | 80% | 90% | 0% | 0% | 15–25bb | g4 |
| AJ | tpgk | 85% | 96% | 50% | 0% | 25–50bb | g4 |
| TT | pp1 | 77% | 86% | 0% | 0% | 15–25bb | g5 |
| 99 | pp1 | 76% | 85% | 0% | 0% | 15–25bb | g5 |
| A6 | bp | 73% | 87% | 0% | 0% | 15–25bb | g6 |
| 77 | pp2 | 76% | 85% | 0% | 0% | 15–25bb | g6 |
| K6 | bp | 74% | 84% | 0% | 0% | 15–25bb | g6 |
| Q6 | bp | 72% | 80% | 0% | 0% | 15–25bb | g6 |
| 96 | bp | 70% | 74% | 0% | 0% | 15–25bb | g6 |
| 76 | bp | 70% | 73% | 0% | 0% | 15–25bb | g6 |
| 65 | bp | 68% | 70% | 0% | 0% | 15–25bb | g6 |
| 64 | bp | 67% | 69% | 0% | 0% | 15–25bb | g6 |
| 55 | pp3 | 62% | 63% | 0% | 0% | 15–25bb | g6 |
| 44 | pp3 | 57% | 61% | 0% | 0% | 15–25bb | g6 |
| 43 | bp | 57% | 58% | 0% | 0% | 5–15bb | g7 |
| K3 | bp | 55% | 56% | 0% | 0% | 5–15bb | g7 |
| 22 | pp3 | 52% | 54% | 0% | 0% | 5–15bb | g7 |
| A3 | bp | 53% | 51% | 0% | 0% | 5–15bb | g7 |
| AK | khnd | 47% | 47% | 0% | 0% | 0–5bb | g8 |
| AQ | khnd | 46% | 47% | 0% | 0% | 0–5bb | g8 |
| AT | khnd | 41% | 39% | 0% | 0% | 0–5bb | g8 |
| A9 | khnd | 31% | 21% | 0% | 0% | 0–5bb | g8 |
| A7 | khnd | 22% | 7% | 0% | 0% | 0–5bb | g8 |
| A4 | khnd | 19% | 1% | 0% | 0% | 0–5bb | g8 |
| A5 | khnd | 18% | 2% | 0% | 0% | 0–5bb | g8 |
| A2 | khnd | 18% | 0% | 0% | 0% | 0–5bb | g8 |
