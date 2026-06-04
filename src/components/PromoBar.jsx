import { PROMO_ITEMS } from "../data/site";

export default function PromoBar() {
  const line = PROMO_ITEMS.join("  ·  ");

  return (
    <div className="bg-gradient-to-r from-[#b8ebe3] via-[#9ddce8] to-[#c5e8f5] text-[#2a4a52] text-[11px] overflow-hidden border-b border-[#8ecdd8]">
      <div className="promo-marquee py-2 whitespace-nowrap">
        <span className="inline-block px-4 tracking-wide">{line}</span>
        <span className="inline-block px-4 tracking-wide" aria-hidden>
          {line}
        </span>
      </div>
    </div>
  );
}
