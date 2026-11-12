# K54-Qd turn (K♠ 5♥ 4♣ Q♦): equity groups

Generated 2026-11-12 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | KK, QQ, 55, 44 | 98% | 98% | 100% | 99% |
| g2 | 50–100bb | Two pair | KQ, K5, K4, Q5, 54 | 92% | 90% | 89% | 88% |
| g3 | 50–100bb | Overpair | AA | 87% | 84% | 78% | 77% |
| g4 | 25–50bb | Top pair, top kicker | AK, KJ | 88% | 83% | 76% | 73% |
| g5 | 25–50bb | Top pair, good kicker | KT–K8 | 83% | 68% | 54% | 47% |
| g6 | 15–25bb | Top pair, weak kicker | K7, K6, K3, K2 | 77% | 53% | 31% | 21% |
| g7 | 5–15bb | Second pair | AQ, QJ–Q6 | 70% | 37% | 13% | 11% |
| g8 | 0–5bb | Small pairs | JJ–66, 33, 22, A5, A4, 75, 65, 64, 43 | 52% | 26% | 7% | 7% |
| g9 | 0–5bb | Ace-high | A9–A6 | 14% | 7% | 6% | 6% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| KK | twopair | 98% | 97% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 98% | 98% | 100% | 100% | 50–100bb | g1 |
| 55 | twopair | 97% | 98% | 99% | 99% | 50–100bb | g1 |
| 44 | twopair | 97% | 98% | 99% | 99% | 50–100bb | g1 |
| KQ | twopair | 95% | 95% | 97% | 96% | 50–100bb | g2 |
| K5 | twopair | 92% | 87% | 83% | 81% | 50–100bb | g2 |
| K4 | twopair | 91% | 84% | 79% | 77% | 50–100bb | g2 |
| Q5 | twopair | 90% | 83% | 77% | 76% | 50–100bb | g2 |
| 54 | twopair | 84% | 78% | 71% | 70% | 50–100bb | g2 |
| AA | op | 87% | 84% | 78% | 77% | 50–100bb | g3 |
| AK | tpgk | 90% | 85% | 78% | 76% | 50–100bb | g4 |
| KJ | tpmk | 87% | 82% | 74% | 71% | 50–100bb | g4 |
| K8 | tpmk | 80% | 59% | 41% | 34% | 5–15bb | g5 |
| KT | tpmk | 85% | 75% | 62% | 57% | 50–100bb | g5 |
| K9 | tpmk | 82% | 67% | 53% | 46% | 25–50bb | g5 |
| K2 | tpmk | 75% | 47% | 24% | 14% | 0–5bb | g6 |
| K3 | tpmk | 75% | 50% | 26% | 15% | 0–5bb | g6 |
| K7 | tpmk | 78% | 55% | 36% | 27% | 5–15bb | g6 |
| K6 | tpmk | 78% | 53% | 32% | 21% | 5–15bb | g6 |
| QJ | mp | 72% | 38% | 15% | 10% | 0–5bb | g7 |
| AQ | mp | 70% | 37% | 18% | 11% | 0–5bb | g7 |
| Q6 | mp | 70% | 36% | 11% | 11% | 0–5bb | g7 |
| Q7 | mp | 70% | 36% | 11% | 11% | 0–5bb | g7 |
| Q8 | mp | 70% | 36% | 10% | 11% | 0–5bb | g7 |
| QT | mp | 69% | 37% | 12% | 11% | 0–5bb | g7 |
| Q9 | mp | 68% | 36% | 10% | 10% | 0–5bb | g7 |
| TT | pp2 | 66% | 29% | 5% | 4% | 0–5bb | g8 |
| JJ | pp2 | 66% | 29% | 4% | 4% | 0–5bb | g8 |
| 99 | pp2 | 65% | 30% | 4% | 5% | 0–5bb | g8 |
| 88 | pp2 | 64% | 30% | 4% | 4% | 0–5bb | g8 |
| 77 | pp2 | 58% | 28% | 4% | 5% | 0–5bb | g8 |
| 66 | pp2 | 55% | 28% | 5% | 4% | 0–5bb | g8 |
| A5 | bp | 54% | 29% | 11% | 11% | 0–5bb | g8 |
| 65 | bp | 51% | 28% | 10% | 10% | 0–5bb | g8 |
| 75 | bp | 51% | 29% | 10% | 10% | 0–5bb | g8 |
| A4 | bp | 43% | 23% | 11% | 12% | Pot is too big | g8 |
| 64 | bp | 42% | 22% | 9% | 9% | Pot is too big | g8 |
| 43 | bp | 39% | 21% | 10% | 10% | Pot is too big | g8 |
| 33 | pp3 | 33% | 16% | 4% | 4% | Pot is too big | g8 |
| 22 | pp3 | 29% | 16% | 5% | 4% | Pot is too big | g8 |
| A9 | khnd | 18% | 7% | 5% | 6% | Pot is too big | g9 |
| A8 | khnd | 15% | 7% | 6% | 6% | Pot is too big | g9 |
| A7 | khnd | 12% | 7% | 5% | 6% | Pot is too big | g9 |
| A6 | khnd | 11% | 7% | 6% | 6% | Pot is too big | g9 |
