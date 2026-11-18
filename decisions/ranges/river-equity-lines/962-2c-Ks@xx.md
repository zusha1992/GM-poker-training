# 962-2c-Ks@xx river (9♦ 6♦ 2♥ 2♣ K♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Full houses | KK, 99, 66, 22, K2 | 100% | 100% | 100% | 89% |
| g2 | 50–100bb | Trips | A2 | 99% | 100% | 100% | 71% |
| g3 | 25–50bb | Overpair | AA | 96% | 100% | 100% | 29% |
| g4 | 25–50bb | Top pair, good kicker | AK, KQ–K9, K6 | 94% | 97% | 85% | 2% |
| g5 | 15–25bb | Top pair, weak kicker | K8, K7, K5–K3 | 88% | 84% | 27% | 1% |
| g6 | 15–25bb | Big pocket pairs | QQ–TT | 82% | 71% | 1% | 1% |
| g7 | 5–15bb | Second pair | A9, Q9, J9, T9, 98–96 | 79% | 56% | 0% | 1% |
| g8 | 0–5bb | Third pair | A6, Q6, 86, 76, 65, 64 | 65% | 29% | 0% | 0% |
| g9 | 0–5bb | Small pairs | 88, 77, 55–33 | 61% | 28% | 0% | 0% |
| g10 | 0–5bb | Ace-high | AQ–AT, A8, A7, A5–A3 | 42% | 9% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 22 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 99 | boat | 100% | 100% | 100% | 90% | 50–100bb | g1 |
| 66 | boat | 100% | 100% | 100% | 89% | 50–100bb | g1 |
| KK | boat | 100% | 100% | 100% | 89% | 50–100bb | g1 |
| K2 | boat | 99% | 100% | 100% | 73% | 50–100bb | g1 |
| A2 | trips | 99% | 100% | 100% | 71% | 50–100bb | g2 |
| AA | op | 95% | 100% | 100% | 29% | 25–50bb | g3 |
| K9 | twopair | 96% | 100% | 100% | 11% | 25–50bb | g4 |
| K6 | twopair | 95% | 100% | 100% | 2% | 25–50bb | g4 |
| AK | tpgk | 94% | 100% | 100% | 0% | 25–50bb | g4 |
| KQ | tpgk | 94% | 99% | 95% | 1% | 25–50bb | g4 |
| KJ | tpmk | 93% | 95% | 77% | 1% | 25–50bb | g4 |
| KT | tpmk | 91% | 91% | 57% | 1% | 25–50bb | g4 |
| K8 | tpmk | 90% | 87% | 40% | 1% | 15–25bb | g5 |
| K7 | tpmk | 88% | 85% | 29% | 1% | 15–25bb | g5 |
| K5 | tpmk | 87% | 83% | 22% | 1% | 15–25bb | g5 |
| K4 | tpmk | 87% | 81% | 14% | 1% | 15–25bb | g5 |
| K3 | tpmk | 87% | 78% | 6% | 1% | 15–25bb | g5 |
| QQ | pp1 | 82% | 71% | 1% | 1% | 15–25bb | g6 |
| TT | pp1 | 82% | 71% | 1% | 1% | 15–25bb | g6 |
| JJ | pp1 | 82% | 71% | 1% | 0% | 15–25bb | g6 |
| T9 | mp | 77% | 50% | 0% | 1% | 0–5bb | g7 |
| 98 | mp | 75% | 46% | 0% | 1% | 0–5bb | g7 |
| 97 | mp | 73% | 43% | 0% | 1% | 0–5bb | g7 |
| 96 | twopair | 82% | 64% | 0% | 1% | 15–25bb | g7 |
| A9 | mp | 81% | 61% | 0% | 0% | 15–25bb | g7 |
| Q9 | mp | 80% | 59% | 0% | 1% | 5–15bb | g7 |
| J9 | mp | 79% | 56% | 0% | 0% | 5–15bb | g7 |
| Q6 | bp | 65% | 33% | 0% | 0% | 0–5bb | g8 |
| A6 | bp | 65% | 30% | 0% | 0% | 0–5bb | g8 |
| 86 | bp | 65% | 29% | 0% | 0% | 0–5bb | g8 |
| 76 | bp | 63% | 28% | 0% | 0% | 0–5bb | g8 |
| 65 | bp | 63% | 27% | 0% | 0% | 0–5bb | g8 |
| 64 | bp | 62% | 27% | 0% | 0% | 0–5bb | g8 |
| 88 | pp2 | 70% | 37% | 0% | 0% | 0–5bb | g9 |
| 77 | pp2 | 68% | 35% | 0% | 1% | 0–5bb | g9 |
| 55 | pp3 | 57% | 24% | 0% | 0% | 0–5bb | g9 |
| 44 | pp3 | 55% | 23% | 0% | 0% | 0–5bb | g9 |
| 33 | pp3 | 53% | 21% | 0% | 0% | 0–5bb | g9 |
| AQ | khnd | 49% | 18% | 0% | 0% | 0–5bb | g10 |
| AJ | khnd | 49% | 16% | 0% | 0% | 0–5bb | g10 |
| AT | khnd | 46% | 14% | 0% | 0% | 0–5bb | g10 |
| A8 | khnd | 44% | 11% | 0% | 0% | 0–5bb | g10 |
| A7 | khnd | 40% | 8% | 0% | 0% | 0–5bb | g10 |
| A4 | khnd | 35% | 3% | 0% | 0% | 0–5bb | g10 |
| A5 | khnd | 34% | 3% | 0% | 0% | 0–5bb | g10 |
| A3 | khnd | 34% | 3% | 0% | 0% | 0–5bb | g10 |
