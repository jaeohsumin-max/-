import { useEffect, useMemo, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import {
  CATEGORIES,
  getCategoryPath,
  getProductsByCategory,
} from "../data/products";

const SORT_OPTIONS = [
  { id: "popular", label: "인기순" },
  { id: "price-low", label: "낮은 가격순" },
  { id: "price-high", label: "높은 가격순" },
  { id: "rating", label: "평점순" },
];

export default function ShopPage() {
  const { category = "all" } = useParams();
  const [searchParams] = useSearchParams();
  const [sort, setSort] = useState("popular");
  const [search, setSearch] = useState(searchParams.get("search") ?? "");

  useEffect(() => {
    const q = searchParams.get("search");
    if (q) setSearch(q);
  }, [searchParams]);

  const categoryLabel =
    CATEGORIES.find((c) => c.id === category)?.label ?? "ALL";

  const products = useMemo(() => {
    let list = getProductsByCategory(category);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q));
    }
    const sorted = [...list];
    switch (sort) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default:
        sorted.sort((a, b) => b.reviews - a.reviews);
    }
    return sorted;
  }, [category, sort, search]);

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-8 md:py-12">
      <nav className="text-[11px] text-[#999] mb-4 flex items-center gap-1.5">
        <Link to="/" className="hover:text-black">
          HOME
        </Link>
        <span>/</span>
        <span className="text-[#333]">{categoryLabel}</span>
      </nav>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-lg md:text-xl font-semibold text-[#111] mb-1">
            {categoryLabel}
          </h1>
          <p className="text-[12px] text-[#888]">{products.length}개 상품</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-[#a39e98]">
              search
            </span>
            <input
              type="search"
              placeholder="상품 검색..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 border border-[#ddd] bg-white text-[12px] w-full sm:w-64 focus:outline-none focus:border-[#333]"
            />
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2 border border-[#ddd] bg-white text-[12px] focus:outline-none focus:border-[#333]"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.id} value={o.id}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        <aside className="lg:w-48 shrink-0">
          <p className="text-[11px] text-[#999] mb-3 font-medium">카테고리</p>
          <ul className="flex lg:flex-col gap-1 flex-wrap">
            {CATEGORIES.map((cat) => (
              <li key={cat.id}>
                <Link
                  to={getCategoryPath(cat.id)}
                  className={`block px-3 py-2 text-[12px] transition-colors ${
                    category === cat.id
                      ? "bg-black text-white"
                      : "text-[#666] hover:bg-[#f5f5f5]"
                  }`}
                >
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {products.length === 0 ? (
          <div className="flex-1 text-center py-20">
            <span className="material-symbols-outlined text-[48px] text-[#e8e4df] mb-4">
              inventory_2
            </span>
            <p className="text-[#6b6560]">검색 결과가 없습니다.</p>
          </div>
        ) : (
          <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
