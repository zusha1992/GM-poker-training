# A76-Qc-2s@bx river (A♥ 7♥ 6♣ Q♣ 2♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | AA, QQ, 77, 66, 22 | 100% | 100% | 100% | 100% |
| g2 | 50–100bb | Two pair | AQ, A7, A6, A2 | 98% | 100% | 100% | 73% |
| g3 | 25–50bb | Two pair | Q7, Q6, 76 | 94% | 98% | 97% | 30% |
| g4 | 25–50bb | Top pair, good kicker | AK, AJ, AT | 89% | 88% | 81% | 17% |
| g5 | 15–25bb | Top pair, weak kicker | A9, A8, A5 | 76% | 64% | 44% | 11% |
| g6 | 0–5bb | Top pair, weak kicker | A4, A3 | 67% | 39% | 7% | 1% |
| g7 | 0–5bb | Big pocket pairs | KK | 55% | 25% | 0% | 0% |
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
| AQ | twopair | 99% | 100% | 100% | 83% | 50–100bb | g2 |
| A7 | twopair | 99% | 100% | 100% | 80% | 50–100bb | g2 |
| A6 | twopair | 98% | 100% | 100% | 69% | 50–100bb | g2 |
| A2 | twopair | 97% | 100% | 100% | 60% | 50–100bb | g2 |
| Q7 | twopair | 95% | 99% | 99% | 35% | 25–50bb | g3 |
| Q6 | twopair | 94% | 97% | 96% | 29% | 25–50bb | g3 |
| 76 | twopair | 93% | 96% | 95% | 27% | 25–50bb | g3 |
| AK | tpgk | 91% | 93% | 88% | 17% | 25–50bb | g4 |
| AJ | tpmk | 90% | 89% | 84% | 17% | 25–50bb | g4 |
| AT | tpmk | 85% | 82% | 71% | 17% | 25–50bb | g4 |
| A8 | tpmk | 75% | 65% | 47% | 12% | 15–25bb | g5 |
| A9 | tpmk | 81% | 74% | 59% | 17% | 25–50bb | g5 |
| A5 | tpmk | 71% | 52% | 27% | 5% | 5–15bb | g5 |
| A4 | tpmk | 67% | 41% | 11% | 1% | 0–5bb | g6 |
| A3 | tpmk | 66% | 36% | 2% | 0% | 0–5bb | g6 |
| KK | pp1 | 55% | 25% | 0% | 0% | 0–5bb | g7 |
| KQ | mp | 56% | 27% | 0% | 0% | 0–5bb | g8 |
| QJ | mp | 56% | 27% | 0% | 0% | 0–5bb | g8 |
| Q8 | mp | 56% | 25% | 0% | 0% | 0–5bb | g8 |
| Q5 | mp | 55% | 25% | 0% | 0% | 0–5bb | g8 |
| QT | mp | 55% | 25% | 0% | 0% | 0–5bb | g8 |
| Q9 | mp | 55% | 24% | 0% | 0% | 0–5bb | g8 |
| JJ | pp2 | 53% | 25% | 0% | 0% | 0–5bb | g9 |
| TT | pp2 | 53% | 25% | 0% | 0% | 0–5bb | g9 |
| 99 | pp2 | 53% | 24% | 0% | 0% | 0–5bb | g9 |
| 88 | pp2 | 52% | 23% | 0% | 0% | 0–5bb | g9 |
| K7 | bp | 48% | 20% | 0% | 0% | 0–5bb | g9 |
| J7 | bp | 45% | 19% | 0% | 0% | 0–5bb | g9 |
| T7 | bp | 45% | 19% | 0% | 0% | 0–5bb | g9 |
| 87 | bp | 44% | 17% | 0% | 0% | 0–5bb | g9 |
| 97 | bp | 43% | 18% | 0% | 0% | 0–5bb | g9 |
| 75 | bp | 42% | 14% | 0% | 0% | 0–5bb | g9 |
| 96 | bp | 34% | 9% | 0% | 0% | 0–5bb | g9 |
| K6 | bp | 33% | 10% | 0% | 0% | 0–5bb | g9 |
| 86 | bp | 32% | 8% | 0% | 0% | 0–5bb | g9 |
| 64 | bp | 31% | 6% | 0% | 0% | 0–5bb | g9 |
| 65 | bp | 30% | 6% | 0% | 0% | 0–5bb | g9 |
| 55 | pp3 | 25% | 3% | 0% | 0% | 0–5bb | g9 |
| 44 | pp3 | 23% | 2% | 0% | 0% | 0–5bb | g9 |
| 33 | pp3 | 20% | 1% | 0% | 0% | 0–5bb | g9 |
| K2 | bp | 19% | 0% | 0% | 0% | 0–5bb | g9 |
