# A72-Qh-Kd@b75 river (A♣ 7♦ 2♠ Q♥ K♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | JT | 100% | 100% | 100% | 100% |
| g2 | 25–50bb | Sets | AA–QQ, 77, 22 | 100% | 100% | 100% | 100% |
| g3 | 15–25bb | Two pair | AK, AQ, A7, A2, KQ, K7, K2, Q7 | 98% | 99% | 99% | 90% |
| g4 | 15–25bb | Top pair, good kicker | AJ, AT | 80% | 73% | 72% | 29% |
| g5 | 0–5bb | Top pair, weak kicker | A9, A8, A6–A3 | 47% | 24% | 24% | 5% |
| g6 | 0–5bb | Second pair | KJ–K8, K6–K3 | 17% | 0% | 0% | 0% |
| g7 | 0–5bb | Small pairs | JJ–88, 66–33, QJ–Q8, Q6, Q5, J7, T7, 97, 87, 76, 75 | 11% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| JT | straight | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AA | twopair | 100% | 100% | 100% | 100% | 50–100bb | g2 |
| KK | twopair | 100% | 100% | 100% | 100% | 50–100bb | g2 |
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g2 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g2 |
| 22 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g2 |
| AK | twopair | 100% | 100% | 100% | 100% | 50–100bb | g3 |
| AQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g3 |
| A7 | twopair | 100% | 100% | 100% | 99% | 50–100bb | g3 |
| A2 | twopair | 99% | 100% | 100% | 95% | 50–100bb | g3 |
| KQ | twopair | 96% | 99% | 99% | 79% | 50–100bb | g3 |
| K2 | twopair | 94% | 97% | 97% | 69% | 50–100bb | g3 |
| K7 | twopair | 95% | 97% | 97% | 69% | 50–100bb | g3 |
| Q7 | twopair | 93% | 97% | 96% | 66% | 50–100bb | g3 |
| AJ | tpmk | 84% | 81% | 80% | 41% | 25–50bb | g4 |
| AT | tpmk | 77% | 66% | 65% | 18% | 25–50bb | g4 |
| A8 | tpmk | 59% | 37% | 36% | 9% | 0–5bb | g5 |
| A6 | tpwk | 51% | 28% | 29% | 7% | 0–5bb | g5 |
| A9 | tpmk | 70% | 52% | 51% | 10% | 25–50bb | g5 |
| A5 | tpwk | 43% | 18% | 18% | 3% | 0–5bb | g5 |
| A4 | tpwk | 32% | 9% | 8% | 1% | 0–5bb | g5 |
| A3 | tpwk | 28% | 2% | 2% | 0% | 0–5bb | g5 |
| K4 | mp | 18% | 0% | 0% | 0% | 0–5bb | g6 |
| K3 | mp | 18% | 0% | 0% | 0% | 0–5bb | g6 |
| KJ | mp | 18% | 0% | 0% | 0% | 0–5bb | g6 |
| K5 | mp | 17% | 0% | 0% | 0% | 0–5bb | g6 |
| K9 | mp | 17% | 0% | 0% | 0% | 0–5bb | g6 |
| K8 | mp | 17% | 0% | 0% | 0% | 0–5bb | g6 |
| KT | mp | 17% | 0% | 0% | 0% | 0–5bb | g6 |
| K6 | mp | 16% | 0% | 0% | 0% | 0–5bb | g6 |
| QJ | bp | 16% | 0% | 0% | 0% | 0–5bb | g7 |
| Q5 | bp | 15% | 0% | 0% | 0% | 0–5bb | g7 |
| 99 | pp3 | 14% | 0% | 0% | 0% | 0–5bb | g7 |
| QT | bp | 14% | 0% | 0% | 0% | 0–5bb | g7 |
| TT | pp3 | 14% | 0% | 0% | 0% | 0–5bb | g7 |
| JJ | pp3 | 14% | 0% | 0% | 0% | 0–5bb | g7 |
| Q9 | bp | 14% | 0% | 0% | 0% | 0–5bb | g7 |
| Q6 | bp | 14% | 0% | 0% | 0% | 0–5bb | g7 |
| Q8 | bp | 14% | 0% | 0% | 0% | 0–5bb | g7 |
| 88 | pp3 | 12% | 0% | 0% | 0% | 0–5bb | g7 |
| J7 | bp | 10% | 0% | 0% | 0% | 0–5bb | g7 |
| T7 | bp | 9% | 0% | 0% | 0% | 0–5bb | g7 |
| 97 | bp | 8% | 0% | 0% | 0% | 0–5bb | g7 |
| 87 | bp | 6% | 0% | 0% | 0% | 0–5bb | g7 |
| 76 | bp | 5% | 0% | 0% | 0% | 0–5bb | g7 |
| 75 | bp | 4% | 0% | 0% | 0% | 0–5bb | g7 |
| 66 | pp3 | 3% | 0% | 0% | 0% | 0–5bb | g7 |
| 55 | pp3 | 2% | 0% | 0% | 0% | 0–5bb | g7 |
| 33 | pp3 | 2% | 0% | 0% | 0% | 0–5bb | g7 |
| 44 | pp3 | 1% | 0% | 0% | 0% | 0–5bb | g7 |
