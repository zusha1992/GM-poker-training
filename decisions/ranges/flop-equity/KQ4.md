# KQ4 flop (K♦ Q♦ 4♠): equity groups

Generated 2026-11-11 by scripts/analysis/flop-equity-groups.ts (6000 samples per hand and level).
BTN opens, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB's whole range · L1 = BB after calling a flop bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | KK, QQ, 44 | 92% | 92% | 96% | 96% |
| g2 | 50–100bb | Two pair | KQ, K4 | 88% | 87% | 89% | 82% |
| g3 | 50–100bb | Overpair | AA | 84% | 84% | 74% | 69% |
| g4 | 25–50bb | Top pair, good kicker | AK, KJ, KT | 82% | 82% | 73% | 63% |
| g5 | 15–25bb | Top pair, weak kicker | K9–K5, K3, K2 | 76% | 74% | 57% | 30% |
| g6 | 5–15bb | Second pair | AQ, QJ–Q5 | 72% | 66% | 35% | 19% |
| g7 | 0–5bb | Small pairs | JJ–55, 33, 22, A4, 64, 54, 43 | 55% | 42% | 14% | 14% |
| g8 | Pot is too big | Ace-high | A9–A5, A3, A2 | 38% | 25% | 14% | 13% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| KK | twopair | 93% | 93% | 97% | 97% | 50–100bb | g1 |
| QQ | twopair | 92% | 92% | 96% | 96% | 50–100bb | g1 |
| 44 | twopair | 92% | 92% | 95% | 94% | 50–100bb | g1 |
| KQ | twopair | 88% | 88% | 91% | 86% | 50–100bb | g2 |
| K4 | twopair | 86% | 84% | 78% | 64% | 50–100bb | g2 |
| AA | op | 84% | 84% | 74% | 69% | 50–100bb | g3 |
| AK | tpgk | 83% | 82% | 76% | 70% | 50–100bb | g4 |
| KJ | tpmk | 82% | 81% | 75% | 65% | 50–100bb | g4 |
| KT | tpmk | 81% | 81% | 70% | 55% | 50–100bb | g4 |
| K9 | tpmk | 77% | 77% | 65% | 44% | 25–50bb | g5 |
| K8 | tpmk | 76% | 74% | 59% | 35% | 25–50bb | g5 |
| K7 | tpmk | 76% | 74% | 56% | 29% | 25–50bb | g5 |
| K6 | tpmk | 76% | 74% | 55% | 26% | 25–50bb | g5 |
| K5 | tpmk | 75% | 72% | 53% | 24% | 25–50bb | g5 |
| K3 | tpmk | 74% | 72% | 53% | 17% | 25–50bb | g5 |
| K2 | tpmk | 74% | 71% | 51% | 15% | 25–50bb | g5 |
| AQ | mp | 76% | 72% | 46% | 22% | 15–25bb | g6 |
| QJ | mp | 74% | 68% | 40% | 19% | 15–25bb | g6 |
| QT | mp | 73% | 67% | 35% | 18% | 15–25bb | g6 |
| Q9 | mp | 71% | 63% | 29% | 17% | 15–25bb | g6 |
| Q8 | mp | 67% | 60% | 25% | 16% | 5–15bb | g6 |
| Q7 | mp | 67% | 60% | 24% | 17% | 5–15bb | g6 |
| Q6 | mp | 68% | 58% | 21% | 16% | 5–15bb | g6 |
| Q5 | mp | 67% | 58% | 20% | 17% | 5–15bb | g6 |
| 99 | pp2 | 61% | 49% | 11% | 11% | 0–5bb | g7 |
| 64 | bp | 57% | 44% | 27% | 27% | 0–5bb | g7 |
| 88 | spp | 57% | 45% | 10% | 10% | 0–5bb | g7 |
| A4 | bp | 56% | 44% | 24% | 24% | 0–5bb | g7 |
| 43 | bp | 56% | 43% | 28% | 27% | 0–5bb | g7 |
| 54 | bp | 55% | 45% | 27% | 26% | 0–5bb | g7 |
| JJ | pp2 | 65% | 53% | 12% | 12% | 5–15bb | g7 |
| 77 | spp | 53% | 42% | 10% | 11% | 0–5bb | g7 |
| TT | pp2 | 63% | 52% | 13% | 13% | 5–15bb | g7 |
| 66 | spp | 51% | 40% | 10% | 10% | 0–5bb | g7 |
| 55 | spp | 49% | 38% | 10% | 10% | Pot is too big | g7 |
| 33 | spp | 45% | 28% | 10% | 10% | Pot is too big | g7 |
| 22 | spp | 42% | 26% | 9% | 10% | Pot is too big | g7 |
| A9 | khnd | 45% | 28% | 14% | 12% | Pot is too big | g8 |
| A8 | khnd | 41% | 26% | 13% | 12% | Pot is too big | g8 |
| A7 | khnd | 38% | 25% | 13% | 13% | Pot is too big | g8 |
| A6 | khnd | 38% | 24% | 13% | 13% | Pot is too big | g8 |
| A5 | khnd | 36% | 25% | 15% | 14% | Pot is too big | g8 |
| A2 | khnd | 34% | 23% | 13% | 14% | Pot is too big | g8 |
| A3 | khnd | 34% | 24% | 15% | 14% | Pot is too big | g8 |
