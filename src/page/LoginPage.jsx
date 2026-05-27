import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto px-5 py-20 md:py-32">
      <h1 className="font-serif text-3xl mb-2 text-center">Login</h1>
      <p className="text-sm text-[#6b6560] text-center mb-10">
        CODEMUSE 계정으로 로그인하세요.
      </p>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="이메일"
          className="w-full border border-[#e8e4df] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#181512]"
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="w-full border border-[#e8e4df] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#181512]"
        />
        <button
          type="button"
          className="w-full bg-[#181512] text-white py-3 text-xs tracking-widest uppercase"
        >
          로그인
        </button>
      </form>
      <p className="text-center text-sm text-[#6b6560] mt-6">
        계정이 없으신가요?{" "}
        <Link to="/join" className="text-[#181512] underline underline-offset-2">
          회원가입
        </Link>
      </p>
    </div>
  );
}
