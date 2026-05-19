import { createContext, useContext, useMemo, useReducer } from "react";

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const key = `${action.payload.productId}-${action.payload.size}-${action.payload.color}`;
      const existing = state.items.find((i) => i.key === key);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.key === key
              ? { ...i, quantity: Math.min(i.quantity + action.payload.quantity, 99) }
              : i,
          ),
        };
      }
      return {
        items: [
          ...state.items,
          {
            key,
            productId: action.payload.productId,
            size: action.payload.size,
            color: action.payload.color,
            quantity: action.payload.quantity,
          },
        ],
      };
    }
    case "UPDATE_QTY": {
      const qty = Math.max(1, Math.min(99, action.payload.quantity));
      return {
        items: state.items.map((i) =>
          i.key === action.payload.key ? { ...i, quantity: qty } : i,
        ),
      };
    }
    case "REMOVE":
      return {
        items: state.items.filter((i) => i.key !== action.payload.key),
      };
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const value = useMemo(
    () => ({
      items: state.items,
      addItem: (productId, size, color, quantity = 1) =>
        dispatch({ type: "ADD", payload: { productId, size, color, quantity } }),
      updateQuantity: (key, quantity) =>
        dispatch({ type: "UPDATE_QTY", payload: { key, quantity } }),
      removeItem: (key) => dispatch({ type: "REMOVE", payload: { key } }),
      clearCart: () => dispatch({ type: "CLEAR" }),
      itemCount: state.items.reduce((sum, i) => sum + i.quantity, 0),
    }),
    [state.items],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
