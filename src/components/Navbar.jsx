import React, { useEffect, useState, Suspense, lazy } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";
import Button from "./Button";

// Lazy-load icons
const FiHome = lazy(() =>
  import("react-icons/fi").then((m) => ({ default: m.FiHome }))
);
const FiCoffee = lazy(() =>
  import("react-icons/fi").then((m) => ({ default: m.FiCoffee }))
);
const FiInfo = lazy(() =>
  import("react-icons/fi").then((m) => ({ default: m.FiInfo }))
);
const FiShoppingCart = lazy(() =>
  import("react-icons/fi").then((m) => ({ default: m.FiShoppingCart }))
);
const FiLogIn = lazy(() =>
  import("react-icons/fi").then((m) => ({ default: m.FiLogIn }))
);
const FiUserPlus = lazy(() =>
  import("react-icons/fi").then((m) => ({ default: m.FiUserPlus }))
);

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
  const { productCount } = useSelector((state) => state.cart);

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

  const navLinks = [
    { to: "/", label: "Home", icon: <FiHome /> },
    { to: "/products", label: "Products", icon: <FiCoffee /> },
    { to: "/about", label: "About", icon: <FiInfo /> },
    { to: "/cart", label: "Cart", icon: <FiShoppingCart />, topIcon: true },
  ];

  return (
    <motion.header
      initial="hidden"
      animate={controls}
      variants={headerVariants}
      className="fixed backdrop-blur-md top-0 left-0 w-full z-20 px-6 py-4"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="logo" className="h-17 object-contain" />

        {/* Navigation Links */}
        <nav className="flex gap-6 font-medium backdrop-blur-md bg-[#FFF3E7]/70 px-6 py-2 rounded-xl border border-[#D8A460]/30 shadow-md">
          <Suspense fallback={<span className="text-sm">...</span>}>
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={linkVariants}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-1 relative"
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#61402E] bg-[#FFDAB9] font-semibold rounded-full shadow-md py-1 px-2 flex items-center gap-1"
                      : "text-[#3B2C27] font-semibold hover:text-[#A1795A] transition-colors flex items-center gap-1"
                  }
                >
                  {link.icon}
                  {link.label}
                </NavLink>
                {link.topIcon && (
                  <span className="absolute -right-4 top-0 w-5 h-5 bg-[#D8A460] text-white text-xs font-bold flex items-center justify-center rounded-full shadow-md">
                    {productCount}
                  </span>
                )}
              </motion.div>
            ))}
          </Suspense>
        </nav>

        {/* Action Buttons */}
        <Suspense fallback={<></>}>
          <div className="flex gap-2">
            <Button onClick={() => navigate("/login")}>
              <FiLogIn className="inline mr-1" /> Login
            </Button>
            <Button onClick={() => navigate("/signup")}>
              <FiUserPlus className="inline mr-1" /> Sign Up
            </Button>
          </div>
        </Suspense>
      </div>
    </motion.header>
  );
}

export default Navbar;
