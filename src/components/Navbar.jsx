import React, { useState } from "react";
import { Link } from "react-router-dom";
import menuItems from "../assets/lib/menuItems";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="bg-white text-black px-4 sm:px-6 py-4 shadow-md fixed top-0 w-full z-50 backdrop-blur-3xl font-semibold">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4 sm:space-x-6 flex-shrink-0">
          <Link to="/">
            <img
              src="/img/imageedit_1_9737649523.png"
              alt="Logo"
              className="h-10"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {menuItems.map((item, index) =>
            item.isDropdown ? (
              <div key={index} className="relative group">
                <button
                  className="text-base hover:text-yellow-600"
                  onClick={() =>
                    setOpenDropdown(openDropdown === index ? null : index)
                  }
                  aria-haspopup="true"
                  aria-expanded={openDropdown === index}
                >
                  {item.name} ▾
                </button>
                {openDropdown === index && (
                  <div
                    className="absolute left-0 mt-2 bg-[#eceaeaeb] text-black font-semibold p-2 rounded shadow-lg z-50 w-52"
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
                          className="block px-4 py-2 text-sm rounded hover:text-yellow-600"
                        >
                          {sub.name}
                        </a>
                      ) : (
                        <Link
                          key={subIndex}
                          to={sub.link}
                          className="block px-4 py-2 text-sm rounded hover:text-yellow-600"
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
                className="text-base hover:text-yellow-600"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={index}
                to={item.link}
                className="text-base hover:text-yellow-600"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* Hamburger Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="text-black"
          >
            <svg
              className="w-7 h-7"
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
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden w-full mt-4 flex flex-col space-y-4 px-4 sm:px-6 py-4 bg-white shadow-md z-40 rounded-b-lg transition-all duration-300 ease-in-out">
            {menuItems.map((item, index) =>
              item.isDropdown ? (
                <div key={index} className="w-full">
                  <button
                    className="text-base font-medium hover:text-yellow-600 text-left w-full flex justify-between items-center"
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                    aria-haspopup="true"
                    aria-expanded={openDropdown === index}
                  >
                    {item.name} ▾
                  </button>
                  {openDropdown === index && (
                    <div className="bg-[#eceaeaeb] text-black font-medium p-2 rounded mt-2 shadow-lg">
                      {item.subMenu.map((sub, subIndex) =>
                        sub.link.startsWith("http") ? (
                          <a
                            key={subIndex}
                            href={sub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-sm rounded hover:text-yellow-600"
                          >
                            {sub.name}
                          </a>
                        ) : (
                          <Link
                            key={subIndex}
                            to={sub.link}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-sm rounded hover:text-yellow-600"
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
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium hover:text-yellow-600"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={index}
                  to={item.link}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium hover:text-yellow-600"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
