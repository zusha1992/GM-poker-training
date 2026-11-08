"use client";

import { SpadeMark } from "@/components/SpadeMark";
import { useEffect, useRef, useState } from "react";
import { Sheet } from "@/components/ui/Sheet";
import { clickSound } from "@/lib/drill/sound";
import { DRILL_VIDEOS, youTubeOf } from "@/lib/drill/videos";

type Props = {
  drill: { key: string; title: string; sub: string } | null;
  onClose: () => void;
  onPlay: () => void;
};

/** Opened from a lobby drill card: watch the drill's explanation video
 * first, or go straight to the drill. */
export function DrillStartSheet({ drill, onClose, onPlay }: Props) {
  const [watching, setWatching] = useState(false);
  const [ended, setEnded] = useState(false);
  const video = youTubeOf(drill ? DRILL_VIDEOS[drill.key] : undefined);

  // A new drill opens on the two choices again.
  const [shownKey, setShownKey] = useState(drill?.key);
  if (drill?.key !== shownKey) {
    setShownKey(drill?.key);
    setWatching(false);
    setEnded(false);
  }

  return (
    <Sheet open={!!drill} onOpenChange={(open) => !open && onClose()} title={drill?.title ?? ""} hideTitle className="royal">
      {drill && (
        <div className="flex flex-col gap-3" data-testid="drill-start">
          <div>
            <h2 className="m-0 font-[family-name:var(--font-brand)] text-[22px] font-bold">{drill.title}</h2>
            <span className="text-[13px]" style={{ color: "var(--muted)" }}>
              {drill.sub}
            </span>
          </div>

          {watching ? (
            video ? (
              <YouTubePlayer id={video.id} vertical={video.vertical} onEnded={() => setEnded(true)} />
            ) : (
              <div
                className="flex aspect-video flex-col items-center justify-center gap-1.5 rounded-2xl border text-center"
                style={{ borderColor: "var(--line)", background: "var(--panel-2)" }}
                data-testid="video-soon"
              >
                <PlayIcon size={34} />
                <b className="font-[family-name:var(--font-display)] text-[17px]">Video coming soon</b>
                <span className="px-6 text-[12.5px]" style={{ color: "var(--muted)" }}>
                  The explanation for this drill is being recorded.
                </span>
              </div>
            )
          ) : (
            <button
              type="button"
              className="flex min-h-[64px] cursor-pointer items-center gap-3 rounded-2xl border p-3.5 text-left transition-transform active:scale-[0.98]"
              style={{ borderColor: "var(--line)", background: "var(--panel-2)" }}
              onClick={() => {
                clickSound();
                setWatching(true);
              }}
              data-testid="watch-video"
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full" style={{ background: "var(--raise)", color: "#fff" }}>
                <PlayIcon size={20} />
              </span>
              <span className="min-w-0 flex-1">
                <b className="block font-[family-name:var(--font-display)] text-[17px] font-bold">Watch the explanation video</b>
                <span className="text-[12.5px]" style={{ color: "var(--muted)" }}>
                  {video ? "Learn the idea, then try it" : "Coming soon"}
                </span>
              </span>
            </button>
          )}

          <button
            type="button"
            className="flex min-h-[64px] cursor-pointer items-center gap-3 rounded-2xl p-3.5 text-left transition-transform active:scale-[0.98]"
            style={{ background: "var(--mix)", color: "#0E1A2B", animation: ended ? "bump .5s ease 2" : undefined }}
            onClick={() => {
              clickSound();
              onPlay();
            }}
            data-testid="play-drill"
          >
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full" style={{ background: "#0E1A2B", color: "var(--mix)" }}>
              <SpadeMark piece="king" color="currentColor" size={24} />
            </span>
            <span className="min-w-0 flex-1">
              <b className="block font-[family-name:var(--font-display)] text-[17px] font-bold">{ended ? "Now try it: play the drill" : "Play the drill"}</b>
              <span className="text-[12.5px]" style={{ opacity: 0.75 }}>
                Drag each hand group where it belongs
              </span>
            </span>
          </button>
        </div>
      )}
    </Sheet>
  );
}

/** The YouTube player inside the app (no cookies until it plays), telling
 * us when the video ends so the drill can follow right away. */
function YouTubePlayer({ id, vertical, onEnded }: { id: string; vertical: boolean; onEnded: () => void }) {
  const frame = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (!String(e.origin).includes("youtube")) return;
      try {
        const data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
        // State 0 = ended.
        if (data?.event === "onStateChange" && data.info === 0) onEnded();
        if (data?.event === "infoDelivery" && data.info?.playerState === 0) onEnded();
      } catch {
        // not a player message
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [onEnded]);

  const origin = typeof window === "undefined" ? "" : window.location.origin;
  const src = `https://www.youtube-nocookie.com/embed/${id}?enablejsapi=1&rel=0&modestbranding=1&playsinline=1&autoplay=1&origin=${encodeURIComponent(origin)}`;

  return (
    <div
      className="mx-auto w-full overflow-hidden rounded-2xl"
      style={{ aspectRatio: vertical ? "9 / 16" : "16 / 9", maxHeight: "58dvh", maxWidth: vertical ? "calc(58dvh * 9 / 16)" : undefined, background: "#000" }}
    >
      <iframe
        ref={frame}
        src={src}
        title="Explanation video"
        className="h-full w-full"
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        onLoad={() => frame.current?.contentWindow?.postMessage(JSON.stringify({ event: "listening", id: 1 }), "*")}
        data-testid="video-player"
      />
    </div>
  );
}

function PlayIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" />
    </svg>
  );
}
