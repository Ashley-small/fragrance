import React, { useState } from "react";
import Over500 from "../components/Over500";
import Under300 from "../components/Under300";
import Under150 from "../components/Under150";

const Recommended = () => {
  const [selectedPage, setSelectedPage] = useState("under150");
  const handlePageChange = (page) => {
    setSelectedPage(page);
  };

  return (
    <div className="max-w-[1640px] p-8 py-12 mx-auto min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-amber-800">
          Recommended Fragrances
        </h1>
        <h2 className="text-xl font-semibold text-slate-900">
          The world of fragrance is vast and varied, with options in all shapes
          and sizes. It's easy for this hobby to become expensive, or for
          fragrances to be used in the wrong situations. These recommendations
          are a great way to start your collection. The buttons corresponds with
          the budget you are willing to spend on 5 fragrances. Click on your
          budget allocation to find your five.
        </h2>
      </div>
      <div className="flex justify-center space-x-4 my-6">
        <button
          onClick={() => handlePageChange("Under150")}
          className={`py-2 px-4 rounded-lg focus:outline-none ${
            selectedPage === "Under150"
              ? "bg-amber-800 text-white"
              : "bg-slate-900 text-white"
          }`}
        >
          Under £200
        </button>
        <button
          onClick={() => handlePageChange("Under300")}
          className={`py-2 px-4 rounded-lg focus:outline-none ${
            selectedPage === "Under300"
              ? "bg-amber-800 text-white"
              : "bg-slate-900 text-white"
          }`}
        >
          Under £350
        </button>
        <button
          onClick={() => handlePageChange("Over500")}
          className={`py-2 px-4 rounded-lg focus:outline-none ${
            selectedPage === "Over500"
              ? "bg-amber-800 text-white"
              : "bg-slate-900 text-white"
          }`}
        >
          Over £500
        </button>
      </div>
      <div className="mt-4">
        {selectedPage === "Under150" && <Under150 />}
        {selectedPage === "Under300" && <Under300 />}
        {selectedPage === "Over500" && <Over500 />}
      </div>
    </div>
  );
};

export default Recommended;
