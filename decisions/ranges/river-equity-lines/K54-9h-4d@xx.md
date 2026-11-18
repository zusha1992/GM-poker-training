# K54-9h-4d@xx river (K♠ 5♥ 4♣ 9♥ 4♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Full houses | KK, 99, 55, 44, K4, 54 | 100% | 100% | 100% | 88% |
| g2 | 50–100bb | Trips | A4 | 98% | 100% | 100% | 62% |
| g3 | 25–50bb | Trips | 64, 43 | 97% | 100% | 100% | 34% |
| g4 | 25–50bb | Overpair | AA | 93% | 100% | 100% | 15% |
| g5 | 25–50bb | Top pair, good kicker | AK, KQ–K9, K5 | 90% | 97% | 72% | 1% |
| g6 | 15–25bb | Top pair, weak kicker | K8–K6, K3, K2 | 86% | 92% | 25% | 0% |
| g7 | 15–25bb | Big pocket pairs | QQ–TT | 79% | 86% | 5% | 0% |
| g8 | 15–25bb | Second pair | A9, Q9, J9, T9, 98–96 | 75% | 68% | 0% | 0% |
| g9 | 0–5bb | Small pairs | 88–66, 33, 22 | 59% | 35% | 0% | 0% |
| g10 | 0–5bb | Third pair | A5, Q5, 75, 65 | 57% | 33% | 0% | 0% |
| g11 | 0–5bb | Ace-high | AQ–AT, A8–A6, A3, A2 | 39% | 9% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 44 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 99 | boat | 100% | 100% | 100% | 92% | 50–100bb | g1 |
| KK | boat | 100% | 100% | 100% | 92% | 50–100bb | g1 |
| 55 | boat | 99% | 100% | 100% | 85% | 50–100bb | g1 |
| 54 | boat | 99% | 100% | 100% | 81% | 50–100bb | g1 |
| K4 | boat | 99% | 100% | 100% | 69% | 50–100bb | g1 |
| A4 | trips | 98% | 100% | 100% | 62% | 50–100bb | g2 |
| 64 | trips | 97% | 100% | 100% | 36% | 25–50bb | g3 |
| 43 | trips | 97% | 100% | 100% | 31% | 25–50bb | g3 |
| AA | op | 93% | 100% | 100% | 15% | 25–50bb | g4 |
| K9 | twopair | 93% | 100% | 99% | 5% | 25–50bb | g5 |
| K5 | twopair | 92% | 99% | 96% | 1% | 25–50bb | g5 |
| KT | tpmk | 88% | 93% | 39% | 0% | 15–25bb | g5 |
| AK | tpgk | 91% | 99% | 92% | 0% | 25–50bb | g5 |
| KQ | tpgk | 91% | 98% | 83% | 0% | 25–50bb | g5 |
| KJ | tpmk | 90% | 96% | 56% | 0% | 25–50bb | g5 |
| K8 | tpmk | 87% | 93% | 31% | 0% | 15–25bb | g6 |
| K7 | tpmk | 86% | 92% | 27% | 0% | 15–25bb | g6 |
| K6 | tpmk | 86% | 92% | 25% | 0% | 15–25bb | g6 |
| K3 | tpmk | 85% | 91% | 18% | 0% | 15–25bb | g6 |
| K2 | tpmk | 85% | 91% | 9% | 0% | 15–25bb | g6 |
| JJ | pp1 | 79% | 87% | 5% | 0% | 15–25bb | g7 |
| QQ | pp1 | 80% | 86% | 5% | 0% | 15–25bb | g7 |
| TT | pp1 | 79% | 85% | 4% | 0% | 15–25bb | g7 |
| A9 | mp | 77% | 79% | 0% | 0% | 15–25bb | g8 |
| Q9 | mp | 77% | 74% | 0% | 0% | 15–25bb | g8 |
| J9 | mp | 75% | 64% | 0% | 0% | 15–25bb | g8 |
| T9 | mp | 73% | 61% | 0% | 0% | 15–25bb | g8 |
| 98 | mp | 71% | 56% | 0% | 0% | 5–15bb | g8 |
| 97 | mp | 70% | 54% | 0% | 0% | 5–15bb | g8 |
| 96 | mp | 70% | 51% | 0% | 0% | 5–15bb | g8 |
| 88 | pp2 | 66% | 44% | 0% | 0% | 0–5bb | g9 |
| 77 | pp2 | 64% | 43% | 0% | 0% | 0–5bb | g9 |
| 66 | pp2 | 62% | 42% | 0% | 0% | 0–5bb | g9 |
| 33 | pp3 | 52% | 23% | 0% | 0% | 0–5bb | g9 |
| 22 | pp3 | 49% | 21% | 0% | 0% | 0–5bb | g9 |
| Q5 | bp | 59% | 36% | 0% | 0% | 0–5bb | g10 |
| A5 | bp | 57% | 34% | 0% | 0% | 0–5bb | g10 |
| 75 | bp | 57% | 30% | 0% | 0% | 0–5bb | g10 |
| 65 | bp | 56% | 31% | 0% | 0% | 0–5bb | g10 |
| AJ | khnd | 46% | 16% | 0% | 0% | 0–5bb | g11 |
| AQ | khnd | 45% | 18% | 0% | 0% | 0–5bb | g11 |
| AT | khnd | 43% | 14% | 0% | 0% | 0–5bb | g11 |
| A8 | khnd | 40% | 10% | 0% | 0% | 0–5bb | g11 |
| A7 | khnd | 36% | 7% | 0% | 0% | 0–5bb | g11 |
| A6 | khnd | 34% | 4% | 0% | 0% | 0–5bb | g11 |
| A2 | khnd | 34% | 1% | 0% | 0% | 0–5bb | g11 |
| A3 | khnd | 33% | 1% | 0% | 0% | 0–5bb | g11 |
