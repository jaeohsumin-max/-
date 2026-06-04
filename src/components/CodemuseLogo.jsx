/** 헤더용 CODE MUSE 워드마크 (얇은 세리프) */
export default function CodemuseLogo({ className = "" }) {
  return (
    <div
      className={`font-serif font-light leading-[0.88] tracking-[0.14em] text-[#111] ${className}`}
      aria-hidden
    >
      <span className="block text-[14px] md:text-[15px] xl:text-[17px]">CODE</span>
      <span className="block text-[14px] md:text-[15px] xl:text-[17px]">MUSE</span>
    </div>
  );
}
