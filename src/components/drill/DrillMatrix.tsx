import { MATRIX_HANDS } from "@/lib/drill/matrix";
import { FOLD_DIM, OUT_OF_RANGE_PATTERN, PENDING_FILL } from "@/lib/drill/colors";

const RANK_ROW = Array.from(new Set(MATRIX_HANDS.map((c) => c.row))).sort(
  (a, b) => a - b,
);

export type CellState = {
  /** CSS background (solid color or gradient) for an answered/pre-filled cell. */
  background?: string;
  /** Currently part of the piece being shown in the swipe zone. */
  active?: boolean;
  /** Waiting to be asked later (dim placeholder fill). */
  pending?: boolean;
  /** "out" = not in the hero's range at all (diagonal stripe). "auto" = a
   * guaranteed fold that wasn't worth asking about (dim solid fill). */
  variant?: "out" | "auto";
};

type DrillMatrixProps = {
  cellStateByHand: Map<string, CellState>;
  rankLabels: readonly string[];
  onCellClick?: (hand: string) => void;
};

/** The 13x13 starting-hand matrix, colored per `cellStateByHand`. Pure
 * presentation — the drill screen owns what each cell should show. */
export function DrillMatrix({ cellStateByHand, rankLabels, onCellClick }: DrillMatrixProps) {
  return (
    <div
      className="grid gap-[1.5px]"
      style={{ gridTemplateColumns: `10px repeat(13, minmax(0, 1fr))` }}
      role="img"
      aria-label="Hand matrix"
    >
      <div />
      {rankLabels.map((r) => (
        <div
          key={`col-${r}`}
          className="flex items-center justify-center text-[9px] text-neutral-400"
        >
          {r}
        </div>
      ))}
      {RANK_ROW.map((row) => (
        <RowCells
          key={row}
          row={row}
          rankLabels={rankLabels}
          cellStateByHand={cellStateByHand}
          onCellClick={onCellClick}
        />
      ))}
    </div>
  );
}

function backgroundFor(state: CellState | undefined): string {
  if (state?.variant === "out") return OUT_OF_RANGE_PATTERN;
  if (state?.variant === "auto") return FOLD_DIM;
  if (state?.background) return state.background;
  if (state?.pending) return PENDING_FILL;
  return "var(--panel-2, #212A33)";
}

function RowCells({
  row,
  rankLabels,
  cellStateByHand,
  onCellClick,
}: {
  row: number;
  rankLabels: readonly string[];
  cellStateByHand: Map<string, CellState>;
  onCellClick?: (hand: string) => void;
}) {
  const cells = MATRIX_HANDS.filter((c) => c.row === row).sort(
    (a, b) => a.col - b.col,
  );

  return (
    <>
      <div className="flex items-center justify-center text-[9px] text-neutral-400">
        {rankLabels[row]}
      </div>
      {cells.map((combo) => {
        const state = cellStateByHand.get(combo.key);
        return (
          <div
            key={combo.key}
            title={combo.key}
            onClick={onCellClick ? () => onCellClick(combo.key) : undefined}
            className="aspect-square max-w-full rounded-[3px] transition-colors duration-200"
            style={{
              background: backgroundFor(state),
              boxShadow: state?.active
                ? "inset 0 0 0 1.5px rgba(255,255,255,.9)"
                : undefined,
              cursor: onCellClick ? "pointer" : undefined,
            }}
          />
        );
      })}
    </>
  );
}
