import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { PRODUCTS, CATEGORIES, getCategoryPath } from "../data/products";

const FEATURED = PRODUCTS.filter((p) => p.badge === "BEST").slice(0, 4);
const NEW_ARRIVALS = PRODUCTS.filter((p) => p.badge === "NEW" || p.badge === "SALE").slice(0, 4);

export default function HomePage() {
  return (
  <>
      {/* Hero */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#181512]/80 via-[#181512]/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-10 py-20 w-full">
          <p className="text-[#d4a39e] text-xs tracking-[0.3em] uppercase mb-4">
            Spring Collection 2026
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] max-w-2xl mb-6">
            당신의 일상을
            <br />
            더 아름답게
          </h1>
          <p className="text-white/80 text-sm md:text-base max-w-md mb-10 leading-relaxed">
            TOP부터 SKIRT까지, 엄선된 의류 컬렉션으로
            완성하는 프리미엄 패션 쇼핑.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/shop"
              className="inline-block bg-white text-[#181512] px-8 py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#faf9f6] transition-colors"
            >
              쇼핑 시작하기
            </Link>
            <Link
              to="/shop/new"
              className="inline-block border border-white/60 text-white px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition-colors"
            >
              신상품 보기
            </Link>
          </div>
        </div>
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

      {/* Banner */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-8">
        <div className="relative bg-[#e8e4df] rounded-sm overflow-hidden flex flex-col md:flex-row items-center">
          <div className="flex-1 p-10 md:p-16">
            <p className="text-xs tracking-[0.2em] uppercase text-[#6b6560] mb-3">
              Limited Offer
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              5만원 이상
              <br />
              무료 배송
            </h2>
            <p className="text-sm text-[#6b6560] mb-6">
              전 상품 3일 이내 발송 · 7일 이내 무료 교환
            </p>
            <Link
              to="/shop"
              className="inline-block bg-[#181512] text-white px-6 py-3 text-xs tracking-widest uppercase"
            >
              지금 쇼핑하기
            </Link>
          </div>
          <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:h-80">
            <img
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
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

      {/* Trust */}
      <section className="border-t border-[#e8e4df] py-12">
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: "local_shipping", title: "무료배송", desc: "5만원 이상" },
            { icon: "verified", title: "정품 보증", desc: "100% 정품" },
            { icon: "sync", title: "1일 교환", desc: "조형우 바보" },
            { icon: "support_agent", title: "고객센터", desc: "1588-0000" },
          ].map((item) => (
            <div key={item.title}>
              <span className="material-symbols-outlined text-[32px] text-[#c45c4a] mb-3">
                {item.icon}
              </span>
              <p className="font-medium text-sm mb-1">{item.title}</p>
              <p className="text-xs text-[#6b6560]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
