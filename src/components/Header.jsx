import { Link, NavLink } from "react-router-dom";
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

function HeaderUtilities() {
  const { itemCount } = useCart();

  return (
    <div className="flex items-center gap-2 md:gap-3 shrink-0">
      <div className="hidden md:block w-32 lg:w-36">
        <input
          type="search"
          placeholder="검색"
          className="w-full border border-[#ddd] px-3 py-1.5 text-[12px] focus:outline-none focus:border-[#333]"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const q = e.currentTarget.value.trim();
              window.location.href = q
                ? `/shop?search=${encodeURIComponent(q)}`
                : "/shop";
            }
          }}
        />
      </div>
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
