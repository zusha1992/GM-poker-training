# Defend turn · JT3-6c (Js Ts 3c 6c)

BTN bets 6bb into 9.1bb. Answer by the EV of calling (Noam 2026-11-21): +0.5bb or more = Call, −0.5 to +0.5 = Bluff-catch, −0.5 or less = Fold. Source: TexasSolver (our solve); EV = both play the solver's strategy after the call. Draft for Noam and Uri.

| Group | Hands | Share | EV of a call | Solver continues | Answer |
|---|---|---|---|---|---|
| Two pair or better | J6s, T6s, 66, 63s | 4.1% | +15.9bb | 100% | Call |
| Pair + draw | ATs, A6s, A3s, KTs, K6s, K3s, QTs, Q6s, Q3s, T8s, T7s +10 more | 4.9% | +5.41bb | 100% | Call |
| Top pair | AJo, KJ, QJ, J9, J8s, J7s, J5s, J4s, J2s | 18.9% | +5.35bb | 100% | Call |
| Draws: A9s, A8s, A7s… | A9s, A8s, A7s, A4s, A2s, KQo, K9s, K8s, K7s, K5s, K4s +11 more | 7.7% | +2.02bb | 100% | Call |
| Second pair and weaker pairs: AT, A6, KTo… | AT, A6, KTo, K6s, QTo, 96s, 76s, 65s | 11.5% | +0.64bb | 97.2% | Call |
| Draws: Q7s, Q5s, Q4s… | Q7s, Q5s, Q4s, Q2s, 98, 95s, 85s | 2.2% | +0.09bb | 85.6% | Bluff-catch |
| Second pair and weaker pairs: A3s, KTs, QTs… | A3s, KTs, QTs, Q6s, T9o, T8, T7s, T5s, T4s, 86s, 64s +2 more | 11.8% | +0.07bb | 92.1% | Bluff-catch |
| Third pair or lower | K3s, Q3s, 43s | 2.5% | -0.6bb | 58% | Fold |
| Pocket pairs 99, 88, 77, 55, 44, 22 | 99, 88, 77, 55, 44, 22 | 14.6% | -0.87bb | 17.3% | Fold |
| Draws: AQo, K9, Q9… | AQo, K9, Q9, Q8s, 97s, 87, 75s, 74s, 52s, 42s | 10.5% | -1.59bb | 32.7% | Fold |
| Ace-high and worse | A9, A8, A7, A5o, A4, A2s, K8, K7s, K5s, K4s, K2s +6 more | 11.2% | -3.07bb | 0% | Fold |
