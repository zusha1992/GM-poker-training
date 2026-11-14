# A76-Ks turn (A♥ 7♥ 6♣ K♠): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | AA, KK, 77, 66 | 97% | 98% | 99% | 100% |
| g2 | 50–100bb | Two pair | AK, A7, A6, K7, K6, 76 | 89% | 85% | 86% | 85% |
| g3 | 25–50bb | Top pair, top kicker | AQ, AJ | 85% | 77% | 80% | 78% |
| g4 | 5–15bb | Top pair, weak kicker | AT–A8, A5–A2 | 71% | 41% | 47% | 34% |
| g5 | 5–15bb | Second pair | KQ–K8, K5–K2 | 56% | 24% | 18% | 13% |
| g6 | 0–5bb | Small pairs | QQ–88, 55–22, Q7, Q6, J7, T7, 97, 96, 87, 86, 75, 65, 64 | 36% | 14% | 7% | 7% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| KK | twopair | 98% | 98% | 100% | 100% | 50–100bb | g1 |
| AA | twopair | 97% | 98% | 99% | 100% | 50–100bb | g1 |
| 66 | twopair | 97% | 99% | 99% | 100% | 50–100bb | g1 |
| 77 | twopair | 97% | 98% | 99% | 99% | 50–100bb | g1 |
| AK | twopair | 94% | 97% | 99% | 99% | 50–100bb | g2 |
| A7 | twopair | 91% | 88% | 90% | 89% | 50–100bb | g2 |
| A6 | twopair | 89% | 82% | 83% | 79% | 50–100bb | g2 |
| K6 | twopair | 86% | 77% | 77% | 76% | 50–100bb | g2 |
| K7 | twopair | 85% | 78% | 77% | 76% | 50–100bb | g2 |
| 76 | twopair | 81% | 73% | 76% | 76% | 50–100bb | g2 |
| AQ | tpgk | 86% | 79% | 81% | 80% | 50–100bb | g3 |
| AJ | tpmk | 84% | 75% | 79% | 76% | 50–100bb | g3 |
| A5 | tpmk | 68% | 32% | 38% | 25% | 0–5bb | g4 |
| AT | tpmk | 81% | 65% | 72% | 66% | 50–100bb | g4 |
| A4 | tpmk | 66% | 32% | 35% | 19% | 0–5bb | g4 |
| A3 | tpmk | 66% | 30% | 34% | 17% | 0–5bb | g4 |
| A2 | tpmk | 66% | 28% | 33% | 17% | 0–5bb | g4 |
| A9 | tpmk | 78% | 55% | 62% | 54% | 50–100bb | g4 |
| A8 | tpmk | 74% | 44% | 52% | 41% | 25–50bb | g4 |
| KQ | mp | 57% | 23% | 21% | 13% | 0–5bb | g5 |
| KJ | mp | 57% | 23% | 19% | 12% | 0–5bb | g5 |
| K3 | mp | 56% | 26% | 18% | 18% | 0–5bb | g5 |
| K4 | mp | 56% | 26% | 18% | 17% | 0–5bb | g5 |
| K5 | mp | 56% | 26% | 18% | 17% | 0–5bb | g5 |
| K2 | mp | 56% | 25% | 18% | 18% | 0–5bb | g5 |
| KT | mp | 55% | 23% | 17% | 13% | 0–5bb | g5 |
| K8 | mp | 54% | 24% | 15% | 12% | 0–5bb | g5 |
| K9 | mp | 54% | 23% | 15% | 12% | 0–5bb | g5 |
| JJ | pp2 | 48% | 15% | 5% | 5% | Pot is too big | g6 |
| QQ | pp2 | 47% | 14% | 4% | 5% | Pot is too big | g6 |
| 99 | pp2 | 47% | 14% | 5% | 5% | Pot is too big | g6 |
| TT | pp2 | 47% | 14% | 4% | 5% | Pot is too big | g6 |
| Q7 | bp | 44% | 20% | 10% | 11% | Pot is too big | g6 |
| J7 | bp | 44% | 20% | 10% | 10% | Pot is too big | g6 |
| 88 | pp2 | 44% | 14% | 4% | 5% | Pot is too big | g6 |
| T7 | bp | 44% | 19% | 10% | 10% | Pot is too big | g6 |
| 97 | bp | 41% | 19% | 10% | 10% | Pot is too big | g6 |
| Q6 | bp | 41% | 23% | 17% | 16% | Pot is too big | g6 |
| 87 | bp | 41% | 19% | 10% | 10% | Pot is too big | g6 |
| 75 | bp | 39% | 18% | 10% | 9% | Pot is too big | g6 |
| 96 | bp | 38% | 21% | 17% | 16% | Pot is too big | g6 |
| 86 | bp | 37% | 20% | 15% | 15% | Pot is too big | g6 |
| 64 | bp | 35% | 18% | 16% | 16% | Pot is too big | g6 |
| 65 | bp | 34% | 20% | 16% | 15% | Pot is too big | g6 |
| 55 | pp3 | 23% | 6% | 4% | 4% | Pot is too big | g6 |
| 44 | pp3 | 19% | 7% | 4% | 4% | Pot is too big | g6 |
| 33 | pp3 | 17% | 6% | 4% | 4% | Pot is too big | g6 |
| 22 | pp3 | 16% | 6% | 5% | 4% | Pot is too big | g6 |
