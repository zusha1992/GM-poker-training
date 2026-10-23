export const SEATS = ["UTG", "HJ", "CO", "BTN", "SB", "BB"] as const;
export type Seat = (typeof SEATS)[number];

export const SEAT_NAME: Record<Seat, string> = {
  UTG: "Under the gun",
  HJ: "Hijack",
  CO: "Cutoff",
  BTN: "Button",
  SB: "Small blind",
  BB: "Big blind",
};
