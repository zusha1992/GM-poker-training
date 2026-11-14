# A76-Ks-2d river (A♥ 7♥ 6♣ K♠ 2♦): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | AA, KK, 77, 66, 22 | 100% | 100% | 100% | 100% |
| g2 | 50–100bb | Two pair | AK, A7, A6, A2, K7, K6, K2, 76 | 95% | 100% | 100% | 84% |
| g3 | 25–50bb | Top pair, good kicker | AQ–AT | 73% | 87% | 87% | 47% |
| g4 | 0–5bb | Top pair, weak kicker | A9, A8, A5–A3 | 33% | 20% | 21% | 12% |
| g5 | 0–5bb | Second pair | KQ–K8, K5–K3 | 14% | 0% | 0% | 0% |
| g6 | 0–5bb | Small pairs | QQ–88, 55–33, Q7, Q6, J7, T7, 97, 96, 87, 86, 75, 65, 64 | 9% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KK | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 66 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 22 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AK | twopair | 100% | 100% | 100% | 100% | 50–100bb | g2 |
| A7 | twopair | 100% | 100% | 100% | 98% | 50–100bb | g2 |
| A6 | twopair | 97% | 100% | 100% | 90% | 50–100bb | g2 |
| A2 | twopair | 92% | 100% | 100% | 78% | 50–100bb | g2 |
| K7 | twopair | 89% | 100% | 100% | 67% | 50–100bb | g2 |
| K6 | twopair | 88% | 99% | 99% | 64% | 50–100bb | g2 |
| 76 | twopair | 87% | 98% | 98% | 62% | 50–100bb | g2 |
| K2 | twopair | 86% | 99% | 99% | 60% | 50–100bb | g2 |
| AJ | tpmk | 76% | 91% | 91% | 48% | 25–50bb | g3 |
| AT | tpmk | 65% | 75% | 74% | 42% | 25–50bb | g3 |
| AQ | tpgk | 79% | 95% | 95% | 51% | 50–100bb | g3 |
| A9 | tpmk | 52% | 52% | 52% | 31% | 25–50bb | g4 |
| A8 | tpmk | 37% | 26% | 27% | 16% | 0–5bb | g4 |
| A5 | tpmk | 30% | 13% | 13% | 7% | 0–5bb | g4 |
| A4 | tpmk | 25% | 8% | 9% | 5% | 0–5bb | g4 |
| A3 | tpmk | 22% | 2% | 2% | 2% | 0–5bb | g4 |
| K9 | mp | 15% | 0% | 0% | 0% | 0–5bb | g5 |
| KJ | mp | 15% | 0% | 0% | 0% | 0–5bb | g5 |
| KT | mp | 15% | 0% | 0% | 0% | 0–5bb | g5 |
| KQ | mp | 14% | 0% | 0% | 0% | 0–5bb | g5 |
| K8 | mp | 14% | 0% | 0% | 0% | 0–5bb | g5 |
| K5 | mp | 13% | 0% | 0% | 0% | 0–5bb | g5 |
| K4 | mp | 13% | 0% | 0% | 0% | 0–5bb | g5 |
| K3 | mp | 13% | 0% | 0% | 0% | 0–5bb | g5 |
| T7 | bp | 14% | 0% | 0% | 0% | 0–5bb | g6 |
| J7 | bp | 14% | 0% | 0% | 0% | 0–5bb | g6 |
| 97 | bp | 13% | 0% | 0% | 0% | 0–5bb | g6 |
| 99 | pp2 | 13% | 0% | 0% | 0% | 0–5bb | g6 |
| 88 | pp2 | 13% | 0% | 0% | 0% | 0–5bb | g6 |
| TT | pp2 | 13% | 0% | 0% | 0% | 0–5bb | g6 |
| 87 | bp | 13% | 0% | 0% | 0% | 0–5bb | g6 |
| QQ | pp2 | 12% | 0% | 0% | 0% | 0–5bb | g6 |
| JJ | pp2 | 12% | 0% | 0% | 0% | 0–5bb | g6 |
| 75 | bp | 12% | 0% | 0% | 0% | 0–5bb | g6 |
| Q7 | bp | 12% | 0% | 0% | 0% | 0–5bb | g6 |
| Q6 | bp | 9% | 0% | 0% | 0% | 0–5bb | g6 |
| 96 | bp | 8% | 0% | 0% | 0% | 0–5bb | g6 |
| 86 | bp | 7% | 0% | 0% | 0% | 0–5bb | g6 |
| 65 | bp | 5% | 0% | 0% | 0% | 0–5bb | g6 |
| 64 | bp | 5% | 0% | 0% | 0% | 0–5bb | g6 |
| 44 | pp3 | 3% | 0% | 0% | 0% | 0–5bb | g6 |
| 55 | pp3 | 3% | 0% | 0% | 0% | 0–5bb | g6 |
| 33 | pp3 | 2% | 0% | 0% | 0% | 0–5bb | g6 |
