import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import SingleProductPage from "./products/SingleProductPage";
import { Car } from "lucide-react";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/single-product/:id" element={<SingleProductPage />} />
      <Route path="/cart" element={<Car />} />
    </Routes>
  );
}

export default MainRouter;
