# "How many big blinds?" drill: the rulebook

This is a living document. It holds every rule for splitting BTN's range into hand groups and deciding what each group is worth. Every piece of feedback from Uri or Noam becomes a rule here, and every new board is built from it. The code that follows it is `src/lib/drill/postflop/price-hands.ts`.

**Status:** draft rules and draft answers. Uri is the final authority (see [Uri: poker authority](../CLAUDE.md)). Rules marked *(Uri)* or *(Noam)* came from them. Rules marked *(draft)* are Claude's proposals and wait for review.

---

## 1. The spot and the question

- Single-raised pot, BTN vs BB, 100bb deep. The player is BTN, the aggressor. *(doc, 2026-10-28)*
- The question for every group: **what is it worth from here**, assuming the rest of the board bricks. It's always "how much more", never the total. *(Noam)*
- Bet sizes are never asked. Only the money each group wants. *(Noam)*
- Between streets, BTN bets and BB calls. The flop bet is always small (1.8bb). The turn bet depends on the card (section 2b). Pots: 5.5bb on the flop, 9.1bb on the turn, then about 36bb on the river after an overbet turn or about 21bb after a 66% turn. The player sees the pot, the stack behind and the bet size. *(draft numbers)*

## 2. The six boxes *(Noam, 2026-10-29; money as stack shares since 2026-10-30)*

| Box | Means |
|---|---|
| **Potential bluffs** (bottom-left corner) | Worth nothing. It can't win by checking, so it's a candidate to bluff. That doesn't mean it always bluffs: which ones actually bet is taught in the later bluff drill. |
| **Showdown value** (bottom-right corner) | Worth a tiny bit. No value bet, but it sometimes wins when checked down. |
| **5% · 20% · 50% · 100%** (left side, top corners, right side) | Real money as a rough share of the stack that's left; 100% = all-in. *(Noam: no exact bb numbers like +5/+15/+40, because we don't aim for that accuracy.)* |

Layout *(Noam, 2026-10-30)*: six neon paddles in one design (Arkanoid-style), different colors, evenly spaced around the drop area, clockwise from small to big: Potential bluffs (bottom-left corner), 5% (left side), 20% (top-left corner), 50% (top-right corner), 100% (right side), Showdown value (bottom-right corner). Labels are only the number. The paddle the piece is near lights up; it flashes when the piece lands.

## 2b. Bet sizes between streets *(Noam, 2026-10-30)*

- Flop: a small bet and a call.
- Turn: depends on the card. On a **brick turn (good for BTN), BTN overbets** (polar). On a **wet turn (completes a straight or flush, or helps BB), BTN bets about 66–75%**.
- **The bet size changes nothing in the answers** *(Noam, 2026-10-31)*. The amounts are estimates of what each hand wants; the turn size (overbet or 66%) is extra information for the player, shown on screen, nothing more. *(This replaces an earlier draft rule that made every one-pair hand except the very top "check back" on a polar overbet turn.)*
- The screen always shows the bet: a badge under the board ("Turn: OVERBET · polar" or "Turn: 66% bet"), and on the river what the turn was.

## 2c. How many bets a hand is worth *(Noam, 2026-10-30)*

- **The drill asks what each hand wants, whatever the bet size.** The turn size (overbet or 66%) is shown as information; every group is still asked.
- **Top pair is worth about 20% on the flop and, on a brick turn, another 20%; that is its last bet, then showdown** *(Noam, 2026-10-31, from his notes on J♠T♠3♣)*. This holds even on a dynamic board like J♠T♠3♣, assuming the runout bricks.
- **Any ace (top pair on an ace-high board) is worth two small bets:** small on the flop, then a second bet. On a 66% turn the second bet goes in on the turn. So A6–A3 are 20% on the flop, like AJ–A8.
- **Pocket pairs under an ace (KK–88 on A72) are worth one small bet:** 5% on the flop, then check down (showdown value) on the turn and river, unless they improve. Two bets with them is borderline. Bet sizes come in a few fixed sizes, and with only "bet 66%" or "check" on the turn, they check.

