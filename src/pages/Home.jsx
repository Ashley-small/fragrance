import React from "react";

import Hero from "../components/Hero";
import Seasons from "../components/Seasons";
import TheFive from "../components/TheFive";
import Trending from "../components/Trending";

const Home = () => {
  return (
    <div>
      <Hero />
      <Seasons />
      <TheFive />
      <Trending />
    </div>
  );
};

export default Home;
