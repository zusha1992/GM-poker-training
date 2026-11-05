# A♣7♦2♠, the other runouts: BTN's equity per hand (GTO Wizard, equity only, screenshots from Noam, 2026-11-05)

On each street the solver shows the line where BTN bet the earlier streets. Hands missing from its range (they checked earlier) are placed by strength *(Noam)*.

## Turn Q♥

| Group | Equity per hand | Box today |
|---|---|---|
| Sets and two pair | AA 98.6, QQ 98.7, 77 98.5, 22 97.4, AQ 96.5, A7 94.1–94.2, A2s 91.5, Q7s 88.9, Q2s 87.5 | 50–100bb |
| AK | 89.9–90 | 25–50bb |
| AJ–A8 | AJ 88, AT 86, A9 83.1, A8 80.1 | 15–25bb |
| A6–A3 | 74.9–75.9 | 15–25bb |
| Qx | KQ 63–63.3, QJ 62–62.1, QT 61.4–61.5, Q9 60.7, Q8 60.1, Q6–Q3 59.7–60 | 5–15bb |
| KK | 59.8 | 5–15bb |
| JJ–88 | JJ 55.9, TT 56, 99 54.8, 88 52.5 | 0–5bb |
| 7x | K7s 52.8, K7o 52.6, J7s 52, T7s 51.4, 97s 50.7, 87s 50.2, 76s, 75s 48.3 | 0–5bb |
| 66–33 | 66 39.9, 55 37, 44 33.7, 33 30.2 | 0–5bb |
| 2x | K2s 31.7 | 0–5bb |
| Draws (gutshots) | KJs 32.4, KJo 31, KTs 29.4, KTo 28, JTs, JTo 21.5–21.6, 54s 14, 53s 13.7 | 0–5bb |
| K-high, no draw | K9s 19.6, K9o 19.1, K8s 18.4, K8o 18.2, K6s–K3s 15.5–16 | 0–5bb |
| Trash | J9 13.6, J8 12.9–13, T9 12.3, T8 11.5–11.6, 98 11.1, 96s 9.6, 86s 8, 85s 7.7, 65s 6.1, 64s 5.8 | 0–5bb |

**Result:** equity is in the same order as Noam's boxes on this turn: Qx 60–63 ≥ KK 60 > JJ–88 52–56 > 7x 48–53. **No change.**

## Turn 6♦

| Group | Equity per hand | Box today |
|---|---|---|
| Sets and two pair | AA 97.6, 77 97.2, 66 96.9, 22 94.8, A7 92.6–92.9, A6 90.9–91.1 (now two pair), A2s 88.7, 76s 85.1 | 50–100bb |
| AK, AQ | AK 86.4–87.8, AQ 86.7–88.1 | 25–50bb |
| AJ–A8 | AJ 85.7–87.3, AT 83.4–85.2, A9 80.6–82.6, A8 77.2–79.5 | 5–15bb |
| A5–A3 | 71.9–75 | 5–15bb |
| KK–88 | KK 57.9, QQ 59.5, JJ 59.6, TT 59.8, 99 59.6, 88 57.8 | 5–15bb |
| 7x | K7o 56.1, K7s 55.9, Q7s 55.5, J7s 55, T7s 54.6, 97s 54.2, 87s 53.6, 75s 50.9 | 5–15bb |
| 6x and 2x | 6x 47–49.2 (K6s 47.8, Q6s 48.6, J6s 48.7, T6s 49, 96s 49.2, 86s 48.8, 65s 47.1, 64s 47); 2x 40.4–40.5 | 0–5bb |
| 55–33 | 55 42.2, 44 38.6, 33 34.8 | 0–5bb |
| Draws | 98s 30.3, 85s 28.2, 54s 26.2, 98o 25.9, T9s 23.8, T8s 21.6, 53s 18; the diamond combos show as strips inside the K- and Q-high cells | strong 5–15bb, straight 0–5bb |
| K-high | KQs 29.6, KQo 27.2, KJs 25.4, KJo 23.9, K9s 23, KTs 21.9, K8s 21.1, KTo 20.4, K5s–K3s 18.7–19.9, K9o 18.4, K8o 17.5 | 0–5bb |
| Trash | Q-high 12.9–17, J-high 10.6–16.8, T5s 12.8, T9o 18.7, T8o 18 | 0–5bb |

