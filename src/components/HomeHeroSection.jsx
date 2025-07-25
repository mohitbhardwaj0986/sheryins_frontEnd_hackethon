import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import video from "../assets/hero_vdo.mp4";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function HomeHeroSection() {
  const videoRef = useRef();
  const videoWrapperRef = useRef();
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 5;
    }

    gsap.to(videoWrapperRef.current, {
      y:200,
      scale: 4,
      duration: 1,
      scrollTrigger: {
        trigger: videoWrapperRef.current,
        start: "top 30%",
        end: "bottom 20%",
        scrub: true,
     
      },
    });
  }, []);

  return (
   <div className="pt-25 pb-65 bg-[#FFF3E7] text-[#3B2C27] 2xl:py-32 overflow-hidden">
  {/* Top Text */}
  <motion.div
    className="px-6 lg:px-24 2xl:px-44"
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1.5, delay: 0.6 }}
  >
    <h1 className="text-5xl md:text-7xl lg:text-9xl 2xl:text-[12rem] font-semibold text-center lg:text-left">
      CHAMBERLAIN
    </h1>
  </motion.div>

  {/* Middle Section */}
  <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 px-6 lg:px-10 2xl:px-44 mt-8">
    {/* Left Text */}
    <motion.h2
      className="text-center lg:text-left text-lg md:text-xl lg:text-sm 2xl:text-base"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.8 }}
    >
      BREWED FOR <span className="text-[#3B2C27] font-bold">THE BOLD</span>
    </motion.h2>

    {/* Video */}
    <div
      ref={videoWrapperRef}
      className=" sm:w-[70%] aspect-video lg:w-[30%] 2xl:w-[40%] h-[35vh] 2xl:h-[40vh] shadow-lg"
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="object-cover  w-full h-full"
        src={video}
      />
    </div>

    {/* Right Text */}
    <motion.h2
      className="text-center lg:text-right text-lg md:text-xl lg:text-sm 2xl:text-base"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.8 }}
    >
      COFFEE MADE{" "}
      <span className="text-[#3B2C27] font-bold">TO INSPIRE</span>
    </motion.h2>
  </div>

  {/* Bottom Text */}
  <motion.div
    className="px-6 lg:px-24 2xl:px-44 mt-8 text-center lg:text-end"
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1.5, delay: 0.6 }}
  >
    <h1 className="text-5xl md:text-7xl lg:text-9xl 2xl:text-[12rem] font-semibold">
      COFFEE
    </h1>
  </motion.div>
</div>

  );
}

export default HomeHeroSection;
