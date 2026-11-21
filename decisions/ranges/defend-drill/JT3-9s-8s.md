# Defend river · JT3-9s-8s (Js Ts 3c 9s 8s)

BTN bets 14bb into 21.1bb. Answer by the solver's strategy and the EV of calling (Noam 2026-11-21): the solver calls 75%+ = Call, 25% or less = Fold; when it mixes, EV −0.5 to +0.5bb = Bluff-catch, more = Call, less = Fold. Source: TexasSolver (our solve); EV = both play the solver's strategy after the call. Draft for Noam and Uri.

| Group | Hands | Share | EV of a call | Solver continues | Answer |
|---|---|---|---|---|---|
| Straight flush | A7s, KQo, QJo, QTo, Q9o, Q7s, Q6s, Q5s, Q4s, Q3s, Q2s +2 more | 9.3% | +34.27bb | 100% | Call |
| Big flush | AJo, ATo, A9o, A8o, A6s, A4s, A3s, KQo, KJo, KTo, K9o +4 more | 9.2% | +23.63bb | 100% | Call |
| Small flush | 66, 63s, 55, 53s, 44, 43s | 2.7% | +4.06bb | 100% | Call |
| Straight: Q-high | QJ, QT, Q9, Q8s, Q7s, Q6s, Q5s, Q4s, Q3s, Q2s | 21.7% | +0.09bb | 93.4% | Call |
| Two pair or a set | J9, J8s, T9o, T8, 99, 98, 88 | 20.8% | -0.02bb | 53.5% | Bluff-catch |
| Straight: J-high: 77 | 77 | 1.4% | -0.05bb | 75.6% | Call |
| Straight: J-high: A7s, K7s, J7s… | A7s, K7s, J7s, 87 | 2.9% | -0.2bb | 59.2% | Bluff-catch |
| Straight: K-high | KQo | 3.2% | -0.4bb | 63.3% | Bluff-catch |
| Second pair | AT, KT | 7.3% | -0.71bb | 4.6% | Fold |
| Top pair | AJo, KJ, J6s, J5s, J4s, J2s | 12.5% | -0.83bb | 3.9% | Fold |
| Third pair or lower | A9o, A8, A3s, K9, K8s, K3s, 85s, 63s, 53s, 43s | 5.5% | -1.41bb | 1.4% | Fold |
| Pocket pairs under the top card | 66, 55, 44 | 3.3% | -2.23bb | 0% | Fold |
| Ace-high and worse | A6s, A4s, K6s, K5s, K4s | 0.3% | -8.84bb | 0% | Fold |
