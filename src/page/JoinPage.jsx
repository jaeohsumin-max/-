import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthPageLayout, {
  AuthBenefitBox,
  authBtnOutline,
  authBtnPrimary,
  authInputClass,
} from "../components/AuthPageLayout";
import { useAuth } from "../context/AuthContext";
import { SIGNUP_BONUS_POINTS } from "../data/site";
import { useDaumPostcode } from "../hooks/useDaumPostcode";
import { isMemberIdAvailable, registerMember } from "../lib/members";
import {
  clearPhoneVerification,
  isPhoneVerified,
  sendPhoneOtp,
  verifyPhoneOtp,
} from "../lib/phoneAuth";
import {
  formatPhone,
  validateEmail,
  validateMemberId,
  validatePassword,
  validatePhone,
} from "../lib/validation";

function RequiredBadge() {
  return <span className="text-[#e53935] text-[10px] ml-0.5">*</span>;
}

function FormRow({ label, required, children, className = "" }) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-[120px_1fr] gap-2 md:gap-3 py-3 border-b border-[#eee] ${className}`}
    >
      <div className="text-[11px] text-[#666] md:pt-2.5 bg-[#fafafa] md:bg-transparent md:px-0 px-1">
        {label}
        {required && <RequiredBadge />}
      </div>
      <div>{children}</div>
    </div>
  );
}

