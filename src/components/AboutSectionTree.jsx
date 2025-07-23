import React from "react";
import CircularGallery from "./CircularGallery";
function AboutSectionTree() {
  return (
    <div
      className="bg-[#FFF3E7] text-[#3B2C27] py-10 "
      style={{ height: "100vh", position: "relative" }}
    >
      <h1 className="text-6xl text-center">High quality sips are our thing.</h1>
      <p className="text-2xl text-center mt-5">
        Browse our best-selling coffee, tea and more.
      </p>
      <CircularGallery
        bend={5}
        textColor=""
        borderRadius={0.05}
        scrollEase={0.02}
      />
    </div>
  );
}

export default AboutSectionTree;
