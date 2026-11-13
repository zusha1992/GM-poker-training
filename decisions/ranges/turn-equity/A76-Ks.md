# A76-Ks turn (A♥ 7♥ 6♣ K♠): equity groups

Generated 2026-11-13 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | AA, KK, 77, 66 | 97% | 98% | 99% | 99% |
| g2 | 50–100bb | Two pair | AK, A7, A6, K7, K6, 76 | 90% | 85% | 86% | 85% |
| g3 | 25–50bb | Top pair, good kicker | AQ–AT | 84% | 73% | 78% | 75% |
| g4 | 5–15bb | Top pair, weak kicker | A9, A8, A5–A2 | 69% | 36% | 42% | 29% |
| g5 | 5–15bb | Second pair | KQ–K8, K5–K2 | 56% | 24% | 18% | 13% |
| g6 | 0–5bb | Small pairs | QQ–88, 55–22, Q7, Q6, J7, T7, 97, 96, 87, 86, 75, 65, 64 | 36% | 14% | 7% | 7% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| KK | twopair | 97% | 98% | 99% | 100% | 50–100bb | g1 |
| AA | twopair | 97% | 97% | 99% | 100% | 50–100bb | g1 |
| 66 | twopair | 97% | 98% | 99% | 99% | 50–100bb | g1 |
| 77 | twopair | 97% | 98% | 99% | 99% | 50–100bb | g1 |
| AK | twopair | 95% | 97% | 99% | 99% | 50–100bb | g2 |
| A7 | twopair | 92% | 89% | 89% | 88% | 50–100bb | g2 |
| A6 | twopair | 89% | 83% | 83% | 81% | 50–100bb | g2 |
| K7 | twopair | 86% | 77% | 77% | 77% | 50–100bb | g2 |
| K6 | twopair | 86% | 78% | 77% | 76% | 50–100bb | g2 |
| 76 | twopair | 81% | 75% | 76% | 76% | 50–100bb | g2 |
| AQ | tpgk | 87% | 78% | 83% | 81% | 50–100bb | g3 |
| AJ | tpmk | 84% | 74% | 79% | 77% | 50–100bb | g3 |
| AT | tpmk | 82% | 66% | 71% | 67% | 50–100bb | g3 |
| A5 | tpmk | 69% | 32% | 39% | 25% | 0–5bb | g4 |
| A4 | tpmk | 66% | 30% | 34% | 20% | 0–5bb | g4 |
| A2 | tpmk | 65% | 30% | 33% | 17% | 0–5bb | g4 |
| A3 | tpmk | 65% | 29% | 34% | 18% | 0–5bb | g4 |
| A9 | tpmk | 77% | 54% | 61% | 55% | 50–100bb | g4 |
| A8 | tpmk | 73% | 42% | 52% | 41% | 25–50bb | g4 |
| KJ | mp | 58% | 23% | 19% | 13% | 0–5bb | g5 |
| KQ | mp | 56% | 25% | 22% | 12% | 0–5bb | g5 |
| K5 | mp | 56% | 27% | 18% | 17% | 0–5bb | g5 |
| K3 | mp | 55% | 25% | 18% | 17% | 0–5bb | g5 |
| K2 | mp | 55% | 27% | 17% | 17% | 0–5bb | g5 |
| KT | mp | 55% | 22% | 17% | 12% | 0–5bb | g5 |
| K4 | mp | 55% | 26% | 18% | 17% | 0–5bb | g5 |
| K8 | mp | 54% | 23% | 14% | 12% | 0–5bb | g5 |
| K9 | mp | 54% | 23% | 15% | 11% | 0–5bb | g5 |
| JJ | pp2 | 49% | 15% | 4% | 5% | Pot is too big | g6 |
| 99 | pp2 | 47% | 15% | 4% | 5% | Pot is too big | g6 |
| QQ | pp2 | 47% | 14% | 5% | 5% | Pot is too big | g6 |
| TT | pp2 | 46% | 15% | 5% | 5% | Pot is too big | g6 |
| 88 | pp2 | 45% | 15% | 5% | 5% | Pot is too big | g6 |
| Q7 | bp | 45% | 19% | 11% | 10% | Pot is too big | g6 |
| J7 | bp | 43% | 19% | 10% | 11% | Pot is too big | g6 |
| T7 | bp | 42% | 19% | 10% | 10% | Pot is too big | g6 |
| 97 | bp | 41% | 19% | 10% | 10% | Pot is too big | g6 |
| 87 | bp | 41% | 20% | 9% | 9% | Pot is too big | g6 |
| Q6 | bp | 39% | 23% | 17% | 17% | Pot is too big | g6 |
| 86 | bp | 37% | 19% | 16% | 16% | Pot is too big | g6 |
| 96 | bp | 37% | 20% | 16% | 16% | Pot is too big | g6 |
| 75 | bp | 37% | 20% | 10% | 9% | Pot is too big | g6 |
| 64 | bp | 35% | 19% | 17% | 17% | Pot is too big | g6 |
| 65 | bp | 34% | 19% | 17% | 15% | Pot is too big | g6 |
| 55 | pp3 | 22% | 6% | 5% | 4% | Pot is too big | g6 |
| 44 | pp3 | 19% | 6% | 5% | 4% | Pot is too big | g6 |
| 33 | pp3 | 18% | 6% | 5% | 5% | Pot is too big | g6 |
| 22 | pp3 | 16% | 6% | 5% | 5% | Pot is too big | g6 |
