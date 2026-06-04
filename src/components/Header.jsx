import { useEffect, useRef, useState } from "react";
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
      className={`flex items-center justify-center flex-nowrap gap-x-5 lg:gap-x-6 xl:gap-x-7 ${className}`}
    >
      {CATEGORIES.map((cat) => (
        <NavLink
          key={cat.id}
          to={getCategoryPath(cat.id)}
          end={cat.id === "all"}
          className={({ isActive }) =>
            `text-[13px] lg:text-[14px] whitespace-nowrap transition-colors ${
              isActive ? "text-black font-semibold" : "text-[#444] hover:text-black"
            }`
          }
        >
          {cat.label}
        </NavLink>
      ))}
    </nav>
  );
}

function HeaderSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const ref = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const q = query.trim();
    navigate(q ? `/shop?search=${encodeURIComponent(q)}` : "/shop");
    setOpen(false);
    setQuery("");
  };

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-[#333] hover:text-black py-1"
        aria-expanded={open}
        aria-label="검색"
      >
        <span className="material-symbols-outlined text-[22px] font-light leading-none">
          search
        </span>
        <span className="sr-only">SEARCH</span>
      </button>
      {open && (
        <form
          onSubmit={handleSubmit}
          className="absolute right-0 top-full mt-2 z-[60] flex items-center bg-white border border-[#ddd] shadow-md"
        >
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="검색어 입력"
            autoFocus
            className="w-44 sm:w-52 px-3 py-2 text-[12px] focus:outline-none"
          />
          <button
            type="submit"
            className="px-3 py-2 text-[11px] border-l border-[#ddd] hover:bg-[#f5f5f5]"
          >
            찾기
          </button>
        </form>
      )}
    </div>
  );
}

function HeaderUtilities({ showPerson = true }) {
  const { itemCount } = useCart();
  const { isLoggedIn } = useAuth();

  return (
    <div className="flex items-center gap-3 md:gap-4 shrink-0">
      <HeaderSearch />
      {showPerson && (
        <Link
          to={isLoggedIn ? "/mypage" : "/login"}
          className="text-[#333] hover:text-black p-0.5"
          aria-label={isLoggedIn ? "마이페이지" : "로그인"}
        >
          <span className="material-symbols-outlined text-[22px] font-light">
            person
          </span>
        </Link>
      )}
      <Link
        to="/cart"
        className="relative flex items-center text-[#333] hover:text-black p-0.5"
        aria-label="장바구니"
      >
        <span className="material-symbols-outlined text-[22px] font-light">
          shopping_bag
        </span>
        {itemCount > 0 && (
          <span className="absolute -top-0.5 -right-1 min-w-[14px] h-[14px] px-0.5 rounded-full bg-[#333] text-white text-[9px] leading-[14px] text-center font-medium">
            {itemCount > 99 ? "99+" : itemCount}
          </span>
        )}
      </Link>
    </div>
  );
}

function LogoLink() {
  return (
    <Link to="/" className="shrink-0 flex items-center">
      <img
        src={codemuseLogo}
        alt="CODEMUSE"
        width={182}
        height={112}
        decoding="async"
        className="h-11 md:h-12 xl:h-14 w-auto max-w-[8.5rem] md:max-w-[9.5rem] xl:max-w-[11rem] object-contain translate-y-1"
      />
    </Link>
  );
}

export default function Header() {
  const { isLoggedIn, user } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e5e5e5]">
      <PromoBar />

      <div className="border-b border-[#eee]">
        <div className="max-w-[1280px] mx-auto px-4 h-9 flex items-center justify-end gap-4 text-[11px] text-[#666]">
          {isLoggedIn ? (
            <Link to="/mypage" className="hover:text-black">
              {user?.name}님
            </Link>
          ) : (
            <>
              <Link to="/login" className="hover:text-black font-medium">
                LOGIN
              </Link>
              <Link to="/join" className="hover:text-black font-medium">
                JOIN US{" "}
                <span className="text-[#c45c4a] font-semibold">
                  +{SIGNUP_BONUS_POINTS.toLocaleString()}
                </span>
              </Link>
            </>
          )}
          <Link to="/checkout" className="hover:text-black">
            ORDER
          </Link>
          <Link to="/mypage" className="hover:text-black">
            MY PAGE
          </Link>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4">
        {/* 데스크톱: 로고 · 메뉴 · 검색/장바구니 한 줄 */}
        <div className="hidden lg:grid lg:grid-cols-[minmax(7rem,10rem)_1fr_auto] lg:items-center lg:gap-3 xl:gap-4 py-3 xl:py-4 min-h-[56px] xl:min-h-[60px]">
          <LogoLink />
          <div className="flex justify-center items-center min-w-0 overflow-x-auto scrollbar-hide px-1">
            <MainNav className="flex-nowrap" />
          </div>
          <HeaderUtilities />
        </div>

        {/* 모바일·태블릿: 로고+장바구니 / 메뉴 */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between py-3 gap-3">
            <LogoLink />
            <HeaderUtilities />
          </div>
          <div className="border-t border-[#eee] py-2 overflow-x-auto">
            <div className="flex justify-start min-w-max px-1 pb-0.5">
              <MainNav className="flex-nowrap" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
