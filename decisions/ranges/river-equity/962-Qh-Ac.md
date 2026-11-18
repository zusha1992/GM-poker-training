# 962-Qh-Ac river (9♦ 6♦ 2♥ Q♥ A♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | AA, QQ, 99, 66, 22 | 100% | 100% | 100% | 100% |
| g2 | 50–100bb | Two pair | AQ, A9, A6, A2 | 97% | 99% | 93% | 77% |
| g3 | 25–50bb | Two pair | Q9, Q6, 96 | 90% | 90% | 56% | 37% |
| g4 | 15–25bb | Top pair, good kicker | AK, AJ, AT | 90% | 88% | 30% | 28% |
| g5 | 15–25bb | Big pocket pairs | KK | 82% | 78% | 0% | 15% |
| g6 | 15–25bb | Second pair | KQ, QJ, QT, Q8, Q7, Q5 | 80% | 70% | 0% | 16% |
| g7 | 5–15bb | Small pairs | JJ, TT, K9 | 72% | 54% | 0% | 13% |
| g8 | 0–5bb | Top pair, weak kicker | A8, A7, A5–A3 | 88% | 85% | 9% | 23% |
| g9 | 0–5bb | Small pairs | 88, 77, 55–33, K6, K2, J9, T9, 98, 97, 86, 76, 65, 64 | 40% | 22% | 0% | 4% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 99 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 66 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 22 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g2 |
| A9 | twopair | 99% | 100% | 100% | 91% | 50–100bb | g2 |
| A6 | twopair | 95% | 99% | 95% | 66% | 50–100bb | g2 |
| A2 | twopair | 94% | 96% | 76% | 50% | 50–100bb | g2 |
| 96 | twopair | 88% | 85% | 39% | 26% | 15–25bb | g3 |
| Q6 | twopair | 90% | 92% | 62% | 38% | 25–50bb | g3 |
| Q9 | twopair | 90% | 91% | 60% | 40% | 25–50bb | g3 |
| AK | tpgk | 90% | 89% | 33% | 29% | 15–25bb | g4 |
| AJ | tpmk | 90% | 89% | 32% | 28% | 15–25bb | g4 |
| AT | tpmk | 90% | 87% | 27% | 27% | 15–25bb | g4 |
| KK | pp1 | 82% | 78% | 0% | 15% | 15–25bb | g5 |
| KQ | mp | 81% | 76% | 0% | 15% | 15–25bb | g6 |
| QJ | mp | 80% | 70% | 0% | 15% | 15–25bb | g6 |
| QT | mp | 79% | 67% | 0% | 16% | 15–25bb | g6 |
| Q8 | mp | 77% | 65% | 0% | 16% | 15–25bb | g6 |
| Q5 | mp | 77% | 64% | 0% | 15% | 15–25bb | g6 |
| Q7 | mp | 77% | 64% | 0% | 16% | 15–25bb | g6 |
| TT | pp2 | 73% | 58% | 0% | 14% | 5–15bb | g7 |
| JJ | pp2 | 73% | 56% | 0% | 14% | 5–15bb | g7 |
| K9 | bp | 70% | 51% | 0% | 13% | 5–15bb | g7 |
| A8 | tpmk | 89% | 87% | 19% | 25% | 15–25bb | g8 |
| A7 | tpmk | 88% | 85% | 11% | 24% | 15–25bb | g8 |
| A5 | tpmk | 88% | 85% | 8% | 23% | 15–25bb | g8 |
| A3 | tpmk | 88% | 85% | 2% | 20% | 15–25bb | g8 |
| A4 | tpmk | 88% | 84% | 7% | 21% | 15–25bb | g8 |
| J9 | bp | 66% | 46% | 0% | 10% | 0–5bb | g9 |
| T9 | bp | 60% | 38% | 0% | 8% | 0–5bb | g9 |
| 98 | bp | 54% | 34% | 0% | 6% | 0–5bb | g9 |
| 97 | bp | 54% | 33% | 0% | 7% | 0–5bb | g9 |
| 88 | pp3 | 46% | 28% | 0% | 6% | 0–5bb | g9 |
| 77 | pp3 | 42% | 27% | 0% | 6% | 0–5bb | g9 |
| K6 | bp | 38% | 23% | 0% | 4% | 0–5bb | g9 |
| 86 | bp | 32% | 18% | 0% | 3% | 0–5bb | g9 |
| 76 | bp | 31% | 15% | 0% | 3% | 0–5bb | g9 |
| 65 | bp | 30% | 12% | 0% | 2% | 0–5bb | g9 |
| 64 | bp | 26% | 11% | 0% | 1% | 0–5bb | g9 |
| 55 | pp3 | 22% | 5% | 0% | 0% | 0–5bb | g9 |
| 33 | pp3 | 21% | 5% | 0% | 0% | 0–5bb | g9 |
| 44 | pp3 | 21% | 5% | 0% | 0% | 0–5bb | g9 |
| K2 | bp | 18% | 3% | 0% | 0% | 0–5bb | g9 |
