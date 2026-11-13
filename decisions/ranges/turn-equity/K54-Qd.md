# K54-Qd turn (K♠ 5♥ 4♣ Q♦): equity groups

Generated 2026-11-13 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | KK, QQ, 55, 44 | 98% | 98% | 100% | 99% |
| g2 | 50–100bb | Two pair | KQ, K5, K4, Q5, 54 | 93% | 90% | 89% | 88% |
| g3 | 25–50bb | Overpair | AA | 88% | 83% | 77% | 78% |
| g4 | 25–50bb | Top pair, top kicker | AK, KJ | 88% | 84% | 76% | 73% |
| g5 | 5–15bb | Top pair, weak kicker | KT–K6, K3, K2 | 80% | 62% | 44% | 36% |
| g6 | 5–15bb | Second pair | AQ, QJ–Q6 | 70% | 36% | 13% | 11% |
| g7 | 0–5bb | Small pairs | JJ–66, 33, 22, A5, A4, 75, 65, 64, 43 | 52% | 26% | 7% | 7% |
| g8 | 0–5bb | Ace-high | A9–A6 | 14% | 7% | 6% | 6% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| KK | twopair | 98% | 97% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 98% | 98% | 100% | 100% | 50–100bb | g1 |
| 55 | twopair | 97% | 98% | 99% | 99% | 50–100bb | g1 |
| 44 | twopair | 97% | 98% | 99% | 99% | 50–100bb | g1 |
| KQ | twopair | 95% | 95% | 97% | 96% | 50–100bb | g2 |
| K5 | twopair | 92% | 87% | 84% | 82% | 50–100bb | g2 |
| Q5 | twopair | 90% | 83% | 78% | 77% | 50–100bb | g2 |
| K4 | twopair | 91% | 83% | 79% | 75% | 50–100bb | g2 |
| 54 | twopair | 85% | 79% | 72% | 71% | 50–100bb | g2 |
| AA | op | 88% | 83% | 77% | 78% | 50–100bb | g3 |
| AK | tpgk | 90% | 86% | 78% | 76% | 50–100bb | g4 |
| KJ | tpmk | 87% | 81% | 73% | 70% | 50–100bb | g4 |
| K3 | tpmk | 76% | 49% | 27% | 15% | 0–5bb | g5 |
| K2 | tpmk | 75% | 47% | 24% | 14% | 0–5bb | g5 |
| K8 | tpmk | 80% | 60% | 42% | 35% | 15–25bb | g5 |
| KT | tpmk | 84% | 73% | 62% | 57% | 50–100bb | g5 |
| K7 | tpmk | 78% | 56% | 36% | 25% | 5–15bb | g5 |
| K6 | tpmk | 77% | 54% | 31% | 23% | 5–15bb | g5 |
| K9 | tpmk | 82% | 67% | 52% | 45% | 25–50bb | g5 |
| AQ | mp | 72% | 37% | 17% | 12% | 0–5bb | g6 |
| QJ | mp | 70% | 36% | 15% | 10% | 0–5bb | g6 |
| QT | mp | 70% | 36% | 12% | 10% | 0–5bb | g6 |
| Q8 | mp | 69% | 36% | 10% | 11% | 0–5bb | g6 |
| Q9 | mp | 69% | 35% | 10% | 10% | 0–5bb | g6 |
| Q7 | mp | 69% | 35% | 11% | 11% | 0–5bb | g6 |
| Q6 | mp | 69% | 36% | 11% | 11% | 0–5bb | g6 |
| JJ | pp2 | 67% | 30% | 5% | 5% | 0–5bb | g7 |
| TT | pp2 | 67% | 29% | 4% | 4% | 0–5bb | g7 |
| 99 | pp2 | 65% | 30% | 4% | 4% | 0–5bb | g7 |
| 88 | pp2 | 62% | 31% | 4% | 4% | 0–5bb | g7 |
| 77 | pp2 | 60% | 29% | 5% | 4% | 0–5bb | g7 |
| 66 | pp2 | 56% | 28% | 4% | 5% | 0–5bb | g7 |
| A5 | bp | 54% | 29% | 11% | 11% | 0–5bb | g7 |
| 75 | bp | 50% | 28% | 9% | 10% | Pot is too big | g7 |
| 65 | bp | 50% | 27% | 10% | 10% | Pot is too big | g7 |
| A4 | bp | 44% | 23% | 10% | 11% | Pot is too big | g7 |
| 64 | bp | 42% | 22% | 10% | 10% | Pot is too big | g7 |
| 43 | bp | 38% | 22% | 10% | 10% | Pot is too big | g7 |
| 33 | pp3 | 32% | 16% | 4% | 4% | Pot is too big | g7 |
| 22 | pp3 | 28% | 16% | 5% | 4% | Pot is too big | g7 |
| A9 | khnd | 18% | 8% | 5% | 6% | Pot is too big | g8 |
| A8 | khnd | 15% | 7% | 6% | 5% | Pot is too big | g8 |
| A7 | khnd | 12% | 7% | 6% | 6% | Pot is too big | g8 |
| A6 | khnd | 12% | 7% | 6% | 6% | Pot is too big | g8 |
