# A72-6d-Ks river (A♣ 7♦ 2♠ 6♦ K♠): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets & two pair | AA, KK, 77, 66, 22, AK, A7, A6, A2, K7, K6, K2, 76 | 94% | 98% | 98% | 78% |
| g2 | 25–50bb | Top pair, good kicker | AQ, AJ | 80% | 78% | 80% | 46% |
| g3 | 0–5bb | Top pair, weak kicker | AT–A8, A5–A3 | 51% | 35% | 35% | 20% |
| g4 | 0–5bb | Second pair | KQ–K8, K5–K3 | 23% | 0% | 0% | 0% |
| g5 | 0–5bb | Small pairs | QQ–88, 55–33, Q7, Q6, J7, T7, 97, 96, 87, 86, 75, 65, 64 | 15% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KK | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 66 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 22 | twopair | 97% | 100% | 100% | 88% | 50–100bb | g1 |
| A6 | twopair | 97% | 99% | 99% | 86% | 50–100bb | g1 |
| AK | twopair | 96% | 100% | 100% | 84% | 50–100bb | g1 |
| A7 | twopair | 96% | 100% | 100% | 83% | 50–100bb | g1 |
| A2 | twopair | 91% | 97% | 97% | 62% | 50–100bb | g1 |
| 76 | twopair | 89% | 87% | 87% | 62% | 50–100bb | g1 |
| K6 | twopair | 92% | 93% | 94% | 62% | 50–100bb | g1 |
| K7 | twopair | 88% | 94% | 94% | 55% | 50–100bb | g1 |
| K2 | twopair | 88% | 92% | 92% | 54% | 50–100bb | g1 |
| AQ | tpgk | 81% | 80% | 81% | 46% | 25–50bb | g2 |
| AJ | tpmk | 79% | 76% | 79% | 45% | 25–50bb | g2 |
| AT | tpmk | 71% | 68% | 68% | 38% | 25–50bb | g3 |
| A9 | tpmk | 63% | 56% | 55% | 32% | 25–50bb | g3 |
| A8 | tpmk | 55% | 44% | 43% | 23% | 0–5bb | g3 |
| A5 | tpwk | 46% | 28% | 27% | 17% | 0–5bb | g3 |
| A4 | tpwk | 38% | 12% | 12% | 9% | 0–5bb | g3 |
| A3 | tpwk | 32% | 3% | 3% | 3% | 0–5bb | g3 |
| K4 | mp | 24% | 0% | 0% | 0% | 0–5bb | g4 |
| K5 | mp | 23% | 0% | 0% | 0% | 0–5bb | g4 |
| KT | mp | 23% | 0% | 0% | 0% | 0–5bb | g4 |
| K3 | mp | 23% | 0% | 0% | 0% | 0–5bb | g4 |
| KJ | mp | 23% | 0% | 0% | 0% | 0–5bb | g4 |
| KQ | mp | 23% | 0% | 0% | 0% | 0–5bb | g4 |
| K8 | mp | 23% | 0% | 0% | 0% | 0–5bb | g4 |
| K9 | mp | 23% | 0% | 0% | 0% | 0–5bb | g4 |
| TT | pp2 | 22% | 0% | 0% | 0% | 0–5bb | g5 |
| 99 | pp2 | 22% | 0% | 0% | 0% | 0–5bb | g5 |
| 88 | pp2 | 22% | 0% | 0% | 0% | 0–5bb | g5 |
| JJ | pp2 | 21% | 0% | 0% | 0% | 0–5bb | g5 |
| QQ | pp2 | 20% | 0% | 0% | 0% | 0–5bb | g5 |
| Q7 | bp | 16% | 0% | 0% | 0% | 0–5bb | g5 |
| J7 | bp | 16% | 0% | 0% | 0% | 0–5bb | g5 |
| T7 | bp | 15% | 0% | 0% | 0% | 0–5bb | g5 |
| 97 | bp | 14% | 0% | 0% | 0% | 0–5bb | g5 |
| 87 | bp | 12% | 0% | 0% | 0% | 0–5bb | g5 |
| 96 | bp | 10% | 0% | 0% | 0% | 0–5bb | g5 |
| 86 | bp | 10% | 0% | 0% | 0% | 0–5bb | g5 |
| Q6 | bp | 10% | 0% | 0% | 0% | 0–5bb | g5 |
| 75 | bp | 10% | 0% | 0% | 0% | 0–5bb | g5 |
| 65 | bp | 9% | 0% | 0% | 0% | 0–5bb | g5 |
| 55 | pp3 | 9% | 0% | 0% | 0% | 0–5bb | g5 |
| 64 | bp | 9% | 0% | 0% | 0% | 0–5bb | g5 |
| 44 | pp3 | 8% | 0% | 0% | 0% | 0–5bb | g5 |
| 33 | pp3 | 6% | 0% | 0% | 0% | 0–5bb | g5 |
