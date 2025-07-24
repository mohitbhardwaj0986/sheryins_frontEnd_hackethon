import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { FiCoffee } from "react-icons/fi";

const steamVariants = {
  initial: { y: "100%", opacity: 0, scale: 0.5 },
  animate: {
    y: "-200%",
    opacity: [0, 0.4, 0],
    scale: 1,
  },
};

const generateSteamBubbles = () =>
  Array.from({ length: 12 }, () => ({
    left: Math.random() * 100,
    delay: Math.random() * 2,
    bottom: Math.random() * 10,
    duration: 3 + Math.random() * 3,
  }));

function LoadingScreen() {
  const bubbles = useMemo(generateSteamBubbles, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-screen h-screen z-[999] flex items-center justify-center bg-gradient-to-b from-[#3B2C27] via-[#6E3A1C] to-[#FFF3E7]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [30, 0] }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.4, ease: "easeInOut" }}
    >
      {/* Aurora Glow Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-20 left-1/2 w-[150vw] h-[150vh] bg-gradient-radial from-[#D8A460]/20 via-[#A1795A]/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2" />
      </div>

      {/* Steam Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {bubbles.map((bubble, i) => (
          <motion.div
            key={i}
            className="absolute w-10 h-10 bg-white/10 rounded-full blur-2xl"
            style={{ left: `${bubble.left}%`, bottom: `${bubble.bottom}%` }}
            variants={steamVariants}
            initial="initial"
            animate="animate"
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: bubble.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="flex flex-col items-center justify-center gap-6 text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        {/* Icon with layered rings */}
        <motion.div
          className="relative p-6 bg-white rounded-full shadow-xl hover:ring-4 ring-[#A1795A]/40 transition"
          initial={{ scale: 0.8 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <FiCoffee size={60} className="text-[#6E3A1C] z-10 relative" />

          {/* Glow Rings */}
          <motion.div
            className="absolute inset-0 bg-[#6E3A1C] opacity-20 rounded-full blur-3xl z-[-1]"
            animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 border-2 border-[#92A77D]/30 rounded-full blur-md z-[-1]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          {/* Shimmer over icon */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/30 to-white/10 rounded-full z-[2] blur-md"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </motion.div>

        {/* Gradient Glowing Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider bg-gradient-to-r from-[#FFF3E7] via-[#D8A460] to-[#FFF3E7] text-transparent bg-clip-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Brewing Your Experience...
        </motion.h1>

        {/* Slogan with shimmer */}
        <motion.p
          className="text-base sm:text-lg text-[#FFF3E7]/90 max-w-md relative"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <span className="relative inline-block">
            Sit back and sip — we’re preparing something delicious for you ☕
            <motion.span
              className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm"
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </span>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default LoadingScreen;
