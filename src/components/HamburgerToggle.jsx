// components/HamburgerToggle.jsx
import React from "react";
import { motion } from "framer-motion";

const barProps = {
  className: "w-7 h-0.5 bg-[#3B2C27] rounded",
  transition: { type: "spring", stiffness: 260, damping: 20 },
};

function HamburgerToggle({ isOpen, toggle }) {
  return (
    <button
      onClick={toggle}
      className="flex flex-col justify-between h-6 w-8 p-1 md:hidden z-50"
      aria-label="Toggle menu"
    >
      <motion.span
        {...barProps}
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 6 : 0,
        }}
      />
      <motion.span
        {...barProps}
        animate={{
          opacity: isOpen ? 0 : 1,
        }}
      />
      <motion.span
        {...barProps}
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -6 : 0,
        }}
      />
    </button>
  );
}

export default HamburgerToggle;
