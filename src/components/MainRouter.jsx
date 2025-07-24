import React, { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import PrivateRoute from "./PrivateRoute";

// Lazy-loaded pages
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Products = lazy(() => import("../pages/Products"));
const SingleProductPage = lazy(() => import("../pages/SingleProductPage"));
const Cart = lazy(() => import("../pages/Cart"));
const Login = lazy(() => import("../pages/auth/Login"));
const Signup = lazy(() => import("../pages/auth/Signup"));
const NotFound = lazy(() => import("../pages/NotFound"))

// Loading spinner
const Loading = () => (
  <div className="flex justify-center items-center h-screen bg-[#FFF3E7]">
    <div className="w-10 h-10 border-4 border-b-transparent border-[#D8A460] rounded-full animate-spin"></div>
  </div>
);

// Page animation variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

function MainRouter() {
  const location = useLocation();

  return (
    <Suspense fallback={<Loading />}>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          className="min-h-screen"
        >
          <Routes location={location} key={location.pathname}>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/single-product/:id" element={<SingleProductPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Protected Routes */}
            <Route
              path="/products"
              element={
                <PrivateRoute>
                  <Products />
                </PrivateRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </Suspense>
  );
}

export default MainRouter;
