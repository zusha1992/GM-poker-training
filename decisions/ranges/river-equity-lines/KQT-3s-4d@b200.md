# KQT-3s-4d@b200 river (K♦ Q♣ T♥ 3♠ 4♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | KK, QQ, TT, 44, 33, AJ, J9 | 95% | 89% | 88% | 89% |
| g2 | 50–100bb | Two pair | KQ, KT | 85% | 62% | 56% | 62% |
| g3 | 0–5bb | Overpair | AA | 62% | 31% | 22% | 32% |
| g4 | 0–5bb | Two pair | K4, K3, QT, 43 | 74% | 41% | 32% | 41% |
| g5 | 0–5bb | Top pair | AK, KJ, K9–K5, K2 | 51% | 19% | 6% | 19% |
| g6 | 0–5bb | Second pair | AQ, QJ, Q9–Q5 | 24% | 5% | 0% | 5% |
| g7 | 0–5bb | Small pairs | JJ, 99–55, 22, AT, A4, A3, JT, T9–T7, 64, 54 | 3% | 0% | 0% | 0% |
| g8 | Pot is too big | Ace-high | A9–A5, A2 | 0% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AJ | straight | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| J9 | straight | 96% | 92% | 92% | 92% | 50–100bb | g1 |
| 44 | twopair | 92% | 81% | 78% | 81% | 50–100bb | g1 |
| 33 | twopair | 91% | 80% | 77% | 80% | 50–100bb | g1 |
| TT | twopair | 88% | 77% | 73% | 76% | 50–100bb | g1 |
| QQ | twopair | 89% | 75% | 74% | 75% | 50–100bb | g1 |
| KK | twopair | 88% | 70% | 62% | 69% | 50–100bb | g1 |
| KQ | twopair | 87% | 68% | 64% | 69% | 50–100bb | g2 |
| KT | twopair | 82% | 55% | 48% | 55% | 50–100bb | g2 |
| AA | op | 62% | 31% | 22% | 32% | 0–5bb | g3 |
| K3 | twopair | 79% | 47% | 37% | 46% | 0–5bb | g4 |
| QT | twopair | 73% | 37% | 30% | 39% | 0–5bb | g4 |
| 43 | twopair | 65% | 31% | 22% | 31% | 0–5bb | g4 |
| K4 | twopair | 81% | 51% | 40% | 49% | 5–15bb | g4 |
| AK | tpgk | 63% | 30% | 18% | 30% | 0–5bb | g5 |
| KJ | tpmk | 57% | 21% | 9% | 20% | 0–5bb | g5 |
| K9 | tpmk | 52% | 16% | 1% | 16% | 0–5bb | g5 |
| K8 | tpmk | 44% | 15% | 0% | 15% | 0–5bb | g5 |
| K7 | tpmk | 42% | 15% | 0% | 14% | 0–5bb | g5 |
| K5 | tpmk | 42% | 15% | 0% | 14% | 0–5bb | g5 |
| K6 | tpmk | 41% | 14% | 0% | 14% | 0–5bb | g5 |
| K2 | tpmk | 41% | 15% | 0% | 15% | 0–5bb | g5 |
| AQ | mp | 31% | 11% | 0% | 10% | 0–5bb | g6 |
| QJ | mp | 23% | 5% | 0% | 6% | 0–5bb | g6 |
| Q9 | mp | 21% | 2% | 0% | 3% | 0–5bb | g6 |
| Q8 | mp | 20% | 2% | 0% | 2% | 0–5bb | g6 |
| Q5 | mp | 20% | 2% | 0% | 2% | 0–5bb | g6 |
| Q6 | mp | 20% | 2% | 0% | 2% | 0–5bb | g6 |
| Q7 | mp | 19% | 2% | 0% | 2% | 0–5bb | g6 |
| JJ | pp2 | 15% | 1% | 0% | 1% | 0–5bb | g7 |
| AT | bp | 11% | 2% | 0% | 1% | 0–5bb | g7 |
| JT | bp | 4% | 1% | 0% | 1% | 0–5bb | g7 |
| A4 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| A3 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| T9 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| T8 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| T7 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 99 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 88 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 77 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 66 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 64 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 55 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 54 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 22 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| A9 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A8 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A7 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
