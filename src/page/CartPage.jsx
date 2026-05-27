import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { getProductById, formatPrice } from "../data/products";

const SHIPPING_FREE_THRESHOLD = 50000;
const SHIPPING_FEE = 3000;

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart } = useCart();
  const navigate = useNavigate();

  const cartLines = items
    .map((item) => {
      const product = getProductById(item.productId);
      if (!product) return null;
      return { ...item, product, lineTotal: product.price * item.quantity };
    })
    .filter(Boolean);

  const subtotal = cartLines.reduce((sum, line) => sum + line.lineTotal, 0);
  const shipping =
    subtotal === 0 ? 0 : subtotal >= SHIPPING_FREE_THRESHOLD ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;

  if (cartLines.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-32 text-center">
        <span className="material-symbols-outlined text-[64px] text-[#e8e4df] mb-6">
          shopping_bag
        </span>
        <h1 className="font-serif text-3xl md:text-4xl mb-4 tracking-tight">
          Your bag is empty
        </h1>
        <p className="text-[#6b6560] text-sm mb-8 leading-relaxed">
          Discover pieces you&apos;ll love.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-[#181512] text-white px-8 py-4 text-xs tracking-[0.2em] uppercase"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-10 py-10 md:py-16">
      <h1 className="font-serif text-3xl md:text-4xl mb-2 tracking-tight">Cart</h1>
      <p className="text-sm text-[#6b6560] mb-10 tracking-wide">
        {cartLines.length} {cartLines.length === 1 ? "item" : "items"} ·{" "}
        {items.reduce((s, i) => s + i.quantity, 0)} total
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          {cartLines.map((line) => (
            <div
              key={line.key}
              className="flex gap-4 md:gap-6 bg-white p-4 md:p-6 rounded-sm editorial-shadow"
            >
              <Link
                to={`/product/${line.product.id}`}
                className="w-24 md:w-32 shrink-0 aspect-[3/4] overflow-hidden bg-[#f0ede8]"
              >
                <img
                  src={line.product.images[0]}
                  alt={line.product.name}
                  className="w-full h-full object-cover"
                />
              </Link>
              <div className="flex-1 min-w-0">
                <Link
                  to={`/product/${line.product.id}`}
                  className="font-medium text-sm md:text-base hover:underline line-clamp-2 mb-1"
                >
                  {line.product.name}
                </Link>
                <p className="text-xs text-[#6b6560] mb-3">
                  {line.size}
                  {line.color !== "-" && ` · ${line.color}`}
                </p>
                <p className="font-semibold mb-4">
                  {formatPrice(line.product.price)}
                </p>
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="inline-flex items-center border border-[#e8e4df]">
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(line.key, line.quantity - 1)
                      }
                      className="w-8 h-8 text-sm hover:bg-[#f0ede8]"
                    >
                      −
                    </button>
                    <span className="w-10 text-center text-sm">
                      {line.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(line.key, line.quantity + 1)
                      }
                      className="w-8 h-8 text-sm hover:bg-[#f0ede8]"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(line.key)}
                    className="text-xs text-[#6b6560] hover:text-[#c45c4a] underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <p className="hidden md:block font-semibold shrink-0">
                {formatPrice(line.lineTotal)}
              </p>
            </div>
          ))}
          <button
            type="button"
            onClick={clearCart}
            className="text-xs text-[#6b6560] underline"
          >
            Clear bag
          </button>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white p-6 md:p-8 rounded-sm editorial-shadow sticky top-28">
            <h2 className="font-serif text-xl mb-6">Order Summary</h2>
            <dl className="space-y-3 text-sm mb-6">
              <div className="flex justify-between">
                <dt className="text-[#6b6560]">Subtotal</dt>
                <dd>{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-[#6b6560]">Shipping</dt>
                <dd>
                  {shipping === 0 ? (
                    <span className="text-[#c45c4a]">Free</span>
                  ) : (
                    formatPrice(shipping)
                  )}
                </dd>
              </div>
              {subtotal > 0 && subtotal < SHIPPING_FREE_THRESHOLD && (
                <p className="text-xs text-[#6b6560] bg-[#faf9f6] p-3">
                  Add {formatPrice(SHIPPING_FREE_THRESHOLD - subtotal)} more for
                  free shipping
                </p>
              )}
            </dl>
            <div className="flex justify-between font-semibold text-lg border-t border-[#e8e4df] pt-4 mb-6">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
            <button
              type="button"
              onClick={() => navigate("/checkout")}
              className="w-full bg-[#181512] text-white py-4 text-xs tracking-[0.2em] uppercase hover:bg-[#3d3834] transition-colors"
            >
              Checkout
            </button>
            <Link
              to="/shop"
              className="block text-center mt-4 text-xs text-[#6b6560] underline tracking-wide"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}