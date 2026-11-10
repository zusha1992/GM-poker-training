# KQT flop (K♦ Q♣ T♥): equity groups

Generated 2026-11-10 by scripts/analysis/flop-equity-groups.ts (6000 samples per hand and level).
BTN opens, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB's whole range · L1 = BB after calling a flop bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|
| g1 | 50–100bb | QQ, TT, AJ, J9 | 91% | 90% | 85% | 81% |
| g2 | 50–100bb | KK, KQ | 83% | 82% | 72% | 64% |
| g3 | 50–100bb | AA, KJ, KT, QT | 80% | 76% | 61% | 52% |
| g4 | 25–50bb | AK, K9 | 78% | 73% | 59% | 45% |
| g5 | 15–25bb | AQ, K8, K7, QJ | 73% | 65% | 44% | 28% |
| g6 | 5–15bb | K6–K2, Q9 | 68% | 58% | 37% | 20% |
| g7 | 0–5bb | Q8–Q5 | 63% | 48% | 22% | 15% |
| g8 | 0–5bb | JJ, AT, JT, T9 | 69% | 50% | 29% | 28% |
| g9 | 0–5bb | 99, T8, T7 | 55% | 30% | 18% | 16% |
| g10 | Pot is too big | 88–22 | 40% | 19% | 8% | 8% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AJ | straight | 93% | 93% | 91% | 88% | 50–100bb | g1 |
| J9 | straight | 88% | 88% | 81% | 76% | 50–100bb | g1 |
| QQ | twopair | 88% | 86% | 76% | 72% | 50–100bb | g1 |
| TT | twopair | 86% | 86% | 77% | 72% | 50–100bb | g1 |
| KK | twopair | 87% | 86% | 77% | 66% | 50–100bb | g2 |
| KQ | twopair | 81% | 80% | 70% | 63% | 50–100bb | g2 |
| AA | op | 81% | 75% | 64% | 55% | 50–100bb | g3 |
| QT | twopair | 77% | 72% | 54% | 46% | 25–50bb | g3 |
| KJ | tpmk | 82% | 79% | 64% | 54% | 50–100bb | g3 |
| KT | twopair | 79% | 76% | 63% | 51% | 50–100bb | g3 |
| AK | tpgk | 81% | 76% | 62% | 50% | 25–50bb | g4 |
| K9 | tpmk | 75% | 69% | 53% | 37% | 25–50bb | g4 |
| QJ | mp | 77% | 69% | 47% | 33% | 15–25bb | g5 |
| AQ | mp | 75% | 65% | 43% | 29% | 15–25bb | g5 |
| K8 | tpmk | 68% | 63% | 45% | 25% | 15–25bb | g5 |
| K7 | tpmk | 69% | 61% | 42% | 23% | 15–25bb | g5 |
| K3 | tpmk | 68% | 60% | 38% | 18% | 5–15bb | g6 |
| K5 | tpmk | 69% | 60% | 40% | 21% | 5–15bb | g6 |
| K4 | tpmk | 68% | 60% | 40% | 19% | 5–15bb | g6 |
| K6 | tpmk | 67% | 59% | 41% | 20% | 5–15bb | g6 |
| K2 | tpmk | 68% | 57% | 38% | 16% | 5–15bb | g6 |
| Q9 | mp | 67% | 55% | 32% | 21% | 5–15bb | g6 |
| Q8 | mp | 64% | 50% | 24% | 14% | 0–5bb | g7 |
| Q7 | mp | 63% | 48% | 22% | 15% | 0–5bb | g7 |
| Q6 | mp | 63% | 48% | 21% | 15% | 0–5bb | g7 |
| Q5 | mp | 62% | 47% | 20% | 15% | 0–5bb | g7 |
| AT | bp | 69% | 48% | 28% | 26% | 0–5bb | g8 |
| T9 | bp | 62% | 40% | 22% | 19% | 0–5bb | g8 |
| JJ | pp2 | 74% | 58% | 32% | 31% | 5–15bb | g8 |
| JT | bp | 71% | 54% | 34% | 32% | 5–15bb | g8 |
| 99 | pp3 | 55% | 29% | 18% | 17% | 0–5bb | g9 |
| T8 | bp | 55% | 33% | 17% | 14% | 0–5bb | g9 |
| T7 | bp | 55% | 31% | 16% | 15% | 0–5bb | g9 |
| 88 | spp | 48% | 20% | 9% | 8% | Pot is too big | g10 |
| 77 | spp | 44% | 19% | 8% | 8% | Pot is too big | g10 |
| 66 | spp | 41% | 19% | 8% | 8% | Pot is too big | g10 |
| 55 | spp | 39% | 19% | 8% | 9% | Pot is too big | g10 |
| 44 | spp | 36% | 19% | 9% | 8% | Pot is too big | g10 |
| 33 | spp | 36% | 19% | 9% | 9% | Pot is too big | g10 |
| 22 | spp | 33% | 17% | 8% | 8% | Pot is too big | g10 |
