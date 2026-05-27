import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { PRODUCTS, formatPrice } from "../data/products";
import heroGif from "../assets/output.gif";

const BEST_ITEMS = [
  { name: "울 블렌드 오버코트", price: 289000 },
  { name: "캐시미어 터틀넥", price: 89000 },
  { name: "실크 미디 드레스", price: 168000 },
  { name: "와이드 슬랙스", price: 98000 },
  { name: "오버사이즈 블레이저", price: 198000 },
  { name: "A라인 롱 스커트", price: 72000 },
];

const NEW_ARRIVALS = PRODUCTS.filter((p) => p.badge === "NEW" || p.badge === "SALE").slice(0, 4);

export default function HomePage() {
  return (
  <>
      {/* Hero */}
      <section className="w-full bg-[#f0ede8] flex items-center justify-center py-6 md:py-10">
        <img
          src={heroGif}
          alt="CODEMUSE"
          className="w-full max-w-3xl md:max-w-4xl max-h-[45vh] md:max-h-[50vh] object-contain mx-auto px-5"
        />
      </section>

      {/* Best */}
      <section className="bg-white py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-sm tracking-[0.25em] uppercase text-[#181512]">
              BEST
            </h2>
            <Link
              to="/shop/best"
              className="text-[11px] text-[#6b6560] hover:text-[#181512] tracking-wide"
            >
              View all
            </Link>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
            {BEST_ITEMS.map((item) => (
              <Link
                key={item.name}
                to="/shop/best"
                className="group block"
              >
                <div className="aspect-[3/4] bg-[#ece8e3] mb-2 flex items-center justify-center">
                  <span className="text-[10px] tracking-widest uppercase text-[#a39e98]">
                    Image
                  </span>
                </div>
                <p className="text-[11px] text-[#181512] line-clamp-2 leading-snug mb-1 group-hover:underline underline-offset-2">
                  {item.name}
                </p>
                <p className="text-[11px] text-[#6b6560]">
                  {formatPrice(item.price)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New arrivals */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#6b6560] mb-2">
              New & Sale
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">신상 · 할인</h2>
          </div>
          <Link
            to="/shop"
            className="text-sm text-[#6b6560] hover:text-[#181512] flex items-center gap-1"
          >
            전체 보기
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {NEW_ARRIVALS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

    </>
  );
}
