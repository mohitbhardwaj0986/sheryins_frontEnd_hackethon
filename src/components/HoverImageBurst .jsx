import React, { useRef } from "react";
import gsap from "gsap";
import hover1 from "../assets/hoverassest/hover1.jpg";
import hover2 from "../assets/hoverassest/hover2.jpg";
import hover3 from "../assets/hoverassest/hover3.jpg";
import hover4 from "../assets/hoverassest/hover4.jpg";
import hover5 from "../assets/hoverassest/hover5.jpg";
import hover6 from "../assets/hoverassest/hover6.jpg";
import hover7 from "../assets/hoverassest/hover7.jpg";
import SplitText from "./SplitText";

const HoverImageBurst = () => {
  const containerRef = useRef(null);
  const lastTimeRef = useRef(0);
  const countRef = useRef(0);
  const images = [hover1, hover2, hover3, hover4, hover5, hover6, hover7];

  const handleMouseMove = (e) => {
    const now = Date.now();
    if (now - lastTimeRef.current < 100) return;
    lastTimeRef.current = now;

    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const image = images[countRef.current % images.length];
    countRef.current++;

    const img = document.createElement("img");
    img.src = image;
    img.className =
      "w-[150px] h-[200px] object-cover pointer-events-none absolute z-50 rounded-xl drop-shadow-xl";
    img.style.position = "absolute";
    img.style.top = "0";
    img.style.left = "0";
    img.style.opacity = "0";
    img.style.mixBlendMode = "multiply";

    container.appendChild(img);

    const angle = gsap.utils.random(-180, 180);
    const distance = gsap.utils.random(100, 250);
    const scale = gsap.utils.random(0.8, 1.3);
    const rotation = gsap.utils.random(-30, 30);

    const timeline = gsap.timeline();

    timeline
      .fromTo(
        img,
        {
          x: mouseX,
          y: mouseY,
          scale: 0.3,
          opacity: 0,
          rotationX: 0,
          rotationY: 0,
        },
        {
          x: mouseX + distance * Math.cos(angle),
          y: mouseY + distance * Math.sin(angle),
          scale: scale,
          opacity: 1,
          rotationX: rotation,
          rotationY: rotation,
          duration: 0.9,
          ease: "expo.out",
        }
      )
      .to(img, {
        opacity: 0,
        scale: 0.5,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => img.remove(),
      });
  };

  return (
    <div
      ref={containerRef}
      className="sticky  top-0 text-start bg-[#FFF3E7] text-[#3B2C27] overflow-hidden cursor-crosshair py-24 px-6 sm:px-10 lg:px-16 xl:px-24"
      onMouseMove={handleMouseMove}
    >
      <SplitText
        delay={50}
        duration={0.3}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        className="text-4xl sm:text-5xl text-start md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
      >
        <h1>
          Strong coffee, stronger you — Chamberlain{" "}
          <span className="italic text-[#D8A460]">fuels confidence</span>
        </h1>
      </SplitText>

      <p className="max-w-xl mt-6 text-base sm:text-lg md:text-xl leading-relaxed">
        From farm to cup, it’s flavor with purpose. <br />
        Chamberlain Coffee — your daily dose of boldness.
      </p>
    </div>
  );
};

export default HoverImageBurst;
