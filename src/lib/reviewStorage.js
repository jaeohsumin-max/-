import { maskAuthor } from "./qaStorage";

const STORAGE_KEY = "codemuse_reviews";

function readRaw() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeRaw(reviews) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
}

export function formatReviewDateTime(iso) {
  const d = new Date(iso);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const h = String(d.getHours()).padStart(2, "0");
  const min = String(d.getMinutes()).padStart(2, "0");
  const s = String(d.getSeconds()).padStart(2, "0");
  return `${y}-${m}-${day} ${h}:${min}:${s}`;
}

export function getReviews() {
  return readRaw().sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}

export function getReviewById(id) {
  return readRaw().find((r) => r.id === id) ?? null;
}

export function addReview({ productId, productName, title, content, rating, authorName }) {
  const reviews = readRaw();
  const review = {
    id: String(Date.now()),
    productId: productId || null,
    productName: productName.trim(),
    title: title.trim(),
    content: content.trim(),
    rating: Math.min(5, Math.max(1, Number(rating) || 5)),
    author: maskAuthor(authorName),
    createdAt: new Date().toISOString(),
  };
  writeRaw([review, ...reviews]);
  return review;
}
