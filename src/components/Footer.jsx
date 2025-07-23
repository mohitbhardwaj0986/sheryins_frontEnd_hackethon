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

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#3B2C27] text-[#FFF3E7] px-6 py-12 "
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Newsletter + Social */}
        <motion.div className="space-y-4" variants={item}>
          <h2 className="text-2xl font-bold text-[#FFDAB9]">Get 5% off</h2>
          <p className="text-sm">
            Never miss any sips, slurps or spills when you join our email list
          </p>
          <div className="flex border border-[#A1795A] overflow-hidden rounded">
            <input
              type="email"
              placeholder="email address"
              className="flex-1 px-4 py-2 outline-none text-[#3B2C27] bg-[#FFF3E7] placeholder-[#61402E]"
            />
            <button className="bg-[#FFDAB9] text-[#3B2C27] font-semibold px-4">
              &gt;
            </button>
          </div>
          <div className="flex space-x-4 pt-4 text-xl text-[#FFDAB9]">
            {[FaFacebookF, FaInstagram, FaYoutube, FaPinterestP, FaTwitter, FaTiktok].map(
              (Icon, idx) => (
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  key={idx}
                >
                  <Icon />
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* Footer Columns */}
        <motion.div className="space-y-4" variants={item}>
          <h4 className="font-semibold text-[#92A77D]">Shop</h4>
          <ul className="space-y-1 text-sm">
            <li>Cold Brew</li>
            <li>Matcha</li>
            <li>Accessories</li>
            <li>Bundles</li>
          </ul>
        </motion.div>

        <motion.div className="space-y-4" variants={item}>
          <h4 className="font-semibold text-[#92A77D]">Chamberlain Coffee</h4>
          <ul className="space-y-1 text-sm">
            <li>About</li>
            <li>FAQ</li>
            <li>Store locator</li>
            <li>Recipes</li>
          </ul>
        </motion.div>

        <motion.div className="space-y-4" variants={item}>
          <h4 className="font-semibold text-[#92A77D]">User Info</h4>
          <ul className="space-y-1 text-sm">
            <li>Create an account</li>
            <li>Sign in</li>
          </ul>

          <h4 className="font-semibold text-[#92A77D] pt-4">Services</h4>
          <ul className="space-y-1 text-sm">
            <li>Contact</li>
            <li>Shipping & returns</li>
            <li>Reviews</li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Line */}
      <motion.div
        className="border-t border-[#A1795A] mt-10 pt-6 text-center text-xs text-[#FFF3E7]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <p>Privacy Policy</p>
          <span>|</span>
          <p>Terms & Conditions</p>
          <span>|</span>
          <p>&copy; 2025 Chamberlain Coffee Inc. All Rights Reserved.</p>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
