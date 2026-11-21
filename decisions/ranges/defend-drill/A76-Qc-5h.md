# Defend river · A76-Qc-5h (Ah 7h 6c Qc 5h)

BTN bets 14bb into 21.1bb. Answer by the solver's strategy and the EV of calling (Noam 2026-11-21): the solver calls 75%+ = Call, 25% or less = Fold; when it mixes, EV −0.5 to +0.5bb = Bluff-catch, more = Call, less = Fold. Source: TexasSolver (our solve); EV = both play the solver's strategy after the call. Draft for Noam and Uri.

| Group | Hands | Share | EV of a call | Solver continues | Answer |
|---|---|---|---|---|---|
| Big flush | KJs, KTs, K9s, K8s, K6s, K4s, K3s, K2s, QJs, QTs, Q9s +7 more | 3.3% | +34.55bb | 100% | Call |
| Small flush | T8s, T6s, 98s, 96s, 86s, 64s, 63s, 43s | 1.7% | +32.85bb | 100% | Call |
| Straight: 9-high | 98 | 0.8% | +32.2bb | 100% | Call |
| Straight: 7-high | 43s | 0.7% | +31.83bb | 100% | Call |
| Two pair | A6, A5o, Q7s, Q6s, Q5s, 76 | 12.7% | +21.8bb | 100% | Call |
| Top pair: A8o | A8o | 9.7% | +0.69bb | 77.7% | Call |
| Top pair: ATs, A9, A8s… | ATs, A9, A8s, A4, A3s, A2s | 30.9% | +0.28bb | 65.5% | Bluff-catch |
| Top pair: AJo, ATo | AJo, ATo | 16.5% | -0.62bb | 53% | Fold |
| Second pair | KQo, QJs, QTs, Q9s, Q8s, Q4s, Q3s, Q2s | 6.1% | -0.86bb | 29% | Fold |
| Third pair or lower | K7s, K6s, K5s, J7s, J6s, T7s, T6s, 97s, 96s, 87, 86s +5 more | 15.2% | -0.96bb | 6.6% | Fold |
| Pocket pairs under the top card | 99, 88 | 1.4% | -1.73bb | 30.7% | Fold |
| King-high and worse | KJ, KTs | 1% | -5.87bb | 0% | Fold |
