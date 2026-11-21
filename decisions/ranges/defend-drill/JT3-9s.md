# Defend turn · JT3-9s (Js Ts 3c 9s)

BTN bets 6bb into 9.1bb. Answer by the solver's strategy and the EV of calling (Noam 2026-11-21): the solver calls 75%+ = Call, 25% or less = Fold; when it mixes, EV −0.5 to +0.5bb = Bluff-catch, more = Call, less = Fold. Source: TexasSolver (our solve); EV = both play the solver's strategy after the call. Draft for Noam and Uri.

| Group | Hands | Share | EV of a call | Solver continues | Answer |
|---|---|---|---|---|---|
| Two pair or better | A8s, A7s, A6s, A4s, A3s, A2s, KQo, K8s, K7s, K6s, K5s +28 more | 16.6% | +11.24bb | 100% | Call |
| Top pair: AJo, KJ, QJ… | AJo, KJ, QJ, J8s, J7s | 12.4% | +2.26bb | 100% | Call |
| Pair + draw | ATo, A9o, KTo, K9o, QT, Q9, Q3s, T8, 98 | 15.8% | +1.84bb | 98.9% | Call |
| Flush draws: AQo, A8o, A7o… | AQo, A8o, A7o, K8o | 1.7% | +1.84bb | 85.8% | Call |
| Pocket pairs under the top card: 88 | 88 | 2.2% | +0.67bb | 50% | Call |
| Second pair | KT | 2.7% | +0.23bb | 100% | Call |
| Flush draws: A6o, A5o, A4o | A6o, A5o, A4o | 1.1% | -0.11bb | 49.5% | Bluff-catch |
| Top pair: J6s, J5s, J4s… | J6s, J5s, J4s, J2s | 4.9% | -0.15bb | 43.5% | Bluff-catch |
| Pocket pairs under the top card: 77 | 77 | 2.8% | -0.22bb | 50% | Bluff-catch |
| Third pair or lower | K9 | 2.8% | -0.32bb | 42% | Bluff-catch |
| Second pair and weaker pairs | AT, A9, A3s, K3s, T7s, T6s, T5s, T4s, 97s, 96s, 95s +4 more | 14.7% | -0.95bb | 1.6% | Fold |
| Pocket pairs 66, 55, 44, 22 | 66, 55, 44, 22 | 12% | -1.15bb | 35.4% | Fold |
| Draws | AQo, A8, A7, K8, K7s, K6s, K5s, K4s, K2s, Q7s, Q6s +8 more | 6.6% | -2.77bb | 1.1% | Fold |
| Ace-high and worse | A6, A5o, A4, A2s, 65s, 64s, 54s, 52s, 42s | 3.7% | -4.09bb | 0% | Fold |
