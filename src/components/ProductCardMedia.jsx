import { useState } from "react";
import { getProductListImages } from "../data/products";
import ProductImageSlideshow from "./ProductImageSlideshow";

export default function ProductCardMedia({ product, className = "", children }) {
  const [imageIndex, setImageIndex] = useState(0);
  const images = getProductListImages(product);

  return (
    <div className={`relative overflow-hidden bg-[#f5f5f5] ${className}`}>
      {images.length > 1 ? (
        <ProductImageSlideshow
          images={images}
          alt={product.name}
          index={imageIndex}
          onIndexChange={setImageIndex}
          autoPlay
          mirrorCrop
        />
      ) : (
        <img
          src={images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-[center_62%]"
          loading="lazy"
        />
      )}
      {children}
    </div>
  );
}
