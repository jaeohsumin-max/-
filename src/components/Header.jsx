import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { CATEGORIES, getCategoryPath } from "../data/products";
import { SIGNUP_BONUS_POINTS } from "../data/site";
import codemuseLogo from "../assets/codemuse-logo.png";
import MobileMenu from "./MobileMenu";
import NavDropdown from "./NavDropdown";
import PromoBar from "./PromoBar";

const SHOP_LINKS = CATEGORIES.filter((c) => c.id !== "all").map((c) => ({
  to: getCategoryPath(c.id),
  label: c.label,
}));

const COMMUNITY_LINKS = [
  { to: "/notice", label: "NOTICE" },
  { to: "/qa", label: "Q&A" },
  { to: "/reviews", label: "REVIEW" },
];

const navLinkClass =
  "text-[12px] md:text-[13px] text-[#333] hover:text-black whitespace-nowrap";

function HeaderAccountLinks() {
  const { isLoggedIn, user } = useAuth();
  const { itemCount } = useCart();
  const linkClass =
    "text-[11px] text-[#666] hover:text-black whitespace-nowrap tracking-wide";

  return (
    <div className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
      {isLoggedIn ? (
        <Link to="/mypage" className={`${linkClass} hidden md:inline`}>
          {user?.name}님
        </Link>
      ) : (
        <>
          <Link to="/login" className={linkClass}>
            LOGIN
          </Link>
          <Link to="/join" className={`${linkClass} hidden sm:inline`}>
            회원가입
            <span className="text-[#c45c4a] font-semibold ml-0.5">
              +{SIGNUP_BONUS_POINTS.toLocaleString()}P
            </span>
          </Link>
        </>
      )}
      <Link to="/mypage" className={`${linkClass} hidden sm:inline`}>
        MYPAGE
      </Link>
      <Link
        to="/cart"
        className={`${linkClass} shrink-0 flex items-center gap-1.5 text-[#333] hover:text-black`}
        aria-label={`장바구니 ${itemCount}개`}
      >
        <span className="relative inline-flex shrink-0 items-center justify-center w-[26px] h-[26px]">
          <span className="material-symbols-outlined text-[24px] font-light leading-none">
            shopping_bag
          </span>
          <span
            className="absolute -top-0.5 -right-1 inline-flex items-center justify-center min-w-[16px] h-[16px] px-0.5 rounded-full bg-[#333] text-white text-[9px] font-semibold leading-none tabular-nums"
            aria-hidden="true"
          >
            {itemCount > 99 ? "99+" : itemCount}
          </span>
        </span>
        <span className="hidden min-[400px]:inline tracking-wide">장바구니</span>
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
        className="h-10 sm:h-12 md:h-14 w-auto max-w-[8.5rem] md:max-w-[10rem] object-contain"
      />
    </Link>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e5e5e5]">
      <PromoBar />

      <div className="max-w-[1280px] mx-auto pl-1 pr-4 sm:pl-2 md:pl-3">
        <div className="relative flex items-center justify-center min-h-[56px] md:min-h-[72px] py-3">
          <div className="absolute left-0 flex items-center gap-2 sm:gap-3 md:gap-4 max-w-[58%] sm:max-w-[60%] md:max-w-none overflow-x-auto scrollbar-hide">
            <button
              type="button"
              className="shrink-0 p-0.5 -ml-0.5 text-[#333] hover:text-black"
              aria-label="메뉴 열기"
              onClick={() => setMenuOpen(true)}
            >
              <span className="material-symbols-outlined text-[26px] md:text-[28px]">
                menu
              </span>
            </button>
            <Link to="/shop/best" className={navLinkClass}>
              BEST
            </Link>
            <Link to="/shop/new" className={navLinkClass}>
              NEW
            </Link>
            <NavDropdown label="SHOP" items={SHOP_LINKS} />
            <NavDropdown label="COMMUNITY" items={COMMUNITY_LINKS} />
          </div>

          <LogoLink />

          <div className="absolute right-0 z-10 pl-2 bg-white/95">
            <HeaderAccountLinks />
          </div>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
