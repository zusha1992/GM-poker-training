# KQ4-8s-3h river (K♦ Q♦ 4♠ 8♠ 3♥): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | KK, QQ, 88, 44, 33 | 100% | 100% | 100% | 100% |
| g2 | 50–100bb | Two pair | KQ, K8, K4, K3, Q8, 43 | 99% | 100% | 100% | 97% |
| g3 | 50–100bb | Overpair | AA | 95% | 100% | 100% | 73% |
| g4 | 50–100bb | Top pair, good kicker | AK, KJ, KT | 93% | 97% | 91% | 66% |
| g5 | 5–15bb | Second pair | AQ, QJ | 61% | 52% | 0% | 19% |
| g6 | 0–5bb | Top pair, weak kicker | K9, K7–K5, K2 | 81% | 78% | 23% | 39% |
| g7 | 0–5bb | Second pair | QT, Q9, Q7–Q5 | 47% | 36% | 0% | 17% |
| g8 | 0–5bb | Small pairs | JJ–99, 77–55, 22, A8, A4, A3, J8, T8, 98, 87, 86, 64, 54 | 22% | 8% | 0% | 3% |
| g9 | Pot is too big | Ace-high | AJ–A9, A7–A5, A2 | 6% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| KK | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 88 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 44 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 33 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g2 |
| K8 | twopair | 100% | 100% | 100% | 99% | 50–100bb | g2 |
| K4 | twopair | 99% | 100% | 100% | 98% | 50–100bb | g2 |
| K3 | twopair | 99% | 100% | 100% | 96% | 50–100bb | g2 |
| Q8 | twopair | 97% | 100% | 100% | 91% | 50–100bb | g2 |
| 43 | twopair | 95% | 100% | 100% | 80% | 50–100bb | g2 |
| AA | op | 95% | 100% | 100% | 73% | 50–100bb | g3 |
| AK | tpgk | 95% | 100% | 100% | 72% | 50–100bb | g4 |
| KJ | tpmk | 94% | 99% | 95% | 68% | 50–100bb | g4 |
| KT | tpmk | 89% | 93% | 77% | 57% | 50–100bb | g4 |
| AQ | mp | 62% | 54% | 0% | 18% | 5–15bb | g5 |
| QJ | mp | 59% | 51% | 0% | 20% | 5–15bb | g5 |
| K9 | tpmk | 84% | 85% | 45% | 46% | 15–25bb | g6 |
| K7 | tpmk | 82% | 77% | 23% | 39% | 15–25bb | g6 |
| K6 | tpmk | 79% | 76% | 15% | 37% | 15–25bb | g6 |
| K5 | tpmk | 77% | 74% | 9% | 34% | 15–25bb | g6 |
| K2 | tpmk | 76% | 71% | 3% | 30% | 15–25bb | g6 |
| QT | mp | 53% | 44% | 0% | 19% | 0–5bb | g7 |
| Q9 | mp | 46% | 35% | 0% | 18% | 0–5bb | g7 |
| Q7 | mp | 42% | 28% | 0% | 15% | 0–5bb | g7 |
| Q6 | mp | 40% | 24% | 0% | 14% | 0–5bb | g7 |
| Q5 | mp | 38% | 21% | 0% | 13% | 0–5bb | g7 |
| 99 | pp2 | 31% | 17% | 0% | 8% | 0–5bb | g8 |
| TT | pp2 | 29% | 15% | 0% | 7% | 0–5bb | g8 |
| JJ | pp2 | 28% | 14% | 0% | 8% | 0–5bb | g8 |
| 98 | bp | 26% | 11% | 0% | 2% | 0–5bb | g8 |
| 87 | bp | 26% | 10% | 0% | 2% | 0–5bb | g8 |
| 86 | bp | 25% | 9% | 0% | 2% | 0–5bb | g8 |
| A8 | bp | 25% | 11% | 0% | 3% | 0–5bb | g8 |
| 77 | spp | 24% | 9% | 0% | 2% | 0–5bb | g8 |
| T8 | bp | 24% | 11% | 0% | 2% | 0–5bb | g8 |
| J8 | bp | 24% | 10% | 0% | 3% | 0–5bb | g8 |
| 55 | spp | 23% | 8% | 0% | 2% | 0–5bb | g8 |
| 66 | spp | 23% | 8% | 0% | 2% | 0–5bb | g8 |
| A4 | bp | 18% | 5% | 0% | 1% | 0–5bb | g8 |
| 54 | bp | 17% | 1% | 0% | 0% | 0–5bb | g8 |
| 64 | bp | 17% | 2% | 0% | 0% | 0–5bb | g8 |
| 22 | spp | 15% | 0% | 0% | 0% | 0–5bb | g8 |
| A3 | bp | 12% | 0% | 0% | 0% | 0–5bb | g8 |
| AJ | khnd | 9% | 0% | 0% | 0% | Pot is too big | g9 |
| AT | khnd | 6% | 0% | 0% | 0% | Pot is too big | g9 |
| A9 | khnd | 6% | 0% | 0% | 0% | Pot is too big | g9 |
| A7 | khnd | 5% | 0% | 0% | 0% | Pot is too big | g9 |
| A5 | khnd | 5% | 0% | 0% | 0% | Pot is too big | g9 |
| A2 | khnd | 4% | 0% | 0% | 0% | Pot is too big | g9 |
| A6 | khnd | 4% | 0% | 0% | 0% | Pot is too big | g9 |
