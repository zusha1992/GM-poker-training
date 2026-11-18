# JT3-2h-3d@xx river (J♠ T♠ 3♣ 2♥ 3♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Full houses | JJ, TT, 33, 22 | 100% | 100% | 100% | 91% |
| g2 | 50–100bb | Trips | A3, K3, 43 | 99% | 100% | 100% | 79% |
| g3 | 50–100bb | Overpairs | AA–QQ | 95% | 100% | 100% | 57% |
| g4 | 25–50bb | Top pair, good kicker | AJ, KJ, QJ, JT | 93% | 97% | 77% | 34% |
| g5 | 15–25bb | Top pair, weak kicker | J9–J7 | 88% | 91% | 31% | 33% |
| g6 | 15–25bb | Second pair | AT, KT, QT, T9–T7 | 77% | 69% | 0% | 21% |
| g7 | 0–5bb | Small pairs | 99–44, A2, K2 | 62% | 42% | 0% | 13% |
| g8 | 0–5bb | Ace-high | AK, AQ, A9 | 52% | 29% | 0% | 0% |
| g9 | Pot is too big | Ace-high | A8–A4 | 43% | 13% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 33 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| JJ | boat | 100% | 100% | 100% | 91% | 50–100bb | g1 |
| TT | boat | 100% | 100% | 100% | 90% | 50–100bb | g1 |
| 22 | boat | 99% | 100% | 100% | 89% | 50–100bb | g1 |
| A3 | trips | 99% | 100% | 100% | 80% | 50–100bb | g2 |
| K3 | trips | 98% | 100% | 100% | 78% | 50–100bb | g2 |
| 43 | trips | 97% | 100% | 100% | 73% | 50–100bb | g2 |
| AA | op | 95% | 100% | 100% | 58% | 50–100bb | g3 |
| QQ | op | 95% | 100% | 100% | 57% | 50–100bb | g3 |
| KK | op | 95% | 100% | 100% | 56% | 50–100bb | g3 |
| JT | twopair | 94% | 100% | 100% | 40% | 25–50bb | g4 |
| AJ | tpgk | 93% | 99% | 94% | 31% | 25–50bb | g4 |
| QJ | tpmk | 91% | 93% | 50% | 33% | 15–25bb | g4 |
| KJ | tpgk | 93% | 96% | 70% | 34% | 25–50bb | g4 |
| J9 | tpmk | 89% | 92% | 37% | 33% | 15–25bb | g5 |
| J8 | tpmk | 88% | 90% | 27% | 33% | 15–25bb | g5 |
| J7 | tpmk | 88% | 89% | 21% | 33% | 15–25bb | g5 |
| AT | mp | 80% | 73% | 0% | 24% | 15–25bb | g6 |
| KT | mp | 78% | 71% | 0% | 21% | 15–25bb | g6 |
| QT | mp | 76% | 68% | 0% | 20% | 15–25bb | g6 |
| T9 | mp | 75% | 65% | 0% | 20% | 15–25bb | g6 |
| T8 | mp | 73% | 60% | 0% | 19% | 5–15bb | g6 |
| T7 | mp | 72% | 55% | 0% | 17% | 5–15bb | g6 |
| 99 | spp | 68% | 46% | 0% | 14% | 0–5bb | g7 |
| 88 | spp | 66% | 45% | 0% | 15% | 0–5bb | g7 |
| 77 | spp | 64% | 45% | 0% | 15% | 0–5bb | g7 |
| 66 | spp | 62% | 45% | 0% | 16% | 0–5bb | g7 |
| 55 | spp | 61% | 43% | 0% | 15% | 0–5bb | g7 |
| 44 | spp | 60% | 41% | 0% | 13% | 0–5bb | g7 |
| A2 | bp | 58% | 35% | 0% | 10% | 0–5bb | g7 |
| K2 | bp | 58% | 38% | 0% | 7% | 0–5bb | g7 |
| AK | khnd | 53% | 29% | 0% | 0% | 0–5bb | g8 |
| AQ | khnd | 52% | 29% | 0% | 0% | 0–5bb | g8 |
| A9 | khnd | 51% | 28% | 0% | 0% | 0–5bb | g8 |
| A8 | khnd | 47% | 22% | 0% | 0% | Pot is too big | g9 |
| A7 | khnd | 45% | 15% | 0% | 0% | Pot is too big | g9 |
| A6 | khnd | 42% | 13% | 0% | 0% | Pot is too big | g9 |
| A5 | khnd | 40% | 9% | 0% | 0% | Pot is too big | g9 |
| A4 | khnd | 39% | 5% | 0% | 0% | Pot is too big | g9 |
