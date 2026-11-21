# Defend river · QT7-5d-2c (Qh Td 7s 5d 2c)

BTN bets 14bb into 21.1bb. Answer by the solver's strategy and the EV of calling (Noam 2026-11-21): the solver calls 75%+ = Call, 25% or less = Fold; when it mixes, EV −0.5 to +0.5bb = Bluff-catch, more = Call, less = Fold. Source: TexasSolver (our solve); EV = both play the solver's strategy after the call. Draft for Noam and Uri.

| Group | Hands | Share | EV of a call | Solver continues | Answer |
|---|---|---|---|---|---|
| Two pair or better | Q5s, Q2s, T5s, 75s, 22 | 4.2% | +33.05bb | 100% | Call |
| Top pair | KQo, QJ, Q9, Q8s, Q6s, Q4s, Q3s | 9.9% | +29.49bb | 100% | Call |
| Second pair: AT, JT, T6s… | AT, JT, T6s, T4s, T3s | 26.9% | +3.23bb | 91% | Call |
| Third pair or lower: A7 | A7 | 7.8% | +0.78bb | 59.2% | Call |
| Ace-high | AJo | 7.1% | +0.43bb | 44.7% | Bluff-catch |
| Second pair: KT, T9o, T8 | KT, T9o, T8 | 22.6% | -0.03bb | 40.1% | Bluff-catch |
| Third pair or lower: K7s, J7s, 97s… | K7s, J7s, 97s, 87, 76, 74s | 11.7% | -1.14bb | 25.4% | Fold |
| Pocket pairs under the top card | 99, 88, 66, 33 | 3.8% | -1.85bb | 11.5% | Fold |
| Ace-high and worse | A9s, A8s, A6s, A3s, KJ, K9s | 6% | -2.09bb | 3.6% | Fold |
