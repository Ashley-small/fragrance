import React from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Card3 from "./cards/Card3";
import "@splidejs/splide/dist/css/splide.min.css";
const Under300 = () => {
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
              <Link to={"/details/33"}>
                <Card3 image="@/src/images/ADG.jpg" name="Acqua Di Gio" />
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link to={"/details/10"}>
                <Card3 image="@/src/images/The-One.jpg" name="The One" />
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link to={"/details/1"}>
                <Card3
                  image="@/src/images/Dior-Sauvage.jpg"
                  name="Dior Sauvage"
                />
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link to={"/details/18"}>
                <Card3 image="@/src/images/Prada.jpg" name="Prada L'homme" />
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link to={"/details/31"}>
                <Card3 image="@/src/images/1million.jpg" name="1 Million" />
              </Link>
            </SplideSlide>
          </Splide>
        </div>
        <div className="w-full lg:w-1/3 lg:px-4 mt-6 lg:mt-0">
          <h1 className="text-center text-3xl text-amber-800 font-semibold">
            Luxury Finds
          </h1>
          <h3 className="mt-4 text-xl text-slate-900 border-b-4 border-amber-800 border-dotted">
            Drag Across To Discover Affordable Gems
          </h3>

          <ul className="mt-4 text-lg font-normal text-slate-900">
            <li className="mb-4">
              <span className="font-semibold text-amber-800">Acqua Di Gio</span>
              - Perfect for Summer
            </li>
            <li className="mb-4">
              <span className="font-semibold text-amber-800">
                Dolce & Gabbana The One
              </span>
              - Ideal for Date Nights
            </li>
            <li className="mb-4">
              <span className="font-semibold text-amber-800">Dior Sauvage</span>
              - Versatile All-Rounder
            </li>
            <li className="mb-4">
              <span className="font-semibold text-amber-800">
                Prada L'homme
              </span>
              - Great for Office or School
            </li>
            <li className="mb-4">
              <span className="font-semibold text-amber-800">
                Paco Rabbane One Million
              </span>
              - Perfect for Clubbing
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Under300;
