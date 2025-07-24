import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { FaPause, FaPlay } from "react-icons/fa";
import SplitText from "./SplitText";
import coldBrew from "../assets/ourrecipesassets/cold brew.jpg";
import espresso from "../assets/ourrecipesassets/espresso.jpg";
import matcha from "../assets/ourrecipesassets/make matcha.jpg";
import cheesecakeMatchaLatte from "../assets/ourrecipesassets/peach cheesecake matcha latte.jpg";


gsap.registerPlugin(ScrollTrigger);

const RecipeCard = ({ title, imgSrc, videoSrc, li = [], instrucitons }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const followerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideoPlay = useCallback(() => {
    const video = videoRef.current;
    const img = imgRef.current;

    if (!video || !img) return;

    if (!isPlaying) {
      video.muted = false;
      video.currentTime = 0;
      video.play();
      video.style.zIndex = 30;
      img.style.display = "none";
    } else {
      video.muted = true;
      video.currentTime = 0;
      video.pause();
      video.style.zIndex = 0;
      img.style.display = "block";
    }

    setIsPlaying((prev) => !prev);
  }, [isPlaying]);

  useEffect(() => {
    const container = containerRef.current;
    const follower = followerRef.current;

    if (!container || !follower) return;

    gsap.fromTo(
      container,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
        },
      }
    );

    const showFollower = () => {
      follower.style.display = "block";
    };

    const hideFollower = () => {
      follower.style.display = "none";
    };

    const moveFollower = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      follower.style.transform = `translate(${x}px, ${y}px)`;
    };

    container.addEventListener("mouseenter", showFollower);
    container.addEventListener("mouseleave", hideFollower);
    container.addEventListener("mousemove", moveFollower);

    return () => {
      container.removeEventListener("mouseenter", showFollower);
      container.removeEventListener("mouseleave", hideFollower);
      container.removeEventListener("mousemove", moveFollower);
    };
  }, []);

  return (
    <motion.div className="w-full  relative space-y-6">
      {/* Mouse Follower */}
      <motion.div
        ref={followerRef}
        className="p-10 flex justify-center items-center duration-100 text-[#FFF3E7] bg-[#92A77D] rounded-full pointer-events-none absolute z-50"
        style={{ display: "none", transform: "translate(0px, 0px)" }}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </motion.div>

      {/* Video + Image Container */}
      <div
        onClick={toggleVideoPlay}
        ref={containerRef}
        className="relative h-[60vh] cursor-none sm:h-[80vh] lg:h-[90vh] 2xl:h-[100vh] w-full overflow-hidden rounded-2xl hover:scale-[1.01] transition-transform duration-300 ease-in-out"
      >
        <img
          ref={imgRef}
          src={imgSrc}
          alt={title}
          className="absolute h-full w-full object-top object-cover z-20"
        />
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={videoSrc}
          playsInline
          controls={false}
        />
      </div>

      {/* Title and Recipe Info */}
     <div className="bg-[#3B2C27]/60 backdrop-blur-xl rounded-2xl border border-[#A1795A] p-6 sm:p-8 space-y-6 shadow-xl transition-transform hover:scale-[1.02] duration-300">
  <h3 className="text-2xl sm:text-3xl 2xl:text-4xl font-extrabold text-[#FFF3E7] hover:text-[#92A77D] transition-all duration-300">
    {title}
  </h3>

  <div className="space-y-3">
    <h4 className="text-lg sm:text-xl font-semibold text-[#92A77D]">🧾 What You’ll Need:</h4>
    <ul className="space-y-2">
      {li.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2 text-[#FFF3E7] text-sm sm:text-base leading-snug">
          <span className="text-[#92A77D] text-lg">➤</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>

  <div className="space-y-2">
    <h4 className="text-lg sm:text-xl font-semibold text-[#92A77D]">📋 Instructions:</h4>
    <p className="text-sm sm:text-base text-[#FFF3E7]/90 leading-relaxed tracking-wide font-light">
      {instrucitons}
    </p>
  </div>
</div>



    </motion.div>
  );
};

const OurRecipes = () => {
  return (
    <section className="bg-[#3B2C27] text-[#FFF3E7] overflow-hidden px-4 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 py-20 space-y-20">
      {/* Title */}
      <SplitText
      delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
      className="text-5xl sm:text-7xl lg:text-9xl 2xl:text-[180px] font-bold leading-tight">
        our{" "}
        <span className="font-special text-[#92A77D] italic text-[60px] sm:text-[90px] lg:text-[135px] 2xl:text-[180px]">
          recipes
        </span>
      </SplitText>

      {/* Grid Layout */}
      <div className="flex flex-col lg:flex-row gap-20 xl:gap-28 2xl:gap-36 justify-between">
        {/* Left Column */}
        <div className="flex flex-col gap-20 w-full lg:w-[42%]">
          <p className="text-base sm:text-lg xl:text-xl 2xl:text-2xl leading-relaxed">
            Discover the magic behind our signature coffee recipes — each
            crafted with precision, passion, and a love for flavor. From bold
            cold brews to creamy matcha lattes, we blend tradition with
            creativity to bring you brews that excite and energize every sip.
          </p>

          <RecipeCard
            title="Cold brew elephant"
            li={["Matcha", "Transparent Tumbler", "Electric whisk", "Double wall mug"]}
            instrucitons="Mix ½ tsp of matcha into 4-6oz of hot water. Blend using the Chamberlain Coffee electric whisk. Add milk of choice."
            imgSrc={coldBrew}
            videoSrc="https://res.cloudinary.com/dqgxrwrgg/video/upload/v1753177608/cold_brew_bfkbcy.mp4"
          />
          <RecipeCard
            title="Matcha Magic"
            li={[
              "Chamberlain Coffee Fancy Mouse Espresso",
              "Chamberlain Coffee Hot Chocolate or chocolate",
              "Double wall mug",
              "Milk of choice",
              "Electric Whisk",
            ]}
            instrucitons="Heat milk and add 2 tbsp hot chocolate. Whisk. Pour espresso in."
            imgSrc={matcha}
            videoSrc="https://res.cloudinary.com/dqgxrwrgg/video/upload/v1753177544/espresso_gugd77.mp4"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-30 w-full lg:w-[52%]">
          <RecipeCard
            title="Espresso Energy Shot"
            li={[
              "1.5 oz candied pecan cold brew concentrate",
              "1.5 oz 818 Tequila Reposado",
              "1.5 oz coffee liqueur",
              "1 tbsp cream cheese",
              ".25 oz cinnamon or simple syrup",
            ]}
            instrucitons="Combine all ingredients into a shaker with ice."
            imgSrc={espresso}
            videoSrc="https://res.cloudinary.com/dqgxrwrgg/video/upload/v1753177544/espresso_gugd77.mp4"
          />
          <RecipeCard
            title="Peach cheesecake matcha latte"
            li={[
              "1 tsp peach matcha",
              "4 ounces warm water",
              "1 tbsp peach jam",
              "1 tbsp cream cheese",
              "1 tbsp nonfat milk",
            ]}
            instrucitons="Make peach matcha: 1 tsp chamberlain peach matcha and small amount of water and mix. Make peach cheesecake cold foam: 1 tbsp peach jam, 1 tbsp cream cheese, 1 tbsp nonfat milk, 3 tbsp heavy cream and froth 1 min. Create rings on inside of glass using mixture of peach jam and cream cheese with hand frother. Add ice, milk, peach matcha, cold foam. Top with crushed graham crackers and enjoy!"
            imgSrc={cheesecakeMatchaLatte}
            videoSrc="https://res.cloudinary.com/dqgxrwrgg/video/upload/v1753177439/peach_cheesecake_matcha_latte_n061l2.mp4"
          />
          
        </div>
      </div>
    </section>
  );
};

export default OurRecipes;
