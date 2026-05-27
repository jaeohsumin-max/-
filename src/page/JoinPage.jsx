import { Link } from "react-router-dom";

export default function JoinPage() {
  return (
    <div className="max-w-md mx-auto px-5 py-20 md:py-32">
      <h1 className="font-serif text-3xl mb-2 text-center">Join</h1>
      <p className="text-sm text-[#6b6560] text-center mb-10">
        CODEMUSE 멤버십에 가입하세요.
      </p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="이름"
          className="w-full border border-[#e8e4df] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#181512]"
        />
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
          가입하기
        </button>
      </form>
      <p className="text-center text-sm text-[#6b6560] mt-6">
        이미 회원이신가요?{" "}
        <Link to="/login" className="text-[#181512] underline underline-offset-2">
          로그인
        </Link>
      </p>
    </div>
  );
}
