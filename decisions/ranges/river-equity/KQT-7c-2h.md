# KQT-7c-2h river (K♦ Q♣ T♥ 7♣ 2♥): equity groups

Generated 2026-11-16 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | AJ, J9 | 100% | 100% | 100% | 99% |
| g2 | 25–50bb | Sets | KK, QQ, TT, 77, 22 | 98% | 100% | 100% | 87% |
| g3 | 15–25bb | Overpair | AA | 76% | 68% | 58% | 41% |
| g4 | 15–25bb | Two pair | KQ, KT, K7, K2, QT, Q7, T7 | 91% | 92% | 90% | 61% |
| g5 | 15–25bb | Top pair, good kicker | AK | 77% | 65% | 52% | 42% |
| g6 | 5–15bb | Top pair, good kicker | KJ | 76% | 60% | 44% | 26% |
| g7 | 0–5bb | Top pair, weak kicker | K9, K8, K6–K3 | 63% | 43% | 17% | 21% |
| g8 | 0–5bb | Second pair | AQ, QJ, Q9, Q8, Q6, Q5 | 37% | 19% | 0% | 5% |
| g9 | 0–5bb | Small pairs | JJ, 99, 88, 66–33, AT, A7, A2, JT, J7, T9, T8, 97, 87, 76, 75 | 7% | 2% | 0% | 0% |
| g10 | Pot is too big | Ace-high | A9, A8, A6–A3 | 1% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AJ | straight | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J9 | straight | 99% | 100% | 100% | 97% | 50–100bb | g1 |
| 77 | twopair | 98% | 100% | 100% | 90% | 50–100bb | g2 |
| 22 | twopair | 98% | 100% | 100% | 90% | 50–100bb | g2 |
| TT | twopair | 97% | 100% | 100% | 87% | 50–100bb | g2 |
| QQ | twopair | 97% | 100% | 100% | 87% | 50–100bb | g2 |
| KK | twopair | 97% | 100% | 100% | 83% | 50–100bb | g2 |
| AA | op | 76% | 67% | 57% | 41% | 25–50bb | g3 |
| KQ | twopair | 97% | 100% | 100% | 80% | 50–100bb | g4 |
| QT | twopair | 86% | 83% | 79% | 49% | 25–50bb | g4 |
| Q7 | twopair | 82% | 78% | 71% | 41% | 25–50bb | g4 |
| T7 | twopair | 80% | 76% | 67% | 45% | 25–50bb | g4 |
| KT | twopair | 94% | 99% | 98% | 66% | 50–100bb | g4 |
| K7 | twopair | 91% | 94% | 93% | 57% | 50–100bb | g4 |
| K2 | twopair | 90% | 91% | 87% | 54% | 50–100bb | g4 |
| AK | tpgk | 77% | 65% | 52% | 42% | 25–50bb | g5 |
| KJ | tpmk | 76% | 60% | 44% | 26% | 5–15bb | g6 |
| K8 | tpmk | 65% | 45% | 19% | 21% | 0–5bb | g7 |
| K6 | tpmk | 62% | 41% | 14% | 22% | 0–5bb | g7 |
| K5 | tpmk | 60% | 39% | 11% | 20% | 0–5bb | g7 |
| K4 | tpmk | 57% | 36% | 7% | 21% | 0–5bb | g7 |
| K3 | tpmk | 55% | 33% | 2% | 22% | 0–5bb | g7 |
| K9 | tpmk | 69% | 53% | 31% | 22% | 5–15bb | g7 |
| AQ | mp | 42% | 22% | 0% | 12% | 0–5bb | g8 |
| QJ | mp | 40% | 20% | 0% | 5% | 0–5bb | g8 |
| Q9 | mp | 33% | 17% | 0% | 0% | 0–5bb | g8 |
| Q8 | mp | 31% | 16% | 0% | 0% | 0–5bb | g8 |
| Q5 | mp | 31% | 16% | 0% | 0% | 0–5bb | g8 |
| Q6 | mp | 31% | 15% | 0% | 0% | 0–5bb | g8 |
| JJ | pp2 | 27% | 13% | 0% | 0% | 0–5bb | g9 |
| AT | bp | 17% | 7% | 0% | 0% | 0–5bb | g9 |
| JT | bp | 12% | 2% | 0% | 0% | 0–5bb | g9 |
| T9 | bp | 9% | 0% | 0% | 0% | 0–5bb | g9 |
| T8 | bp | 8% | 0% | 0% | 0% | 0–5bb | g9 |
| 88 | spp | 6% | 0% | 0% | 0% | 0–5bb | g9 |
| 99 | pp3 | 6% | 0% | 0% | 0% | 0–5bb | g9 |
| A7 | bp | 3% | 0% | 0% | 0% | 0–5bb | g9 |
| J7 | bp | 3% | 0% | 0% | 0% | 0–5bb | g9 |
| 87 | bp | 3% | 0% | 0% | 0% | 0–5bb | g9 |
| 75 | bp | 2% | 0% | 0% | 0% | 0–5bb | g9 |
| 97 | bp | 2% | 0% | 0% | 0% | 0–5bb | g9 |
| 76 | bp | 2% | 0% | 0% | 0% | 0–5bb | g9 |
| 66 | spp | 2% | 0% | 0% | 0% | 0–5bb | g9 |
| 55 | spp | 2% | 0% | 0% | 0% | 0–5bb | g9 |
| 33 | spp | 2% | 0% | 0% | 0% | 0–5bb | g9 |
| 44 | spp | 2% | 0% | 0% | 0% | 0–5bb | g9 |
| A2 | bp | 1% | 0% | 0% | 0% | 0–5bb | g9 |
| A9 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g10 |
| A8 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g10 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