**Result:** equity is in the same order as the boxes: KK–88 58–60 ≥ 7x 51–56 > 6x 47–49.
- AJ–A8 has 77–87% here, like on the Q♥ turn where it's 15–25bb. Here it stays at 5–15bb. That's Noam's answer, and it fits the bet size: BTN bets 66% on this turn but overbets on Q♥, so one more top-pair bet is smaller here.
- **No change.**

## River Q♥ 9♣ (after the turn overbet)

After the polar overbet, BTN's solver range holds only value hands and bluffs. Everything else checked the turn and is missing; placed by strength.

| Group | Equity per hand | Box today | Proposed |
|---|---|---|---|
| Sets and two pair | AA, QQ, 77 100, 22 99, AQ 98.3–98.4, A9 94.9–95.2 (now two pair), A7 88.2–88.3, A2s 83.9, Q7s 81.6, Q2s 77.9 | 50–100bb | same |
| AK | 73.4–73.6 | 25–50bb | **5–15bb** |
| AJ, AT, A8 | AJ 71, AT 61.9–62.1 (A8 checked the turn) | 0–5bb | **5–15bb** |
| A6–A3 | checked the turn, below AT | 0–5bb | same |
| KK, JJ, TT, Qx, 9x, 7x, 2x, 88, 66–33 | checked the turn (33 7.7) | 0–5bb | same |
| K-high, Trash (the bluffs) | 0–9.8 | 0–5bb | same |

**Why AK and AJ change:**
- With the river cut-offs from A72 · 5♣ · K♥ (85%+ for 15–25bb, 64–83% for 5–15bb, below 60% for 0–5bb), AK at 73% and AJ at 71% are both a thin value bet: **5–15bb**.
- Before, AK was at 25–50bb ("a third healthy bet") and AJ at 0–5bb, even though their equity is almost the same.

## River Q♥ 9♣ after the turn went check, check (a different line)

The drill doesn't have this line yet: every runout assumes BTN bet each street. Kept for later.

| Hands | Equity per hand |
|---|---|
| Strong hands that checked the turn | AQo 98.3, A9 98.5 and 99 98.5 (both improved on the 9), 77 97.5, A2s 96.7, A7 96.6, Q9s 95.8, 97s 94.4, Q7s 93.1, Q2s 93.3 |
| Top pair | AJo 92.4, AT 90.9–91, A8 88.8, A6–A3 83.3–83.6 |
| Qx | KQo 69.7, QJs 68, QTs 66.3, Q8s 64, Q5s–Q3s 62.6–62.9 |
| 9x | K9s 53.2, J9s 53.3, T9o 51.7, 96s 48.5, 95s 48.7, 98 48.4 |
| 7x and 88 | K7s 39.7, J7s 39.6, T7s 39, 88 42.9, 87 36.4–36.5, 76 36.3–36.6, 75s 36.3, 74s 36.5 |
| 66–33 and 2x | 66 33, 55 30.9, 44 29, 33 27.5; 2x 24.7–26.2 |
| K-high | 15.5–22.5 |
| Trash | 0–12.4 |

**What it shows:** when the turn is checked, BB's river range is weaker. Top pair (A6–AJ) then has 83–92%, much more than on the overbet line (AJ 71%), so it bets the river for value.

## River Q♥ K♦ (after the turn overbet)

| Group | Equity per hand | Box today | Proposed |
|---|---|---|---|
| Straights | JT 100 (broadway, the nuts) | 50–100bb | same |
| Sets and two pair | AA, QQ, 77 100, 22 98.8, AK 98.3 (now two pair), AQ 98.1, A7 97–97.2, A2s 92.2, Q7s 87.1, K2s 85.6, Q2s 82.6 | 50–100bb | same |
| AJ–A8 | AJ 69.1–69.2, AT 59.7–59.9, A9 48–49 (A8 checked the turn); about 59 on average | 0–5bb | same |
| A6–A3, pairs, Kx, Qx, 7x | checked the turn | 0–5bb | same |
| Bluffs | 0–3 | 0–5bb | same |

