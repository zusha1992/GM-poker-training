# K54-9h-4d@xx river (K♠ 5♥ 4♣ 9♥ 4♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Full houses | KK, 99, 55, 44, K4, 54 | 100% | 100% | 100% | 89% |
| g2 | 50–100bb | Trips | A4 | 98% | 100% | 100% | 63% |
| g3 | 25–50bb | Trips | 64, 43 | 97% | 100% | 100% | 34% |
| g4 | 25–50bb | Overpair | AA | 93% | 100% | 100% | 16% |
| g5 | 25–50bb | Top pair, good kicker | AK, KQ–K9, K5 | 90% | 97% | 72% | 1% |
| g6 | 15–25bb | Top pair, weak kicker | K8–K6, K3, K2 | 86% | 92% | 24% | 0% |
| g7 | 15–25bb | Big pocket pairs | QQ–TT | 79% | 86% | 5% | 0% |
| g8 | 15–25bb | Second pair, good kicker | A9 | 78% | 79% | 0% | 0% |
| g9 | 5–15bb | Second pair, weak kicker | Q9, J9, T9, 98–96 | 74% | 63% | 0% | 0% |
| g10 | 0–5bb | Third pair | A5, Q5, 75, 65 | 58% | 34% | 0% | 0% |
| g11 | 0–5bb | Small pairs | 88–66, 33, 22 | 58% | 35% | 0% | 0% |
| g12 | Pot is too big | Ace-high | AQ–AT, A8–A6, A3, A2 | 39% | 9% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 44 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 99 | boat | 100% | 100% | 100% | 92% | 50–100bb | g1 |
| KK | boat | 100% | 100% | 100% | 92% | 50–100bb | g1 |
| 55 | boat | 99% | 100% | 100% | 85% | 50–100bb | g1 |
| 54 | boat | 99% | 100% | 100% | 82% | 50–100bb | g1 |
| K4 | boat | 99% | 100% | 100% | 69% | 50–100bb | g1 |
| A4 | trips | 98% | 100% | 100% | 63% | 50–100bb | g2 |
| 64 | trips | 97% | 100% | 100% | 37% | 25–50bb | g3 |
| 43 | trips | 97% | 100% | 100% | 32% | 25–50bb | g3 |
| AA | op | 92% | 100% | 100% | 16% | 25–50bb | g4 |
| K9 | twopair | 92% | 100% | 99% | 5% | 25–50bb | g5 |
| K5 | twopair | 93% | 100% | 95% | 1% | 25–50bb | g5 |
| KT | tpmk | 87% | 94% | 40% | 0% | 15–25bb | g5 |
| AK | tpgk | 91% | 99% | 93% | 0% | 25–50bb | g5 |
| KQ | tpgk | 92% | 98% | 83% | 0% | 25–50bb | g5 |
| KJ | tpmk | 89% | 95% | 56% | 0% | 25–50bb | g5 |
| K8 | tpmk | 86% | 93% | 30% | 0% | 15–25bb | g6 |
| K7 | tpmk | 86% | 92% | 27% | 0% | 15–25bb | g6 |
| K6 | tpmk | 85% | 92% | 23% | 0% | 15–25bb | g6 |
| K3 | tpmk | 85% | 91% | 18% | 0% | 15–25bb | g6 |
| K2 | tpmk | 85% | 91% | 10% | 0% | 15–25bb | g6 |
| TT | pp1 | 79% | 87% | 4% | 0% | 15–25bb | g7 |
| JJ | pp1 | 80% | 87% | 5% | 0% | 15–25bb | g7 |
| QQ | pp1 | 78% | 86% | 5% | 0% | 15–25bb | g7 |
| A9 | mp | 78% | 79% | 0% | 0% | 15–25bb | g8 |
| Q9 | mp | 76% | 74% | 0% | 0% | 15–25bb | g9 |
| J9 | mp | 75% | 66% | 0% | 0% | 15–25bb | g9 |
| T9 | mp | 73% | 60% | 0% | 0% | 5–15bb | g9 |
| 98 | mp | 71% | 55% | 0% | 0% | 5–15bb | g9 |
| 97 | mp | 71% | 54% | 0% | 0% | 5–15bb | g9 |
| 96 | mp | 70% | 51% | 0% | 0% | 5–15bb | g9 |
| A5 | bp | 59% | 34% | 0% | 0% | 0–5bb | g10 |
| Q5 | bp | 58% | 35% | 0% | 0% | 0–5bb | g10 |
| 75 | bp | 56% | 32% | 0% | 0% | 0–5bb | g10 |
| 65 | bp | 55% | 31% | 0% | 0% | 0–5bb | g10 |
| 88 | pp2 | 65% | 44% | 0% | 0% | 0–5bb | g11 |
| 77 | pp2 | 63% | 43% | 0% | 0% | 0–5bb | g11 |
| 66 | pp2 | 61% | 42% | 0% | 0% | 0–5bb | g11 |
| 33 | pp3 | 50% | 24% | 0% | 0% | 0–5bb | g11 |
| 22 | pp3 | 49% | 21% | 0% | 0% | 0–5bb | g11 |
| AQ | khnd | 46% | 18% | 0% | 0% | Pot is too big | g12 |
| AJ | khnd | 45% | 16% | 0% | 0% | Pot is too big | g12 |
| AT | khnd | 42% | 14% | 0% | 0% | Pot is too big | g12 |
| A8 | khnd | 40% | 11% | 0% | 0% | Pot is too big | g12 |
| A7 | khnd | 36% | 7% | 0% | 0% | Pot is too big | g12 |
| A6 | khnd | 34% | 4% | 0% | 0% | Pot is too big | g12 |
| A3 | khnd | 33% | 1% | 0% | 0% | Pot is too big | g12 |
| A2 | khnd | 32% | 1% | 0% | 0% | Pot is too big | g12 |
