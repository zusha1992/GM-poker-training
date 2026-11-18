# A76-Ks-2d@bx river (A♥ 7♥ 6♣ K♠ 2♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | AA, KK, 77, 66, 22 | 100% | 100% | 100% | 100% |
| g2 | 50–100bb | Two pair | AK, A7, A6 | 98% | 100% | 100% | 73% |
| g3 | 25–50bb | Two pair | A2, K7, K6, K2, 76 | 95% | 99% | 98% | 27% |
| g4 | 25–50bb | Top pair | AQ–A9 | 88% | 83% | 77% | 7% |
| g5 | 0–5bb | Top pair, weak kicker | A8, A5–A3 | 71% | 41% | 20% | 2% |
| g6 | 0–5bb | Second pair | KQ–K8, K5–K3 | 54% | 16% | 0% | 0% |
| g7 | 0–5bb | Small pairs | QQ–88, 55–33, Q7, Q6, J7, T7, 97, 96, 87, 86, 75, 65, 64 | 36% | 8% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KK | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 66 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 22 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AK | twopair | 99% | 100% | 100% | 81% | 50–100bb | g2 |
| A7 | twopair | 98% | 100% | 100% | 76% | 50–100bb | g2 |
| A6 | twopair | 97% | 100% | 100% | 63% | 50–100bb | g2 |
| A2 | twopair | 97% | 100% | 100% | 47% | 25–50bb | g3 |
| K7 | twopair | 94% | 99% | 98% | 19% | 25–50bb | g3 |
| K6 | twopair | 94% | 97% | 97% | 15% | 25–50bb | g3 |
| K2 | twopair | 94% | 97% | 96% | 14% | 25–50bb | g3 |
| 76 | twopair | 93% | 97% | 95% | 11% | 25–50bb | g3 |
| AQ | tpgk | 91% | 94% | 90% | 7% | 25–50bb | g4 |
| AJ | tpmk | 91% | 89% | 86% | 7% | 25–50bb | g4 |
| AT | tpmk | 86% | 80% | 74% | 7% | 25–50bb | g4 |
| A9 | tpmk | 82% | 71% | 58% | 7% | 25–50bb | g4 |
| A5 | tpmk | 71% | 44% | 24% | 1% | 0–5bb | g5 |
| A4 | tpmk | 68% | 34% | 10% | 1% | 0–5bb | g5 |
| A3 | tpmk | 66% | 28% | 2% | 0% | 0–5bb | g5 |
| A8 | tpmk | 77% | 56% | 42% | 4% | 5–15bb | g5 |
| KJ | mp | 56% | 18% | 0% | 0% | 0–5bb | g6 |
| KQ | mp | 55% | 17% | 0% | 0% | 0–5bb | g6 |
| KT | mp | 54% | 16% | 0% | 0% | 0–5bb | g6 |
| K9 | mp | 54% | 16% | 0% | 0% | 0–5bb | g6 |
| K8 | mp | 52% | 15% | 0% | 0% | 0–5bb | g6 |
| K3 | mp | 52% | 14% | 0% | 0% | 0–5bb | g6 |
| K5 | mp | 51% | 15% | 0% | 0% | 0–5bb | g6 |
| K4 | mp | 50% | 14% | 0% | 0% | 0–5bb | g6 |
| QQ | pp2 | 50% | 13% | 0% | 0% | 0–5bb | g7 |
| JJ | pp2 | 49% | 13% | 0% | 0% | 0–5bb | g7 |
| TT | pp2 | 49% | 14% | 0% | 0% | 0–5bb | g7 |
| 99 | pp2 | 47% | 13% | 0% | 0% | 0–5bb | g7 |
| 88 | pp2 | 47% | 13% | 0% | 0% | 0–5bb | g7 |
| Q7 | bp | 44% | 11% | 0% | 0% | 0–5bb | g7 |
| J7 | bp | 44% | 12% | 0% | 0% | 0–5bb | g7 |
| T7 | bp | 40% | 11% | 0% | 0% | 0–5bb | g7 |
| 97 | bp | 39% | 11% | 0% | 0% | 0–5bb | g7 |
| 87 | bp | 39% | 10% | 0% | 0% | 0–5bb | g7 |
| 75 | bp | 37% | 9% | 0% | 0% | 0–5bb | g7 |
| Q6 | bp | 29% | 5% | 0% | 0% | 0–5bb | g7 |
| 86 | bp | 28% | 4% | 0% | 0% | 0–5bb | g7 |
| 96 | bp | 27% | 5% | 0% | 0% | 0–5bb | g7 |
| 65 | bp | 25% | 3% | 0% | 0% | 0–5bb | g7 |
| 64 | bp | 24% | 3% | 0% | 0% | 0–5bb | g7 |
| 55 | pp3 | 19% | 1% | 0% | 0% | 0–5bb | g7 |
| 44 | pp3 | 18% | 1% | 0% | 0% | 0–5bb | g7 |
| 33 | pp3 | 15% | 0% | 0% | 0% | 0–5bb | g7 |
