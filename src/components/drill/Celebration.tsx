"use client";

import { useEffect, useState } from "react";

const CONFETTI_COLORS = ["#F2564B", "#35C277", "#3D7EF0", "#F2B33D", "#B49CFF", "#FF8FC1"];

export type CelebrationTrigger = { id: number; streak: number; bonus: number };

type ConfettiPiece = { key: number; color: string; dx: number; dy: number; rot: number; delay: number };

function buildConfetti(streak: number): ConfettiPiece[] {
  const count = streak >= 5 ? 40 : 26;
  return Array.from({ length: count }, (_, i) => {
    const angle = Math.random() * Math.PI * 2;
    const radius = 90 + Math.random() * 120;
    return {
      key: i,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      dx: Math.cos(angle) * radius,
      dy: Math.sin(angle) * radius - 40,
      rot: Math.random() * 720 - 360,
      delay: Math.random() * 80,
    };
  });
}

/** The "3 in a row! / On fire!" confetti burst, shown briefly whenever a
 * streak milestone (3, 5, then every 5) is hit. `trigger.id` must change
 * every time, even if the streak count repeats, to replay the animation. */
export function Celebration({ trigger }: { trigger: CelebrationTrigger | null }) {
  const [shown, setShown] = useState<{ trigger: CelebrationTrigger; confetti: ConfettiPiece[] } | null>(null);

  useEffect(() => {
    if (!trigger) return;
    // Deferred a tick so this is a reaction to the external trigger changing,
    // not a synchronous render-phase state update.
    const start = setTimeout(() => setShown({ trigger, confetti: buildConfetti(trigger.streak) }), 0);
    const clear = setTimeout(() => setShown(null), 1700);
    return () => {
      clearTimeout(start);
      clearTimeout(clear);
    };
  }, [trigger]);

  if (!shown) return null;
  const { trigger: visible, confetti } = shown;

  return (
    <div
      className="absolute inset-0 z-[3] flex flex-col items-center justify-start pt-10 text-center"
      style={{ pointerEvents: "none" }}
      aria-live="polite"
    >
      <div
        className="font-[family-name:var(--font-display)] text-[40px] font-bold leading-none"
        style={{ color: "var(--mix)", animation: "celin 1.6s cubic-bezier(.3,1.4,.5,1) forwards" }}
      >
        {visible.streak >= 5 ? "On fire!" : "3 in a row!"}
      </div>
      <div
        className="mt-1.5 rounded-full px-2.5 py-0.5 font-[family-name:var(--font-display)] text-[15px] font-semibold"
        style={{
          color: "var(--foreground)",
          background: "var(--panel)",
          animation: "celin 1.6s .08s cubic-bezier(.3,1.4,.5,1) backwards forwards",
        }}
      >
        {visible.streak} perfect in a row &middot; +{visible.bonus} bonus
      </div>
      {confetti.map((p) => (
        <i
          key={p.key}
          className="absolute left-1/2 top-1/2 h-[9px] w-[9px] rounded-[2px]"
          style={
            {
              background: p.color,
              "--dx": `${p.dx}px`,
              "--dy": `${p.dy}px`,
              "--rot": `${p.rot}deg`,
              animation: "conf 1.1s cubic-bezier(.2,.8,.4,1) forwards",
              animationDelay: `${p.delay}ms`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
