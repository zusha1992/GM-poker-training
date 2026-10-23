import { footprint } from "@/lib/drill/matrix";

type PieceShapeProps = {
  hands: string[];
  color: string;
  /** Max pixel size for the longer side of the shape. */
  maxSize?: number;
};

/** Renders a piece's real footprint on the 13x13 matrix as a small grid of
 * colored/empty blocks — the "Tetris piece" visual, sized to however many
 * ranks the group actually spans. */
export function PieceShape({ hands, color, maxSize = 64 }: PieceShapeProps) {
  if (hands.length === 0) return null;

  const { minRow, maxRow, minCol, maxCol, cellSet } = footprint(hands);
  const h = maxRow - minRow + 1;
  const w = maxCol - minCol + 1;
  const cell = Math.max(4, Math.min(16, Math.floor(maxSize / Math.max(h, w)) - 1));

  const rows = [];
  for (let r = minRow; r <= maxRow; r += 1) {
    for (let c = minCol; c <= maxCol; c += 1) {
      rows.push({ r, c, on: cellSet.has(`${r},${c}`) });
    }
  }

  return (
    <div
      className="grid gap-[1px]"
      style={{
        gridTemplateColumns: `repeat(${w}, ${cell}px)`,
        gridAutoRows: `${cell}px`,
      }}
      aria-hidden="true"
    >
      {rows.map(({ r, c, on }) => (
        <div
          key={`${r}-${c}`}
          className="rounded-[2px]"
          style={{ background: on ? color : "transparent" }}
        />
      ))}
    </div>
  );
}
