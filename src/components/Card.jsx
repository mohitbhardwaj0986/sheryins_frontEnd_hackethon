import React, { useEffect, useRef } from "react";
import { FiArrowUpRight, FiInfo, FiTag } from "react-icons/fi";
import { MdLocalOffer } from "react-icons/md";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

import icon from "../assets/about/icon.png";
import Button from "../components/Button";
import { addToCart } from "../store/reducers/cartReducer";

function Card({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  if (!product) return null;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  return (
    <motion.div
      ref={cardRef}
      onClick={() => navigate(`/single-product/${product.id}`)}
      className="w-full rounded-3xl shadow-xl bg-[#D8A460] overflow-hidden font-sans border border-[#A1795A] cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />

        {/* Tag */}
        {product.tag && (
          <div className="absolute top-3 left-3 bg-[#FFF3E7]/70 text-[#512B13] text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm shadow-md flex items-center gap-1">
            <MdLocalOffer /> {product.tag}
          </div>
        )}

        {/* Logo */}
        <div className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
          <img src={icon} alt="Logo" className="w-5 h-5 object-contain" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-2">
        <h2 className="text-lg font-bold text-[#3B2C27]">
          {product.name.length > 25 ? product.name.slice(0, 22) + "..." : product.name}
        </h2>

        {/* Type */}
        <p className="text-sm font-semibold text-[#4E5D3C] flex items-center gap-2">
          <FiTag className="text-[#61402E]" /> {product.type}
        </p>

        {/* Description */}
        <p className="text-sm text-[#3B2C27]/80 flex gap-2 items-start">
          <FiInfo className="text-[#61402E] mt-[2px]" />
          {product.description.length > 60
            ? product.description.slice(0, 60) + "..."
            : product.description}
        </p>

        {/* Price & Button */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-sm font-semibold bg-[#FFDAB9] px-3 py-1 rounded-full text-[#61402E]">
            {product.price}
          </span>
          <motion.div whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleAddToCart}
              className="flex items-center gap-1  hover:bg-[#3B2C27] text-xs  text-[#3B2C27] hover:text-[#FFF3E7] shadow-md hover:shadow-lg"
            >
              Add to cart <FiArrowUpRight size={16} />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
