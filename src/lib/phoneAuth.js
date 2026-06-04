const OTP_KEY = "codemuse_phone_otp";
const OTP_TTL_MS = 3 * 60 * 1000;
const RESEND_COOLDOWN_MS = 60 * 1000;

function readOtpStore() {
  try {
    const raw = sessionStorage.getItem(OTP_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeOtpStore(store) {
  sessionStorage.setItem(OTP_KEY, JSON.stringify(store));
}

function generateCode() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

async function dispatchSms(phone, code) {
  const url = import.meta.env.VITE_SMS_WEBHOOK_URL;
  if (!url) return { sent: false };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone, code, brand: "CODEMUSE" }),
  });

  if (!res.ok) {
    throw new Error("SMS 발송에 실패했습니다. 잠시 후 다시 시도해 주세요.");
  }
  return { sent: true };
}

export async function sendPhoneOtp(phone) {
  const store = readOtpStore();
  const existing = store[phone];
  const now = Date.now();

  if (existing?.sentAt && now - existing.sentAt < RESEND_COOLDOWN_MS) {
    const waitSec = Math.ceil(
      (RESEND_COOLDOWN_MS - (now - existing.sentAt)) / 1000,
    );
    throw new Error(`${waitSec}초 후에 다시 요청할 수 있습니다.`);
  }

  const code = generateCode();
  store[phone] = { code, sentAt: now, expiresAt: now + OTP_TTL_MS };
  writeOtpStore(store);

  const sms = await dispatchSms(phone, code);
  return {
    ok: true,
    expiresInSec: OTP_TTL_MS / 1000,
    smsSent: sms.sent,
    /** 정적 호스팅 데모: 웹훅 없을 때 화면에 표시할 인증번호 */
    demoCode: sms.sent ? null : code,
  };
}

export function verifyPhoneOtp(phone, inputCode) {
  const store = readOtpStore();
  const entry = store[phone];
  if (!entry) {
    return { ok: false, message: "인증번호를 먼저 요청해 주세요." };
  }
  if (Date.now() > entry.expiresAt) {
    return { ok: false, message: "인증번호가 만료되었습니다. 다시 요청해 주세요." };
  }
  if (entry.code !== inputCode.trim()) {
    return { ok: false, message: "인증번호가 일치하지 않습니다." };
  }

  delete store[phone];
  writeOtpStore(store);
  sessionStorage.setItem(`codemuse_phone_verified:${phone}`, "1");
  return { ok: true, message: "휴대전화 인증이 완료되었습니다." };
}

export function isPhoneVerified(phone) {
  return sessionStorage.getItem(`codemuse_phone_verified:${phone}`) === "1";
}

export function clearPhoneVerification(phone) {
  sessionStorage.removeItem(`codemuse_phone_verified:${phone}`);
}
