# A72-Qh-9c river (A♣ 7♦ 2♠ Q♥ 9♣): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets & two pair | AA, QQ, 99, 77, 22, AQ, A9, A7, A2, Q9, Q7, 97 | 94% | 100% | 100% | 81% |
| g2 | 25–50bb | Top pair, good kicker | AK, AJ, AT | 69% | 86% | 86% | 48% |
| g3 | 0–5bb | Top pair, weak kicker | A8, A6–A3 | 30% | 26% | 27% | 16% |
| g4 | 0–5bb | Pocket pairs under the A | KK | 6% | 0% | 0% | 0% |
| g5 | 0–5bb | Second pair | KQ, QJ, QT, Q8, Q6, Q5 | 8% | 0% | 0% | 0% |
| g6 | 0–5bb | Small pairs | JJ, TT, 88, 66–33, K9, K7, K2, J9, J7, T9, T7, 98, 96, 87, 76, 75 | 6% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 99 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 22 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AQ | twopair | 99% | 100% | 100% | 100% | 50–100bb | g1 |
| A9 | twopair | 96% | 100% | 100% | 89% | 50–100bb | g1 |
| A7 | twopair | 90% | 100% | 100% | 66% | 50–100bb | g1 |
| Q9 | twopair | 89% | 100% | 99% | 63% | 50–100bb | g1 |
| 97 | twopair | 81% | 97% | 98% | 62% | 50–100bb | g1 |
| A2 | twopair | 88% | 100% | 100% | 61% | 50–100bb | g1 |
| Q7 | twopair | 84% | 99% | 99% | 57% | 50–100bb | g1 |
| AJ | tpmk | 71% | 90% | 90% | 50% | 25–50bb | g2 |
| AT | tpmk | 61% | 73% | 72% | 42% | 25–50bb | g2 |
| AK | tpgk | 75% | 96% | 96% | 53% | 50–100bb | g2 |
| A8 | tpmk | 47% | 53% | 53% | 31% | 25–50bb | g3 |
| A6 | tpwk | 37% | 37% | 37% | 23% | 0–5bb | g3 |
| A5 | tpwk | 30% | 25% | 26% | 16% | 0–5bb | g3 |
| A4 | tpwk | 21% | 13% | 13% | 8% | 0–5bb | g3 |
| A3 | tpwk | 13% | 3% | 3% | 2% | 0–5bb | g3 |
| KK | pp1 | 6% | 0% | 0% | 0% | 0–5bb | g4 |
| QT | mp | 9% | 0% | 0% | 0% | 0–5bb | g5 |
| Q6 | mp | 8% | 0% | 0% | 0% | 0–5bb | g5 |
| Q8 | mp | 8% | 0% | 0% | 0% | 0–5bb | g5 |
| Q5 | mp | 8% | 0% | 0% | 0% | 0–5bb | g5 |
| QJ | mp | 7% | 0% | 0% | 0% | 0–5bb | g5 |
| KQ | mp | 7% | 0% | 0% | 0% | 0–5bb | g5 |
| 88 | pp3 | 9% | 0% | 0% | 0% | 0–5bb | g6 |
| TT | pp2 | 9% | 0% | 0% | 0% | 0–5bb | g6 |
| 98 | bp | 9% | 0% | 0% | 0% | 0–5bb | g6 |
| T9 | bp | 8% | 0% | 0% | 0% | 0–5bb | g6 |
| 96 | bp | 8% | 0% | 0% | 0% | 0–5bb | g6 |
| J9 | bp | 7% | 0% | 0% | 0% | 0–5bb | g6 |
| 87 | bp | 7% | 0% | 0% | 0% | 0–5bb | g6 |
| K9 | bp | 7% | 0% | 0% | 0% | 0–5bb | g6 |
| JJ | pp2 | 6% | 0% | 0% | 0% | 0–5bb | g6 |
| T7 | bp | 6% | 0% | 0% | 0% | 0–5bb | g6 |
| K7 | bp | 6% | 0% | 0% | 0% | 0–5bb | g6 |
| J7 | bp | 6% | 0% | 0% | 0% | 0–5bb | g6 |
| 76 | bp | 5% | 0% | 0% | 0% | 0–5bb | g6 |
| 75 | bp | 4% | 0% | 0% | 0% | 0–5bb | g6 |
| 66 | pp3 | 4% | 0% | 0% | 0% | 0–5bb | g6 |
| 33 | pp3 | 4% | 0% | 0% | 0% | 0–5bb | g6 |
| 44 | pp3 | 4% | 0% | 0% | 0% | 0–5bb | g6 |
| 55 | pp3 | 4% | 0% | 0% | 0% | 0–5bb | g6 |
| K2 | bp | 3% | 0% | 0% | 0% | 0–5bb | g6 |
