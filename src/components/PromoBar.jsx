import { PROMO_ITEMS } from "../data/site";

export default function PromoBar() {
  const line = PROMO_ITEMS.join("  ·  ");

  return (
    <div className="bg-[#111] text-white text-[11px] overflow-hidden border-b border-[#222]">
      <div className="promo-marquee py-2 whitespace-nowrap">
        <span className="inline-block px-4 tracking-wide">{line}</span>
        <span className="inline-block px-4 tracking-wide" aria-hidden>
          {line}
        </span>
      </div>
    </div>
  );
}
