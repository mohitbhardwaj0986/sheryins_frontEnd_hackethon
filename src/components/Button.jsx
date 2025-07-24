import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import gsap from "gsap";

function AnimatedButton({ className = "", onClick, type = "button", children }) {
  const buttonRef = useRef(null);
  const controls = useAnimation();
  const [hasRolled, setHasRolled] = useState(false);

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

  const handleHover = async () => {
    if (!hasRolled) {
      setHasRolled(true);
      await controls.start({
        y: "-100%",
        transition: { duration: 0.4, ease: "easeInOut" },
      });
      await controls.start({
        y: "0%",
        transition: { duration: 0.4, ease: "easeInOut" },
      });
      setHasRolled(false);
    }
  };

  return (
    <motion.button
      ref={buttonRef}
      onClick={onClick}
      type={type}
      onMouseEnter={handleHover}
      className={`py-2 px-3 rounded-xl font-semibold text-[#3B2C27] bg-[#FFDAB9] shadow-md overflow-hidden relative flex items-center justify-center ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative h-[24px] overflow-hidden leading-none">
        <motion.div animate={controls} className="flex flex-col">
          <span className="h-[24px] flex items-center justify-center">{children}</span>
          <span className="h-[24px] flex items-center justify-center">{children}</span>
        </motion.div>
      </div>
    </motion.button>
  );
}

export default AnimatedButton;
