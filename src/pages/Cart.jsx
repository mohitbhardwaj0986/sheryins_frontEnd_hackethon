import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} from "../store/reducers/cartReducer";
import { motion } from "framer-motion";
import {
  FiTrash2,
  FiPlus,
  FiMinus,
  FiXCircle,
  FiShoppingCart,
} from "react-icons/fi";
import { FaCoffee } from "react-icons/fa";
import Button from "../components/Button";

function Cart() {
  const dispatch = useDispatch();
  const { cartItems, cartTotal } = useSelector((state) => state.cart);

  useEffect(() => {
    document.title = "Your Coffee Cart | Chamberlain Coffee";
  }, []);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  if (cartItems.length === 0) {
    return (
      <motion.div
        className="min-h-screen flex flex-col justify-center items-center bg-[#FFF3E7] text-[#3B200F] px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <FaCoffee size={64} className="mb-4 text-[#B7794E]" />
        </motion.div>
        <h2 className="text-3xl font-bold mb-2">Your cart is empty</h2>
        <p className="text-md text-center max-w-md">
          Looks like you haven't added anything yet. Time to brew some magic!
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="min-h-screen py-24 px-4 sm:px-6 md:px-16 bg-[#FFF3E7] text-[#3B200F]"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <div className="flex items-center gap-3">
          <FiShoppingCart size={28} className="text-[#6E3A1C]" />
          <h1 className="text-3xl font-extrabold tracking-tight">
            Your Cart
          </h1>
        </div>
        <Button
          onClick={() => dispatch(clearCart())}
          className="text-sm rounded-full  hover:bg-[#3B200F] hover:text-[#FFF3E7] flex items-center gap-2"
        >
          <FiTrash2 /> Clear Cart
        </Button>
      </div>

      {/* Items */}
      <motion.div className="space-y-8">
        {cartItems.map((itemData) => (
          <motion.div
            key={itemData.id}
            variants={item}
            whileHover={{ scale: 1.01 }}
            className="bg-white p-4 rounded-2xl shadow-md flex flex-col md:grid md:grid-cols-[100px_1fr_100px] gap-4 items-center group transition-all duration-300"
          >
            {/* Product Image */}
            <div className="rounded-xl overflow-hidden w-full md:w-auto flex justify-center">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={itemData.image}
                alt={itemData.name}
                className="w-full max-w-[120px] h-auto max-h-[100px] object-contain transition-transform duration-300"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col w-full justify-between gap-2 text-center md:text-left">
              <h3 className="text-lg font-semibold group-hover:text-[#6E3A1C] transition">
                {itemData.name}
              </h3>
              <p className="text-sm text-[#6E3A1C]">Price: {itemData.price}</p>

              <div className="flex items-center justify-center md:justify-start gap-4 mt-2">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ rotate: -10 }}
                  onClick={() => dispatch(decreaseQty(itemData.id))}
                  className="p-2 rounded-full bg-[#FFF3E7] border border-[#ccc] hover:bg-[#f2d6b9] transition"
                >
                  <FiMinus />
                </motion.button>
                <span className="font-medium text-lg">
                  {itemData.quantity}
                </span>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ rotate: 10 }}
                  onClick={() => dispatch(increaseQty(itemData.id))}
                  className="p-2 rounded-full bg-[#FFF3E7] border border-[#ccc] hover:bg-[#f2d6b9] transition"
                >
                  <FiPlus />
                </motion.button>
              </div>
            </div>

            {/* Actions & Total */}
            <div className="flex md:flex-col items-center md:items-end justify-between gap-4 w-full md:w-auto">
              <motion.button
                whileTap={{ scale: 0.85 }}
                whileHover={{ rotate: 90, scale: 1.1 }}
                onClick={() => dispatch(removeFromCart(itemData.id))}
                className="text-red-500 hover:text-red-700"
                title="Remove"
              >
                <FiXCircle size={22} />
              </motion.button>
              <p className="text-sm font-semibold text-[#3B200F]">
                $
                {(
                  parseFloat(itemData.price.replace("$", "")) *
                  itemData.quantity
                ).toFixed(2)}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Total & Checkout */}
      <motion.div
        className="mt-14 text-center sm:text-right flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-xl font-bold">
          Total: <span className="text-[#6E3A1C]">${cartTotal.toFixed(2)}</span>
        </h2>
        <Button className=" hover:text-[#FFF3E7] px-6 py-3 rounded-full hover:bg-[#6E3A1C]">
          Proceed to Checkout
        </Button>
      </motion.div>
    </motion.div>
  );
}

export default Cart;
