import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import { FaCircleDollarToSlot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#f8f8dc]">
    <footer className="max-w-[97.5%] mx-auto bg-[#D64A05] text-white py-6 px-4 md:px-4">
      <div className=" flex flex-col items-center justify-center text-center">
        {/* Text Section */}
        <p className="text-xl md:text-2xl font-semibold">
          ©2022 परम पूज्य परमादर्श आचार्य महामंडलेश्वर स्वामी श्री अभयानंद
          <br className="hidden md:block" />
          <span className="block md:inline font-bold md:ml-2">
            सरस्वती जी | ALL RIGHTS RESERVED
          </span>
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mt-4">
          <FaFacebookF className="text-white text-2xl cursor-pointer hover:text-gray-300 transition" />
          <FaTwitter className="text-white text-2xl cursor-pointer hover:text-gray-300 transition" />
          <FaLinkedinIn className="text-white text-2xl cursor-pointer hover:text-gray-300 transition" />
          <FaCircleDollarToSlot className="text-white text-2xl cursor-pointer hover:text-gray-300 transition" />
          <FaGoogle className="text-white text-2xl cursor-pointer hover:text-gray-300 transition" />
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
