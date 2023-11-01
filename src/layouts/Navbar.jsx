import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import Search from "../components/Search";
import Footer from "../components/Footer";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div>
      <div className="w-full mx-auto flex justify-between items-center p-4 bg-slate-900 text-white">
        <div>
          <Link to="/">
            <h1 className="text-3xl cursor-pointer hover:text-amber-800">
              <span className="font-bold">Fragrance</span> Files
            </h1>
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex text-lg text-center items-center gap-x-5 cursor-pointer">
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="/learn">
              <li>The Basics</li>
            </NavLink>
            <NavLink to="/recommended">
              <li>The Five</li>
            </NavLink>
            <NavLink to="/requests">
              <li>Requests</li>
            </NavLink>
          </ul>
        </div>
        <div
          onClick={() => setNav(!nav)}
          className="flex md:hidden cursor-pointer"
        >
          <FaBars size={20} aria-label="open nav" />
        </div>
        {nav ? (
          <div
            onClick={() => setNav(!nav)}
            className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"
          ></div>
        ) : (
          ""
        )}

        <div
          className={` ${
            nav.toString() === "true"
              ? "fixed top-0 right-0 w-[200px] h-screen bg-white z-10 duration-300"
              : "fixed top-0 right-[-100%] w-[200px] h-screen bg-white z-10 duration-300"
          }`}
        >
          <FaTimes
            onClick={() => setNav(!nav)}
            size={20}
            className="z-50 text-black absolute right-8 top-4 cursor-pointer"
            aria-label="close nav"
          />
          <nav>
            <ul className=" flex flex-col p-4  text-gray-800 mt-4 text-xl font-bold">
              <NavLink to="/">
                <li className="py-2">Home</li>
              </NavLink>
              <NavLink to="/learn">
                <li className="py-2">The Basics</li>
              </NavLink>
              <NavLink to="/recommended">
                <li className="py-2">The Five</li>
              </NavLink>
              <NavLink to="/requests">
                <li className="py-2">Requests</li>
              </NavLink>
            </ul>
          </nav>
        </div>
      </div>
      <main>
        <Search />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default Navbar;
