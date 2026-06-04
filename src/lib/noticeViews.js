function storageKey(noticeId) {
  return `codemuse_notice_view_count_${noticeId}`;
}

function sessionKey(noticeId) {
  return `codemuse_notice_view_session_${noticeId}`;
}

export function getNoticeViewCount(noticeId) {
  try {
    const raw = localStorage.getItem(storageKey(noticeId));
    if (raw === null) return 0;
    const n = Number(raw);
    return Number.isFinite(n) && n >= 0 ? n : 0;
  } catch {
    return 0;
  }
}

/** 상세 페이지 진입 시 1회 증가 (같은 탭에서 새로고침은 제외) */
export function recordNoticeView(noticeId) {
  try {
    if (sessionStorage.getItem(sessionKey(noticeId))) {
      return getNoticeViewCount(noticeId);
    }
    sessionStorage.setItem(sessionKey(noticeId), "1");
    const next = getNoticeViewCount(noticeId) + 1;
    localStorage.setItem(storageKey(noticeId), String(next));
    return next;
  } catch {
    return getNoticeViewCount(noticeId);
  }
}
