import { RFI_SPOTS } from "./rfi";
import type { Seat } from "./seats";

/** Raise first in plays like game levels (Noam/Uri 2026-11-03): it starts at
 * UTG, and finishing a seat unlocks the next one. Progress lives in this
 * viewer's browser only; when it can't be read, the player starts at UTG. */
const KEY = "gm.rfi.finished";

/** The seat to play now: the first one not finished yet (UTG again once all are done). */
export function currentRfiSeat(): Seat {
  let finished = 0;
  try {
    finished = Number(localStorage.getItem(KEY) ?? 0) || 0;
  } catch {
    // storage blocked: start at UTG
  }
  return (RFI_SPOTS[finished] ?? RFI_SPOTS[0]).key;
}

/** Marks a seat finished, unlocking the next one. Replaying an earlier seat changes nothing. */
export function finishRfiSeat(seat: Seat) {
  const done = RFI_SPOTS.findIndex((s) => s.key === seat) + 1;
  try {
    const before = Number(localStorage.getItem(KEY) ?? 0) || 0;
    if (done > before) localStorage.setItem(KEY, String(done));
  } catch {
    // storage blocked: progress just isn't remembered
  }
}
