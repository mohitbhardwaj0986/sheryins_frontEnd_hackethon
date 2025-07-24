import React, { useEffect, useRef } from "react";
import aboutImage from "../assets/aboutsectiontwo.jpg";
import aboutImage1 from "../assets/aboutsection2.jpg";
import aboutImage2 from "../assets/aboutsection3.jpg";
import aboutImage3 from "../assets/aboutsection4.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
            pinSpacing: false,
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
      bg: "#FFF3E7",
      text: "#3B2C27",
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
      bg: "#3B2C27",
      text: "white",
      glassBg: "bg-white/30",
    },
    {
      image: aboutImage1,
      alt: "Meeting our Matcha",
      heading: "Meeting our Matcha",
      content: [
        "Our suppliers use traditional methods to craft matcha that’s nutrient-packed...",
      ],
      bg: "#FFF3E7",
      text: "#3B2C27",
      glassBg: "bg-white/30",
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
      bg: "#3B2C27",
      text: "white",
      glassBg: "bg-white/10",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden">
      {sections.map((section, idx) => (
        <section
          key={idx}
          ref={(el) => (sectionRefs.current[idx] = el)}
          className={`h-screen flex flex-col lg:flex-row items-center justify-center px-6 gap-10 lg:px-20 py-10`}
          style={{ backgroundColor: section.bg, color: section.text }}
        >
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={section.image}
              alt={section.alt}
              className="w-full max-h-[80vh] rounded-3xl shadow-xl object-cover object-center"
            />
          </div>
          <div
            className={`w-full lg:w-1/2 ${section.glassBg} backdrop-blur-md p-8 rounded-3xl shadow-lg max-h-[80vh] overflow-y-auto`}
          >
            <h2 className="text-4xl font-bold mb-4">{section.heading}</h2>
            <div className="space-y-4 text-lg">
              {section.content.map((para, i) => (
                <p
                  key={i}
                  className={`${
                    para.startsWith("—") ? "italic font-semibold" : ""
                  }`}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Footer */}
      <div className="h-[100vh] bg-[#FFF3E7] flex items-center justify-center px-6">
        <footer className="text-center text-[#3B2C27] space-y-4">
          <h2 className="text-3xl font-bold text-[#D8A460]">
            Thanks for scrolling ☕
          </h2>
          <p className="text-md">
            © 2025 Chamberlain Coffee. All rights reserved.
          </p>
          <button className="bg-[#FFDAB9] text-[#3B2C27] px-6 py-2 rounded-xl font-semibold hover:bg-[#fbcfae] transition duration-300">
            Explore Products
          </button>
        </footer>
      </div>
    </div>
  );
}
