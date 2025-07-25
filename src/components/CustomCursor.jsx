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

  const springConfig = { stiffness: 80, damping: 18, mass: 0.3 };

  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const x = useTransform(smoothX, (v) => v - 20);
  const y = useTransform(smoothY, (v) => v - 20);

  const innerX = useTransform(smoothX, (v) => v - 6);
  const innerY = useTransform(smoothY, (v) => v - 6);

  const rippleControls = useAnimation();
  const tailControls = useAnimation();

  useEffect(() => {
    const handleClick = () => {
      setIsClicked(true);
      rippleControls.start({
        scale: [1, 4],
        opacity: [0.5, 0],
        transition: { duration: 0.6, ease: "easeOut" },
      });
      setTimeout(() => setIsClicked(false), 200);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [rippleControls]);

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
      {/* Click Ripple Explosion */}
      <motion.div
        className="absolute w-10 h-10 rounded-full bg-[#FFF3E7]/20 backdrop-blur-sm"
        style={{ x, y }}
        animate={rippleControls}
      />

      {/* Trailing Tail */}
      <motion.div
        className="absolute w-10 h-10 rounded-full bg-[#92A77D]/10 blur-xl opacity-30"
        style={{ x, y }}
      />

      {/* Outer Glow Ring */}
      <motion.div
        className={`w-10 h-10 rounded-full absolute border shadow-[0_0_35px_#92A77D40] ${
          isHovering
            ? "bg-[#6E3A1C]/50 border-[#6E3A1C]"
            : "bg-[#92A77D]/10 border-[#92A77D]/40"
        }`}
        style={{
          x,
          y,
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 0.8 : 0.6,
          transition: "all 0.2s ease-in-out",
        }}
      />

      {/* Pulsing Inner Core Orb */}
      <motion.div
        className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-[#FFF3E7] to-[#6E3A1C] shadow-md"
        style={{
          x: innerX,
          y: innerY,
          scale: isClicked ? 0.6 : isHovering ? 1.2 : 1,
          transition: "all 0.2s ease-in-out",
        }}
        animate={{
          opacity: [1, 0.8, 1],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default CustomCursor;
