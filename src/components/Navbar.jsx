import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import menuItems from "../assets/lib/menuItems";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".navbar-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setOpenDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`bg-white text-black px-4 sm:px-6 py-4 shadow-md fixed top-0 w-full z-50 backdrop-blur-3xl font-semibold transition-all duration-300 ${
        isScrolled ? "py-3" : "py-4"
      }`}
    >
      <div className="w-full mx-auto flex flex-wrap items-center justify-between navbar-container">
        {/* Logo */}
        <div className="flex items-center space-x-4 sm:space-x-6 flex-shrink-0">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img
              src="/img/imageedit_1_9737649523.png"
              alt="Logo"
              className={`h-10 transition-all duration-300 ${
                isScrolled ? "h-9" : "h-10"
              }`}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {menuItems.map((item, index) =>
            item.isDropdown ? (
              <div key={index} className="relative group">
                <button
                  className="text-base xl:text-md  hover:text-yellow-600 transition-colors duration-200 flex items-center"
                  onClick={() =>
                    setOpenDropdown(openDropdown === index ? null : index)
                  }
                  onMouseEnter={() => setOpenDropdown(index)}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === index}
                >
                  {item.name}
                  <span className="ml-1">▾</span>
                </button>
                {openDropdown === index && (
                  <div
                    className="absolute left-0 mt-2 bg-[#eceaeaeb] text-black font-semibold p-2 rounded shadow-lg z-50 w-52 min-w-max"
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
                          className="block px-4 py-2 text-sm xl:text-base rounded hover:text-yellow-600 hover:bg-gray-100 transition-colors duration-200"
                        >
                          {sub.name}
                        </a>
                      ) : (
                        <Link
                          key={subIndex}
                          to={sub.link}
                          className="block px-4 py-2 text-sm xl:text-base rounded hover:text-yellow-600 hover:bg-gray-100 transition-colors duration-200"
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
                className="text-base xl:text-md hover:text-yellow-600 transition-colors duration-200"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={index}
                to={item.link}
                className="text-base xl:text-md  hover:text-yellow-600 transition-colors duration-200"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="text-black p-1 rounded-md hover:bg-gray-100 transition-colors duration-200"
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
        <div
          className={`lg:hidden w-full fixed left-0 bg-white shadow-lg z-40 transition-all duration-300 ease-in-out ${
            isOpen
              ? "top-20 opacity-100 visible"
              : "top-[-100%] opacity-0 invisible"
          }`}
        >
          <div className="px-4 sm:px-6 py-4 border-t border-gray-100">
            {menuItems.map((item, index) =>
              item.isDropdown ? (
                <div key={index} className="w-full mb-2 last:mb-0">
                  <button
                    className="text-base font-medium hover:text-yellow-600 text-left w-full flex justify-between items-center py-2 px-2 rounded hover:bg-gray-50 transition-colors duration-200"
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                    aria-haspopup="true"
                    aria-expanded={openDropdown === index}
                  >
                    <span>{item.name}</span>
                    <span className="transform transition-transform duration-200">
                      {openDropdown === index ? "▴" : "▾"}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openDropdown === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="bg-gray-50 text-black font-medium p-2 rounded mt-1 ml-2">
                      {item.subMenu.map((sub, subIndex) =>
                        sub.link.startsWith("http") ? (
                          <a
                            key={subIndex}
                            href={sub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-sm rounded hover:text-yellow-600 hover:bg-gray-100 transition-colors duration-200"
                          >
                            {sub.name}
                          </a>
                        ) : (
                          <Link
                            key={subIndex}
                            to={sub.link}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-sm rounded hover:text-yellow-600 hover:bg-gray-100 transition-colors duration-200"
                          >
                            {sub.name}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ) : item.link.startsWith("http") ? (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium hover:text-yellow-600 py-2 px-2 rounded hover:bg-gray-50 transition-colors duration-200"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={index}
                  to={item.link}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium hover:text-yellow-600 py-2 px-2 rounded hover:bg-gray-50 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
