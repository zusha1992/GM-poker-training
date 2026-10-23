# RFI ranges from solver screenshots

**Topic:** Preflop raise-first-in ranges and Tetris-piece group taxonomy, read from 5 solver screenshots (UTG, HJ, CO, BTN, SB simplified opening ranges).

**Date:** 2026-10-23

## Current state (before this change)

`public/gm-poker-training.html`'s `FAMS` taxonomy had 15 groups built for UI-flow testing only, not real strategy: `PP/MP/LP` (pairs), `SBW` (suited broadways incl. all suited aces + K9s/Q9s/J9s/T9s), `SA` (suited aces A9s-A2s — overlapping/inconsistent with SBW), `BO`/`OBW` (offsuit broadways), `SC`/`SK`/`SQ`/`OA`/`LS`/`OK`/`LK`/`WO` (lower tiers). `POS[].strat` held placeholder per-seat percentages invented for the prototype, not derived from any real range.

## What was discussed

Noam uploaded 5 screenshots (simplified GTO solver RFI ranges, red=raise/blue=fold, split cells = mixed frequency) for UTG, HJ, CO, BTN, SB (identified by AA/KK/QQ EV values tightening from BTN/SB's widest down to UTG's tightest). Rule given: a cell counted as raise if majority red, fold if majority blue.

A first pass read every image and proposed per-position raise/fold cutoffs (see "Decisions" below for what was confirmed/corrected — the initial read had some wrong/uncertain boundary calls, especially near-zero mixed cells).

Noam then corrected, across several messages:
- **All suited aces (A2s-AKs) raise from every position** — overriding the initial read that had A2s/A3s folding at UTG/HJ.
- **UTG offsuit broadways**: KQo, KJo, QJo raise; KTo, QTo fold.
- **HJ**: A9o, JTo fold (confirms the cutoff there).

Noam then asked to see the current `FAMS` taxonomy and set a grouping principle for the Tetris pieces going forward (not just for this range data, see [[gm-poker-training-prototype]]):
- Pieces are always **groups**, never single hands as the question.
- A group can be asked via its **weakest/anchor sub-range**, with the rest of that same family auto-revealing once answered correctly (this is the existing ladder/reveal mechanic in `buildRFI`, now extended to split within a family, not just across whole `FAMS` groups).
- A piece can **bundle across card families** when they sit at the same strategic frontier (his example: K9s+Q9s bundled, revealing KTs/QTs/KJs/QJs above).
- For the suited-ace ladder specifically: ask about **A2s-A5s as one bundled piece**, reveal A6s-AKs — not just A2s alone.
- Preflop-only for now; postflop grouping will work differently (see the separate postflop draft, [[gm-poker-training-prototype]]).

## Decisions / conclusions

1. Suited aces (A2s-AKs) raise at every position — split into `SAH` (A6s-AKs, revealed) and `SAL` (A2s-A5s, the asked anchor piece).
2. UTG raises: all pairs (22-AA), all suited aces, KQs/KJs/KTs/QJs/QTs/JTs (always raise, `SBW`), K9s/Q9s/J9s/T9s (frontier piece, `SBF`, reveals `SBW`), AKo/AQo/AJo/KQo (`BO`), and ATo/KJo/QJo (frontier piece, `OBWF`, reveals `BO`). UTG folds: K8s-K2s, Q8s-Q2s, J8s-J2s, T8s-T2s, all suited connectors below T9s, KTo/QTo/JTo (`OF`, shown as a near-fold), and everything else.
3. HJ: A9o and JTo fold (confirmed) — other HJ boundaries (exact suited/offsuit cutoffs beyond what UTG already establishes) are still the old placeholder numbers, not yet finalized.
4. CO/BTN/SB: still placeholder, not reviewed this round — structurally updated to use the new group keys (`SAH`/`SAL`/`SBF`/`OBWF`/`OF` instead of `SA`/`OBW`) with values chosen to preserve their prior (placeholder) raise/fold outcomes exactly, so nothing regressed while only UTG was being finalized.

## Open questions

- HJ/CO/BTN/SB still need a real pass like UTG got (from more solver screenshots or Uri's review) — their current percentages are old placeholders carried forward structurally, not verified.
- Several near-zero mixed cells in the original screenshots were genuinely hard to call precisely (thin color slivers) — flagged at the time but not re-verified pixel-by-pixel; the shape is right, exact boundary hands on close calls carry some uncertainty.
- Whether KTo/QTo should raise at HJ (tentatively read as "probably raise" but grouped with JTo into the always-fold `OF` piece for UTG's sake) is unresolved — when HJ is properly done, `OF`/`OBWF` membership may need to split further.

## Proposed changes (now applied — see below)

Restructure `FAMS`/`DESC`/`STRENGTH`/`LADDERS`/`POS` in `public/gm-poker-training.html` per the decisions above; validate full UTG piece structure; leave HJ/CO/BTN/SB behaviorally unchanged (just rekeyed) pending their own review pass.

---

**Applied:** 2026-10-23 — `FAMS` split `SA`→`SAH`+`SAL` and `SBW`/`OBW` to add `SBF`/`OBWF`/`OF` frontier & fold-tier groups; `STRENGTH`, `LADDERS` (added a dedicated `['SAH','SAL']` ladder), and `POS[].strat` updated for all 5 positions (UTG with real corrected values, HJ/CO/BTN/SB rekeyed to preserve prior placeholder behavior). Verified headlessly in Node: no duplicate hand-to-group assignments, no dangling group keys, UTG produces exactly 6 pieces (low-pairs ladder, suited-ace ladder, suited-broadway-frontier ladder, offsuit-broadway-frontier ladder, 2 near-folds) matching every correction above. `genStrat`/`genStrat4`/`genStrat5`/`fvRange` (3-bet/facing-3-bet/facing-4-bet logic) updated to reference `SAH`/`SAL` instead of the now-removed `SA` key, preserving their existing suited-ace-blocker treatment.
