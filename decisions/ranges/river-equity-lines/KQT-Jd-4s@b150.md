# KQT-Jd-4s@b150 river (K♦ Q♣ T♥ J♦ 4♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | A-high straights | AA, AK–A2 | 72% | 50% | 50% | 50% |
| g2 | 0–5bb | K-high straights | 99, K9, Q9, J9, T9, 98–96 | 34% | 0% | 0% | 0% |
| g3 | 0–5bb | Sets | KK–TT, 44 | 26% | 0% | 0% | 0% |
| g4 | 0–5bb | Two pair | KQ–KT, K4, QJ, QT, JT | 13% | 0% | 0% | 0% |
| g5 | 0–5bb | Top pair, weak kicker | K8–K5, K3, K2 | 7% | 0% | 0% | 0% |
| g6 | 0–5bb | Second pair | Q8–Q5 | 4% | 0% | 0% | 0% |
| g7 | 0–5bb | Small pairs | 88–55, 33, 22, J8, J7, T8, T7, 64, 54, 43 | 0% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | straight | 77% | 50% | 50% | 50% | 50–100bb | g1 |
| AK | straight | 71% | 50% | 50% | 50% | 50–100bb | g1 |
| AQ | straight | 70% | 50% | 50% | 50% | 50–100bb | g1 |
| AJ | straight | 71% | 50% | 50% | 50% | 50–100bb | g1 |
| AT | straight | 73% | 50% | 50% | 50% | 50–100bb | g1 |
| A9 | straight | 73% | 50% | 50% | 50% | 50–100bb | g1 |
| A8 | straight | 73% | 50% | 50% | 50% | 50–100bb | g1 |
| A7 | straight | 72% | 50% | 50% | 50% | 50–100bb | g1 |
| A6 | straight | 72% | 50% | 50% | 50% | 50–100bb | g1 |
| A5 | straight | 72% | 50% | 50% | 50% | 50–100bb | g1 |
| A4 | straight | 72% | 50% | 50% | 50% | 50–100bb | g1 |
| A3 | straight | 72% | 50% | 50% | 50% | 50–100bb | g1 |
| A2 | straight | 72% | 50% | 50% | 50% | 50–100bb | g1 |
| 99 | straight | 37% | 0% | 0% | 0% | 0–5bb | g2 |
| T9 | straight | 37% | 0% | 0% | 0% | 0–5bb | g2 |
| 97 | straight | 36% | 0% | 0% | 0% | 0–5bb | g2 |
| 98 | straight | 35% | 0% | 0% | 0% | 0–5bb | g2 |
| 96 | straight | 35% | 0% | 0% | 0% | 0–5bb | g2 |
| J9 | straight | 33% | 0% | 0% | 0% | 0–5bb | g2 |
| K9 | straight | 31% | 0% | 0% | 0% | 0–5bb | g2 |
| Q9 | straight | 30% | 0% | 0% | 0% | 0–5bb | g2 |
| TT | twopair | 33% | 0% | 0% | 0% | 0–5bb | g3 |
| 44 | twopair | 30% | 0% | 0% | 0% | 0–5bb | g3 |
| JJ | twopair | 25% | 0% | 0% | 0% | 0–5bb | g3 |
| KK | twopair | 22% | 0% | 0% | 0% | 0–5bb | g3 |
| QQ | twopair | 21% | 0% | 0% | 0% | 0–5bb | g3 |
| KQ | twopair | 20% | 0% | 0% | 0% | 0–5bb | g4 |
| KJ | twopair | 19% | 0% | 0% | 0% | 0–5bb | g4 |
| KT | twopair | 17% | 0% | 0% | 0% | 0–5bb | g4 |
| K4 | twopair | 16% | 0% | 0% | 0% | 0–5bb | g4 |
| JT | twopair | 8% | 0% | 0% | 0% | 0–5bb | g4 |
| QJ | twopair | 8% | 0% | 0% | 0% | 0–5bb | g4 |
| QT | twopair | 7% | 0% | 0% | 0% | 0–5bb | g4 |
| K6 | tpmk | 8% | 0% | 0% | 0% | 0–5bb | g5 |
| K7 | tpmk | 7% | 0% | 0% | 0% | 0–5bb | g5 |
| K2 | tpmk | 7% | 0% | 0% | 0% | 0–5bb | g5 |
| K5 | tpmk | 7% | 0% | 0% | 0% | 0–5bb | g5 |
| K3 | tpmk | 7% | 0% | 0% | 0% | 0–5bb | g5 |
| K8 | tpmk | 6% | 0% | 0% | 0% | 0–5bb | g5 |
| Q8 | mp | 5% | 0% | 0% | 0% | 0–5bb | g6 |
| Q7 | mp | 4% | 0% | 0% | 0% | 0–5bb | g6 |
| Q6 | mp | 4% | 0% | 0% | 0% | 0–5bb | g6 |
| Q5 | mp | 3% | 0% | 0% | 0% | 0–5bb | g6 |
| J7 | bp | 1% | 0% | 0% | 0% | 0–5bb | g7 |
| T8 | bp | 1% | 0% | 0% | 0% | 0–5bb | g7 |
| J8 | bp | 1% | 0% | 0% | 0% | 0–5bb | g7 |
| T7 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 88 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 77 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 66 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 64 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 55 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 54 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 43 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 33 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 22 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
