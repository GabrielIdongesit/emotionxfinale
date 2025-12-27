import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { HiUser } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Navbar = ({ setSearchTerm }) => {
  const [nav, setNav] = useState(false);

  return (
    <div className="bg-white top-0 sticky z-50 mx-auto flex justify-between items-center p-4 relative">
      
      {/* Left: Hamburger + Logo */}
      <div className="flex items-center">
        {/* Hamburger */}
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu
            className="hover:bg-teal-400 p-2 px-2 py-1 hover:text-white hover:rounded-full"
            size={40}
          />
        </div>

        {/* Logo */}
        <NavLink to="/">
          <h1 className="text-[8px] flex sm:text-xl lg:text-4xl px-2 font-bold">
            E-<span className="font-bold">MotionX</span>
          </h1>
        </NavLink>
      </div>

      {/* Search Input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-full sm:w-[400px] lg:w-[500px] mx-4">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          placeholder="Search Bikes"
          className="bg-transparent p-2 focus:outline-none w-full"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Cart / Delivery buttons */}
      <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
        <p className="text-white cursor-pointer bg-green-400 rounded-full p-2">Delivery</p>
        <p className="p-2 cursor-pointer font-semibold">Pickup</p>
      </div>
      <button className="text-black hidden md:flex border p-3 px-2 border-teal-400 items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {/* Overlay */}
      {nav && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-black/80 z-20"
          onClick={() => setNav(false)}
        />
      )}

      {/* Close button visible on both desktop and mobile */}
      {nav && (
        <div
          onClick={() => setNav(false)}
          className="absolute top-4 right-4 cursor-pointer z-30"
        >
          <AiOutlineClose
            className="hover:bg-teal-400 p-2 px-2 py-1 hover:text-white hover:rounded-full"
            size={35}
          />
        </div>
      )}

      {/* Menu Drawer */}
      <div
        className={`fixed top-0 left-0 w-[300px] h-screen bg-white z-30 transition-transform duration-300 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <NavLink to="/" onClick={() => setNav(false)}>
              <li className="text-xl hover:bg-teal-600 hover:text-white border hover:scale-105 duration-300 rounded-xl p-2 my-2 py-2 cursor-pointer hover:border-black font-style: italic uppercase font-semibold border-teal-300 flex">
                <MdFavorite size={25} className="mr-2" /> HomePage
              </li>
            </NavLink>
            <NavLink to="/Signin" onClick={() => setNav(false)}>
              <li className="text-xl hover:bg-teal-600 hover:text-white border hover:scale-105 duration-300 rounded-xl p-2 my-2 py-2 cursor-pointer hover:border-black font-style: italic uppercase font-semibold border-teal-300 flex">
                <HiUser size={25} className="mr-2" /> Join
              </li>
            </NavLink>
            <NavLink to="/ContactUs" onClick={() => setNav(false)}>
              <li className="text-xl hover:bg-teal-600 hover:text-white border hover:scale-105 duration-300 rounded-xl p-2 my-2 py-2 cursor-pointer hover:border-black font-style: italic uppercase font-semibold border-teal-300 flex">
                <MdFavorite size={25} className="mr-2" /> Contact Us
              </li>
            </NavLink>
            <NavLink to="/Payment" onClick={() => setNav(false)}>
              <li className="text-xl hover:bg-teal-600 hover:text-white border hover:scale-105 duration-300 rounded-xl p-2 my-2 py-2 cursor-pointer hover:border-black font-style: italic uppercase font-semibold border-teal-300 flex">
                <FaWallet size={25} className="mr-2" /> Payment
              </li>
            </NavLink>
            <NavLink to="/AboutUs" onClick={() => setNav(false)}>
              <li className="text-xl hover:bg-teal-600 hover:text-white border hover:scale-105 duration-300 rounded-xl p-2 my-2 py-2 cursor-pointer hover:border-black font-style: italic uppercase font-semibold border-teal-300 flex">
                <MdHelp size={25} className="mr-2" /> About Us
              </li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
