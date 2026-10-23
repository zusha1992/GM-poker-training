import { SEATS, type Seat } from "@/lib/drill/preflop/seats";

type SeatsRowProps = {
  heroSeat: Seat;
  openerSeat?: Seat;
  /** Label shown on the opener's chip: 'OPENS' | '3-BET' | '4-BET'. */
  openerTag?: string;
  /** fb/fv: everyone who isn't hero or opener already folded preflop. */
  allOthersFolded: boolean;
};

/** The 6-seat strip above the board: who's hero, who opened/3-bet/4-bet,
 * who already folded, who's still to act. */
export function SeatsRow({ heroSeat, openerSeat, openerTag, allOthersFolded }: SeatsRowProps) {
  const heroIdx = SEATS.indexOf(heroSeat);
  const openerIdx = openerSeat ? SEATS.indexOf(openerSeat) : -1;

  return (
    <div className="grid grid-cols-6 gap-[3px]" aria-label="Table seats">
      {SEATS.map((seat, i) => {
        const isHero = i === heroIdx;
        const isOpener = i === openerIdx;
        const folded = !isHero && !isOpener && (i < heroIdx || allOthersFolded);
        const tag = isHero ? "YOU" : isOpener ? openerTag ?? "" : folded ? "FOLD" : "TO ACT";
        return (
          <div
            key={seat}
            className="flex h-[22px] flex-row items-center justify-center gap-[3px] rounded-md font-[family-name:var(--font-display)] text-[12px] font-bold leading-[1.1]"
            style={{
              background: isHero ? "var(--mix)" : isOpener ? "var(--raise)" : "var(--panel)",
              border: `1px solid ${isHero ? "var(--mix)" : isOpener ? "var(--raise)" : "var(--line)"}`,
              color: isHero ? "#2B1C02" : isOpener ? "#fff" : "var(--muted)",
              opacity: folded ? 0.38 : 1,
            }}
          >
            {seat}
            {(isHero || isOpener) && (
              <small className="font-[family-name:var(--font-body)] text-[9px] font-bold tracking-[0.03em]">
                {tag}
              </small>
            )}
          </div>
        );
      })}
    </div>
  );
}
