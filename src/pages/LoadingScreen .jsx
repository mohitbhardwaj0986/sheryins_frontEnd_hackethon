import React from "react";
import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <motion.div
      className="fixed top-0 left-0 h-screen w-screen bg-[#FFF3E7] flex items-center justify-center z-[999]"
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }} // Stay in place during loading
      exit={{ y: "-100%", opacity: 1 }} // Slide up on unmount
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <motion.h1
        className="text-3xl font-bold text-[#A1795A]"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Brewing your experience... ☕
      </motion.h1>
    </motion.div>
  );
}

export default LoadingScreen;
