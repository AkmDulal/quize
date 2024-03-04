import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };

  return (
    <div className="container m-auto">
      <div className="grid grid-cols-3 gap-4">
        <div className="">
          <img className="w-[20%]" src={Logo} alt="" />
        </div>
        <div className="flex items-center justify-center">
            <Link className="text-[#fff] px-[15px] font-[600]" to="/"> Subscription </Link>
            <Link className="text-[#fff] px-[15px] font-[600]" to="/"> Score </Link>
            <Link className="text-[#fff] px-[15px] font-[600]" to="/"> Quiz History </Link>
            <Link className="text-[#fff] px-[15px] font-[600]" to="/"> Redeem History </Link>
        </div>
        <div className="flex items-center justify-end">
            <div className="relative inline-block text-left">
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border shadow-sm px-4 py-2 bg-[#ef5073] text-sm font-medium text-[#fff] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          My Account
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-.707.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isDropdownOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="py-1" role="none">
              <Link to="/"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Item 1
              </Link>
            </div>
          </div>
        )}
      </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
