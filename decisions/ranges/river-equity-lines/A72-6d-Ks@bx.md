# A72-6d-Ks@bx river (A♣ 7♦ 2♠ 6♦ K♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets & two pair | AA, KK, 77, 66, 22, AK, A7, A6 | 98% | 100% | 100% | 75% |
| g2 | 25–50bb | Two pair | A2, K7, K6, K2, 76 | 93% | 96% | 95% | 29% |
| g3 | 25–50bb | Top pair | AQ–A9 | 83% | 78% | 69% | 13% |
| g4 | 0–5bb | Top pair, weak kicker | A8, A5–A3 | 66% | 42% | 20% | 6% |
| g5 | 0–5bb | Second pair | KQ–K8, K5–K3 | 48% | 18% | 0% | 0% |
| g6 | 0–5bb | Small pairs | QQ–88, 55–33, Q7, Q6, J7, T7, 97, 96, 87, 86, 75, 65, 64 | 32% | 12% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KK | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 66 | twopair | 100% | 100% | 100% | 95% | 50–100bb | g1 |
| 22 | twopair | 96% | 100% | 100% | 70% | 50–100bb | g1 |
| A6 | twopair | 97% | 100% | 100% | 69% | 50–100bb | g1 |
| A7 | twopair | 96% | 100% | 100% | 63% | 50–100bb | g1 |
| AK | twopair | 97% | 100% | 100% | 63% | 50–100bb | g1 |
| A2 | twopair | 94% | 98% | 97% | 35% | 25–50bb | g2 |
| K7 | twopair | 92% | 97% | 96% | 24% | 25–50bb | g2 |
| K6 | twopair | 94% | 96% | 95% | 30% | 25–50bb | g2 |
| K2 | twopair | 90% | 94% | 93% | 21% | 25–50bb | g2 |
| 76 | twopair | 91% | 90% | 88% | 25% | 25–50bb | g2 |
| AQ | tpgk | 86% | 85% | 81% | 13% | 25–50bb | g3 |
| AJ | tpmk | 85% | 83% | 77% | 13% | 25–50bb | g3 |
| AT | tpmk | 82% | 77% | 66% | 13% | 25–50bb | g3 |
| A9 | tpmk | 78% | 67% | 54% | 13% | 25–50bb | g3 |
| A5 | tpwk | 69% | 46% | 26% | 8% | 0–5bb | g4 |
| A4 | tpwk | 63% | 35% | 11% | 4% | 0–5bb | g4 |
| A3 | tpwk | 60% | 28% | 3% | 1% | 0–5bb | g4 |
| A8 | tpmk | 73% | 58% | 40% | 12% | 5–15bb | g4 |
| KQ | mp | 50% | 20% | 0% | 0% | 0–5bb | g5 |
| KJ | mp | 49% | 19% | 0% | 0% | 0–5bb | g5 |
| KT | mp | 49% | 18% | 0% | 0% | 0–5bb | g5 |
| K9 | mp | 48% | 17% | 0% | 0% | 0–5bb | g5 |
| K8 | mp | 47% | 18% | 0% | 0% | 0–5bb | g5 |
| K4 | mp | 46% | 15% | 0% | 0% | 0–5bb | g5 |
| K5 | mp | 46% | 16% | 0% | 0% | 0–5bb | g5 |
| K3 | mp | 45% | 16% | 0% | 0% | 0–5bb | g5 |
| 99 | pp2 | 45% | 17% | 0% | 0% | 0–5bb | g6 |
| JJ | pp2 | 45% | 17% | 0% | 0% | 0–5bb | g6 |
| TT | pp2 | 45% | 17% | 0% | 0% | 0–5bb | g6 |
| QQ | pp2 | 43% | 15% | 0% | 0% | 0–5bb | g6 |
| 88 | pp2 | 41% | 17% | 0% | 0% | 0–5bb | g6 |
| Q7 | bp | 36% | 14% | 0% | 0% | 0–5bb | g6 |
| J7 | bp | 35% | 15% | 0% | 0% | 0–5bb | g6 |
| T7 | bp | 33% | 15% | 0% | 0% | 0–5bb | g6 |
| 97 | bp | 31% | 13% | 0% | 0% | 0–5bb | g6 |
| 87 | bp | 31% | 12% | 0% | 0% | 0–5bb | g6 |
| 96 | bp | 28% | 11% | 0% | 0% | 0–5bb | g6 |
| 86 | bp | 27% | 10% | 0% | 0% | 0–5bb | g6 |
| Q6 | bp | 26% | 10% | 0% | 0% | 0–5bb | g6 |
| 75 | bp | 26% | 10% | 0% | 0% | 0–5bb | g6 |
| 65 | bp | 25% | 9% | 0% | 0% | 0–5bb | g6 |
| 64 | bp | 25% | 9% | 0% | 0% | 0–5bb | g6 |
| 55 | pp3 | 21% | 8% | 0% | 0% | 0–5bb | g6 |
| 44 | pp3 | 15% | 4% | 0% | 0% | 0–5bb | g6 |
| 33 | pp3 | 9% | 1% | 0% | 0% | 0–5bb | g6 |
