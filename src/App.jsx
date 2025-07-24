import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./pages/LoadingScreen ";
import Navbar from "./components/Navbar";
import MainRouter from "./components/MainRouter";
import Lenis from "@studio-freight/lenis";
import Footer from "./components/Footer";
import { Toaster } from "sonner";
import ScrollToTop from "./components/ScrollToTop";
import CustomCursor from "./components/CustomCursor";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>
      {!isLoading && (
        <>
          <ScrollToTop />
          <Navbar />
          <MainRouter />
          <Footer />
          <CustomCursor/>
          <Toaster richColors position="bottom-left" />
        </>
      )}
    </>
  );
}
export default App;
