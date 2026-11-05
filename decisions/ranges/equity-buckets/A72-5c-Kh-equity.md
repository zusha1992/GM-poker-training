# A♣7♦2♠ · 5♣ · K♥: BTN's equity per hand (GTO Wizard, equity only, screenshots from Noam, 2026-11-05)

Equity against BB's range at that point, in %.

## Flop A♣7♦2♠

| Group | Equity per hand |
|---|---|
| Sets and two pair | AA 97, 77 96.7, 22 95, A7s 92.9, A7o 92.7, A2s 90.2 |
| AK, AQ | 88.3–88.8 |
| AJ–A8 | AJ 87.7–88.2, AT 86.6–87.1, A9 85.2–85.8, A8 84.1–84.7 |
| A6–A3 | 81.9–83 |
| KK–88 | KK 73.9, QQ 71.9, JJ 70.5, TT 69, 99 67.1, 88 65.4 |
| 7x | K7s 68.3, Q7s 67.9, J7s 67.7, T7s 67.3, 97s 67.1, 87s 66.7, K7o 67.1, 75s 65.4, 76s 64.8 |
| 66–33 | 66 57, 55 55.5, 44 53.2, 33 50.6 |
| 2x | K2s 55.9, Q2s 55.3 |
| K-high | KQs 51.7, KJs 50.3, KTs 48.8, K9s 46.3, K8s 45, K6s–K3s 42.4–43.2; KQo 49.9, KJo 48.4, KTo 46.8, K9o 44.3, K8o 42.9 |
| Q-high | QJs 42.1, QTs 40.3, Q9s 37.5, Q8s 36.4, Q6s–Q3s 34.3–35.1; QJo 40, QTo 38.1, Q9o 35.2 |
| J-high | JTs 35.1, J9s 32.4, J8s 31.6, J6s–J3s 28.6–29.3; JTo 32.8, J9o 30, J8o 29 |
| Lower | T9s 29.4, T8s 28.5, T6s 25.7, T5s 25.3, T9o 27, T8o 26, 98s 27.7, 98o 25.2, 96s 25, 86s 25.7, 85s 25.3, 65s 23.2, 64s 21.7 |
| Wheel gutshots | 54s 33.3, 53s 31.7 |

### Two findings
1. **My own calculator agrees with the solver.** Against my estimated BB range it gave:

   | Group | My calculator | Solver |
   |---|---|---|
   | Sets and two pair | 93% | 90–97 |
   | AK, AQ | 89% | 88–89 |
   | AJ–A8 | 86% | 84–88 |
   | KK–88 | 69% | 65–74 |
   | K-high, no draw | 42% | 42–46 |
   | Trash | 35% | 25–42 |

2. **Equity alone misses the nut draws.** 54s and 53s have only 32–33% equity, the same as J-high, but their EV in the bucket screenshots was 3.6bb, like 7x: when the wheel comes, it's the nuts and gets paid. So on the flop, equity alone would put them back in the 0–5bb group.

## Turn A♣7♦2♠ 5♣

Thin bars in a cell mean that only part of the hand reaches this point. GTO Wizard shows the line where BTN bet the flop, and hands like KK, QQ and KQ mostly checked there.

