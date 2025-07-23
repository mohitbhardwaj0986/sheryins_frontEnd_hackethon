import React, { useEffect, useRef } from "react";
import emma from "../assets/emma.jpg";
import Button from "./Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

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
        <div
          ref={textRef}
          className="flex-1 space-y-6 text-center lg:text-left backdrop-blur-xl bg-white/30 p-8 rounded-3xl shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3B2C27] leading-snug">
            Created by <span className="text-[#D8A460]">Emma Chamberlain</span>
          </h2>
          <p className="text-[#3B2C27] text-lg leading-relaxed tracking-wide font-medium">
            At Chamberlain Coffee, we’re passionate about providing
            high-quality, delicious beverages. So you can enjoy every sip, slurp
            and spill (it happens) knowing it’s thoughtfully made.
          </p>
          <p className="text-[#3B2C27] text-base leading-relaxed tracking-wide">
            Drinks can be more than just drinks — they’re sources of joy,
            creativity, and comfort. We’re grateful to be part of your daily
            routine.
          </p>
          <Button
            onClick={() => navigate("/about")}
            aria-label="Learn more about Emma Chamberlain"
          >
            Learn more
          </Button>
        </div>

        {/* Image Block */}
        <div ref={imageRef} className="flex-1 w-full max-w-md">
          <img
            src={emma}
            alt="Portrait of Emma Chamberlain"
            className="w-full rounded-3xl object-cover shadow-[0_20px_40px_rgba(59,44,39,0.25)] transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default CreatedBY;
