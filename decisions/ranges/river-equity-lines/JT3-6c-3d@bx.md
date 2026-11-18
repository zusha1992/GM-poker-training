# JT3-6c-3d@bx river (J♠ T♠ 3♣ 6♣ 3♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Full houses | JJ, TT, 66, 33 | 100% | 100% | 100% | 100% |
| g2 | 50–100bb | Trips | A3, K3, 43 | 98% | 100% | 100% | 74% |
| g3 | 50–100bb | Overpairs | AA–QQ | 93% | 100% | 100% | 60% |
| g4 | 25–50bb | Top pair, good kicker | AJ, KJ, QJ, JT | 90% | 96% | 70% | 47% |
| g5 | 15–25bb | Top pair, weak kicker | J9–J7 | 82% | 90% | 29% | 44% |
| g6 | 15–25bb | Second pair, good kicker | AT, KT, QT | 65% | 69% | 0% | 20% |
| g7 | 5–15bb | Second pair, weak kicker | T9–T7 | 58% | 54% | 0% | 11% |
| g8 | 0–5bb | Third pair | A6, K6, Q6, 96, 86, 76, 65, 64 | 43% | 30% | 0% | 0% |
| g9 | 0–5bb | Small pairs | 99–77, 55, 44, 22 | 41% | 28% | 0% | 2% |
| g10 | Pot is too big | Ace-high | AK, AQ, A9–A7, A5, A4, A2 | 26% | 9% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| JJ | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| TT | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 66 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 33 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K3 | trips | 97% | 100% | 100% | 75% | 50–100bb | g2 |
| A3 | trips | 98% | 100% | 100% | 74% | 50–100bb | g2 |
| 43 | trips | 96% | 100% | 100% | 72% | 50–100bb | g2 |
| KK | op | 93% | 100% | 100% | 63% | 50–100bb | g3 |
| QQ | op | 93% | 100% | 100% | 63% | 50–100bb | g3 |
| AA | op | 93% | 100% | 100% | 55% | 50–100bb | g3 |
| AJ | tpgk | 91% | 99% | 94% | 48% | 25–50bb | g4 |
| QJ | tpmk | 88% | 92% | 31% | 45% | 15–25bb | g4 |
| KJ | tpgk | 90% | 95% | 61% | 45% | 25–50bb | g4 |
| JT | twopair | 92% | 100% | 100% | 54% | 50–100bb | g4 |
| J8 | tpmk | 80% | 91% | 29% | 44% | 15–25bb | g5 |
| J7 | tpmk | 81% | 91% | 29% | 45% | 15–25bb | g5 |
| J9 | tpmk | 83% | 90% | 28% | 43% | 15–25bb | g5 |
| AT | mp | 67% | 72% | 0% | 25% | 15–25bb | g6 |
| KT | mp | 66% | 68% | 0% | 17% | 15–25bb | g6 |
| QT | mp | 63% | 67% | 0% | 17% | 15–25bb | g6 |
| T9 | mp | 59% | 58% | 0% | 13% | 5–15bb | g7 |
| T7 | mp | 56% | 44% | 0% | 6% | 0–5bb | g7 |
| T8 | mp | 56% | 50% | 0% | 9% | 5–15bb | g7 |
| 76 | bp | 44% | 29% | 0% | 0% | 0–5bb | g8 |
| 86 | bp | 43% | 30% | 0% | 0% | 0–5bb | g8 |
| K6 | bp | 43% | 31% | 0% | 0% | 0–5bb | g8 |
| A6 | bp | 42% | 29% | 0% | 1% | 0–5bb | g8 |
| 65 | bp | 42% | 29% | 0% | 0% | 0–5bb | g8 |
| Q6 | bp | 42% | 30% | 0% | 0% | 0–5bb | g8 |
| 64 | bp | 41% | 28% | 0% | 0% | 0–5bb | g8 |
| 96 | bp | 41% | 31% | 0% | 0% | 0–5bb | g8 |
| 99 | spp | 48% | 32% | 0% | 4% | 0–5bb | g9 |
| 88 | spp | 47% | 34% | 0% | 3% | 0–5bb | g9 |
| 77 | spp | 45% | 32% | 0% | 3% | 0–5bb | g9 |
| 55 | spp | 38% | 28% | 0% | 0% | 0–5bb | g9 |
| 44 | spp | 36% | 24% | 0% | 0% | 0–5bb | g9 |
| 22 | spp | 34% | 20% | 0% | 0% | 0–5bb | g9 |
| AK | khnd | 30% | 17% | 0% | 0% | Pot is too big | g10 |
| AQ | khnd | 29% | 16% | 0% | 0% | Pot is too big | g10 |
| A9 | khnd | 28% | 14% | 0% | 0% | Pot is too big | g10 |
| A8 | khnd | 27% | 10% | 0% | 0% | Pot is too big | g10 |
| A7 | khnd | 25% | 7% | 0% | 0% | Pot is too big | g10 |
| A4 | khnd | 24% | 3% | 0% | 0% | Pot is too big | g10 |
| A5 | khnd | 23% | 3% | 0% | 0% | Pot is too big | g10 |
| A2 | khnd | 23% | 2% | 0% | 0% | Pot is too big | g10 |