**Result:** no change. The K♦ makes broadway for JT and two pair for AK, and AJ–A8 drops to about 59% on average.

## River 6♦ K♠ (after a 66% turn bet)

| Group | Equity per hand | Box today | Proposed |
|---|---|---|---|
| Sets and two pair | AA, 77 100, 66 99.6, 22 96.3, AK 95–95.2 (now two pair), A7 94.2–94.4, A6 92.7–92.9, 76s 87.8, K2s 82.9 | 50–100bb | same |
| AQ | 78.1–78.8 | 25–50bb | **5–15bb** (on the edge: the cut-off is about 80%) |
| AJ–A8 | AJ 74.1–76, AT 65.5, A9s 54.8 (A8 checked the turn); about 65 on average | 5–15bb | same |
| A5–A3, pairs, Kx | checked the turn | 0–5bb | same |
| Bluffs | 0–9.2 | 0–5bb | same |

**Where the river cut-offs sit** (between 74% at 5–15bb and 85% at 15–25bb on A72 · 5♣ · K♥): about 80%.

## River 6♦ 8♦ (after a 66% turn bet; the diamond flush and the 54 and T9 straights come in)

| Group | Equity per hand | Box today |
|---|---|---|
| Flushes, A- or K-high | ATs, A9s 100, AJs 92.9 (the diamond combos), K2s 94.2, K4s 91.3, K5s 90.9, K3s 73.1 | 50–100bb |
| Flushes, Q-high and lower | Q2s 87.5, JTs 76.1, J5s 48.3, J4s 38.5, Q5s 34.3, Q4s 23.5, J3s 23.9, Q3s 11.4 | 50–100bb |
| Straights | T9s 88.6, T9o 83.9, 54s 87.5 | 25–50bb |
| Sets | 22 83.2, 77 82.6, 66 82, AA 70.3 | 5–15bb (Noam) |
| Two pair | A7 70.8–74.3, A6 68.2–71.2, 76s 71.2 | 5–15bb |
| AK, AQ (no diamond) | AKo 62.4, AQo 61.3, AKs, AQs 71.9–77.1 (part of them diamonds) | 0–5bb |
| AJ–A9 | AJo 55.9 | 0–5bb |
| Bluffs and weak hands | 0–27 | 0–5bb |

**What it shows:**
- **Flushes aren't all the same.** A high flush has 90–100%, but low flushes (J5 or Q3 of diamonds) only 11–48% against BB's range, which holds many bigger flushes.
- **Straights** have 84–88%.
- **Sets and two pair** have 68–83%, which supports Noam's 5–15bb.
- **The rest** has under 64%, so 0–5bb is right.

## River 5♣ 6♣ (after a 66% turn bet; the club flush and the 43, 84 and 98 straights come in)

| Group | Equity per hand | Box today |
|---|---|---|
| Flushes | Q2s 93.4, K8s 92.9, QJs 91.2, 87s 91, J7s, T7s, 97s 90.7, Q8s 88, Q9s 87.6, JTs 87.2, QTs 82.6, T9s 80.9, J8s 76.3 | 50–100bb |
| Straights | 98s 85.6, 98o 84.4 | 25–50bb |
| Sets | 77 86.6, 22 82.3, 55 81.9, AA 68.1 | 5–15bb |
| Two pair | A7 72.6–75.9, A5 67.4–67.6, 75s 67.1, 65s 66 | 5–15bb |
| AK, AQ, AJ | 55.1–56.3, AJ 50.8–51.3 | 0–5bb |
| The rest | 0–1 | 0–5bb |

**Result:** no change. Sets and two pair (66–87%) and top pair (51–56%) match Noam's boxes.

## Correction: what a cell's equity means

A cell's number is the **average of the combos in the range**. A cell such as J9s (58.3) or K4s (58.2) here mixes the club combos (a flush, about 90%) with the other combos (no pair, 0%).

So the "low flushes 11–48%" on the 6♦ 8♦ river is **probably the same blend**, not weak flushes. To compare flushes, the screenshot needs GTO Wizard's suit filter (only the ♦ or ♣ combos). **The flush split is on hold** until then.
