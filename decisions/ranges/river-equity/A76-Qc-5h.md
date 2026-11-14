# A76-Qc-5h river (A♥ 7♥ 6♣ Q♣ 5♥): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes, straights & sets | AA, QQ, 77–55, 98, 43 · ♥ flushes: KQ–K8, K6, K4–K2, QJ–Q8, Q6, JT–J8, T9, T8, 98, 96, 86, 64, 43 | 96% | 100% | 100% | 91% |
| g2 | 15–25bb | Two pair | AQ, A7–A5, Q7–Q5, 76, 75, 65 | 87% | 92% | 92% | 69% |
| g3 | 0–5bb | Top pair | AK, AJ–A8, A4–A2 | 52% | 39% | 39% | 38% |
| g4 | 0–5bb | Big pocket pairs | KK | 22% | 0% | 0% | 21% |
| g5 | 0–5bb | Second pair | KQ, QJ–Q8 | 21% | 0% | 0% | 16% |
| g6 | 0–5bb | Small pairs | JJ–88, 44–22, K7–K5, J7, T7, 97, 96, 87, 86, 64, 54 | 11% | 0% | 0% | 7% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| KQ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K6+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K4+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K3+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K2+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| Q6+fl | flush | 99% | 100% | 100% | 100% | 50–100bb | g1 |
| Q8+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| QT+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| QJ+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| Q9+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 96+fl | flushlo | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| 64+fl | flushlo | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| 86+fl | flushlo | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| JT+fl | flush | 98% | 100% | 100% | 96% | 50–100bb | g1 |
| J9+fl | flush | 98% | 100% | 100% | 96% | 50–100bb | g1 |
| T9+fl | flushlo | 97% | 100% | 100% | 96% | 50–100bb | g1 |
| J8+fl | flush | 98% | 100% | 100% | 96% | 50–100bb | g1 |
| T8+fl | flushlo | 97% | 100% | 100% | 95% | 50–100bb | g1 |
| 98+fl | flushlo | 97% | 100% | 100% | 94% | 50–100bb | g1 |
| 43+fl | flushlo | 96% | 100% | 100% | 93% | 50–100bb | g1 |
| 98 | straight | 94% | 100% | 100% | 88% | 50–100bb | g1 |
| 43 | straight | 93% | 100% | 100% | 85% | 50–100bb | g1 |
| 66 | twopair | 94% | 100% | 100% | 83% | 50–100bb | g1 |
| QQ | twopair | 94% | 100% | 100% | 82% | 50–100bb | g1 |
| 77 | twopair | 91% | 100% | 100% | 82% | 50–100bb | g1 |
| 55 | twopair | 91% | 100% | 100% | 81% | 50–100bb | g1 |
| AA | twopair | 87% | 99% | 99% | 74% | 50–100bb | g1 |
| AQ | twopair | 92% | 100% | 100% | 78% | 50–100bb | g2 |
| A7 | twopair | 90% | 99% | 99% | 78% | 50–100bb | g2 |
| A6 | twopair | 91% | 97% | 97% | 76% | 50–100bb | g2 |
| A5 | twopair | 85% | 87% | 87% | 65% | 50–100bb | g2 |
| 65 | twopair | 81% | 83% | 81% | 56% | 50–100bb | g2 |
| 76 | twopair | 79% | 77% | 79% | 55% | 50–100bb | g2 |
| 75 | twopair | 80% | 80% | 80% | 55% | 50–100bb | g2 |
| Q7 | twopair | 81% | 77% | 77% | 54% | 50–100bb | g2 |
| Q6 | twopair | 80% | 78% | 78% | 53% | 50–100bb | g2 |
| Q5 | twopair | 82% | 81% | 79% | 53% | 50–100bb | g2 |
| AT | tpmk | 64% | 59% | 60% | 47% | 25–50bb | g3 |
| A9 | tpmk | 55% | 46% | 47% | 42% | 0–5bb | g3 |
| AJ | tpmk | 71% | 70% | 71% | 50% | 50–100bb | g3 |
| AK | tpgk | 73% | 75% | 73% | 50% | 50–100bb | g3 |
| A8 | tpmk | 45% | 30% | 31% | 32% | 0–5bb | g3 |
| A4 | tpmk | 36% | 10% | 10% | 28% | 0–5bb | g3 |
| A3 | tpmk | 36% | 10% | 11% | 27% | 0–5bb | g3 |
| A2 | tpmk | 36% | 10% | 11% | 29% | 0–5bb | g3 |
| KK | pp1 | 22% | 0% | 0% | 21% | 0–5bb | g4 |
| QJ | mp | 21% | 0% | 0% | 16% | 0–5bb | g5 |
| KQ | mp | 21% | 0% | 0% | 17% | 0–5bb | g5 |
| Q9 | mp | 20% | 0% | 0% | 15% | 0–5bb | g5 |
| QT | mp | 20% | 0% | 0% | 15% | 0–5bb | g5 |
| Q8 | mp | 19% | 0% | 0% | 12% | 0–5bb | g5 |
| JJ | pp2 | 19% | 0% | 0% | 12% | 0–5bb | g6 |
| 99 | pp2 | 18% | 0% | 0% | 12% | 0–5bb | g6 |
| TT | pp2 | 18% | 0% | 0% | 12% | 0–5bb | g6 |
| 88 | pp2 | 17% | 0% | 0% | 8% | 0–5bb | g6 |
| J7 | bp | 14% | 0% | 0% | 9% | 0–5bb | g6 |
| T7 | bp | 13% | 0% | 0% | 9% | 0–5bb | g6 |
| K7 | bp | 13% | 0% | 0% | 9% | 0–5bb | g6 |
| 97 | bp | 12% | 0% | 0% | 9% | 0–5bb | g6 |
| 87 | bp | 10% | 0% | 0% | 8% | 0–5bb | g6 |
| K6 | bp | 7% | 0% | 0% | 6% | 0–5bb | g6 |
| 96 | bp | 6% | 0% | 0% | 3% | 0–5bb | g6 |
| 86 | bp | 6% | 0% | 0% | 2% | 0–5bb | g6 |
| 64 | bp | 5% | 0% | 0% | 1% | 0–5bb | g6 |
| 22 | pp3 | 3% | 0% | 0% | 1% | 0–5bb | g6 |
| 54 | bp | 3% | 0% | 0% | 1% | 0–5bb | g6 |
| 44 | pp3 | 3% | 0% | 0% | 1% | 0–5bb | g6 |
| 33 | pp3 | 3% | 0% | 0% | 1% | 0–5bb | g6 |
| K5 | bp | 3% | 0% | 0% | 1% | 0–5bb | g6 |
