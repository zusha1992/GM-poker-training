# 886-2h-Ks@bx river (8♠ 8♦ 6♣ 2♥ K♠): equity groups

Generated 2026-11-17 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Full houses | KK, 88, 66, 22, K8, 86 | 100% | 100% | 100% | 97% |
| g2 | 50–100bb | Trips | A8, Q8, J8, T8 | 96% | 100% | 100% | 57% |
| g3 | 25–50bb | Trips | 98, 87 | 94% | 100% | 100% | 39% |
| g4 | 25–50bb | Overpair | AA | 88% | 100% | 100% | 23% |
| g5 | 15–25bb | Top pair | AK, KQ–K9, K7–K2 | 84% | 91% | 41% | 4% |
| g6 | 15–25bb | Pocket pairs under the K | QQ–99 | 77% | 78% | 0% | 0% |
| g7 | 15–25bb | Small pairs | 77, A6, Q6, 96, 76, 65, 64 | 72% | 71% | 0% | 0% |
| g8 | 5–15bb | Small pairs | 55, 44 | 61% | 55% | 0% | 0% |
| g9 | 0–5bb | Small pairs | 33, A2 | 52% | 43% | 0% | 0% |
| g10 | Pot is too big | Ace-high | AQ–A9, A7, A5–A3 | 22% | 16% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| KK | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K8 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 88 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 86 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 66 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 22 | boat | 99% | 100% | 100% | 87% | 50–100bb | g1 |
| T8 | trips | 95% | 100% | 100% | 50% | 25–50bb | g2 |
| A8 | trips | 96% | 100% | 100% | 61% | 50–100bb | g2 |
| Q8 | trips | 96% | 100% | 100% | 53% | 50–100bb | g2 |
| J8 | trips | 95% | 100% | 100% | 53% | 50–100bb | g2 |
| 98 | trips | 94% | 100% | 100% | 44% | 25–50bb | g3 |
| 87 | trips | 94% | 100% | 100% | 35% | 25–50bb | g3 |
| AA | op | 88% | 100% | 100% | 23% | 25–50bb | g4 |
| AK | tpgk | 89% | 100% | 100% | 17% | 25–50bb | g5 |
| KJ | tpmk | 84% | 90% | 38% | 2% | 15–25bb | g5 |
| KT | tpmk | 82% | 87% | 23% | 0% | 15–25bb | g5 |
| K9 | tpmk | 82% | 86% | 16% | 0% | 15–25bb | g5 |
| K5 | tpmk | 81% | 86% | 13% | 0% | 15–25bb | g5 |
| K3 | tpmk | 82% | 86% | 13% | 0% | 15–25bb | g5 |
| K7 | tpmk | 82% | 86% | 14% | 0% | 15–25bb | g5 |
| K4 | tpmk | 81% | 85% | 13% | 0% | 15–25bb | g5 |
| K6 | twopair | 81% | 85% | 5% | 0% | 15–25bb | g5 |
| K2 | twopair | 83% | 84% | 7% | 0% | 15–25bb | g5 |
| KQ | tpgk | 88% | 97% | 80% | 9% | 25–50bb | g5 |
| QQ | pp1 | 80% | 81% | 0% | 0% | 15–25bb | g6 |
| JJ | pp1 | 77% | 79% | 0% | 0% | 15–25bb | g6 |
| TT | pp1 | 76% | 77% | 0% | 0% | 15–25bb | g6 |
| 99 | pp1 | 76% | 76% | 0% | 0% | 15–25bb | g6 |
| 77 | pp2 | 75% | 76% | 0% | 0% | 15–25bb | g7 |
| Q6 | bp | 76% | 75% | 0% | 0% | 15–25bb | g7 |
| A6 | bp | 72% | 71% | 0% | 0% | 15–25bb | g7 |
| 96 | bp | 71% | 68% | 0% | 0% | 15–25bb | g7 |
| 76 | bp | 70% | 68% | 0% | 0% | 15–25bb | g7 |
| 65 | bp | 69% | 65% | 0% | 0% | 15–25bb | g7 |
| 64 | bp | 68% | 63% | 0% | 0% | 15–25bb | g7 |
| 55 | pp3 | 63% | 56% | 0% | 0% | 5–15bb | g8 |
| 44 | pp3 | 59% | 53% | 0% | 0% | 5–15bb | g8 |
| 33 | pp3 | 57% | 49% | 0% | 0% | 0–5bb | g9 |
| A2 | bp | 49% | 40% | 0% | 0% | 0–5bb | g9 |
| AQ | khnd | 49% | 41% | 0% | 0% | Pot is too big | g10 |
| AJ | khnd | 44% | 37% | 0% | 0% | Pot is too big | g10 |
| AT | khnd | 33% | 28% | 0% | 0% | Pot is too big | g10 |
| A9 | khnd | 21% | 16% | 0% | 0% | Pot is too big | g10 |
| A7 | khnd | 10% | 5% | 0% | 0% | Pot is too big | g10 |
| A5 | khnd | 7% | 1% | 0% | 0% | Pot is too big | g10 |
| A4 | khnd | 6% | 1% | 0% | 0% | Pot is too big | g10 |
| A3 | khnd | 5% | 0% | 0% | 0% | Pot is too big | g10 |
