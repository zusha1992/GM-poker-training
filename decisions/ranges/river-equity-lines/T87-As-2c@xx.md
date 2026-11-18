# T87-As-2c@xx river (T♥ 8♥ 7♠ A♠ 2♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | J9, 96 | 99% | 100% | 100% | 76% |
| g2 | 25–50bb | Sets | AA, TT, 88, 77, 22 | 96% | 100% | 100% | 27% |
| g3 | 15–25bb | Two pair | AT, A8, A7, A2, T8, T7, 87 | 91% | 92% | 82% | 2% |
| g4 | 15–25bb | Top pair | AK–AJ, A9, A6–A3 | 84% | 75% | 38% | 0% |
| g5 | 0–5bb | Big pocket pairs | KK–JJ | 72% | 49% | 0% | 0% |
| g6 | 0–5bb | Second pair | KT, QT, JT, T9 | 70% | 38% | 0% | 0% |
| g7 | 0–5bb | Small pairs | 99, 66–33, K8, K7, K2, Q8, Q7, J8, J7, 98, 97, 86, 76, 75 | 50% | 12% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| J9 | straight | 99% | 100% | 100% | 82% | 50–100bb | g1 |
| 96 | straight | 97% | 100% | 100% | 51% | 50–100bb | g1 |
| AA | twopair | 96% | 100% | 100% | 29% | 25–50bb | g2 |
| TT | twopair | 96% | 100% | 100% | 32% | 25–50bb | g2 |
| 88 | twopair | 96% | 100% | 100% | 30% | 25–50bb | g2 |
| 77 | twopair | 95% | 100% | 100% | 26% | 25–50bb | g2 |
| 22 | twopair | 96% | 100% | 100% | 19% | 25–50bb | g2 |
| AT | twopair | 94% | 99% | 98% | 8% | 25–50bb | g3 |
| A8 | twopair | 93% | 95% | 89% | 2% | 25–50bb | g3 |
| A7 | twopair | 91% | 92% | 78% | 0% | 25–50bb | g3 |
| A2 | twopair | 90% | 89% | 71% | 0% | 25–50bb | g3 |
| T8 | twopair | 89% | 84% | 71% | 0% | 25–50bb | g3 |
| T7 | twopair | 88% | 85% | 70% | 0% | 25–50bb | g3 |
| 87 | twopair | 88% | 85% | 70% | 0% | 25–50bb | g3 |
| A9 | tpmk | 86% | 80% | 49% | 0% | 15–25bb | g4 |
| A6 | tpmk | 84% | 76% | 38% | 0% | 15–25bb | g4 |
| A5 | tpmk | 82% | 70% | 23% | 0% | 15–25bb | g4 |
| A4 | tpmk | 80% | 64% | 10% | 0% | 15–25bb | g4 |
| A3 | tpmk | 79% | 61% | 2% | 0% | 15–25bb | g4 |
| AK | tpgk | 87% | 84% | 61% | 0% | 25–50bb | g4 |
| AQ | tpgk | 86% | 84% | 61% | 0% | 25–50bb | g4 |
| AJ | tpmk | 87% | 83% | 58% | 0% | 25–50bb | g4 |
| JJ | pp1 | 74% | 48% | 0% | 0% | 0–5bb | g5 |
| KK | pp1 | 71% | 48% | 0% | 0% | 0–5bb | g5 |
| QQ | pp1 | 71% | 50% | 0% | 0% | 5–15bb | g5 |
| KT | mp | 72% | 42% | 0% | 0% | 0–5bb | g6 |
| QT | mp | 70% | 40% | 0% | 0% | 0–5bb | g6 |
| JT | mp | 68% | 36% | 0% | 0% | 0–5bb | g6 |
| T9 | mp | 67% | 32% | 0% | 0% | 0–5bb | g6 |
| 99 | pp2 | 62% | 23% | 0% | 0% | 0–5bb | g7 |
| K8 | bp | 60% | 19% | 0% | 0% | 0–5bb | g7 |
| J8 | bp | 59% | 19% | 0% | 0% | 0–5bb | g7 |
| 98 | bp | 58% | 18% | 0% | 0% | 0–5bb | g7 |
| Q8 | bp | 58% | 20% | 0% | 0% | 0–5bb | g7 |
| 86 | bp | 56% | 16% | 0% | 0% | 0–5bb | g7 |
| 97 | bp | 52% | 10% | 0% | 0% | 0–5bb | g7 |
| Q7 | bp | 52% | 11% | 0% | 0% | 0–5bb | g7 |
| J7 | bp | 52% | 11% | 0% | 0% | 0–5bb | g7 |
| K7 | bp | 51% | 11% | 0% | 0% | 0–5bb | g7 |
| 75 | bp | 50% | 7% | 0% | 0% | 0–5bb | g7 |
| 76 | bp | 50% | 10% | 0% | 0% | 0–5bb | g7 |
| 66 | pp3 | 46% | 7% | 0% | 0% | 0–5bb | g7 |
| 55 | pp3 | 43% | 6% | 0% | 0% | 0–5bb | g7 |
| 44 | pp3 | 40% | 6% | 0% | 0% | 0–5bb | g7 |
| 33 | pp3 | 39% | 5% | 0% | 0% | 0–5bb | g7 |
| K2 | bp | 37% | 4% | 0% | 0% | 0–5bb | g7 |
