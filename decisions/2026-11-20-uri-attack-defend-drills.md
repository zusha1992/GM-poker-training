# Postflop POC: four drills (Noam's summary of his talk with Uri, 2026-11-20)

**Source:** Noam's spoken summary in chat on 2026-11-20 of his conversation with Uri. These are Uri-level decisions.

**Plan:** `C:\Users\noams\.claude\plans\ancient-giggling-key.md` (approved 2026-11-20).

## Current state (before this)

- "How many bb" has Flop / Turn / River drills.
- The River drill has 6 lines × 11 flops (396 spots) and a Line picker.
- There is no defend drill in the new format.
- The lobby has many postflop cards (old and new).

## What was said

1. **Fewer lines.** Don't ask about many lines. Focus on bet-bet-bet, flop to river.
2. **Attack drill.** Teaches simple, healthy intuitions about how much a hand group is worth in a given situation, as how far it wants to go:
   - one small bet;
   - two bets;
   - three bets;
   - all the way.

   It's asked on the flop, the turn and the river, with answers as accurate as we can make them. It's an offense drill: what do I do with a group of hands when I attack.
3. **Defend drill (next, the opposite).** We switch seats to the BB. BTN bets the flop, the turn and the river. BB can only respond with calls (call or fold, no raises). We want to know the call thresholds on each street.
4. **Attack and defend are the first two drills we really need.** Learn what hands are worth, then naturally drill the defense.
5. **Then a drill on good and bad cards.** Which turn or river card is good, and which is bad, for a range.
6. **Then a "round to 100 / round to 0" module.** A good turn for our range: bet all the time. A bad turn: check all the time.
7. **These four drills are the main postflop POC.**
   - The app has two sections, Preflop and Postflop.
   - Postflop contains exactly these four exercises.
8. **One screen for every drill.** A designer/programmer joins soon.
   - They design one basic drill screen. Every drill reuses it, with different data that we provide (later from PioSolver).
   - The user interface stays more or less the same everywhere.
9. **The intro animation in every situation.** Before every exercise, a short animation shows how we got to the spot:
   - the table;
   - the small blind and big blind;
   - where we sit at the table;
   - the action so far.

   This holds even preflop, when only the blinds have acted.

## Decisions

- **One postflop line: BTN bets 33% on the flop.**
  - The turn bet is the board's size (75%, or 150% where BTN overbets).
  - River about 66%.
  - The other river lines are hidden, not deleted.
- **Attack boxes keep their bb ranges and get plain names as numbers of bets:**
  - Check / give up;
  - One small bet;
  - Two bets;
  - Three bets;
  - Three big bets;
  - All the way.

  The names are counted from the street being asked.
- **Defend:** BB's groups go to Call / Fold.
  - The answers come from the solver's call frequency, using the 75/25 rule; mixed groups accept either answer.
  - The summary shows the threshold.
- **Good / bad card and Round to 100 / 0** use BTN's whole-range bet % and equity shift per card. Their thresholds are drafts until Uri sets them.
- **Build order:**
  1. attack (simplify, lobby, bet names);
  2. the shared data format, the handoff doc and the intro animation;
  3. defend;
  4. good / bad card;
  5. round to 100 / 0.

## Open questions (for Uri)

- Good / bad card: is there a third box, "Neutral"?
- Round to 100 / 0: the thresholds (draft: ≥60% bet all, ≤40% check all).
- Should the defend drill's mixed groups (25–75% calls) accept either answer, or be split further?
