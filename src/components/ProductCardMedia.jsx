import { useState } from "react";
import { getProductListImages } from "../data/products";
import ProductImageSlideshow from "./ProductImageSlideshow";

export default function ProductCardMedia({ product, className = "", children }) {
  const [imageIndex, setImageIndex] = useState(0);
  const images = getProductListImages(product);
  const imageFit = product.thumbnailFit ?? "cover";
  const thumbnailStyle = product.thumbnailAspectRatio
    ? { aspectRatio: product.thumbnailAspectRatio }
    : undefined;

  return (
    <div
      className={`relative overflow-hidden ${
        imageFit === "contain" ? "bg-white" : "bg-[#f5f5f5]"
      } ${className}`}
      style={thumbnailStyle}
    >
      {images.length > 1 ? (
        <ProductImageSlideshow
          images={images}
          alt={product.name}
          index={imageIndex}
          onIndexChange={setImageIndex}
          autoPlay
          mirrorCrop={imageFit !== "contain"}
          imageFit={imageFit}
        />
      ) : (
        <img
          src={images[0]}
          alt={product.name}
          className={`w-full h-full ${
            imageFit === "contain" ? "object-contain" : "object-cover object-[center_62%]"
          }`}
          loading="lazy"
        />
      )}
      {children}
    </div>
  );
}
