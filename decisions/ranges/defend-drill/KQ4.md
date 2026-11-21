# Defend flop · KQ4 (Kd Qd 4s)

BTN bets 2bb into 5.5bb. Answer by the solver's strategy and the EV of calling (Noam 2026-11-21): the solver calls 75%+ = Call, 25% or less = Fold; when it mixes, EV −0.5 to +0.5bb = Bluff-catch, more = Call, less = Fold. Source: TexasSolver (our solve); EV = both play the solver's strategy after the call (flop: the solve's dump stops at the turn, so hands are checked down from the river; approximate). Draft for Noam and Uri.

| Group | Hands | Share | EV of a call | Solver continues | Answer |
|---|---|---|---|---|---|
| Two pair or a set | KQo, K4s, Q4s, 44 | 2.9% | +8.56bb | 100% | Call |
| Top pair | KJ, KT, K9, K8, K7s, K6s, K5s, K3s, K2s | 11.3% | +4.91bb | 100% | Call |
| Pair + draw | A4s, J4s, T4s, 84s, 74s, 64s, 54s, 43s, 42s | 1.8% | +4.25bb | 100% | Call |
| Second pair | AQo, QJ, QT, Q9, Q8s, Q7s, Q6s, Q5s, Q3s, Q2s | 12.3% | +2.59bb | 100% | Call |
| Draws | AJo, AT, A9s, A8s, A7s, A6s, A3s, A2s, JT, J9, J8s +25 more | 21% | +1.44bb | 89.8% | Call |
| Third pair or lower | A4, J4s, T4s, 84s, 74s, 64s, 54s, 43s, 42s | 4.6% | +0.49bb | 100% | Call |
| Pocket pairs under the top card | 99, 88, 77, 66, 55 | 6.4% | +0.38bb | 98.8% | Call |
| Small pocket pairs | 33, 22 | 3.4% | -0.06bb | 59.5% | Bluff-catch |
| Ace-high and worse | A9, A8, A7, A6, A5o, A3s, A2s, J8s, J7s, J6s, J5s +21 more | 36.2% | -0.77bb | 7.5% | Fold |
