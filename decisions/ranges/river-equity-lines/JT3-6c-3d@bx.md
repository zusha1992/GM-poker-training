# JT3-6c-3d@bx river (J♠ T♠ 3♣ 6♣ 3♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Full houses | JJ, TT, 66, 33 | 100% | 100% | 100% | 100% |
| g2 | 50–100bb | Trips | A3, K3, 43 | 98% | 100% | 100% | 75% |
| g3 | 50–100bb | Overpairs | AA–QQ | 93% | 100% | 100% | 61% |
| g4 | 25–50bb | Top pair, good kicker | AJ, KJ, QJ, JT | 90% | 96% | 70% | 48% |
| g5 | 15–25bb | Top pair, weak kicker | J9–J7 | 82% | 91% | 29% | 44% |
| g6 | 15–25bb | Second pair, good kicker | AT, KT, QT | 65% | 69% | 0% | 19% |
| g7 | 5–15bb | Second pair, weak kicker | T9–T7 | 57% | 55% | 0% | 11% |
| g8 | 0–5bb | Third pair | A6, K6, Q6, 96, 86, 76, 65, 64 | 43% | 30% | 0% | 0% |
| g9 | 0–5bb | Small pairs | 99–77, 55, 44, 22 | 41% | 28% | 0% | 2% |
| g10 | 0–5bb | Ace-high | AK, AQ, A9–A7, A5, A4, A2 | 26% | 9% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| JJ | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| TT | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 66 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 33 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K3 | trips | 97% | 100% | 100% | 76% | 50–100bb | g2 |
| A3 | trips | 98% | 100% | 100% | 75% | 50–100bb | g2 |
| 43 | trips | 96% | 100% | 100% | 71% | 50–100bb | g2 |
| QQ | op | 93% | 100% | 100% | 63% | 50–100bb | g3 |
| KK | op | 93% | 100% | 100% | 63% | 50–100bb | g3 |
| AA | op | 92% | 100% | 100% | 56% | 50–100bb | g3 |
| AJ | tpgk | 92% | 99% | 94% | 47% | 25–50bb | g4 |
| QJ | tpmk | 87% | 91% | 33% | 46% | 15–25bb | g4 |
| KJ | tpgk | 90% | 96% | 60% | 46% | 25–50bb | g4 |
| JT | twopair | 92% | 100% | 100% | 54% | 50–100bb | g4 |
| J8 | tpmk | 81% | 92% | 29% | 45% | 15–25bb | g5 |
| J7 | tpmk | 80% | 91% | 28% | 45% | 15–25bb | g5 |
| J9 | tpmk | 83% | 91% | 29% | 44% | 15–25bb | g5 |
| AT | mp | 68% | 72% | 0% | 25% | 15–25bb | g6 |
| QT | mp | 61% | 67% | 0% | 17% | 15–25bb | g6 |
| KT | mp | 66% | 67% | 0% | 17% | 15–25bb | g6 |
| T9 | mp | 59% | 59% | 0% | 13% | 5–15bb | g7 |
| T7 | mp | 54% | 45% | 0% | 6% | 0–5bb | g7 |
| T8 | mp | 55% | 51% | 0% | 8% | 5–15bb | g7 |
| Q6 | bp | 44% | 31% | 0% | 0% | 0–5bb | g8 |
| 76 | bp | 43% | 31% | 0% | 0% | 0–5bb | g8 |
| A6 | bp | 43% | 30% | 0% | 1% | 0–5bb | g8 |
| K6 | bp | 43% | 32% | 0% | 0% | 0–5bb | g8 |
| 86 | bp | 42% | 29% | 0% | 0% | 0–5bb | g8 |
| 96 | bp | 42% | 29% | 0% | 0% | 0–5bb | g8 |
| 64 | bp | 41% | 28% | 0% | 0% | 0–5bb | g8 |
| 65 | bp | 41% | 29% | 0% | 0% | 0–5bb | g8 |
| 99 | spp | 47% | 34% | 0% | 3% | 0–5bb | g9 |
| 88 | spp | 46% | 33% | 0% | 3% | 0–5bb | g9 |
| 77 | spp | 43% | 32% | 0% | 4% | 0–5bb | g9 |
| 55 | spp | 39% | 28% | 0% | 0% | 0–5bb | g9 |
| 44 | spp | 35% | 24% | 0% | 0% | 0–5bb | g9 |
| 22 | spp | 33% | 20% | 0% | 0% | 0–5bb | g9 |
| AQ | khnd | 30% | 16% | 0% | 0% | 0–5bb | g10 |
| AK | khnd | 29% | 17% | 0% | 0% | 0–5bb | g10 |
| A9 | khnd | 28% | 14% | 0% | 0% | 0–5bb | g10 |
| A8 | khnd | 27% | 8% | 0% | 0% | 0–5bb | g10 |
| A7 | khnd | 25% | 6% | 0% | 0% | 0–5bb | g10 |
| A4 | khnd | 23% | 3% | 0% | 0% | 0–5bb | g10 |
| A2 | khnd | 23% | 2% | 0% | 0% | 0–5bb | g10 |
| A5 | khnd | 23% | 2% | 0% | 0% | 0–5bb | g10 |
