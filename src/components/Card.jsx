import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import icon from "../assets/about/icon.png";
import Button from "../components/Button";

function Card({ product }) {
  if (!product) return null;

  return (
    <motion.div
      className="w-[100%] rounded-3xl  shadow-xl bg-[#D8A460] overflow-hidden font-sans border border-[#A1795A]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />

        {/* Tag */}
        {product.tag && (
          <div className="absolute top-3 left-3 bg-[#FFF3E7]/60 text-white text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm">
            {product.tag}
          </div>
        )}

        {/* Logo */}
        <div className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
          <img src={icon} alt="Logo" className="w-5 h-5 object-contain" />
        </div>

        {/* Pagination Dots */}
       
      </div>

      {/* Text Section */}
      <div className="p-5">
        <h2 className="text-lg font-bold text-[#3B2C27]">{product.name.slice(0,23)}...</h2>
        <p className="text-md font-semibold  text-[#92A77D]">{product.type}</p>
        <p className="text-sm text-[#3B2C27]/80 mb-4">
          {product.description.length > 50
            ? product.description.slice(0, 50) + "..."
            : product.description}
        </p>

        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold bg-[#FFDAB9] px-3 py-1 rounded-full text-[#61402E]">
            {product.price}
          </span>
          <Button className="flex items-center gap-1 bg-[#61402E] hover:text-[#FFF3E7] text-xs font-semibold hover:bg-[#3B2C27]">
            Add to cart <FiArrowUpRight size={16} />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
