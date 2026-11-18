# T87-2d-3c@xx river (T♥ 8♥ 7♠ 2♦ 3♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | J9, 96 | 99% | 100% | 100% | 82% |
| g2 | 25–50bb | Sets | TT, 88, 77, 33, 22 | 96% | 100% | 100% | 28% |
| g3 | 15–25bb | Overpairs | AA–JJ | 91% | 100% | 100% | 1% |
| g4 | 15–25bb | Two pair | T8, T7, 87 | 94% | 100% | 100% | 5% |
| g5 | 15–25bb | Top pair | AT, KT, QT, JT, T9 | 89% | 92% | 44% | 1% |
| g6 | 15–25bb | Medium pairs & second pair | 99, A8, K8, Q8, J8, 98, 86 | 78% | 72% | 0% | 1% |
| g7 | 0–5bb | Small pairs | 66–44, A7, A3, A2, K7, K3, K2, Q7, J7, 97, 76, 75, 43 | 57% | 38% | 0% | 0% |
| g8 | Pot is too big | Ace-high | AK–AJ, A9, A6–A4 | 34% | 12% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| J9 | straight | 99% | 100% | 100% | 87% | 50–100bb | g1 |
| 96 | straight | 98% | 100% | 100% | 62% | 50–100bb | g1 |
| TT | twopair | 97% | 100% | 100% | 47% | 25–50bb | g2 |
| 88 | twopair | 97% | 100% | 100% | 41% | 25–50bb | g2 |
| 77 | twopair | 97% | 100% | 100% | 28% | 25–50bb | g2 |
| 33 | twopair | 96% | 100% | 100% | 14% | 25–50bb | g2 |
| 22 | twopair | 94% | 100% | 100% | 8% | 25–50bb | g2 |
| KK | op | 91% | 100% | 100% | 1% | 25–50bb | g3 |
| JJ | op | 92% | 100% | 100% | 1% | 25–50bb | g3 |
| QQ | op | 92% | 100% | 100% | 1% | 25–50bb | g3 |
| AA | op | 90% | 100% | 100% | 1% | 25–50bb | g3 |
| T8 | twopair | 94% | 100% | 100% | 6% | 25–50bb | g4 |
| T7 | twopair | 94% | 100% | 100% | 5% | 25–50bb | g4 |
| 87 | twopair | 92% | 100% | 100% | 2% | 25–50bb | g4 |
| QT | tpmk | 88% | 90% | 32% | 1% | 15–25bb | g5 |
| JT | tpmk | 88% | 89% | 19% | 1% | 15–25bb | g5 |
| AT | tpgk | 91% | 98% | 88% | 1% | 25–50bb | g5 |
| T9 | tpmk | 87% | 87% | 14% | 0% | 15–25bb | g5 |
| KT | tpgk | 90% | 94% | 57% | 1% | 25–50bb | g5 |
| 99 | pp1 | 82% | 80% | 0% | 0% | 15–25bb | g6 |
| A8 | mp | 79% | 74% | 0% | 1% | 15–25bb | g6 |
| K8 | mp | 77% | 71% | 0% | 1% | 15–25bb | g6 |
| Q8 | mp | 76% | 69% | 0% | 1% | 15–25bb | g6 |
| J8 | mp | 76% | 68% | 0% | 1% | 15–25bb | g6 |
| 98 | mp | 75% | 65% | 0% | 1% | 15–25bb | g6 |
| 86 | mp | 73% | 64% | 0% | 1% | 15–25bb | g6 |
| A7 | bp | 67% | 48% | 0% | 0% | 0–5bb | g7 |
| K7 | bp | 67% | 46% | 0% | 1% | 0–5bb | g7 |
| Q7 | bp | 66% | 46% | 0% | 0% | 0–5bb | g7 |
| J7 | bp | 65% | 44% | 0% | 1% | 0–5bb | g7 |
| 97 | bp | 65% | 42% | 0% | 0% | 0–5bb | g7 |
| 76 | bp | 64% | 42% | 0% | 0% | 0–5bb | g7 |
| 75 | bp | 63% | 42% | 0% | 0% | 0–5bb | g7 |
| 66 | pp3 | 58% | 38% | 0% | 0% | 0–5bb | g7 |
| 55 | pp3 | 54% | 38% | 0% | 0% | 0–5bb | g7 |
| 44 | pp3 | 52% | 36% | 0% | 0% | 0–5bb | g7 |
| K3 | bp | 51% | 35% | 0% | 0% | 0–5bb | g7 |
| A3 | bp | 50% | 33% | 0% | 0% | 0–5bb | g7 |
| 43 | bp | 48% | 32% | 0% | 0% | 0–5bb | g7 |
| K2 | bp | 45% | 27% | 0% | 0% | 0–5bb | g7 |
| A2 | bp | 45% | 26% | 0% | 0% | 0–5bb | g7 |
| AQ | khnd | 39% | 22% | 0% | 0% | Pot is too big | g8 |
| AK | khnd | 38% | 22% | 0% | 0% | Pot is too big | g8 |
| AJ | khnd | 37% | 20% | 0% | 0% | Pot is too big | g8 |
| A9 | khnd | 35% | 12% | 0% | 0% | Pot is too big | g8 |
| A6 | khnd | 31% | 6% | 0% | 0% | Pot is too big | g8 |
| A5 | khnd | 29% | 4% | 0% | 0% | Pot is too big | g8 |
| A4 | khnd | 27% | 1% | 0% | 0% | Pot is too big | g8 |
