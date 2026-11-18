# 886-Jd-3h@xx river (8♠ 8♦ 6♣ J♦ 3♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Full houses | JJ, 88, 66, 33, J8, 86 | 99% | 100% | 100% | 91% |
| g2 | 25–50bb | Trips | A8, K8, Q8, T8, 98, 87 | 97% | 100% | 100% | 23% |
| g3 | 25–50bb | Overpairs | AA–QQ | 92% | 100% | 100% | 7% |
| g4 | 25–50bb | Top pair | AJ, KJ, QJ, JT, J9, J7 | 89% | 95% | 69% | 6% |
| g5 | 15–25bb | Pocket pairs under the J | TT, 99 | 77% | 80% | 9% | 4% |
| g6 | 15–25bb | Small pairs | 77, A6, K6, Q6, 96, 76, 65, 64 | 72% | 72% | 7% | 3% |
| g7 | 0–5bb | Small pairs | 55, 44, 22, A3, K3, 43 | 60% | 42% | 0% | 0% |
| g8 | 0–5bb | Ace-high | AK, AQ, AT, A9, A7, A5, A4, A2 | 45% | 16% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| J8 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 88 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 86 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| JJ | boat | 100% | 100% | 100% | 95% | 50–100bb | g1 |
| 66 | boat | 99% | 100% | 100% | 92% | 50–100bb | g1 |
| 33 | boat | 98% | 100% | 100% | 73% | 50–100bb | g1 |
| A8 | trips | 97% | 100% | 100% | 34% | 25–50bb | g2 |
| K8 | trips | 97% | 100% | 100% | 18% | 25–50bb | g2 |
| Q8 | trips | 97% | 100% | 100% | 16% | 25–50bb | g2 |
| T8 | trips | 96% | 100% | 100% | 14% | 25–50bb | g2 |
| 98 | trips | 96% | 100% | 100% | 12% | 25–50bb | g2 |
| 87 | trips | 95% | 100% | 100% | 12% | 25–50bb | g2 |
| AA | op | 92% | 100% | 100% | 7% | 25–50bb | g3 |
| KK | op | 91% | 100% | 100% | 6% | 25–50bb | g3 |
| QQ | op | 92% | 100% | 100% | 7% | 25–50bb | g3 |
| AJ | tpgk | 92% | 100% | 98% | 6% | 25–50bb | g4 |
| J9 | tpmk | 85% | 92% | 47% | 6% | 15–25bb | g4 |
| J7 | tpmk | 83% | 91% | 42% | 6% | 15–25bb | g4 |
| KJ | tpgk | 91% | 97% | 83% | 6% | 25–50bb | g4 |
| QJ | tpmk | 89% | 95% | 63% | 6% | 25–50bb | g4 |
| JT | tpmk | 87% | 92% | 52% | 6% | 25–50bb | g4 |
| TT | pp1 | 77% | 80% | 10% | 4% | 15–25bb | g5 |
| 99 | pp1 | 77% | 79% | 9% | 5% | 15–25bb | g5 |
| 77 | pp2 | 75% | 80% | 9% | 4% | 15–25bb | g6 |
| K6 | bp | 73% | 74% | 6% | 2% | 15–25bb | g6 |
| A6 | bp | 73% | 74% | 6% | 3% | 15–25bb | g6 |
| Q6 | bp | 72% | 70% | 6% | 2% | 15–25bb | g6 |
| 96 | bp | 70% | 67% | 6% | 2% | 15–25bb | g6 |
| 76 | bp | 72% | 63% | 6% | 2% | 15–25bb | g6 |
| 65 | bp | 69% | 63% | 6% | 2% | 15–25bb | g6 |
| 64 | bp | 69% | 58% | 6% | 2% | 5–15bb | g6 |
| 55 | pp3 | 65% | 49% | 0% | 0% | 0–5bb | g7 |
| 44 | pp3 | 62% | 47% | 0% | 0% | 0–5bb | g7 |
| K3 | bp | 60% | 42% | 0% | 0% | 0–5bb | g7 |
| A3 | bp | 59% | 39% | 0% | 0% | 0–5bb | g7 |
| 43 | bp | 58% | 40% | 0% | 0% | 0–5bb | g7 |
| 22 | pp3 | 55% | 34% | 0% | 0% | 0–5bb | g7 |
| AQ | khnd | 52% | 28% | 0% | 0% | 0–5bb | g8 |
| AK | khnd | 52% | 27% | 0% | 0% | 0–5bb | g8 |
| AT | khnd | 51% | 25% | 0% | 0% | 0–5bb | g8 |
| A9 | khnd | 47% | 19% | 0% | 0% | 0–5bb | g8 |
| A7 | khnd | 43% | 12% | 0% | 0% | 0–5bb | g8 |
| A5 | khnd | 41% | 8% | 0% | 0% | 0–5bb | g8 |
| A4 | khnd | 37% | 5% | 0% | 0% | 0–5bb | g8 |
| A2 | khnd | 36% | 3% | 0% | 0% | 0–5bb | g8 |
