# KQT-Jd turn (K♦ Q♣ T♥ J♦): equity groups

Generated 2026-11-13 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | AA–99, AK–A2, K9, Q9, J9, T9, 98–96 | 78% | 68% | 76% | 73% |
| g2 | 25–50bb | Two pair | KQ–KT, QJ, QT, JT | 45% | 26% | 40% | 34% |
| g3 | 5–15bb | Top pair, weak kicker | K8–K2 | 32% | 17% | 26% | 16% |
| g4 | 0–5bb | Second pair | Q8–Q5 | 28% | 19% | 22% | 16% |
| g5 | 0–5bb | Small pairs | 88–22, J8, J7, T8, T7 | 12% | 9% | 10% | 10% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | straight | 87% | 82% | 87% | 85% | 50–100bb | g1 |
| AT | straight | 84% | 77% | 83% | 81% | 50–100bb | g1 |
| A4 | straight | 84% | 77% | 82% | 81% | 50–100bb | g1 |
| A7 | straight | 83% | 77% | 83% | 81% | 50–100bb | g1 |
| A2 | straight | 84% | 77% | 83% | 81% | 50–100bb | g1 |
| A8 | straight | 83% | 78% | 83% | 81% | 50–100bb | g1 |
| A3 | straight | 84% | 77% | 82% | 81% | 50–100bb | g1 |
| A6 | straight | 84% | 77% | 82% | 81% | 50–100bb | g1 |
| AQ | straight | 84% | 76% | 82% | 81% | 50–100bb | g1 |
| A5 | straight | 83% | 77% | 83% | 81% | 50–100bb | g1 |
| AJ | straight | 83% | 77% | 81% | 80% | 50–100bb | g1 |
| A9 | straight | 84% | 76% | 82% | 80% | 50–100bb | g1 |
| AK | straight | 83% | 76% | 80% | 79% | 50–100bb | g1 |
| J9 | straight | 59% | 40% | 55% | 48% | 25–50bb | g1 |
| JJ | twopair | 59% | 42% | 55% | 50% | 25–50bb | g1 |
| KK | twopair | 57% | 42% | 54% | 46% | 25–50bb | g1 |
| Q9 | straight | 59% | 39% | 53% | 49% | 25–50bb | g1 |
| K9 | straight | 57% | 39% | 53% | 46% | 25–50bb | g1 |
| 97 | straight | 62% | 43% | 58% | 53% | 50–100bb | g1 |
| 96 | straight | 61% | 44% | 57% | 53% | 50–100bb | g1 |
| 98 | straight | 62% | 45% | 58% | 53% | 50–100bb | g1 |
| TT | twopair | 60% | 45% | 57% | 52% | 50–100bb | g1 |
| 99 | straight | 62% | 42% | 58% | 52% | 50–100bb | g1 |
| QQ | twopair | 59% | 40% | 54% | 51% | 50–100bb | g1 |
| T9 | straight | 60% | 43% | 59% | 51% | 50–100bb | g1 |
| KQ | twopair | 49% | 31% | 44% | 39% | Pot is too big | g2 |
| KJ | twopair | 48% | 30% | 45% | 36% | Pot is too big | g2 |
| KT | twopair | 48% | 28% | 42% | 34% | Pot is too big | g2 |
| QJ | twopair | 44% | 23% | 38% | 33% | Pot is too big | g2 |
| QT | twopair | 42% | 23% | 37% | 32% | Pot is too big | g2 |
| JT | twopair | 40% | 22% | 35% | 27% | Pot is too big | g2 |
| K8 | tpmk | 34% | 17% | 29% | 19% | Pot is too big | g3 |
| K7 | tpmk | 32% | 16% | 26% | 17% | Pot is too big | g3 |
| K6 | tpmk | 31% | 17% | 25% | 16% | Pot is too big | g3 |
| K4 | tpmk | 30% | 17% | 24% | 14% | Pot is too big | g3 |
| K5 | tpmk | 30% | 16% | 26% | 14% | Pot is too big | g3 |
| K3 | tpmk | 30% | 16% | 23% | 14% | Pot is too big | g3 |
| K2 | tpmk | 29% | 17% | 23% | 13% | Pot is too big | g3 |
| Q8 | mp | 30% | 20% | 24% | 17% | Pot is too big | g4 |
| Q7 | mp | 28% | 19% | 21% | 16% | Pot is too big | g4 |
| Q6 | mp | 28% | 18% | 21% | 17% | Pot is too big | g4 |
| Q5 | mp | 27% | 18% | 20% | 16% | Pot is too big | g4 |
| T8 | bp | 21% | 15% | 17% | 16% | Pot is too big | g5 |
| T7 | bp | 20% | 15% | 17% | 15% | Pot is too big | g5 |
| J8 | bp | 17% | 11% | 11% | 10% | Pot is too big | g5 |
| J7 | bp | 17% | 10% | 12% | 10% | Pot is too big | g5 |
| 88 | spp | 10% | 8% | 9% | 9% | Pot is too big | g5 |
| 22 | spp | 10% | 8% | 9% | 9% | Pot is too big | g5 |
| 77 | spp | 10% | 8% | 9% | 9% | Pot is too big | g5 |
| 55 | spp | 10% | 8% | 9% | 9% | Pot is too big | g5 |
| 66 | spp | 9% | 8% | 9% | 9% | Pot is too big | g5 |
| 33 | spp | 9% | 7% | 9% | 9% | Pot is too big | g5 |
| 44 | spp | 9% | 8% | 9% | 9% | Pot is too big | g5 |
