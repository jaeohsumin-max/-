function storageKey(reviewId) {
  return `codemuse_review_view_count_${reviewId}`;
}

function sessionKey(reviewId) {
  return `codemuse_review_view_session_${reviewId}`;
}

export function getReviewViewCount(reviewId) {
  try {
    const raw = localStorage.getItem(storageKey(reviewId));
    if (raw === null) return 0;
    const n = Number(raw);
    return Number.isFinite(n) && n >= 0 ? n : 0;
  } catch {
    return 0;
  }
}

export function recordReviewView(reviewId) {
  try {
    if (sessionStorage.getItem(sessionKey(reviewId))) {
      return getReviewViewCount(reviewId);
    }
    sessionStorage.setItem(sessionKey(reviewId), "1");
    const next = getReviewViewCount(reviewId) + 1;
    localStorage.setItem(storageKey(reviewId), String(next));
    return next;
  } catch {
    return getReviewViewCount(reviewId);
  }
}
