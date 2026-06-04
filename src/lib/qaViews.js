function storageKey(postId) {
  return `codemuse_qa_view_count_${postId}`;
}

function sessionKey(postId) {
  return `codemuse_qa_view_session_${postId}`;
}

export function getQaViewCount(postId) {
  try {
    const raw = localStorage.getItem(storageKey(postId));
    if (raw === null) return 0;
    const n = Number(raw);
    return Number.isFinite(n) && n >= 0 ? n : 0;
  } catch {
    return 0;
  }
}

export function recordQaView(postId) {
  try {
    if (sessionStorage.getItem(sessionKey(postId))) {
      return getQaViewCount(postId);
    }
    sessionStorage.setItem(sessionKey(postId), "1");
    const next = getQaViewCount(postId) + 1;
    localStorage.setItem(storageKey(postId), String(next));
    return next;
  } catch {
    return getQaViewCount(postId);
  }
}
