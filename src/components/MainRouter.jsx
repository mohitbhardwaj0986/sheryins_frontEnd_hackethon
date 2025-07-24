import React, { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Lazy-loaded pages
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Products = lazy(() => import("../pages/Products"));
const SingleProductPage = lazy(() => import("../pages/SingleProductPage"));
const Cart = lazy(() => import("../pages/Cart"));

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

// Page wrapper with animation
const Page = ({ children }) => (
  <motion.div
    key={Math.random()} // helps reset motion for dynamic routes
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageVariants}
    className="min-h-screen"
  >
    {children}
  </motion.div>
);

function MainRouter() {
  const location = useLocation();

  return (
    <Suspense fallback={<Loading />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/about" element={<Page><About /></Page>} />
          <Route path="/products" element={<Page><Products /></Page>} />
          <Route path="/single-product/:id" element={<Page><SingleProductPage /></Page>} />
          <Route path="/cart" element={<Page><Cart /></Page>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default MainRouter;
