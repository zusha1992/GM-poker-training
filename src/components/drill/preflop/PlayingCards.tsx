import styles from "./PlayingCards.module.css";

/** Visual-only two-card rendering for a starting hand like "AKs" or "77" —
 * suited hands are drawn as two spades, offsuit/pairs as spade+heart. Not
 * meant to represent real suits, just a quick visual grouping cue. */
export function PlayingCards({ hand }: { hand: string }) {
  const r = (x: string) => (x === "T" ? "10" : x);
  const suited = hand.length === 3 && hand[2] === "s";
  return (
    <>
      <span className={`${styles.pc} ${styles.blk}`}>
        {r(hand[0])}
        <em>&spades;</em>
      </span>
      <span className={`${styles.pc} ${suited ? styles.blk : styles.red}`}>
        {r(hand[1])}
        <em>{suited ? "♠" : "♥"}</em>
      </span>
    </>
  );
}
