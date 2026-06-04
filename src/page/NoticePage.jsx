import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { NOTICES } from "../data/notices";

const SEARCH_PERIODS = [
  { id: "week", label: "일주일" },
  { id: "month", label: "한달" },
  { id: "quarter", label: "세달" },
  { id: "all", label: "전체" },
];

const SEARCH_FIELDS = [
  { id: "title", label: "제목" },
  { id: "content", label: "내용" },
  { id: "author", label: "글쓴이" },
];

export default function NoticePage() {
  const [keyword, setKeyword] = useState("");
  const [field, setField] = useState("title");
  const [period, setPeriod] = useState("all");
  const [searched, setSearched] = useState(false);

  const filtered = useMemo(() => {
    if (!searched || !keyword.trim()) return NOTICES;
    const q = keyword.trim().toLowerCase();
    return NOTICES.filter((n) => {
      if (field === "title") return n.title.toLowerCase().includes(q);
      if (field === "content") return n.body.toLowerCase().includes(q);
      if (field === "author") return n.author.toLowerCase().includes(q);
      return (
        n.title.toLowerCase().includes(q) ||
        n.body.toLowerCase().includes(q)
      );
    });
  }, [keyword, field, searched]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearched(true);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-6 md:py-10">
      <nav className="text-[11px] text-[#999] mb-6 flex items-center flex-wrap gap-1">
        <Link to="/" className="hover:text-black">
          홈
        </Link>
        <span className="text-[#ccc]">›</span>
        <span className="text-[#888]">게시판</span>
        <span className="text-[#ccc]">›</span>
        <span className="text-[#333] font-medium">NOTICE</span>
      </nav>

      <h2 className="text-center text-lg md:text-xl font-semibold text-[#111] mb-8">
        NOTICE
      </h2>

      <div className="overflow-x-auto border-t border-[#333]">
        <table className="w-full min-w-[640px] text-[12px] text-[#333] border-collapse">
          <caption className="sr-only">게시판 목록</caption>
          <thead>
            <tr className="bg-[#fafafa] border-b border-[#ddd]">
              <th className="w-14 py-3 px-2 font-medium text-[#666] border-r border-[#eee]">
                번호
              </th>
              <th className="w-12 py-3 px-2 font-medium text-[#666] border-r border-[#eee]">
                공지
              </th>
              <th className="py-3 px-3 font-medium text-[#666] text-left border-r border-[#eee]">
                제목
              </th>
              <th className="w-24 py-3 px-2 font-medium text-[#666] border-r border-[#eee]">
                작성자
              </th>
              <th className="w-28 py-3 px-2 font-medium text-[#666] border-r border-[#eee]">
                작성일
              </th>
              <th className="w-16 py-3 px-2 font-medium text-[#666]">조회</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-16 text-center text-[#999]">
                  검색결과가 없습니다.
                </td>
              </tr>
            ) : (
              filtered.map((notice) => (
                <tr
                  key={notice.id}
                  className="border-b border-[#eee] hover:bg-[#fafafa]"
                >
                  <td className="py-3 px-2 text-center text-[#888] border-r border-[#f0f0f0]">
                    {notice.pinned ? (
                      <span className="text-[10px] text-[#c45c4a] font-semibold">
                        공지
                      </span>
                    ) : (
                      notice.id
                    )}
                  </td>
                  <td className="py-3 px-2 text-center border-r border-[#f0f0f0]">
                    {notice.pinned && (
                      <span className="text-[10px] text-[#c45c4a] font-semibold">
                        공지
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-3 text-left border-r border-[#f0f0f0]">
                    <Link
                      to={`/notice/${notice.id}`}
                      className="font-medium text-[#111] hover:underline"
                    >
                      {notice.title}
                    </Link>
                  </td>
                  <td className="py-3 px-2 text-center text-[#666] border-r border-[#f0f0f0]">
                    {notice.author}
                  </td>
                  <td className="py-3 px-2 text-center text-[#888] border-r border-[#f0f0f0]">
                    {notice.date}
                  </td>
                  <td className="py-3 px-2 text-center text-[#888]">
                    {notice.views}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <form
        onSubmit={handleSearch}
        className="mt-10 pt-8 border-t border-[#eee] flex flex-col md:flex-row md:items-center md:justify-end gap-3"
      >
        <span className="text-[11px] text-[#888] md:mr-auto">게시물 검색</span>
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="border border-[#ddd] px-2 py-2 text-[12px] bg-white"
          >
            {SEARCH_PERIODS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.label}
              </option>
            ))}
          </select>
          <select
            value={field}
            onChange={(e) => setField(e.target.value)}
            className="border border-[#ddd] px-2 py-2 text-[12px] bg-white"
          >
            {SEARCH_FIELDS.map((f) => (
              <option key={f.id} value={f.id}>
                {f.label}
              </option>
            ))}
          </select>
          <input
            type="search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="border border-[#ddd] px-3 py-2 text-[12px] w-40 md:w-52 focus:outline-none focus:border-[#333]"
          />
          <button
            type="submit"
            className="px-4 py-2 border border-[#333] text-[12px] hover:bg-[#333] hover:text-white transition-colors"
          >
            찾기
          </button>
        </div>
      </form>
    </div>
  );
}
