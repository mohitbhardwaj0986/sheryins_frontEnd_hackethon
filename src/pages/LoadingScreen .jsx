import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { FiCoffee } from "react-icons/fi";

const steamVariants = {
  initial: { y: "100%", opacity: 0, scale: 0.5 },
  animate: {
    y: "-250%",
    opacity: [0, 0.5, 0],
    scale: 1,
  },
};

const generateSteamBubbles = () =>
  Array.from({ length: 20 }, () => ({
    left: Math.random() * 100,
    delay: Math.random() * 3,
    bottom: Math.random() * 10,
    duration: 2.5 + Math.random() * 2,
  }));

const LoadingScreen = () => {
  const bubbles = useMemo(generateSteamBubbles, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-screen h-screen z-[999] flex items-center justify-center bg-gradient-to-br from-[#3B2C27] via-[#6E3A1C] to-[#FFF3E7] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      {/* Aurora Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[180vw] h-[180vh] bg-gradient-radial from-[#D8A460]/20 via-[#A1795A]/10 to-transparent rounded-full blur-3xl"
            style={{ top: `${-80 + i * 50}px`, left: `${50 - i * 15}%` }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Steam Bubbles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {bubbles.map((bubble, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 bg-white/10 rounded-full blur-2xl"
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

      {/* Coffee Icon with Ring Explosions */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="relative p-6 bg-white rounded-full shadow-lg">
          <FiCoffee size={60} className="text-[#6E3A1C] z-10 relative" />

          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border border-[#A1795A]/30 rounded-full blur-md z-[-1]"
              animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.1] }}
              transition={{
                duration: 2 + i,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}

          {/* Glow shimmer */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full blur-md"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </div>

        {/* Animated Typing Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl font-bold tracking-wide bg-gradient-to-r from-[#FFF3E7] via-[#D8A460] to-[#FFF3E7] text-transparent bg-clip-text whitespace-nowrap overflow-hidden border-r-2 border-[#FFF3E7] pr-2 animate-typing"
        >
          Brewing Your Experience...
        </motion.h1>

        {/* Subtext with shimmer */}
        <motion.p
          className="text-base sm:text-lg text-[#FFF3E7]/90 max-w-md relative"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <span className="relative inline-block">
            Sit back and sip — we’re preparing something delicious for you ☕
            <motion.span
              className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent blur-sm"
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
};

export default LoadingScreen;
