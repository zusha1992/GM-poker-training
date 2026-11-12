# KQT flop (K♦ Q♣ T♥): equity groups

Generated 2026-11-11 by scripts/analysis/flop-equity-groups.ts (6000 samples per hand and level).
BTN opens, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB's whole range · L1 = BB after calling a flop bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | KK, QQ, TT, AJ, J9 | 90% | 90% | 84% | 81% |
| g2 | 25–50bb | Two pair | KQ, KT, QT | 79% | 76% | 62% | 54% |
| g3 | 25–50bb | Overpair | AA | 80% | 76% | 64% | 55% |
| g4 | 15–25bb | Top pair, good kicker | AK, KJ | 81% | 79% | 63% | 52% |
| g5 | 5–15bb | Top pair, weak kicker | K9–K2 | 70% | 62% | 44% | 24% |
| g6 | 5–15bb | Second pair | AQ, QJ, Q9–Q5 | 71% | 59% | 36% | 24% |
| g7 | 0–5bb | Small pairs | JJ, 99–22, AT, JT, T9–T7 | 54% | 33% | 18% | 17% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AJ | straight | 93% | 93% | 90% | 89% | 50–100bb | g1 |
| J9 | straight | 88% | 88% | 82% | 77% | 50–100bb | g1 |
| QQ | twopair | 86% | 86% | 76% | 73% | 50–100bb | g1 |
| TT | twopair | 86% | 86% | 78% | 72% | 50–100bb | g1 |
| KK | twopair | 87% | 87% | 77% | 66% | 50–100bb | g1 |
| KQ | twopair | 82% | 80% | 70% | 62% | 50–100bb | g2 |
| QT | twopair | 77% | 72% | 54% | 47% | 25–50bb | g2 |
| KT | twopair | 79% | 76% | 63% | 52% | 50–100bb | g2 |
| AA | op | 80% | 75% | 64% | 55% | 50–100bb | g3 |
| KJ | tpmk | 82% | 80% | 65% | 52% | 50–100bb | g4 |
| AK | tpgk | 81% | 77% | 62% | 51% | 50–100bb | g4 |
| K8 | tpmk | 69% | 62% | 43% | 26% | 15–25bb | g5 |
| K4 | tpmk | 69% | 60% | 40% | 19% | 15–25bb | g5 |
| K7 | tpmk | 68% | 60% | 42% | 23% | 15–25bb | g5 |
| K5 | tpmk | 69% | 60% | 41% | 21% | 15–25bb | g5 |
| K6 | tpmk | 69% | 60% | 41% | 20% | 5–15bb | g5 |
| K2 | tpmk | 68% | 59% | 39% | 17% | 5–15bb | g5 |
| K3 | tpmk | 67% | 59% | 40% | 17% | 5–15bb | g5 |
| K9 | tpmk | 74% | 70% | 54% | 38% | 25–50bb | g5 |
| QJ | mp | 77% | 68% | 46% | 32% | 15–25bb | g6 |
| Q7 | mp | 65% | 49% | 22% | 16% | 0–5bb | g6 |
| Q6 | mp | 64% | 48% | 21% | 15% | 0–5bb | g6 |
| AQ | mp | 74% | 64% | 42% | 27% | 15–25bb | g6 |
| Q5 | mp | 63% | 46% | 20% | 15% | 0–5bb | g6 |
| Q9 | mp | 69% | 55% | 31% | 20% | 5–15bb | g6 |
| Q8 | mp | 64% | 51% | 24% | 14% | 5–15bb | g6 |
| AT | bp | 68% | 49% | 28% | 27% | 0–5bb | g7 |
| T9 | bp | 62% | 40% | 22% | 20% | 0–5bb | g7 |
| JJ | pp2 | 74% | 58% | 31% | 32% | 5–15bb | g7 |
| 99 | pp3 | 56% | 29% | 17% | 16% | 0–5bb | g7 |
| T8 | bp | 56% | 33% | 16% | 14% | 0–5bb | g7 |
| T7 | bp | 55% | 33% | 16% | 14% | 0–5bb | g7 |
| JT | bp | 70% | 55% | 34% | 32% | 5–15bb | g7 |
| 88 | spp | 48% | 20% | 8% | 8% | Pot is too big | g7 |
| 77 | spp | 44% | 18% | 8% | 8% | Pot is too big | g7 |
| 66 | spp | 42% | 19% | 8% | 8% | Pot is too big | g7 |
| 55 | spp | 39% | 18% | 8% | 8% | Pot is too big | g7 |
| 44 | spp | 37% | 19% | 8% | 8% | Pot is too big | g7 |
| 33 | spp | 35% | 18% | 8% | 8% | Pot is too big | g7 |
| 22 | spp | 33% | 18% | 8% | 8% | Pot is too big | g7 |
