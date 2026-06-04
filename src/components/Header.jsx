import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { CATEGORIES, getCategoryPath } from "../data/products";

const UTILITY_LINKS = [
  { to: "/login", label: "Login" },
  { to: "/join", label: "Join" },
  { to: "/checkout", label: "Order" },
  { to: "/mypage", label: "My Page" },
];

export default function Header() {
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-[#faf9f6]/90 backdrop-blur-md border-b border-[#e8e4df]">
      <div className="hidden md:block border-b border-[#e8e4df]/80">
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex justify-end items-center h-9 gap-5">
          {UTILITY_LINKS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[10px] tracking-[0.18em] uppercase text-[#8a8580] hover:text-[#181512] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/cart"
            className="flex items-center gap-1.5 text-[10px] tracking-[0.18em] uppercase text-[#8a8580] hover:text-[#181512] transition-colors"
          >
            Cart
            <span className="min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-[#c4a882] text-white text-[10px] font-medium leading-none">
              {itemCount > 99 ? "99+" : itemCount}
            </span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between min-h-14 md:min-h-16">
          <Link to="/" className="flex items-center shrink-0 h-full py-2">
            <img
              src="/codemuse-logo.png?v=7"
              alt="CODEMUSE"
              width={80}
              height={42}
              className="site-logo object-contain block"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {CATEGORIES.map((cat) => (
              <NavLink
                key={cat.id}
                to={getCategoryPath(cat.id)}
                end={cat.id === "all"}
                className={({ isActive }) =>
                  `text-xs xl:text-sm tracking-widest uppercase transition-colors ${
                    isActive
                      ? "text-[#181512] font-medium border-b border-[#181512] pb-0.5"
                      : "text-[#6b6560] hover:text-[#181512]"
                  }`
                }
              >
                {cat.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex md:hidden items-center gap-3">
            <Link
              to="/login"
              className="text-[10px] tracking-widest uppercase text-[#6b6560]"
            >
              Login
            </Link>
            <Link
              to="/cart"
              className="flex items-center gap-1 text-[10px] tracking-widest uppercase text-[#6b6560]"
            >
              Cart
              <span className="min-w-[16px] h-[16px] flex items-center justify-center rounded-full bg-[#c4a882] text-white text-[9px] font-medium">
                {itemCount > 99 ? "99+" : itemCount}
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:hidden border-t border-[#e8e4df] overflow-x-auto">
        <div className="flex gap-5 px-5 py-3 min-w-max">
          {CATEGORIES.map((cat) => (
            <NavLink
              key={cat.id}
              to={getCategoryPath(cat.id)}
              end={cat.id === "all"}
              className={({ isActive }) =>
                `text-xs tracking-widest uppercase whitespace-nowrap ${
                  isActive ? "text-[#181512] font-medium" : "text-[#6b6560]"
                }`
              }
            >
              {cat.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
