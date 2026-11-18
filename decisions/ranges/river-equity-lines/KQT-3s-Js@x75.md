# KQT-3s-Js@x75 river (K♦ Q♣ T♥ 3♠ J♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | AA, AK–A2 | 95% | 100% | 100% | 50% |
| g2 | 25–50bb | Straights | 99, K9, Q9, J9, T9, 98–96 | 78% | 67% | 67% | 0% |
| g3 | 0–5bb | Sets | KK–TT, 33 | 64% | 25% | 25% | 0% |
| g4 | 0–5bb | Two pair | KQ–KT, K3, QJ, QT, JT | 51% | 13% | 13% | 0% |
| g5 | 0–5bb | Top pair, weak kicker | K8–K4, K2 | 27% | 0% | 0% | 0% |
| g6 | 0–5bb | Second pair | Q8–Q5 | 15% | 0% | 0% | 0% |
| g7 | 0–5bb | Small pairs | 88–44, 22, J8, J7, T8, T7, 43 | 1% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | straight | 96% | 100% | 100% | 50% | 50–100bb | g1 |
| AK | straight | 94% | 100% | 100% | 50% | 50–100bb | g1 |
| AQ | straight | 94% | 100% | 100% | 50% | 50–100bb | g1 |
| AJ | straight | 95% | 100% | 100% | 50% | 50–100bb | g1 |
| AT | straight | 96% | 100% | 100% | 50% | 50–100bb | g1 |
| A9 | straight | 95% | 100% | 100% | 50% | 50–100bb | g1 |
| A8 | straight | 95% | 100% | 100% | 50% | 50–100bb | g1 |
| A7 | straight | 95% | 100% | 100% | 50% | 50–100bb | g1 |
| A6 | straight | 95% | 100% | 100% | 50% | 50–100bb | g1 |
| A5 | straight | 94% | 100% | 100% | 50% | 50–100bb | g1 |
| A4 | straight | 95% | 100% | 100% | 50% | 50–100bb | g1 |
| A3 | straight | 95% | 100% | 100% | 50% | 50–100bb | g1 |
| A2 | straight | 95% | 100% | 100% | 50% | 50–100bb | g1 |
| 99 | straight | 80% | 72% | 72% | 0% | 25–50bb | g2 |
| Q9 | straight | 76% | 67% | 68% | 0% | 25–50bb | g2 |
| 97 | straight | 78% | 67% | 67% | 0% | 25–50bb | g2 |
| 98 | straight | 78% | 67% | 67% | 0% | 25–50bb | g2 |
| K9 | straight | 77% | 67% | 67% | 0% | 25–50bb | g2 |
| 96 | straight | 78% | 67% | 67% | 0% | 25–50bb | g2 |
| T9 | straight | 79% | 66% | 66% | 0% | 25–50bb | g2 |
| J9 | straight | 78% | 65% | 65% | 0% | 25–50bb | g2 |
| TT | twopair | 67% | 24% | 25% | 0% | 0–5bb | g3 |
| 33 | twopair | 65% | 22% | 22% | 0% | 0–5bb | g3 |
| JJ | twopair | 64% | 22% | 22% | 0% | 0–5bb | g3 |
| QQ | twopair | 62% | 29% | 29% | 0% | 0–5bb | g3 |
| KK | twopair | 61% | 27% | 27% | 0% | 0–5bb | g3 |
| KQ | twopair | 58% | 22% | 22% | 0% | 0–5bb | g4 |
| KJ | twopair | 58% | 18% | 18% | 0% | 0–5bb | g4 |
| KT | twopair | 55% | 17% | 16% | 0% | 0–5bb | g4 |
| K3 | twopair | 54% | 15% | 15% | 0% | 0–5bb | g4 |
| QJ | twopair | 49% | 10% | 11% | 0% | 0–5bb | g4 |
| QT | twopair | 43% | 9% | 9% | 0% | 0–5bb | g4 |
| JT | twopair | 41% | 3% | 4% | 0% | 0–5bb | g4 |
| K8 | tpmk | 30% | 0% | 0% | 0% | 0–5bb | g5 |
| K7 | tpmk | 28% | 0% | 0% | 0% | 0–5bb | g5 |
| K6 | tpmk | 27% | 0% | 0% | 0% | 0–5bb | g5 |
| K5 | tpmk | 26% | 0% | 0% | 0% | 0–5bb | g5 |
| K4 | tpmk | 24% | 0% | 0% | 0% | 0–5bb | g5 |
| K2 | tpmk | 23% | 0% | 0% | 0% | 0–5bb | g5 |
| Q8 | mp | 18% | 0% | 0% | 0% | 0–5bb | g6 |
| Q7 | mp | 15% | 0% | 0% | 0% | 0–5bb | g6 |
| Q6 | mp | 14% | 0% | 0% | 0% | 0–5bb | g6 |
| Q5 | mp | 12% | 0% | 0% | 0% | 0–5bb | g6 |
| J8 | bp | 8% | 0% | 0% | 0% | 0–5bb | g7 |
| J7 | bp | 8% | 0% | 0% | 0% | 0–5bb | g7 |
| T8 | bp | 4% | 0% | 0% | 0% | 0–5bb | g7 |
| T7 | bp | 3% | 0% | 0% | 0% | 0–5bb | g7 |
| 88 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 77 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 66 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 55 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 44 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 43 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 22 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
