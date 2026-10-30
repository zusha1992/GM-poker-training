import { readFileSync } from "node:fs";
import { join } from "node:path";
import { marked } from "marked";
import { RulebookScreen } from "@/components/RulebookScreen";

// Built once at deploy time from the rulebook in the repo, so the page always
// shows exactly the rules the drill follows.
export const dynamic = "force-static";

/** The "How many big blinds?" rulebook, readable from the lobby. */
export default function RulebookPage() {
  const md = readFileSync(join(process.cwd(), "decisions", "price-drill-rulebook.md"), "utf8");
  // Split at the "## " headings so every section can get its own "suggest a change" button.
  const parts = md.replace(/\r\n/g, "\n").split(/\n(?=## )/);
  const intro = parts[0].replace(/^# .*\n/, "");
  const sections = parts.slice(1).map((p) => {
    const [first, ...rest] = p.split("\n");
    return { title: first.replace(/^##\s*/, ""), html: marked.parse(rest.join("\n"), { async: false }) };
  });
  return <RulebookScreen introHtml={marked.parse(intro, { async: false })} sections={sections} />;
}
