# 962-Qh-Ac@xx river (9♦ 6♦ 2♥ Q♥ A♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | AA, QQ, 99, 66, 22 | 100% | 100% | 100% | 95% |
| g2 | 50–100bb | Two pair | AQ, A9, A6 | 98% | 100% | 99% | 63% |
| g3 | 25–50bb | Two pair | A2, Q9, Q6, 96 | 95% | 95% | 91% | 23% |
| g4 | 25–50bb | Top pair, good kicker | AK, AJ, AT | 90% | 82% | 65% | 1% |
| g5 | 15–25bb | Top pair, weak kicker | A8, A7 | 84% | 67% | 36% | 1% |
| g6 | 5–15bb | Top pair, weak kicker | A5–A3 | 79% | 52% | 8% | 1% |
| g7 | 0–5bb | Big pocket pairs | KK | 70% | 38% | 0% | 1% |
| g8 | 0–5bb | Second pair | KQ, QJ, QT, Q8, Q7, Q5 | 70% | 34% | 0% | 0% |
| g9 | 0–5bb | Small pairs | JJ, TT, 88, 77, 55–33, K9, K6, K2, J9, T9, 98, 97, 86, 76, 65, 64 | 50% | 12% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 99 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 66 | twopair | 100% | 100% | 100% | 96% | 50–100bb | g1 |
| 22 | twopair | 99% | 100% | 100% | 78% | 50–100bb | g1 |
| AQ | twopair | 98% | 100% | 100% | 72% | 50–100bb | g2 |
| A9 | twopair | 98% | 100% | 99% | 65% | 50–100bb | g2 |
| A6 | twopair | 97% | 99% | 98% | 52% | 50–100bb | g2 |
| A2 | twopair | 96% | 97% | 94% | 33% | 25–50bb | g3 |
| Q9 | twopair | 94% | 94% | 90% | 18% | 25–50bb | g3 |
| Q6 | twopair | 93% | 92% | 88% | 11% | 25–50bb | g3 |
| 96 | twopair | 92% | 89% | 83% | 1% | 25–50bb | g3 |
| AK | tpgk | 91% | 85% | 70% | 1% | 25–50bb | g4 |
| AJ | tpmk | 90% | 83% | 68% | 1% | 25–50bb | g4 |
| AT | tpmk | 89% | 77% | 57% | 1% | 25–50bb | g4 |
| A8 | tpmk | 85% | 70% | 43% | 0% | 15–25bb | g5 |
| A7 | tpmk | 83% | 63% | 28% | 1% | 15–25bb | g5 |
| A3 | tpmk | 77% | 48% | 1% | 1% | 0–5bb | g6 |
| A5 | tpmk | 80% | 56% | 16% | 1% | 5–15bb | g6 |
| A4 | tpmk | 79% | 51% | 6% | 1% | 5–15bb | g6 |
| KK | pp1 | 70% | 38% | 0% | 1% | 0–5bb | g7 |
| KQ | mp | 71% | 37% | 0% | 0% | 0–5bb | g8 |
| QJ | mp | 71% | 35% | 0% | 0% | 0–5bb | g8 |
| QT | mp | 69% | 32% | 0% | 1% | 0–5bb | g8 |
| Q7 | mp | 68% | 29% | 0% | 0% | 0–5bb | g8 |
| Q8 | mp | 67% | 30% | 0% | 0% | 0–5bb | g8 |
| Q5 | mp | 65% | 28% | 0% | 0% | 0–5bb | g8 |
| TT | pp2 | 61% | 24% | 0% | 0% | 0–5bb | g9 |
| JJ | pp2 | 61% | 22% | 0% | 0% | 0–5bb | g9 |
| J9 | bp | 59% | 18% | 0% | 0% | 0–5bb | g9 |
| K9 | bp | 59% | 20% | 0% | 0% | 0–5bb | g9 |
| T9 | bp | 57% | 16% | 0% | 0% | 0–5bb | g9 |
| 98 | bp | 55% | 14% | 0% | 0% | 0–5bb | g9 |
| 97 | bp | 55% | 13% | 0% | 0% | 0–5bb | g9 |
| 88 | pp3 | 50% | 12% | 0% | 0% | 0–5bb | g9 |
| 77 | pp3 | 49% | 13% | 0% | 0% | 0–5bb | g9 |
| K6 | bp | 47% | 10% | 0% | 0% | 0–5bb | g9 |
| 86 | bp | 47% | 8% | 0% | 0% | 0–5bb | g9 |
| 76 | bp | 44% | 7% | 0% | 0% | 0–5bb | g9 |
| 65 | bp | 43% | 7% | 0% | 0% | 0–5bb | g9 |
| 64 | bp | 43% | 5% | 0% | 0% | 0–5bb | g9 |
| 55 | pp3 | 38% | 3% | 0% | 0% | 0–5bb | g9 |
| 44 | pp3 | 36% | 3% | 0% | 0% | 0–5bb | g9 |
| 33 | pp3 | 35% | 2% | 0% | 0% | 0–5bb | g9 |
| K2 | bp | 32% | 1% | 0% | 0% | 0–5bb | g9 |
