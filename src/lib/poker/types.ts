export const RANKS = [
  "A",
  "K",
  "Q",
  "J",
  "T",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
] as const;

export const SUITS = ["s", "h", "d", "c"] as const;

export const POSITIONS = ["UTG", "HJ", "CO", "BTN", "SB", "BB"] as const;

export type Rank = (typeof RANKS)[number];
export type Suit = (typeof SUITS)[number];
export type Position = (typeof POSITIONS)[number];

export type Card = {
  rank: Rank;
  suit: Suit;
};
