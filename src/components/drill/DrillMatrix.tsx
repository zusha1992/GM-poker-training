import { MATRIX_HANDS } from "@/lib/drill/matrix";

const RANK_ROW = Array.from(new Set(MATRIX_HANDS.map((c) => c.row))).sort(
  (a, b) => a - b,
);

export type CellState = {
  /** CSS background for this cell — undefined/empty means "not asked yet, not relevant". */
  background?: string;
  /** Currently part of the piece being shown in the swipe zone. */
  active?: boolean;
  /** Waiting to be asked (dim placeholder fill). */
  pending?: boolean;
};

type DrillMatrixProps = {
  cellStateByHand: Map<string, CellState>;
  rankLabels: readonly string[];
};

/** The 13x13 starting-hand matrix, colored per `cellStateByHand`. Pure
 * presentation — the drill engine owns what each cell should show. */
export function DrillMatrix({ cellStateByHand, rankLabels }: DrillMatrixProps) {
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
        />
      ))}
    </div>
  );
}

function RowCells({
  row,
  rankLabels,
  cellStateByHand,
}: {
  row: number;
  rankLabels: readonly string[];
  cellStateByHand: Map<string, CellState>;
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
            className="aspect-square max-w-full rounded-[3px] transition-colors duration-200"
            style={{
              background: state?.background ?? "var(--panel-2, #212A33)",
              boxShadow: state?.active
                ? "inset 0 0 0 1.5px rgba(255,255,255,.9)"
                : undefined,
              opacity: state?.pending ? 0.9 : 1,
            }}
          />
        );
      })}
    </>
  );
}
