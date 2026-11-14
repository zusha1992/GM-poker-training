# A72-Qh turn (A♣ 7♦ 2♠ Q♥): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets & two pair | AA, QQ, 77, 22, AQ, A7, A2, Q7 | 95% | 92% | 93% | 92% |
| g2 | 25–50bb | Top pair, top kicker | AK, AJ | 89% | 80% | 82% | 80% |
| g3 | 5–15bb | Top pair, weak kicker | AT–A8, A6–A3 | 75% | 42% | 46% | 39% |
| g4 | 5–15bb | Pocket pairs under the A | KK | 56% | 10% | 11% | 6% |
| g5 | 5–15bb | Second pair | KQ, QJ–Q8, Q6, Q5 | 57% | 16% | 12% | 11% |
| g6 | 0–5bb | Small pairs | JJ–88, 66–33, K7, K2, J7, T7, 97, 87, 76, 75 | 40% | 11% | 6% | 7% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | twopair | 99% | 99% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 99% | 99% | 100% | 99% | 50–100bb | g1 |
| AQ | twopair | 96% | 98% | 99% | 99% | 50–100bb | g1 |
| 22 | twopair | 97% | 99% | 99% | 99% | 50–100bb | g1 |
| A7 | twopair | 94% | 89% | 90% | 90% | 50–100bb | g1 |
| Q7 | twopair | 89% | 80% | 79% | 79% | 50–100bb | g1 |
| A2 | twopair | 91% | 80% | 82% | 79% | 50–100bb | g1 |
| AK | tpgk | 89% | 81% | 84% | 82% | 50–100bb | g2 |
| AJ | tpmk | 88% | 79% | 81% | 78% | 50–100bb | g2 |
| A6 | tpwk | 76% | 39% | 46% | 39% | 0–5bb | g3 |
| A5 | tpwk | 72% | 31% | 36% | 27% | 0–5bb | g3 |
| AT | tpmk | 86% | 70% | 72% | 71% | 50–100bb | g3 |
| A4 | tpwk | 68% | 24% | 27% | 17% | 0–5bb | g3 |
| A3 | tpwk | 65% | 20% | 21% | 11% | 0–5bb | g3 |
| A9 | tpmk | 83% | 59% | 63% | 59% | 50–100bb | g3 |
| A8 | tpmk | 79% | 49% | 55% | 49% | 25–50bb | g3 |
| KK | pp1 | 56% | 10% | 11% | 6% | 0–5bb | g4 |
| KQ | mp | 58% | 16% | 14% | 12% | 0–5bb | g5 |
| QJ | mp | 58% | 16% | 12% | 11% | 0–5bb | g5 |
| Q9 | mp | 58% | 17% | 10% | 11% | 0–5bb | g5 |
| Q8 | mp | 57% | 16% | 11% | 11% | 0–5bb | g5 |
| QT | mp | 56% | 17% | 11% | 11% | 0–5bb | g5 |
| Q5 | mp | 56% | 16% | 11% | 11% | 0–5bb | g5 |
| Q6 | mp | 56% | 16% | 10% | 11% | 0–5bb | g5 |
| 99 | pp2 | 53% | 11% | 4% | 5% | 0–5bb | g6 |
| TT | pp2 | 53% | 11% | 4% | 4% | 0–5bb | g6 |
| JJ | pp2 | 52% | 9% | 4% | 4% | 0–5bb | g6 |
| 88 | pp2 | 49% | 11% | 4% | 4% | Pot is too big | g6 |
| J7 | bp | 49% | 14% | 10% | 9% | Pot is too big | g6 |
| T7 | bp | 49% | 15% | 10% | 10% | Pot is too big | g6 |
| K7 | bp | 48% | 15% | 10% | 12% | Pot is too big | g6 |
| 97 | bp | 46% | 14% | 10% | 10% | Pot is too big | g6 |
| 87 | bp | 44% | 14% | 10% | 10% | Pot is too big | g6 |
| 76 | bp | 42% | 13% | 10% | 10% | Pot is too big | g6 |
| 75 | bp | 40% | 13% | 9% | 10% | Pot is too big | g6 |
| 66 | pp3 | 33% | 7% | 4% | 4% | Pot is too big | g6 |
| 55 | pp3 | 28% | 7% | 4% | 4% | Pot is too big | g6 |
| 44 | pp3 | 23% | 7% | 4% | 4% | Pot is too big | g6 |
| K2 | bp | 19% | 13% | 11% | 10% | Pot is too big | g6 |
| 33 | pp3 | 16% | 7% | 5% | 5% | Pot is too big | g6 |
