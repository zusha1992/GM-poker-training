import type { FeedbackContext } from "@/lib/drill/feedback";

/** Where a note was written: board and street, the hand group on screen,
 * the app's answer and the writer's last try. `hideApp` keeps the app's
 * answer out of view while the writer is still solving that group. */
export function FeedbackContextCard({ ctx, hideApp = false }: { ctx: FeedbackContext; hideApp?: boolean }) {
  return (
    <div
      className="flex flex-col gap-0.5 rounded-lg border px-2 py-1.5 text-[11.5px] leading-snug"
      style={{ borderColor: "var(--line)", background: "var(--panel-2)", color: "var(--muted)" }}
      data-testid="feedback-context"
    >
      <span>
        <b style={{ color: "var(--mix)" }}>{ctx.drill}</b> · <span style={{ color: "var(--foreground)" }}>{ctx.spot}</span>
      </span>
      {ctx.focus && (
        <span>
          Group: <b style={{ color: "var(--foreground)" }}>{ctx.focus}</b>
        </span>
      )}
      {(ctx.app || ctx.player) && (
        <span>
          {ctx.app && !hideApp && (
            <>
              App says: <b style={{ color: "var(--foreground)" }}>{ctx.app}</b>
            </>
          )}
          {ctx.app && !hideApp && ctx.player && " · "}
          {ctx.player && (
            <>
              Tried: <b style={{ color: "var(--raise)" }}>{ctx.player}</b>
            </>
          )}
        </span>
      )}
    </div>
  );
}
