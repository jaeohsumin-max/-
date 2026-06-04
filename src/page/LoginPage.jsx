import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [saveId, setSaveId] = useState(false);
  const [secureAccess, setSecureAccess] = useState(false);

  return (
    <div className="max-w-[420px] mx-auto px-5 py-16 md:py-24">
      <div className="bg-white border border-[#e8e4df] px-6 py-10 md:px-10 md:py-12">
        <h1 className="text-2xl md:text-[26px] font-bold tracking-[0.12em] text-[#181512] text-center uppercase">
          Login
        </h1>
        <p className="text-xs md:text-sm text-[#a39e98] text-center mt-3 mb-8 leading-relaxed">
          로그인 하시면 다양하고 특별한 혜택을 이용할 수 있습니다.
        </p>

        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="username"
            autoComplete="username"
            placeholder="아이디"
            className="w-full border border-[#e8e4df] bg-white px-4 py-3.5 text-sm text-[#181512] placeholder:text-[#c4c0ba] focus:outline-none focus:border-[#181512]"
          />
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="비밀번호"
            className="w-full border border-[#e8e4df] bg-white px-4 py-3.5 text-sm text-[#181512] placeholder:text-[#c4c0ba] focus:outline-none focus:border-[#181512]"
          />

          <div className="flex items-center justify-between pt-1 pb-2 text-xs text-[#6b6560]">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={saveId}
                onChange={(e) => setSaveId(e.target.checked)}
                className="w-3.5 h-3.5 border border-[#d4cfc8] accent-[#181512]"
              />
              아이디 저장
            </label>
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={secureAccess}
                onChange={(e) => setSecureAccess(e.target.checked)}
                className="sr-only peer"
              />
              <span
                className={`relative inline-flex h-5 w-9 shrink-0 rounded-full transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-[#181512]/30 ${
                  secureAccess ? "bg-[#181512]" : "bg-[#d4cfc8]"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${
                    secureAccess ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </span>
              보안접속
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#181512] text-white py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-[#2a2622] transition-colors"
          >
            Login
          </button>

          <Link
            to="/join"
            className="flex w-full items-center justify-center border border-[#e8e4df] bg-white text-[#181512] py-3.5 text-xs tracking-[0.2em] uppercase hover:border-[#181512] transition-colors"
          >
            Join Us
          </Link>
        </form>

        <div className="grid grid-cols-2 gap-2 mt-6">
          <button
            type="button"
            className="flex items-center justify-center gap-2 bg-[#03c75a] text-white py-3 text-xs font-medium hover:opacity-90 transition-opacity"
          >
            <span className="flex h-5 w-5 items-center justify-center bg-white text-[#03c75a] text-[11px] font-black leading-none">
              N
            </span>
            네이버 로그인
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 bg-[#fee500] text-[#3c1e1e] py-3 text-xs font-medium hover:opacity-90 transition-opacity"
          >
            <span className="text-base leading-none" aria-hidden>
              💬
            </span>
            카카오로 시작하기
          </button>
        </div>
      </div>
    </div>
  );
}
