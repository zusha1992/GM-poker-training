import { marked } from "marked";
import { RulebookScreen } from "@/components/RulebookScreen";
import { RULEBOOK_MD } from "@/lib/rulebook-content";

/** The "How many big blinds?" rulebook, readable from the lobby. The text is
 * decisions/price-drill-rulebook.md, copied into the app by `npm run rulebook`
 * (also run before every build), so the page always shows the rules the drill follows. */
export default function RulebookPage() {
  // Split at the "## " headings so every section can get its own "suggest a change" button.
  const parts = RULEBOOK_MD.split(/\n(?=## )/);
  const intro = parts[0].replace(/^# .*\n/, "");
  const sections = parts.slice(1).map((p) => {
    const [first, ...rest] = p.split("\n");
    return { title: first.replace(/^##\s*/, ""), html: marked.parse(rest.join("\n"), { async: false }) };
  });
  return <RulebookScreen introHtml={marked.parse(intro, { async: false })} sections={sections} />;
}
