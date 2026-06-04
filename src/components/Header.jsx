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
  "text-[14px] md:text-[15px] text-[#333] hover:text-black whitespace-nowrap";

function HeaderAccountLinks() {
  const { isLoggedIn, user } = useAuth();
  const { itemCount } = useCart();
  const linkClass =
    "text-[13px] md:text-[14px] text-[#666] hover:text-black whitespace-nowrap tracking-wide";

  return (
    <div className="flex items-center gap-2.5 sm:gap-3.5 md:gap-4 shrink-0">
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
            JOIN
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

      <div className="w-full">
        <div className="relative flex items-center justify-center min-h-[56px] md:min-h-[72px] py-3">
          <nav
            className="absolute left-0 top-0 bottom-0 z-10 flex items-center gap-2 sm:gap-3 md:gap-4 pl-1 sm:pl-2 md:pl-3 max-w-[calc(100%-7rem)] sm:max-w-[calc(100%-9rem)] md:max-w-[52%] overflow-x-auto scrollbar-hide"
            aria-label="주 메뉴"
          >
            <button
              type="button"
              className="shrink-0 -ml-0.5 p-0 text-[#333] hover:text-black"
              aria-label="메뉴 열기"
              onClick={() => setMenuOpen(true)}
            >
              <span className="material-symbols-outlined text-[28px] md:text-[30px]">
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
          </nav>

          <LogoLink />

          <div className="absolute right-0 top-0 bottom-0 z-10 flex items-center pr-2 sm:pr-3 md:pr-4">
            <HeaderAccountLinks />
          </div>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
