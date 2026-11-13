# A72-Qh turn (A♣ 7♦ 2♠ Q♥): equity groups

Generated 2026-11-13 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets & two pair | AA, QQ, 77, 22, AQ, A7, A2, Q7 | 95% | 92% | 92% | 92% |
| g2 | 25–50bb | Top pair, good kicker | AK, AJ, AT | 88% | 77% | 79% | 77% |
| g3 | 5–15bb | Top pair, weak kicker | A9, A8, A6–A3 | 73% | 37% | 41% | 34% |
| g4 | 5–15bb | Pocket pairs under the A | KK | 54% | 10% | 12% | 6% |
| g5 | 5–15bb | Second pair | KQ, QJ–Q8, Q6, Q5 | 57% | 17% | 12% | 11% |
| g6 | 0–5bb | Small pairs | JJ–88, 66–33, K7, K2, J7, T7, 97, 87, 76, 75 | 40% | 11% | 7% | 6% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | twopair | 99% | 99% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 99% | 99% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 99% | 99% | 100% | 100% | 50–100bb | g1 |
| 22 | twopair | 98% | 99% | 99% | 99% | 50–100bb | g1 |
| AQ | twopair | 97% | 98% | 99% | 99% | 50–100bb | g1 |
| A7 | twopair | 94% | 89% | 90% | 89% | 50–100bb | g1 |
| A2 | twopair | 91% | 81% | 82% | 80% | 50–100bb | g1 |
| Q7 | twopair | 89% | 79% | 80% | 79% | 50–100bb | g1 |
| AK | tpgk | 90% | 81% | 84% | 82% | 50–100bb | g2 |
| AJ | tpmk | 89% | 79% | 81% | 80% | 50–100bb | g2 |
| AT | tpmk | 87% | 70% | 73% | 71% | 50–100bb | g2 |
| A6 | tpwk | 75% | 40% | 45% | 39% | 0–5bb | g3 |
| A5 | tpwk | 72% | 32% | 36% | 27% | 0–5bb | g3 |
| A4 | tpwk | 67% | 25% | 27% | 18% | 0–5bb | g3 |
| A3 | tpwk | 65% | 19% | 21% | 10% | 0–5bb | g3 |
| A9 | tpmk | 82% | 59% | 64% | 59% | 50–100bb | g3 |
| A8 | tpmk | 78% | 47% | 53% | 50% | 50–100bb | g3 |
| KK | pp1 | 54% | 10% | 12% | 6% | 0–5bb | g4 |
| KQ | mp | 59% | 16% | 15% | 11% | 0–5bb | g5 |
| QT | mp | 57% | 17% | 11% | 10% | 0–5bb | g5 |
| Q9 | mp | 57% | 16% | 11% | 10% | 0–5bb | g5 |
| QJ | mp | 57% | 17% | 12% | 11% | 0–5bb | g5 |
| Q6 | mp | 56% | 16% | 11% | 10% | 0–5bb | g5 |
| Q8 | mp | 56% | 16% | 10% | 11% | 0–5bb | g5 |
| Q5 | mp | 55% | 16% | 10% | 10% | 0–5bb | g5 |
| TT | pp2 | 53% | 10% | 4% | 4% | 0–5bb | g6 |
| JJ | pp2 | 53% | 9% | 5% | 5% | 0–5bb | g6 |
| 99 | pp2 | 52% | 11% | 5% | 5% | 0–5bb | g6 |
| 88 | pp2 | 50% | 10% | 5% | 4% | 0–5bb | g6 |
| J7 | bp | 49% | 14% | 10% | 10% | Pot is too big | g6 |
| K7 | bp | 48% | 16% | 10% | 11% | Pot is too big | g6 |
| T7 | bp | 47% | 14% | 10% | 10% | Pot is too big | g6 |
| 97 | bp | 47% | 15% | 10% | 10% | Pot is too big | g6 |
| 87 | bp | 44% | 14% | 10% | 10% | Pot is too big | g6 |
| 76 | bp | 41% | 14% | 11% | 10% | Pot is too big | g6 |
| 75 | bp | 41% | 12% | 10% | 10% | Pot is too big | g6 |
| 66 | pp3 | 33% | 8% | 5% | 4% | Pot is too big | g6 |
| 55 | pp3 | 29% | 7% | 4% | 5% | Pot is too big | g6 |
| 44 | pp3 | 23% | 7% | 5% | 4% | Pot is too big | g6 |
| K2 | bp | 19% | 13% | 11% | 11% | Pot is too big | g6 |
| 33 | pp3 | 17% | 7% | 5% | 4% | Pot is too big | g6 |
