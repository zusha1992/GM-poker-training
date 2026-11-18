# A76-Qc-2s@xx river (A♥ 7♥ 6♣ Q♣ 2♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | AA, QQ, 77, 66, 22 | 100% | 100% | 100% | 85% |
| g2 | 25–50bb | Two pair | AQ, A7, A6, A2, Q7, Q6, 76 | 96% | 99% | 98% | 26% |
| g3 | 25–50bb | Top pair, good kicker | AK, AJ, AT | 90% | 89% | 72% | 6% |
| g4 | 15–25bb | Top pair, weak kicker | A9, A8, A5–A3 | 83% | 69% | 24% | 5% |
| g5 | 0–5bb | Big pocket pairs | KK | 72% | 49% | 0% | 3% |
| g6 | 0–5bb | Second pair | KQ, QJ–Q8, Q5 | 70% | 41% | 0% | 2% |
| g7 | 0–5bb | Small pairs | JJ–88, 55–33, K7, K6, K2, J7, T7, 97, 96, 87, 86, 75, 65, 64 | 53% | 17% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 66 | twopair | 99% | 100% | 100% | 71% | 50–100bb | g1 |
| 22 | twopair | 98% | 100% | 100% | 55% | 50–100bb | g1 |
| AQ | twopair | 97% | 100% | 100% | 39% | 25–50bb | g2 |
| A7 | twopair | 97% | 100% | 100% | 35% | 25–50bb | g2 |
| A6 | twopair | 96% | 100% | 100% | 20% | 25–50bb | g2 |
| A2 | twopair | 96% | 99% | 98% | 19% | 25–50bb | g2 |
| Q7 | twopair | 94% | 97% | 95% | 15% | 25–50bb | g2 |
| Q6 | twopair | 94% | 96% | 93% | 10% | 25–50bb | g2 |
| 76 | twopair | 93% | 94% | 87% | 11% | 25–50bb | g2 |
| AK | tpgk | 91% | 91% | 78% | 6% | 25–50bb | g3 |
| AJ | tpmk | 91% | 90% | 73% | 6% | 25–50bb | g3 |
| AT | tpmk | 89% | 85% | 64% | 6% | 25–50bb | g3 |
| A8 | tpmk | 85% | 75% | 37% | 5% | 15–25bb | g4 |
| A5 | tpmk | 83% | 68% | 21% | 4% | 15–25bb | g4 |
| A4 | tpmk | 81% | 62% | 9% | 4% | 15–25bb | g4 |
| A3 | tpmk | 79% | 60% | 2% | 4% | 5–15bb | g4 |
| A9 | tpmk | 87% | 80% | 50% | 6% | 25–50bb | g4 |
| KK | pp1 | 72% | 49% | 0% | 3% | 0–5bb | g5 |
| KQ | mp | 73% | 45% | 0% | 2% | 0–5bb | g6 |
| QJ | mp | 71% | 44% | 0% | 2% | 0–5bb | g6 |
| QT | mp | 71% | 40% | 0% | 2% | 0–5bb | g6 |
| Q9 | mp | 68% | 37% | 0% | 2% | 0–5bb | g6 |
| Q5 | mp | 66% | 31% | 0% | 1% | 0–5bb | g6 |
| Q8 | mp | 65% | 32% | 0% | 2% | 0–5bb | g6 |
| 99 | pp2 | 61% | 26% | 0% | 0% | 0–5bb | g7 |
| 88 | pp2 | 60% | 23% | 0% | 0% | 0–5bb | g7 |
| TT | pp2 | 60% | 27% | 0% | 0% | 0–5bb | g7 |
| JJ | pp2 | 59% | 26% | 0% | 0% | 0–5bb | g7 |
| 97 | bp | 58% | 21% | 0% | 0% | 0–5bb | g7 |
| J7 | bp | 58% | 22% | 0% | 0% | 0–5bb | g7 |
| 87 | bp | 57% | 20% | 0% | 0% | 0–5bb | g7 |
| K7 | bp | 57% | 21% | 0% | 0% | 0–5bb | g7 |
| 75 | bp | 57% | 18% | 0% | 0% | 0–5bb | g7 |
| T7 | bp | 56% | 22% | 0% | 0% | 0–5bb | g7 |
| K6 | bp | 52% | 15% | 0% | 0% | 0–5bb | g7 |
| 86 | bp | 52% | 13% | 0% | 0% | 0–5bb | g7 |
| 96 | bp | 51% | 15% | 0% | 0% | 0–5bb | g7 |
| 64 | bp | 51% | 10% | 0% | 0% | 0–5bb | g7 |
| 65 | bp | 50% | 11% | 0% | 0% | 0–5bb | g7 |
| 55 | pp3 | 47% | 8% | 0% | 0% | 0–5bb | g7 |
| 44 | pp3 | 44% | 6% | 0% | 0% | 0–5bb | g7 |
| 33 | pp3 | 42% | 4% | 0% | 0% | 0–5bb | g7 |
| K2 | bp | 39% | 3% | 0% | 0% | 0–5bb | g7 |
