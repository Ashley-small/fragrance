import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import Card3 from "./cards/Card3";
import "@splidejs/splide/dist/css/splide.min.css";
const Over500 = () => {
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
              <Link to={"/details/34"}>
                <Card3
                  image="../src/assets/images/GreenIrishTweed.jpg"
                  name="Green Irish Tweed"
                />
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link to={"/details/4"}>
                <Card3
                  image="../src/assets/images/Black-Phantom.jpg"
                  name="Black Phantom"
                />
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link to={"/details/2"}>
                <Card3
                  image="../src/assets/images/Creed-Aventus.jpg"
                  name="Creed Aventus"
                />
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link to={"/details/35"}>
                <Card3
                  image="../src/assets/images/Ombre-Leather.jpg"
                  name="Ombre Leather"
                />
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link to={"/details/3"}>
                <Card3
                  image="../src/assets/images/MyrhhandTonka.jpg"
                  name="Myrrh & Tonka"
                />
              </Link>
            </SplideSlide>
          </Splide>
        </div>
        <div className="w-full lg:w-1/3 lg:px-4 mt-6 lg:mt-0">
          <h1 className="text-center text-3xl text-amber-800 font-semibold">
            Expensive Tastes
          </h1>
          <h3 className="mt-4 text-xl text-slate-900 border-b-4 border-amber-800 border-dotted">
            Drag Across To Discover Affordable Gems
          </h3>

          <ul className="mt-4 text-lg font-normal text-slate-900">
            <li className="mb-4">
              <span className="font-semibold text-amber-800">
                Green Irish Tweed
              </span>
              - Perfect for Summer
            </li>
            <li className="mb-4">
              <span className="font-semibold text-amber-800">
                Black Phantom
              </span>
              - Ideal for Date Nights
            </li>
            <li className="mb-4">
              <span className="font-semibold text-amber-800">
                Creed Aventus
              </span>
              - Versatile All-Rounder
            </li>
            <li className="mb-4">
              <span className="font-semibold text-amber-800">
                Ombre Leather
              </span>
              - Great for Office or School
            </li>
            <li className="mb-4">
              <span className="font-semibold text-amber-800">
                Myrrh & Tonka
              </span>
              - Perfect for Clubbing
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Over500;
