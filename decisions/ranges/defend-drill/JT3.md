# Defend flop · JT3 (Js Ts 3c)

BTN bets 2bb into 5.5bb. Answer by the solver's strategy and the EV of calling (Noam 2026-11-21): the solver calls 75%+ = Call, 25% or less = Fold; when it mixes, EV −0.5 to +0.5bb = Bluff-catch, more = Call, less = Fold. Source: TexasSolver (our solve); EV = both play the solver's strategy after the call (flop: the solve's dump stops at the turn, so hands are checked down from the river; approximate). Draft for Noam and Uri.

| Group | Hands | Share | EV of a call | Solver continues | Answer |
|---|---|---|---|---|---|
| Two pair or a set | JT, J3s, T3s, 33 | 3% | +8.23bb | 100% | Call |
| Pair + draw | A3s, K3s, Q3s, 63s, 53s, 43s, 32s | 1.6% | +4.59bb | 100% | Call |
| Top pair | AJo, KJ, QJ, J9, J8s, J7s, J6s, J5s, J4s, J2s | 12.7% | +4.1bb | 100% | Call |
| Second pair | AT, KT, QT, T9o, T8, T7s, T6s, T5s, T4s | 12.1% | +2.55bb | 100% | Call |
| Draws | AQo, A9s, A8s, A7s, A6s, A4s, A2s, KQo, K9, K8s, K7s +27 more | 18.8% | +2.08bb | 100% | Call |
| Third pair or lower | A3s, K3s, Q3s, 63s, 53s, 43s, 32s | 3.3% | +0.64bb | 100% | Call |
| Pocket pairs 99, 88, 77, 66, 55, 44, 22 | 99, 88, 77, 66, 55, 44, 22 | 9.8% | +0.37bb | 95.1% | Call |
| Ace-high | A9, A8, A7, A6, A5o, A4, A2s | 18% | -0.09bb | 28.2% | Bluff-catch |
| Gutshots | 97s, 87 | 2.1% | -0.1bb | 45.2% | Bluff-catch |
| No pair, no draw | K8, K7s, K6s, K5s, K4s, K2s, Q7s, Q6s, Q5s, Q4s, Q2s +13 more | 18.6% | -1bb | 0.5% | Fold |
