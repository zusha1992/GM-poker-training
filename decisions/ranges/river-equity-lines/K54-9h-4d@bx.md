# K54-9h-4d@bx river (K♠ 5♥ 4♣ 9♥ 4♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Full houses | KK, 99, 55, 44, K4, 54 | 100% | 100% | 100% | 97% |
| g2 | 50–100bb | Trips | A4, 64, 43 | 98% | 100% | 100% | 82% |
| g3 | 50–100bb | Overpair | AA | 91% | 100% | 100% | 52% |
| g4 | 25–50bb | Top pair, good kicker | AK, KQ–K9, K5 | 85% | 95% | 77% | 24% |
| g5 | 15–25bb | Top pair, weak kicker | K8–K6, K3, K2 | 76% | 86% | 38% | 23% |
| g6 | 15–25bb | Big pocket pairs | QQ–TT | 67% | 75% | 7% | 21% |
| g7 | 15–25bb | Second pair | A9, Q9, J9, T9, 98–96 | 64% | 67% | 0% | 22% |
| g8 | 15–25bb | Small pairs | 88–66 | 57% | 61% | 0% | 19% |
| g9 | 0–5bb | Third pair | A5, Q5, 75, 65 | 45% | 47% | 0% | 9% |
| g10 | 0–5bb | Small pairs | 33, 22 | 32% | 22% | 0% | 0% |
| g11 | 0–5bb | Ace-high | AQ–AT, A8–A6, A3, A2 | 14% | 5% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| KK | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 99 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 44 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 55 | boat | 99% | 100% | 100% | 93% | 50–100bb | g1 |
| 54 | boat | 99% | 100% | 100% | 91% | 50–100bb | g1 |
| K4 | boat | 99% | 100% | 100% | 91% | 50–100bb | g1 |
| A4 | trips | 99% | 100% | 100% | 86% | 50–100bb | g2 |
| 64 | trips | 96% | 100% | 100% | 71% | 50–100bb | g2 |
| 43 | trips | 95% | 100% | 100% | 68% | 50–100bb | g2 |
| AA | op | 91% | 100% | 100% | 52% | 50–100bb | g3 |
| K9 | twopair | 90% | 99% | 96% | 33% | 25–50bb | g4 |
| AK | tpgk | 87% | 98% | 90% | 25% | 25–50bb | g4 |
| K5 | twopair | 87% | 98% | 89% | 18% | 25–50bb | g4 |
| KQ | tpgk | 86% | 96% | 83% | 23% | 25–50bb | g4 |
| KJ | tpmk | 85% | 93% | 67% | 22% | 25–50bb | g4 |
| KT | tpmk | 82% | 91% | 57% | 22% | 25–50bb | g4 |
| K8 | tpmk | 78% | 89% | 49% | 22% | 15–25bb | g5 |
| K7 | tpmk | 77% | 87% | 41% | 23% | 15–25bb | g5 |
| K6 | tpmk | 76% | 86% | 37% | 23% | 15–25bb | g5 |
| K3 | tpmk | 73% | 84% | 28% | 23% | 15–25bb | g5 |
| K2 | tpmk | 72% | 81% | 16% | 23% | 15–25bb | g5 |
| QQ | pp1 | 68% | 76% | 7% | 22% | 15–25bb | g6 |
| JJ | pp1 | 67% | 75% | 7% | 20% | 15–25bb | g6 |
| TT | pp1 | 66% | 73% | 7% | 20% | 15–25bb | g6 |
| Q9 | mp | 63% | 68% | 0% | 21% | 15–25bb | g7 |
| A9 | mp | 63% | 68% | 0% | 22% | 15–25bb | g7 |
| J9 | mp | 64% | 68% | 0% | 22% | 15–25bb | g7 |
| 98 | mp | 62% | 67% | 0% | 22% | 15–25bb | g7 |
| T9 | mp | 64% | 67% | 0% | 20% | 15–25bb | g7 |
| 97 | mp | 63% | 67% | 0% | 21% | 15–25bb | g7 |
| 96 | mp | 63% | 66% | 0% | 22% | 15–25bb | g7 |
| 77 | pp2 | 57% | 63% | 0% | 19% | 15–25bb | g8 |
| 88 | pp2 | 60% | 62% | 0% | 18% | 15–25bb | g8 |
| 66 | pp2 | 53% | 59% | 0% | 19% | 5–15bb | g8 |
| Q5 | bp | 46% | 47% | 0% | 8% | 0–5bb | g9 |
| A5 | bp | 46% | 49% | 0% | 11% | 0–5bb | g9 |
| 75 | bp | 43% | 42% | 0% | 4% | 0–5bb | g9 |
| 65 | bp | 41% | 41% | 0% | 3% | 0–5bb | g9 |
| 33 | pp3 | 33% | 28% | 0% | 0% | 0–5bb | g10 |
| 22 | pp3 | 31% | 17% | 0% | 0% | 0–5bb | g10 |
| AQ | khnd | 24% | 12% | 0% | 0% | 0–5bb | g11 |
| AJ | khnd | 22% | 11% | 0% | 0% | 0–5bb | g11 |
| AT | khnd | 17% | 6% | 0% | 0% | 0–5bb | g11 |
| A8 | khnd | 12% | 4% | 0% | 0% | 0–5bb | g11 |
| A6 | khnd | 10% | 2% | 0% | 0% | 0–5bb | g11 |
| A7 | khnd | 9% | 3% | 0% | 0% | 0–5bb | g11 |
| A3 | khnd | 8% | 1% | 0% | 0% | 0–5bb | g11 |
| A2 | khnd | 8% | 1% | 0% | 0% | 0–5bb | g11 |
