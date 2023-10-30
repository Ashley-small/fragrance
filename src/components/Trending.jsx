import React from "react";
import aftershave from "../utils/aftershave";
import Card3 from "./cards/Card3";
import { Link } from "react-router-dom";

const Trending = () => {
  const trending = aftershave.filter(
    (aftershave) => aftershave.trending === "yes"
  );
  return (
    <div>
      <div>
        <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold p-4 text-slate-900">
          Trending Fragrances
        </h1>
        <div className="max-w-[1640px] mx-auto p-8 py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trending.map((scent) => (
            <Link key={scent.id} to={"/details/" + scent.id}>
              <Card3 image={scent.image} name={scent.name} alt={scent.name} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
