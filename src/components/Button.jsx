import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

function AnimatedButton({ className = "", onClick, type = "button", children }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <motion.button
      ref={buttonRef}
      onClick={onClick}
      type={type}
      className={`py-2 px-5 rounded-2xl font-semibold text-[#3B2C27] bg-[#FFDAB9] shadow-md ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.button>
  );
}

export default AnimatedButton;
