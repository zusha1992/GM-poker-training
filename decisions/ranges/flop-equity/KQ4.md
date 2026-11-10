# KQ4 flop (K♦ Q♦ 4♠): equity groups

Generated 2026-11-10 by scripts/analysis/flop-equity-groups.ts (6000 samples per hand and level).
BTN opens, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB's whole range · L1 = BB after calling a flop bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|
| g1 | 50–100bb | KK, QQ, 44, KQ | 91% | 90% | 94% | 91% |
| g2 | 50–100bb | AA, AK, K4 | 83% | 83% | 75% | 69% |
| g3 | 50–100bb | KJ, KT | 81% | 81% | 72% | 60% |
| g4 | 25–50bb | K9–K5, K3 | 77% | 74% | 57% | 31% |
| g5 | 15–25bb | AQ, K2, QJ–Q8 | 74% | 68% | 39% | 18% |
| g6 | 5–15bb | JJ, TT, Q7–Q5 | 66% | 55% | 17% | 15% |
| g7 | 0–5bb | 99–66 | 57% | 45% | 11% | 11% |
| g8 | Pot is too big | 55, A9–A6 | 41% | 27% | 13% | 12% |
| g9 | Pot is too big | A4, 64, 54, 43 | 56% | 44% | 25% | 25% |
| g10 | Pot is too big | 33, 22 | 43% | 28% | 10% | 10% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| KK | twopair | 93% | 93% | 97% | 97% | 50–100bb | g1 |
| QQ | twopair | 93% | 92% | 96% | 96% | 50–100bb | g1 |
| 44 | twopair | 92% | 92% | 95% | 94% | 50–100bb | g1 |
| KQ | twopair | 89% | 88% | 91% | 86% | 50–100bb | g1 |
| AK | tpgk | 83% | 83% | 75% | 70% | 50–100bb | g2 |
| AA | op | 83% | 84% | 75% | 69% | 50–100bb | g2 |
| K4 | twopair | 85% | 83% | 78% | 65% | 50–100bb | g2 |
| KJ | tpmk | 82% | 82% | 74% | 65% | 50–100bb | g3 |
| KT | tpmk | 81% | 79% | 70% | 55% | 50–100bb | g3 |
| K9 | tpmk | 78% | 77% | 64% | 43% | 25–50bb | g4 |
| K8 | tpmk | 78% | 74% | 59% | 34% | 25–50bb | g4 |
| K7 | tpmk | 76% | 73% | 55% | 30% | 25–50bb | g4 |
| K6 | tpmk | 76% | 73% | 55% | 25% | 25–50bb | g4 |
| K5 | tpmk | 76% | 73% | 54% | 22% | 25–50bb | g4 |
| K3 | tpmk | 75% | 73% | 51% | 17% | 25–50bb | g4 |
| AQ | mp | 76% | 72% | 45% | 20% | 15–25bb | g5 |
| K2 | tpmk | 75% | 71% | 50% | 15% | 15–25bb | g5 |
| QJ | mp | 75% | 69% | 41% | 18% | 15–25bb | g5 |
| QT | mp | 73% | 67% | 36% | 19% | 15–25bb | g5 |
| Q9 | mp | 71% | 64% | 29% | 17% | 15–25bb | g5 |
| Q8 | mp | 68% | 61% | 26% | 15% | 15–25bb | g5 |
| Q6 | mp | 67% | 59% | 22% | 17% | 5–15bb | g6 |
| Q7 | mp | 69% | 59% | 23% | 17% | 5–15bb | g6 |
| Q5 | mp | 68% | 57% | 20% | 17% | 5–15bb | g6 |
| JJ | pp2 | 66% | 54% | 12% | 14% | 5–15bb | g6 |
| TT | pp2 | 65% | 52% | 13% | 13% | 5–15bb | g6 |
| 99 | pp2 | 62% | 50% | 12% | 12% | 0–5bb | g7 |
| 88 | spp | 57% | 46% | 10% | 10% | 0–5bb | g7 |
| 77 | spp | 55% | 42% | 11% | 11% | 0–5bb | g7 |
| 66 | spp | 52% | 41% | 10% | 10% | 0–5bb | g7 |
| 55 | spp | 49% | 38% | 10% | 10% | Pot is too big | g8 |
| A9 | khnd | 43% | 28% | 13% | 12% | Pot is too big | g8 |
| A8 | khnd | 40% | 27% | 14% | 12% | Pot is too big | g8 |
| A7 | khnd | 38% | 26% | 13% | 12% | Pot is too big | g8 |
| A6 | khnd | 37% | 24% | 13% | 13% | Pot is too big | g8 |
| 54 | bp | 57% | 44% | 26% | 27% | 0–5bb | g9 |
| A4 | bp | 56% | 45% | 25% | 25% | 0–5bb | g9 |
| 64 | bp | 56% | 44% | 27% | 26% | 0–5bb | g9 |
| 43 | bp | 55% | 43% | 27% | 28% | 0–5bb | g9 |
| 33 | spp | 43% | 27% | 11% | 10% | Pot is too big | g10 |
| 22 | spp | 42% | 27% | 10% | 10% | Pot is too big | g10 |
