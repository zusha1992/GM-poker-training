# A72-Qh-Kd river (A♣ 7♦ 2♠ Q♥ K♦): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | AA–QQ, 77, 22, JT | 100% | 100% | 100% | 100% |
| g2 | 50–100bb | Two pair | AK, AQ, A7, A2, KQ, K7, K2, Q7 | 98% | 100% | 100% | 94% |
| g3 | 25–50bb | Top pair, good kicker | AJ, AT | 77% | 80% | 81% | 45% |
| g4 | 5–15bb | Top pair, weak kicker | A9 | 59% | 50% | 50% | 30% |
| g5 | Pot is too big | Top pair, weak kicker | A8, A6–A3 | 27% | 18% | 18% | 15% |
| g6 | Pot is too big | Second pair | KJ–K8, K6–K3 | 4% | 0% | 0% | 0% |
| g7 | Pot is too big | Small pairs | JJ–88, 66–33, QJ–Q8, Q6, Q5, J7, T7, 97, 87, 76, 75 | 3% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| JT | straight | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AA | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KK | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 22 | twopair | 100% | 100% | 100% | 98% | 50–100bb | g1 |
| A7 | twopair | 99% | 100% | 100% | 98% | 50–100bb | g2 |
| AK | twopair | 99% | 100% | 100% | 98% | 50–100bb | g2 |
| AQ | twopair | 99% | 100% | 100% | 98% | 50–100bb | g2 |
| A2 | twopair | 97% | 100% | 100% | 92% | 50–100bb | g2 |
| K7 | twopair | 97% | 100% | 100% | 90% | 50–100bb | g2 |
| K2 | twopair | 97% | 100% | 100% | 89% | 50–100bb | g2 |
| KQ | twopair | 96% | 100% | 100% | 87% | 50–100bb | g2 |
| Q7 | twopair | 96% | 100% | 100% | 86% | 50–100bb | g2 |
| AT | tpmk | 72% | 70% | 71% | 36% | 25–50bb | g3 |
| AJ | tpmk | 82% | 91% | 91% | 53% | 50–100bb | g3 |
| A9 | tpmk | 58% | 50% | 50% | 30% | 5–15bb | g4 |
| A8 | tpmk | 46% | 36% | 35% | 27% | Pot is too big | g5 |
| A6 | tpwk | 34% | 25% | 26% | 21% | Pot is too big | g5 |
| A5 | tpwk | 26% | 16% | 18% | 15% | Pot is too big | g5 |
| A4 | tpwk | 18% | 9% | 9% | 8% | Pot is too big | g5 |
| A3 | tpwk | 12% | 2% | 2% | 2% | Pot is too big | g5 |
| KJ | mp | 5% | 0% | 0% | 0% | Pot is too big | g6 |
| K9 | mp | 4% | 0% | 0% | 0% | Pot is too big | g6 |
| K8 | mp | 4% | 0% | 0% | 0% | Pot is too big | g6 |
| K3 | mp | 4% | 0% | 0% | 0% | Pot is too big | g6 |
| KT | mp | 4% | 0% | 0% | 0% | Pot is too big | g6 |
| K4 | mp | 4% | 0% | 0% | 0% | Pot is too big | g6 |
| K5 | mp | 4% | 0% | 0% | 0% | Pot is too big | g6 |
| K6 | mp | 3% | 0% | 0% | 0% | Pot is too big | g6 |
| 88 | pp3 | 4% | 0% | 0% | 0% | Pot is too big | g7 |
| Q9 | bp | 4% | 0% | 0% | 0% | Pot is too big | g7 |
| 99 | pp3 | 4% | 0% | 0% | 0% | Pot is too big | g7 |
| JJ | pp3 | 4% | 0% | 0% | 0% | Pot is too big | g7 |
| QT | bp | 4% | 0% | 0% | 0% | Pot is too big | g7 |
| Q6 | bp | 4% | 0% | 0% | 0% | Pot is too big | g7 |
| Q8 | bp | 4% | 0% | 0% | 0% | Pot is too big | g7 |
| Q5 | bp | 4% | 0% | 0% | 0% | Pot is too big | g7 |
| TT | pp3 | 4% | 0% | 0% | 0% | Pot is too big | g7 |
| QJ | bp | 3% | 0% | 0% | 0% | Pot is too big | g7 |
| T7 | bp | 3% | 0% | 0% | 0% | Pot is too big | g7 |
| 97 | bp | 3% | 0% | 0% | 0% | Pot is too big | g7 |
| J7 | bp | 3% | 0% | 0% | 0% | Pot is too big | g7 |
| 87 | bp | 3% | 0% | 0% | 0% | Pot is too big | g7 |
| 76 | bp | 2% | 0% | 0% | 0% | Pot is too big | g7 |
| 75 | bp | 1% | 0% | 0% | 0% | Pot is too big | g7 |
| 66 | pp3 | 0% | 0% | 0% | 0% | Pot is too big | g7 |
| 55 | pp3 | 0% | 0% | 0% | 0% | Pot is too big | g7 |
| 44 | pp3 | 0% | 0% | 0% | 0% | Pot is too big | g7 |
| 33 | pp3 | 0% | 0% | 0% | 0% | Pot is too big | g7 |
