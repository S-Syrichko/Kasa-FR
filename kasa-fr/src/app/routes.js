import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home.js";
import About from "../pages/about/About.js";
import Product from "../pages/product/Product.js";
import NotFound from "../pages/not-found_404/NotFound.js";

const AppRoutes = () => {

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} errorElement={<NotFound />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
