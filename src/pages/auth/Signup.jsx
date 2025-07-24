import React from "react";
import { motion } from "framer-motion";
import { FiUserPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("userInfo", JSON.stringify(data));
    toast.success("User Created Please Login", {
      style: {
        background: "#61402E",
        color: "#FFF3E7",
        border: "1px solid #FFF3E7",
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#FFF3E7] py-25 flex items-center justify-center overflow-hidden relative">
      {/* Floating Steam Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-6 h-6 bg-white/10 rounded-full blur-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 20}%`,
            }}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: -300, opacity: [0, 0.5, 0] }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Signup Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 flex flex-col gap-6"
      >
        {/* Icon */}
        <motion.div
          className="mx-auto p-4 bg-[#6E3A1C]/10 rounded-full"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <FiUserPlus size={40} className="text-[#6E3A1C]" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-center text-2xl font-bold text-[#3B2C27]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Join the Brew Crew ☕
        </motion.h2>

        {/* Form */}
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-1"
          >
            <input
              type="text"
              placeholder="Full Name"
              className={`px-4 py-3 rounded-xl border ${
                errors.name ? "border-red-400" : "border-[#6E3A1C]/20"
              } focus:outline-none focus:ring-2 focus:ring-[#D8A460]/40 transition`}
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name && (
              <span className="text-xs text-red-500">
                {errors.name.message}
              </span>
            )}
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-1"
          >
            <input
              type="email"
              placeholder="Email"
              className={`px-4 py-3 rounded-xl border ${
                errors.email ? "border-red-400" : "border-[#6E3A1C]/20"
              } focus:outline-none focus:ring-2 focus:ring-[#D8A460]/40 transition`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <span className="text-xs text-red-500">
                {errors.email.message}
              </span>
            )}
          </motion.div>

          {/* Password */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col gap-1"
          >
            <input
              type="password"
              placeholder="Password"
              className={`px-4 py-3 rounded-xl border ${
                errors.password ? "border-red-400" : "border-[#6E3A1C]/20"
              } focus:outline-none focus:ring-2 focus:ring-[#D8A460]/40 transition`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
            />
            {errors.password && (
              <span className="text-xs text-red-500">
                {errors.password.message}
              </span>
            )}
          </motion.div>

          {/* Button */}
          <Button
            type="submit"
            className="font-semibold py-3 hover:text-[#FFF3E7] hover:bg-[#3B2C27]"
          >
            Sign Up
          </Button>
        </form>

        <p className="text-sm text-center text-[#3B2C27]/70">
          Already have an account?{" "}
          <Link to="/login" className="underline font-medium">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default Signup;
