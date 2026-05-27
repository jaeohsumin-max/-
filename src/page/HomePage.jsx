import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { PRODUCTS, CATEGORIES, getCategoryPath } from "../data/products";
import heroGif from "../assets/output.gif";

const FEATURED = PRODUCTS.filter((p) => p.badge === "BEST").slice(0, 4);
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

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-3">카테고리</h2>
          <p className="text-[#6b6560] text-sm">원하는 스타일을 찾아보세요</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.filter((c) => c.id !== "all").map((cat, i) => {
            const imgs = [
              "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&q=80",
              "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80",
              "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&q=80",
              "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&q=80",
              "https://images.unsplash.com/photo-1595777457583-95e059d581b5?w=400&q=80",
              "https://images.unsplash.com/photo-1583498276836-2a896f8bf6b5?w=400&q=80",
            ];
            return (
              <Link
                key={cat.id}
                to={getCategoryPath(cat.id)}
                className="group relative aspect-square overflow-hidden rounded-sm"
              >
                <img
                  src={imgs[i]}
                  alt={cat.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#181512]/40 group-hover:bg-[#181512]/50 transition-colors flex items-end p-4">
                  <span className="text-white font-medium tracking-wide">
                    {cat.label}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Best sellers */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#c45c4a] mb-2">
                Best Sellers
              </p>
              <h2 className="font-serif text-3xl md:text-4xl">베스트 상품</h2>
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
            {FEATURED.map((p) => (
              <ProductCard key={p.id} product={p} />
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
