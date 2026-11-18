# A72-Qh-Kd@b200 river (A♣ 7♦ 2♠ Q♥ K♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | AA–QQ, 77, 22, JT | 100% | 100% | 100% | 100% |
| g2 | 50–100bb | Two pair | AK, AQ, A7, A2, KQ, K7, K2, Q7 | 98% | 94% | 94% | 94% |
| g3 | 15–25bb | Top pair, good kicker | AJ | 77% | 49% | 50% | 52% |
| g4 | 0–5bb | Top pair | AT–A8, A6–A3 | 31% | 14% | 14% | 14% |
| g5 | 0–5bb | Second pair | KJ–K8, K6–K3 | 0% | 0% | 0% | 0% |
| g6 | 0–5bb | Small pairs | JJ–88, 66–33, QJ–Q8, Q6, Q5, J7, T7, 97, 87, 76, 75 | 0% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| JT | straight | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AA | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KK | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 22 | twopair | 99% | 98% | 98% | 98% | 50–100bb | g1 |
| A7 | twopair | 99% | 98% | 98% | 98% | 50–100bb | g2 |
| AK | twopair | 99% | 98% | 98% | 98% | 50–100bb | g2 |
| AQ | twopair | 99% | 98% | 98% | 97% | 50–100bb | g2 |
| A2 | twopair | 97% | 93% | 92% | 93% | 50–100bb | g2 |
| K7 | twopair | 96% | 90% | 90% | 90% | 50–100bb | g2 |
| K2 | twopair | 96% | 90% | 90% | 90% | 50–100bb | g2 |
| KQ | twopair | 96% | 87% | 88% | 88% | 50–100bb | g2 |
| Q7 | twopair | 95% | 87% | 87% | 87% | 50–100bb | g2 |
| AJ | tpmk | 77% | 49% | 50% | 52% | 50–100bb | g3 |
| AT | tpmk | 66% | 31% | 31% | 31% | 0–5bb | g4 |
| A9 | tpmk | 52% | 24% | 23% | 23% | 0–5bb | g4 |
| A8 | tpmk | 38% | 17% | 17% | 18% | 0–5bb | g4 |
| A6 | tpwk | 26% | 13% | 14% | 13% | 0–5bb | g4 |
| A5 | tpwk | 19% | 9% | 9% | 9% | 0–5bb | g4 |
| A4 | tpwk | 10% | 5% | 5% | 5% | 0–5bb | g4 |
| A3 | tpwk | 5% | 1% | 1% | 1% | 0–5bb | g4 |
| KJ | mp | 1% | 0% | 0% | 0% | 0–5bb | g5 |
| KT | mp | 0% | 0% | 0% | 0% | 0–5bb | g5 |
| K9 | mp | 0% | 0% | 0% | 0% | 0–5bb | g5 |
| K8 | mp | 0% | 0% | 0% | 0% | 0–5bb | g5 |
| K6 | mp | 0% | 0% | 0% | 0% | 0–5bb | g5 |
| K5 | mp | 0% | 0% | 0% | 0% | 0–5bb | g5 |
| K4 | mp | 0% | 0% | 0% | 0% | 0–5bb | g5 |
| K3 | mp | 0% | 0% | 0% | 0% | 0–5bb | g5 |
| QJ | bp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| QT | bp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| Q9 | bp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| Q8 | bp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| Q6 | bp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| Q5 | bp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| JJ | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| J7 | bp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| TT | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| T7 | bp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| 99 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| 97 | bp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| 88 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| 87 | bp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| 76 | bp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| 75 | bp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| 66 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| 55 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| 44 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| 33 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g6 |
