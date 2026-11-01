/** The explanation video for each lobby drill, as a YouTube link (upload it
 * as Unlisted). Empty = "coming soon". Keys match the lobby's drill keys. */
export const DRILL_VIDEOS: Record<string, string> = {
  rfi: "",
  tb: "",
  fb: "",
  fv: "",
  postflop: "",
  line: "",
  price: "",
};

export type YouTubeVideo = { id: string; vertical: boolean };

/** The video id from any YouTube link (watch, youtu.be, shorts, embed). */
export function youTubeOf(url: string | undefined): YouTubeVideo | null {
  if (!url) return null;
  const m = url.match(/(?:youtu\.be\/|[?&]v=|\/shorts\/|\/embed\/|\/live\/)([A-Za-z0-9_-]{11})/);
  return m ? { id: m[1], vertical: url.includes("/shorts/") } : null;
}
