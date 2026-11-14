# A76-Qc-2s river (A♥ 7♥ 6♣ Q♣ 2♠): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | AA, QQ, 77, 66, 22 | 100% | 100% | 100% | 100% |
| g2 | 50–100bb | Two pair | AQ, A7, A6, A2, Q7, Q6, 76 | 98% | 100% | 100% | 90% |
| g3 | 50–100bb | Top pair, good kicker | AK, AJ, AT | 85% | 85% | 84% | 50% |
| g4 | 25–50bb | Top pair, weak kicker | A9 | 71% | 64% | 64% | 42% |
| g5 | 0–5bb | Top pair, weak kicker | A8, A5 | 56% | 35% | 35% | 22% |
| g6 | Pot is too big | Top pair, weak kicker | A4, A3 | 42% | 6% | 6% | 4% |
| g7 | Pot is too big | Big pocket pairs | KK | 29% | 0% | 0% | 0% |
| g8 | Pot is too big | Second pair | KQ, QJ–Q8, Q5 | 28% | 0% | 0% | 0% |
| g9 | Pot is too big | Small pairs | JJ–88, 55–33, K7, K6, K2, J7, T7, 97, 96, 87, 86, 75, 65, 64 | 16% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 66 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 22 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g2 |
| A7 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g2 |
| A6 | twopair | 99% | 100% | 100% | 94% | 50–100bb | g2 |
| A2 | twopair | 96% | 100% | 100% | 81% | 50–100bb | g2 |
| Q7 | twopair | 93% | 100% | 100% | 71% | 50–100bb | g2 |
| Q6 | twopair | 94% | 99% | 99% | 70% | 50–100bb | g2 |
| 76 | twopair | 92% | 96% | 96% | 67% | 50–100bb | g2 |
| AT | tpmk | 80% | 79% | 77% | 48% | 25–50bb | g3 |
| AK | tpgk | 88% | 89% | 89% | 52% | 50–100bb | g3 |
| AJ | tpmk | 86% | 86% | 87% | 51% | 50–100bb | g3 |
| A9 | tpmk | 70% | 64% | 64% | 42% | 25–50bb | g4 |
| A8 | tpmk | 61% | 45% | 46% | 29% | 0–5bb | g5 |
| A5 | tpmk | 52% | 25% | 25% | 16% | 0–5bb | g5 |
| A4 | tpmk | 44% | 10% | 10% | 6% | Pot is too big | g6 |
| A3 | tpmk | 41% | 2% | 2% | 1% | Pot is too big | g6 |
| KK | pp1 | 29% | 0% | 0% | 0% | Pot is too big | g7 |
| KQ | mp | 29% | 0% | 0% | 0% | Pot is too big | g8 |
| Q9 | mp | 28% | 0% | 0% | 0% | Pot is too big | g8 |
| QJ | mp | 28% | 0% | 0% | 0% | Pot is too big | g8 |
| Q5 | mp | 28% | 0% | 0% | 0% | Pot is too big | g8 |
| QT | mp | 27% | 0% | 0% | 0% | Pot is too big | g8 |
| Q8 | mp | 27% | 0% | 0% | 0% | Pot is too big | g8 |
| JJ | pp2 | 26% | 0% | 0% | 0% | Pot is too big | g9 |
| TT | pp2 | 26% | 0% | 0% | 0% | Pot is too big | g9 |
| 99 | pp2 | 25% | 0% | 0% | 0% | Pot is too big | g9 |
| 88 | pp2 | 25% | 0% | 0% | 0% | Pot is too big | g9 |
| K7 | bp | 21% | 0% | 0% | 0% | Pot is too big | g9 |
| J7 | bp | 21% | 0% | 0% | 0% | Pot is too big | g9 |
| T7 | bp | 20% | 0% | 0% | 0% | Pot is too big | g9 |
| 97 | bp | 19% | 0% | 0% | 0% | Pot is too big | g9 |
| 87 | bp | 18% | 0% | 0% | 0% | Pot is too big | g9 |
| 75 | bp | 16% | 0% | 0% | 0% | Pot is too big | g9 |
| K6 | bp | 12% | 0% | 0% | 0% | Pot is too big | g9 |
| 96 | bp | 11% | 0% | 0% | 0% | Pot is too big | g9 |
| 86 | bp | 9% | 0% | 0% | 0% | Pot is too big | g9 |
| 65 | bp | 9% | 0% | 0% | 0% | Pot is too big | g9 |
| 64 | bp | 8% | 0% | 0% | 0% | Pot is too big | g9 |
| 55 | pp3 | 7% | 0% | 0% | 0% | Pot is too big | g9 |
| 44 | pp3 | 7% | 0% | 0% | 0% | Pot is too big | g9 |
| 33 | pp3 | 6% | 0% | 0% | 0% | Pot is too big | g9 |
| K2 | bp | 6% | 0% | 0% | 0% | Pot is too big | g9 |
