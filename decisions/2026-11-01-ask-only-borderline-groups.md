# Ask only borderline groups (3-bet, facing 3-bet, facing 4-bet)

**Date:** 2026-11-01 · **From:** Noam

> "If you ask me in a 3-bet pot do I 3-bet aces, kings, queens, that's ridiculous, everybody knows. Apply this to facing 4-bets, facing 3-bets and 3-bets: ask the borderline hands first, and complete automatically the things that are obvious to everybody."

Same principle as the raise-first-in note (pairs and suited aces start filled in).

## General rule (all three drills, every seat pair)

- Line the groups in play up from strongest to weakest.
- A clear group (one answer ≥ 80%) with **the same answer as the groups on both sides of it** is obvious: it starts filled in with its colour.
- AA–QQ that simply 3-bet / 4-bet / go all in are always filled in.
- Asked: every group on a border between two answers, every mix, and the two strongest folds (unchanged).

Code: `obviousKeys` in `src/lib/drill/preflop/families.ts`.

## Note

The 3-bet / facing-3-bet / facing-4-bet percentages are still the placeholder formula, not Uri's or solver ranges. Some answers look wrong (e.g. suited aces A6s–AKs answer "fold" vs a UTG open from HJ/CO/BTN), which needs real ranges.
