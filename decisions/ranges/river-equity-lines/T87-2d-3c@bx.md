# T87-2d-3c@bx river (T♥ 8♥ 7♠ 2♦ 3♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | J9, 96 | 100% | 100% | 100% | 98% |
| g2 | 25–50bb | Sets | TT, 88, 77, 33, 22 | 98% | 100% | 100% | 88% |
| g3 | 15–25bb | Overpairs | AA–JJ | 93% | 100% | 100% | 53% |
| g4 | 15–25bb | Two pair | T8, T7, 87 | 96% | 100% | 100% | 80% |
| g5 | 15–25bb | Top pair | AT, KT, QT, JT, T9 | 86% | 89% | 23% | 35% |
| g6 | 15–25bb | Medium pairs & second pair | 99, A8, K8 | 66% | 71% | 0% | 31% |
| g7 | 5–15bb | Medium pairs & second pair | Q8, J8 | 59% | 55% | 0% | 30% |
| g8 | 0–5bb | Medium pairs & second pair | 98, 86 | 57% | 49% | 0% | 21% |
| g9 | 0–5bb | Small pairs | 66–44, A7, A3, A2, K7, K3, K2, Q7, J7, 97, 76, 75, 43 | 39% | 23% | 0% | 7% |
| g10 | Pot is too big | Ace-high | AK–AJ, A9, A6–A4 | 25% | 8% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| J9 | straight | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| 96 | straight | 99% | 100% | 100% | 97% | 50–100bb | g1 |
| TT | twopair | 98% | 100% | 100% | 95% | 50–100bb | g2 |
| 88 | twopair | 98% | 100% | 100% | 94% | 50–100bb | g2 |
| 77 | twopair | 98% | 100% | 100% | 89% | 50–100bb | g2 |
| 33 | twopair | 97% | 100% | 100% | 82% | 50–100bb | g2 |
| 22 | twopair | 98% | 100% | 100% | 82% | 50–100bb | g2 |
| AA | op | 92% | 100% | 100% | 46% | 25–50bb | g3 |
| QQ | op | 93% | 100% | 100% | 56% | 50–100bb | g3 |
| KK | op | 92% | 100% | 100% | 55% | 50–100bb | g3 |
| JJ | op | 93% | 100% | 100% | 54% | 50–100bb | g3 |
| T7 | twopair | 96% | 100% | 100% | 84% | 50–100bb | g4 |
| T8 | twopair | 97% | 100% | 100% | 80% | 50–100bb | g4 |
| 87 | twopair | 95% | 100% | 100% | 78% | 50–100bb | g4 |
| KT | tpgk | 88% | 90% | 25% | 34% | 15–25bb | g5 |
| QT | tpmk | 85% | 86% | 0% | 34% | 15–25bb | g5 |
| JT | tpmk | 82% | 86% | 0% | 34% | 15–25bb | g5 |
| T9 | tpmk | 80% | 86% | 0% | 31% | 15–25bb | g5 |
| AT | tpgk | 92% | 97% | 81% | 42% | 25–50bb | g5 |
| 99 | pp1 | 68% | 80% | 0% | 24% | 15–25bb | g6 |
| A8 | mp | 66% | 70% | 0% | 34% | 15–25bb | g6 |
| K8 | mp | 63% | 64% | 0% | 31% | 15–25bb | g6 |
| Q8 | mp | 60% | 56% | 0% | 31% | 5–15bb | g7 |
| J8 | mp | 58% | 53% | 0% | 29% | 5–15bb | g7 |
| 98 | mp | 57% | 49% | 0% | 22% | 0–5bb | g8 |
| 86 | mp | 56% | 48% | 0% | 19% | 0–5bb | g8 |
| A7 | bp | 48% | 30% | 0% | 15% | 0–5bb | g9 |
| K7 | bp | 47% | 31% | 0% | 16% | 0–5bb | g9 |
| Q7 | bp | 45% | 28% | 0% | 15% | 0–5bb | g9 |
| J7 | bp | 44% | 27% | 0% | 14% | 0–5bb | g9 |
| 97 | bp | 43% | 24% | 0% | 10% | 0–5bb | g9 |
| 76 | bp | 41% | 25% | 0% | 6% | 0–5bb | g9 |
| 75 | bp | 40% | 25% | 0% | 6% | 0–5bb | g9 |
| 66 | pp3 | 36% | 22% | 0% | 5% | 0–5bb | g9 |
| 44 | pp3 | 36% | 22% | 0% | 5% | 0–5bb | g9 |
| 55 | pp3 | 35% | 22% | 0% | 5% | 0–5bb | g9 |
| K3 | bp | 35% | 21% | 0% | 3% | 0–5bb | g9 |
| A3 | bp | 34% | 18% | 0% | 3% | 0–5bb | g9 |
| 43 | bp | 34% | 21% | 0% | 2% | 0–5bb | g9 |
| K2 | bp | 33% | 20% | 0% | 0% | 0–5bb | g9 |
| A2 | bp | 32% | 18% | 0% | 1% | 0–5bb | g9 |
| AQ | khnd | 32% | 17% | 0% | 0% | Pot is too big | g10 |
| AK | khnd | 31% | 18% | 0% | 0% | Pot is too big | g10 |
| AJ | khnd | 28% | 13% | 0% | 0% | Pot is too big | g10 |
| A9 | khnd | 25% | 4% | 0% | 0% | Pot is too big | g10 |
| A6 | khnd | 21% | 0% | 0% | 0% | Pot is too big | g10 |
| A5 | khnd | 21% | 0% | 0% | 0% | Pot is too big | g10 |
| A4 | khnd | 20% | 0% | 0% | 0% | Pot is too big | g10 |