| Group | Equity per hand |
|---|---|
| Sets and two pair | AA 95.3, 77 95.7, 55 94.9, 22 92.9, A7 90.6–91, A5 88.2–88.4, A2s 84.7, 75s 82.8 |
| AK, AQ | 83.3–84 |
| AJ–A8 | AJ 82.9–83.1, AT 80.5–80.7, A9 77.5–77.7, A8 73.9–74.2 |
| A6, A4, A3 | 70.7–71.9 |
| KK–88 | 55.7–57.8 (KK 56.1, QQ 57.8, JJ 57.7, TT 57.8, 99 57.6, 88 55.7) |
| 7x | K7s 57.7, Q7s–T7s 57.3–57.6, 97s 57.1, 87s 56.4, K7o 54.1, 76s 53.8 |
| 5x | K5s 43.4, Q5s 44, J5s 43.9, T5s 44.1, 85s 44.6, 65s 44.5 |
| 54s, 53s (pair plus a wheel draw) | 48.2 and 48 |
| 66, 44, 33 | 43.3, 43.5, 39.9 |
| 2x | K2s 39.8, Q2s 40.1 |
| K-high | KQs 29.4, KJs 25, K4s, K3s 25.5–25.8 (wheel draw), KTs–K6s 18.9–22.7; KQo 27.3, KJo 23.8, KTo–K8o 17.2–20.1 |
| Q-high | QJs 23.4, Q4s, Q3s 23, QTs–Q6s 16.2–18.1; QJo–Q9o 13.2–14.5 |
| J-high | J4s, J3s 21.1–21.6, JTs–J6s 15.5–17.3; JTo–J8o 11.3–12.2 |
| Lower | 86s 29, 64s 26 (open-enders), 98s 22.7, 96s 20.1, 98o 18.1, T9s 16, T8s 13.9, T6s 13.5, T9o 10.8, T8o 10 |

## River A♣7♦2♠ 5♣ K♥

This is the line where BTN bet the flop and the turn (thin bars mean that only part of the hand got here). KK–TT are missing: they checked earlier.

| Group | Equity per hand |
|---|---|
| Sets | AA 100, 77 100, 55 99.7, 22 98 |
| Two pair | AK 97.6 (now two pair), A7 97.4–97.6, A5 96.9–97.3, A2s 93, K7s 91, 75s 89.9 |
| AQ, AJ | AQ 84.7–84.9, AJ 83.1–83.3 |
| AT–A8 | AT 78.4–78.5, A9 71.9–72, A8 64.3–64.4 |
| A6, A4, A3 | A6 58.8–59, A4 52.7–52.8, A3 52.9–53.1 |
| Kx (the king made second pair) | K9s 41, K8s 40.9, K6s 41.2, K4s 40.1, K3s 39.9, K9o 42, K8o 41.3 |
| 99, 88 | 39.2, 36.5 |
| 7x | Q7s 30.1, J7s 29.4, T7s 29.4, 97s 28.5, 87s 27.4, 76s 25.1 |
| 5x | 54s 18.5, 53s 18.6 |
| No pair | Q-high 2.6–3.7, J-high 1.9–2.8, T-high 1.6–1.9, 98s 1.5, 96s 1.2, 86s 0.6, 64s 0 |

## River decisions (2026-11-05)

**Hands missing from the solver's range get placed by strength** *(Noam: "if you have hands that are missing in the solver, put them in the right bucket according to the strength of the hand")*. On this river:
- KK (now a set) goes with the sets;
- QQ–TT go with 99 and 88;
- 66–33 go below 7x;
- 43s (the wheel, the nuts here) goes with the straights.

| Group | Equity | Box | Change |
|---|---|---|---|
| Straights (43s) | the nuts | 50–100bb | same |
| Sets and two pair | 90–100 | **50–100bb** | was 25–50bb |
| AQ | 85 | 15–25bb | same |
| AJ–A8 | 64–83 (about 74) | 5–15bb | same |
| A6, A4, A3 | 53–59 | 0–5bb | same |
| Kx, QQ–88, 7x, 5x, 66–33 | 18–42 | 0–5bb | same |
| Trash | 0–4 | 0–5bb | same |

## What equity alone gives, compared with the strategy screenshots
- **River: equity alone is enough.** No cards are left to come, so equity is how often the hand wins, which is what decides the value bet.
- **Flop and turn: equity alone misses two things:**
  - **nut draws** (54s and 53s on the flop: 33% equity, but EV like 7x);
  - **betting behaviour** (on the 5♣ turn KK–88 have 56% but check 99%, while draws with 25–45% bet big).
  
  On those streets, use the strategy or EV screenshots.
