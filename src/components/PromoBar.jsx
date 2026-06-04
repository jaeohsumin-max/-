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

/** 한 사이클: 문구 3개 → 빈 구간(다시 나오기 전 여백) */
function PromoCycle() {
  return (
    <>
      <div className="inline-flex items-center justify-center shrink-0 px-8 md:px-12 min-w-max">
        <PromoLine />
      </div>
      <div className="inline-block shrink-0 w-[100vw] max-w-full" aria-hidden />
    </>
  );
}

export default function PromoBar() {
  return (
    <div className="bg-gradient-to-r from-[#b8ebe3] via-[#9ddce8] to-[#c5e8f5] text-[#2a4a52] text-[11px] overflow-hidden border-b border-[#8ecdd8]">
      <div className="promo-track py-2.5 whitespace-nowrap">
        <PromoCycle />
        <div className="inline-flex shrink-0" aria-hidden>
          <PromoCycle />
        </div>
      </div>
    </div>
  );
}
