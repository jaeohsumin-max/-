import { Link } from "react-router-dom";

export default function JoinPage() {
  return (
    <div className="flex-1 w-full bg-white">
      <div className="max-w-[420px] mx-auto px-5 py-16 md:py-24">
        <h1 className="text-2xl md:text-[26px] font-bold tracking-[0.12em] text-[#181512] text-center uppercase">
          Join Us
        </h1>
        <p className="text-xs md:text-sm text-[#a39e98] text-center mt-3 mb-8 leading-relaxed">
          CODEMUSE 멤버십에 가입하고 특별한 혜택을 받아 보세요.
        </p>

        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="이름"
            className="w-full border border-[#e8e4df] bg-white px-4 py-3.5 text-sm text-[#181512] placeholder:text-[#c4c0ba] focus:outline-none focus:border-[#181512]"
          />
          <input
            type="email"
            placeholder="이메일"
            className="w-full border border-[#e8e4df] bg-white px-4 py-3.5 text-sm text-[#181512] placeholder:text-[#c4c0ba] focus:outline-none focus:border-[#181512]"
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="w-full border border-[#e8e4df] bg-white px-4 py-3.5 text-sm text-[#181512] placeholder:text-[#c4c0ba] focus:outline-none focus:border-[#181512]"
          />

          <button
            type="submit"
            className="w-full bg-[#181512] text-white py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-[#2a2622] transition-colors mt-2"
          >
            Join Us
          </button>

          <Link
            to="/login"
            className="flex w-full items-center justify-center border border-[#e8e4df] bg-white text-[#181512] py-3.5 text-xs tracking-[0.2em] uppercase hover:border-[#181512] transition-colors"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}
