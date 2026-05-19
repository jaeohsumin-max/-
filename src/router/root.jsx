import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../page/HomePage";
import ShopPage from "../page/ShopPage";
import ProductDetailPage from "../page/ProductDetailPage";
import CartPage from "../page/CartPage";
import CheckoutPage from "../page/CheckoutPage";
import OrderCompletePage from "../page/OrderCompletePage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/shop", element: <ShopPage /> },
      { path: "/shop/:category", element: <ShopPage /> },
      { path: "/product/:id", element: <ProductDetailPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/checkout", element: <CheckoutPage /> },
      { path: "/order-complete", element: <OrderCompletePage /> },
    ],
  },
]);

export default router;
