import React from "react";
import Button from "../Button";
import poster from "../../assets/about/poster.jpg";
function Poster() {
  return (
    <div className="relative w-full text-[#FFF3E7] h-[80vh] overflow-hidden  flex items-center justify-center px-6">
      {/* Background Image */}
      <img
        src={poster}
        alt="Coffee Poster"
        className="absolute inset-0 w-full h-full object-cover "
      />

      {/* Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm" />

      {/* Content */}
      <div className=" max-w-3xl  flex flex-col items-center text-center space-y-6 z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold  leading-tight">
          Brewed with Passion
        </h2>
        <p className="text-lg md:text-xl  font-medium">
          Discover our collection of rich, bold, and sustainably sourced coffee
          blends. Perfectly crafted for your everyday ritual.
        </p>
        <Button className="">Explore Our Products</Button>
      </div>
    </div>
  );
}

export default Poster;
