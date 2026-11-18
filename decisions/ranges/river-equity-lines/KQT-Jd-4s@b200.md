# KQT-Jd-4s@b200 river (K♦ Q♣ T♥ J♦ 4♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | AA, AK–A2 | 65% | 50% | 50% | 50% |
| g2 | 0–5bb | Straights & sets | KK–99, 44, K9, Q9, J9, T9, 98–96 | 21% | 0% | 0% | 0% |
| g3 | 0–5bb | Two pair | KQ–KT, K4, QJ, QT, JT | 13% | 0% | 0% | 0% |
| g4 | 0–5bb | Top pair, weak kicker | K8–K5, K3, K2 | 11% | 0% | 0% | 0% |
| g5 | 0–5bb | Second pair | Q8–Q5 | 6% | 0% | 0% | 0% |
| g6 | 0–5bb | Small pairs | 88–55, 33, 22, J8, J7, T8, T7, 64, 54, 43 | 0% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | straight | 70% | 50% | 50% | 50% | 50–100bb | g1 |
| AK | straight | 64% | 50% | 50% | 50% | 50–100bb | g1 |
| AQ | straight | 62% | 50% | 50% | 50% | 50–100bb | g1 |
| AJ | straight | 65% | 50% | 50% | 50% | 50–100bb | g1 |
| AT | straight | 67% | 50% | 50% | 50% | 50–100bb | g1 |
| A9 | straight | 65% | 50% | 50% | 50% | 50–100bb | g1 |
| A8 | straight | 66% | 50% | 50% | 50% | 50–100bb | g1 |
| A7 | straight | 65% | 50% | 50% | 50% | 50–100bb | g1 |
| A6 | straight | 66% | 50% | 50% | 50% | 50–100bb | g1 |
| A5 | straight | 65% | 50% | 50% | 50% | 50–100bb | g1 |
| A4 | straight | 65% | 50% | 50% | 50% | 50–100bb | g1 |
| A3 | straight | 65% | 50% | 50% | 50% | 50–100bb | g1 |
| A2 | straight | 65% | 50% | 50% | 50% | 50–100bb | g1 |
| T9 | straight | 25% | 0% | 0% | 0% | 0–5bb | g2 |
| 99 | straight | 24% | 0% | 0% | 0% | 0–5bb | g2 |
| 97 | straight | 23% | 0% | 0% | 0% | 0–5bb | g2 |
| 98 | straight | 23% | 0% | 0% | 0% | 0–5bb | g2 |
| TT | twopair | 22% | 0% | 0% | 0% | 0–5bb | g2 |
| K9 | straight | 22% | 0% | 0% | 0% | 0–5bb | g2 |
| J9 | straight | 22% | 0% | 0% | 0% | 0–5bb | g2 |
| 96 | straight | 22% | 0% | 0% | 0% | 0–5bb | g2 |
| 44 | twopair | 18% | 0% | 0% | 0% | 0–5bb | g2 |
| Q9 | straight | 17% | 0% | 0% | 0% | 0–5bb | g2 |
| JJ | twopair | 17% | 0% | 0% | 0% | 0–5bb | g2 |
| KK | twopair | 17% | 0% | 0% | 0% | 0–5bb | g2 |
| QQ | twopair | 9% | 0% | 0% | 0% | 0–5bb | g2 |
| KT | twopair | 18% | 0% | 0% | 0% | 0–5bb | g3 |
| KJ | twopair | 15% | 0% | 0% | 0% | 0–5bb | g3 |
| K4 | twopair | 15% | 0% | 0% | 0% | 0–5bb | g3 |
| JT | twopair | 12% | 0% | 0% | 0% | 0–5bb | g3 |
| KQ | twopair | 12% | 0% | 0% | 0% | 0–5bb | g3 |
| QT | twopair | 11% | 0% | 0% | 0% | 0–5bb | g3 |
| QJ | twopair | 11% | 0% | 0% | 0% | 0–5bb | g3 |
| K7 | tpmk | 11% | 0% | 0% | 0% | 0–5bb | g4 |
| K8 | tpmk | 11% | 0% | 0% | 0% | 0–5bb | g4 |
| K3 | tpmk | 11% | 0% | 0% | 0% | 0–5bb | g4 |
| K2 | tpmk | 11% | 0% | 0% | 0% | 0–5bb | g4 |
| K6 | tpmk | 11% | 0% | 0% | 0% | 0–5bb | g4 |
| K5 | tpmk | 10% | 0% | 0% | 0% | 0–5bb | g4 |
| Q8 | mp | 7% | 0% | 0% | 0% | 0–5bb | g5 |
| Q7 | mp | 6% | 0% | 0% | 0% | 0–5bb | g5 |
| Q6 | mp | 5% | 0% | 0% | 0% | 0–5bb | g5 |
| Q5 | mp | 4% | 0% | 0% | 0% | 0–5bb | g5 |
| J8 | bp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| J7 | bp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| T8 | bp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| T7 | bp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| 88 | spp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| 77 | spp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| 66 | spp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| 64 | bp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| 55 | spp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| 54 | bp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| 43 | bp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| 33 | spp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| 22 | spp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
