# K54-3s-2s@xx river (K♠ 5♥ 4♣ 3♠ 2♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♠ flushes: AQ–A4, QJ–Q5, JT–J7, T9–T7, 98–96, 87, 86, 76, 75, 65, 64, 54 | 98% | 98% | 98% | 92% |
| g2 | 25–50bb | Straights | AA, 66, AK–A2, K6, Q6, 96, 86, 76, 65, 64 | 75% | 70% | 68% | 60% |
| g3 | 0–5bb | Sets | KK, 55–22 | 57% | 23% | 18% | 34% |
| g4 | 0–5bb | Two pair | K5–K2, 54, 43 | 53% | 17% | 11% | 32% |
| g5 | 0–5bb | Top pair | KQ–K7 | 44% | 9% | 3% | 32% |
| g6 | 0–5bb | Big pocket pairs | QQ–TT | 37% | 6% | 0% | 30% |
| g7 | 0–5bb | Medium pairs & second pair | 99–77, Q5, 75 | 37% | 6% | 0% | 31% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AQ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A6+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| Q9+fl | flush | 99% | 98% | 98% | 94% | 50–100bb | g1 |
| Q7+fl | flush | 99% | 98% | 97% | 94% | 50–100bb | g1 |
| Q8+fl | flush | 99% | 98% | 97% | 94% | 50–100bb | g1 |
| QT+fl | flush | 99% | 98% | 97% | 94% | 50–100bb | g1 |
| Q6+fl | flush | 99% | 97% | 97% | 94% | 50–100bb | g1 |
| QJ+fl | flush | 99% | 97% | 97% | 94% | 50–100bb | g1 |
| Q5+fl | flush | 98% | 97% | 97% | 92% | 50–100bb | g1 |
| J7+fl | flush | 97% | 97% | 97% | 88% | 50–100bb | g1 |
| J9+fl | flush | 97% | 97% | 97% | 88% | 50–100bb | g1 |
| J8+fl | flush | 96% | 97% | 97% | 88% | 50–100bb | g1 |
| 98+fl | flushlo | 96% | 98% | 98% | 88% | 50–100bb | g1 |
| 87+fl | flushlo | 96% | 97% | 98% | 88% | 50–100bb | g1 |
| JT+fl | flush | 97% | 97% | 96% | 87% | 50–100bb | g1 |
| T8+fl | flushlo | 96% | 97% | 97% | 87% | 50–100bb | g1 |
| T7+fl | flushlo | 96% | 98% | 98% | 87% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 97% | 97% | 87% | 50–100bb | g1 |
| 75+fl | flushlo | 95% | 97% | 97% | 87% | 50–100bb | g1 |
| T9+fl | flushlo | 95% | 98% | 98% | 86% | 50–100bb | g1 |
| 97+fl | flushlo | 96% | 98% | 98% | 86% | 50–100bb | g1 |
| 76+fl | flushlo | 95% | 97% | 97% | 86% | 50–100bb | g1 |
| 96+fl | flushlo | 96% | 97% | 97% | 86% | 50–100bb | g1 |
| 86+fl | flushlo | 95% | 97% | 97% | 85% | 50–100bb | g1 |
| 64+fl | flushlo | 95% | 97% | 96% | 85% | 50–100bb | g1 |
| 65+fl | flushlo | 95% | 97% | 96% | 84% | 50–100bb | g1 |
| 66 | straight | 89% | 95% | 95% | 79% | 50–100bb | g2 |
| 76 | straight | 90% | 96% | 95% | 78% | 50–100bb | g2 |
| K6 | straight | 87% | 95% | 95% | 77% | 50–100bb | g2 |
| 65 | straight | 87% | 95% | 95% | 76% | 50–100bb | g2 |
| 86 | straight | 87% | 96% | 94% | 76% | 50–100bb | g2 |
| 96 | straight | 86% | 95% | 95% | 76% | 50–100bb | g2 |
| 64 | straight | 88% | 95% | 95% | 76% | 50–100bb | g2 |
| Q6 | straight | 87% | 94% | 95% | 76% | 50–100bb | g2 |
| A6 | straight | 87% | 96% | 95% | 75% | 50–100bb | g2 |
| AA | straight | 73% | 68% | 65% | 58% | 50–100bb | g2 |
| A3 | straight | 71% | 63% | 60% | 56% | 50–100bb | g2 |
| A8 | straight | 72% | 63% | 60% | 55% | 50–100bb | g2 |
| AK | straight | 70% | 62% | 58% | 55% | 50–100bb | g2 |
| A5 | straight | 72% | 63% | 60% | 55% | 50–100bb | g2 |
| A4 | straight | 72% | 63% | 60% | 55% | 50–100bb | g2 |
| AJ | straight | 71% | 64% | 60% | 55% | 50–100bb | g2 |
| A9 | straight | 71% | 64% | 61% | 55% | 50–100bb | g2 |
| A2 | straight | 71% | 63% | 60% | 55% | 50–100bb | g2 |
| AT | straight | 71% | 64% | 61% | 55% | 50–100bb | g2 |
| AQ | straight | 71% | 63% | 61% | 54% | 50–100bb | g2 |
| A7 | straight | 72% | 64% | 61% | 54% | 50–100bb | g2 |
| 55 | twopair | 59% | 27% | 21% | 33% | 0–5bb | g3 |
| 44 | twopair | 59% | 24% | 18% | 34% | 0–5bb | g3 |
| 33 | twopair | 57% | 22% | 17% | 33% | 0–5bb | g3 |
| KK | twopair | 55% | 23% | 16% | 34% | 0–5bb | g3 |
| 22 | twopair | 55% | 21% | 16% | 34% | 0–5bb | g3 |
| K4 | twopair | 54% | 17% | 12% | 32% | 0–5bb | g4 |
| K2 | twopair | 53% | 16% | 10% | 33% | 0–5bb | g4 |
| K3 | twopair | 53% | 17% | 12% | 34% | 0–5bb | g4 |
| 43 | twopair | 52% | 15% | 9% | 32% | 0–5bb | g4 |
| 54 | twopair | 52% | 17% | 12% | 29% | 0–5bb | g4 |
| K5 | twopair | 52% | 17% | 12% | 32% | 0–5bb | g4 |
| KQ | tpgk | 47% | 10% | 5% | 31% | 0–5bb | g5 |
| KJ | tpmk | 45% | 10% | 3% | 32% | 0–5bb | g5 |
| KT | tpmk | 44% | 10% | 3% | 32% | 0–5bb | g5 |
| K9 | tpmk | 42% | 10% | 3% | 32% | 0–5bb | g5 |
| K8 | tpmk | 41% | 8% | 1% | 33% | 0–5bb | g5 |
| K7 | tpmk | 40% | 7% | 0% | 32% | 0–5bb | g5 |
| JJ | pp1 | 37% | 7% | 0% | 31% | 0–5bb | g6 |
| TT | pp1 | 37% | 7% | 0% | 33% | 0–5bb | g6 |
| QQ | pp1 | 36% | 5% | 0% | 27% | 0–5bb | g6 |
| 88 | pp1 | 38% | 7% | 0% | 33% | 0–5bb | g7 |
| 77 | pp1 | 37% | 5% | 0% | 31% | 0–5bb | g7 |
| 99 | pp1 | 37% | 7% | 0% | 33% | 0–5bb | g7 |
| 75 | mp | 34% | 4% | 0% | 26% | 0–5bb | g7 |
| Q5 | mp | 33% | 4% | 0% | 25% | 0–5bb | g7 |
