import React from "react";
import { CiExport } from "react-icons/ci";
import { IoHelpCircleOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="  w-full text-black  h-20 flex items-center justify-between  ">
      {/* Logo */}
      <div className="   text-2xl font-bold cursor-pointer hover:text-gray-400">
        <h2 className="border-b-4 lato-light inter-font border-yellow-400">
          Dashboard
        </h2>
        <div className=""></div>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-row items-center space-x-6">
        {/* Export Section */}
        <div className="flex items-center space-x-2 lato-light">
          <CiExport className="w-4 h-4" />
          <span className="text-[16px] inter-font">Export</span>
        </div>

        {/* Help Section */}
        <div className="flex items-center space-x-2 lato-light">
          <IoHelpCircleOutline className="w-4 h-4" />
          <span className="text-[16px] inter-font">Need Help</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
