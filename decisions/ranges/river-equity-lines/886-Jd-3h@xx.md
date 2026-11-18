# 886-Jd-3h@xx river (8♠ 8♦ 6♣ J♦ 3♥): equity groups

Generated 2026-11-17 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Full houses | JJ, 88, 66, 33, J8, 86 | 100% | 100% | 100% | 91% |
| g2 | 25–50bb | Trips | A8, K8, Q8, T8, 98, 87 | 97% | 100% | 100% | 23% |
| g3 | 25–50bb | Overpairs | AA–QQ | 92% | 100% | 100% | 7% |
| g4 | 25–50bb | Top pair | AJ, KJ, QJ, JT, J9, J7 | 89% | 95% | 69% | 6% |
| g5 | 15–25bb | Pocket pairs under the J | TT, 99 | 77% | 81% | 9% | 5% |
| g6 | 15–25bb | Small pairs | 77, A6, K6, Q6, 96, 76, 65 | 73% | 72% | 6% | 3% |
| g7 | 5–15bb | Small pairs | 55, 64 | 64% | 53% | 2% | 0% |
| g8 | 0–5bb | Small pairs | 44, 22, A3, K3, 43 | 60% | 41% | 0% | 0% |
| g9 | 0–5bb | Ace-high, good kicker | AK, AQ, AT | 51% | 28% | 0% | 0% |
| g10 | Pot is too big | Ace-high | A9, A7, A5, A4, A2 | 41% | 10% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| J8 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 88 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 86 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| JJ | boat | 100% | 100% | 100% | 95% | 50–100bb | g1 |
| 66 | boat | 99% | 100% | 100% | 92% | 50–100bb | g1 |
| 33 | boat | 99% | 100% | 100% | 74% | 50–100bb | g1 |
| A8 | trips | 97% | 100% | 100% | 34% | 25–50bb | g2 |
| K8 | trips | 97% | 100% | 100% | 19% | 25–50bb | g2 |
| Q8 | trips | 97% | 100% | 100% | 16% | 25–50bb | g2 |
| T8 | trips | 96% | 100% | 100% | 15% | 25–50bb | g2 |
| 98 | trips | 96% | 100% | 100% | 13% | 25–50bb | g2 |
| 87 | trips | 95% | 100% | 100% | 12% | 25–50bb | g2 |
| AA | op | 92% | 100% | 100% | 7% | 25–50bb | g3 |
| KK | op | 92% | 100% | 100% | 7% | 25–50bb | g3 |
| QQ | op | 91% | 100% | 100% | 6% | 25–50bb | g3 |
| AJ | tpgk | 92% | 100% | 98% | 6% | 25–50bb | g4 |
| J9 | tpmk | 86% | 92% | 46% | 5% | 15–25bb | g4 |
| J7 | tpmk | 84% | 91% | 43% | 6% | 15–25bb | g4 |
| KJ | tpgk | 90% | 98% | 83% | 6% | 25–50bb | g4 |
| QJ | tpmk | 89% | 95% | 62% | 6% | 25–50bb | g4 |
| JT | tpmk | 87% | 92% | 52% | 5% | 25–50bb | g4 |
| TT | pp1 | 77% | 82% | 10% | 4% | 15–25bb | g5 |
| 99 | pp1 | 76% | 80% | 9% | 5% | 15–25bb | g5 |
| 77 | pp2 | 76% | 79% | 9% | 4% | 15–25bb | g6 |
| A6 | bp | 72% | 74% | 6% | 3% | 15–25bb | g6 |
| K6 | bp | 73% | 73% | 6% | 2% | 15–25bb | g6 |
| Q6 | bp | 72% | 70% | 6% | 2% | 15–25bb | g6 |
| 96 | bp | 71% | 66% | 6% | 2% | 15–25bb | g6 |
| 76 | bp | 71% | 65% | 6% | 2% | 15–25bb | g6 |
| 65 | bp | 70% | 61% | 6% | 2% | 15–25bb | g6 |
| 64 | bp | 68% | 58% | 7% | 2% | 5–15bb | g7 |
| 55 | pp3 | 63% | 51% | 0% | 0% | 5–15bb | g7 |
| 44 | pp3 | 63% | 46% | 0% | 0% | 0–5bb | g8 |
| K3 | bp | 62% | 42% | 0% | 0% | 0–5bb | g8 |
| A3 | bp | 61% | 41% | 0% | 0% | 0–5bb | g8 |
| 43 | bp | 59% | 39% | 0% | 0% | 0–5bb | g8 |
| 22 | pp3 | 55% | 34% | 0% | 0% | 0–5bb | g8 |
| AQ | khnd | 53% | 30% | 0% | 0% | 0–5bb | g9 |
| AK | khnd | 52% | 29% | 0% | 0% | 0–5bb | g9 |
| AT | khnd | 49% | 25% | 0% | 0% | Pot is too big | g9 |
| A9 | khnd | 48% | 19% | 0% | 0% | Pot is too big | g10 |
| A7 | khnd | 44% | 12% | 0% | 0% | Pot is too big | g10 |
| A5 | khnd | 40% | 8% | 0% | 0% | Pot is too big | g10 |
| A4 | khnd | 38% | 5% | 0% | 0% | Pot is too big | g10 |
| A2 | khnd | 36% | 3% | 0% | 0% | Pot is too big | g10 |
