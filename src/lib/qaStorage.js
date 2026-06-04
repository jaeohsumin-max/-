const STORAGE_KEY = "codemuse_qa_posts";

export const QA_CATEGORIES = [
  { id: "shipping", label: "배송" },
  { id: "return", label: "반품" },
  { id: "exchange", label: "교환" },
  { id: "product", label: "상품" },
  { id: "etc", label: "기타" },
];

function readRaw() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeRaw(posts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

export function formatQaDateTime(iso) {
  const d = new Date(iso);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const h = String(d.getHours()).padStart(2, "0");
  const min = String(d.getMinutes()).padStart(2, "0");
  const s = String(d.getSeconds()).padStart(2, "0");
  return `${y}-${m}-${day} ${h}:${min}:${s}`;
}

export function maskAuthor(name) {
  const trimmed = name?.trim();
  if (!trimmed) return "guest***";
  if (trimmed.length <= 1) return `${trimmed}***`;
  return `${trimmed[0]}${"*".repeat(Math.min(4, trimmed.length - 1))}***`;
}

export function getCategoryLabel(categoryId) {
  return QA_CATEGORIES.find((c) => c.id === categoryId)?.label ?? "기타";
}

export function getQaPosts() {
  return readRaw().sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}

export function getQaPostById(id) {
  return readRaw().find((p) => p.id === id) ?? null;
}

export function addQaPost({ category, title, content, authorName }) {
  const posts = readRaw();
  const post = {
    id: String(Date.now()),
    category,
    title: title.trim(),
    content: content.trim(),
    author: maskAuthor(authorName),
    createdAt: new Date().toISOString(),
    answer: null,
    answeredAt: null,
  };
  writeRaw([post, ...posts]);
  return post;
}
