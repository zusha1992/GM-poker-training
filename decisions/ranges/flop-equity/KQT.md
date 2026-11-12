# KQT flop (K♦ Q♣ T♥): equity groups

Generated 2026-11-12 by scripts/analysis/flop-equity-groups.ts (6000 samples per hand and level).
BTN opens, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB's whole range · L1 = BB after calling a flop bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | KK, QQ, TT, AJ, J9 | 90% | 90% | 84% | 80% |
| g2 | 25–50bb | Two pair | KQ, KT, QT | 79% | 76% | 63% | 53% |
| g3 | 25–50bb | Overpair | AA | 80% | 77% | 63% | 55% |
| g4 | 15–25bb | Top pair, good kicker | AK, KJ | 82% | 78% | 64% | 52% |
| g5 | 5–15bb | Top pair, weak kicker | K9–K2 | 70% | 62% | 44% | 24% |
| g6 | 5–15bb | Second pair | AQ, QJ, Q9–Q5 | 71% | 60% | 36% | 24% |
| g7 | 0–5bb | Small pairs | JJ, 99–22, AT, JT, T9–T7 | 54% | 33% | 18% | 17% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AJ | straight | 94% | 93% | 90% | 88% | 50–100bb | g1 |
| J9 | straight | 88% | 88% | 81% | 76% | 50–100bb | g1 |
| QQ | twopair | 86% | 86% | 75% | 74% | 50–100bb | g1 |
| TT | twopair | 86% | 85% | 77% | 72% | 50–100bb | g1 |
| KK | twopair | 86% | 87% | 77% | 66% | 50–100bb | g1 |
| KQ | twopair | 81% | 81% | 70% | 62% | 50–100bb | g2 |
| QT | twopair | 76% | 72% | 54% | 45% | 25–50bb | g2 |
| KT | twopair | 80% | 77% | 64% | 52% | 50–100bb | g2 |
| AA | op | 80% | 76% | 63% | 55% | 50–100bb | g3 |
| KJ | tpmk | 82% | 79% | 64% | 52% | 50–100bb | g4 |
| AK | tpgk | 82% | 77% | 63% | 51% | 50–100bb | g4 |
| K8 | tpmk | 69% | 62% | 43% | 26% | 15–25bb | g5 |
| K7 | tpmk | 69% | 61% | 41% | 23% | 15–25bb | g5 |
| K6 | tpmk | 68% | 61% | 41% | 21% | 15–25bb | g5 |
| K5 | tpmk | 68% | 60% | 41% | 21% | 15–25bb | g5 |
| K4 | tpmk | 68% | 60% | 39% | 19% | 15–25bb | g5 |
| K3 | tpmk | 68% | 60% | 40% | 17% | 5–15bb | g5 |
| K2 | tpmk | 69% | 58% | 38% | 17% | 5–15bb | g5 |
| K9 | tpmk | 74% | 69% | 54% | 37% | 25–50bb | g5 |
| QJ | mp | 77% | 68% | 47% | 34% | 15–25bb | g6 |
| AQ | mp | 74% | 65% | 43% | 28% | 15–25bb | g6 |
| Q8 | mp | 65% | 49% | 24% | 14% | 0–5bb | g6 |
| Q6 | mp | 63% | 47% | 20% | 16% | 0–5bb | g6 |
| Q7 | mp | 63% | 48% | 22% | 16% | 0–5bb | g6 |
| Q5 | mp | 62% | 48% | 20% | 15% | 0–5bb | g6 |
| Q9 | mp | 69% | 56% | 31% | 20% | 5–15bb | g6 |
| AT | bp | 68% | 49% | 28% | 27% | 0–5bb | g7 |
| T9 | bp | 61% | 39% | 21% | 21% | 0–5bb | g7 |
| JJ | pp2 | 73% | 59% | 30% | 31% | 5–15bb | g7 |
| 99 | pp3 | 56% | 28% | 19% | 17% | 0–5bb | g7 |
| T8 | bp | 56% | 32% | 15% | 14% | 0–5bb | g7 |
| T7 | bp | 56% | 31% | 16% | 14% | 0–5bb | g7 |
| JT | bp | 70% | 54% | 35% | 32% | 5–15bb | g7 |
| 88 | spp | 48% | 21% | 8% | 8% | Pot is too big | g7 |
| 77 | spp | 44% | 18% | 8% | 8% | Pot is too big | g7 |
| 66 | spp | 43% | 18% | 8% | 8% | Pot is too big | g7 |
| 55 | spp | 38% | 18% | 9% | 8% | Pot is too big | g7 |
| 44 | spp | 38% | 18% | 9% | 8% | Pot is too big | g7 |
| 33 | spp | 35% | 18% | 8% | 8% | Pot is too big | g7 |
| 22 | spp | 33% | 18% | 8% | 8% | Pot is too big | g7 |
