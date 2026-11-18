# A72-Qh-Kd@bx river (A♣ 7♦ 2♠ Q♥ K♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | JT | 100% | 100% | 100% | 99% |
| g2 | 25–50bb | Sets | AA–QQ, 77, 22 | 100% | 100% | 100% | 95% |
| g3 | 15–25bb | Two pair | AK, AQ, A7, A2, KQ, K7, K2, Q7 | 98% | 99% | 99% | 80% |
| g4 | 15–25bb | Top pair, good kicker | AJ, AT | 85% | 69% | 66% | 24% |
| g5 | 0–5bb | Top pair, weak kicker | A9, A8, A6–A3 | 69% | 26% | 23% | 0% |
| g6 | 0–5bb | Second pair | KJ–K8, K6–K3 | 49% | 0% | 0% | 0% |
| g7 | 0–5bb | Small pairs | JJ–88, 66–33, QJ–Q8, Q6, Q5, J7, T7, 97, 87, 76, 75 | 37% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| JT | straight | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| QQ | twopair | 100% | 100% | 100% | 96% | 50–100bb | g2 |
| 77 | twopair | 100% | 100% | 100% | 96% | 50–100bb | g2 |
| KK | twopair | 100% | 100% | 100% | 96% | 50–100bb | g2 |
| 22 | twopair | 100% | 100% | 100% | 93% | 50–100bb | g2 |
| AA | twopair | 100% | 100% | 100% | 92% | 50–100bb | g2 |
| A7 | twopair | 100% | 100% | 100% | 92% | 50–100bb | g3 |
| AQ | twopair | 100% | 100% | 100% | 90% | 50–100bb | g3 |
| AK | twopair | 99% | 100% | 100% | 90% | 50–100bb | g3 |
| A2 | twopair | 99% | 100% | 100% | 81% | 50–100bb | g3 |
| KQ | twopair | 98% | 99% | 99% | 67% | 50–100bb | g3 |
| K7 | twopair | 96% | 97% | 97% | 65% | 50–100bb | g3 |
| K2 | twopair | 94% | 95% | 94% | 62% | 50–100bb | g3 |
| Q7 | twopair | 93% | 91% | 90% | 62% | 50–100bb | g3 |
| AJ | tpmk | 87% | 74% | 72% | 38% | 25–50bb | g4 |
| AT | tpmk | 84% | 64% | 61% | 11% | 25–50bb | g4 |
| A9 | tpmk | 80% | 50% | 49% | 0% | 0–5bb | g5 |
| A8 | tpmk | 74% | 39% | 35% | 0% | 0–5bb | g5 |
| A6 | tpwk | 70% | 29% | 26% | 0% | 0–5bb | g5 |
| A5 | tpwk | 66% | 20% | 17% | 0% | 0–5bb | g5 |
| A4 | tpwk | 64% | 12% | 8% | 0% | 0–5bb | g5 |
| A3 | tpwk | 60% | 6% | 2% | 0% | 0–5bb | g5 |
| KJ | mp | 51% | 2% | 0% | 0% | 0–5bb | g6 |
| KT | mp | 50% | 0% | 0% | 0% | 0–5bb | g6 |
| K9 | mp | 49% | 0% | 0% | 0% | 0–5bb | g6 |
| K5 | mp | 48% | 0% | 0% | 0% | 0–5bb | g6 |
| K8 | mp | 48% | 0% | 0% | 0% | 0–5bb | g6 |
| K3 | mp | 47% | 0% | 0% | 0% | 0–5bb | g6 |
| K6 | mp | 47% | 0% | 0% | 0% | 0–5bb | g6 |
| K4 | mp | 46% | 0% | 0% | 0% | 0–5bb | g6 |
| QJ | bp | 48% | 0% | 0% | 0% | 0–5bb | g7 |
| QT | bp | 47% | 0% | 0% | 0% | 0–5bb | g7 |
| Q9 | bp | 46% | 0% | 0% | 0% | 0–5bb | g7 |
| JJ | pp3 | 46% | 0% | 0% | 0% | 0–5bb | g7 |
| TT | pp3 | 46% | 0% | 0% | 0% | 0–5bb | g7 |
| Q8 | bp | 46% | 0% | 0% | 0% | 0–5bb | g7 |
| 99 | pp3 | 45% | 0% | 0% | 0% | 0–5bb | g7 |
| Q6 | bp | 45% | 0% | 0% | 0% | 0–5bb | g7 |
| Q5 | bp | 44% | 0% | 0% | 0% | 0–5bb | g7 |
| 88 | pp3 | 42% | 0% | 0% | 0% | 0–5bb | g7 |
| J7 | bp | 38% | 0% | 0% | 0% | 0–5bb | g7 |
| T7 | bp | 37% | 0% | 0% | 0% | 0–5bb | g7 |
| 97 | bp | 35% | 0% | 0% | 0% | 0–5bb | g7 |
| 87 | bp | 35% | 0% | 0% | 0% | 0–5bb | g7 |
| 76 | bp | 28% | 0% | 0% | 0% | 0–5bb | g7 |
| 75 | bp | 28% | 0% | 0% | 0% | 0–5bb | g7 |
| 66 | pp3 | 24% | 0% | 0% | 0% | 0–5bb | g7 |
| 55 | pp3 | 18% | 0% | 0% | 0% | 0–5bb | g7 |
| 44 | pp3 | 11% | 0% | 0% | 0% | 0–5bb | g7 |
| 33 | pp3 | 5% | 0% | 0% | 0% | 0–5bb | g7 |