## 3. How the range is split into groups

**Core rule *(Uri)*: a group only holds hands of the same strength.** If two kinds of hand are clearly different in strength, they're two groups.

Every hand goes into exactly one group, checked from the top down. Groups are recalculated on every card, and hands never leave the matrix.

| # | Group | Rule |
|---|---|---|
| 1 | Straight+ | Straight or flush using a hole card, full house, quads |
| 2 | Sets & two pair | Sets, trips, two pair (both hole cards pair the board) |
| 3 | Overpairs | Pocket pair above the top card |
| 4 | Top pair, good kicker | Kicker ≥ the board's *good* cutoff |
| 5 | Top pair, medium kicker | Kicker ≥ the *medium* cutoff *(Noam: on A72, AK–AQ are the strong kickers, AJ–A8 medium, A6–A3 weak)* |
| 6 | Top pair, weak kicker | The rest of top pair |
| 7–9 | Pocket pairs below the top card | Split by **how many board cards sit above them**: one card, two cards, three or more. *(Uri: on A72, KK–88 and 66–33 are different strengths.)* |
| 10 | Second pair | A hole card pairs the second-highest board card |
| 11 | Lower pairs | A hole card pairs a lower board card |
| 12 | No pair, showdown | Highest card ≥ the board's **showdown cutoff** *(Uri/Noam: K-high on A72)* |
| 13 | No pair, the rest | Everything else |

### Draws *(Noam, 2026-10-29)*
- Draws don't get their own group. **Every flush draw and straight draw with no pair and no showdown value is a potential bluff.** "Potential" doesn't mean "always": some of them check, and that choice belongs to the bluff drill.
- **A hand's strongest feature decides its group** *(draft, proposed and accepted)*: a pair plus a draw stays in its pair group, and a K-high draw stays in showdown value, because it can win by checking and doesn't need to bluff.

### Showdown value on the river *(Noam, 2026-10-30, from his note on A72 · 5♣ · 6♣)*
- It depends on **how many draws arrived and how many missed**.
- **The river completes the draws** (flush comes in, more straights): K-high loses its showdown value and becomes a **potential bluff**, because the ranges are polar.
- **The draws brick** (for example the turn brought two flush draws and straight draws, and the river misses them all): BB has many missed draws, so **K-high can keep showdown value**.

### Every pair wants money on the flop *(Noam, 2026-10-31)*
- In a single-raised pot (BTN raises, BB calls) both ranges are wide, so **any pair on the flop wants to put some money in**, even the worst pair: at least 5%. No pair is showdown value on the flop yet.

### Weak pairs on the river *(Noam, 2026-10-31, from his note on K♦Q♦4♠ · 8♠ · 3♥)*
- **A pocket pair under three or more board cards on the river (fourth pair or worse) is a potential bluff**, not showdown value: it rarely wins at showdown.
- *Open:* exactly when such weak pairs still have showdown value. Noam: it follows the same principle as A-high and K-high, which draws arrived on the river and which missed. To work out with Uri.

### Cutoffs to set for every new board
1. Good kicker (A72: Q or better, so AK and AQ: in a single-raised pot AQ is very strong on this board *(Noam)*)
2. Medium kicker (A72: 8 or better)
3. Showdown cutoff (A72: K-high)

## 4. How the drill presents the groups *(Uri/Noam)*

