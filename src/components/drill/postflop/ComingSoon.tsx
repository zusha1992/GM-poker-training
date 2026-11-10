"use client";

import { useRouter } from "next/navigation";
import { SpadeMark, type ChessPiece } from "@/components/SpadeMark";
import { Shell } from "./drill-ui";

/** A drill that's in the lobby but not built yet (Noam 2026-11-10: Turn and River come after the Flop). */
export function ComingSoon({ title, piece, text }: { title: string; piece: ChessPiece; text: string }) {
  const router = useRouter();
  return (
    <Shell>
      <div className="royal flex h-full flex-col items-center justify-center gap-4 text-center" data-testid="coming-soon">
        <SpadeMark piece={piece} color="var(--ivory)" size={84} />
        <b className="font-[family-name:var(--font-brand)] text-[26px] font-bold">{title}</b>
        <span className="rounded-full px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: "#0E1A2B", background: "var(--gold)" }}>
          Coming soon
        </span>
        <p className="m-0 max-w-[300px] text-[14px] leading-[1.5]" style={{ color: "var(--muted)" }}>
          {text}
        </p>
        <button type="button" className="h-[44px] w-full max-w-[300px] cursor-pointer rounded-xl border text-[14px] font-semibold" style={{ borderColor: "var(--line)" }} onClick={() => router.push("/")}>
          Back to lobby
        </button>
      </div>
    </Shell>
  );
}
