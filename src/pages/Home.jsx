import React, { useEffect } from "react";
import HomeHeroSection from "../components/HomeHeroSection";
import HoverImageBurst from "../components/HoverImageBurst ";
import OurRecipes from "../components/OurRecipes";
import CreatedBY from "../components/CreatedBY";
function Home() {
   useEffect(() => {
   document.title = "Brew Better Days | Chamberlain Coffee";
    }, []);
  return (
    <div className="overflow-x-hidden scrollbar-hide">
      <HomeHeroSection />
      <HoverImageBurst />
      <OurRecipes />
      <CreatedBY />
    </div>
  );
}

export default Home;
