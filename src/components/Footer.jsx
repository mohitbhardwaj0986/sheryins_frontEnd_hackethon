import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import { motion } from "framer-motion";

const socialIcons = [
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaTwitter,
  FaTiktok,
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#3B2C27] text-[#FFF3E7] px-6 py-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Newsletter */}
        <motion.div className="space-y-6 md:col-span-2" variants={item}>
          <h2 className="text-3xl font-bold text-[#FFDAB9]">
            Sip, Save & Stay Connected
          </h2>
          <p className="text-sm opacity-90">
            Subscribe & get 5% off your first order. Perks, promos & more in
            your inbox.
          </p>
          <div className="flex overflow-hidden rounded-xl border border-[#A1795A]">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-[#FFF3E7] text-[#3B2C27] placeholder-[#61402E] outline-none text-sm"
            />
            <button className="bg-gradient-to-r from-[#FFDAB9] to-[#E4BBA1] px-6 text-[#3B2C27] font-semibold text-sm">
              Join
            </button>
          </div>

          <div className="flex space-x-4 pt-4 text-xl text-[#FFDAB9]">
            {socialIcons.map((Icon, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                className="transition-colors duration-200 hover:text-[#FFEAD0]"
              >
                <Icon />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Links */}
        <motion.div className="space-y-4" variants={item}>
          <h4 className="text-[#92A77D] font-semibold">Shop</h4>
          <ul className="space-y-1 text-sm opacity-90">
            {["Cold Brew", "Matcha", "Accessories", "Bundles"].map((item) => (
              <li key={item} className="hover:underline cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="space-y-4" variants={item}>
          <h4 className="text-[#92A77D] font-semibold">Company</h4>
          <ul className="space-y-1 text-sm opacity-90">
            {["About", "Recipes", "Store Locator", "FAQ"].map((item) => (
              <li key={item} className="hover:underline cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="space-y-4" variants={item}>
          <h4 className="text-[#92A77D] font-semibold">Account</h4>
          <ul className="space-y-1 text-sm opacity-90">
            {["Create Account", "Sign In"].map((item) => (
              <li key={item} className="hover:underline cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
          <h4 className="text-[#92A77D] font-semibold pt-6">Support</h4>
          <ul className="space-y-1 text-sm opacity-90">
            {["Contact", "Shipping & Returns", "Reviews"].map((item) => (
              <li key={item} className="hover:underline cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        className="mt-12 border-t border-[#A1795A] pt-6 text-center text-xs text-[#FFF3E7]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="hover:underline cursor-pointer">Privacy Policy</p>
          <span>|</span>
          <p className="hover:underline cursor-pointer">Terms & Conditions</p>
          <span>|</span>
          <p>&copy; 2025 Chamberlain Coffee Inc. All Rights Reserved.</p>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
