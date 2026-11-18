# K54-Qd-4d@xx river (K♠ 5♥ 4♣ Q♦ 4♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Full houses | KK, QQ, 55, 44, K4, 54 | 100% | 100% | 100% | 87% |
| g2 | 25–50bb | Trips | A4, 64, 43 | 98% | 100% | 100% | 37% |
| g3 | 25–50bb | Overpair | AA | 93% | 100% | 100% | 7% |
| g4 | 25–50bb | Top pair | AK, KQ–K5, K3, K2 | 89% | 95% | 64% | 0% |
| g5 | 15–25bb | Second pair | AQ, QJ–Q5 | 77% | 71% | 0% | 0% |
| g6 | 0–5bb | Small pairs | JJ–66, 33, 22 | 62% | 41% | 0% | 0% |
| g7 | 0–5bb | Third pair | A5, 75, 65 | 59% | 34% | 0% | 0% |
| g8 | 0–5bb | Ace-high | AJ–A6, A3, A2 | 37% | 11% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 44 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KK | boat | 100% | 100% | 100% | 90% | 50–100bb | g1 |
| QQ | boat | 100% | 100% | 100% | 90% | 50–100bb | g1 |
| 55 | boat | 100% | 100% | 100% | 88% | 50–100bb | g1 |
| 54 | boat | 99% | 100% | 100% | 69% | 50–100bb | g1 |
| K4 | boat | 99% | 100% | 100% | 66% | 50–100bb | g1 |
| A4 | trips | 98% | 100% | 100% | 42% | 25–50bb | g2 |
| 64 | trips | 98% | 100% | 100% | 22% | 25–50bb | g2 |
| 43 | trips | 97% | 100% | 100% | 18% | 25–50bb | g2 |
| AA | op | 93% | 100% | 100% | 7% | 25–50bb | g3 |
| KQ | twopair | 93% | 100% | 100% | 2% | 25–50bb | g4 |
| K5 | twopair | 93% | 100% | 98% | 1% | 25–50bb | g4 |
| AK | tpgk | 92% | 99% | 96% | 0% | 25–50bb | g4 |
| K8 | tpmk | 86% | 92% | 39% | 0% | 15–25bb | g4 |
| K7 | tpmk | 86% | 90% | 29% | 0% | 15–25bb | g4 |
| K6 | tpmk | 86% | 90% | 23% | 0% | 15–25bb | g4 |
| KJ | tpmk | 91% | 99% | 88% | 0% | 25–50bb | g4 |
| K3 | tpmk | 85% | 88% | 15% | 0% | 15–25bb | g4 |
| K2 | tpmk | 83% | 87% | 6% | 0% | 15–25bb | g4 |
| KT | tpmk | 89% | 96% | 71% | 0% | 25–50bb | g4 |
| K9 | tpmk | 88% | 94% | 54% | 0% | 25–50bb | g4 |
| Q5 | twopair | 80% | 77% | 0% | 0% | 15–25bb | g5 |
| AQ | mp | 78% | 77% | 0% | 0% | 15–25bb | g5 |
| QJ | mp | 78% | 76% | 0% | 0% | 15–25bb | g5 |
| QT | mp | 77% | 71% | 0% | 0% | 15–25bb | g5 |
| Q9 | mp | 76% | 64% | 0% | 0% | 15–25bb | g5 |
| Q8 | mp | 73% | 60% | 0% | 0% | 5–15bb | g5 |
| Q7 | mp | 73% | 58% | 0% | 0% | 5–15bb | g5 |
| Q6 | mp | 71% | 56% | 0% | 0% | 5–15bb | g5 |
| TT | pp2 | 67% | 46% | 0% | 0% | 0–5bb | g6 |
| 99 | pp2 | 66% | 47% | 0% | 0% | 0–5bb | g6 |
| JJ | pp2 | 66% | 46% | 0% | 0% | 0–5bb | g6 |
| 88 | pp2 | 66% | 45% | 0% | 0% | 0–5bb | g6 |
| 77 | pp2 | 64% | 45% | 0% | 0% | 0–5bb | g6 |
| 66 | pp2 | 63% | 43% | 0% | 0% | 0–5bb | g6 |
| 33 | pp3 | 52% | 30% | 0% | 0% | 0–5bb | g6 |
| 22 | pp3 | 52% | 27% | 0% | 0% | 0–5bb | g6 |
| A5 | bp | 59% | 34% | 0% | 0% | 0–5bb | g7 |
| 75 | bp | 58% | 34% | 0% | 0% | 0–5bb | g7 |
| 65 | bp | 57% | 34% | 0% | 0% | 0–5bb | g7 |
| AJ | khnd | 46% | 21% | 0% | 0% | 0–5bb | g8 |
| AT | khnd | 44% | 19% | 0% | 0% | 0–5bb | g8 |
| A9 | khnd | 41% | 17% | 0% | 0% | 0–5bb | g8 |
| A8 | khnd | 38% | 13% | 0% | 0% | 0–5bb | g8 |
| A7 | khnd | 34% | 8% | 0% | 0% | 0–5bb | g8 |
| A6 | khnd | 32% | 5% | 0% | 0% | 0–5bb | g8 |
| A3 | khnd | 31% | 2% | 0% | 0% | 0–5bb | g8 |
| A2 | khnd | 30% | 2% | 0% | 0% | 0–5bb | g8 |
