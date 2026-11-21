# Defend drill: answers by EV, three boxes

**Date:** 2026-11-21 · **Source:** Noam's notes in chat while playing the live Defend drill

## What Noam said
- 8-8-6-2 turn: 99, 77 and A2 were one group. Why?
- "The best way is to see how much EV the hand is worth." 77 and 99 are clear calls, they make a lot. A hand worth less than about half a big blind is a bluff-catch, a different kind of call: a new category.
- A-7-6-K turn: king pair with a flush draw must be its own group, it's a +EV call. A4, A5 belong in the new bluff-catch category.
- "For the defending drill we can just use EV. We don't need equity, just whether the call is +EV, 0 EV or −EV; everything between 0 and 0.5 is bluff-catching."
- The turn and river animation must show the whole action: BB checks again, BTN bets the drill's size, and only then the drill.

## Decisions (applied)
- **Answer = EV of calling** (bb, from BB's decision, folding = 0; both then play the solver's strategy to the end). `scripts/analysis/bb-call-ev.ts`.
  - **Call:** +0.5bb or more.
  - **Bluff-catch:** −0.5 to +0.5bb. Symmetric around 0 because the solver's own pure calls sometimes come out slightly below 0 (e.g. top pair on A-7-6-K turn vs the 14bb overbet: −0.4bb while it calls 95–100%), which is solver noise around "indifferent".
  - **Fold:** −0.5bb or less.
  - Only one box is right per group (no more "either answer").
- **Three boxes:** Fold (left), Call (right), Bluff-catch (bottom).
- **Groups:** merge only within one family (made hands, pocket pairs, top pair, weaker pairs, pair + draw, draws, air), never across. **Pair + draw** (a pair below top pair with a flush draw or open-ender) is its own category.
- **Equity is no longer computed** for this drill.
- **Flop:** the old flop solves kept only the flop's decisions, so the EV after a flop call can't be read from them. All 11 flops are being re-solved keeping the turn (river checked down from there, marked approximate). Until a board is done, the Defend flop shows "being recomputed".
- **Animation:** Defend turn and river play BB's check and BTN's bet on the asked street before the drill.

## Open (for Noam / Uri)
- The ±0.5bb band: same on every street, or scaled to the pot? On the river (pot 60bb after a call) A4/A5 on A-7-6-K-2 come out +1.1 to +1.3bb, so "Call", though the solver mixes them about 54%.
- A-7-6-K turn: A4o/A5o come out −0.8bb (Fold), A4s +1.4bb (in the Call group). Noam expected A4/A5 as bluff-catch.
