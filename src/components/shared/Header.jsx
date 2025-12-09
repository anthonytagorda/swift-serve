import React from "react";
import { FaSearch, FaUserCircle, FaBell } from "react-icons/fa";
import logo from "../../assets/images/swift-serve-logo.svg";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
      {/* LOGO */}
      <div className="flex items-center gap-2">
        <img src={logo} className="h-13 w-35" alt="swift serve logo" />
        <h1 className="text-lg font-semibold text-[#f5f5f5]"></h1>
      </div>

      {/* SEARCH */}
      <div className="flex items-center gap-3 bg-gray-100 border border-gray-200 rounded-xl px-5 py-2 w-[500px] shadow-sm">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-gray-700 placeholder-gray-400 w-full"
        />
      </div>
      {/* LOGGED USER DETAILS */}
      <div className="flex items-center gap-4">
        <div className="bg-gray-200 rounded-[15px] p-3 cursor-pointer">
          <FaBell className="text-[#5a2f11] text-2xl" />
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <FaUserCircle className="text-[#5a2f11] text-4xl" />
          <div className="flex flex-col items-start">
            <h1 className="text-md text-[#9D5623] font-semibold">
              Freen Armstrong
            </h1>
            <p className="text-xs text-[#ababab] font-medium">Cashier</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
