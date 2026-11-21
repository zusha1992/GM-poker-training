# Defend flop · QT7 (Qh Td 7s)

BTN bets 2bb into 5.5bb. Answer by the solver's strategy and the EV of calling (Noam 2026-11-21): the solver calls 75%+ = Call, 25% or less = Fold; when it mixes, EV −0.5 to +0.5bb = Bluff-catch, more = Call, less = Fold. Source: TexasSolver (our solve); EV = both play the solver's strategy after the call (flop: the solve's dump stops at the turn, so hands are checked down from the river; approximate). Draft for Noam and Uri.

| Group | Hands | Share | EV of a call | Solver continues | Answer |
|---|---|---|---|---|---|
| Two pair or a set | QT, Q7s, T7s, 77 | 3.4% | +7.88bb | 100% | Call |
| Top pair | AQo, KQo, QJ, Q9, Q8s, Q6s, Q5s, Q4s, Q3s, Q2s | 11.6% | +4.9bb | 100% | Call |
| Second pair | AT, KT, JT, T9o, T8, T6s, T5s, T4s, T3s | 11.7% | +3.03bb | 100% | Call |
| Third pair or lower | A7, K7s, J7s, 97s, 87, 76, 75s, 74s | 8.5% | +1.53bb | 100% | Call |
| Draws | AJo, KJ, K9, J9, J8s, 98, 96s, 86s | 15.8% | +1.44bb | 99.3% | Call |
| Ace-high | A9s, A8s | 2.1% | +0.3bb | 77% | Call |
| Pocket pairs 99, 88, 66, 55, 44, 33, 22 | 99, 88, 66, 55, 44, 33, 22 | 10.1% | +0.08bb | 97.8% | Call |
| Ace-high and worse | A9o, A8o, A6, A5o, A4, A3s, A2s, K8, K6s, K5s, K4s +19 more | 36.8% | -0.62bb | 2.4% | Fold |
