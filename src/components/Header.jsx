import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { CATEGORIES, getCategoryPath } from "../data/products";
import { SIGNUP_BONUS_POINTS } from "../data/site";
import codemuseLogo from "../assets/codemuse-logo.png";
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
      className={`flex items-center w-full max-w-[160px] sm:max-w-[200px] bg-[#f5f5f5] border border-[#eee] px-3 py-1.5 ${className}`}
    >
      <span className="material-symbols-outlined text-[17px] text-[#bbb] shrink-0">
        search
      </span>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="검색"
        className="flex-1 min-w-0 bg-transparent text-[11px] text-[#333] placeholder:text-[#bbb] ml-1.5 outline-none"
      />
    </form>
  );
}

function HeaderAccountLinks() {
  const { isLoggedIn, user } = useAuth();
  const { itemCount } = useCart();
  const linkClass =
    "text-[11px] text-[#666] hover:text-black whitespace-nowrap tracking-wide";

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
      <HeaderSearchBar className="hidden sm:flex" />
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
      <Link to="/mypage" className={linkClass}>
        MYPAGE
      </Link>
      <Link to="/cart" className={`${linkClass} text-[#333]`}>
        {itemCount}
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

const navLinkClass =
  "text-[12px] md:text-[13px] text-[#333] hover:text-black whitespace-nowrap";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e5e5e5]">
      <PromoBar />

      <div className="max-w-[1280px] mx-auto px-4">
        <div className="relative flex items-center justify-center min-h-[64px] md:min-h-[72px] py-3">
          <div className="absolute left-0 flex items-center gap-4 md:gap-6">
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

          <div className="absolute right-0">
            <HeaderAccountLinks />
          </div>
        </div>

        <div className="sm:hidden pb-3">
          <HeaderSearchBar className="max-w-none w-full" />
        </div>
      </div>
    </header>
  );
}
