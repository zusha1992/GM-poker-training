# JT3-6c-3d@xx river (J♠ T♠ 3♣ 6♣ 3♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Full houses | JJ, TT, 66, 33 | 100% | 100% | 100% | 96% |
| g2 | 50–100bb | Trips | A3, K3, 43 | 98% | 100% | 100% | 67% |
| g3 | 25–50bb | Overpairs | AA–QQ | 95% | 100% | 100% | 43% |
| g4 | 25–50bb | Top pair, good kicker | AJ, KJ, QJ, JT | 93% | 97% | 81% | 24% |
| g5 | 15–25bb | Top pair, weak kicker | J9–J7 | 88% | 90% | 34% | 23% |
| g6 | 15–25bb | Second pair | AT, KT, QT, T9–T7 | 77% | 69% | 0% | 14% |
| g7 | 0–5bb | Third pair | A6, K6, Q6, 96, 86, 76, 65, 64 | 61% | 41% | 0% | 6% |
| g8 | 0–5bb | Small pairs | 99–77, 55, 44, 22 | 59% | 40% | 0% | 6% |
| g9 | 0–5bb | Ace-high | AK, AQ, A9–A7, A5, A4, A2 | 41% | 15% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 33 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| JJ | boat | 100% | 100% | 100% | 96% | 50–100bb | g1 |
| TT | boat | 100% | 100% | 100% | 96% | 50–100bb | g1 |
| 66 | boat | 100% | 100% | 100% | 94% | 50–100bb | g1 |
| A3 | trips | 99% | 100% | 100% | 69% | 50–100bb | g2 |
| K3 | trips | 98% | 100% | 100% | 65% | 50–100bb | g2 |
| 43 | trips | 98% | 100% | 100% | 60% | 50–100bb | g2 |
| AA | op | 95% | 100% | 100% | 44% | 25–50bb | g3 |
| KK | op | 95% | 100% | 100% | 43% | 25–50bb | g3 |
| QQ | op | 95% | 100% | 100% | 43% | 25–50bb | g3 |
| JT | twopair | 94% | 100% | 100% | 30% | 25–50bb | g4 |
| AJ | tpgk | 93% | 99% | 94% | 21% | 25–50bb | g4 |
| KJ | tpgk | 93% | 97% | 78% | 23% | 25–50bb | g4 |
| QJ | tpmk | 91% | 94% | 56% | 23% | 25–50bb | g4 |
| J9 | tpmk | 88% | 91% | 38% | 22% | 15–25bb | g5 |
| J8 | tpmk | 88% | 90% | 31% | 24% | 15–25bb | g5 |
| J7 | tpmk | 87% | 89% | 26% | 23% | 15–25bb | g5 |
| AT | mp | 79% | 72% | 0% | 15% | 15–25bb | g6 |
| KT | mp | 79% | 71% | 0% | 13% | 15–25bb | g6 |
| QT | mp | 77% | 69% | 0% | 14% | 15–25bb | g6 |
| T9 | mp | 75% | 65% | 0% | 13% | 15–25bb | g6 |
| T8 | mp | 74% | 58% | 0% | 13% | 5–15bb | g6 |
| T7 | mp | 72% | 57% | 0% | 13% | 5–15bb | g6 |
| Q6 | bp | 62% | 41% | 0% | 6% | 0–5bb | g7 |
| K6 | bp | 62% | 42% | 0% | 6% | 0–5bb | g7 |
| 96 | bp | 61% | 41% | 0% | 4% | 0–5bb | g7 |
| A6 | bp | 61% | 41% | 0% | 9% | 0–5bb | g7 |
| 86 | bp | 61% | 39% | 0% | 3% | 0–5bb | g7 |
| 76 | bp | 60% | 38% | 0% | 3% | 0–5bb | g7 |
| 64 | bp | 59% | 36% | 0% | 1% | 0–5bb | g7 |
| 65 | bp | 58% | 37% | 0% | 2% | 0–5bb | g7 |
| 88 | spp | 66% | 48% | 0% | 11% | 0–5bb | g8 |
| 77 | spp | 65% | 47% | 0% | 12% | 0–5bb | g8 |
| 55 | spp | 54% | 32% | 0% | 0% | 0–5bb | g8 |
| 44 | spp | 53% | 31% | 0% | 0% | 0–5bb | g8 |
| 99 | spp | 67% | 51% | 0% | 11% | 5–15bb | g8 |
| 22 | spp | 49% | 30% | 0% | 0% | 0–5bb | g8 |
| AQ | khnd | 49% | 26% | 0% | 0% | 0–5bb | g9 |
| AK | khnd | 47% | 25% | 0% | 0% | 0–5bb | g9 |
| A9 | khnd | 47% | 22% | 0% | 0% | 0–5bb | g9 |
| A8 | khnd | 43% | 17% | 0% | 0% | 0–5bb | g9 |
| A7 | khnd | 39% | 13% | 0% | 0% | 0–5bb | g9 |
| A4 | khnd | 36% | 6% | 0% | 0% | 0–5bb | g9 |
| A2 | khnd | 35% | 5% | 0% | 0% | 0–5bb | g9 |
| A5 | khnd | 35% | 5% | 0% | 0% | 0–5bb | g9 |
