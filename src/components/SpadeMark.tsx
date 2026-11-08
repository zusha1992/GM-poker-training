/** The GM logo (Noam 2026-11-08, option 4A): a spade with a chess piece cut
 * out of it. The king is the app's logo; every hand group and drill gets its
 * own piece in its own color, in place of the old Tetris shapes. */

export type ChessPiece = "king" | "queen" | "rook" | "bishop" | "knight" | "pawn";

const SPADE =
  "M100 14 C100 14 28 76 28 116 C28 141 47 156 68 156 C80 156 90 150 95 142 C93 158 88 170 76 182 L124 182 C112 170 107 158 105 142 C110 150 120 156 132 156 C153 156 172 141 172 116 C172 76 100 14 100 14 Z";

/** The cut-out: dark navy, so it reads as a hole on any background. */
const CUT = "#0E1A2B";

/** The tall pieces share the same body and stepped base (a tournament set). */
function Body() {
  return (
    <>
      <path d="M39 62 L61 62 C61 87 66 106 73 120 L27 120 C34 106 39 87 39 62 Z" />
      <Base />
    </>
  );
}

function Base() {
  return (
    <>
      <rect x="23" y="122" width="54" height="7" rx="3.5" />
      <path d="M21 131 H79 C79 135 82 138 86 140 H14 C18 138 21 135 21 131 Z" />
      <rect x="12" y="142" width="76" height="9" rx="3" />
    </>
  );
}

/** Each piece drawn in a 100×151 box, its base at the bottom. */
function Piece({ piece, color }: { piece: ChessPiece; color: string }) {
  switch (piece) {
    case "king":
      return (
        <>
          <path d="M46 0 H54 V7 H61 V15 H54 V24 H46 V15 H39 V7 H46 Z" />
          <rect x="43" y="25.5" width="14" height="4.5" rx="2" />
          <path d="M29 32 Q50 26 71 32 L64 53 L36 53 Z" />
          <rect x="32" y="55" width="36" height="6" rx="3" />
          <Body />
        </>
      );
    case "queen":
      return (
        <>
          <circle cx="50" cy="14" r="6" />
          <circle cx="27" cy="27" r="5" />
          <circle cx="73" cy="27" r="5" />
          <path d="M27 30 L36 53 L64 53 L73 30 L61 41 L50 21 L39 41 Z" />
          <rect x="32" y="55" width="36" height="6" rx="3" />
          <Body />
        </>
      );
    case "bishop":
      return (
        <>
          <circle cx="50" cy="12" r="5.5" />
          <path d="M50 18 C35 29 31 42 36 53 L64 53 C69 42 65 29 50 18 Z" />
          {/* The mitre's slit, in the spade's own color. */}
          <path d="M55 27 L46 40" stroke={color} strokeWidth="4" strokeLinecap="round" />
          <rect x="32" y="55" width="36" height="6" rx="3" />
          <Body />
        </>
      );
    case "rook":
      return (
        <>
          <path d="M28 26 H39 V34 H45 V26 H55 V34 H61 V26 H72 V50 H28 Z" />
          <rect x="31" y="52" width="38" height="6" rx="3" />
          <path d="M37 60 H63 L68 120 H32 Z" />
          <Base />
        </>
      );
    case "knight":
      return (
        <>
          <path d="M34 120 L72 120 L72 112 L67 108 C69 88 76 72 72 56 C68 40 56 28 42 28 L38 18 L33 30 C27 34 21 42 18 52 L14 64 C13 69 17 73 22 71 L32 67 C37 65 41 62 44 58 C44 72 39 88 35 104 L34 110 Z" />
          <circle cx="34" cy="44" r="3.5" fill={color} />
          <Base />
        </>
      );
    case "pawn":
      return (
        <>
          <circle cx="50" cy="56" r="16" />
          <rect x="34" y="73" width="32" height="6" rx="3" />
          <path d="M42 80 H58 C58 98 63 110 70 120 H30 C37 110 42 98 42 80 Z" />
          <Base />
        </>
      );
  }
}

/** Every group's old Tetris shape key, given a chess piece instead, so a
 * group keeps the same mark in every drill. */
const PIECE_OF: Record<string, ChessPiece> = {
  whole: "king",
  value: "queen",
  bluff: "knight",
  check: "rook",
  giveup: "pawn",
  O: "king",
  block6: "rook",
  I3: "bishop",
  I: "queen",
  dot2: "pawn",
  plus: "king",
  U: "rook",
  J: "knight",
  V: "pawn",
  P: "bishop",
  W: "knight",
  N: "bishop",
  Y: "queen",
  F: "knight",
  L5: "rook",
};

const PIECES: ChessPiece[] = ["queen", "rook", "bishop", "knight", "pawn", "king"];

/** A group's piece: its own from the table, else one picked from its key. */
export function pieceOf(kind: string): ChessPiece {
  if (PIECE_OF[kind]) return PIECE_OF[kind];
  let h = 0;
  for (const ch of kind) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return PIECES[h % PIECES.length];
}

/** The spade in `color` with `piece` cut out of it, `size` px tall. */
export function SpadeMark({ piece = "king", color, size = 40, label }: { piece?: ChessPiece; color: string; size?: number; label?: string }) {
  return (
    <svg
      width={(size * 160) / 180}
      height={size}
      viewBox="20 8 160 180"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      style={{ flexShrink: 0, overflow: "visible" }}
    >
      <path d={SPADE} fill={color} />
      <g transform="translate(74 66) scale(0.52)" fill={CUT}>
        <Piece piece={piece} color={color} />
      </g>
    </svg>
  );
}