- **One group at a time, in mixed order** (not strongest to weakest, so the player can't just walk down the ladder).
- The current group is **lit in its own color** on the matrix. Groups not answered yet are **grey**, and answered groups take **their box's money color**. By the end of a street the matrix is a money map.
- Obvious groups place themselves: straight+ always, and sets & two pair when they're all-in. Everything else is asked.
- **No-pair names use only ranks that aren't on the board** *(Noam, 2026-10-31)*: on K♦Q♦4♠ the groups are "A-high" and "J-high & below", never "K-high".
- **Names are neutral.** A piece says what the hands are ("AT–A8", "66–33", "K-high", "Q-high & below"), never what to do. The words "bluff", "give up" and "showdown" only appear on the boxes, never on a piece.
- A wrong drop says only "worth more" or "worth less", never the right box.
- Tapping a piece shows its full name and every hand in it.

## 5. How boards and runouts are chosen *(doc, 2026-10-28)*

- Every flop gets three turns: **brick** (changes little), **dynamic** (new draws or an overcard, nothing completes), **wet** (completes something; on two-tone flops the flush).
- Every turn gets two rivers: **brick** and **wet**.
- On boards where every unpaired river completes something, the brick river pairs the board.

## 6. Answer patterns so far (A♣7♦2♠, all drafts)

These are the patterns the A72 answers follow. Uri's corrections will turn them into rules.

- Brick turn (Q♥, BTN overbets): AK 50% (three streets); AJ–A8 and A6–A3 another 20% (their last bet); KK and the lower pairs showdown value.
- Dynamic turn (6♦, 66%): the strong kickers keep going (50%), the medium kickers slow down (5%).
- Wet turn (5♣, 66%): sets and two pair stop being all-in (50%), and every top pair drops one step.
- Brick river: top pair that bet the flop and turn shows down, AK makes one more value bet (20%); after a 66% turn, the strong kicker makes one value bet (20%) and most one-pair hands go to showdown value.
- Wet river: sets and two pair drop to 20%, top pair becomes a bluff-catcher (5%), K-high becomes a potential bluff, and the rest goes to showdown value.

## 6b. Board 2: J♠ T♠ 3♣ (all drafts, built from these rules, 2026-10-30)

Chosen as the opposite of A72: no ace, two-tone, very connected.

- **Cutoffs:** good kicker = AJ–KJ; **every other jack (QJ–J7) is one group** *(Noam: they all want about 20% on the flop)*. **Showdown cutoff = A-high** (no ace pairs on this board).
- **New group:** overpairs (QQ–AA).
- **Runouts:** 2♥ brick (polar overbet) → 3♦ (board pairs) / 9♠ (flush and straights); 6♣ dynamic, second flush draw (66%) → 3♦ / Q♠ (flush and straights); 9♠ wet, flush in (66%) → 2♦ / 8♠ (four spades).
- **Flop:** sets and JT all-in; overpairs 50%; AJ–KJ and QJ–J7 20% (top pair); Tx 5%; 99–44, 22, 3x and A-high showdown value; the rest potential bluffs (draws included).
- **Brick turn (2♥, BTN overbets):** overpairs 50%; every top pair another 20% (its last bet, then showdown on a brick river); the lower pairs showdown value.
- **Rivers where the draws arrive (9♠, Q♠, 8♠):** A-high becomes a potential bluff; overpairs become bluff-catchers (showdown value).

## 6c. Boards 3–10: answers computed from the rules (2026-10-31, all drafts)

Eight more boards from the planning doc, each teaching something different: **K♠5♥4♣** (king-high, low connectors), **Q♥T♦7♠** (middle cards), **9♠8♦6♣** (very connected, low), **K♦Q♣T♥** (broadway), **A♥7♥6♣** (ace-high but two-tone and connected), **K♦Q♦4♠** (two high cards, two-tone), **T♥8♥7♠** (the wettest), **9♦6♦2♥** (low, two-tone). Each has the doc's brick / dynamic / wet turns and a brick and a wet river.

Their answers are not written one by one: they come from a **value plan**, the rules above turned into numbers. Change a rule here and every one of these boards follows.

**How many streets of value each group wants** (on a brick runout):
- Overpairs: 3
- Top pair, strong kicker: 3 on a dry flop, 2 on a wet flop *(wet = two-tone or connected)*
- Every other top pair: 2 *(20% on the flop, 20% more on a brick turn)*
- Pairs under the top card that sit right below it, and second pair: 1 *(one small bet, then showdown)*
- Everything else with a pair: 0 (showdown value)
- No pair: showdown value if it holds the highest missing card (A-high, or K-high when an ace is on board), otherwise a potential bluff

**Spending them, street by street:**
- **Flop:** 3 → 50% · 2 → 20% · 1 → 5% · 0 → showdown value. Sets and two pair all-in.
- **Turn** (with what's left): brick → 50% or 20% (its last bet) · dynamic → 50% or 5% · wet → 20% or 5% · nothing left → showdown value. Sets and two pair stay all-in, except on a wet turn (50%).
- **River:** a group with value left bets 20% on a blank (5% if the turn was wet, or if the river completes draws); everything else shows down. On a river that completes the draws, sets and two pair drop to 20% and the high-card hands become potential bluffs.
- **Kickers:** the two best kickers make "strong" (AK/AQ on an ace, AK/KQ on a king, AQ/KQ below); every other kicker is one group.
- **The turn bet size** (overbet on a brick, 66% otherwise) is shown as information only.

## 7. Open questions for Uri

1. Is "Top pair, weak kicker" A6–A3 one group, or A6 alone plus the wheel draws A5–A3?
2. Should K-high draws stay in showdown value, or be their own group?
3. On rivers where the K pairs (K♦, K♠, K♥), no K-high no-pair hands exist. Should the showdown cutoff drop to Q-high there?
4. *(Settled 2026-10-31: groups stay, and the bet size changes no answer; it is information only.)*
5. All the turn and river buckets are drafts. Please correct them; the gold dots in the app's summary mark them.

## Change log

- **2026-10-28**: Drill spec agreed with Uri (Noam's doc "Price Every Hand").
- **2026-10-29**: First prototype on A72 with 8 groups and 5 boxes. Uri's feedback led to finer groups (pocket pairs by slot, middle and bottom pair apart, top pair in three kicker bands), no-pair hands split into showdown vs potential bluffs, six boxes, one piece at a time, and boxes on the top and both sides.
- **2026-10-30**: Money boxes became stack shares (A little, ~20%, ~50%, All-in) instead of +5/+15/+40bb. Feedback notes now save exactly where they were written (board, street, group, app answer, what was tried). Turn bet size depends on the card (overbet on bricks, 66–75% on wet cards); not built yet.
- **2026-10-30 (later)**: Turn sizes built (Q♥ = polar overbet, 6♦ and 5♣ = 66%), with a badge on screen. Polar line answers. AK and AQ are the strong kickers on A72. K-high on the river follows how many draws arrived. Rulebook readable from the lobby.
- **2026-10-30 (evening)**: Drop targets became six neon paddles around the frame; money boxes read 5%, 20%, 50%, 100% ("A little" is now 5%).
- **2026-10-30 (night)**: Any ace = two small bets (A6–A3 20% on the flop); KK–88 = one small bet then showdown on every turn; the drill asks every group whatever the bet size.
- **2026-10-30 (night)**: Second board J♠T♠3♣ added (6 runouts, drafts). The start screen lets you pick a board or mix them.
- **2026-10-31**: From Noam's notes: top pair = 20% on the flop and 20% more on a brick turn, then showdown; the turn bet size is information only (the polar "check back" answers are gone); on J♠T♠3♣ QJ–J7 form one group.
- **2026-10-31**: Eight more boards (10 in all, 60 runouts). Their answers come from the value plan in section 6c.
- **2026-10-31 (afternoon)**: From Noam's notes on K♦Q♦4♠: no-pair group names follow the board; fourth pair or worse is a potential bluff on the river (every board).
- **2026-10-31 (afternoon)**: Any pair on the flop wants at least 5% (single-raised pot, wide ranges); applied to every board.
