# A76-Qc-5h river (A♥ 7♥ 6♣ Q♣ 5♥): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes, straights & sets | AA, QQ, 77–55, 98, 43 · ♥ flushes: KQ–K8, K6, K4–K2, QJ–Q8, Q6, JT–J8, T9, T8, 98, 96, 86, 64, 43 | 96% | 100% | 100% | 91% |
| g2 | 50–100bb | Two pair | AQ, A7–A5, Q7–Q5, 76, 75, 65 | 87% | 92% | 92% | 69% |
| g3 | 25–50bb | Top pair, good kicker | AK, AJ, AT | 70% | 68% | 68% | 49% |
| g4 | Pot is too big | Top pair, weak kicker | A9, A8, A4–A2 | 42% | 22% | 21% | 32% |
| g5 | Pot is too big | Big pocket pairs | KK | 21% | 0% | 0% | 20% |
| g6 | Pot is too big | Second pair | KQ, QJ–Q8 | 21% | 0% | 0% | 16% |
| g7 | Pot is too big | Small pairs | JJ–88, 44–22, K7–K5, J7, T7, 97, 96, 87, 86, 64, 54 | 11% | 0% | 0% | 7% |

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
| 86+fl | flushlo | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| JT+fl | flush | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| 64+fl | flushlo | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| J9+fl | flush | 97% | 100% | 100% | 96% | 50–100bb | g1 |
| T8+fl | flushlo | 97% | 100% | 100% | 95% | 50–100bb | g1 |
| T9+fl | flushlo | 97% | 100% | 100% | 95% | 50–100bb | g1 |
| J8+fl | flush | 98% | 100% | 100% | 95% | 50–100bb | g1 |
| 98+fl | flushlo | 96% | 100% | 100% | 95% | 50–100bb | g1 |
| 43+fl | flushlo | 96% | 100% | 100% | 94% | 50–100bb | g1 |
| 98 | straight | 94% | 100% | 100% | 88% | 50–100bb | g1 |
| 43 | straight | 93% | 100% | 100% | 84% | 50–100bb | g1 |
| 66 | twopair | 94% | 100% | 100% | 83% | 50–100bb | g1 |
| QQ | twopair | 94% | 100% | 100% | 82% | 50–100bb | g1 |
| 77 | twopair | 92% | 99% | 100% | 82% | 50–100bb | g1 |
| 55 | twopair | 92% | 100% | 100% | 81% | 50–100bb | g1 |
| AA | twopair | 87% | 99% | 99% | 72% | 50–100bb | g1 |
| A7 | twopair | 90% | 100% | 100% | 78% | 50–100bb | g2 |
| AQ | twopair | 92% | 100% | 100% | 78% | 50–100bb | g2 |
| A6 | twopair | 91% | 97% | 97% | 75% | 50–100bb | g2 |
| A5 | twopair | 85% | 88% | 87% | 67% | 50–100bb | g2 |
| 65 | twopair | 80% | 82% | 81% | 56% | 50–100bb | g2 |
| 75 | twopair | 80% | 80% | 79% | 55% | 50–100bb | g2 |
| 76 | twopair | 80% | 79% | 78% | 54% | 50–100bb | g2 |
| Q7 | twopair | 80% | 77% | 77% | 54% | 50–100bb | g2 |
| Q5 | twopair | 82% | 81% | 81% | 54% | 50–100bb | g2 |
| Q6 | twopair | 80% | 78% | 78% | 53% | 50–100bb | g2 |
| AJ | tpmk | 72% | 71% | 70% | 50% | 25–50bb | g3 |
| AT | tpmk | 63% | 60% | 60% | 47% | 25–50bb | g3 |
| AK | tpgk | 74% | 74% | 73% | 51% | 50–100bb | g3 |
| A9 | tpmk | 56% | 47% | 46% | 44% | 0–5bb | g4 |
| A8 | tpmk | 45% | 30% | 30% | 32% | Pot is too big | g4 |
| A2 | tpmk | 36% | 11% | 10% | 29% | Pot is too big | g4 |
| A3 | tpmk | 36% | 11% | 11% | 29% | Pot is too big | g4 |
| A4 | tpmk | 35% | 10% | 9% | 29% | Pot is too big | g4 |
| KK | pp1 | 21% | 0% | 0% | 20% | Pot is too big | g5 |
| KQ | mp | 21% | 0% | 0% | 17% | Pot is too big | g6 |
| QT | mp | 21% | 0% | 0% | 16% | Pot is too big | g6 |
| QJ | mp | 20% | 0% | 0% | 16% | Pot is too big | g6 |
| Q9 | mp | 20% | 0% | 0% | 15% | Pot is too big | g6 |
| Q8 | mp | 19% | 0% | 0% | 13% | Pot is too big | g6 |
| 99 | pp2 | 19% | 0% | 0% | 12% | Pot is too big | g7 |
| 88 | pp2 | 19% | 0% | 0% | 9% | Pot is too big | g7 |
| TT | pp2 | 19% | 0% | 0% | 12% | Pot is too big | g7 |
| JJ | pp2 | 18% | 0% | 0% | 12% | Pot is too big | g7 |
| K7 | bp | 14% | 0% | 0% | 9% | Pot is too big | g7 |
| J7 | bp | 14% | 0% | 0% | 10% | Pot is too big | g7 |
| T7 | bp | 13% | 0% | 0% | 9% | Pot is too big | g7 |
| 97 | bp | 13% | 0% | 0% | 9% | Pot is too big | g7 |
| 87 | bp | 11% | 0% | 0% | 8% | Pot is too big | g7 |
| K6 | bp | 6% | 0% | 0% | 5% | Pot is too big | g7 |
| 96 | bp | 5% | 0% | 0% | 3% | Pot is too big | g7 |
| 86 | bp | 5% | 0% | 0% | 2% | Pot is too big | g7 |
| 64 | bp | 5% | 0% | 0% | 1% | Pot is too big | g7 |
| K5 | bp | 3% | 0% | 0% | 1% | Pot is too big | g7 |
| 54 | bp | 3% | 0% | 0% | 1% | Pot is too big | g7 |
| 22 | pp3 | 3% | 0% | 0% | 1% | Pot is too big | g7 |
| 33 | pp3 | 3% | 0% | 0% | 1% | Pot is too big | g7 |
| 44 | pp3 | 3% | 0% | 0% | 1% | Pot is too big | g7 |
