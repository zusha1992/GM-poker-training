# A76-Qc-2s@bx river (A♥ 7♥ 6♣ Q♣ 2♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | AA, QQ, 77, 66, 22 | 100% | 100% | 100% | 100% |
| g2 | 50–100bb | Two pair | AQ, A7, A6, A2 | 98% | 100% | 100% | 73% |
| g3 | 25–50bb | Two pair | Q7, Q6, 76 | 94% | 98% | 97% | 31% |
| g4 | 25–50bb | Top pair, good kicker | AK, AJ, AT | 89% | 87% | 81% | 16% |
| g5 | 15–25bb | Top pair, weak kicker | A9, A8, A5 | 77% | 64% | 44% | 12% |
| g6 | 0–5bb | Top pair, weak kicker | A4, A3 | 67% | 40% | 6% | 1% |
| g7 | 0–5bb | Big pocket pairs | KK | 54% | 26% | 0% | 0% |
| g8 | 0–5bb | Second pair | KQ, QJ–Q8, Q5 | 56% | 26% | 0% | 0% |
| g9 | 0–5bb | Small pairs | JJ–88, 55–33, K7, K6, K2, J7, T7, 97, 96, 87, 86, 75, 65, 64 | 39% | 14% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 66 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 22 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AQ | twopair | 99% | 100% | 100% | 84% | 50–100bb | g2 |
| A7 | twopair | 98% | 100% | 100% | 79% | 50–100bb | g2 |
| A6 | twopair | 98% | 100% | 100% | 70% | 50–100bb | g2 |
| A2 | twopair | 97% | 100% | 100% | 61% | 50–100bb | g2 |
| Q7 | twopair | 94% | 99% | 98% | 35% | 25–50bb | g3 |
| Q6 | twopair | 94% | 98% | 97% | 31% | 25–50bb | g3 |
| 76 | twopair | 93% | 96% | 95% | 26% | 25–50bb | g3 |
| AK | tpgk | 90% | 92% | 88% | 17% | 25–50bb | g4 |
| AJ | tpmk | 89% | 89% | 83% | 17% | 25–50bb | g4 |
| AT | tpmk | 86% | 81% | 71% | 16% | 25–50bb | g4 |
| A8 | tpmk | 77% | 65% | 45% | 13% | 15–25bb | g5 |
| A9 | tpmk | 81% | 73% | 59% | 18% | 25–50bb | g5 |
| A5 | tpmk | 72% | 53% | 28% | 5% | 5–15bb | g5 |
| A4 | tpmk | 68% | 42% | 10% | 1% | 0–5bb | g6 |
| A3 | tpmk | 65% | 37% | 2% | 0% | 0–5bb | g6 |
| KK | pp1 | 54% | 26% | 0% | 0% | 0–5bb | g7 |
| KQ | mp | 57% | 26% | 0% | 0% | 0–5bb | g8 |
| QJ | mp | 57% | 25% | 0% | 0% | 0–5bb | g8 |
| Q9 | mp | 56% | 25% | 0% | 0% | 0–5bb | g8 |
| QT | mp | 55% | 26% | 0% | 0% | 0–5bb | g8 |
| Q5 | mp | 55% | 25% | 0% | 0% | 0–5bb | g8 |
| Q8 | mp | 55% | 25% | 0% | 0% | 0–5bb | g8 |
| JJ | pp2 | 54% | 25% | 0% | 0% | 0–5bb | g9 |
| TT | pp2 | 54% | 25% | 0% | 0% | 0–5bb | g9 |
| 88 | pp2 | 53% | 23% | 0% | 0% | 0–5bb | g9 |
| 99 | pp2 | 52% | 24% | 0% | 0% | 0–5bb | g9 |
| K7 | bp | 47% | 20% | 0% | 0% | 0–5bb | g9 |
| J7 | bp | 46% | 19% | 0% | 0% | 0–5bb | g9 |
| T7 | bp | 46% | 18% | 0% | 0% | 0–5bb | g9 |
| 97 | bp | 45% | 18% | 0% | 0% | 0–5bb | g9 |
| 87 | bp | 44% | 17% | 0% | 0% | 0–5bb | g9 |
| 75 | bp | 41% | 14% | 0% | 0% | 0–5bb | g9 |
| K6 | bp | 34% | 10% | 0% | 0% | 0–5bb | g9 |
| 96 | bp | 33% | 9% | 0% | 0% | 0–5bb | g9 |
| 86 | bp | 32% | 8% | 0% | 0% | 0–5bb | g9 |
| 65 | bp | 31% | 6% | 0% | 0% | 0–5bb | g9 |
| 64 | bp | 30% | 6% | 0% | 0% | 0–5bb | g9 |
| 55 | pp3 | 26% | 3% | 0% | 0% | 0–5bb | g9 |
| 44 | pp3 | 23% | 2% | 0% | 0% | 0–5bb | g9 |
| 33 | pp3 | 21% | 1% | 0% | 0% | 0–5bb | g9 |
| K2 | bp | 19% | 0% | 0% | 0% | 0–5bb | g9 |
