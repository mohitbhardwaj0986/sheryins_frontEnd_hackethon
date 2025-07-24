import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import fallbackimg from "../assets/sliderassets/978440fe09d65d3d1c461e614bd150d5.jpg";
import { loadProducts, setActiveProduct } from "../store/reducers/dataReducer";
import { addToCart } from "../store/reducers/cartReducer"; // 🛒 Import this

import { FiArrowLeft, FiTag, FiStar, FiCoffee } from "react-icons/fi";
import Button from "../components/Button";
import { toast } from "sonner";

gsap.registerPlugin(ScrollTrigger);

function SingleProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const imageRef = useRef(null);

  const activeProduct = useSelector(
    (state) => state.products.activeProduct,
    shallowEqual
  );

  // Load all products once
  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  // Set the active product when the id changes
  useEffect(() => {
    if (id) dispatch(setActiveProduct(id));
  }, [id, dispatch]);

  // Animate image when activeProduct loads
  useEffect(() => {
    if (imageRef.current && activeProduct?.image) {
      gsap.fromTo(
        imageRef.current,
        { y: 10 },
        {
          y: -30,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        }
      );

      ScrollTrigger.create({
        trigger: imageRef.current,
        start: "top 85%",
        onEnter: () =>
          gsap.fromTo(
            imageRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1 }
          ),
      });
    }
  }, [activeProduct]);

  // Fallback loader
  if (!activeProduct) {
    return (
      <div className="min-h-screen flex justify-center items-center text-lg text-[#3B200F]">
        Loading product...
      </div>
    );
  }

  const { name, price, image, description, rating, type, offer } =
    activeProduct;

  const handleAddToCart = () => {
    dispatch(addToCart({ ...activeProduct, quantity: 1 }));
       toast.success("Add to Cart", {
      style:{
        background:"#61402E",
        color:"#FFF3E7",
        border:"1px solid #FFF3E7"
      }
    })
  };

  return (
    <div className="min-h-screen bg-[#FFF3E7] px-4 py-24 md:px-16 text-[#3B200F]">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm text-[#3B200F] hover:underline mb-6"
      >
        <FiArrowLeft className="text-lg" />
        Go Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        {/* Product Image */}
        <div className="flex justify-center items-center relative">
          <div
            ref={imageRef}
            className="p-4 bg-white rounded-3xl shadow-xl transition-transform duration-500 hover:scale-105"
          >
            <img
              src={image || fallbackimg}
              alt={name}
              className="rounded-xl max-w-[350px] w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Tag Label */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute top-2 left-2 bg-[#9A6A46] text-white text-xs px-3 py-1 rounded-full shadow-md"
          >
            Best Seller
          </motion.div>
        </div>

        {/* Product Details */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{name}</h1>

          {/* Price */}
          <div className="flex items-center text-xl font-semibold text-[#6E3A1C] mb-2 gap-2">
            <FiTag />
            <span>{price}</span>
          </div>

          {/* Type */}
          {type && (
            <div className="flex items-center text-sm text-[#9A6A46] mb-2 gap-2">
              <FiCoffee />
              <span>{type}</span>
            </div>
          )}

          {/* Description */}
          <p className="text-base mb-4 leading-relaxed">{description}</p>

          {/* Offer */}
          {offer && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-yellow-100 border border-yellow-300 text-yellow-700 px-4 py-2 rounded-lg font-medium mb-4 shadow"
            >
              🎁 {offer}
            </motion.div>
          )}

          {/* Rating */}
          {rating && (
            <div className="flex items-center text-sm text-gray-700 gap-2">
              <FiStar className="text-yellow-500" />
              <span>Rating: {rating}/5</span>
            </div>
          )}

          {/* Add to Cart */}
          <motion.div className="mt-6  flex gap-5">
            <Button
              onClick={handleAddToCart}
              className="w-full bg-[#3B200F] hover:text-[#FFF3E7] hover:bg-[#512B13] rounded-full shadow-lg"
            >
              Add to Cart
            </Button>
            <Button
              onClick={() => navigate("/cart")}
              className="w-full bg-[#D8A460]  hover:text-[#FFF3E7] hover:bg-[#512B13] rounded-full shadow-lg"
            >
              Show Cart
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default SingleProductPage;
