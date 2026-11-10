# JT3 flop (J♠ T♠ 3♣): equity groups

Generated 2026-11-10 by scripts/analysis/flop-equity-groups.ts (6000 samples per hand and level).
BTN opens, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB's whole range · L1 = BB after calling a flop bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|
| g1 | 50–100bb | JJ, TT, 33 | 90% | 90% | 95% | 94% |
| g2 | 50–100bb | AA–QQ, AJ, KJ, JT | 80% | 81% | 75% | 68% |
| g3 | 25–50bb | QJ, J9–J7 | 75% | 74% | 61% | 41% |
| g4 | 15–25bb | AT, KT, QT | 70% | 64% | 37% | 20% |
| g5 | 5–15bb | T9–T7 | 66% | 58% | 25% | 19% |
| g6 | 0–5bb | 99–66 | 56% | 45% | 12% | 12% |
| g7 | Pot is too big | 55, 44, A9–A6 | 43% | 32% | 13% | 12% |
| g8 | Pot is too big | 22, A3, K3, 43 | 50% | 39% | 21% | 21% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| JJ | twopair | 91% | 91% | 96% | 96% | 50–100bb | g1 |
| TT | twopair | 90% | 91% | 95% | 94% | 50–100bb | g1 |
| 33 | twopair | 90% | 90% | 93% | 93% | 50–100bb | g1 |
| JT | twopair | 83% | 84% | 84% | 80% | 50–100bb | g2 |
| AA | op | 81% | 81% | 74% | 70% | 50–100bb | g2 |
| QQ | op | 80% | 81% | 74% | 69% | 50–100bb | g2 |
| KK | op | 80% | 81% | 74% | 69% | 50–100bb | g2 |
| AJ | tpgk | 78% | 80% | 73% | 66% | 50–100bb | g2 |
| KJ | tpgk | 78% | 79% | 71% | 59% | 50–100bb | g2 |
| QJ | tpmk | 78% | 77% | 65% | 50% | 25–50bb | g3 |
| J9 | tpmk | 74% | 73% | 59% | 36% | 25–50bb | g3 |
| J8 | tpmk | 73% | 70% | 56% | 30% | 25–50bb | g3 |
| J7 | tpmk | 70% | 69% | 53% | 27% | 25–50bb | g3 |
| AT | mp | 71% | 66% | 40% | 20% | 15–25bb | g4 |
| KT | mp | 71% | 64% | 37% | 20% | 15–25bb | g4 |
| QT | mp | 69% | 63% | 33% | 21% | 15–25bb | g4 |
| T9 | mp | 67% | 60% | 26% | 19% | 5–15bb | g5 |
| T8 | mp | 65% | 58% | 23% | 19% | 5–15bb | g5 |
| T7 | mp | 64% | 53% | 20% | 18% | 5–15bb | g5 |
| 99 | spp | 62% | 49% | 13% | 14% | 0–5bb | g6 |
| 88 | spp | 58% | 47% | 12% | 12% | 0–5bb | g6 |
| 77 | spp | 54% | 43% | 12% | 11% | 0–5bb | g6 |
| 66 | spp | 51% | 39% | 11% | 10% | 0–5bb | g6 |
| 55 | spp | 47% | 37% | 11% | 10% | Pot is too big | g7 |
| A9 | khnd | 46% | 35% | 15% | 13% | Pot is too big | g7 |
| 44 | spp | 45% | 33% | 11% | 10% | Pot is too big | g7 |
| A8 | khnd | 44% | 33% | 14% | 14% | Pot is too big | g7 |
| A7 | khnd | 41% | 30% | 12% | 13% | Pot is too big | g7 |
| A6 | khnd | 38% | 27% | 12% | 11% | Pot is too big | g7 |
| K3 | bp | 57% | 47% | 30% | 30% | 0–5bb | g8 |
| A3 | bp | 53% | 43% | 23% | 23% | 0–5bb | g8 |
| 43 | bp | 52% | 42% | 27% | 26% | 0–5bb | g8 |
| 22 | spp | 40% | 26% | 10% | 10% | Pot is too big | g8 |
