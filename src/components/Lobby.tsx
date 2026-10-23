"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { clickSound } from "@/lib/drill/sound";

type DrillCard = {
  key: string;
  title: string;
  sub: string;
  meta: string;
  colors: string[];
  href: string;
};

const DRILLS: DrillCard[] = [
  {
    key: "rfi",
    title: "Raise first in",
    sub: "Everyone folds to you · 5 positions",
    meta: "5 spots",
    colors: ["var(--raise)", "var(--raise)", "var(--raise)", "var(--raise)"],
    href: "/drills/preflop/rfi",
  },
  {
    key: "tb",
    title: "3-bet",
    sub: "Facing an open · pick any seats",
    meta: "15 spots",
    colors: ["var(--raise)", "var(--call)", "var(--fold)", "var(--mix)"],
    href: "/drills/preflop/tb",
  },
  {
    key: "fb",
    title: "Facing a 3-bet",
    sub: "You opened · 4-bet, call or fold",
    meta: "15 spots",
    colors: ["var(--raise)", "var(--call)", "transparent", "var(--fold)"],
    href: "/drills/preflop/fb",
  },
  {
    key: "fv",
    title: "Facing a 4-bet",
    sub: "You 3-bet · all in, call or fold",
    meta: "15 spots",
    colors: ["var(--raise)", "var(--raise)", "var(--call)", "var(--fold)"],
    href: "/drills/preflop/fv",
  },
  {
    key: "postflop",
    title: "Postflop (draft)",
    sub: "BTN c-bet vs BB · K72r, one strategy",
    meta: "New",
    colors: ["var(--mix)", "var(--fold)", "var(--mix)", "var(--fold)"],
    href: "/drills/postflop/btn-vs-bb",
  },
];

/** The app's home screen: pick a drill. Ported from the single-page HTML
 * prototype's lobby overlay into its own route. */
export function Lobby() {
  const router = useRouter();

  return (
    <div
      className="mx-auto flex h-dvh max-w-[460px] flex-col gap-4.5 overflow-y-auto px-4 py-7"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="flex flex-col items-center gap-2.5 text-center">
        <svg width="112" height="112" viewBox="0 0 120 120" role="img" aria-label="GM Poker Training logo">
          <circle cx="60" cy="60" r="56" fill="#1B242C" />
          <g fill="#F2B33D">
            <rect x="56" y="4" width="8" height="14" rx="2" />
            <rect x="56" y="102" width="8" height="14" rx="2" />
            <rect x="4" y="56" width="14" height="8" rx="2" />
            <rect x="102" y="56" width="14" height="8" rx="2" />
            <rect x="56" y="4" width="8" height="14" rx="2" transform="rotate(45 60 60)" />
            <rect x="56" y="4" width="8" height="14" rx="2" transform="rotate(-45 60 60)" />
            <rect x="56" y="102" width="8" height="14" rx="2" transform="rotate(45 60 60)" />
            <rect x="56" y="102" width="8" height="14" rx="2" transform="rotate(-45 60 60)" />
          </g>
          <circle cx="60" cy="60" r="41" fill="#10161B" stroke="#2C3640" strokeWidth="2" />
          <g>
            <rect x="30" y="36" width="13" height="13" rx="2.5" fill="#F2B33D" />
            <rect x="53.5" y="30" width="13" height="13" rx="2.5" fill="#F2564B" />
            <rect x="77" y="36" width="13" height="13" rx="2.5" fill="#F2B33D" />
            <rect x="30" y="51" width="13" height="13" rx="2.5" fill="#F2B33D" />
            <rect x="45.7" y="51" width="13" height="13" rx="2.5" fill="#F2B33D" />
            <rect x="61.3" y="51" width="13" height="13" rx="2.5" fill="#F2B33D" />
            <rect x="77" y="51" width="13" height="13" rx="2.5" fill="#F2B33D" />
            <rect x="30" y="67" width="60" height="5" rx="2" fill="#C98F22" />
          </g>
          <text x="60" y="94" textAnchor="middle" fontFamily="Chakra Petch, Arial Narrow, sans-serif" fontWeight="700" fontSize="15" letterSpacing="2" fill="#EEF2F5">
            GM
          </text>
        </svg>
        <div className="flex flex-col items-center leading-none">
          <b className="font-[family-name:var(--font-display)] text-[44px] font-bold tracking-[0.08em]" style={{ color: "var(--mix)" }}>
            GM
          </b>
          <span className="mt-1 font-[family-name:var(--font-display)] text-[15px] font-semibold tracking-[0.32em] uppercase" style={{ color: "var(--foreground)" }}>
            Poker Training
          </span>
        </div>
        <p className="m-0 text-[14px]" style={{ color: "var(--muted)" }}>
          A Duolingo-style drill for whole hand-ranges, preflop through the river.
        </p>
      </div>

      <div className="flex flex-col gap-2.5">
        {DRILLS.map((d) => (
          <button
            key={d.key}
            type="button"
            className="flex min-h-[72px] cursor-pointer items-center gap-3.5 rounded-2xl border p-3.5 text-left transition-transform active:scale-[0.98]"
            style={{ borderColor: "var(--mix)", background: "var(--panel)" }}
            onClick={() => {
              clickSound();
              router.push(d.href);
            }}
          >
            <span className="grid flex-shrink-0 grid-cols-2 gap-[3px]" aria-hidden="true">
              {d.colors.map((c, i) => (
                <i key={i} className="h-3.5 w-3.5 rounded-[3px]" style={{ background: c }} />
              ))}
            </span>
            <span className="min-w-0 flex-1">
              <b className="block font-[family-name:var(--font-display)] text-[18px] font-bold">{d.title}</b>
              <span className="text-[13px]" style={{ color: "var(--muted)" }}>
                {d.sub}
              </span>
            </span>
            <span className="font-[family-name:var(--font-display)] text-[14px] font-semibold" style={{ color: "var(--mix)", fontVariantNumeric: "tabular-nums" }}>
              {d.meta}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-auto flex flex-col items-center gap-1 text-[12px]" style={{ color: "var(--muted)" }}>
        <span>6-max cash · 100bb · proof of concept</span>
      </div>
      <Link href="/feedback" className="text-center text-[12px] underline" style={{ color: "var(--muted)" }}>
        All feedback across every drill
      </Link>
    </div>
  );
}
