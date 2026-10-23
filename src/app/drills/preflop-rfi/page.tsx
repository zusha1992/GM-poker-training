import { DrillEngine } from "@/components/drill/DrillEngine";
import { PREFLOP_RFI_UTG } from "@/lib/drill/preflop-rfi-utg";

export default function PreflopRfiPage() {
  return (
    <div className="h-dvh" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <DrillEngine mode={PREFLOP_RFI_UTG} />
    </div>
  );
}
