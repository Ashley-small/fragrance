import React from "react";

const Hero = () => {
  return (
    <div className="mx-auto">
      <div className="max-h-[600px] relative">
        <div className="absolute w-full h-full text-gray-200 max-h-[600px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-xl sm:text-3xl md:text-4xl lg:text-6xl font-bold ">
            Men's <span>Fragrance</span>
          </h1>
          <h1 className="px-4 text-xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">
            Made <span>Easy</span>
          </h1>
        </div>

        <div>
          <img
            className="w-full h-[600px] object-cover"
            src="../src/assets/images/banner.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
