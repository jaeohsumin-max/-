import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { CATEGORIES, getCategoryPath } from "../data/products";
import { SIGNUP_BONUS_POINTS } from "../data/site";
import codemuseLogo from "../assets/codemuse-logo.png";
import PromoBar from "./PromoBar";

function MainNav({ className = "" }) {
  return (
    <nav
      className={`flex w-full items-center flex-nowrap justify-start gap-x-10 md:justify-between md:gap-x-0 ${className}`}
    >
      {CATEGORIES.map((cat) => (
        <NavLink
          key={cat.id}
          to={getCategoryPath(cat.id)}
          end={cat.id === "all"}
          className={({ isActive }) =>
            `text-[13px] md:text-[14px] whitespace-nowrap transition-colors ${
              isActive ? "text-black font-medium" : "text-[#444] hover:text-black"
            }`
          }
        >
          {cat.label}
        </NavLink>
      ))}
    </nav>
  );
}

function HeaderSearchBar({ className = "" }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const q = query.trim();
    navigate(q ? `/shop?search=${encodeURIComponent(q)}` : "/shop");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center w-full max-w-[180px] sm:max-w-[220px] bg-[#f0f0f0] rounded-full px-3 py-2 ${className}`}
    >
      <span className="material-symbols-outlined text-[18px] text-[#aaa] shrink-0">
        search
      </span>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="검색"
        className="flex-1 min-w-0 bg-transparent text-[12px] text-[#333] placeholder:text-[#aaa] ml-2 outline-none"
      />
    </form>
  );
}

function HeaderAccountLinks() {
  const { isLoggedIn, user } = useAuth();
  const { itemCount } = useCart();

  const linkClass =
    "text-[11px] text-[#888] hover:text-black whitespace-nowrap tracking-wide";

  return (
    <div className="flex items-center gap-3 sm:gap-4 shrink-0">
      {isLoggedIn ? (
        <Link to="/mypage" className={linkClass}>
          {user?.name}님
        </Link>
      ) : (
        <>
          <Link to="/login" className={linkClass}>
            LOGIN
          </Link>
          <Link to="/join" className={linkClass}>
            <span className="hidden sm:inline">JOIN US </span>
            <span className="sm:hidden">JOIN</span>
            <span className="text-[#c45c4a] font-medium hidden md:inline">
              +{SIGNUP_BONUS_POINTS.toLocaleString()}
            </span>
          </Link>
        </>
      )}
      <Link to="/checkout" className={linkClass}>
        ORDER
      </Link>
      <Link to="/mypage" className={linkClass}>
        MY PAGE
      </Link>
      <Link
        to="/cart"
        className={`${linkClass} flex items-center gap-1.5 text-[#333]`}
      >
        <span>CART</span>
        <span className="inline-flex items-center justify-center min-w-[18px] h-[18px] rounded-full border border-[#ccc] text-[10px] font-medium text-[#555]">
          {itemCount}
        </span>
      </Link>
    </div>
  );
}

function LogoLink() {
  return (
    <Link to="/" className="inline-flex items-center justify-center">
      <img
        src={codemuseLogo}
        alt="CODEMUSE"
        width={182}
        height={112}
        decoding="async"
        className="h-12 sm:h-14 md:h-16 w-auto max-w-[9rem] sm:max-w-[10rem] md:max-w-[11.5rem] object-contain"
      />
    </Link>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e5e5e5]">
      <PromoBar />

      <div className="max-w-[1280px] mx-auto px-4">
        {/* 1행: 검색(좌) · 계정/장바구니(우) */}
        <div className="flex items-center justify-between gap-4 py-2.5 border-b border-[#f0f0f0]">
          <HeaderSearchBar />
          <HeaderAccountLinks />
        </div>

        {/* 2행: 로고 가운데 */}
        <div className="flex justify-center py-5 md:py-6 border-b border-[#f0f0f0]">
          <LogoLink />
        </div>

        {/* 3행: 카테고리 메뉴 (넓게 펼침) */}
        <div className="py-4 md:py-5 overflow-x-auto scrollbar-hide md:overflow-visible">
          <MainNav className="min-w-max md:min-w-0 px-1 md:px-2" />
        </div>
      </div>
    </header>
  );
}
