import React, { useEffect, useRef } from "react";
import aboutImage from "../assets/aboutsectiontwo.png";
import aboutImage1 from "../assets/aboutsection2.png";
import aboutImage2 from "../assets/aboutsection3.png";
import aboutImage3 from "../assets/aboutsection4.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSectionTwo() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const fromY = index % 2 === 0 ? -50 : 50;

      gsap.fromTo(
        ref.querySelectorAll("h2, p"),
        { y: fromY, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref,
            start: "top top",
            end: "+=100%",
            scrub: true,
            pin: true,
          
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const sections = [
    {
      image: aboutImage,
      alt: "Emma’s Story",
      heading: "Emma’s Story",
      content: [
        "Growing up in San Francisco, I loved escaping to local cafes...",
        "As I got older, coffee became a crucial part of my daily routine...",
        "Fast forward through hundreds of taste tests—and Chamberlain Coffee’s first product was born.",
      ],
      bg: "#3B2C27",
      text: "white",
      glassBg: "bg-white/30",
    },
    {
      image: aboutImage3,
      alt: "Why Chamberlain Coffee?",
      heading: "Why Chamberlain Coffee?",
      content: [
        "Finding high-quality matcha was tricky...",
        "Our organic matcha is sourced from Shizuoka, Japan...",
        "Our matcha is Ceremonial Grade A...",
      ],

      bg: "#FFF3E7",
      text: "#3B2C27",
      glassBg: "bg-white/30",
    },
    {
      image: aboutImage1,
      alt: "Meeting our Matcha",
      heading: "Meeting our Matcha",
      content: [
        "Our suppliers use traditional methods to craft matcha that’s nutrient-packed...",
      ],
      bg: "#3B2C27",
      text: "white",
      glassBg: "bg-white/10",
    },
    {
      image: aboutImage2,
      alt: "5 Years (!!) of Chamberlain Coffee",
      heading: "5 Years (!!) of Chamberlain Coffee",
      content: [
        "Today, we’ve grown into a full-fledged team...",
        "I can’t wait to show you what’s next.",
        "— Emma Chamberlain",
      ],

      bg: "#FFF3E7",
      text: "#3B2C27",
      glassBg: "bg-white/30",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden">
      {sections.map((section, idx) => (
        <section
          key={idx}
          ref={(el) => (sectionRefs.current[idx] = el)}
          className={`min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 gap-10 lg:px-20 py-10`}
          style={{ backgroundColor: section.bg, color: section.text }}
        >
               <motion.div
  className="w-full lg:w-1/2 flex justify-center"
  whileHover={{ scale: 1.05, rotate: 1 }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: "spring", stiffness: 300, damping: 15 }}
>
  <motion.img
    src={section.image}
    alt={section.alt}
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="w-[80%] max-h-[80vh] rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] object-cover object-top hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-shadow duration-500"
    whileHover={{
      scale: 1.08,
      rotate: -2,
      boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
    }}
  />
</motion.div>
          <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }}
  whileHover={{
    scale: 1.03,
    rotate: 1,
    boxShadow: "0 15px 50px rgba(0,0,0,0.25)",
  }}
  className={`relative w-full max-h-[80vh] overflow-y-auto px-4 py-6 md:px-6 lg:px-8 lg:py-8 rounded-3xl shadow-lg backdrop-blur-md transition-all duration-300 ${section.glassBg} group`}
>
  {/* Animated border glow */}
 

  {/* Background shine animation */}
  <div className="absolute inset-0 z-[-2] rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent animate-glow" />

  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
    {section.heading}
  </h2>
  <div className="space-y-4 text-base md:text-lg leading-relaxed">
    {section.content.map((para, i) => (
      <p
        key={i}
        className={`${
          para.startsWith("—") ? "italic font-semibold" : ""
        } transition-all duration-300 group-hover:tracking-wide`}
      >
        {para}
      </p>
    ))}
  </div>
</motion.div>
        </section>
      ))}

      {/* Footer */}
  
    </div>
  );
}
