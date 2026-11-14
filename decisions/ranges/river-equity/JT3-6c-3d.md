# JT3-6c-3d river (J♠ T♠ 3♣ 6♣ 3♦): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Full houses | JJ, TT, 66, 33 | 100% | 100% | 100% | 100% |
| g2 | 50–100bb | Two pair | JT | 92% | 100% | 100% | 68% |
| g3 | 50–100bb | Trips | A3, K3 | 99% | 100% | 100% | 93% |
| g4 | 50–100bb | Overpairs | AA–QQ | 93% | 100% | 100% | 73% |
| g5 | 50–100bb | Trips | 43 | 97% | 100% | 100% | 88% |
| g6 | 25–50bb | Top pair, good kicker | AJ, KJ, QJ | 89% | 96% | 68% | 62% |
| g7 | 5–15bb | Second pair | AT, KT | 52% | 58% | 0% | 23% |
| g8 | 0–5bb | Top pair, weak kicker | J9–J7 | 77% | 89% | 23% | 54% |
| g9 | 0–5bb | Second pair | QT, T9–T7 | 40% | 30% | 0% | 5% |
| g10 | 0–5bb | Small pairs | 99–77, 55, 44, 22, A6, K6, Q6, 96, 86, 76, 65, 64 | 20% | 1% | 0% | 0% |
| g11 | Pot is too big | Ace-high | AK, AQ, A9–A7, A5, A4, A2 | 16% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| JJ | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| TT | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 66 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 33 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| JT | twopair | 92% | 100% | 100% | 68% | 50–100bb | g2 |
| A3 | trips | 99% | 100% | 100% | 93% | 50–100bb | g3 |
| K3 | trips | 99% | 100% | 100% | 92% | 50–100bb | g3 |
| KK | op | 94% | 100% | 100% | 74% | 50–100bb | g4 |
| QQ | op | 93% | 100% | 100% | 73% | 50–100bb | g4 |
| AA | op | 94% | 100% | 100% | 72% | 50–100bb | g4 |
| 43 | trips | 97% | 100% | 100% | 88% | 50–100bb | g5 |
| AJ | tpgk | 92% | 100% | 100% | 68% | 50–100bb | g6 |
| KJ | tpgk | 89% | 97% | 73% | 62% | 50–100bb | g6 |
| QJ | tpmk | 84% | 91% | 31% | 54% | 50–100bb | g6 |
| AT | mp | 54% | 64% | 0% | 28% | 15–25bb | g7 |
| KT | mp | 50% | 52% | 0% | 18% | 5–15bb | g7 |
| J7 | tpmk | 75% | 88% | 20% | 55% | 50–100bb | g8 |
| J8 | tpmk | 75% | 90% | 23% | 54% | 50–100bb | g8 |
| J9 | tpmk | 79% | 90% | 24% | 54% | 50–100bb | g8 |
| QT | mp | 44% | 39% | 0% | 10% | 0–5bb | g9 |
| T9 | mp | 37% | 25% | 0% | 2% | 0–5bb | g9 |
| T8 | mp | 34% | 16% | 0% | 0% | 0–5bb | g9 |
| T7 | mp | 32% | 11% | 0% | 0% | 0–5bb | g9 |
| 99 | spp | 23% | 3% | 0% | 0% | 0–5bb | g10 |
| 88 | spp | 23% | 3% | 0% | 0% | 0–5bb | g10 |
| 77 | spp | 22% | 2% | 0% | 0% | 0–5bb | g10 |
| A6 | bp | 20% | 1% | 0% | 0% | 0–5bb | g10 |
| 64 | bp | 20% | 0% | 0% | 0% | 0–5bb | g10 |
| K6 | bp | 19% | 1% | 0% | 0% | 0–5bb | g10 |
| 76 | bp | 19% | 0% | 0% | 0% | 0–5bb | g10 |
| 22 | spp | 19% | 0% | 0% | 0% | 0–5bb | g10 |
| Q6 | bp | 19% | 1% | 0% | 0% | 0–5bb | g10 |
| 55 | spp | 19% | 0% | 0% | 0% | 0–5bb | g10 |
| 65 | bp | 18% | 0% | 0% | 0% | 0–5bb | g10 |
| 86 | bp | 18% | 0% | 0% | 0% | 0–5bb | g10 |
| 44 | spp | 18% | 0% | 0% | 0% | 0–5bb | g10 |
| 96 | bp | 17% | 1% | 0% | 0% | 0–5bb | g10 |
| AK | khnd | 17% | 0% | 0% | 0% | Pot is too big | g11 |
| A8 | khnd | 17% | 0% | 0% | 0% | Pot is too big | g11 |
| AQ | khnd | 16% | 0% | 0% | 0% | Pot is too big | g11 |
| A4 | khnd | 16% | 0% | 0% | 0% | Pot is too big | g11 |
| A9 | khnd | 16% | 0% | 0% | 0% | Pot is too big | g11 |
| A5 | khnd | 16% | 0% | 0% | 0% | Pot is too big | g11 |
| A7 | khnd | 15% | 0% | 0% | 0% | Pot is too big | g11 |
| A2 | khnd | 15% | 0% | 0% | 0% | Pot is too big | g11 |
