import { Suspense } from "react";
import { notFound } from "next/navigation";
import { PreflopDrillScreen } from "@/components/drill/preflop/PreflopDrillScreen";
import type { PreflopModeKey } from "@/lib/drill/preflop/modes";

const VALID_MODES: PreflopModeKey[] = ["rfi", "tb", "fb", "fv"];

export function generateStaticParams() {
  return VALID_MODES.map((mode) => ({ mode }));
}

export default async function PreflopModePage({
  params,
}: {
  params: Promise<{ mode: string }>;
}) {
  const { mode } = await params;
  if (!VALID_MODES.includes(mode as PreflopModeKey)) notFound();
  return (
    <Suspense>
      <PreflopDrillScreen modeKey={mode as PreflopModeKey} />
    </Suspense>
  );
}
