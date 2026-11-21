# Defend river · JT3-2h-9s (Js Ts 3c 2h 9s)

BTN bets 24bb into 36.5bb. Answer by the solver's strategy and the EV of calling (Noam 2026-11-21): the solver calls 75%+ = Call, 25% or less = Fold; when it mixes, EV −0.5 to +0.5bb = Bluff-catch, more = Call, less = Fold. Source: TexasSolver (our solve); EV = both play the solver's strategy after the call. Draft for Noam and Uri.

| Group | Hands | Share | EV of a call | Solver continues | Answer |
|---|---|---|---|---|---|
| Big flush or better | A8s, A7s, A6s, A4s, A3s, A2s, K7s, K3s, K2s, Q8s, Q3s +2 more | 1.8% | +58.53bb | 100% | Call |
| Small flush | 65s, 64s, 63s, 54s, 53s, 52s, 43s, 42s, 32s | 1.7% | +54bb | 100% | Call |
| Straight: K-high | KQo | 6.2% | +51.85bb | 100% | Call |
| Straight: Q-high | Q8s | 0.6% | +49.9bb | 100% | Call |
| Straight: J-high | 87s | 0.1% | +49.81bb | 100% | Call |
| Two pair | J9, J2s, 32s | 6.9% | +41.06bb | 100% | Call |
| Top pair | AJo, KJ, QJ, J8s, J7s, J6s, J5s, J4s | 39% | +0.91bb | 75.6% | Call |
| Second pair: QTo | QTo | 5.9% | +0.8bb | 60% | Call |
| Second pair: KTo, QTs, T8o | KTo, QTs, T8o | 12.5% | -0.23bb | 42.5% | Bluff-catch |
| Second pair: AT, KTs, T8s… | AT, KTs, T8s, T7s, T6s, T5s, T4s | 15.8% | -0.9bb | 19.8% | Fold |
| Third pair or lower | A9s, A3s, A2s, K9s, K3s, K2s, Q9s, Q3s, Q2s, 98s, 97s +5 more | 7.4% | -1.2bb | 12.7% | Fold |
| Ace-high | AQo, A8s, A7s, A6s, A4s | 1.9% | -6.69bb | 1% | Fold |
