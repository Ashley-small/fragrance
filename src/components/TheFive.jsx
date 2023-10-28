import React from "react";
import { Link } from "react-router-dom";
const TheFive = () => {
  return (
    <div>
      <div className="w-full text-center bg-slate-900 h-16 text-white align-center justify-center text-5xl mb-2 font-bold">
        <h1>The Five</h1>
      </div>
      <div className="mx-auto">
        <div className="max-h-[700px] relative">
          <div className="absolute w-full h-full text-gray-200 max-h-[700px] bg-black/40 flex flex-col justify-center items-end">
            <h1 className="px-4 text-xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">
              Five <span>Fragrances</span>
            </h1>
            <h1 className="px-4 text-xl sm:text-3xl md:text-4xl lg:text-6xl font-bold ">
              To Start Your Journey
            </h1>
            <div className="flex w-full justify-end px-4 lg:pr-10 lg:text-3xl">
              <Link to={"./recommended"}>
                <button className="mt-9 font-semibold leading-none text-black py-4 px-6 lg:py-6 lg:px-10 bg-white rounded hover:bg-amber-800 focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 focus:outline-none">
                  Click Here
                </button>
              </Link>
            </div>
          </div>

          <div>
            <img
              className="w-full h-[700px] object-cover"
              src="../src/images/recBanner.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheFive;
