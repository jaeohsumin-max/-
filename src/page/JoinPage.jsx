import { useState } from "react";
import { Link } from "react-router-dom";

const inputClass =
  "w-full border border-[#e8e4df] bg-white px-3 py-2.5 text-sm text-[#181512] placeholder:text-[#c4c0ba] focus:outline-none focus:border-[#181512]";

const btnOutlineClass =
  "shrink-0 border border-[#e8e4df] bg-white px-3 py-2.5 text-xs text-[#181512] hover:border-[#181512] transition-colors whitespace-nowrap";

function RequiredBadge() {
  return <span className="text-[#c45c4a] text-[10px] ml-0.5">*</span>;
}

function FormRow({ label, required, children, className = "" }) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-4 py-4 border-b border-[#f0ede8] ${className}`}
    >
      <div className="text-xs text-[#6b6560] md:pt-2.5 font-medium">
        {label}
        {required && <RequiredBadge />}
      </div>
      <div>{children}</div>
    </div>
  );
}

const TERMS_TEXT = `제1조(목적)
이 약관은 코드뮤즈(CODEMUSE)가 운영하는 온라인 쇼핑몰에서 제공하는 서비스 이용과 관련하여 회사와 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.

제2조(정의)
① "몰"이란 코드뮤즈가 재화를 이용자에게 제공하기 위하여 운영하는 온라인 쇼핑몰을 말합니다.
② "이용자"란 몰에 접속하여 이 약관에 따라 서비스를 받는 회원 및 비회원을 말합니다.

제3조(회원가입)
이용자는 가입 양식에 따라 회원정보를 기입한 후 약관에 동의함으로써 회원가입을 신청합니다.

제4조(개인정보)
회사는 이용자의 개인정보를 관련 법령에 따라 수집·이용하며, 이용 목적 달성 후 지체 없이 파기합니다.`;

const PRIVACY_TEXT = `1. 수집 항목: 아이디, 비밀번호, 이름, 주소, 연락처, 이메일
2. 수집 목적: 회원 식별, 주문·배송, 고객 상담, 마케팅(선택 동의 시)
3. 보유 기간: 회원 탈퇴 시까지 (관련 법령에 따른 보존 기간 제외)
4. 이용자는 개인정보 열람·정정·삭제를 요청할 수 있습니다.`;

