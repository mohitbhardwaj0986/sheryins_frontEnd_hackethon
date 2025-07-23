import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const CustomCursor = () => {
 const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const x = useTransform(mouseX, (value) => value - 20);
  const y = useTransform(mouseY, (value) => value - 20);

  return (
    <motion.div
      className="mousemove fixed top-0 opacity-0 z-50 sm:opacity-100 duration-200 ease-linear left-0 w-10 h-10 bg-[#92A77D]  rounded-full pointer-events-none"
      style={{ x, y }}
    />
  );
};

export default CustomCursor;
