import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { getBestItems, getNewArrivals } from "../data/products";

function MallSection({ eyebrow, title, products, moreLink, pageSize = 8 }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(products.length / pageSize));
  const slice = products.slice(0, page * pageSize);
  const canMore = page < totalPages;

  return (
    <section className="py-10 md:py-14 border-b border-[#eee]">
      <div className="max-w-[1280px] mx-auto px-4">
        {eyebrow && (
          <p className="text-center text-[12px] text-[#888] mb-1">{eyebrow}</p>
        )}
        <h2 className="text-center text-[16px] md:text-[18px] font-semibold text-[#111] tracking-wide mb-8 md:mb-10">
          {title}
        </h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-8 md:gap-x-4 md:gap-y-10">
          {slice.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} mall />
            </li>
          ))}
        </ul>
        {canMore && (
          <div className="text-center mt-10">
            <button
              type="button"
              onClick={() => setPage((p) => p + 1)}
              className="text-[11px] text-[#666] border border-[#ddd] px-10 py-2 hover:border-[#333] hover:text-black"
            >
              더보기
            </button>
          </div>
        )}
        <p className="text-center mt-5">
          <Link
            to={moreLink}
            className="text-[11px] text-[#999] hover:text-black underline underline-offset-2"
          >
            전체보기
          </Link>
        </p>
      </div>
    </section>
  );
}

export default function HomePage() {
  const nowBest = getBestItems(8);
  const newArrivals = getNewArrivals(8);

  return (
    <>
      <MallSection
        eyebrow="실시간 인기 순위!"
        title="NOW BEST"
        products={nowBest}
        moreLink="/shop/best"
        pageSize={8}
      />

      <MallSection
        title="NEW ARRIVALS"
        products={newArrivals}
        moreLink="/shop/new"
        pageSize={8}
      />
    </>
  );
}
