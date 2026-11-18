# 962-2c-Ks@bx river (9♦ 6♦ 2♥ 2♣ K♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Full houses | KK, 99, 66, 22, K2 | 100% | 100% | 100% | 100% |
| g2 | 50–100bb | Trips | A2 | 100% | 100% | 100% | 93% |
| g3 | 25–50bb | Overpair | AA | 96% | 100% | 100% | 48% |
| g4 | 25–50bb | Top pair, good kicker | AK, KQ–K9, K6 | 92% | 97% | 72% | 12% |
| g5 | 15–25bb | Top pair, weak kicker | K8, K7, K5–K3 | 88% | 89% | 12% | 3% |
| g6 | 15–25bb | Big pocket pairs | QQ–TT | 85% | 84% | 0% | 3% |
| g7 | 15–25bb | Second pair | A9, Q9, J9, T9, 98–96 | 80% | 69% | 0% | 3% |
| g8 | 0–5bb | Third pair | A6, Q6, 86, 76, 65, 64 | 56% | 32% | 0% | 1% |
| g9 | 0–5bb | Small pairs | 88, 77, 55–33 | 50% | 30% | 0% | 1% |
| g10 | 0–5bb | Ace-high | AQ–AT, A8, A7, A5–A3 | 23% | 6% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| KK | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K2 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 99 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 66 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 22 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A2 | trips | 100% | 100% | 100% | 93% | 50–100bb | g2 |
| AA | op | 95% | 100% | 100% | 48% | 25–50bb | g3 |
| K9 | twopair | 94% | 100% | 100% | 28% | 25–50bb | g4 |
| K6 | twopair | 93% | 100% | 98% | 18% | 25–50bb | g4 |
| AK | tpgk | 92% | 99% | 96% | 15% | 25–50bb | g4 |
| KT | tpmk | 89% | 92% | 31% | 4% | 15–25bb | g4 |
| KQ | tpgk | 92% | 98% | 83% | 13% | 25–50bb | g4 |
| KJ | tpmk | 90% | 95% | 53% | 8% | 25–50bb | g4 |
| K8 | tpmk | 88% | 90% | 18% | 3% | 15–25bb | g5 |
| K7 | tpmk | 89% | 90% | 14% | 3% | 15–25bb | g5 |
| K4 | tpmk | 88% | 89% | 7% | 3% | 15–25bb | g5 |
| K5 | tpmk | 88% | 89% | 11% | 3% | 15–25bb | g5 |
| K3 | tpmk | 87% | 88% | 2% | 3% | 15–25bb | g5 |
| QQ | pp1 | 86% | 85% | 0% | 3% | 15–25bb | g6 |
| JJ | pp1 | 85% | 83% | 0% | 3% | 15–25bb | g6 |
| TT | pp1 | 85% | 83% | 0% | 3% | 15–25bb | g6 |
| 96 | twopair | 84% | 80% | 0% | 2% | 15–25bb | g7 |
| A9 | mp | 83% | 78% | 0% | 3% | 15–25bb | g7 |
| Q9 | mp | 83% | 76% | 0% | 3% | 15–25bb | g7 |
| J9 | mp | 80% | 67% | 0% | 3% | 15–25bb | g7 |
| T9 | mp | 77% | 58% | 0% | 3% | 5–15bb | g7 |
| 98 | mp | 74% | 54% | 0% | 3% | 5–15bb | g7 |
| 97 | mp | 73% | 52% | 0% | 3% | 5–15bb | g7 |
| Q6 | bp | 59% | 35% | 0% | 1% | 0–5bb | g8 |
| A6 | bp | 58% | 34% | 0% | 1% | 0–5bb | g8 |
| 86 | bp | 55% | 32% | 0% | 1% | 0–5bb | g8 |
| 76 | bp | 54% | 32% | 0% | 1% | 0–5bb | g8 |
| 64 | bp | 51% | 27% | 0% | 0% | 0–5bb | g8 |
| 65 | bp | 51% | 27% | 0% | 1% | 0–5bb | g8 |
| 88 | pp2 | 67% | 42% | 0% | 2% | 0–5bb | g9 |
| 77 | pp2 | 64% | 42% | 0% | 3% | 0–5bb | g9 |
| 55 | pp3 | 43% | 24% | 0% | 0% | 0–5bb | g9 |
| 44 | pp3 | 40% | 21% | 0% | 0% | 0–5bb | g9 |
| 33 | pp3 | 38% | 19% | 0% | 0% | 0–5bb | g9 |
| AQ | khnd | 34% | 15% | 0% | 0% | 0–5bb | g10 |
| AJ | khnd | 31% | 12% | 0% | 0% | 0–5bb | g10 |
| AT | khnd | 27% | 8% | 0% | 0% | 0–5bb | g10 |
| A8 | khnd | 22% | 5% | 0% | 0% | 0–5bb | g10 |
| A7 | khnd | 19% | 3% | 0% | 0% | 0–5bb | g10 |
| A4 | khnd | 16% | 1% | 0% | 0% | 0–5bb | g10 |
| A5 | khnd | 16% | 1% | 0% | 0% | 0–5bb | g10 |
| A3 | khnd | 16% | 1% | 0% | 0% | 0–5bb | g10 |
