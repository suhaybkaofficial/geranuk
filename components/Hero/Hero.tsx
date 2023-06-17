import React from "react";
import LeftHero from "./LeftHero";
import MiddleHero from "./MiddleHero";
import RightHero from "./RightHero";
import Features from "./Features";

function Hero() {
  return (
    <div className="flex justify-between">
      {/* Left */}
      <div className="hidden lg:flex">
        <LeftHero />
      </div>
      <div className="h-[80vh]">
       <div className="flex ">
         {/* Middle */}
      <div className="flex-1">
        <MiddleHero />
      </div>
      {/* Right */}
      <div className="hidden lg:flex">
        <RightHero />
      </div>
       </div>
      <Features />
      </div>
    </div>
  );
}

export default Hero;
