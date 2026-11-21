# Defend turn · JT3-6c (Js Ts 3c 6c)

BTN bets 6bb into 9.1bb. Answer by the solver's strategy and the EV of calling (Noam 2026-11-21): the solver calls 75%+ = Call, 25% or less = Fold; when it mixes, EV −0.5 to +0.5bb = Bluff-catch, more = Call, less = Fold. Source: TexasSolver (our solve); EV = both play the solver's strategy after the call. Draft for Noam and Uri.

| Group | Hands | Share | EV of a call | Solver continues | Answer |
|---|---|---|---|---|---|
| Two pair or better | J6s, T6s, 66, 63s | 4.1% | +15.9bb | 100% | Call |
| Pair + draw | ATs, A6s, A3s, KTs, K6s, K3s, QTs, Q6s, Q3s, T8s, T7s +10 more | 4.9% | +5.41bb | 100% | Call |
| Top pair | AJo, KJ, QJ, J9, J8s, J7s, J5s, J4s, J2s | 18.9% | +5.35bb | 100% | Call |
| Draws | A9s, A8s, A7s, A4s, A2s, KQo, K9s, K8s, K7s, K5s, K4s +17 more | 13.4% | +0.99bb | 95.2% | Call |
| Second pair and weaker pairs | AT, A6, KT, K6s, QT, Q6s, T9o, T8, T7s, T5s, T4s +7 more | 22.4% | +0.37bb | 96.6% | Call |
| Third pair or lower: A3s, 53s | A3s, 53s | 1.7% | -0.29bb | 60% | Bluff-catch |
| Third pair or lower: K3s, Q3s | K3s, Q3s | 1.8% | -0.63bb | 50.8% | Fold |
| Pocket pairs 99, 88, 77, 55, 44, 22 | 99, 88, 77, 55, 44, 22 | 14.6% | -0.87bb | 17.3% | Fold |
| Gutshots | AQo, K9, Q8s, 97s, 87, 75s, 74s, 52s, 42s | 7% | -2.04bb | 3.7% | Fold |
| Ace-high and worse | A9, A8, A7, A5o, A4, A2s, K8, K7s, K5s, K4s, K2s +6 more | 11.2% | -3.07bb | 0% | Fold |
