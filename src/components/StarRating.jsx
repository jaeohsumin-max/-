export default function StarRating({ rating, size = 14 }) {
  return (
    <div className="inline-flex items-center gap-0.5" aria-label={`${rating}점`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`material-symbols-outlined fill-1 ${
            star <= rating ? "text-[#e8a020]" : "text-[#ddd]"
          }`}
          style={{ fontSize: size }}
        >
          star
        </span>
      ))}
    </div>
  );
}
