import React, { useState } from "react";
import { Link } from "react-router-dom";
import menuItems from "../assets/lib/menuItems";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="bg-white text-black px-6 py-4 flex items-center justify-between backdrop-blur-3xl z-50 font-semibold fixed top-0 w-full shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-6">
        <Link to="/">
          <img
            src="/img/imageedit_1_9737649523.png"
            alt="Logo"
            className="h-10"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        {menuItems.map((item, index) =>
          item.isDropdown ? (
            <div key={index} className="relative">
              <button
                className="text-sm hover:text-yellow-600"
                onClick={() =>
                  setOpenDropdown(openDropdown === index ? null : index)
                }
              >
                {item.name} ▾
              </button>
              {openDropdown === index && (
                <div
                  className="absolute left-0 mt-2 bg-[#eceaeaeb] text-black font-semibold p-2 rounded shadow-lg z-50 w-48"
                  onMouseEnter={() => setOpenDropdown(index)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.subMenu.map((sub, subIndex) =>
                    sub.link.startsWith("http") ? (
                      <a
                        key={subIndex}
                        href={sub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 rounded hover:text-yellow-600"
                      >
                        {sub.name}
                      </a>
                    ) : (
                      <Link
                        key={subIndex}
                        to={sub.link}
                        className="block px-4 py-2 rounded hover:text-yellow-600"
                      >
                        {sub.name}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ) : item.link.startsWith("http") ? (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-yellow-600"
            >
              {item.name}
            </a>
          ) : (
            <Link
              key={index}
              to={item.link}
              className="text-sm hover:text-yellow-600"
            >
              {item.name}
            </Link>
          )
        )}
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md flex flex-col space-y-4 px-6 py-4">
          {menuItems.map((item, index) =>
            item.isDropdown ? (
              <div key={index} className="w-full">
                <button
                  className="text-sm hover:text-yellow-600 text-left w-full flex justify-between"
                  onClick={() =>
                    setOpenDropdown(openDropdown === index ? null : index)
                  }
                >
                  {item.name} ▾
                </button>
                {openDropdown === index && (
                  <div className="bg-[#eceaeaeb] text-black font-semibold p-2 rounded mt-2 shadow-lg">
                    {item.subMenu.map((sub, subIndex) =>
                      sub.link.startsWith("http") ? (
                        <a
                          key={subIndex}
                          href={sub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 rounded hover:text-yellow-600"
                        >
                          {sub.name}
                        </a>
                      ) : (
                        <Link
                          key={subIndex}
                          to={sub.link}
                          className="block px-4 py-2 rounded hover:text-yellow-600"
                        >
                          {sub.name}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ) : item.link.startsWith("http") ? (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-yellow-600"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={index}
                to={item.link}
                className="text-sm hover:text-yellow-600"
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
