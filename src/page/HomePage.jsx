import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import {
  CATEGORIES,
  getBestItems,
  getCategoryPath,
  getNewArrivals,
  getProductsByCategory,
} from "../data/products";
import heroGif from "../assets/output.gif";

const HOME_TABS = ["OUTER", "TOP", "BOTTOM", "SKIRT", "DRESS/SET"];

function SectionBlock({ title, products, moreLink, pageSize = 8 }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(products.length / pageSize));
  const slice = products.slice(0, page * pageSize);
  const canMore = page < totalPages;

  return (
    <section className="py-10 md:py-12 border-b border-[#eee]">
      <div className="max-w-[1280px] mx-auto px-4">
        <h2 className="text-center text-[15px] md:text-base font-semibold text-[#111] tracking-wide mb-6 md:mb-8">
          {title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {slice.map((product) => (
            <ProductCard key={product.id} product={product} compact />
          ))}
        </div>
        {canMore && (
          <div className="text-center mt-8">
            <button
              type="button"
              onClick={() => setPage((p) => p + 1)}
              className="text-[12px] text-[#666] border border-[#ddd] px-8 py-2.5 hover:border-[#333] hover:text-black transition-colors"
            >
              View more ({page}/{totalPages})
            </button>
          </div>
        )}
        <div className="text-center mt-4">
          <Link
            to={moreLink}
            className="text-[11px] text-[#999] hover:text-black underline underline-offset-2"
          >
            전체보기
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("OUTER");
  const tabId =
    CATEGORIES.find((c) => c.label === activeTab)?.id ??
    (activeTab === "DRESS/SET" ? "dress" : activeTab.toLowerCase());
  const tabProducts = getProductsByCategory(tabId).slice(0, 4);

  const newArrivals = getNewArrivals(20);
  const bestItems = getBestItems(26);

  return (
    <>
      <section className="w-full bg-[#f5f5f5] flex items-center justify-center py-4 md:py-6">
        <img
          src={heroGif}
          alt="CODEMUSE"
          className="w-full max-w-2xl max-h-[38vh] object-contain mx-auto px-4"
        />
      </section>

      <section className="bg-white border-b border-[#eee]">
        <div className="max-w-[1280px] mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6 text-[13px]">
            {HOME_TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`pb-1 border-b-2 transition-colors ${
                  activeTab === tab
                    ? "border-black text-black font-semibold"
                    : "border-transparent text-[#888] hover:text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {tabProducts.map((product) => (
              <ProductCard key={product.id} product={product} compact />
            ))}
          </div>
          <p className="text-center mt-6">
            <Link
              to={getCategoryPath(tabId)}
              className="text-[12px] text-[#666] hover:text-black"
            >
              {activeTab} 더보기 →
            </Link>
          </p>
        </div>
      </section>

      <SectionBlock
        title="NEW ARRIVALS"
        products={newArrivals}
        moreLink="/shop/new"
        pageSize={10}
      />

      <SectionBlock
        title="BEST ITEM"
        products={bestItems}
        moreLink="/shop/best"
        pageSize={10}
      />

      <div className="py-12 text-center bg-[#fafafa]">
        <p className="text-[11px] tracking-[0.3em] text-[#999] uppercase">CODEMUSE</p>
      </div>
    </>
  );
}
