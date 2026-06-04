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

/** 한 사이클: 문구 3개만 보여 주고, 화면 너비만큼 비운 뒤 다시 등장 */
function PromoCycle({ ariaHidden = false }) {
  return (
    <div
      className="inline-flex items-center shrink-0"
      aria-hidden={ariaHidden || undefined}
    >
      <div className="inline-flex items-center justify-center px-8 md:px-12">
        <PromoLine />
      </div>
      <div className="shrink-0 w-[100vw]" />
    </div>
  );
}

export default function PromoBar() {
  return (
    <div className="bg-gradient-to-r from-[#b8ebe3] via-[#9ddce8] to-[#c5e8f5] text-[#2a4a52] text-[11px] overflow-hidden border-b border-[#8ecdd8]">
      <div className="promo-track py-2.5 whitespace-nowrap">
        <PromoCycle />
        <PromoCycle ariaHidden />
      </div>
    </div>
  );
}
