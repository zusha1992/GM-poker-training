# A72-Qh-9c@bx river (A♣ 7♦ 2♠ Q♥ 9♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets & two pair | AA, QQ, 99, 77, 22, AQ, A9 | 99% | 100% | 100% | 87% |
| g2 | 25–50bb | Two pair | A7, A2, Q9, Q7, 97 | 95% | 99% | 99% | 35% |
| g3 | 25–50bb | Top pair, good kicker | AK, AJ, AT | 88% | 87% | 78% | 7% |
| g4 | 15–25bb | Top pair, weak kicker | A8, A6, A5 | 77% | 65% | 42% | 5% |
| g5 | 0–5bb | Top pair, weak kicker | A4, A3 | 67% | 42% | 7% | 0% |
| g6 | 0–5bb | Pocket pairs under the A | KK | 53% | 28% | 0% | 0% |
| g7 | 0–5bb | Second pair | KQ, QJ, QT, Q8, Q6, Q5 | 54% | 28% | 0% | 0% |
| g8 | 0–5bb | Small pairs | JJ, TT, 88, 66–33, K9, K7, K2, J9, J7, T9, T7, 98, 96, 87, 76, 75 | 42% | 19% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 99 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 99% | 100% | 100% | 87% | 50–100bb | g1 |
| 22 | twopair | 99% | 100% | 100% | 86% | 50–100bb | g1 |
| AQ | twopair | 99% | 100% | 100% | 83% | 50–100bb | g1 |
| A9 | twopair | 98% | 100% | 100% | 77% | 50–100bb | g1 |
| A7 | twopair | 96% | 100% | 100% | 43% | 25–50bb | g2 |
| A2 | twopair | 95% | 100% | 100% | 37% | 25–50bb | g2 |
| Q9 | twopair | 96% | 99% | 99% | 33% | 25–50bb | g2 |
| Q7 | twopair | 93% | 99% | 98% | 20% | 25–50bb | g2 |
| 97 | twopair | 92% | 94% | 92% | 10% | 25–50bb | g2 |
| AK | tpgk | 89% | 91% | 84% | 7% | 25–50bb | g3 |
| AJ | tpmk | 88% | 88% | 80% | 7% | 25–50bb | g3 |
| AT | tpmk | 85% | 81% | 69% | 6% | 25–50bb | g3 |
| A6 | tpwk | 76% | 66% | 43% | 6% | 15–25bb | g4 |
| A8 | tpmk | 81% | 74% | 56% | 7% | 25–50bb | g4 |
| A5 | tpwk | 73% | 54% | 28% | 2% | 5–15bb | g4 |
| A4 | tpwk | 69% | 45% | 12% | 0% | 0–5bb | g5 |
| A3 | tpwk | 65% | 38% | 3% | 0% | 0–5bb | g5 |
| KK | pp1 | 53% | 28% | 0% | 0% | 0–5bb | g6 |
| QT | mp | 55% | 28% | 0% | 0% | 0–5bb | g7 |
| QJ | mp | 55% | 27% | 0% | 0% | 0–5bb | g7 |
| Q5 | mp | 54% | 27% | 0% | 0% | 0–5bb | g7 |
| KQ | mp | 54% | 28% | 0% | 0% | 0–5bb | g7 |
| Q8 | mp | 53% | 27% | 0% | 0% | 0–5bb | g7 |
| Q6 | mp | 52% | 28% | 0% | 0% | 0–5bb | g7 |
| K9 | bp | 54% | 26% | 0% | 0% | 0–5bb | g8 |
| T9 | bp | 53% | 26% | 0% | 0% | 0–5bb | g8 |
| TT | pp2 | 53% | 28% | 0% | 0% | 0–5bb | g8 |
| J9 | bp | 53% | 27% | 0% | 0% | 0–5bb | g8 |
| JJ | pp2 | 52% | 27% | 0% | 0% | 0–5bb | g8 |
| 96 | bp | 52% | 26% | 0% | 0% | 0–5bb | g8 |
| 98 | bp | 51% | 24% | 0% | 0% | 0–5bb | g8 |
| 88 | pp3 | 49% | 24% | 0% | 0% | 0–5bb | g8 |
| K7 | bp | 45% | 21% | 0% | 0% | 0–5bb | g8 |
| T7 | bp | 44% | 20% | 0% | 0% | 0–5bb | g8 |
| J7 | bp | 44% | 20% | 0% | 0% | 0–5bb | g8 |
| 87 | bp | 43% | 18% | 0% | 0% | 0–5bb | g8 |
| 76 | bp | 38% | 15% | 0% | 0% | 0–5bb | g8 |
| 75 | bp | 38% | 14% | 0% | 0% | 0–5bb | g8 |
| 66 | pp3 | 34% | 13% | 0% | 0% | 0–5bb | g8 |
| 55 | pp3 | 27% | 10% | 0% | 0% | 0–5bb | g8 |
| 44 | pp3 | 20% | 6% | 0% | 0% | 0–5bb | g8 |
| 33 | pp3 | 14% | 2% | 0% | 0% | 0–5bb | g8 |
| K2 | bp | 9% | 1% | 0% | 0% | 0–5bb | g8 |
