# Defend river · JT3-6c-Qs (Js Ts 3c 6c Qs)

BTN bets 14bb into 21.1bb. Answer by the solver's strategy and the EV of calling (Noam 2026-11-21): the solver calls 75%+ = Call, 25% or less = Fold; when it mixes, EV −0.5 to +0.5bb = Bluff-catch, more = Call, less = Fold. Source: TexasSolver (our solve); EV = both play the solver's strategy after the call. Draft for Noam and Uri.

| Group | Hands | Share | EV of a call | Solver continues | Answer |
|---|---|---|---|---|---|
| Two pair or better | A9s, A8s, A7s, A6s, A4s, A3s, A2s, K9s, K8s, K7s, K6s +20 more | 21.2% | +26.04bb | 100% | Call |
| Top pair | AQo, KQo, Q9, Q8s, Q7s | 8.3% | +2.85bb | 100% | Call |
| Third pair or lower: ATs, KTo, T9o | ATs, KTo, T9o | 13.8% | +0.61bb | 56.9% | Call |
| Third pair or lower: ATo, A6o, KTs… | ATo, A6o, KTs, T8, T7s, T5s, T4s, 96s | 17.7% | +0.02bb | 42.3% | Bluff-catch |
| Second pair | AJo, KJ, J9, J8s, J7s, J5s, J4s, J2s | 24.5% | -0.13bb | 49% | Bluff-catch |
| Third pair or lower: A6s, A3s, K6s… | A6s, A3s, K6s, K3s, 86s, 76s, 65s, 64s, 53s, 43s, 32s | 7% | -0.69bb | 7.2% | Fold |
| Pocket pairs under the top card | 99, 88, 77 | 4.6% | -1.25bb | 22.1% | Fold |
| Ace-high and worse | A9s, A8s, A7s, A4s, A2s, K8s, K7s, 97s, 54s, 52s, 42s | 2.9% | -3.63bb | 3.2% | Fold |
