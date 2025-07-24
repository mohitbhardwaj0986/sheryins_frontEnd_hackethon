import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PiCoffeeDuotone, PiCoffeeFill } from "react-icons/pi";
import { GiCoffeeBeans } from "react-icons/gi";

function NotFound() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="relative h-screen w-full bg-gradient-to-br from-[#FFF3E7] via-[#f5e3d3] to-[#fff] flex flex-col items-center justify-center overflow-hidden px-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Floating Coffee Beans */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-[#D8A460]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${20 + Math.random() * 30}px`,
            opacity: 0.2 + Math.random() * 0.3,
          }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <GiCoffeeBeans />
        </motion.div>
      ))}

      {/* 404 Icon */}
      <motion.div
        className="text-7xl text-[#6E3A1C] flex items-center gap-3 font-extrabold mb-2 z-10"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        404 <PiCoffeeFill className="text-[#D8A460]" />
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-[#3B2C27] mb-3 z-10"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Uh-oh! Lost in the Brew.
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="text-[#6E3A1C] max-w-xl mb-6 z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        The page you’re looking for has gone cold. Maybe it was a decaf… Let’s take you back to the roast of it all!
      </motion.p>

      {/* Button */}
      <motion.button
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="z-10 px-6 py-3 bg-[#D8A460] text-white rounded-full font-medium shadow-xl hover:bg-[#b9813e] transition"
      >
        Back to Home
      </motion.button>

      {/* Rising steam animation */}
      <motion.div
        className="absolute bottom-15 text-8xl opacity-30"
        animate={{ y: [-10, -20, -10], opacity: [0.1, 0.5, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        ~ ☕ ~
      </motion.div>

      {/* Footer Glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFF3E7] to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      />
    </motion.div>
  );
}

export default NotFound;
