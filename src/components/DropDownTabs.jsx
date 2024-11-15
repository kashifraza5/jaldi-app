import  { useState, useRef, useEffect } from "react";

const DropDown = ({
  buttonName,
  dropdownHeader,
  tabs,
  tabContent,
  searchPlaceholder,
  checkboxOptions,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const dropdownRef = useRef(null); 

  // Toggle dropdown open/close
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicked outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false); // Close the dropdown
    }
  };

  useEffect(() => {
    // Add event listener to detect outside clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <button
        id="dropdownUsersButton"
        onClick={toggleDropdown}
        className="text-blue-900 bg-[#f2f4fa] w-auto px-4 font-medium rounded-lg text-sm py-1.5 text-center inline-flex items-center"
        type="button"
      >
        {buttonName}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      <div ref={dropdownRef} className="relative">
        <div
          id="dropdownSearch"
          className={`${
            isOpen ? "block" : "hidden"
          } z-10 absolute top-[10px] right-[30px] bg-white rounded-lg shadow w-[30vw] dark:bg-gray-700`}
        >
          <div className="py-1">
            <h1 className="text-left inter-font p-2 text-[16px] font-bold border-b border-gray-500">
              {dropdownHeader}
            </h1>
            <div className="block py-2 text-sm text-gray-700">
              {/* Tab Component */}
              <div className="w-full rounded-lg p-">
                {/* Tabs */}
                <div className="flex h-6 w-full px-3 bg-white mb-4">
                  {tabs.map((tab, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(tab.name)} // Set active tab on click
                      className={`w-full text-center ${
                        index === 0 ? "rounded-l-lg" : ""
                      } ${
                        index === tabs.length - 1 ? "rounded-r-lg" : ""
                      } inter-font transition-colors duration-200 mr-[2px] ${
                        activeTab === tab.name
                          ? "bg-blue-900 text-white"
                          : "bg-gray-400 text-gray-800"
                      }`}
                    >
                      {tab.name} {/* Tab name passed as a prop */}
                    </button>
                  ))}
                </div>

                {/* Content */}
                <div className="tab-content mt-3 px-">
                  {tabContent[activeTab]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
