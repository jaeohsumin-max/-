const ID_REGEX = /^[a-z0-9]{4,16}$/;

export function validateMemberId(id) {
  if (!id?.trim()) return "아이디를 입력해 주세요.";
  if (!ID_REGEX.test(id)) {
    return "아이디는 영문 소문자·숫자 4~16자만 사용할 수 있습니다.";
  }
  return null;
}

export function validatePassword(password) {
  if (!password) return "비밀번호를 입력해 주세요.";
  if (password.length < 8 || password.length > 16) {
    return "비밀번호는 8~16자로 입력해 주세요.";
  }
  const types = [
    /[a-z]/.test(password),
    /[A-Z]/.test(password),
    /\d/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ].filter(Boolean).length;
  if (types < 3) {
    return "영문 대·소문자, 숫자, 특수문자 중 3가지 이상을 포함해 주세요.";
  }
  return null;
}

export function validateEmail(email) {
  if (!email?.trim()) return "이메일을 입력해 주세요.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return "올바른 이메일 형식이 아닙니다.";
  }
  return null;
}

export function validatePhone(prefix, number) {
  const digits = number?.replace(/\D/g, "") ?? "";
  if (!digits) return "휴대전화 번호를 입력해 주세요.";
  if (!/^\d{7,8}$/.test(digits)) {
    return "휴대전화 번호 7~8자리를 입력해 주세요.";
  }
  return null;
}

export function formatPhone(prefix, number) {
  const digits = number.replace(/\D/g, "");
  return `${prefix}-${digits}`;
}
