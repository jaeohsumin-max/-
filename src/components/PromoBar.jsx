import { useEffect, useState } from "react";
import { PROMO_ITEMS } from "../data/site";

const INTERVAL_MS = 4000;

export default function PromoBar() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % PROMO_ITEMS.length);
        setVisible(true);
      }, 350);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#e8f7f5] via-[#edf8fc] to-[#f5fbff] text-[#5a7a82] text-[11px] border-b border-[#dceef5]">
      <div className="relative h-9 md:h-10 flex items-center justify-center overflow-hidden px-4">
        <p
          className={`text-center tracking-wide whitespace-nowrap transition-all duration-300 ease-in-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
          }`}
          key={index}
        >
          {PROMO_ITEMS[index]}
        </p>
      </div>
    </div>
  );
}
