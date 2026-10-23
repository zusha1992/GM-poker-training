---
name: apply-decision
description: Implement a previously-written decision document (from /log-decision) by editing the actual code/data in this repo. Only use after Noam has explicitly approved that document — this is the "go" step of the capture-then-apply workflow.
argument-hint: "<path to a file in decisions/, or omit for the most recent one>"
allowed-tools: Read Edit Write Grep Glob Bash
---

# Apply an approved decision document

## Purpose

Second half of the capture → apply workflow paired with `/log-decision`. By the time this runs, Noam has already reviewed and approved the structured document — your job here is implementation, not re-deciding anything.

## Procedure

1. Read the decision document (the given path, or if none given, the most recently modified file in `decisions/`). If `decisions/` is empty or the named file doesn't exist, stop and say so — don't invent a document from conversation memory alone.
2. Re-read the actual current files the document's "Current state" section referred to — fresh, not from memory of what they looked like when the document was written (time may have passed and they may have changed).
3. Implement exactly what's described in "Decisions / conclusions" and "Proposed changes" — nothing extrapolated beyond that. If an "Open questions" item in the document turns out to block an edit, stop and ask rather than guessing an answer.
4. If the change touches a packed data structure like the preflop groups in `public/gm-poker-training.html` (`FAMS`/`DESC`/`STRENGTH`/`POS`/`genStrat*`), apply the same care that domain needs: validate full coverage of all 169 starting hands with no gaps or duplicates before finishing, and touch only the data — never the swipe/animation/scoring engine code — unless the document explicitly calls for an engine/mechanic change.
5. After editing, append a line to the bottom of the decision document: `**Applied:** <date> — <one-line summary of what was changed>`, so the record shows it's been implemented, not just proposed.
6. Summarize what actually changed, file by file, in plain language for Noam.

## Explicit non-goals

- Don't re-litigate or second-guess the document's conclusions — that conversation already happened in `/log-decision`. If you spot a real problem with what was decided, flag it clearly, but still ask before deviating from the approved document.
