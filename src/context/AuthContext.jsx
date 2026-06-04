import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { authenticateMember } from "../lib/members";

const SESSION_KEY = "codemuse_session";
const SAVED_ID_KEY = "codemuse_saved_id";

const AuthContext = createContext(null);

function readSession() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => readSession());

  const login = useCallback(async (memberId, password, saveId = false) => {
    const member = await authenticateMember(memberId, password);
    if (!member) {
      throw new Error("아이디 또는 비밀번호가 올바르지 않습니다.");
    }

    const session = {
      id: member.id,
      name: member.name,
      email: member.email,
    };
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);

    if (saveId) {
      localStorage.setItem(SAVED_ID_KEY, member.id);
    } else {
      localStorage.removeItem(SAVED_ID_KEY);
    }

    return session;
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(SESSION_KEY);
    setUser(null);
  }, []);

  const getSavedId = useCallback(() => localStorage.getItem(SAVED_ID_KEY) ?? "", []);

  const value = useMemo(
    () => ({
      user,
      isLoggedIn: Boolean(user),
      login,
      logout,
      getSavedId,
    }),
    [user, login, logout, getSavedId],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
