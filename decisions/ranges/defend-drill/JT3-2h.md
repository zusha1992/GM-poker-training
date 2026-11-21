# Defend turn · JT3-2h (Js Ts 3c 2h)

BTN bets 14bb into 9.1bb. Answer by the EV of calling (Noam 2026-11-21): +0.5bb or more = Call, −0.5 to +0.5 = Bluff-catch, −0.5 or less = Fold. Source: TexasSolver (our solve); EV = both play the solver's strategy after the call. Draft for Noam and Uri.

| Group | Hands | Share | EV of a call | Solver continues | Answer |
|---|---|---|---|---|---|
| Two pair or better | J2s, 32s, 22 | 2.4% | +28bb | 100% | Call |
| Pair + draw | A3s, A2s, K3s, K2s, Q3s, Q2s, 63s, 53s, 52s, 43s, 42s | 2.9% | +8.12bb | 100% | Call |
| Flush draws | A9s, A8s, A7s, A6s, A4s, K9s, Q9s, Q8s, 98s, 97s, 87s +3 more | 2.4% | +4bb | 100% | Call |
| Top pair: AJo, KJ, QJ… | AJo, KJ, QJ, J4s | 10.8% | +2.93bb | 100% | Call |
| Top pair: J9, J8s, J7s… | J9, J8s, J7s, J6s, J5s | 8.3% | +0.06bb | 88.9% | Bluff-catch |
| Second pair and weaker pairs: AT, A3s, KT… | AT, A3s, KT, K3s, QT, T8, T7s, T6s, T5s, T4s, 63s +2 more | 22.3% | -0.11bb | 61.5% | Bluff-catch |
| Open-enders | KQo | 3.2% | -0.2bb | 83% | Bluff-catch |
| Second pair and weaker pairs: A2s, K2s, Q3s… | A2s, K2s, Q3s, Q2s, T9o, 52s, 42s | 5.7% | -0.68bb | 0.1% | Fold |
| Pocket pairs under the top card | 99, 88, 77, 66, 55, 44 | 14.6% | -1.32bb | 0% | Fold |
| Draws | AQo, A5o, A4, K9, K8s, K7s, K6s, K5s, K4s, Q9, Q8s +17 more | 15.8% | -3.52bb | 4.3% | Fold |
| Ace-high and worse | A9, A8, A7, A6, K8, K7s, K6s, K5s, K4s, Q7s, Q6s +9 more | 11.5% | -7.83bb | 0% | Fold |
