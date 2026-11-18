# A72-Qh-Kd@xx river (A♣ 7♦ 2♠ Q♥ K♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | JT | 99% | 100% | 100% | 71% |
| g2 | 25–50bb | Sets | AA–QQ, 77, 22 | 97% | 100% | 100% | 24% |
| g3 | 15–25bb | Two pair | AK, AQ, A7, A2, KQ, K7, K2, Q7 | 93% | 95% | 93% | 7% |
| g4 | 15–25bb | Top pair, good kicker | AJ, AT | 87% | 77% | 65% | 4% |
| g5 | 5–15bb | Top pair, weak kicker | A9, A8, A6 | 82% | 59% | 36% | 3% |
| g6 | 0–5bb | Top pair, weak kicker | A5–A3 | 77% | 41% | 8% | 3% |
| g7 | 0–5bb | Second pair | KJ–K8, K6–K3 | 66% | 16% | 0% | 3% |
| g8 | 0–5bb | Small pairs | JJ–88, 66–33, QJ–Q8, Q6, Q5, J7, T7, 97, 87, 76, 75 | 46% | 1% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| JT | straight | 99% | 100% | 100% | 71% | 50–100bb | g1 |
| AA | twopair | 97% | 100% | 100% | 28% | 25–50bb | g2 |
| KK | twopair | 97% | 100% | 100% | 29% | 25–50bb | g2 |
| QQ | twopair | 97% | 100% | 100% | 29% | 25–50bb | g2 |
| 77 | twopair | 97% | 100% | 100% | 21% | 25–50bb | g2 |
| 22 | twopair | 96% | 100% | 100% | 11% | 25–50bb | g2 |
| AK | twopair | 94% | 100% | 100% | 7% | 25–50bb | g3 |
| AQ | twopair | 94% | 100% | 100% | 7% | 25–50bb | g3 |
| A7 | twopair | 94% | 98% | 97% | 8% | 25–50bb | g3 |
| A2 | twopair | 93% | 94% | 90% | 7% | 25–50bb | g3 |
| KQ | twopair | 91% | 90% | 87% | 7% | 25–50bb | g3 |
| K7 | twopair | 92% | 89% | 86% | 7% | 25–50bb | g3 |
| Q7 | twopair | 91% | 87% | 82% | 6% | 25–50bb | g3 |
| K2 | twopair | 91% | 87% | 82% | 7% | 25–50bb | g3 |
| AJ | tpmk | 88% | 79% | 69% | 5% | 25–50bb | g4 |
| AT | tpmk | 87% | 75% | 60% | 3% | 25–50bb | g4 |
| A9 | tpmk | 85% | 67% | 48% | 2% | 15–25bb | g5 |
| A8 | tpmk | 82% | 59% | 35% | 3% | 5–15bb | g5 |
| A6 | tpwk | 79% | 53% | 24% | 2% | 5–15bb | g5 |
| A5 | tpwk | 78% | 46% | 15% | 3% | 0–5bb | g6 |
| A4 | tpwk | 77% | 39% | 6% | 2% | 0–5bb | g6 |
| A3 | tpwk | 75% | 37% | 1% | 3% | 0–5bb | g6 |
| KJ | mp | 69% | 21% | 0% | 3% | 0–5bb | g7 |
| KT | mp | 69% | 17% | 0% | 3% | 0–5bb | g7 |
| K9 | mp | 66% | 16% | 0% | 2% | 0–5bb | g7 |
| K8 | mp | 64% | 14% | 0% | 2% | 0–5bb | g7 |
| K5 | mp | 63% | 11% | 0% | 3% | 0–5bb | g7 |
| K4 | mp | 63% | 11% | 0% | 2% | 0–5bb | g7 |
| K6 | mp | 62% | 12% | 0% | 2% | 0–5bb | g7 |
| K3 | mp | 61% | 10% | 0% | 2% | 0–5bb | g7 |
| QJ | bp | 57% | 5% | 0% | 2% | 0–5bb | g8 |
| QT | bp | 56% | 3% | 0% | 1% | 0–5bb | g8 |
| Q9 | bp | 53% | 2% | 0% | 0% | 0–5bb | g8 |
| Q6 | bp | 51% | 2% | 0% | 0% | 0–5bb | g8 |
| Q8 | bp | 51% | 2% | 0% | 0% | 0–5bb | g8 |
| Q5 | bp | 49% | 1% | 0% | 0% | 0–5bb | g8 |
| TT | pp3 | 48% | 1% | 0% | 0% | 0–5bb | g8 |
| JJ | pp3 | 47% | 1% | 0% | 0% | 0–5bb | g8 |
| 99 | pp3 | 46% | 1% | 0% | 0% | 0–5bb | g8 |
| T7 | bp | 45% | 0% | 0% | 0% | 0–5bb | g8 |
| 88 | pp3 | 45% | 0% | 0% | 0% | 0–5bb | g8 |
| 97 | bp | 44% | 0% | 0% | 0% | 0–5bb | g8 |
| J7 | bp | 44% | 0% | 0% | 0% | 0–5bb | g8 |
| 87 | bp | 43% | 0% | 0% | 0% | 0–5bb | g8 |
| 75 | bp | 39% | 0% | 0% | 0% | 0–5bb | g8 |
| 76 | bp | 39% | 0% | 0% | 0% | 0–5bb | g8 |
| 55 | pp3 | 35% | 0% | 0% | 0% | 0–5bb | g8 |
| 66 | pp3 | 35% | 0% | 0% | 0% | 0–5bb | g8 |
| 44 | pp3 | 32% | 0% | 0% | 0% | 0–5bb | g8 |
| 33 | pp3 | 29% | 0% | 0% | 0% | 0–5bb | g8 |
