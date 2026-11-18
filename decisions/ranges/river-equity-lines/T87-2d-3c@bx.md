# T87-2d-3c@bx river (T♥ 8♥ 7♠ 2♦ 3♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | J9, 96 | 99% | 100% | 100% | 98% |
| g2 | 25–50bb | Sets | TT, 88, 77, 33, 22 | 98% | 100% | 100% | 88% |
| g3 | 15–25bb | Overpairs | AA–JJ | 93% | 100% | 100% | 53% |
| g4 | 15–25bb | Two pair | T8, T7, 87 | 97% | 100% | 100% | 81% |
| g5 | 15–25bb | Top pair | AT, KT, QT, JT, T9 | 86% | 89% | 23% | 35% |
| g6 | 15–25bb | Medium pairs & second pair | 99, A8, K8 | 66% | 71% | 0% | 30% |
| g7 | 5–15bb | Medium pairs & second pair | Q8, J8, 98, 86 | 59% | 53% | 0% | 26% |
| g8 | 0–5bb | Small pairs | 66–44, A7, A3, A2, K7, K3, K2, Q7, J7, 97, 76, 75, 43 | 39% | 24% | 0% | 7% |
| g9 | Pot is too big | Ace-high | AK–AJ, A9, A6–A4 | 25% | 8% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| J9 | straight | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| 96 | straight | 99% | 100% | 100% | 97% | 50–100bb | g1 |
| TT | twopair | 98% | 100% | 100% | 94% | 50–100bb | g2 |
| 88 | twopair | 98% | 100% | 100% | 93% | 50–100bb | g2 |
| 77 | twopair | 98% | 100% | 100% | 89% | 50–100bb | g2 |
| 22 | twopair | 97% | 100% | 100% | 82% | 50–100bb | g2 |
| 33 | twopair | 98% | 100% | 100% | 82% | 50–100bb | g2 |
| AA | op | 92% | 100% | 100% | 48% | 25–50bb | g3 |
| KK | op | 93% | 100% | 100% | 56% | 50–100bb | g3 |
| JJ | op | 93% | 100% | 100% | 55% | 50–100bb | g3 |
| QQ | op | 93% | 100% | 100% | 55% | 50–100bb | g3 |
| T7 | twopair | 96% | 100% | 100% | 85% | 50–100bb | g4 |
| T8 | twopair | 97% | 100% | 100% | 80% | 50–100bb | g4 |
| 87 | twopair | 95% | 100% | 100% | 78% | 50–100bb | g4 |
| KT | tpgk | 88% | 90% | 25% | 34% | 15–25bb | g5 |
| JT | tpmk | 82% | 86% | 0% | 34% | 15–25bb | g5 |
| QT | tpmk | 86% | 86% | 0% | 33% | 15–25bb | g5 |
| T9 | tpmk | 79% | 85% | 0% | 30% | 15–25bb | g5 |
| AT | tpgk | 92% | 97% | 82% | 41% | 25–50bb | g5 |
| 99 | pp1 | 70% | 79% | 0% | 25% | 15–25bb | g6 |
| A8 | mp | 66% | 72% | 0% | 33% | 15–25bb | g6 |
| K8 | mp | 62% | 64% | 0% | 30% | 15–25bb | g6 |
| 86 | mp | 57% | 48% | 0% | 19% | 0–5bb | g7 |
| Q8 | mp | 62% | 56% | 0% | 31% | 5–15bb | g7 |
| J8 | mp | 58% | 54% | 0% | 30% | 5–15bb | g7 |
| 98 | mp | 58% | 51% | 0% | 22% | 5–15bb | g7 |
| A7 | bp | 48% | 31% | 0% | 17% | 0–5bb | g8 |
| K7 | bp | 45% | 30% | 0% | 17% | 0–5bb | g8 |
| Q7 | bp | 44% | 29% | 0% | 16% | 0–5bb | g8 |
| 97 | bp | 43% | 25% | 0% | 9% | 0–5bb | g8 |
| J7 | bp | 43% | 27% | 0% | 15% | 0–5bb | g8 |
| 75 | bp | 41% | 25% | 0% | 6% | 0–5bb | g8 |
| 76 | bp | 41% | 24% | 0% | 6% | 0–5bb | g8 |
| 66 | pp3 | 36% | 23% | 0% | 4% | 0–5bb | g8 |
| A3 | bp | 36% | 19% | 0% | 3% | 0–5bb | g8 |
| 55 | pp3 | 36% | 23% | 0% | 5% | 0–5bb | g8 |
| 44 | pp3 | 35% | 23% | 0% | 5% | 0–5bb | g8 |
| K3 | bp | 35% | 22% | 0% | 3% | 0–5bb | g8 |
| 43 | bp | 35% | 21% | 0% | 2% | 0–5bb | g8 |
| K2 | bp | 33% | 20% | 0% | 0% | 0–5bb | g8 |
| A2 | bp | 32% | 17% | 0% | 0% | 0–5bb | g8 |
| AQ | khnd | 30% | 18% | 0% | 0% | Pot is too big | g9 |
| AK | khnd | 30% | 18% | 0% | 0% | Pot is too big | g9 |
| AJ | khnd | 29% | 13% | 0% | 0% | Pot is too big | g9 |
| A9 | khnd | 23% | 5% | 0% | 0% | Pot is too big | g9 |
| A4 | khnd | 21% | 0% | 0% | 0% | Pot is too big | g9 |
| A5 | khnd | 20% | 0% | 0% | 0% | Pot is too big | g9 |
| A6 | khnd | 20% | 0% | 0% | 0% | Pot is too big | g9 |
