import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import fallbackimg from "../assets/sliderassets/978440fe09d65d3d1c461e614bd150d5.jpg";
import { loadProducts, setActiveProduct } from "../store/reducers/dataReducer";
import { addToCart } from "../store/reducers/cartReducer";
import { FiArrowLeft, FiTag, FiStar, FiCoffee } from "react-icons/fi";
import Button from "../components/Button";
import { toast } from "sonner";

gsap.registerPlugin(ScrollTrigger);

function SingleProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const imageRef = useRef(null);
  const detailsRef = useRef(null);

  const activeProduct = useSelector(
    (state) => state.products.activeProduct,
    shallowEqual
  );

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  useEffect(() => {
    if (id) dispatch(setActiveProduct(id));
  }, [id, dispatch]);

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
        start: "top 80%",
        onEnter: () =>
          gsap.fromTo(
            imageRef.current,
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }
          ),
      });
    }

    if (detailsRef.current) {
      ScrollTrigger.create({
        trigger: detailsRef.current,
        start: "top 90%",
        onEnter: () =>
          gsap.fromTo(
            detailsRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
          ),
      });
    }
  }, [activeProduct]);

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
    toast.success("Added to Cart", {
      style: {
        background: "#61402E",
        color: "#FFF3E7",
        border: "1px solid #FFF3E7",
      },
    });
  };

  return (
    <div className="relative overflow-hidden bg-[#FFF3E7] text-[#3B200F] px-4 py-24 md:px-16">
      {/* Gradient / steam background effect */}
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-br from-[#FFF3E7] via-[#FFF0DC] to-[#FFE7C8] animate-pulse opacity-10"></div>

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm hover:underline mb-6 z-10 relative"
      >
        <FiArrowLeft className="text-lg" />
        Go Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 z-10 relative">
        {/* Product Image */}
        <div className="flex justify-center items-center relative">
          <div
            ref={imageRef}
            className="p-4 bg-white rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500"
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
          ref={detailsRef}
          className="flex flex-col justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{name}</h1>

          <div className="flex items-center text-xl font-semibold text-[#6E3A1C] mb-2 gap-2">
            <FiTag />
            <span>{price}</span>
          </div>

          {type && (
            <div className="flex items-center text-sm text-[#9A6A46] mb-2 gap-2">
              <FiCoffee />
              <span>{type}</span>
            </div>
          )}

          <p className="text-base mb-4 leading-relaxed">{description}</p>

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

          {rating && (
            <div className="flex items-center text-sm text-gray-700 gap-2">
              <FiStar className="text-yellow-500" />
              <span>Rating: {rating}/5</span>
            </div>
          )}

          <motion.div className="mt-6 flex gap-5">
            <Button
              onClick={handleAddToCart}
              className="w-full bg-[#3B200F] hover:text-[#FFF3E7] hover:bg-[#512B13] rounded-full shadow-lg"
            >
              Add to Cart
            </Button>
            <Button
              onClick={() => navigate("/cart")}
              className="w-full bg-[#D8A460] hover:text-[#FFF3E7] hover:bg-[#512B13] rounded-full shadow-lg"
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
