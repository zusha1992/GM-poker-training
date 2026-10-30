import type { FeedbackRow } from "./feedback";
import { SCENARIOS } from "./postflop/line-demo";
import { RUNOUTS } from "./postflop/price-hands";

/** Where a comment should take you: the exact hand / runout and street it
 * was written on. Works for older comments too, by reading the drill tag
 * (e.g. "postflop:price:A72 · 6♦ · K♠:turn"). */
export function feedbackLink(row: Pick<FeedbackRow, "drill" | "pageUrl">): string {
  const [area, drill, id, street] = row.drill.split(":");
  if (area === "postflop" && drill === "price" && id) {
    const i = RUNOUTS.findIndex((r) => r.id === id);
    if (i >= 0) return `/drills/postflop/price?runout=${i}${street ? `&street=${street}` : ""}`;
  }
  if (area === "postflop" && drill === "line-demo" && id) {
    const i = SCENARIOS.findIndex((s) => s.id === id);
    if (i >= 0) return `/drills/postflop/line?hand=${i}`;
  }
  if (row.pageUrl) return row.pageUrl;
  if (area === "preflop" && ["rfi", "tb", "fb", "fv"].includes(drill)) {
    return drill === "rfi" && id && id !== "lobby" ? `/drills/preflop/rfi?pos=${encodeURIComponent(id)}` : `/drills/preflop/${drill}`;
  }
  return "/";
}

/** "How many big blinds · A72 · 6♦ · K♠ · turn" → a shorter, readable place name. */
export function feedbackPlace(row: Pick<FeedbackRow, "drill" | "drillLabel">): string {
  return row.drillLabel || row.drill;
}
