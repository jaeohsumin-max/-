import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthPageLayout, {
  AuthBenefitBox,
  authBtnPrimary,
  authInputClass,
} from "../components/AuthPageLayout";
import { useAuth } from "../context/AuthContext";
import { SIGNUP_BONUS_POINTS } from "../data/site";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, isLoggedIn, getSavedId } = useAuth();
  const [memberId, setMemberId] = useState("");
  const [password, setPassword] = useState("");
  const [saveId, setSaveId] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const saved = getSavedId();
    if (saved) {
      setMemberId(saved);
      setSaveId(true);
    }
  }, [getSavedId]);

  useEffect(() => {
    if (isLoggedIn) navigate("/mypage", { replace: true });
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!memberId.trim() || !password) {
      setError("아이디와 비밀번호를 입력해 주세요.");
      return;
    }
    setSubmitting(true);
    try {
      await login(memberId, password, saveId);
      navigate("/mypage", { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthPageLayout
      title="로그인"
      subtitle="로그인 하시면 주문조회, 적립금, 쿠폰 등 다양한 혜택을 이용하실 수 있습니다."
      breadcrumb="member"
      side={<AuthBenefitBox />}
    >
      {error && (
        <p className="mb-4 text-[12px] text-[#c45c4a] bg-[#fff5f5] border border-[#ffd6d6] px-3 py-2">
          {error}
        </p>
      )}

      <form className="max-w-md space-y-3" onSubmit={handleSubmit}>
        <div>
          <label className="block text-[11px] text-[#888] mb-1">아이디</label>
          <input
            type="text"
            autoComplete="username"
            value={memberId}
            onChange={(e) => setMemberId(e.target.value)}
            className={authInputClass}
          />
        </div>
        <div>
          <label className="block text-[11px] text-[#888] mb-1">비밀번호</label>
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={authInputClass}
          />
        </div>

        <label className="flex items-center gap-2 text-[11px] text-[#666] cursor-pointer">
          <input
            type="checkbox"
            checked={saveId}
            onChange={(e) => setSaveId(e.target.checked)}
            className="accent-black"
          />
          아이디 저장
        </label>

        <button type="submit" disabled={submitting} className={authBtnPrimary}>
          {submitting ? "로그인 중…" : "로그인"}
        </button>

        <div className="flex items-center justify-center gap-3 pt-2 text-[11px] text-[#888]">
          <Link to="/join" className="hover:text-black">
            회원가입
          </Link>
          <span>|</span>
          <button type="button" className="hover:text-black" disabled>
            비밀번호 찾기
          </button>
        </div>
      </form>

      <div className="mt-8 pt-6 border-t border-[#eee]">
        <p className="text-[11px] text-[#999] mb-3 text-center">SNS 로그인</p>
        <div className="grid grid-cols-2 gap-2 max-w-md">
          <button
            type="button"
            disabled
            className="flex items-center justify-center gap-2 bg-[#03c75a] text-white py-2.5 text-[11px] opacity-50 cursor-not-allowed"
          >
            <span className="bg-white text-[#03c75a] w-5 h-5 flex items-center justify-center text-[10px] font-black">
              N
            </span>
            네이버 로그인
          </button>
          <button
            type="button"
            disabled
            className="flex items-center justify-center gap-2 bg-[#fee500] text-[#3c1e1e] py-2.5 text-[11px] opacity-50 cursor-not-allowed"
          >
            카카오 로그인
          </button>
        </div>
      </div>

      <p className="mt-6 text-[11px] text-[#999]">
        아직 회원이 아니신가요?{" "}
        <Link to="/join" className="text-[#c45c4a] font-medium hover:underline">
          JOIN US +{SIGNUP_BONUS_POINTS.toLocaleString()}
        </Link>
      </p>
    </AuthPageLayout>
  );
}
