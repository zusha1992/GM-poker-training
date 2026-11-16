# A72-Qh-9c@xx river (A♣ 7♦ 2♠ Q♥ 9♣): equity groups

Generated 2026-11-16 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets & two pair | AA, QQ, 99, 77, 22, AQ, A9, A7 | 98% | 100% | 99% | 74% |
| g2 | 25–50bb | Two pair | A2, Q9, Q7, 97 | 94% | 92% | 85% | 27% |
| g3 | 25–50bb | Top pair, good kicker | AK, AJ, AT | 89% | 80% | 59% | 12% |
| g4 | 15–25bb | Top pair, weak kicker | A8, A6, A5 | 84% | 67% | 28% | 12% |
| g5 | 5–15bb | Top pair, weak kicker | A4, A3 | 80% | 55% | 4% | 12% |
| g6 | 0–5bb | Pocket pairs under the A | KK | 72% | 44% | 0% | 10% |
| g7 | 0–5bb | Second pair | KQ, QJ, QT, Q8, Q6, Q5 | 70% | 36% | 0% | 4% |
| g8 | 0–5bb | Small pairs | JJ, TT, 88, 66–33, K9, K7, K2, J9, J7, T9, T7, 98, 96, 87, 76, 75 | 51% | 13% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 99 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 91% | 50–100bb | g1 |
| 22 | twopair | 99% | 100% | 100% | 77% | 50–100bb | g1 |
| AQ | twopair | 97% | 100% | 100% | 71% | 50–100bb | g1 |
| A9 | twopair | 97% | 100% | 99% | 66% | 50–100bb | g1 |
| A7 | twopair | 96% | 98% | 95% | 52% | 50–100bb | g1 |
| A2 | twopair | 95% | 95% | 89% | 35% | 25–50bb | g2 |
| Q9 | twopair | 92% | 89% | 83% | 20% | 25–50bb | g2 |
| Q7 | twopair | 92% | 89% | 81% | 17% | 25–50bb | g2 |
| 97 | twopair | 91% | 87% | 76% | 16% | 25–50bb | g2 |
| AK | tpgk | 90% | 82% | 65% | 12% | 25–50bb | g3 |
| AJ | tpmk | 88% | 81% | 61% | 12% | 25–50bb | g3 |
| AT | tpmk | 88% | 76% | 52% | 12% | 25–50bb | g3 |
| A8 | tpmk | 85% | 72% | 39% | 12% | 15–25bb | g4 |
| A6 | tpwk | 84% | 67% | 28% | 13% | 15–25bb | g4 |
| A5 | tpwk | 82% | 61% | 17% | 12% | 15–25bb | g4 |
| A4 | tpwk | 80% | 56% | 7% | 12% | 5–15bb | g5 |
| A3 | tpwk | 79% | 54% | 1% | 12% | 5–15bb | g5 |
| KK | pp1 | 72% | 44% | 0% | 10% | 0–5bb | g6 |
| KQ | mp | 72% | 41% | 0% | 8% | 0–5bb | g7 |
| QJ | mp | 71% | 37% | 0% | 6% | 0–5bb | g7 |
| QT | mp | 70% | 35% | 0% | 3% | 0–5bb | g7 |
| Q8 | mp | 69% | 32% | 0% | 1% | 0–5bb | g7 |
| Q5 | mp | 67% | 28% | 0% | 0% | 0–5bb | g7 |
| Q6 | mp | 67% | 31% | 0% | 1% | 0–5bb | g7 |
| TT | pp2 | 62% | 25% | 0% | 0% | 0–5bb | g8 |
| JJ | pp2 | 61% | 23% | 0% | 0% | 0–5bb | g8 |
| K9 | bp | 59% | 21% | 0% | 0% | 0–5bb | g8 |
| J9 | bp | 59% | 20% | 0% | 0% | 0–5bb | g8 |
| T9 | bp | 58% | 17% | 0% | 0% | 0–5bb | g8 |
| 98 | bp | 56% | 16% | 0% | 0% | 0–5bb | g8 |
| 96 | bp | 55% | 15% | 0% | 0% | 0–5bb | g8 |
| J7 | bp | 51% | 10% | 0% | 0% | 0–5bb | g8 |
| 88 | pp3 | 51% | 12% | 0% | 0% | 0–5bb | g8 |
| K7 | bp | 50% | 10% | 0% | 0% | 0–5bb | g8 |
| T7 | bp | 49% | 10% | 0% | 0% | 0–5bb | g8 |
| 87 | bp | 49% | 9% | 0% | 0% | 0–5bb | g8 |
| 76 | bp | 48% | 8% | 0% | 0% | 0–5bb | g8 |
| 75 | bp | 47% | 7% | 0% | 0% | 0–5bb | g8 |
| 66 | pp3 | 42% | 6% | 0% | 0% | 0–5bb | g8 |
| 55 | pp3 | 41% | 5% | 0% | 0% | 0–5bb | g8 |
| 44 | pp3 | 40% | 4% | 0% | 0% | 0–5bb | g8 |
| 33 | pp3 | 37% | 3% | 0% | 0% | 0–5bb | g8 |
| K2 | bp | 36% | 2% | 0% | 0% | 0–5bb | g8 |
