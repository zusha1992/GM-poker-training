# KQ4-2c-7h@bx river (K♦ Q♦ 4♠ 2♣ 7♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | KK, QQ, 77, 44, 22 | 99% | 100% | 100% | 91% |
| g2 | 50–100bb | Two pair | KQ, K7, K4, K2, Q7 | 97% | 100% | 100% | 75% |
| g3 | 25–50bb | Overpair | AA | 91% | 95% | 82% | 9% |
| g4 | 25–50bb | Top pair, good kicker | AK, KJ, KT | 90% | 92% | 61% | 8% |
| g5 | 15–25bb | Top pair, weak kicker | K9, K8, K6, K5, K3 | 83% | 82% | 13% | 7% |
| g6 | 15–25bb | Second pair | AQ, QJ–Q9 | 69% | 66% | 0% | 4% |
| g7 | 0–5bb | Second pair | Q8, Q6, Q5 | 60% | 41% | 0% | 3% |
| g8 | 0–5bb | Small pairs | JJ–88, 66, 55, 33, A7, A4, A2, J7, T7, 97, 87, 76, 75, 64, 54, 43 | 44% | 19% | 0% | 0% |
| g9 | 0–5bb | Ace-high | AJ–A8, A6, A5, A3 | 18% | 1% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| KK | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 44 | twopair | 98% | 100% | 100% | 81% | 50–100bb | g1 |
| 22 | twopair | 98% | 100% | 100% | 76% | 50–100bb | g1 |
| K7 | twopair | 98% | 100% | 100% | 85% | 50–100bb | g2 |
| KQ | twopair | 97% | 100% | 100% | 74% | 50–100bb | g2 |
| K4 | twopair | 96% | 100% | 100% | 71% | 50–100bb | g2 |
| K2 | twopair | 97% | 100% | 100% | 68% | 50–100bb | g2 |
| Q7 | twopair | 96% | 100% | 99% | 59% | 50–100bb | g2 |
| AA | op | 91% | 95% | 82% | 9% | 25–50bb | g3 |
| KT | tpmk | 88% | 89% | 41% | 8% | 15–25bb | g4 |
| AK | tpgk | 91% | 95% | 77% | 8% | 25–50bb | g4 |
| KJ | tpmk | 91% | 93% | 65% | 8% | 25–50bb | g4 |
| K9 | tpmk | 86% | 84% | 25% | 7% | 15–25bb | g5 |
| K8 | tpmk | 84% | 83% | 13% | 8% | 15–25bb | g5 |
| K6 | tpmk | 82% | 80% | 7% | 6% | 15–25bb | g5 |
| K5 | tpmk | 81% | 79% | 4% | 6% | 15–25bb | g5 |
| K3 | tpmk | 80% | 79% | 1% | 5% | 15–25bb | g5 |
| QJ | mp | 71% | 71% | 0% | 4% | 15–25bb | g6 |
| AQ | mp | 72% | 69% | 0% | 3% | 15–25bb | g6 |
| QT | mp | 68% | 67% | 0% | 3% | 15–25bb | g6 |
| Q9 | mp | 65% | 54% | 0% | 4% | 5–15bb | g6 |
| Q8 | mp | 62% | 45% | 0% | 4% | 0–5bb | g7 |
| Q5 | mp | 60% | 37% | 0% | 2% | 0–5bb | g7 |
| Q6 | mp | 59% | 40% | 0% | 3% | 0–5bb | g7 |
| 99 | pp2 | 54% | 31% | 0% | 0% | 0–5bb | g8 |
| 88 | spp | 53% | 28% | 0% | 0% | 0–5bb | g8 |
| JJ | pp2 | 52% | 29% | 0% | 0% | 0–5bb | g8 |
| TT | pp2 | 52% | 31% | 0% | 0% | 0–5bb | g8 |
| 97 | bp | 51% | 27% | 0% | 0% | 0–5bb | g8 |
| 87 | bp | 51% | 26% | 0% | 0% | 0–5bb | g8 |
| 75 | bp | 50% | 23% | 0% | 0% | 0–5bb | g8 |
| T7 | bp | 49% | 25% | 0% | 0% | 0–5bb | g8 |
| 76 | bp | 49% | 22% | 0% | 0% | 0–5bb | g8 |
| J7 | bp | 48% | 25% | 0% | 0% | 0–5bb | g8 |
| A7 | bp | 48% | 24% | 0% | 0% | 0–5bb | g8 |
| 66 | spp | 45% | 21% | 0% | 0% | 0–5bb | g8 |
| 55 | spp | 43% | 17% | 0% | 0% | 0–5bb | g8 |
| 64 | bp | 37% | 8% | 0% | 0% | 0–5bb | g8 |
| A4 | bp | 36% | 11% | 0% | 0% | 0–5bb | g8 |
| 54 | bp | 36% | 8% | 0% | 0% | 0–5bb | g8 |
| 43 | bp | 33% | 6% | 0% | 0% | 0–5bb | g8 |
| 33 | spp | 32% | 3% | 0% | 0% | 0–5bb | g8 |
| A2 | bp | 29% | 2% | 0% | 0% | 0–5bb | g8 |
| AJ | khnd | 24% | 2% | 0% | 0% | 0–5bb | g9 |
| AT | khnd | 21% | 2% | 0% | 0% | 0–5bb | g9 |
| A9 | khnd | 17% | 1% | 0% | 0% | 0–5bb | g9 |
| A8 | khnd | 17% | 1% | 0% | 0% | 0–5bb | g9 |
| A6 | khnd | 16% | 1% | 0% | 0% | 0–5bb | g9 |
| A5 | khnd | 15% | 0% | 0% | 0% | 0–5bb | g9 |
| A3 | khnd | 14% | 0% | 0% | 0% | 0–5bb | g9 |
