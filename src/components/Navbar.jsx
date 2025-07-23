import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { delay, motion, useAnimation } from "framer-motion";
import logo from "../assets/logo.png";
import Button from "./Button";

const headerVariants = {
  visible: {
    y: 0,
    transition: { type: "spring", stiffness: 140, damping: 25 },
  },
  hidden: {
    y: "-100%",
    transition: { type: "tween", duration: 0.5, ease: "linear" },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.5, type: "spring", stiffness: 120, damping: 40 },
  }),
};

function Navbar() {
  const controls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  const controlNavbar = () => {
    const currentY = window.scrollY;
    if (currentY > lastScrollY && currentY > 80) {
      controls.start("hidden");
    } else {
      controls.start("visible");
    }
    setLastScrollY(currentY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY, controls]);

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <motion.header
      initial="hidden"
      animate={controls}
      variants={headerVariants}
      className="fixed  backdrop-blur-md top-0 left-0 w-full z-20  px-6 py-4"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="logo" className="h-17 object-contain" />

        {/* Navigation Links */}
        <nav className="flex gap-6 font-medium backdrop-blur-md bg-[#FFF3E7]/70 px-6 py-2 rounded-xl border border-[#D8A460]/30 shadow-md">
          {[
            { to: "/", label: "Home" },
            { to: "/products", label: "Products" },
            { to: "/about", label: "About" },
          ].map((link, i) => (
            <motion.div
              key={link.to}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={linkVariants}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#61402E] bg-[#FFDAB9] font-semibold rounded-full shadow-md py-1 px-2"
                    : "text-[#3B2C27] font-semibold hover:text-[#A1795A] transition-colors"
                }
              >
                {link.label}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            className=" hover:opacity-90"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
          <Button
            className=" hover:opacity-90"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;
