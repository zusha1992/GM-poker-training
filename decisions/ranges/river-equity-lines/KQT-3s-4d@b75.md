# KQT-3s-4d@b75 river (K♦ Q♣ T♥ 3♠ 4♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | AJ, J9 | 100% | 100% | 100% | 98% |
| g2 | 25–50bb | Sets | KK, QQ, TT, 44, 33 | 97% | 100% | 100% | 82% |
| g3 | 15–25bb | Overpair | AA | 77% | 69% | 61% | 40% |
| g4 | 15–25bb | Two pair | KQ, KT, K4, K3, QT, 43 | 90% | 92% | 90% | 57% |
| g5 | 15–25bb | Top pair, good kicker | AK, KJ | 78% | 65% | 51% | 34% |
| g6 | 0–5bb | Top pair, weak kicker | K9–K5, K2 | 63% | 41% | 16% | 22% |
| g7 | 0–5bb | Second pair | AQ, QJ, Q9–Q5 | 35% | 17% | 0% | 5% |
| g8 | 0–5bb | Small pairs | JJ, 99–55, 22, AT, A4, A3, JT, T9–T7, 64, 54 | 4% | 2% | 0% | 0% |
| g9 | Pot is too big | Ace-high | A9–A5, A2 | 0% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AJ | straight | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J9 | straight | 99% | 100% | 100% | 95% | 50–100bb | g1 |
| 44 | twopair | 97% | 100% | 100% | 85% | 50–100bb | g2 |
| 33 | twopair | 97% | 100% | 100% | 85% | 50–100bb | g2 |
| TT | twopair | 96% | 100% | 100% | 83% | 50–100bb | g2 |
| QQ | twopair | 96% | 100% | 100% | 80% | 50–100bb | g2 |
| KK | twopair | 96% | 100% | 100% | 76% | 50–100bb | g2 |
| AA | op | 77% | 69% | 61% | 40% | 25–50bb | g3 |
| K3 | twopair | 88% | 87% | 83% | 49% | 25–50bb | g4 |
| QT | twopair | 83% | 81% | 76% | 45% | 25–50bb | g4 |
| KQ | twopair | 95% | 100% | 100% | 72% | 50–100bb | g4 |
| 43 | twopair | 80% | 73% | 66% | 42% | 25–50bb | g4 |
| KT | twopair | 92% | 98% | 97% | 61% | 50–100bb | g4 |
| K4 | twopair | 90% | 92% | 89% | 52% | 50–100bb | g4 |
| KJ | tpmk | 77% | 61% | 47% | 27% | 15–25bb | g5 |
| AK | tpgk | 78% | 69% | 54% | 40% | 25–50bb | g5 |
| K8 | tpmk | 66% | 44% | 20% | 22% | 0–5bb | g6 |
| K7 | tpmk | 62% | 39% | 13% | 23% | 0–5bb | g6 |
| K6 | tpmk | 59% | 36% | 9% | 22% | 0–5bb | g6 |
| K5 | tpmk | 57% | 35% | 7% | 22% | 0–5bb | g6 |
| K2 | tpmk | 55% | 30% | 3% | 21% | 0–5bb | g6 |
| K9 | tpmk | 72% | 51% | 31% | 23% | 5–15bb | g6 |
| AQ | mp | 41% | 20% | 0% | 13% | 0–5bb | g7 |
| QJ | mp | 38% | 17% | 0% | 6% | 0–5bb | g7 |
| Q9 | mp | 31% | 15% | 0% | 0% | 0–5bb | g7 |
| Q8 | mp | 28% | 14% | 0% | 0% | 0–5bb | g7 |
| Q7 | mp | 28% | 14% | 0% | 0% | 0–5bb | g7 |
| Q5 | mp | 27% | 14% | 0% | 0% | 0–5bb | g7 |
| Q6 | mp | 27% | 13% | 0% | 0% | 0–5bb | g7 |
| JJ | pp2 | 24% | 11% | 0% | 0% | 0–5bb | g8 |
| AT | bp | 13% | 6% | 0% | 0% | 0–5bb | g8 |
| JT | bp | 6% | 2% | 0% | 0% | 0–5bb | g8 |
| T9 | bp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| T8 | bp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| 99 | pp3 | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| T7 | bp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| 55 | spp | 1% | 0% | 0% | 0% | 0–5bb | g8 |
| 64 | bp | 1% | 0% | 0% | 0% | 0–5bb | g8 |
| 77 | spp | 1% | 0% | 0% | 0% | 0–5bb | g8 |
| 88 | spp | 1% | 0% | 0% | 0% | 0–5bb | g8 |
| 54 | bp | 1% | 0% | 0% | 0% | 0–5bb | g8 |
| A4 | bp | 1% | 0% | 0% | 0% | 0–5bb | g8 |
| 66 | spp | 1% | 0% | 0% | 0% | 0–5bb | g8 |
| A3 | bp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 22 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| A9 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A8 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A7 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
