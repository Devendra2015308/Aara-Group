import React, { useState } from "react";
import { GrMenu } from "react-icons/gr";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top Contact Bar */}
      <div className="bg-orange-500 text-white py-2 shadow-lg z-10">
        <div className="container mx-auto flex justify-between items-center px-12">
          <span className="text-lg font-bold">
            Email:{" "}
            <a href="mailto:swamiabhyanand@gmail.com">
              swamiabhyanand@gmail.com
            </a>
          </span>
          <span className="text-lg font-bold">
            Call Now! <a href="tel:8881810100">8881810100</a>
          </span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-[#f8f8dc] ">
        <div className="container mx-auto flex flex-row items-center justify-between px-20 py-4">
          {/* Logo (Center on Mobile) */}
          <div className="mb-2 md:mb-0">
            <img
              src="/src/assets/logo.png"
              alt="Logo"
              className="w-16 h-16 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 text-gray-600 text-lg font-semibold text-nowrap">
            {[
              "Home",
              "About",
              "Blog",
              "Gallery",
              "Donate",
              "Event",
              "E-Books",
              "Contact Us",
            ].map((item) => (
              <li key={item} className="hover:text-orange-500 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <GrMenu size={30} />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-[#f8f8dc] shadow-md absolute w-full left-0 z-10">
            <ul className="flex flex-col px-12 mb-4 items-start justify-center space-y-4 text-gray-700 text-lg font-semibold">
              {[
                "Home",
                "About",
                "Blog",
                "Gallery",
                "Donate",
                "Event",
                "E-Books",
                "Contact Us",
              ].map((item) => (
                <li key={item} className="hover:text-black cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
