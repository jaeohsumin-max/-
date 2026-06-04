import { SIGNUP_BONUS_POINTS } from "../data/site";

const MEMBERS_KEY = "codemuse_members";

function readMembers() {
  try {
    const raw = localStorage.getItem(MEMBERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeMembers(members) {
  localStorage.setItem(MEMBERS_KEY, JSON.stringify(members));
}

export async function hashPassword(password, salt) {
  const data = new TextEncoder().encode(`${salt}:${password}`);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function isMemberIdAvailable(memberId) {
  const id = memberId.trim().toLowerCase();
  return !readMembers().some((m) => m.id === id);
}

export async function registerMember(payload) {
  const id = payload.id.trim().toLowerCase();
  const members = readMembers();
  if (members.some((m) => m.id === id)) {
    throw new Error("이미 사용 중인 아이디입니다.");
  }

  const passwordHash = await hashPassword(payload.password, id);
  const member = {
    id,
    passwordHash,
    name: payload.name.trim(),
    email: payload.email.trim().toLowerCase(),
    phone: payload.phone,
    zipcode: payload.zipcode,
    address1: payload.address1,
    address2: payload.address2?.trim() ?? "",
    gender: payload.gender,
    memberType: payload.memberType,
    agreeMarketing: payload.agreeMarketing,
    points: SIGNUP_BONUS_POINTS,
    createdAt: new Date().toISOString(),
  };

  writeMembers([...members, member]);
  return member;
}

export async function authenticateMember(memberId, password) {
  const id = memberId.trim().toLowerCase();
  const member = readMembers().find((m) => m.id === id);
  if (!member) return null;
  const passwordHash = await hashPassword(password, id);
  if (member.passwordHash !== passwordHash) return null;
  return member;
}

export function getMemberById(memberId) {
  const id = memberId.trim().toLowerCase();
  return readMembers().find((m) => m.id === id) ?? null;
}
