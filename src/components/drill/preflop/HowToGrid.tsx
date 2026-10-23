import type { DrillAction, SwipeDirection } from "@/lib/drill/types";
import { colorOf } from "@/lib/drill/colors";

const ARROW: Record<SwipeDirection, string> = { up: "↑", down: "↓", left: "←", right: "→" };

const GRID_POS: Record<SwipeDirection, string> = {
  up: "col-start-2 row-start-1",
  down: "col-start-2 row-start-3",
  left: "col-start-1 row-start-2",
  right: "col-start-3 row-start-2",
};

function whatText(modeKey: string, action: DrillAction): string {
  if (action === "raise") return modeKey === "rfi" ? "Open the pot" : modeKey === "fv" ? "Go all in" : "Re-raise";
  if (action === "call") return "Just call";
  if (action === "fold") return "Throw it away";
  if (action === "mix") return "Sometimes each";
  if (action === "small") return "Bet small";
  if (action === "check") return "Check it";
  return "";
}

type HowToGridProps = {
  modeKey: string;
  swipes: Partial<Record<SwipeDirection, DrillAction>>;
  labels: Record<DrillAction, string>;
};

/** The "how to answer" explainer: one arrow card per swipe direction,
 * arranged around a center icon representing the draggable piece. */
export function HowToGrid({ modeKey, swipes, labels }: HowToGridProps) {
  const directions = Object.keys(swipes) as SwipeDirection[];
  return (
    <div className="grid grid-cols-3 grid-rows-3 items-center justify-items-center gap-2">
      {directions.map((dir) => {
        const action = swipes[dir];
        if (!action) return null;
        const color = colorOf(action);
        return (
          <div
            key={dir}
            className={`flex min-w-[76px] flex-col items-center gap-0.5 rounded-xl px-2.5 py-2 font-[family-name:var(--font-display)] text-[13px] font-bold tracking-[0.06em] ${GRID_POS[dir]}`}
            style={{ background: `${color}22`, border: `1.5px solid ${color}`, color }}
          >
            <span>
              {ARROW[dir]} {labels[action]?.toUpperCase()}
            </span>
            <small className="font-[family-name:var(--font-body)] text-[11px] font-medium opacity-85">
              {whatText(modeKey, action)}
            </small>
          </div>
        );
      })}
      <div
        className="col-start-2 row-start-2 grid h-[72px] w-[72px] place-items-center rounded-2xl border-2"
        style={{ background: "var(--panel-2)", borderColor: "var(--line)", animation: "wig 2.4s ease-in-out infinite" }}
      >
        <svg width="34" height="34" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="8" height="8" rx="2" fill="#FFD36B" />
          <rect x="13" y="3" width="8" height="8" rx="2" fill="#FFD36B" />
          <rect x="13" y="13" width="8" height="8" rx="2" fill="#FFD36B" />
        </svg>
      </div>
    </div>
  );
}
