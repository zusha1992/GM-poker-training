# JT3-2h-3d@bx river (J♠ T♠ 3♣ 2♥ 3♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Full houses | JJ, TT, 33, 22 | 100% | 100% | 100% | 100% |
| g2 | 50–100bb | Trips | A3, K3, 43 | 98% | 100% | 100% | 84% |
| g3 | 50–100bb | Overpairs | AA–QQ | 94% | 100% | 100% | 64% |
| g4 | 25–50bb | Top pair, good kicker | AJ, KJ, QJ, JT | 91% | 96% | 70% | 45% |
| g5 | 15–25bb | Top pair, weak kicker | J9–J7 | 83% | 88% | 12% | 38% |
| g6 | 15–25bb | Second pair | AT, KT, QT, T9–T7 | 64% | 64% | 0% | 9% |
| g7 | 0–5bb | Small pairs | 99–44, A2, K2 | 40% | 28% | 0% | 5% |
| g8 | Pot is too big | Ace-high | AK, AQ, A9–A4 | 28% | 12% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| JJ | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| TT | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 33 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 22 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A3 | trips | 98% | 100% | 100% | 85% | 50–100bb | g2 |
| K3 | trips | 98% | 100% | 100% | 83% | 50–100bb | g2 |
| 43 | trips | 96% | 100% | 100% | 76% | 50–100bb | g2 |
| KK | op | 94% | 100% | 100% | 68% | 50–100bb | g3 |
| QQ | op | 93% | 100% | 100% | 67% | 50–100bb | g3 |
| AA | op | 94% | 100% | 100% | 57% | 50–100bb | g3 |
| AJ | tpgk | 92% | 100% | 98% | 48% | 25–50bb | g4 |
| QJ | tpmk | 88% | 90% | 21% | 39% | 15–25bb | g4 |
| KJ | tpgk | 90% | 96% | 67% | 39% | 25–50bb | g4 |
| JT | twopair | 93% | 100% | 100% | 58% | 50–100bb | g4 |
| J7 | tpmk | 82% | 88% | 12% | 39% | 15–25bb | g5 |
| J8 | tpmk | 82% | 88% | 12% | 39% | 15–25bb | g5 |
| J9 | tpmk | 84% | 87% | 11% | 38% | 15–25bb | g5 |
| AT | mp | 69% | 69% | 0% | 15% | 15–25bb | g6 |
| KT | mp | 66% | 66% | 0% | 7% | 15–25bb | g6 |
| QT | mp | 64% | 65% | 0% | 8% | 15–25bb | g6 |
| T9 | mp | 59% | 58% | 0% | 7% | 5–15bb | g6 |
| T8 | mp | 56% | 49% | 0% | 7% | 0–5bb | g6 |
| T7 | mp | 56% | 45% | 0% | 7% | 0–5bb | g6 |
| 99 | spp | 48% | 32% | 0% | 6% | 0–5bb | g7 |
| 88 | spp | 47% | 30% | 0% | 7% | 0–5bb | g7 |
| 77 | spp | 45% | 31% | 0% | 6% | 0–5bb | g7 |
| 66 | spp | 42% | 31% | 0% | 6% | 0–5bb | g7 |
| 55 | spp | 39% | 31% | 0% | 6% | 0–5bb | g7 |
| 44 | spp | 36% | 27% | 0% | 7% | 0–5bb | g7 |
| A2 | bp | 34% | 22% | 0% | 3% | 0–5bb | g7 |
| K2 | bp | 32% | 23% | 0% | 0% | 0–5bb | g7 |
| AK | khnd | 32% | 20% | 0% | 0% | Pot is too big | g8 |
| AQ | khnd | 31% | 20% | 0% | 0% | Pot is too big | g8 |
| A8 | khnd | 29% | 12% | 0% | 0% | Pot is too big | g8 |
| A9 | khnd | 28% | 18% | 0% | 0% | Pot is too big | g8 |
| A7 | khnd | 26% | 9% | 0% | 0% | Pot is too big | g8 |
| A6 | khnd | 26% | 7% | 0% | 0% | Pot is too big | g8 |
| A5 | khnd | 24% | 5% | 0% | 0% | Pot is too big | g8 |
| A4 | khnd | 24% | 4% | 0% | 0% | Pot is too big | g8 |
