import React from "react";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="bg-white text-black px-6 py-4 flex items-center justify-between backdrop-blur-3xl z-50 font-semibold fixed top-0 w-full ">
      <div className="flex items-center space-x-6">
        <img
          src="/img/imageedit_1_9737649523.png"
          alt="Logo"
          className="h-10"
        />
        <a href="/" className="text-sm hover:text-yellow-600">
          Home
        </a>
        <a href="/events" className="text-sm hover:text-yellow-600">
          Event +
        </a>

        {/* Dropdown Fix */}
        <div className="relative group">
          <button className="text-sm hover:text-yellow-600">
            Product & Services ▾
          </button>
          <div className="absolute hidden group-hover:block  bg-[#eceaeaeb] text-black font-semibold p-2 rounded top-full left-0 w-40 shadow-lg z-50">
            <a
              href="http://hondoc.indianschoolconsortium.com/"
              className="block px-4 py-2 rounded hover:text-yellow-600"
            >
              Honorary Doctorate
            </a>
            <a
              href="http://mechtech.employmentexpress.net/"
              className="block px-4 py-2 rounded hover:text-yellow-600"
            >
              Production Engineer
            </a>
            <a
              href="http://webdev.employmentexpress.net/"
              className="block px-4 py-2 rounded hover:text-yellow-600"
            >
              Web Developer
            </a>
            <a
              href="http://daboot.employmentexpress.net/"
              className="block px-4 py-2 rounded hover:text-yellow-600"
            >
              Data Analyst
            </a>
          </div>
        </div>

        <a
          href="https://employmentexpress.org/"
          target="_blank"
          className="text-sm hover:text-yellow-600"
        >
          Diploma Courses
        </a>
        <a href="#" className="text-sm hover:text-yellow-600">
          Become a Member
        </a>
        <a href="/contactus" className="text-sm hover:text-gray-400">
          Contact Us
        </a>
        <a href="#" className="text-sm hover:text-gray-400">
          About Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
