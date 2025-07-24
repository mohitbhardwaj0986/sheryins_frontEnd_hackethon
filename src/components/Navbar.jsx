import React, { useEffect, useState, Suspense, lazy } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/logo.png";
import Button from "./Button";
import HamburgerToggle from "./HamburgerToggle";
import { logoutUser } from "../store/reducers/userReducer";

// Lazy load icons
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
const FiLogOut = lazy(() =>
  import("react-icons/fi").then((m) => ({ default: m.FiLogOut }))
);
const FiUser = lazy(() =>
  import("react-icons/fi").then((m) => ({ default: m.FiUser }))
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

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const controls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const { productCount } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    const controlNavbar = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 80) {
        controls.start("hidden");
      } else {
        controls.start("visible");
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY, controls]);

  useEffect(() => {
    controls.start("visible");
  }, []);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

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
      className="fixed top-0 left-0 w-full z-30 backdrop-blur-md"
    >
      <div className="flex items-center justify-between px-6 py-4">
        <img src={logo} alt="logo" className="h-14" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 font-medium bg-[#FFF3E7]/80 px-6 py-2 rounded-xl shadow border border-[#D8A460]/30">
          <Suspense fallback={<span className="text-sm">...</span>}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#61402E] bg-[#FFDAB9] font-semibold rounded-full py-1 px-3 flex items-center gap-1 shadow"
                    : "text-[#3B2C27] font-semibold hover:text-[#A1795A] transition-colors flex items-center gap-1"
                }
              >
                {link.icon}
                {link.label}
                {link.topIcon && (
                  <span className="mb-3 bg-[#D8A460] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow">
                    {productCount}
                  </span>
                )}
              </NavLink>
            ))}
          </Suspense>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3 items-center">
          {userInfo ? (
            <>
              <div className="flex items-center gap-2 bg-[#FFF3E7] border border-[#D8A460]/50 px-3 py-1 rounded-full shadow text-[#3B2C27] font-semibold text-sm">
                <FiUser />
                <span>{userInfo.name}</span>
              </div>
              <Button onClick={handleLogout}>
                <FiLogOut className="inline mr-1" /> Logout
              </Button>
            </>
          ) : (
            <>
              <Button onClick={() => navigate("/login")}>
                <FiLogIn className="inline mr-1" /> Login
              </Button>
              <Button onClick={() => navigate("/signup")}>
                <FiUserPlus className="inline mr-1" /> Sign Up
              </Button>
            </>
          )}
        </div>

        <HamburgerToggle isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className=" bg-[#FFF3E7]/40 backdrop-blur-xl z-30"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              key="menu"
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className=" top-0 left-0 bg-[#FFF3E7]/60 w-full h-full z-40 px-6 py-8 flex flex-col"
            >
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className="text-[#3B2C27]  rounded-full text-xl font-semibold flex items-center gap-3 px-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.icon}
                    {link.label}
                    {link.topIcon && (
                      <span className="ml-auto bg-[#D8A460] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow">
                        {productCount}
                      </span>
                    )}
                  </NavLink>
                ))}
                <div className="flex items-center justify-center inline- gap-2 bg-[#FFF3E7] border border-[#D8A460]/50 px-3 py-1 rounded-full shadow text-[#3B2C27] font-semibold text-sm">
                  <FiUser />
                  <span>{userInfo.name}</span>
                </div>
                <div className="mt-10 flex flex-col gap-4">
                  {!userInfo ? (
                    <>
                      <Button
                        onClick={() => {
                          navigate("/login");
                          setIsOpen(false);
                        }}
                      >
                        <FiLogIn className="inline mr-1" /> Login
                      </Button>
                      <Button
                        onClick={() => {
                          navigate("/signup");
                          setIsOpen(false);
                        }}
                      >
                        <FiUserPlus className="inline mr-1" /> Sign Up
                      </Button>
                    </>
                  ) : (
                    <Button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                    >
                      <FiLogOut className="inline mr-1" /> Logout
                    </Button>
                  )}
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
