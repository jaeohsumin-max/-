import { PROMO_ITEMS } from "../data/site";

function PromoLine() {
  return (
    <div className="inline-flex items-center shrink-0">
      {PROMO_ITEMS.map((item, index) => (
        <span
          key={item}
          className={`tracking-wide whitespace-nowrap ${
            index > 0 ? "ml-12 sm:ml-16 md:ml-24 lg:ml-32" : ""
          }`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function PromoBar() {
  return (
    <div className="bg-gradient-to-r from-[#b8ebe3] via-[#9ddce8] to-[#c5e8f5] text-[#2a4a52] text-[11px] overflow-hidden border-b border-[#8ecdd8]">
      <div className="promo-marquee py-2.5 whitespace-nowrap">
        <div className="inline-flex items-center px-6 md:px-10">
          <PromoLine />
        </div>
        <div className="inline-flex items-center px-6 md:px-10" aria-hidden>
          <PromoLine />
        </div>
      </div>
    </div>
  );
}
