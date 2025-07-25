import React from "react";
import CircularGallery from "./CircularGallery";
import {motion} from "framer-motion"
function AboutSectionTree() {
  return (
    <div
      className="bg-[#FFF3E7]  min-h-screen text-[#3B2C27] py-10 "
      style={{ height: "100vh", position: "relative" }}
    >
    <div className="relative w-full px-4 md:py-20 bg-[#FFF3E7] text-[#3B2C27] overflow-hidden">
   
      <motion.div
        className="absolute top-[30%] left-1/2 -translate-x-1/2 -z-10 w-[300px] h-[300px] bg-[#eabf9f]/30 blur-[100px] rounded-full"
        animate={{ scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center leading-tight"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{
          scale: 1.02,
          textShadow: "0px 4px 20px rgba(0,0,0,0.25)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        viewport={{ once: true }}
      >
        High quality sips are our thing.
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl md:text-2xl text-center mt-6 max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Browse our best-selling coffee, tea and more.
      </motion.p>
    </div>
      <CircularGallery
        bend={5}
        textColor=""
        borderRadius={0.05}
        scrollEase={0.02}
      />
    </div>
  );
}

export default AboutSectionTree;
