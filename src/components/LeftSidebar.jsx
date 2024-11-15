import  { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import jaldiLogo from "../assets/images/Logo.png";
import { FaMobileRetro } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineContactMail } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { IoHelpCircleOutline } from "react-icons/io5";
import { MdCampaign } from "react-icons/md";
import { FaPersonCirclePlus } from "react-icons/fa6";

import { MdOutlineLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const LeftSidebar = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex flex-col shrink-0  justify-between bg-[#F9FAFB] text-black h-screen ${
        isOpen ? "w-[20vw]" : "w-[6vw]"
      }`}
    >
      {/* Sidebar Content */}
      <div>
        {/* Logo Section */}
        <div
          className={`p-4 flex  ${isOpen ? "justify-start" : "justify-center"}`}
        >
          <img
            src={jaldiLogo}
            className={`${isOpen ? "w-[20%] h-[20%]" : "w-[100%] h-[100%]"}`}
            alt="Logo"
          />
        </div>
        <div className="border-gray-300 border-b w-full"></div>

        {/* Multi Planet Section */}
        <div
          className={`flex p-4 space-x-2 text-[#244494] ${"justify-start p-4"}`}
        >
          <FaMobileRetro
            className={` ${isOpen ? "w-[20%] h-[20%] " : "w-[65%] h-[65%]"}`}
          />
          {isOpen && (
            <div className="truncate">Multi Planet property Managment LLC</div>
          )}
        </div>
        <div className="border-gray-300 border-b w-full"></div>

        {/* Toggle Button */}
        <div className="p-4">
          <div
            className="bg-gray-300 w-9 h-8 flex items-center justify-center rounded cursor-pointer"
            onClick={toggleSidebar}
          >
            {isOpen ? (
              <FaAngleLeft className="w-5 h-5" />
            ) : (
              <FaChevronRight className="w-4 h-4" />
            )}
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col p-4 space-y-5">
          <div
            onClick={() => navigate("/")}
            className={`flex cursor-pointer items-center ${
              isOpen ? "space-x-7" : ""
            }`}
          >
            <RxDashboard className="w-6 h-6" />
            {isOpen && <div>DashBoard</div>}
          </div>

          <div
            className={`flex cursor-pointer items-center ${
              isOpen ? "space-x-7" : ""
            }`}
          >
            <MdOutlineContactMail className="w-7 h-7" />
            {isOpen && <div>Leads</div>}
          </div>

          <div
            className={`flex cursor-pointer items-center ${
              isOpen ? "space-x-7" : ""
            }`}
            onClick={() => navigate("/campaign")}
          >
            <MdCampaign className="w-7 h-7" />
            {isOpen && <div>Campagin</div>}
          </div>

          <div
            className={`flex cursor-pointer items-center ${
              isOpen ? "space-x-7" : ""
            }`}
            onClick={() => navigate("/addagent")}
          >
            <FaPersonCirclePlus className="w-7 h-7" />
            {isOpen && <div>Add Agent</div>}
          </div>
        </div>
      </div>

      {/* Bottom Section with Settings, Help, and Logout */}
      <div className="flex flex-col p-4 space-y-5">
        <div className={`flex items-center ${isOpen ? "space-x-7" : ""}`}>
          <CiSettings className="w-8 h-8" />
          {isOpen && <div>Settings</div>}
        </div>

        <div className={`flex items-center ${isOpen ? "space-x-7" : ""}`}>
          <IoHelpCircleOutline className="w-8 h-8" />
          {isOpen && <div>Help</div>}
        </div>

        <div className={`flex items-center ${isOpen ? "space-x-7" : ""}`}>
          <MdOutlineLogout className="w-8 h-8" />
          {isOpen && <div>Logout</div>}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
