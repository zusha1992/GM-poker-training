# A76-Qc-5h@xx river (A♥ 7♥ 6♣ Q♣ 5♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: KQ–K8, K6, K4–K2, QJ–Q8, Q6, JT–J8, T9, T8, 98, 96, 86, 64, 43 | 98% | 99% | 99% | 91% |
| g2 | 25–50bb | Straights | 98, 43 | 90% | 96% | 93% | 65% |
| g3 | 15–25bb | Sets | AA, QQ, 77–55 | 89% | 95% | 91% | 61% |
| g4 | 15–25bb | Two pair | AQ, A7–A5, Q7–Q5, 76, 75, 65 | 84% | 89% | 82% | 60% |
| g5 | 0–5bb | Top pair | AK, AJ–A8, A4–A2 | 72% | 66% | 37% | 60% |
| g6 | 0–5bb | Big pocket pairs | KK | 60% | 35% | 0% | 57% |
| g7 | 0–5bb | Second pair | KQ, QJ–Q8 | 58% | 30% | 0% | 56% |
| g8 | 0–5bb | Small pairs | JJ–88, 44–22, K7–K5, J7, T7, 97, 96, 87, 86, 64, 54 | 44% | 15% | 0% | 35% |

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
| Q8+fl | flush | 98% | 100% | 100% | 91% | 50–100bb | g1 |
| QT+fl | flush | 98% | 100% | 100% | 91% | 50–100bb | g1 |
| QJ+fl | flush | 98% | 100% | 100% | 91% | 50–100bb | g1 |
| Q9+fl | flush | 98% | 100% | 100% | 90% | 50–100bb | g1 |
| Q6+fl | flush | 98% | 100% | 100% | 90% | 50–100bb | g1 |
| JT+fl | flush | 96% | 98% | 96% | 83% | 50–100bb | g1 |
| J8+fl | flush | 97% | 98% | 97% | 83% | 50–100bb | g1 |
| 43+fl | flushlo | 95% | 98% | 97% | 82% | 50–100bb | g1 |
| 98+fl | flushlo | 95% | 98% | 97% | 82% | 50–100bb | g1 |
| J9+fl | flush | 97% | 98% | 96% | 82% | 50–100bb | g1 |
| 86+fl | flushlo | 95% | 98% | 97% | 82% | 50–100bb | g1 |
| T8+fl | flushlo | 95% | 98% | 96% | 81% | 50–100bb | g1 |
| 64+fl | flushlo | 95% | 98% | 97% | 81% | 50–100bb | g1 |
| T9+fl | flushlo | 95% | 98% | 96% | 80% | 50–100bb | g1 |
| 96+fl | flushlo | 95% | 98% | 97% | 80% | 50–100bb | g1 |
| 98 | straight | 90% | 96% | 94% | 68% | 50–100bb | g2 |
| 43 | straight | 89% | 96% | 93% | 61% | 50–100bb | g2 |
| 77 | twopair | 89% | 95% | 92% | 61% | 50–100bb | g3 |
| AA | twopair | 87% | 93% | 83% | 61% | 50–100bb | g3 |
| 55 | twopair | 87% | 94% | 91% | 60% | 50–100bb | g3 |
| QQ | twopair | 90% | 97% | 95% | 60% | 50–100bb | g3 |
| 66 | twopair | 89% | 96% | 93% | 60% | 50–100bb | g3 |
| A5 | twopair | 83% | 86% | 76% | 62% | 50–100bb | g4 |
| A7 | twopair | 86% | 92% | 86% | 61% | 50–100bb | g4 |
| AQ | twopair | 86% | 94% | 90% | 61% | 50–100bb | g4 |
| 65 | twopair | 80% | 85% | 78% | 60% | 50–100bb | g4 |
| A6 | twopair | 85% | 89% | 80% | 60% | 50–100bb | g4 |
| 76 | twopair | 82% | 86% | 79% | 59% | 50–100bb | g4 |
| 75 | twopair | 80% | 86% | 79% | 59% | 50–100bb | g4 |
| Q7 | twopair | 81% | 85% | 77% | 56% | 50–100bb | g4 |
| Q5 | twopair | 81% | 84% | 76% | 55% | 50–100bb | g4 |
| Q6 | twopair | 81% | 85% | 77% | 54% | 50–100bb | g4 |
| A9 | tpmk | 73% | 70% | 45% | 60% | 50–100bb | g5 |
| A4 | tpmk | 69% | 50% | 8% | 60% | 50–100bb | g5 |
| A8 | tpmk | 72% | 60% | 27% | 60% | 50–100bb | g5 |
| AT | tpmk | 75% | 79% | 60% | 60% | 50–100bb | g5 |
| A3 | tpmk | 68% | 49% | 9% | 60% | 50–100bb | g5 |
| A2 | tpmk | 69% | 49% | 8% | 59% | 50–100bb | g5 |
| AK | tpgk | 77% | 85% | 72% | 59% | 50–100bb | g5 |
| AJ | tpmk | 76% | 85% | 70% | 59% | 50–100bb | g5 |
| KK | pp1 | 60% | 35% | 0% | 57% | 50–100bb | g6 |
| Q9 | mp | 56% | 28% | 0% | 56% | 50–100bb | g7 |
| Q8 | mp | 56% | 25% | 0% | 48% | 0–5bb | g7 |
| KQ | mp | 60% | 32% | 0% | 56% | 50–100bb | g7 |
| QJ | mp | 58% | 30% | 0% | 56% | 50–100bb | g7 |
| QT | mp | 57% | 30% | 0% | 56% | 50–100bb | g7 |
| 99 | pp2 | 50% | 23% | 0% | 40% | 0–5bb | g8 |
| 88 | pp2 | 50% | 22% | 0% | 39% | 0–5bb | g8 |
| TT | pp2 | 50% | 24% | 0% | 39% | 0–5bb | g8 |
| JJ | pp2 | 50% | 23% | 0% | 37% | 0–5bb | g8 |
| 97 | bp | 48% | 20% | 0% | 38% | 0–5bb | g8 |
| T7 | bp | 48% | 20% | 0% | 39% | 0–5bb | g8 |
| 87 | bp | 48% | 18% | 0% | 39% | 0–5bb | g8 |
| J7 | bp | 47% | 20% | 0% | 37% | 0–5bb | g8 |
| K7 | bp | 47% | 20% | 0% | 34% | 0–5bb | g8 |
| 86 | bp | 44% | 15% | 0% | 34% | 0–5bb | g8 |
| 96 | bp | 44% | 15% | 0% | 36% | 0–5bb | g8 |
| K6 | bp | 43% | 15% | 0% | 33% | 0–5bb | g8 |
| 64 | bp | 42% | 13% | 0% | 34% | 0–5bb | g8 |
| K5 | bp | 38% | 10% | 0% | 26% | 0–5bb | g8 |
| 54 | bp | 37% | 7% | 0% | 32% | 0–5bb | g8 |
| 44 | pp3 | 35% | 4% | 0% | 32% | 0–5bb | g8 |
| 33 | pp3 | 33% | 2% | 0% | 33% | 0–5bb | g8 |
| 22 | pp3 | 30% | 1% | 0% | 30% | 0–5bb | g8 |
