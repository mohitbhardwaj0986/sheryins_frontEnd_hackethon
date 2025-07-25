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
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
        <motion.div className="space-y-6 md:col-span-2" variants={fadeUp}>
          <motion.h2
            className="text-3xl font-bold text-[#FFDAB9]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Sip, Save & Stay Connected
          </motion.h2>

          <motion.p
            className="text-sm opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Subscribe & get 5% off your first order. Perks, promos & more in your inbox.
          </motion.p>

          <motion.div
            className="flex overflow-hidden rounded-xl border border-[#A1795A]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-[#FFF3E7] text-[#3B2C27] placeholder-[#61402E] outline-none text-sm"
            />
            <button className="bg-gradient-to-r from-[#FFDAB9] to-[#E4BBA1] px-6 text-[#3B2C27] font-semibold text-sm">
              Join
            </button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex space-x-4 pt-4 text-xl text-[#FFDAB9]"
            initial="hidden"
            whileInView="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.6,
                },
              },
            }}
          >
            {socialIcons.map((Icon, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ scale: 1.3, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
                className="transition-colors duration-200 hover:text-[#FFEAD0]"
              >
                <Icon />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Footer Links */}
        {[
          {
            title: "Shop",
            links: ["Cold Brew", "Matcha", "Accessories", "Bundles"],
          },
          {
            title: "Company",
            links: ["About", "Recipes", "Store Locator", "FAQ"],
          },
          {
            title: "Account",
            links: ["Create Account", "Sign In"],
            extra: {
              title: "Support",
              links: ["Contact", "Shipping & Returns", "Reviews"],
            },
          },
        ].map((section, index) => (
          <motion.div className="space-y-4" key={section.title} variants={fadeUp}>
            <h4 className="text-[#92A77D] font-semibold">{section.title}</h4>
            <ul className="space-y-1 text-sm opacity-90">
              {section.links.map((item) => (
                <li key={item} className="hover:underline cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
            {section.extra && (
              <>
                <h4 className="text-[#92A77D] font-semibold pt-6">{section.extra.title}</h4>
                <ul className="space-y-1 text-sm opacity-90">
                  {section.extra.links.map((item) => (
                    <li key={item} className="hover:underline cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <motion.div
        className="mt-12 border-t border-[#A1795A] pt-6 text-center text-xs text-[#FFF3E7]"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="hover:underline cursor-pointer">Privacy Policy</p>
          <span>|</span>
          <p className="hover:underline cursor-pointer">Terms & Conditions</p>
          <span>|</span>
          <p>&copy; 2025 Chamberlain Coffee Inc. All Rights Reserved.</p>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
