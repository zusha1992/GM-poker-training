# A72-Qh-9c@bx river (A♣ 7♦ 2♠ Q♥ 9♣): equity groups

Generated 2026-11-16 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets & two pair | AA, QQ, 99, 77, 22, AQ, A9 | 99% | 100% | 100% | 87% |
| g2 | 25–50bb | Two pair | A7, A2, Q9, Q7, 97 | 95% | 99% | 99% | 34% |
| g3 | 25–50bb | Top pair, good kicker | AK, AJ, AT | 87% | 87% | 78% | 7% |
| g4 | 15–25bb | Top pair, weak kicker | A8, A6, A5 | 76% | 65% | 43% | 5% |
| g5 | 0–5bb | Top pair, weak kicker | A4, A3 | 67% | 42% | 8% | 0% |
| g6 | 0–5bb | Pocket pairs under the A | KK | 53% | 29% | 0% | 0% |
| g7 | 0–5bb | Second pair | KQ, QJ, QT, Q8, Q6, Q5 | 55% | 28% | 0% | 0% |
| g8 | 0–5bb | Small pairs | JJ, TT, 88, 66–33, K9, K7, K2, J9, J7, T9, T7, 98, 96, 87, 76, 75 | 41% | 19% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 99 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 99% | 100% | 100% | 87% | 50–100bb | g1 |
| 22 | twopair | 99% | 100% | 100% | 87% | 50–100bb | g1 |
| AQ | twopair | 99% | 100% | 100% | 84% | 50–100bb | g1 |
| A9 | twopair | 98% | 100% | 100% | 76% | 50–100bb | g1 |
| A7 | twopair | 96% | 100% | 100% | 42% | 25–50bb | g2 |
| A2 | twopair | 95% | 100% | 100% | 37% | 25–50bb | g2 |
| Q9 | twopair | 95% | 99% | 99% | 31% | 25–50bb | g2 |
| Q7 | twopair | 93% | 99% | 98% | 19% | 25–50bb | g2 |
| 97 | twopair | 92% | 94% | 91% | 11% | 25–50bb | g2 |
| AK | tpgk | 89% | 91% | 85% | 7% | 25–50bb | g3 |
| AJ | tpmk | 88% | 88% | 80% | 6% | 25–50bb | g3 |
| AT | tpmk | 85% | 82% | 70% | 7% | 25–50bb | g3 |
| A6 | tpwk | 76% | 66% | 44% | 6% | 15–25bb | g4 |
| A8 | tpmk | 80% | 73% | 57% | 7% | 25–50bb | g4 |
| A5 | tpwk | 72% | 55% | 27% | 2% | 5–15bb | g4 |
| A4 | tpwk | 67% | 45% | 12% | 0% | 0–5bb | g5 |
| A3 | tpwk | 66% | 39% | 3% | 0% | 0–5bb | g5 |
| KK | pp1 | 53% | 29% | 0% | 0% | 0–5bb | g6 |
| QJ | mp | 56% | 28% | 0% | 0% | 0–5bb | g7 |
| KQ | mp | 55% | 29% | 0% | 0% | 0–5bb | g7 |
| Q5 | mp | 54% | 27% | 0% | 0% | 0–5bb | g7 |
| QT | mp | 54% | 27% | 0% | 0% | 0–5bb | g7 |
| Q8 | mp | 54% | 26% | 0% | 0% | 0–5bb | g7 |
| Q6 | mp | 53% | 28% | 0% | 0% | 0–5bb | g7 |
| T9 | bp | 54% | 27% | 0% | 0% | 0–5bb | g8 |
| TT | pp2 | 53% | 27% | 0% | 0% | 0–5bb | g8 |
| 98 | bp | 53% | 24% | 0% | 0% | 0–5bb | g8 |
| K9 | bp | 53% | 25% | 0% | 0% | 0–5bb | g8 |
| J9 | bp | 52% | 26% | 0% | 0% | 0–5bb | g8 |
| 96 | bp | 52% | 27% | 0% | 0% | 0–5bb | g8 |
| JJ | pp2 | 52% | 27% | 0% | 0% | 0–5bb | g8 |
| 88 | pp3 | 51% | 24% | 0% | 0% | 0–5bb | g8 |
| K7 | bp | 45% | 20% | 0% | 0% | 0–5bb | g8 |
| J7 | bp | 44% | 20% | 0% | 0% | 0–5bb | g8 |
| T7 | bp | 43% | 18% | 0% | 0% | 0–5bb | g8 |
| 87 | bp | 43% | 18% | 0% | 0% | 0–5bb | g8 |
| 76 | bp | 37% | 14% | 0% | 0% | 0–5bb | g8 |
| 75 | bp | 36% | 13% | 0% | 0% | 0–5bb | g8 |
| 66 | pp3 | 32% | 13% | 0% | 0% | 0–5bb | g8 |
| 55 | pp3 | 27% | 10% | 0% | 0% | 0–5bb | g8 |
| 44 | pp3 | 20% | 7% | 0% | 0% | 0–5bb | g8 |
| 33 | pp3 | 13% | 2% | 0% | 0% | 0–5bb | g8 |
| K2 | bp | 10% | 1% | 0% | 0% | 0–5bb | g8 |
