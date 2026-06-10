export default function MirrorShotImage({
  src,
  alt,
  className = "",
  cropTop = "14%",
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full block"
        style={{ clipPath: `inset(${cropTop} 0 0 0)` }}
        loading="lazy"
      />
    </div>
  );
}