export default function JoinPage() {
  const [memberType, setMemberType] = useState("personal");
  const [agreeAll, setAgreeAll] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);
  const [gender, setGender] = useState("");

  const handleAgreeAll = (checked) => {
    setAgreeAll(checked);
    setAgreeTerms(checked);
    setAgreePrivacy(checked);
    setAgreeMarketing(checked);
  };

  const updateIndividual = (terms, privacy, marketing) => {
    setAgreeTerms(terms);
    setAgreePrivacy(privacy);
    setAgreeMarketing(marketing);
    setAgreeAll(terms && privacy);
  };

  return (
    <div className="flex-1 w-full bg-white">
      <div className="max-w-3xl mx-auto px-5 py-10 md:py-14">
        <nav className="text-[10px] text-[#a39e98] mb-6 flex items-center gap-1.5">
          <Link to="/" className="hover:text-[#181512]">
            home
          </Link>
          <span>/</span>
          <span className="text-[#181512]">join</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold tracking-[0.12em] text-[#181512] uppercase text-center">
          Join Us
        </h1>
        <p className="text-sm text-[#6b6560] text-center mt-2 mb-8">회원가입</p>

        <form onSubmit={(e) => e.preventDefault()}>
          <section className="border-t border-[#181512]">
            <h2 className="text-sm font-semibold text-[#181512] py-4 border-b border-[#e8e4df]">
              회원구분
            </h2>
            <FormRow label="회원구분" required>
              <label className="inline-flex items-center gap-2 text-sm text-[#181512] cursor-pointer">
                <input
                  type="radio"
                  name="memberType"
                  value="personal"
                  checked={memberType === "personal"}
                  onChange={() => setMemberType("personal")}
                  className="accent-[#181512]"
                />
                개인회원
              </label>
            </FormRow>
          </section>

          <section className="mt-8">
            <div className="flex items-end justify-between border-b border-[#181512] pb-2 mb-0">
              <h2 className="text-sm font-semibold text-[#181512]">기본정보</h2>
              <span className="text-[10px] text-[#a39e98]">
                <span className="text-[#c45c4a]">*</span> 필수입력사항
              </span>
            </div>

            <FormRow label="아이디" required>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="영문소문자/숫자, 4~16자"
                  className={inputClass}
                />
                <button type="button" className={btnOutlineClass}>
                  중복확인
                </button>
              </div>
            </FormRow>

            <FormRow label="비밀번호" required>
              <input
                type="password"
                placeholder="영문 대소문자/숫자/특수문자 중 3가지 이상, 8~16자"
                className={inputClass}
              />
            </FormRow>

            <FormRow label="비밀번호 확인" required>
              <input type="password" className={inputClass} />
            </FormRow>

            <FormRow label="이름" required>
              <input type="text" className={inputClass} />
            </FormRow>

            <FormRow label="주소" required>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="우편번호"
                    readOnly
                    className={`${inputClass} bg-[#faf9f6]`}
                  />
                  <button type="button" className={btnOutlineClass}>
                    우편번호
                  </button>
                </div>
                <input type="text" placeholder="기본주소" className={inputClass} />
                <input
                  type="text"
                  placeholder="나머지주소 (선택입력가능)"
                  className={inputClass}
                />
              </div>
            </FormRow>

            <FormRow label="휴대전화" required>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <select className={`${inputClass} w-24 shrink-0`} defaultValue="010">
                    <option value="010">010</option>
                    <option value="011">011</option>
                    <option value="016">016</option>
                    <option value="017">017</option>
                    <option value="018">018</option>
                    <option value="019">019</option>
                  </select>
                  <input type="tel" placeholder="" className={inputClass} />
                  <button type="button" className={btnOutlineClass}>
                    인증번호받기
                  </button>
                </div>
                <div className="flex gap-2">
                  <input type="text" placeholder="인증번호" className={inputClass} />
                  <button type="button" className={btnOutlineClass}>
                    확인
                  </button>
                </div>
              </div>
            </FormRow>

            <FormRow label="이메일" required>
              <input type="email" className={inputClass} />
            </FormRow>
          </section>

          <section className="mt-8">
            <h2 className="text-sm font-semibold text-[#181512] py-4 border-t border-b border-[#e8e4df]">
              추가정보
            </h2>

            <FormRow label="성별" required>
              <div className="flex gap-6 text-sm text-[#181512]">
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={() => setGender("male")}
                    className="accent-[#181512]"
                  />
                  남자
                </label>
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={() => setGender("female")}
                    className="accent-[#181512]"
                  />
                  여자
                </label>
              </div>
            </FormRow>
          </section>

          <section className="mt-8 space-y-4">
            <h2 className="text-sm font-semibold text-[#181512] border-b border-[#181512] pb-2">
              전체 동의
            </h2>

            <label className="flex items-start gap-2 cursor-pointer py-2">
              <input
                type="checkbox"
                checked={agreeAll}
                onChange={(e) => handleAgreeAll(e.target.checked)}
                className="mt-0.5 accent-[#181512]"
              />
              <span className="text-sm text-[#181512] font-medium">
                이용약관 및 개인정보수집 및 이용, 쇼핑정보 수신(선택)에 모두
                동의합니다.
              </span>
            </label>

            <AgreementBlock
              title="[필수] 이용약관 동의"
              text={TERMS_TEXT}
              checked={agreeTerms}
              onChange={(v) => updateIndividual(v, agreePrivacy, agreeMarketing)}
            />

            <AgreementBlock
              title="[필수] 개인정보 수집 및 이용 동의"
              text={PRIVACY_TEXT}
              checked={agreePrivacy}
              onChange={(v) => updateIndividual(agreeTerms, v, agreeMarketing)}
            />

            <AgreementBlock
              title="[선택] 쇼핑정보 수신 동의"
              text="코드뮤즈의 신상품, 이벤트, 할인 소식을 이메일·SMS로 받아보실 수 있습니다."
              checked={agreeMarketing}
              onChange={(v) => updateIndividual(agreeTerms, agreePrivacy, v)}
              optional
            />
          </section>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 bg-[#181512] text-white py-4 text-xs tracking-[0.2em] uppercase hover:bg-[#2a2622] transition-colors"
            >
              회원가입
            </button>
            <Link
              to="/login"
              className="flex-1 flex items-center justify-center border border-[#e8e4df] text-[#181512] py-4 text-xs tracking-[0.2em] uppercase hover:border-[#181512] transition-colors"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

function AgreementBlock({ title, text, checked, onChange, optional = false }) {
  return (
    <div className="border border-[#e8e4df]">
      <label className="flex items-center gap-2 px-4 py-3 border-b border-[#e8e4df] bg-[#faf9f6] cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="accent-[#181512]"
        />
        <span className="text-xs font-medium text-[#181512]">
          {title}
          {optional && (
            <span className="text-[#a39e98] font-normal ml-1">(선택)</span>
          )}
        </span>
      </label>
      <div className="h-28 overflow-y-auto p-4 text-[11px] leading-relaxed text-[#6b6560] whitespace-pre-line bg-white">
        {text}
      </div>
    </div>
  );
}
