// The line before a spot (Noam 2026-11-16): what a hand is worth depends on the action, so the action is
// shown step by step with the pot after each bet. BTN opens 2.5, BB calls (SB folds): 5.5bb pot, 97.5 behind.
// Postflop BB acts first. The flop bet is 33% (1.8bb). Today's turn bets: 66% (6bb) or 150% (13.7bb).
// Planned (memory: feature_lines_per_spot): turn 75% / 150% / 200% / check, and flop check-check lines.

export type Who = "BTN" | "BB";
/** `pct`: the bet as a % of the pot, as the line names it (13.7 into 9.1 is "150%"). */
export type Act = { who: Who; act: "check" | "bet" | "call"; bb?: number; pct?: number };
export type StreetLine = { street: "flop" | "turn"; acts: Act[] };

export const PREFLOP_POT = 5.5;
export const START_BEHIND = 97.5;

const r1 = (x: number) => Math.round(x * 10) / 10;

/** The action before the question, street by street. The flop drill asks before any flop action. */
export function lineFor(street: "flop" | "turn" | "river", turnBet?: number): StreetLine[] {
  const flop: StreetLine = { street: "flop", acts: [{ who: "BB", act: "check" }, { who: "BTN", act: "bet", bb: 1.8, pct: 33 }, { who: "BB", act: "call", bb: 1.8 }] };
  if (street === "flop") return [];
  if (street === "turn") return [flop];
  const t = turnBet ?? 6;
  return [flop, { street: "turn", acts: [{ who: "BB", act: "check" }, { who: "BTN", act: "bet", bb: t, pct: t > 9.1 ? Math.round(t / 9.1 / 0.5) * 50 : Math.round((t / 9.1) * 100) }, { who: "BB", act: "call", bb: t }] }];
}

/** The 6 lines (Noam 2026-11-16, solved on A-7-2 by solve-lines.ts). */
export const LINE_KEYS = ["b75", "b150", "b200", "bx", "x75", "xx"] as const;
export type LineKey = (typeof LINE_KEYS)[number];
export const LINE_TITLE: Record<LineKey, string> = {
  b75: "Turn bet 75%",
  b150: "Turn overbet 150%",
  b200: "Turn overbet 200%",
  bx: "Turn checked through",
  x75: "Flop checked, turn bet 75%",
  xx: "Checked to the river",
};
export const LINE_SUB: Record<LineKey, string> = {
  b75: "Flop 33% call · turn 6.8 call · pot 22.7",
  b150: "Flop 33% call · turn 13.7 call · pot 36.5",
  b200: "Flop 33% call · turn 18.2 call · pot 45.5",
  bx: "Flop 33% call · turn check check · pot 9.1",
  x75: "Flop check check · turn 4.1 call · pot 13.7",
  xx: "Flop and turn check check · pot 5.5",
};

/** One line's action, street by street. */
export function lineOfKey(key: LineKey): StreetLine[] {
  const xx: Act[] = [{ who: "BB", act: "check" }, { who: "BTN", act: "check" }];
  const bet = (bb: number, pct: number): Act[] => [{ who: "BB", act: "check" }, { who: "BTN", act: "bet", bb, pct }, { who: "BB", act: "call", bb }];
  const flopBet: StreetLine = { street: "flop", acts: bet(1.8, 33) };
  const flopCheck: StreetLine = { street: "flop", acts: xx };
  switch (key) {
    case "b75": return [flopBet, { street: "turn", acts: bet(6.8, 75) }];
    case "b150": return [flopBet, { street: "turn", acts: bet(13.7, 150) }];
    case "b200": return [flopBet, { street: "turn", acts: bet(18.2, 200) }];
    case "bx": return [flopBet, { street: "turn", acts: xx }];
    case "x75": return [flopCheck, { street: "turn", acts: bet(4.1, 75) }];
    case "xx": return [flopCheck, { street: "turn", acts: xx }];
  }
}

/** Pot before each action of a street, and after the street. */
export function potsOf(line: StreetLine[]): { before: number[][]; after: number[] } {
  let pot = PREFLOP_POT;
  const before: number[][] = [];
  const after: number[] = [];
  for (const s of line) {
    const b: number[] = [];
    for (const a of s.acts) {
      b.push(r1(pot));
      pot += a.bb ?? 0;
    }
    before.push(b);
    after.push(r1(pot));
  }
  return { before, after };
}

/** The pot and each player's stack once the line is over. */
export function endOf(line: StreetLine[]): { pot: number; behind: number; spr: number } {
  const put = line.flatMap((s) => s.acts).filter((a) => a.who === "BTN").reduce((s, a) => s + (a.bb ?? 0), 0);
  const pot = potsOf(line).after.at(-1) ?? PREFLOP_POT;
  const behind = r1(START_BEHIND - put);
  return { pot, behind, spr: r1(behind / pot) };
}

const pctOf = (a: Act, potBefore: number) => a.pct ?? Math.round(((a.bb ?? 0) / potBefore) * 100);

/** "bet 1.8 (33%)", "call", "check". */
export function actShort(a: Act, potBefore: number): string {
  if (a.act === "bet") return `bet ${a.bb} (${pctOf(a, potBefore)}%)`;
  return a.act;
}

/** "BTN bets 1.8bb · 33% of the pot". */
export function actLong(a: Act, potBefore: number): string {
  if (a.act === "bet") return `${a.who} bets ${a.bb}bb · ${pctOf(a, potBefore)}% of the pot`;
  if (a.act === "call") return `${a.who} calls ${a.bb}bb`;
  return `${a.who} checks`;
}
