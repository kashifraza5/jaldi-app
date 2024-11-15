import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const RightSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`h-screen overflow-hidden ${
        isOpen ? "w-[20vw]" : "w-[4vw]"
      } bg-[#F9FAFB] transition-all duration-300`}
    >
      {/* Toggle Button */}
      <div className="relative">
        <div className="absolute left-0 px-2 top-4">
          <div
            onClick={toggleSidebar}
            className="bg-slate-500 text-white cursor-pointer p-2 rounded-full flex items-center justify-center shadow-md"
          >
            <FaRegCheckCircle className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Content */}
      {isOpen && (
        <div className="p-4 text-white">
          {/* No content as per your request */}
        </div>
      )}
    </div>
  );
};

export default RightSidebar;
