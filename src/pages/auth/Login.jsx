import React from "react";
import { motion } from "framer-motion";
import { FiCoffee, FiMail, FiLock } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import {
  userFail,
  userRequest,
  userSuccess,
} from "../../store/reducers/userReducer";
import Button from "../../components/Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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
        toast.success("Welcome back, brew lover!", {
          style: {
            background: "#61402E",
            color: "#FFF3E7",
            border: "1px solid #FFF3E7",
          },
        });
        navigate("/products")
        reset();
      } else {
        dispatch(userFail("Invalid email or password"));
        toast.error("Invalid email or password");
      }
    } catch (error) {
      dispatch(userFail(error?.message || "Something went wrong"));
      toast.error("Login failed");
    }
  };

  return (
    <div className="relative pt-20 min-h-screen flex items-center justify-center bg-[#FFF3E7] overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute w-full h-full -z-10 overflow-hidden">
        <motion.div
          className="absolute top-[10%] left-[20%] w-72 h-72 bg-[#D8A460]/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[15%] right-[15%] w-72 h-72 bg-[#6E3A1C]/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      {/* Floating Coffee Icon */}
    

      {/* Login Card */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md bg-white shadow-2xl rounded-3xl px-8 py-12 z-10"
      >
          <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="   relative  text-[#6E3A1C]"
      >
        <FiCoffee className="-top-7 right-[50%] absolute" size={40} />
      </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            variants={childVariants}
            className="text-center text-4xl font-bold text-[#3B2C27] mb-2"
          >
            Welcome Back
          </motion.h2>
          <motion.p
            variants={childVariants}
            className="text-center text-[#3B2C27]/70 mb-8"
          >
            Login to your coffee paradise ☕
          </motion.p>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            noValidate
          >
            <motion.div variants={childVariants}>
              <div className="flex items-center border rounded-xl px-4 py-3 bg-[#FFF3E7] shadow-sm focus-within:ring-2 focus-within:ring-[#D8A460]/50">
                <FiMail className="mr-3 text-[#6E3A1C]" />
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
                  className="w-full bg-transparent outline-none text-[#3B2C27]"
                />
              </div>
              {errors.email && (
                <span className="text-xs text-red-500">
                  {errors.email.message}
                </span>
              )}
            </motion.div>

            <motion.div variants={childVariants}>
              <div className="flex items-center border rounded-xl px-4 py-3 bg-[#FFF3E7] shadow-sm focus-within:ring-2 focus-within:ring-[#D8A460]/50">
                <FiLock className="mr-3 text-[#6E3A1C]" />
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
                  className="w-full bg-transparent outline-none text-[#3B2C27]"
                />
              </div>
              {errors.password && (
                <span className="text-xs text-red-500">
                  {errors.password.message}
                </span>
              )}
            </motion.div>

            <motion.div variants={childVariants}>
              <Button
                type="submit"
                className="font-semibold w-full py-3 hover:text-[#FFF3E7] hover:bg-[#3B2C27]"
              >
                Log In
              </Button>
            </motion.div>
          </motion.form>

          <motion.p
            variants={childVariants}
            className="text-sm text-center text-[#3B2C27]/70 mt-6"
          >
            Don’t have an account?{" "}
            <Link to="/signup" className="underline hover:text-[#6E3A1C]">
              Sign up
            </Link>
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Login;
