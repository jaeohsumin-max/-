import { formatPrice } from "../data/products";

export function ColorSwatches({ colors, className = "" }) {
  if (!colors?.length) return null;

  return (
    <div className={`flex flex-wrap items-center gap-1.5 ${className}`}>
      {colors.map((color) => (
        <ColorSwatch key={color} color={color} />
      ))}
    </div>
  );
}

function ColorSwatch({ color }) {
  const swatches = getColorSwatchValues(color);

  if (swatches.length > 1) {
    return (
      <span
        className="inline-flex w-3 h-3 border border-[#ccc] overflow-hidden shrink-0"
        title={color}
      >
        {swatches.map((hex) => (
          <span
            key={`${color}-${hex}`}
            className="flex-1 h-full"
            style={{ backgroundColor: hex }}
          />
        ))}
      </span>
    );
  }

  return (
    <span
      className="inline-block w-3 h-3 border border-[#ccc] shrink-0"
      style={{ backgroundColor: swatches[0] }}
      title={color}
    />
  );
}

function getColorSwatchValues(color) {
  const map = {
    Ivory: ["#f0ebe3"],
    Gray: ["#a8a8a8"],
    Black: ["#222222"],
    Pink: ["#f4c4d0"],
    Navy: ["#243b5c"],
    Purple: ["#7a5c8f"],
  };

  return map[color] ?? ["#cccccc"];
}

export default function ProductPriceDisplay({
  price,
  originalPrice,
  variant = "card",
}) {
  const hasSale = originalPrice && originalPrice > price;

  if (variant === "detail") {
    return (
      <div className="leading-none">
        {hasSale && (
          <p className="text-[14px] md:text-[15px] text-[#111] line-through mb-1.5">
            {formatPrice(originalPrice)}
          </p>
        )}
        <p
          className={`text-[#111] ${
            hasSale ? "text-[20px] md:text-[22px]" : "text-[18px] md:text-[20px]"
          }`}
        >
          {formatPrice(price)}
        </p>
      </div>
    );
  }

  return (
    <div className="leading-tight">
      {hasSale && (
        <p className="text-[11px] md:text-[12px] text-[#111] line-through">
          {formatPrice(originalPrice)}
        </p>
      )}
      <p
        className={`text-[#111] ${
          hasSale ? "text-[14px] md:text-[15px]" : "text-[12px] md:text-[13px]"
        }`}
      >
        {formatPrice(price)}
      </p>
    </div>
  );
}
