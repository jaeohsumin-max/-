import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getMemberById } from "../lib/members";

export default function MyPage() {
  const { user, isLoggedIn, logout } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  const profile = getMemberById(user.id);

  return (
    <div className="max-w-2xl mx-auto px-5 py-16 md:py-24">
      <div className="flex items-start justify-between gap-4 mb-10">
        <div>
          <h1 className="font-serif text-3xl md:text-4xl">My Page</h1>
          <p className="text-sm text-[#6b6560] mt-2">
            {user.name}님, 안녕하세요.
          </p>
        </div>
        <button
          type="button"
          onClick={logout}
          className="text-[10px] tracking-widest uppercase border border-[#e8e4df] px-3 py-2 hover:border-[#181512] transition-colors"
        >
          Logout
        </button>
      </div>

      {profile && (
        <div className="bg-white border border-[#e8e4df] p-5 mb-6 text-sm space-y-2">
          <p>
            <span className="text-[#a39e98] text-xs uppercase tracking-wider mr-2">
              ID
            </span>
            {profile.id}
          </p>
          <p>
            <span className="text-[#a39e98] text-xs uppercase tracking-wider mr-2">
              Email
            </span>
            {profile.email}
          </p>
          <p>
            <span className="text-[#a39e98] text-xs uppercase tracking-wider mr-2">
              Phone
            </span>
            {profile.phone}
          </p>
          <p>
            <span className="text-[#a39e98] text-xs uppercase tracking-wider mr-2">
              Address
            </span>
            ({profile.zipcode}) {profile.address1} {profile.address2}
          </p>
        </div>
      )}

      <div className="grid gap-4">
        {[
          { label: "주문 내역", to: "/checkout", desc: "최근 주문 확인" },
          { label: "장바구니", to: "/cart", desc: "담은 상품 보기" },
          { label: "쇼핑 계속하기", to: "/shop", desc: "신상품 둘러보기" },
        ].map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className="flex justify-between items-center bg-white p-5 border border-[#e8e4df] hover:border-[#181512] transition-colors"
          >
            <div>
              <p className="text-sm font-medium tracking-wide">{item.label}</p>
              <p className="text-xs text-[#6b6560] mt-1">{item.desc}</p>
            </div>
            <span className="material-symbols-outlined text-[20px] text-[#6b6560]">
              chevron_right
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
