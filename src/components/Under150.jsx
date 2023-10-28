import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import Card3 from "./cards/Card3";
import "@splidejs/splide/dist/css/splide.min.css";
const Under150 = () => {
  return (
    <div className="w-full mx-auto px-4 py-4">
      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/3 mt-6 lg:mt-0">
          <Splide
            options={{
              perPage: 3,
              gap: "1rem",
              pagination: false,
              arrows: false,
              drag: "free",
              breakpoints: {
                768: {
                  perPage: 2,
                },
                576: {
                  perPage: 1,
                },
              },
            }}
          >
            <SplideSlide>
              <Link to={"/details/19"}>
                <Card3 image="/images/nautica.jpg" name="Nautica Voyage" />
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link to={"/details/14"}>
                <Card3 image="/images/halloween.jpg" name="Halloween Man X" />
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link to={"/details/12"}>
                <Card3 image="/images/ClubDeNuit.jpg" name="Club De Nuit" />
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link to={"/details/13"}>
                <Card3
                  image="/images/BentleyAbsolute.jpg"
                  name="Bentley Absolute"
                />
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link to={"/details/32"}>
                <Card3 image="/images/Rochas.jpg" name="Rochas Moustache" />
              </Link>
            </SplideSlide>
          </Splide>
        </div>
        <div className="w-full lg:w-1/3 lg:px-4 mt-6 lg:mt-0">
          <h1 className="text-center text-3xl text-amber-800 font-semibold">
            Bargain Buys
          </h1>
          <h3 className="mt-4 text-xl text-slate-900 border-b-4 border-amber-800 border-dotted">
            Drag Across To Discover Affordable Gems
          </h3>

          <ul className="mt-4 text-lg font-normal text-slate-900">
            <li className="mb-4">
              <span className="font-semibold text-amber-800">
                Nautica Voyage
              </span>
              - Perfect for Summer
            </li>
            <li className="mb-4">
              <span className="font-semibold text-amber-800">
                Halloween Man X
              </span>
              - Ideal for Date Nights
            </li>
            <li className="mb-4">
              <span className="font-semibold text-amber-800">Club De Nuit</span>{" "}
              - Versatile All-Rounder
            </li>
            <li className="mb-4">
              <span className="font-semibold text-amber-800">
                Bentley Absolute
              </span>
              - Great for Office or School
            </li>
            <li className="mb-4">
              <span className="font-semibold text-amber-800">
                Rochas Moustache
              </span>
              - Perfect for Clubbing
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Under150;
