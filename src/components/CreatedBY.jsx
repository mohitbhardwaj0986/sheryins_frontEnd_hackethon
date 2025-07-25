import React, { useEffect, useRef } from "react";
import emma from "../assets/emma.jpg";
import Button from "./Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'
gsap.registerPlugin(ScrollTrigger);

function CreatedBY() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        opacity: 0,
        x: -80,
        scale: 0.96,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        x: 80,
        scale: 0.96,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 md:px-16 bg-[#FFF3E7] overflow-hidden"
    >
      {/* Accent Light Blur Circles */}
      <div className="absolute top-[-4rem] left-[-4rem] w-80 h-80 bg-[#D8A460]/20 blur-[100px] rounded-full z-0" />
      <div className="absolute bottom-[-4rem] right-[-4rem] w-96 h-96 bg-[#92A77D]/20 blur-[100px] rounded-full z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Text Content */}
       <motion.div
  ref={textRef}
  whileHover={{
    scale: 1.03,
    rotate: 0.5,
    transition: { type: "spring", stiffness: 200, damping: 12 },
  }}
  className="relative flex-1 space-y-6 text-center lg:text-left backdrop-blur-xl bg-white/30 p-8 rounded-3xl shadow-2xl transition-all duration-300 group"
>
  {/* Glowing border on hover */}
  <div className="absolute inset-0 rounded-3xl z-[-1] bg-gradient-to-r from-[#D8A460]/30 via-[#f8d9b0]/20 to-[#92A77D]/30 blur-md opacity-0 group-hover:opacity-100 transition-all duration-500" />

  <h2 className="text-4xl md:text-5xl font-extrabold text-[#3B2C27] leading-snug">
    Created by{" "}
    <span className="text-[#D8A460] hover:underline underline-offset-4 transition-all duration-300">
      Emma Chamberlain
    </span>
  </h2>
  <p className="text-[#3B2C27] text-lg leading-relaxed tracking-wide font-medium">
    At Chamberlain Coffee, we’re passionate about providing high-quality,
    delicious beverages. So you can enjoy every sip, slurp and spill (it
    happens) knowing it’s thoughtfully made.
  </p>
  <p className="text-[#3B2C27] text-base leading-relaxed tracking-wide">
    Drinks can be more than just drinks — they’re sources of joy, creativity,
    and comfort. We’re grateful to be part of your daily routine.
  </p>

  {/* Fancy Button with Shine Effect */}
  <div className="relative inline-block group">
    <Button
      onClick={() => navigate("/about")}
      aria-label="Learn more about Emma Chamberlain"
      className="overflow-hidden relative z-10"
    >
      <span className="relative z-20">Learn more</span>
      {/* Shine effect */}
      <span className="absolute top-0 left-[-100%] w-full h-full bg-white/30 rotate-6 group-hover:left-full transition-all duration-700 ease-in-out" />
    </Button>
  </div>
</motion.div>

        {/* Image Block */}
        <div
  ref={imageRef}
  className="group relative flex-1 w-full max-w-md perspective-1000"
>
  <div className="transform-style-preserve-3d transition-all duration-700 group-hover:rotate-[1.5deg] group-hover:scale-[1.05] group-hover:-translate-y-2 relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_30px_60px_rgba(59,44,39,0.35)]">
    <img
      src={emma}
      alt="Portrait of Emma Chamberlain"
      className="w-full h-full object-cover rounded-3xl"
    />

    {/* Shine/Glare effect */}
    <div className="absolute inset-0 pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:via-white/40 before:to-white/10 before:rotate-[-45deg] before:translate-x-[-100%] group-hover:before:animate-shine" />
  </div>
</div>

      </div>
    </section>
  );
}

export default CreatedBY;
