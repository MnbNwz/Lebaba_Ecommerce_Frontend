import React from "react";
import { createBrowserRouter, Route } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import CategoryPage from "../pages/category/CategoryPage";
import SearchProduct from "../pages/search/SearchProduct";
import ShopPage from "./../pages/shop/ShopPage";
import SingleProductDetail from "../pages/shop/productDetails/singleProductDetail";
import Login from "../components/Login";
import RegisterUser from "../components/RegisterUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories/:categoryName",
        element: <CategoryPage />,
      },
      {
        path: "/search",
        element: <SearchProduct />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/shop/:id",
        element: <SingleProductDetail />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <RegisterUser />,
  },
]);

export default router;
