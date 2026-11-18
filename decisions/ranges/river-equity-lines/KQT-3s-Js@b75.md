# KQT-3s-Js@b75 river (K♦ Q♣ T♥ 3♠ J♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | AA, AK–A2 | 94% | 100% | 100% | 64% |
| g2 | 25–50bb | Straights | 99, K9, Q9, J9, T9, 98–96 | 75% | 69% | 69% | 15% |
| g3 | 0–5bb | Sets | KK–TT, 33 | 60% | 28% | 29% | 10% |
| g4 | 0–5bb | Two pair | KQ–KT, K3, QJ, QT, JT | 46% | 22% | 22% | 8% |
| g5 | 0–5bb | Top pair, weak kicker | K8–K4, K2 | 11% | 0% | 0% | 3% |
| g6 | 0–5bb | Second pair | Q8–Q5 | 0% | 0% | 0% | 0% |
| g7 | 0–5bb | Small pairs | 88–44, 22, J8, J7, T8, T7, 43 | 0% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | straight | 96% | 100% | 100% | 69% | 50–100bb | g1 |
| AT | straight | 95% | 100% | 100% | 68% | 50–100bb | g1 |
| A5 | straight | 94% | 100% | 100% | 65% | 50–100bb | g1 |
| A2 | straight | 94% | 100% | 100% | 65% | 50–100bb | g1 |
| A8 | straight | 94% | 100% | 100% | 64% | 50–100bb | g1 |
| A4 | straight | 94% | 100% | 100% | 64% | 50–100bb | g1 |
| A7 | straight | 95% | 100% | 100% | 64% | 50–100bb | g1 |
| AJ | straight | 94% | 100% | 100% | 64% | 50–100bb | g1 |
| A6 | straight | 95% | 100% | 100% | 64% | 50–100bb | g1 |
| A3 | straight | 95% | 100% | 100% | 64% | 50–100bb | g1 |
| AQ | straight | 94% | 100% | 100% | 63% | 50–100bb | g1 |
| A9 | straight | 94% | 100% | 100% | 63% | 50–100bb | g1 |
| AK | straight | 93% | 100% | 100% | 62% | 50–100bb | g1 |
| 99 | straight | 78% | 75% | 74% | 14% | 25–50bb | g2 |
| K9 | straight | 73% | 70% | 70% | 13% | 25–50bb | g2 |
| 98 | straight | 74% | 69% | 70% | 15% | 25–50bb | g2 |
| 97 | straight | 75% | 69% | 70% | 15% | 25–50bb | g2 |
| 96 | straight | 75% | 70% | 69% | 15% | 25–50bb | g2 |
| Q9 | straight | 76% | 69% | 69% | 14% | 25–50bb | g2 |
| J9 | straight | 74% | 66% | 67% | 14% | 25–50bb | g2 |
| T9 | straight | 78% | 67% | 66% | 19% | 25–50bb | g2 |
| TT | twopair | 65% | 21% | 21% | 18% | 0–5bb | g3 |
| 33 | twopair | 62% | 31% | 30% | 9% | 0–5bb | g3 |
| QQ | twopair | 62% | 32% | 33% | 9% | 0–5bb | g3 |
| JJ | twopair | 58% | 23% | 23% | 8% | 0–5bb | g3 |
| KK | twopair | 52% | 35% | 36% | 6% | 0–5bb | g3 |
| KQ | twopair | 57% | 35% | 34% | 8% | 0–5bb | g4 |
| KJ | twopair | 52% | 30% | 29% | 7% | 0–5bb | g4 |
| KT | twopair | 48% | 27% | 26% | 10% | 0–5bb | g4 |
| K3 | twopair | 48% | 28% | 29% | 7% | 0–5bb | g4 |
| QJ | twopair | 43% | 20% | 19% | 7% | 0–5bb | g4 |
| QT | twopair | 40% | 14% | 14% | 9% | 0–5bb | g4 |
| JT | twopair | 33% | 4% | 5% | 7% | 0–5bb | g4 |
| K8 | tpmk | 16% | 0% | 0% | 4% | 0–5bb | g5 |
| K7 | tpmk | 12% | 0% | 0% | 3% | 0–5bb | g5 |
| K6 | tpmk | 11% | 0% | 0% | 3% | 0–5bb | g5 |
| K5 | tpmk | 8% | 0% | 0% | 2% | 0–5bb | g5 |
| K4 | tpmk | 6% | 0% | 0% | 1% | 0–5bb | g5 |
| K2 | tpmk | 2% | 0% | 0% | 0% | 0–5bb | g5 |
| Q8 | mp | 1% | 0% | 0% | 0% | 0–5bb | g6 |
| Q7 | mp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| Q6 | mp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| Q5 | mp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| J8 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| J7 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| T8 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| T7 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 88 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 77 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 66 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 55 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 44 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 43 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 22 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