function FieldHint({ type, message }) {
  if (!message) return null;
  const color =
    type === "error" ? "text-[#c45c4a]" : type === "success" ? "text-[#3d7a5c]" : "text-[#6b6560]";
  return <p className={`mt-1.5 text-[11px] ${color}`}>{message}</p>;
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
  const navigate = useNavigate();
  const { login, isLoggedIn } = useAuth();
  const { openPostcode, loadError: postcodeLoadError } = useDaumPostcode();

  const [memberType, setMemberType] = useState("personal");
  const [memberId, setMemberId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [phonePrefix, setPhonePrefix] = useState("010");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const [idChecked, setIdChecked] = useState(false);
  const [checkedId, setCheckedId] = useState("");
  const [idMessage, setIdMessage] = useState({ type: "", text: "" });

  const [phoneVerified, setPhoneVerified] = useState(false);
  const [verifiedPhone, setVerifiedPhone] = useState("");
  const [phoneMessage, setPhoneMessage] = useState({ type: "", text: "" });
  const [demoOtp, setDemoOtp] = useState(null);
  const [otpSending, setOtpSending] = useState(false);

  const [agreeAll, setAgreeAll] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);

  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const fullPhone = formatPhone(phonePrefix, phoneNumber || "");

  useEffect(() => {
    if (isLoggedIn) navigate("/mypage", { replace: true });
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    if (memberId !== checkedId) {
      setIdChecked(false);
      setIdMessage({ type: "", text: "" });
    }
  }, [memberId, checkedId]);

  useEffect(() => {
    if (fullPhone !== verifiedPhone) {
      setPhoneVerified(false);
      setDemoOtp(null);
      if (verifiedPhone) clearPhoneVerification(verifiedPhone);
    }
  }, [fullPhone, verifiedPhone]);

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

  const handleIdCheck = () => {
    const err = validateMemberId(memberId);
    if (err) {
      setIdMessage({ type: "error", text: err });
      setIdChecked(false);
      return;
    }
    const id = memberId.trim().toLowerCase();
    if (isMemberIdAvailable(id)) {
      setIdChecked(true);
      setCheckedId(id);
      setIdMessage({ type: "success", text: "사용 가능한 아이디입니다." });
    } else {
      setIdChecked(false);
      setCheckedId("");
      setIdMessage({ type: "error", text: "이미 사용 중인 아이디입니다." });
    }
  };

  const handlePostcode = () => {
    openPostcode(({ zonecode, address }) => {
      setZipcode(zonecode);
      setAddress1(address);
    });
  };

  const handleSendOtp = async () => {
    const err = validatePhone(phonePrefix, phoneNumber);
    if (err) {
      setPhoneMessage({ type: "error", text: err });
      return;
    }

    setOtpSending(true);
    setPhoneMessage({ type: "", text: "" });
    setDemoOtp(null);

    try {
      const result = await sendPhoneOtp(fullPhone);
      if (result.demoCode) {
        setDemoOtp(result.demoCode);
        setPhoneMessage({
          type: "info",
          text: `인증번호가 발송되었습니다. (데모: ${result.demoCode}) — 3분 내 입력`,
        });
      } else {
        setPhoneMessage({
          type: "success",
          text: "인증번호가 휴대전화로 발송되었습니다. 3분 내 입력해 주세요.",
        });
      }
      setOtpCode("");
    } catch (e) {
      setPhoneMessage({ type: "error", text: e.message });
    } finally {
      setOtpSending(false);
    }
  };

  const handleVerifyOtp = () => {
    const result = verifyPhoneOtp(fullPhone, otpCode);
    if (!result.ok) {
      setPhoneMessage({ type: "error", text: result.message });
      setPhoneVerified(false);
      return;
    }
    setPhoneVerified(true);
    setVerifiedPhone(fullPhone);
    setDemoOtp(null);
    setPhoneMessage({ type: "success", text: result.message });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    const idErr = validateMemberId(memberId);
    if (idErr) return setFormError(idErr);
    if (!idChecked || checkedId !== memberId.trim().toLowerCase()) {
      return setFormError("아이디 중복확인을 해주세요.");
    }

    const pwErr = validatePassword(password);
    if (pwErr) return setFormError(pwErr);
    if (password !== passwordConfirm) {
      return setFormError("비밀번호 확인이 일치하지 않습니다.");
    }
    if (!name.trim()) return setFormError("이름을 입력해 주세요.");
    if (!zipcode || !address1.trim()) {
      return setFormError("주소를 입력해 주세요. 우편번호 찾기를 이용해 주세요.");
    }

    const phoneErr = validatePhone(phonePrefix, phoneNumber);
    if (phoneErr) return setFormError(phoneErr);
    if (!phoneVerified || !isPhoneVerified(fullPhone)) {
      return setFormError("휴대전화 인증을 완료해 주세요.");
    }

    const emailErr = validateEmail(email);
    if (emailErr) return setFormError(emailErr);
    if (!gender) return setFormError("성별을 선택해 주세요.");
    if (!agreeTerms || !agreePrivacy) {
      return setFormError("필수 약관에 동의해 주세요.");
    }

    setSubmitting(true);
    try {
      await registerMember({
        id: memberId,
        password,
        name,
        email,
        phone: fullPhone,
        zipcode,
        address1,
        address2,
        gender,
        memberType,
        agreeMarketing,
      });
      await login(memberId, password, false);
      navigate("/mypage", { replace: true });
    } catch (err) {
      setFormError(err.message || "회원가입에 실패했습니다.");
    } finally {
      setSubmitting(false);
    }
  };

  const joinSide = (
    <>
      <AuthBenefitBox />
      <div className="bg-[#111] text-white border border-[#111] p-5 text-center">
        <p className="text-[12px] opacity-80 mb-1">회원가입 혜택</p>
        <p className="text-2xl font-bold text-[#ffeb3b]">
          +{SIGNUP_BONUS_POINTS.toLocaleString()}
        </p>
        <p className="text-[11px] mt-1 opacity-80">적립금 즉시 지급</p>
      </div>
    </>
  );

  return (
    <AuthPageLayout
      title="회원가입"
      subtitle={`가입 완료 시 ${SIGNUP_BONUS_POINTS.toLocaleString()}원 적립금이 지급됩니다.`}
      breadcrumb="member"
      side={joinSide}
    >
      {postcodeLoadError && (
        <p className="mb-4 text-[12px] text-[#c45c4a]">{postcodeLoadError}</p>
      )}

      {formError && (
        <p className="mb-4 text-[12px] text-[#c45c4a] bg-[#fff5f5] border border-[#ffd6d6] px-3 py-2">
          {formError}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <section className="border border-[#ddd] mb-6">
          <h2 className="text-[12px] font-bold text-[#111] px-4 py-3 bg-[#f5f5f5] border-b border-[#ddd]">
            회원구분
          </h2>
          <div className="px-4">
            <FormRow label="회원구분" required>
              <label className="inline-flex items-center gap-2 text-[13px] cursor-pointer">
                <input
                  type="radio"
                  name="memberType"
                  value="personal"
                  checked={memberType === "personal"}
                  onChange={() => setMemberType("personal")}
                  className="accent-black"
                />
                개인회원
              </label>
            </FormRow>
          </div>
        </section>

        <section className="border border-[#ddd] mb-6">
          <div className="flex items-center justify-between px-4 py-3 bg-[#f5f5f5] border-b border-[#ddd]">
            <h2 className="text-[12px] font-bold text-[#111]">기본정보</h2>
            <span className="text-[10px] text-[#999]">
              <span className="text-[#e53935]">*</span> 필수입력
            </span>
          </div>
          <div className="px-4">
            <FormRow label="아이디" required>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={memberId}
                  onChange={(e) => setMemberId(e.target.value.toLowerCase())}
                  placeholder="영문소문자/숫자, 4~16자"
                  className={authInputClass}
                  autoComplete="username"
                />
                <button type="button" className={authBtnOutline} onClick={handleIdCheck}>
                  중복확인
                </button>
              </div>
              <FieldHint type={idMessage.type} message={idMessage.text} />
            </FormRow>

            <FormRow label="비밀번호" required>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="영문 대소문자/숫자/특수문자 중 3가지 이상, 8~16자"
                className={authInputClass}
                autoComplete="new-password"
              />
            </FormRow>

            <FormRow label="비밀번호 확인" required>
              <input
                type="password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                className={authInputClass}
                autoComplete="new-password"
              />
            </FormRow>

            <FormRow label="이름" required>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={authInputClass}
              />
            </FormRow>

            <FormRow label="주소" required>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={zipcode}
                    placeholder="우편번호"
                    readOnly
                    className={`${authInputClass} bg-[#faf9f6]`}
                  />
                  <button type="button" className={authBtnOutline} onClick={handlePostcode}>
                    우편번호
                  </button>
                </div>
                <input
                  type="text"
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                  placeholder="기본주소"
                  readOnly
                  className={`${authInputClass} bg-[#faf9f6]`}
                />
                <input
                  type="text"
                  value={address2}
                  onChange={(e) => setAddress2(e.target.value)}
                  placeholder="나머지주소 (선택입력가능)"
                  className={authInputClass}
                />
              </div>
            </FormRow>

            <FormRow label="휴대전화" required>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <select
                    className={`${authInputClass} w-24 shrink-0`}
                    value={phonePrefix}
                    onChange={(e) => setPhonePrefix(e.target.value)}
                  >
                    {["010", "011", "016", "017", "018", "019"].map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) =>
                      setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 8))
                    }
                    className={authInputClass}
                    placeholder="번호 입력"
                  />
                  <button
                    type="button"
                    className={authBtnOutline}
                    onClick={handleSendOtp}
                    disabled={otpSending || phoneVerified}
                  >
                    {otpSending ? "발송중…" : "인증번호받기"}
                  </button>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                    placeholder="인증번호 6자리"
                    className={authInputClass}
                    disabled={phoneVerified}
                  />
                  <button
                    type="button"
                    className={authBtnOutline}
                    onClick={handleVerifyOtp}
                    disabled={phoneVerified || otpCode.length < 6}
                  >
                    확인
                  </button>
                </div>
                <FieldHint type={phoneMessage.type} message={phoneMessage.text} />
                {demoOtp && !phoneVerified && (
                  <p className="text-[10px] text-[#a39e98]">
                    SMS 웹훅 미설정 시 화면에 표시된 인증번호를 입력하세요.
                  </p>
                )}
              </div>
            </FormRow>

            <FormRow label="이메일" required>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={authInputClass}
                autoComplete="email"
              />
            </FormRow>
          </div>
        </section>

        <section className="border border-[#ddd] mb-6">
          <h2 className="text-[12px] font-bold text-[#111] px-4 py-3 bg-[#f5f5f5] border-b border-[#ddd]">
            추가정보
          </h2>
          <div className="px-4">
            <FormRow label="성별" required>
              <div className="flex gap-6 text-[13px]">
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={() => setGender("male")}
                    className="accent-black"
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
                    className="accent-black"
                  />
                  여자
                </label>
              </div>
            </FormRow>
          </div>
        </section>

        <section className="border border-[#ddd] p-4 space-y-3">
          <h2 className="text-[12px] font-bold text-[#111] pb-2 border-b border-[#eee]">
            전체 동의
          </h2>

          <label className="flex items-start gap-2 cursor-pointer py-1">
            <input
              type="checkbox"
              checked={agreeAll}
              onChange={(e) => handleAgreeAll(e.target.checked)}
              className="mt-0.5 accent-black"
            />
            <span className="text-[12px] font-medium text-[#333]">
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

        <div className="mt-8 flex flex-col sm:flex-row gap-2 max-w-md">
          <button type="submit" disabled={submitting} className={authBtnPrimary}>
            {submitting ? "가입 처리 중…" : "가입하기"}
          </button>
          <Link
            to="/login"
            className="flex items-center justify-center border border-[#ccc] text-[#333] py-3 text-[12px] hover:border-[#333] sm:w-32"
          >
            로그인
          </Link>
        </div>
      </form>
    </AuthPageLayout>
  );
}

function AgreementBlock({ title, text, checked, onChange, optional = false }) {
  return (
    <div className="border border-[#ddd]">
      <label className="flex items-center gap-2 px-3 py-2 border-b border-[#eee] bg-[#fafafa] cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="accent-black"
        />
        <span className="text-[11px] font-medium text-[#333]">
          {title}
          {optional && (
            <span className="text-[#999] font-normal ml-1">(선택)</span>
          )}
        </span>
      </label>
      <div className="h-24 overflow-y-auto p-3 text-[10px] leading-relaxed text-[#666] whitespace-pre-line bg-white">
        {text}
      </div>
    </div>
  );
}
