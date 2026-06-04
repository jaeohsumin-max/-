import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { CATEGORIES, getCategoryPath } from "../data/products";
import { SIGNUP_BONUS_POINTS } from "../data/site";
import CodemuseLogo from "./CodemuseLogo";
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
        <span className="material-symbols-outlined text-[20px] font-light leading-none">
          search
        </span>
        <span className="text-[11px] tracking-[0.14em] uppercase">SEARCH</span>
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

function HeaderUtilities() {
  const { itemCount } = useCart();

  return (
    <div className="flex items-center gap-4 md:gap-5 shrink-0">
      <HeaderSearch />
      <Link
        to="/cart"
        className="flex items-center gap-1 text-[12px] text-[#333] hover:text-black"
      >
        <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
        <span className="font-medium">{itemCount}</span>
      </Link>
    </div>
  );
}

function LogoLink() {
  return (
    <Link
      to="/"
      className="shrink-0 flex items-center translate-x-2 md:translate-x-3 translate-y-0.5"
      aria-label="CODEMUSE 홈"
    >
      <CodemuseLogo />
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

      {/* 데스크톱: 로고·검색·장바구니는 화면 양끝, 메뉴는 가운데 (모양은 이전과 동일) */}
      <div className="hidden lg:block relative w-full px-4 md:px-8 xl:px-10 py-3 xl:py-4 min-h-[56px] xl:min-h-[60px]">
        <div className="flex items-center justify-between w-full">
          <LogoLink />
          <HeaderUtilities />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-32 xl:px-40">
          <div className="pointer-events-auto max-w-full overflow-x-auto scrollbar-hide">
            <MainNav className="flex-nowrap" />
          </div>
        </div>
      </div>

      {/* 모바일·태블릿 */}
      <div className="lg:hidden max-w-[1280px] mx-auto px-4">
        <div className="flex items-center justify-between w-full py-3 gap-3">
          <LogoLink />
          <HeaderUtilities />
        </div>
        <div className="border-t border-[#eee] py-2 overflow-x-auto">
          <div className="flex justify-start min-w-max px-1 pb-0.5">
            <MainNav className="flex-nowrap" />
          </div>
        </div>
      </div>
    </header>
  );
}
