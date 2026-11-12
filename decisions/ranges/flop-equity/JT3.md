# JT3 flop (J♠ T♠ 3♣): equity groups

Generated 2026-11-11 by scripts/analysis/flop-equity-groups.ts (6000 samples per hand and level).
BTN opens, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB's whole range · L1 = BB after calling a flop bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | JJ, TT, 33 | 90% | 90% | 95% | 94% |
| g2 | 50–100bb | Two pair | JT | 84% | 83% | 84% | 79% |
| g3 | 50–100bb | Overpairs | AA–QQ | 81% | 81% | 74% | 69% |
| g4 | 25–50bb | Top pair, good kicker | AJ, KJ, QJ | 78% | 79% | 70% | 59% |
| g5 | 15–25bb | Top pair, weak kicker | J9–J7 | 73% | 72% | 57% | 34% |
| g6 | 5–15bb | Second pair | AT, KT, QT, T9–T7 | 69% | 63% | 33% | 20% |
| g7 | 0–5bb | Small pairs | 99–44, 22, A3, K3, 43 | 52% | 41% | 15% | 15% |
| g8 | Pot is too big | Ace-high | A9–A4, A2 | 40% | 30% | 14% | 13% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| JJ | twopair | 90% | 90% | 96% | 96% | 50–100bb | g1 |
| TT | twopair | 91% | 90% | 95% | 94% | 50–100bb | g1 |
| 33 | twopair | 90% | 89% | 94% | 93% | 50–100bb | g1 |
| JT | twopair | 84% | 83% | 84% | 79% | 50–100bb | g2 |
| QQ | op | 80% | 81% | 73% | 70% | 50–100bb | g3 |
| KK | op | 81% | 81% | 74% | 69% | 50–100bb | g3 |
| AA | op | 82% | 82% | 74% | 68% | 50–100bb | g3 |
| AJ | tpgk | 79% | 80% | 73% | 68% | 50–100bb | g4 |
| QJ | tpmk | 78% | 78% | 65% | 50% | 25–50bb | g4 |
| KJ | tpgk | 78% | 78% | 70% | 59% | 50–100bb | g4 |
| J9 | tpmk | 75% | 74% | 59% | 37% | 25–50bb | g5 |
| J8 | tpmk | 72% | 70% | 56% | 31% | 25–50bb | g5 |
| J7 | tpmk | 71% | 70% | 54% | 27% | 25–50bb | g5 |
| AT | mp | 71% | 67% | 39% | 20% | 15–25bb | g6 |
| KT | mp | 71% | 65% | 36% | 21% | 15–25bb | g6 |
| QT | mp | 69% | 62% | 32% | 21% | 15–25bb | g6 |
| T9 | mp | 66% | 59% | 26% | 18% | 5–15bb | g6 |
| T8 | mp | 64% | 58% | 22% | 18% | 5–15bb | g6 |
| T7 | mp | 63% | 56% | 19% | 17% | 5–15bb | g6 |
| 88 | spp | 58% | 47% | 13% | 13% | 0–5bb | g7 |
| K3 | bp | 58% | 48% | 30% | 30% | 0–5bb | g7 |
| 77 | spp | 53% | 43% | 11% | 12% | 0–5bb | g7 |
| A3 | bp | 53% | 42% | 23% | 22% | 0–5bb | g7 |
| 43 | bp | 53% | 43% | 27% | 26% | 0–5bb | g7 |
| 99 | spp | 62% | 50% | 13% | 14% | 5–15bb | g7 |
| 66 | spp | 50% | 40% | 10% | 11% | Pot is too big | g7 |
| 55 | spp | 49% | 36% | 11% | 10% | Pot is too big | g7 |
| 44 | spp | 44% | 35% | 11% | 10% | Pot is too big | g7 |
| 22 | spp | 41% | 27% | 10% | 10% | Pot is too big | g7 |
| A9 | khnd | 48% | 35% | 15% | 14% | Pot is too big | g8 |
| A8 | khnd | 43% | 34% | 15% | 15% | Pot is too big | g8 |
| A7 | khnd | 40% | 31% | 13% | 13% | Pot is too big | g8 |
| A6 | khnd | 39% | 28% | 12% | 12% | Pot is too big | g8 |
| A5 | khnd | 38% | 28% | 13% | 13% | Pot is too big | g8 |
| A4 | khnd | 35% | 27% | 14% | 13% | Pot is too big | g8 |
| A2 | khnd | 35% | 26% | 12% | 13% | Pot is too big | g8 |
