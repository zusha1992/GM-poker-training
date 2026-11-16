# JT3-6c-3d river (J♠ T♠ 3♣ 6♣ 3♦): equity groups

Generated 2026-11-16 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Full houses | JJ, TT, 66, 33 | 100% | 100% | 100% | 100% |
| g2 | 50–100bb | Trips | A3, K3, 43 | 99% | 100% | 100% | 93% |
| g3 | 25–50bb | Overpairs | AA–QQ | 93% | 100% | 100% | 74% |
| g4 | 25–50bb | Top pair | AJ, KJ, QJ, JT–J7 | 86% | 95% | 63% | 61% |
| g5 | 5–15bb | Second pair, good kicker | AT, KT, QT | 50% | 52% | 0% | 18% |
| g6 | 0–5bb | Second pair, weak kicker | T9–T7 | 36% | 21% | 0% | 1% |
| g7 | 0–5bb | Small pairs | 99–77, 55, 44, 22 | 21% | 2% | 0% | 0% |
| g8 | 0–5bb | Third pair | A6, K6, Q6, 96, 86, 76, 65, 64 | 19% | 1% | 0% | 0% |
| g9 | Pot is too big | Ace-high | AK, AQ, A9–A7, A5, A4, A2 | 16% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| JJ | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| TT | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 66 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 33 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A3 | trips | 99% | 100% | 100% | 94% | 50–100bb | g2 |
| K3 | trips | 99% | 100% | 100% | 92% | 50–100bb | g2 |
| 43 | trips | 97% | 100% | 100% | 88% | 50–100bb | g2 |
| KK | op | 93% | 100% | 100% | 75% | 50–100bb | g3 |
| QQ | op | 93% | 100% | 100% | 74% | 50–100bb | g3 |
| AA | op | 93% | 100% | 100% | 72% | 50–100bb | g3 |
| AJ | tpgk | 92% | 100% | 100% | 69% | 50–100bb | g4 |
| JT | twopair | 91% | 100% | 100% | 68% | 50–100bb | g4 |
| KJ | tpgk | 90% | 97% | 73% | 62% | 50–100bb | g4 |
| QJ | tpmk | 84% | 91% | 32% | 54% | 50–100bb | g4 |
| J9 | tpmk | 79% | 90% | 24% | 54% | 50–100bb | g4 |
| J8 | tpmk | 75% | 90% | 22% | 54% | 50–100bb | g4 |
| J7 | tpmk | 75% | 89% | 20% | 53% | 50–100bb | g4 |
| AT | mp | 55% | 65% | 0% | 27% | 15–25bb | g5 |
| KT | mp | 50% | 52% | 0% | 16% | 5–15bb | g5 |
| QT | mp | 44% | 40% | 0% | 10% | 0–5bb | g5 |
| T9 | mp | 38% | 26% | 0% | 2% | 0–5bb | g6 |
| T8 | mp | 34% | 15% | 0% | 0% | 0–5bb | g6 |
| T7 | mp | 32% | 11% | 0% | 0% | 0–5bb | g6 |
| 99 | spp | 24% | 3% | 0% | 0% | 0–5bb | g7 |
| 88 | spp | 23% | 3% | 0% | 0% | 0–5bb | g7 |
| 77 | spp | 22% | 2% | 0% | 0% | 0–5bb | g7 |
| 22 | spp | 19% | 0% | 0% | 0% | 0–5bb | g7 |
| 44 | spp | 18% | 0% | 0% | 0% | 0–5bb | g7 |
| 55 | spp | 18% | 0% | 0% | 0% | 0–5bb | g7 |
| A6 | bp | 20% | 1% | 0% | 0% | 0–5bb | g8 |
| 76 | bp | 19% | 0% | 0% | 0% | 0–5bb | g8 |
| 86 | bp | 19% | 0% | 0% | 0% | 0–5bb | g8 |
| K6 | bp | 19% | 1% | 0% | 0% | 0–5bb | g8 |
| 64 | bp | 18% | 0% | 0% | 0% | 0–5bb | g8 |
| 65 | bp | 18% | 0% | 0% | 0% | 0–5bb | g8 |
| Q6 | bp | 18% | 1% | 0% | 0% | 0–5bb | g8 |
| 96 | bp | 18% | 1% | 0% | 0% | 0–5bb | g8 |
| AK | khnd | 18% | 0% | 0% | 0% | Pot is too big | g9 |
| A8 | khnd | 17% | 0% | 0% | 0% | Pot is too big | g9 |
| AQ | khnd | 17% | 0% | 0% | 0% | Pot is too big | g9 |
| A7 | khnd | 16% | 0% | 0% | 0% | Pot is too big | g9 |
| A2 | khnd | 16% | 0% | 0% | 0% | Pot is too big | g9 |
| A5 | khnd | 15% | 0% | 0% | 0% | Pot is too big | g9 |
| A9 | khnd | 15% | 0% | 0% | 0% | Pot is too big | g9 |
| A4 | khnd | 15% | 0% | 0% | 0% | Pot is too big | g9 |
