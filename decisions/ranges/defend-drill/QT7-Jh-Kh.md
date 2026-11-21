# Defend river · QT7-Jh-Kh (Qh Td 7s Jh Kh)

BTN bets 14bb into 21.1bb. Answer by the solver's strategy and the EV of calling (Noam 2026-11-21): the solver calls 75%+ = Call, 25% or less = Fold; when it mixes, EV −0.5 to +0.5bb = Bluff-catch, more = Call, less = Fold. Source: TexasSolver (our solve); EV = both play the solver's strategy after the call. Draft for Noam and Uri.

| Group | Hands | Share | EV of a call | Solver continues | Answer |
|---|---|---|---|---|---|
| Big flush or better | ATs, A9s, A8s, A7s, T8s, T6s, T5s, T4s, T3s, 98s, 97s | 3% | +34.15bb | 100% | Call |
| Small flush | 87s, 76s, 75s, 74s | 0.9% | +32.77bb | 100% | Call |
| Straight: A-high | AJo, AT, A9s, A8s, A7 | 21.6% | +16.71bb | 100% | Call |
| Straight: K-high: J9o, T9o, 99 | J9o, T9o, 99 | 13.6% | +0.16bb | 80.7% | Call |
| Two pair | KQo, KJ, KT, K7s, QJ, Q7s, JT, J7s | 27.2% | -0.07bb | 13.1% | Fold |
| Straight: K-high: K9, Q9, J9s… | K9, Q9, J9s, 98, 97s | 15.7% | -0.14bb | 50.8% | Bluff-catch |
| Second pair | Q8s, Q6s, Q5s, Q4s, Q3s, Q2s | 14.4% | -2.15bb | 0% | Fold |
| Third pair or lower | T8s, T6s, T5s, T4s, T3s, 87s, 76s, 75s, 74s | 3.5% | -4.87bb | 0% | Fold |
