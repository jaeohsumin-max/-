import { useEffect, useMemo, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import {
  CATEGORIES,
  getCategoryPath,
  getProductsByCategory,
} from "../data/products";

const PER_PAGE = 12;

const SORT_OPTIONS = [
  { id: "new", label: "신상품" },
  { id: "name", label: "상품명" },
  { id: "price-low", label: "낮은가격" },
  { id: "price-high", label: "높은가격" },
];

function Pagination({ page, totalPages, onPage }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1).filter(
    (p) =>
      p === 1 ||
      p === totalPages ||
      (p >= page - 2 && p <= page + 2),
  );

  return (
    <nav
      className="mt-12 flex flex-wrap items-center justify-center gap-1 text-[12px] text-[#666]"
      aria-label="페이지"
    >
      <button
        type="button"
        disabled={page === 1}
        onClick={() => onPage(1)}
        className="px-2 py-1 hover:text-black disabled:opacity-30"
      >
        첫 페이지
      </button>
      <button
        type="button"
        disabled={page === 1}
        onClick={() => onPage(page - 1)}
        className="px-2 py-1 hover:text-black disabled:opacity-30"
      >
        이전 페이지
      </button>
      {pages.map((p, i, arr) => {
        const prev = arr[i - 1];
        const showEllipsis = prev && p - prev > 1;
        return (
          <span key={p} className="flex items-center">
            {showEllipsis && <span className="px-1 text-[#ccc]">…</span>}
            <button
              type="button"
              onClick={() => onPage(p)}
              className={`min-w-[28px] h-7 px-1 border ${
                page === p
                  ? "border-black text-black font-semibold bg-white"
                  : "border-[#ddd] hover:border-[#999]"
              }`}
            >
              {p}
            </button>
          </span>
        );
      })}
      <button
        type="button"
        disabled={page === totalPages}
        onClick={() => onPage(page + 1)}
        className="px-2 py-1 hover:text-black disabled:opacity-30"
      >
        다음 페이지
      </button>
      <button
        type="button"
        disabled={page === totalPages}
        onClick={() => onPage(totalPages)}
        className="px-2 py-1 hover:text-black disabled:opacity-30"
      >
        마지막 페이지
      </button>
    </nav>
  );
}

export default function ShopPage() {
  const { category = "all" } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState("new");
  const [search, setSearch] = useState(searchParams.get("search") ?? "");
  const [searchField, setSearchField] = useState("name");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const q = searchParams.get("search");
    if (q) setSearch(q);
  }, [searchParams]);

  useEffect(() => {
    setPage(1);
  }, [category, sort, search]);

  const categoryLabel =
    CATEGORIES.find((c) => c.id === category)?.label ?? "ALL";

  const products = useMemo(() => {
    let list = getProductsByCategory(category);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter((p) => {
        if (searchField === "name") return p.name.toLowerCase().includes(q);
        return (
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
        );
      });
    }
    const sorted = [...list];
    switch (sort) {
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name, "ko"));
        break;
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "new":
        sorted.sort((a, b) => {
          const aNew = a.badge === "NEW" ? 1 : 0;
          const bNew = b.badge === "NEW" ? 1 : 0;
          return bNew - aNew || b.reviews - a.reviews;
        });
        break;
      default:
        sorted.sort((a, b) => b.reviews - a.reviews);
    }
    return sorted;
  }, [category, sort, search, searchField]);

  const totalPages = Math.max(1, Math.ceil(products.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const paginated = products.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  );

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      setSearchParams({ search: search.trim() });
    } else {
      setSearchParams({});
    }
    setPage(1);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-6 md:py-10">
      <nav className="text-[11px] text-[#999] mb-6 flex items-center flex-wrap gap-1">
        <Link to="/" className="hover:text-black">
          홈
        </Link>
        <span className="text-[#ccc]">›</span>
        <span className="text-[#333] font-medium">{categoryLabel}</span>
      </nav>

      <h2 className="text-center text-lg md:text-xl font-semibold text-[#111] tracking-wide mb-2">
        {categoryLabel}
      </h2>
      <p className="text-center text-[12px] text-[#888] mb-8">
        Total<strong className="text-[#111] mx-1">{products.length}</strong>items
      </p>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6 pb-4 border-b border-[#eee]">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full md:w-auto border border-[#ddd] bg-white px-3 py-2 text-[12px] text-[#333] focus:outline-none focus:border-[#333]"
          aria-label="정렬"
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.id} value={o.id}>
              {o.label}
            </option>
          ))}
        </select>

        <form
          onSubmit={handleSearchSubmit}
          className="flex flex-wrap items-center gap-2 w-full md:w-auto"
        >
          <span className="text-[11px] text-[#888] shrink-0">조건별 검색</span>
          <select
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
            className="border border-[#ddd] px-2 py-2 text-[12px] bg-[#fafafa]"
          >
            <option value="name">상품명</option>
            <option value="all">전체</option>
          </select>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="검색어 입력"
            className="flex-1 md:w-48 border border-[#ddd] px-3 py-2 text-[12px] focus:outline-none focus:border-[#333]"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-[#333] text-white text-[12px] hover:bg-black shrink-0"
          >
            검색
          </button>
        </form>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-24 text-[13px] text-[#888]">
          검색 결과가 없습니다.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-8 md:gap-x-4 md:gap-y-10">
            {paginated.map((p) => (
              <ProductCard key={p.id} product={p} list />
            ))}
          </div>
          <Pagination
            page={currentPage}
            totalPages={totalPages}
            onPage={setPage}
          />
        </>
      )}
    </div>
  );
}
