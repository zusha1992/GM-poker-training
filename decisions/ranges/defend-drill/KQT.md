# Defend flop · KQT (Kd Qc Th)

BTN bets 2bb into 5.5bb. Answer by the solver's strategy and the EV of calling (Noam 2026-11-21): the solver calls 75%+ = Call, 25% or less = Fold; when it mixes, EV −0.5 to +0.5bb = Bluff-catch, more = Call, less = Fold. Source: TexasSolver (our solve); EV = both play the solver's strategy after the call (flop: the solve's dump stops at the turn, so hands are checked down from the river; approximate). Draft for Noam and Uri.

| Group | Hands | Share | EV of a call | Solver continues | Answer |
|---|---|---|---|---|---|
| Straight: A-high | AJo | 2.2% | +10.6bb | 100% | Call |
| Straight: K-high | J9 | 3.2% | +7.57bb | 100% | Call |
| Two pair | KQo, KT, QT | 4.4% | +5.44bb | 100% | Call |
| Pair + draw | QJ, JT | 4.7% | +3.75bb | 100% | Call |
| Top pair | KJ, K9, K8, K7s, K6s, K5s, K4s, K3s, K2s | 10.3% | +3.67bb | 100% | Call |
| Second pair | AQo, Q9, Q8s, Q7s, Q6s, Q5s, Q4s, Q3s, Q2s | 8.3% | +1.32bb | 100% | Call |
| Third pair or lower | AT, T9o, T8, T7s, T6s, T5s, T4s, T3s | 8.3% | +1.17bb | 99.2% | Call |
| Draws | A9s, A8s, A7s, A6s, J8s, J7s, J6s, J5s, J4s, J3s, J2s | 10.8% | +0.65bb | 93.1% | Call |
| Gutshots: A9o, A8o, A4s… | A9o, A8o, A4s, A3s, A2s | 8.2% | +0.15bb | 55.8% | Bluff-catch |
| Small pocket pairs | 99, 88, 77, 66, 55, 44, 33, 22 | 11.6% | -0.18bb | 7% | Fold |
| Gutshots: A7o, A6o, A5o… | A7o, A6o, A5o, A4o, 98, 97s, 96s, 95s | 12.2% | -0.37bb | 6.6% | Fold |
| No pair, no draw | 87, 86s, 85s, 84s, 76, 75s, 74s, 65s, 64s, 63s, 54s +5 more | 15.9% | -1.37bb | 0% | Fold |
