import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { CATEGORIES, getCategoryPath } from "../data/products";
import { SIGNUP_BONUS_POINTS } from "../data/site";

const COMMUNITY_LINKS = [
  { to: "/notice", label: "NOTICE" },
  { to: "/qa", label: "Q&A" },
  { to: "/reviews", label: "REVIEW" },
];

const CATEGORY_LINKS = [
  { to: "/shop/best", label: "BEST" },
  { to: "/shop/new", label: "NEW" },
  ...CATEGORIES.map((c) => ({
    to: getCategoryPath(c.id),
    label: c.label,
  })),
];

export default function MobileMenu({ open, onClose }) {
  const [tab, setTab] = useState("category");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleSearch = (e) => {
    e.preventDefault();
    const q = query.trim();
    onClose();
    navigate(q ? `/shop?search=${encodeURIComponent(q)}` : "/shop");
  };

  const topLinkClass =
    "text-[11px] text-[#2a4a52] hover:text-[#111] after:content-['|'] after:mx-2 after:text-[#8ecdd8] last:after:content-none";

  const listLinkClass =
    "block py-3.5 text-[13px] text-[#111] tracking-wide border-b border-[#f5f5f5] hover:bg-[#fafafa]";

  return (
    <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true">
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        aria-label="메뉴 닫기"
        onClick={onClose}
      />

      <div className="absolute inset-y-0 left-0 w-full max-w-[400px] md:max-w-[440px] bg-white shadow-xl flex flex-col overflow-hidden">
        {/* 상단: 하늘색 + 유틸 */}
        <div className="bg-gradient-to-r from-[#b8ebe3] via-[#9ddce8] to-[#c5e8f5] border-b border-[#8ecdd8] px-4 pt-3 pb-4 shrink-0">
          <div className="flex items-center justify-between mb-3">
            <div className="flex flex-wrap items-center">
              <Link to="/cart" onClick={onClose} className={topLinkClass}>
                장바구니
              </Link>
              <Link to="/checkout" onClick={onClose} className={topLinkClass}>
                주문조회
              </Link>
              <Link to="/mypage" onClick={onClose} className={topLinkClass}>
                마이페이지
              </Link>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1 text-[#2a4a52] hover:text-[#111]"
              aria-label="닫기"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-3">
            {isLoggedIn ? (
              <Link
                to="/mypage"
                onClick={onClose}
                className="col-span-2 py-3 text-center text-[13px] bg-white border border-[#ddd] text-[#333]"
              >
                마이페이지
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={onClose}
                  className="py-3 text-center text-[13px] bg-white border border-[#ddd] text-[#333]"
                >
                  로그인
                </Link>
                <Link
                  to="/join"
                  onClick={onClose}
                  className="relative py-3 text-center text-[13px] bg-[#333] text-white"
                >
                  회원가입
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] bg-[#8b6914] text-white px-2 py-0.5 rounded-full">
                    +{SIGNUP_BONUS_POINTS.toLocaleString()}P
                  </span>
                </Link>
              </>
            )}
          </div>

          <form
            onSubmit={handleSearch}
            className="flex items-center bg-white border border-[#ddd] px-3 py-2.5"
          >
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="검색어를 입력해주세요"
              className="flex-1 text-[12px] outline-none placeholder:text-[#bbb]"
            />
            <button type="submit" className="text-[#aaa] p-0.5" aria-label="검색">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </button>
          </form>
        </div>

        {/* 탭 */}
        <div className="flex border-b border-[#eee] shrink-0 bg-white">
          <button
            type="button"
            onClick={() => setTab("category")}
            className={`flex-1 py-3 text-[12px] ${
              tab === "category"
                ? "text-black font-semibold border-b-2 border-black"
                : "text-[#888]"
            }`}
          >
            카테고리
          </button>
          <button
            type="button"
            onClick={() => setTab("community")}
            className={`flex-1 py-3 text-[12px] ${
              tab === "community"
                ? "text-black font-semibold border-b-2 border-black"
                : "text-[#888]"
            }`}
          >
            커뮤니티
          </button>
        </div>

        {/* 목록 */}
        <nav className="flex-1 overflow-y-auto px-4 py-2 bg-white">
          {tab === "category"
            ? CATEGORY_LINKS.map((item) => (
                <Link
                  key={item.to + item.label}
                  to={item.to}
                  onClick={onClose}
                  className={listLinkClass}
                >
                  {item.label}
                </Link>
              ))
            : COMMUNITY_LINKS.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={onClose}
                  className={listLinkClass}
                >
                  {item.label}
                </Link>
              ))}
        </nav>
      </div>
    </div>
  );
}
