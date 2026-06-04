import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getMemberById } from "../lib/members";

export default function MyPage() {
  const { user, isLoggedIn, logout } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  const profile = getMemberById(user.id);
  const points = profile?.points ?? 0;

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-10 md:py-14">
      <nav className="text-[11px] text-[#999] mb-6">
        <Link to="/" className="hover:text-black">
          HOME
        </Link>
        <span className="mx-1">/</span>
        <span className="text-[#333]">MY PAGE</span>
      </nav>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#eee]">
        <div>
          <h1 className="text-xl font-semibold text-[#111]">MY PAGE</h1>
          <p className="text-[13px] text-[#666] mt-1">
            <span className="font-medium text-[#111]">{user.name}</span>님 환영합니다
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-[10px] text-[#999]">적립금</p>
            <p className="text-lg font-bold text-[#111]">
              {points.toLocaleString()}
              <span className="text-[12px] font-normal text-[#666] ml-0.5">P</span>
            </p>
          </div>
          <button
            type="button"
            onClick={logout}
            className="text-[11px] border border-[#ccc] px-4 py-2 hover:border-black"
          >
            LOGOUT
          </button>
        </div>
      </div>

      {profile && (
        <div className="bg-[#fafafa] border border-[#ddd] p-5 mb-8 text-[12px] space-y-2 text-[#555]">
          <p>
            <span className="text-[#999] w-16 inline-block">아이디</span>
            {profile.id}
          </p>
          <p>
            <span className="text-[#999] w-16 inline-block">이메일</span>
            {profile.email}
          </p>
          <p>
            <span className="text-[#999] w-16 inline-block">연락처</span>
            {profile.phone}
          </p>
          <p>
            <span className="text-[#999] w-16 inline-block">주소</span>
            ({profile.zipcode}) {profile.address1} {profile.address2}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          { label: "ORDER", to: "/checkout", desc: "주문 · 배송 조회" },
          { label: "CART", to: "/cart", desc: "장바구니" },
          { label: "SHOP", to: "/shop", desc: "쇼핑 계속하기" },
        ].map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className="block p-5 border border-[#ddd] hover:border-black transition-colors bg-white"
          >
            <p className="text-[13px] font-semibold text-[#111]">{item.label}</p>
            <p className="text-[11px] text-[#888] mt-1">{item.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
