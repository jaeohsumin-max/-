import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { CATEGORIES, getCategoryPath } from "../data/products";

export default function Header() {
  const { itemCount } = useCart();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-[#faf9f6]/90 backdrop-blur-md border-b border-[#e8e4df]">
      <div className="hidden md:block bg-[#181512] text-[#faf9f6] text-center py-2 text-xs tracking-[0.2em]">
        신규 회원 10% 할인 · 5만원 이상 무료배송
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className="font-serif text-2xl md:text-3xl tracking-tight text-[#181512]"
          >
            SUMIN
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

          <div className="flex items-center gap-3 md:gap-5">
            <button
              type="button"
              onClick={() => navigate("/shop")}
              className="p-2 text-[#6b6560] hover:text-[#181512] transition-colors"
              aria-label="검색"
            >
              <span className="material-symbols-outlined text-[22px]">search</span>
            </button>
            <Link
              to="/cart"
              className="relative p-2 text-[#6b6560] hover:text-[#181512] transition-colors"
              aria-label="장바구니"
            >
              <span className="material-symbols-outlined text-[22px]">
                shopping_bag
              </span>
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-[#c45c4a] text-white text-[10px] font-bold px-1">
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              )}
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
