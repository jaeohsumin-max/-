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
import NoticePage from "../page/NoticePage";
import NoticeDetailPage from "../page/NoticeDetailPage";
import QnaPage from "../page/QnaPage";
import QnaWritePage from "../page/QnaWritePage";
import QnaDetailPage from "../page/QnaDetailPage";
import ReviewPage from "../page/ReviewPage";
import ReviewWritePage from "../page/ReviewWritePage";
import ReviewDetailPage from "../page/ReviewDetailPage";

const basename =
  import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;

const router = createBrowserRouter(
  [
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
        { path: "/notice", element: <NoticePage /> },
        { path: "/notice/:id", element: <NoticeDetailPage /> },
        { path: "/qa", element: <QnaPage /> },
        { path: "/qa/write", element: <QnaWritePage /> },
        { path: "/qa/:id", element: <QnaDetailPage /> },
        { path: "/reviews", element: <ReviewPage /> },
        { path: "/reviews/write", element: <ReviewWritePage /> },
        { path: "/reviews/:id", element: <ReviewDetailPage /> },
      ],
    },
  ],
  { basename }
);

export default router;
