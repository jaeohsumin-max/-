import { useEffect, useRef, useState } from "react";

const DEFAULT_INTERVAL_MS = 2200;

export default function ProductImageSlideshow({
  images,
  alt,
  index,
  onIndexChange,
  autoPlay = true,
  intervalMs = DEFAULT_INTERVAL_MS,
  className = "",
}) {
  const [paused, setPaused] = useState(false);
  const indexRef = useRef(index);
  const safeImages = images?.length ? images : [];

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    if (!autoPlay || safeImages.length <= 1 || paused) return undefined;

    const timer = setInterval(() => {
      const next = (indexRef.current + 1) % safeImages.length;
      indexRef.current = next;
      onIndexChange(next);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [autoPlay, safeImages.length, paused, intervalMs, onIndexChange]);

  if (safeImages.length === 0) {
    return <div className={`bg-[#f7f7f7] ${className}`} />;
  }

  const activeIndex = Math.min(index, safeImages.length - 1);

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {safeImages.map((src, i) => (
        <img
          key={`${src}-${i}`}
          src={src}
          alt={i === activeIndex ? alt : ""}
          aria-hidden={i !== activeIndex}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[900ms] ease-in-out ${
            i === activeIndex ? "opacity-100 z-[1]" : "opacity-0 z-0"
          }`}
        />
      ))}
    </div>
  );
}
