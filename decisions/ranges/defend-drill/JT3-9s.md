# Defend turn · JT3-9s (Js Ts 3c 9s)

BTN bets 6bb into 9.1bb. Answer by the solver's strategy and the EV of calling (Noam 2026-11-21): the solver calls 75%+ = Call, 25% or less = Fold; when it mixes, EV −0.5 to +0.5bb = Bluff-catch, more = Call, less = Fold. Source: TexasSolver (our solve); EV = both play the solver's strategy after the call. Draft for Noam and Uri.

| Group | Hands | Share | EV of a call | Solver continues | Answer |
|---|---|---|---|---|---|
| Big flush or better | A8s, A7s, A6s, A4s, A3s, A2s, K8s, K7s, K6s, K5s, K4s +10 more | 3.5% | +23.29bb | 100% | Call |
| Small flush | 86s, 85s, 76s, 75s, 74s, 65s, 64s, 63s, 54s, 53s, 52s +3 more | 2% | +15.15bb | 100% | Call |
| Straight: K-high | KQo | 3.4% | +10.52bb | 100% | Call |
| Straight: Q-high | Q8s | 1% | +7.24bb | 100% | Call |
| Straight: J-high | 87 | 0.7% | +6.91bb | 100% | Call |
| Two pair or a set | J9, T9o, 99 | 6.1% | +4.6bb | 100% | Call |
| Pair + draw | ATo, A9o, KTo, K9o, QT, Q9, Q3s, T8, 98 | 15.8% | +1.84bb | 98.9% | Call |
| Top pair | AJo, KJ, QJ, J8s, J7s, J6s, J5s, J4s, J2s | 17.4% | +1.58bb | 84% | Call |
| Flush draws | AQo, A8o, A7o, A6o, A5o, A4o, K8o | 2.8% | +1.09bb | 71.9% | Call |
| Pocket pairs under the top card: 88 | 88 | 2.2% | +0.67bb | 50% | Call |
| Second pair: KT | KT | 2.7% | +0.23bb | 100% | Call |
| Pocket pairs under the top card: 77 | 77 | 2.8% | -0.22bb | 50% | Bluff-catch |
| Second pair: AT, T7s, T6s… | AT, T7s, T6s, T5s, T4s | 7.1% | -0.6bb | 3.3% | Fold |
| Third pair or lower | A9, A3s, K9, K3s, 97s, 96s, 95s, 63s, 53s, 43s, 32s | 10.4% | -1.02bb | 11.4% | Fold |
| Pocket pairs 66, 55, 44, 22 | 66, 55, 44, 22 | 12% | -1.15bb | 35.4% | Fold |
| Draws | AQo, A8, A7, K8, K7s, K6s, K5s, K4s, K2s, Q7s, Q6s +8 more | 6.6% | -2.77bb | 1.1% | Fold |
| Ace-high and worse | A6, A5o, A4, A2s, 65s, 64s, 54s, 52s, 42s | 3.7% | -4.09bb | 0% | Fold |
