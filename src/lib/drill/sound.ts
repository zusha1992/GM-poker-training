/** Tiny Web Audio beeps + vibration feedback for drill answers. One shared
 * AudioContext, created lazily on first use (browsers block autoplay until
 * a user gesture, which "first use" always is here since it's only ever
 * called from a swipe/tap handler). */

let ctx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  try {
    const AudioCtx = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    ctx = ctx ?? new AudioCtx();
    return ctx;
  } catch {
    return null;
  }
}

export function tone(freq: number, duration: number, type: OscillatorType = "sine") {
  const audioCtx = getCtx();
  if (!audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch {
    // ignore — sound is a nice-to-have, never blocking
  }
}

export function goodSound() {
  tone(660, 0.12);
  setTimeout(() => tone(990, 0.18), 90);
}

export function badSound() {
  tone(160, 0.25, "square");
}

export function clickSound() {
  tone(440, 0.06);
}

export function confirmSound() {
  tone(523, 0.08);
}

export function buzz(pattern: number | number[]) {
  try {
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate(pattern);
    }
  } catch {
    // ignore
  }
}
