import { useEffect, useRef, useState } from "react";

const DEFAULT_INTERVAL_MS = 2200;
const MANUAL_SELECT_PAUSE_MS = 5000;
const MIRROR_OBJECT_POSITION = "center 62%";

export default function ProductImageSlideshow({
  images,
  alt,
  index,
  onIndexChange,
  autoPlay = true,
  intervalMs = DEFAULT_INTERVAL_MS,
  className = "",
  mirrorCrop = false,
}) {
  const [hoverPaused, setHoverPaused] = useState(false);
  const [manualPaused, setManualPaused] = useState(false);
  const indexRef = useRef(index);
  const advancingRef = useRef(false);
  const skipNextPauseRef = useRef(true);
  const safeImages = images?.length ? images : [];

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    if (skipNextPauseRef.current) {
      skipNextPauseRef.current = false;
      return undefined;
    }
    if (advancingRef.current) {
      advancingRef.current = false;
      return undefined;
    }

    setManualPaused(true);
    const timer = setTimeout(() => setManualPaused(false), MANUAL_SELECT_PAUSE_MS);
    return () => clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    skipNextPauseRef.current = true;
    setManualPaused(false);
  }, [images]);

  const paused = hoverPaused || manualPaused;

  useEffect(() => {
    if (!autoPlay || safeImages.length <= 1 || paused) return undefined;

    const timer = setInterval(() => {
      const next = (indexRef.current + 1) % safeImages.length;
      indexRef.current = next;
      advancingRef.current = true;
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
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
      onFocus={() => setHoverPaused(true)}
      onBlur={() => setHoverPaused(false)}
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
          style={mirrorCrop ? { objectPosition: MIRROR_OBJECT_POSITION } : undefined}
        />
      ))}
    </div>
  );
}
