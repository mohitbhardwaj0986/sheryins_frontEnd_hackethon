import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useAnimation,
} from "framer-motion";

const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const smoothX = useSpring(mouseX, { stiffness: 400, damping: 28 });
  const smoothY = useSpring(mouseY, { stiffness: 400, damping: 28 });

  const x = useTransform(smoothX, (v) => v - 20);
  const y = useTransform(smoothY, (v) => v - 20);

  const innerX = useTransform(smoothX, (v) => v - 8);
  const innerY = useTransform(smoothY, (v) => v - 8);

  // Ripple animation controller
  const rippleControls = useAnimation();

  // Click ripple effect
  useEffect(() => {
    const handleClick = () => {
      setIsClicked(true);
      rippleControls.start({
        scale: [1, 3],
        opacity: [0.4, 0],
        transition: { duration: 0.5, ease: "linear" },
      });
      setTimeout(() => setIsClicked(false), 200);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [rippleControls]);

  // Hover target detection
  useEffect(() => {
    const hoverTargets = ["a", "button", "img", "input", "[data-cursor]"];

    const onMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onMouseOver = (e) => {
      const target = hoverTargets.some((sel) => e.target.closest(sel));
      setIsHovering(target);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 z-[9999] hidden sm:block">
      {/* Ripple Effect */}
      <motion.div
        className="absolute w-10 h-10 rounded-full bg-[#92A77D]/30"
        style={{ x, y }}
        animate={rippleControls}
      />

      {/* Outer Glow Ring */}
      <motion.div
        className={`w-10 h-10 rounded-full absolute 
        ${
          isHovering
            ? "bg-[#6E3A1C]/50 border-[#6E3A1C]"
            : "bg-[#92A77D]/20 border-[#92A77D]"
        } 
        border backdrop-blur-md shadow-[0_0_25px_#92A77D40]
        transition-all duration-300 linear`}
        style={{
          x,
          y,
          scale: isHovering ? 1.6 : 1,
        }}
      />

      {/* Inner Core Orb */}
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-gradient-to-br from-[#FFF3E7] to-[#6E3A1C] shadow-md"
        style={{
          x: innerX,
          y: innerY,
          scale: isClicked ? 0.6 : 1,
          transition: "all 0.2s linear",
        }}
      />
    </div>
  );
};

export default CustomCursor;
