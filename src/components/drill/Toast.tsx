"use client";

import { useCallback, useRef, useState } from "react";

export type ToastState = { message: string; good: boolean; id: number } | null;

/** A brief pill message at the top of the swipe zone ("Perfect +100",
 * "Not quite. Try again"). `show` replaces any toast already showing. */
export function useToast() {
  const [toast, setToast] = useState<ToastState>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const counter = useRef(0);

  const show = useCallback((message: string, good: boolean, ms = 1100) => {
    counter.current += 1;
    setToast({ message, good, id: counter.current });
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), ms);
  }, []);

  return { toast, show };
}

export function Toast({ toast }: { toast: ToastState }) {
  // Keep the last message while it fades out, so an empty pill never flashes.
  const [last, setLast] = useState<ToastState>(toast);
  if (toast && toast !== last) setLast(toast);
  const shown = toast ?? last;
  return (
    <div
      role="status"
      aria-live="polite"
      className="absolute left-1/2 top-[14px] z-[4] rounded-full px-3 py-1.5 text-[14px] font-semibold transition-all duration-200"
      style={{
        opacity: toast ? 1 : 0,
        transform: toast ? "translate(-50%, 0)" : "translate(-50%, -6px)",
        background: shown ? (shown.good ? "var(--call)" : "var(--raise)") : undefined,
        color: shown ? (shown.good ? "#06210F" : "#2A0705") : undefined,
        pointerEvents: "none",
        whiteSpace: "nowrap",
      }}
    >
      {shown?.message}
    </div>
  );
}
