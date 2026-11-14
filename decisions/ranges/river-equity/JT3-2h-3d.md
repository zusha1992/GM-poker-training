# JT3-2h-3d river (J♠ T♠ 3♣ 2♥ 3♦): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Full houses | JJ, TT, 33, 22 | 100% | 100% | 100% | 100% |
| g2 | 50–100bb | Two pair | JT | 94% | 100% | 100% | 82% |
| g3 | 50–100bb | Trips | A3, K3 | 100% | 100% | 100% | 99% |
| g4 | 50–100bb | Overpairs | AA–QQ | 95% | 100% | 100% | 87% |
| g5 | 50–100bb | Trips | 43 | 98% | 100% | 100% | 94% |
| g6 | 25–50bb | Top pair, good kicker | AJ, KJ, QJ | 87% | 98% | 97% | 64% |
| g7 | 0–5bb | Second pair | AT, KT, QT, T9–T7 | 32% | 20% | 0% | 3% |
| g8 | 0–5bb | Top pair, weak kicker | J9–J7 | 70% | 81% | 61% | 39% |
| g9 | 0–5bb | Small pairs | 99–44, A2, K2 | 14% | 0% | 0% | 0% |
| g10 | Pot is too big | Ace-high | AK, AQ, A9–A4 | 11% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| JJ | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| TT | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 33 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 22 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| JT | twopair | 94% | 100% | 100% | 82% | 50–100bb | g2 |
| A3 | trips | 100% | 100% | 100% | 99% | 50–100bb | g3 |
| K3 | trips | 99% | 100% | 100% | 98% | 50–100bb | g3 |
| AA | op | 96% | 100% | 100% | 87% | 50–100bb | g4 |
| KK | op | 95% | 100% | 100% | 87% | 50–100bb | g4 |
| QQ | op | 95% | 100% | 100% | 86% | 50–100bb | g4 |
| 43 | trips | 98% | 100% | 100% | 94% | 50–100bb | g5 |
| AJ | tpgk | 93% | 100% | 100% | 78% | 50–100bb | g6 |
| KJ | tpgk | 88% | 99% | 98% | 64% | 50–100bb | g6 |
| QJ | tpmk | 79% | 96% | 92% | 52% | 50–100bb | g6 |
| AT | mp | 40% | 29% | 0% | 6% | 0–5bb | g7 |
| KT | mp | 35% | 25% | 0% | 4% | 0–5bb | g7 |
| T9 | mp | 28% | 12% | 0% | 0% | 0–5bb | g7 |
| QT | mp | 27% | 16% | 0% | 1% | 0–5bb | g7 |
| T8 | mp | 26% | 9% | 0% | 0% | 0–5bb | g7 |
| T7 | mp | 22% | 5% | 0% | 0% | 0–5bb | g7 |
| J9 | tpmk | 72% | 87% | 73% | 43% | 25–50bb | g8 |
| J7 | tpmk | 67% | 72% | 42% | 32% | 15–25bb | g8 |
| J8 | tpmk | 68% | 76% | 52% | 37% | 25–50bb | g8 |
| 66 | spp | 15% | 0% | 0% | 0% | 0–5bb | g9 |
| 44 | spp | 15% | 0% | 0% | 0% | 0–5bb | g9 |
| 77 | spp | 14% | 0% | 0% | 0% | 0–5bb | g9 |
| 99 | spp | 14% | 0% | 0% | 0% | 0–5bb | g9 |
| 88 | spp | 14% | 0% | 0% | 0% | 0–5bb | g9 |
| 55 | spp | 14% | 0% | 0% | 0% | 0–5bb | g9 |
| A2 | bp | 13% | 0% | 0% | 0% | 0–5bb | g9 |
| K2 | bp | 13% | 0% | 0% | 0% | 0–5bb | g9 |
| A8 | khnd | 12% | 0% | 0% | 0% | Pot is too big | g10 |
| AK | khnd | 12% | 0% | 0% | 0% | Pot is too big | g10 |
| A9 | khnd | 11% | 0% | 0% | 0% | Pot is too big | g10 |
| A7 | khnd | 11% | 0% | 0% | 0% | Pot is too big | g10 |
| AQ | khnd | 11% | 0% | 0% | 0% | Pot is too big | g10 |
| A6 | khnd | 11% | 0% | 0% | 0% | Pot is too big | g10 |
| A4 | khnd | 10% | 0% | 0% | 0% | Pot is too big | g10 |
| A5 | khnd | 10% | 0% | 0% | 0% | Pot is too big | g10 |
