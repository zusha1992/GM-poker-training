# A76-Ks-2d river (A♥ 7♥ 6♣ K♠ 2♦): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | AA, KK, 77, 66, 22 | 100% | 100% | 100% | 100% |
| g2 | 50–100bb | Two pair | AK, A7, A6, A2, K7, K6, K2, 76 | 94% | 100% | 100% | 83% |
| g3 | 25–50bb | Top pair | AQ–A9 | 68% | 78% | 78% | 43% |
| g4 | Pot is too big | Top pair, weak kicker | A8, A5–A3 | 29% | 13% | 12% | 7% |
| g5 | Pot is too big | Second pair | KQ–K8, K5–K3 | 15% | 0% | 0% | 0% |
| g6 | Pot is too big | Small pairs | QQ–88, 55–33, Q7, Q6, J7, T7, 97, 96, 87, 86, 75, 65, 64 | 9% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KK | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 66 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 22 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AK | twopair | 100% | 100% | 100% | 100% | 50–100bb | g2 |
| A7 | twopair | 100% | 100% | 100% | 99% | 50–100bb | g2 |
| A6 | twopair | 96% | 100% | 100% | 90% | 50–100bb | g2 |
| A2 | twopair | 93% | 100% | 100% | 77% | 50–100bb | g2 |
| K7 | twopair | 89% | 100% | 100% | 67% | 50–100bb | g2 |
| K6 | twopair | 88% | 100% | 99% | 65% | 50–100bb | g2 |
| 76 | twopair | 87% | 98% | 98% | 62% | 50–100bb | g2 |
| K2 | twopair | 86% | 98% | 99% | 60% | 50–100bb | g2 |
| AJ | tpmk | 75% | 91% | 91% | 48% | 25–50bb | g3 |
| AT | tpmk | 65% | 76% | 75% | 42% | 25–50bb | g3 |
| A9 | tpmk | 52% | 51% | 51% | 32% | 25–50bb | g3 |
| AQ | tpgk | 80% | 95% | 95% | 50% | 50–100bb | g3 |
| A8 | tpmk | 38% | 27% | 26% | 15% | Pot is too big | g4 |
| A5 | tpmk | 29% | 12% | 12% | 7% | Pot is too big | g4 |
| A4 | tpmk | 26% | 9% | 8% | 5% | Pot is too big | g4 |
| A3 | tpmk | 23% | 2% | 2% | 2% | Pot is too big | g4 |
| K8 | mp | 15% | 0% | 0% | 0% | Pot is too big | g5 |
| KQ | mp | 15% | 0% | 0% | 0% | Pot is too big | g5 |
| KJ | mp | 15% | 0% | 0% | 0% | Pot is too big | g5 |
| K9 | mp | 15% | 0% | 0% | 0% | Pot is too big | g5 |
| KT | mp | 15% | 0% | 0% | 0% | Pot is too big | g5 |
| K4 | mp | 13% | 0% | 0% | 0% | Pot is too big | g5 |
| K5 | mp | 13% | 0% | 0% | 0% | Pot is too big | g5 |
| K3 | mp | 12% | 0% | 0% | 0% | Pot is too big | g5 |
| 97 | bp | 13% | 0% | 0% | 0% | Pot is too big | g6 |
| T7 | bp | 13% | 0% | 0% | 0% | Pot is too big | g6 |
| J7 | bp | 13% | 0% | 0% | 0% | Pot is too big | g6 |
| 87 | bp | 13% | 0% | 0% | 0% | Pot is too big | g6 |
| TT | pp2 | 13% | 0% | 0% | 0% | Pot is too big | g6 |
| Q7 | bp | 13% | 0% | 0% | 0% | Pot is too big | g6 |
| 99 | pp2 | 13% | 0% | 0% | 0% | Pot is too big | g6 |
| 88 | pp2 | 13% | 0% | 0% | 0% | Pot is too big | g6 |
| 75 | bp | 13% | 0% | 0% | 0% | Pot is too big | g6 |
| JJ | pp2 | 12% | 0% | 0% | 0% | Pot is too big | g6 |
| QQ | pp2 | 11% | 0% | 0% | 0% | Pot is too big | g6 |
| Q6 | bp | 9% | 0% | 0% | 0% | Pot is too big | g6 |
| 96 | bp | 7% | 0% | 0% | 0% | Pot is too big | g6 |
| 86 | bp | 6% | 0% | 0% | 0% | Pot is too big | g6 |
| 65 | bp | 5% | 0% | 0% | 0% | Pot is too big | g6 |
| 64 | bp | 4% | 0% | 0% | 0% | Pot is too big | g6 |
| 44 | pp3 | 3% | 0% | 0% | 0% | Pot is too big | g6 |
| 55 | pp3 | 3% | 0% | 0% | 0% | Pot is too big | g6 |
| 33 | pp3 | 2% | 0% | 0% | 0% | Pot is too big | g6 |
