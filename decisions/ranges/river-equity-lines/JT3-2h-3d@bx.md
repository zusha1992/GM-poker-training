# JT3-2h-3d@bx river (J♠ T♠ 3♣ 2♥ 3♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Full houses | JJ, TT, 33, 22 | 100% | 100% | 100% | 100% |
| g2 | 50–100bb | Trips | A3, K3, 43 | 98% | 100% | 100% | 84% |
| g3 | 50–100bb | Overpairs | AA–QQ | 93% | 100% | 100% | 64% |
| g4 | 25–50bb | Top pair, good kicker | AJ, KJ, QJ, JT | 91% | 96% | 70% | 45% |
| g5 | 15–25bb | Top pair, weak kicker | J9–J7 | 83% | 87% | 11% | 37% |
| g6 | 15–25bb | Second pair | AT, KT, QT, T9–T7 | 64% | 64% | 0% | 9% |
| g7 | 0–5bb | Small pairs | 99–44, A2, K2 | 41% | 28% | 0% | 5% |
| g8 | 0–5bb | Ace-high | AK, AQ, A9–A4 | 27% | 12% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| JJ | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| TT | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 33 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 22 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A3 | trips | 98% | 100% | 100% | 85% | 50–100bb | g2 |
| K3 | trips | 98% | 100% | 100% | 83% | 50–100bb | g2 |
| 43 | trips | 96% | 100% | 100% | 78% | 50–100bb | g2 |
| KK | op | 94% | 100% | 100% | 69% | 50–100bb | g3 |
| QQ | op | 93% | 100% | 100% | 67% | 50–100bb | g3 |
| AA | op | 94% | 100% | 100% | 56% | 50–100bb | g3 |
| AJ | tpgk | 93% | 100% | 98% | 49% | 25–50bb | g4 |
| QJ | tpmk | 88% | 90% | 21% | 38% | 15–25bb | g4 |
| KJ | tpgk | 90% | 96% | 67% | 40% | 25–50bb | g4 |
| JT | twopair | 92% | 100% | 100% | 58% | 50–100bb | g4 |
| J8 | tpmk | 82% | 88% | 11% | 38% | 15–25bb | g5 |
| J7 | tpmk | 81% | 88% | 12% | 38% | 15–25bb | g5 |
| J9 | tpmk | 84% | 87% | 11% | 36% | 15–25bb | g5 |
| AT | mp | 69% | 70% | 0% | 16% | 15–25bb | g6 |
| KT | mp | 67% | 66% | 0% | 7% | 15–25bb | g6 |
| QT | mp | 63% | 65% | 0% | 7% | 15–25bb | g6 |
| T9 | mp | 58% | 58% | 0% | 7% | 5–15bb | g6 |
| T8 | mp | 57% | 49% | 0% | 7% | 0–5bb | g6 |
| T7 | mp | 57% | 45% | 0% | 7% | 0–5bb | g6 |
| 99 | spp | 48% | 32% | 0% | 6% | 0–5bb | g7 |
| 88 | spp | 47% | 32% | 0% | 6% | 0–5bb | g7 |
| 77 | spp | 46% | 30% | 0% | 6% | 0–5bb | g7 |
| 66 | spp | 42% | 30% | 0% | 7% | 0–5bb | g7 |
| 55 | spp | 39% | 30% | 0% | 6% | 0–5bb | g7 |
| 44 | spp | 38% | 27% | 0% | 7% | 0–5bb | g7 |
| A2 | bp | 36% | 21% | 0% | 3% | 0–5bb | g7 |
| K2 | bp | 34% | 23% | 0% | 0% | 0–5bb | g7 |
| AK | khnd | 31% | 20% | 0% | 0% | 0–5bb | g8 |
| AQ | khnd | 31% | 18% | 0% | 0% | 0–5bb | g8 |
| A9 | khnd | 29% | 17% | 0% | 0% | 0–5bb | g8 |
| A8 | khnd | 28% | 13% | 0% | 0% | 0–5bb | g8 |
| A7 | khnd | 26% | 9% | 0% | 0% | 0–5bb | g8 |
| A6 | khnd | 26% | 7% | 0% | 0% | 0–5bb | g8 |
| A5 | khnd | 24% | 5% | 0% | 0% | 0–5bb | g8 |
| A4 | khnd | 23% | 4% | 0% | 0% | 0–5bb | g8 |
