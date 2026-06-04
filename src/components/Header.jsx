import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { CATEGORIES, getCategoryPath } from "../data/products";
import { SIGNUP_BONUS_POINTS } from "../data/site";
import codemuseLogo from "../assets/codemuse-logo.png";
import NavDropdown from "./NavDropdown";
import PromoBar from "./PromoBar";

const COMMUNITY_LINKS = [
  { to: "/qa", label: "Q&A" },
  { to: "/reviews", label: "REVIEW" },
];

const MYPAGE_LINKS = [
  { to: "/mypage", label: "MY PAGE" },
  { to: "/checkout", label: "ORDER" },
  { to: "/cart", label: "CART" },
];

function MainNav({ className = "" }) {
  return (
    <nav
      className={`flex flex-wrap items-center justify-center gap-x-5 xl:gap-x-6 gap-y-2 ${className}`}
    >
      {CATEGORIES.map((cat) => (
        <NavLink
          key={cat.id}
          to={getCategoryPath(cat.id)}
          end={cat.id === "all"}
          className={({ isActive }) =>
            `text-[13px] whitespace-nowrap transition-colors ${
              isActive ? "text-black font-semibold" : "text-[#444] hover:text-black"
            }`
          }
        >
          {cat.label}
        </NavLink>
      ))}
      <NavDropdown label="COMMUNITY" items={COMMUNITY_LINKS} />
      <NavDropdown label="MY PAGE" items={MYPAGE_LINKS} />
    </nav>
  );
}

export default function Header() {
  const { itemCount } = useCart();
  const { isLoggedIn, user } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e5e5e5]">
      <PromoBar />

      <div className="border-b border-[#eee]">
        <div className="max-w-[1280px] mx-auto px-4 h-9 flex items-center justify-end gap-4 text-[11px] text-[#666]">
          {isLoggedIn ? (
            <>
              <Link to="/mypage" className="hover:text-black">
                {user?.name}님
              </Link>
              <Link to="/mypage" className="hover:text-black">
                MY PAGE
              </Link>
            </>
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
          <Link to="/checkout" className="hover:text-black hidden sm:inline">
            ORDER
          </Link>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4">
        {/* 로고 가운데 · 장바구니·검색 오른쪽 */}
        <div className="relative flex items-center justify-center py-4 md:py-5 min-h-[56px] md:min-h-[64px]">
          <Link to="/" className="shrink-0">
            <img
              src={codemuseLogo}
              alt="CODEMUSE"
              width={160}
              height={48}
              className="h-10 md:h-11 w-auto object-contain"
            />
          </Link>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-3 md:gap-4">
            <div className="hidden md:block w-36 lg:w-44">
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
              className="flex items-center gap-1 text-[12px] text-[#333] hover:text-black shrink-0"
            >
              <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
              <span className="font-medium">{itemCount}</span>
            </Link>
          </div>
        </div>

        {/* 카테고리 메뉴 가운데 정렬 */}
        <div className="hidden lg:block border-t border-[#f0f0f0] py-3">
          <MainNav />
        </div>
      </div>

      {/* 모바일·태블릿: 가운데 정렬 (넘치면 스크롤) */}
      <div className="lg:hidden border-t border-[#eee] py-2.5 overflow-x-auto">
        <div className="flex justify-center min-w-min px-4 mx-auto w-max max-w-full">
          <MainNav className="!flex-nowrap gap-x-4" />
        </div>
      </div>
    </header>
  );
}
