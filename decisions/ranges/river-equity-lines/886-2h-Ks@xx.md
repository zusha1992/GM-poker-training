# 886-2h-Ks@xx river (8♠ 8♦ 6♣ 2♥ K♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Full houses | KK, 88, 66, 22, K8, 86 | 99% | 100% | 100% | 84% |
| g2 | 25–50bb | Trips | A8, Q8, J8, T8, 98, 87 | 97% | 100% | 100% | 19% |
| g3 | 25–50bb | Overpair | AA | 92% | 100% | 100% | 0% |
| g4 | 25–50bb | Top pair, good kicker | AK, KQ–K9, K7, K6, K2 | 88% | 94% | 62% | 0% |
| g5 | 15–25bb | Top pair, weak kicker | K5–K3 | 83% | 86% | 21% | 0% |
| g6 | 15–25bb | Pocket pairs under the K | QQ–99 | 77% | 78% | 0% | 0% |
| g7 | 15–25bb | Small pairs | 77, A6, Q6, 96, 76, 65 | 75% | 70% | 0% | 0% |
| g8 | 5–15bb | Small pairs | 55, 64 | 68% | 54% | 0% | 0% |
| g9 | 0–5bb | Small pairs | 44, 33, A2 | 64% | 39% | 0% | 0% |
| g10 | 0–5bb | Ace-high | AQ–A9, A7, A5–A3 | 50% | 16% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 88 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K8 | boat | 100% | 100% | 100% | 96% | 50–100bb | g1 |
| KK | boat | 100% | 100% | 100% | 93% | 50–100bb | g1 |
| 86 | boat | 100% | 100% | 100% | 87% | 50–100bb | g1 |
| 66 | boat | 99% | 100% | 100% | 76% | 50–100bb | g1 |
| 22 | boat | 98% | 100% | 100% | 59% | 50–100bb | g1 |
| A8 | trips | 98% | 100% | 100% | 30% | 25–50bb | g2 |
| Q8 | trips | 97% | 100% | 100% | 15% | 25–50bb | g2 |
| J8 | trips | 97% | 100% | 100% | 14% | 25–50bb | g2 |
| T8 | trips | 96% | 100% | 100% | 11% | 25–50bb | g2 |
| 98 | trips | 96% | 100% | 100% | 8% | 25–50bb | g2 |
| 87 | trips | 96% | 100% | 100% | 5% | 25–50bb | g2 |
| AA | op | 92% | 100% | 100% | 0% | 25–50bb | g3 |
| AK | tpgk | 92% | 100% | 100% | 0% | 25–50bb | g4 |
| KQ | tpgk | 91% | 99% | 92% | 0% | 25–50bb | g4 |
| K9 | tpmk | 86% | 90% | 40% | 0% | 15–25bb | g4 |
| K7 | tpmk | 85% | 88% | 32% | 0% | 15–25bb | g4 |
| K2 | twopair | 82% | 84% | 4% | 0% | 15–25bb | g4 |
| K6 | twopair | 83% | 83% | 4% | 0% | 15–25bb | g4 |
| KJ | tpmk | 89% | 95% | 69% | 0% | 25–50bb | g4 |
| KT | tpmk | 87% | 93% | 53% | 0% | 25–50bb | g4 |
| K5 | tpmk | 84% | 88% | 28% | 0% | 15–25bb | g5 |
| K4 | tpmk | 83% | 85% | 21% | 0% | 15–25bb | g5 |
| K3 | tpmk | 83% | 85% | 14% | 0% | 15–25bb | g5 |
| QQ | pp1 | 76% | 79% | 0% | 0% | 15–25bb | g6 |
| JJ | pp1 | 77% | 79% | 0% | 0% | 15–25bb | g6 |
| 99 | pp1 | 77% | 77% | 0% | 0% | 15–25bb | g6 |
| TT | pp1 | 77% | 77% | 0% | 0% | 15–25bb | g6 |
| 77 | pp2 | 76% | 76% | 0% | 0% | 15–25bb | g7 |
| Q6 | bp | 75% | 71% | 0% | 0% | 15–25bb | g7 |
| A6 | bp | 75% | 71% | 0% | 0% | 15–25bb | g7 |
| 96 | bp | 74% | 67% | 0% | 0% | 15–25bb | g7 |
| 76 | bp | 74% | 65% | 0% | 0% | 15–25bb | g7 |
| 65 | bp | 73% | 62% | 0% | 0% | 15–25bb | g7 |
| 64 | bp | 71% | 60% | 0% | 0% | 5–15bb | g8 |
| 55 | pp3 | 68% | 52% | 0% | 0% | 5–15bb | g8 |
| 44 | pp3 | 67% | 47% | 0% | 0% | 0–5bb | g9 |
| 33 | pp3 | 65% | 42% | 0% | 0% | 0–5bb | g9 |
| A2 | bp | 62% | 34% | 0% | 0% | 0–5bb | g9 |
| AQ | khnd | 58% | 31% | 0% | 0% | 0–5bb | g10 |
| AJ | khnd | 57% | 28% | 0% | 0% | 0–5bb | g10 |
| AT | khnd | 55% | 25% | 0% | 0% | 0–5bb | g10 |
| A9 | khnd | 51% | 20% | 0% | 0% | 0–5bb | g10 |
| A7 | khnd | 49% | 13% | 0% | 0% | 0–5bb | g10 |
| A5 | khnd | 45% | 7% | 0% | 0% | 0–5bb | g10 |
| A4 | khnd | 41% | 3% | 0% | 0% | 0–5bb | g10 |
| A3 | khnd | 40% | 1% | 0% | 0% | 0–5bb | g10 |
