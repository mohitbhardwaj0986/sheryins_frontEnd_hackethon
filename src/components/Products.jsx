import React from "react";

function Products() {
  return (
    <div className="space-y-4 p-4">
      
      <h2 className="text-2xl font-bold">🌞 Light Theme</h2>

      <div className="w-full h-24 bg-[#FFFFFF] border text-black flex items-center px-4">
        bg - #FFFFFF
      </div>
      <div className="w-full h-24 bg-[#FFD7C2] text-black flex items-center px-4">
        hero bg, buttons - #FFD7C2
      </div>
      <div className="w-full h-24 bg-[#9361FF] text-white flex items-center px-4">
        buttons, hover, links - #9361FF
      </div>
      <div className="w-full h-24 bg-[#A8E6CF] text-black flex items-center px-4">
        highlight, badges - #A8E6CF
      </div>
      <div className="w-full h-24 bg-[#4B2E2E] text-white flex items-center px-4">
        main text - #4B2E2E
      </div>
      <div className="w-full h-24 bg-[#F9F9F9] text-black flex items-center px-4">
        card/input bg - #F9F9F9
      </div>
      <div className="w-full h-24 bg-[#E5E5E5] text-black flex items-center px-4">
        border/muted - #E5E5E5
      </div>

      <h2 className="text-2xl font-bold mt-8">🌙 Dark Theme</h2>

      <div className="w-full h-24 bg-[#1C1B1B] text-white flex items-center px-4">
        background - #1C1B1B
      </div>
      <div className="w-full h-24 bg-[#FFD7C2] text-black flex items-center px-4">
        heading/button - #FFD7C2
      </div>
      <div className="w-full h-24 bg-[#C8A2FF] text-black flex items-center px-4">
        link/hover - #C8A2FF
      </div>
      <div className="w-full h-24 bg-[#A8E6CF] text-black flex items-center px-4">
        badge/accent - #A8E6CF
      </div>
      <div className="w-full h-24 bg-[#F5F5F5] text-black flex items-center px-4">
        text - #F5F5F5
      </div>
      <div className="w-full h-24 bg-[#2A2A2A] text-white flex items-center px-4">
        card bg - #2A2A2A
      </div>
      <div className="w-full h-24 bg-[#333333] text-white flex items-center px-4">
        border - #333333
      </div>
      <div className="w-full h-24 bg-[#61402E] text-white flex items-center px-4">
        coffee accent - #61402E
      </div>
    </div>
  );
}

export default Products;
