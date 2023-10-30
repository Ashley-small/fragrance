import React from "react";
import Card from "./cards/Card";
import Card2 from "./cards/Card2";
import { Link } from "react-router-dom";
const Seasons = () => {
  return (
    <div>
      <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold p-4 text-slate-900">
        Seasonal Scents
      </h1>
      <div className="max-w-[1640px] mx-auto p-8 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <Link to={"/summer"}>
          <Card name="Summer" image="/images/7480.jpg" />
        </Link>
        <Link to={"/spring"}>
          <Card2 name="Spring" image="/images/61562.jpg" />
        </Link>
        <Link to={"/autumn"}>
          <Card name="Autumn" image="/images/885.jpg" />
        </Link>
        <Link to={"/winter"}>
          <Card2 name="Winter" image="/images/4065.jpg" />
        </Link>
      </div>
    </div>
  );
};

export default Seasons;
