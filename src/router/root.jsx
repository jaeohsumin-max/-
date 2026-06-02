import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../page/HomePage";
import ShopPage from "../page/ShopPage";
import ProductDetailPage from "../page/ProductDetailPage";
import CartPage from "../page/CartPage";
import CheckoutPage from "../page/CheckoutPage";
import OrderCompletePage from "../page/OrderCompletePage";
import LoginPage from "../page/LoginPage";
import JoinPage from "../page/JoinPage";
import MyPage from "../page/MyPage";
import QnaPage from "../page/QnaPage";
import ReviewPage from "../page/ReviewPage";

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
      { path: "/login", element: <LoginPage /> },
      { path: "/join", element: <JoinPage /> },
      { path: "/mypage", element: <MyPage /> },
      { path: "/qa", element: <QnaPage /> },
      { path: "/reviews", element: <ReviewPage /> },
    ],
  },
]);

export default router;
