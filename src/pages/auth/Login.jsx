import React from "react";
import { motion } from "framer-motion";
import { FiCoffee } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import {
  userFail,
  userRequest,
  userSuccess,
} from "../../store/reducers/userReducer";
import { toast } from "sonner";

function Login() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
  try {
    const storedUser = JSON.parse(localStorage.getItem("userInfo"));

    if (
      storedUser &&
      data.email === storedUser.email &&
      data.password === storedUser.password
    ) {
      dispatch(userRequest());
      dispatch(userSuccess(storedUser)); 
      sessionStorage.setItem("userInfo", JSON.stringify(storedUser)); 
      toast.success("Logged In", {
            style:{
              background:"#61402E",
              color:"#FFF3E7",
              border:"1px solid #FFF3E7"
            }
          })
    } else {
      dispatch(userFail("Invalid email or password"));
      toast.error("Invalid email or password");
    }
  } catch (error) {
    dispatch(userFail(error?.message || "Something went wrong"));
    toast.error("Failed to login");
  }
};


  return (
    <div className="min-h-screen py-25 bg-[#FFF3E7] flex items-center justify-center relative overflow-hidden">
      {/* Animated Steam Circles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-6 h-6 bg-white/10 rounded-full blur-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 20}%`,
            }}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: -400, opacity: [0, 0.4, 0] }}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 w-full max-w-md bg-white shadow-xl rounded-3xl p-10 flex flex-col gap-6"
      >
        {/* Icon */}
        <motion.div
          className="mx-auto p-4 bg-[#6E3A1C]/10 rounded-full"
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <FiCoffee size={38} className="text-[#6E3A1C]" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-center text-3xl font-bold text-[#3B2C27]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Welcome Back 👋
        </motion.h2>

        {/* Subheading */}
        <p className="text-center text-sm text-[#3B2C27]/60">
          Log in to continue sipping joy.
        </p>

        {/* Login Form */}
        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          {/* Email Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-1"
          >
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Enter a valid email",
                },
              })}
              className={`px-4 py-3 rounded-xl border transition focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-400 focus:ring-red-300"
                  : "border-[#6E3A1C]/20 focus:ring-[#D8A460]/40"
              }`}
            />
            {errors.email && (
              <span className="text-xs text-red-500">
                {errors.email.message}
              </span>
            )}
          </motion.div>

          {/* Password Field */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-1"
          >
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
              className={`px-4 py-3 rounded-xl border transition focus:outline-none focus:ring-2 ${
                errors.password
                  ? "border-red-400 focus:ring-red-300"
                  : "border-[#6E3A1C]/20 focus:ring-[#D8A460]/40"
              }`}
            />
            {errors.password && (
              <span className="text-xs text-red-500">
                {errors.password.message}
              </span>
            )}
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              type="submit"
              className="w-full py-3 font-semibold rounded-xl  bg-[#3B2C27]  text-[#6E3A1C] transition"
            >
              Login
            </Button>
          </motion.div>
        </form>

        {/* Signup Link */}
        <p className="text-sm text-center text-[#3B2C27]/70 mt-2">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="underline font-medium hover:text-[#6E3A1C]"
          >
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default Login;
