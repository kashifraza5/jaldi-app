// import React, { useState } from "react";

// const DropDown = ({name,tabsData}) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState("active");

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen); // Toggle the dropdown visibility
//   };

//   return (
//     <div className="">
//       <button
//         id="dropdownUsersButton"
//         onClick={toggleDropdown} // Trigger toggle function on click
//         className="text-blue-900  bg-[#f2f4fa] w-auto px-4  font-medium rounded-lg text-sm  py-1.5 text-center inline-flex items-center "
//         type="button"
//       >
//         Detail
//         <svg
//           className="w-2.5 h-2.5 ms-3"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 10 6"
//         >
//           <path
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="m1 1 4 4 4-4"
//           />
//         </svg>
//       </button>

//       {/* Dropdown menu */}
//       <div className="relative">
//         <div
//           id="dropdownSearch"
//           className={`${
//             isOpen ? "block" : "hidden"
//           } z-10 absolute top-[10px] right-[30px]  bg-white rounded-lg shadow w-[30vw] dark:bg-gray-700`}
//         >
//           <div className="py-1 ">
//             <h1 className="text-left inter-font p-2 text-[16px] font-bold border-b border-gray-500">
//               Campaign
//             </h1>
//             <div className="block py-2 text-sm text-gray-700">
//               {/* Tab Component */}
//               <div className="w-full rounded-lg  p-">
//                 {/* Tabs */}
//                 <div className="flex h-6 w-full px-3 bg-white mb-4">
//                   <button
//                     // onMouseDown={(e) => e.preventDefault()}
//                     onClick={() => setActiveTab("active")}
//                     className={`w-full  text-center rounded-l-lg inter-font transition-colors duration-200 mr-[2px] ${
//                       activeTab === "active"
//                         ? "bg-blue-900 text-white"
//                         : "bg-gray-400 text-gray-800"
//                     }`}
//                   >
//                     Active
//                   </button>
//                   <button
//                     // onMouseDown={(e) => e.preventDefault()}
//                     onClick={() => setActiveTab("archived")}
//                     className={`w-full  text-center  transition-colors duration-200 mr-[2px] ${
//                       activeTab === "archived"
//                         ? "bg-blue-900 text-white"
//                         : "bg-gray-400 text-gray-800"
//                     }`}
//                   >
//                     Archived
//                   </button>
//                   <button
//                     // onMouseDown={(e) => e.preventDefault()}
//                     onClick={() => setActiveTab("onPause")}
//                     className={`w-full  text-center rounded-r-lg  transition-colors duration-200 mr-2 ${
//                       activeTab === "onPause"
//                         ? "bg-blue-900 text-white"
//                         : "bg-gray-400 text-gray-800"
//                     }`}
//                   >
//                     On Pause
//                   </button>
//                 </div>

//                 {/* Content */}
//                 <div className="tab-content mt-3 px-">
//                   {activeTab === "active" && (
//                     <div>
//                       <div className="px-3">
//                         {" "}
//                         <label htmlFor="input-group-search" className="sr-only">
//                           Search
//                         </label>
//                         <div className="relative">
//                           <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
//                             <svg
//                               className="w-4 h-4 text-gray-500 dark:text-gray-400"
//                               aria-hidden="true"
//                               xmlns="http://www.w3.org/2000/svg"
//                               fill="none"
//                               viewBox="0 0 20 20"
//                             >
//                               <path
//                                 stroke="currentColor"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                               />
//                             </svg>
//                           </div>
//                           <input
//                             type="text"
//                             id="input-group-search"
//                             className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-offset-2 outline-none  focus:border-blue-900 dark:bg-blue-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-900 dark:focus:border-blue-900"
//                             placeholder="Search user"
//                           />
//                         </div>
//                       </div>
//                       <div className="py-2 space-y-1 px-3 text-left">
//                         <div className="mb-2">
//                           <input
//                             type="checkbox"
//                             id="secondary-sales"
//                             className="mr-2"
//                           />
//                           <label htmlFor="Created-By-Agent">
//                             Created By Agent
//                           </label>
//                         </div>
//                         <div className="mb-2 flex items-center">
//                           <input
//                             type="checkbox"
//                             id="leasing"
//                             className="mr-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
//                           />
//                           <label htmlFor="Select-ALL" className="text-gray-700">
//                             Select ALL
//                           </label>
//                         </div>
//                       </div>
//                       <div className="border-b border-gray-400"></div>

//                       <div className="py-2 overflow-visible px-3 text-left">
//                         <div className="mb-2">
//                           <input
//                             type="checkbox"
//                             id="secondary-sales"
//                             className="mr-2"
//                           />
//                           <label htmlFor="Created-By-Agent">
//                             Created By Agent
//                           </label>
//                         </div>
//                         <div className="mb-2 flex items-center">
//                           <input
//                             type="checkbox"
//                             id="leasing"
//                             className="mr-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
//                           />
//                           <label htmlFor="Select-ALL" className="text-gray-700">
//                             Select ALL
//                           </label>
//                         </div>
//                       </div>

//                       <div className="px-3">
//                         <button className="w-full  bg-yellow-400 text-gray-900 py-2 rounded-lg hover:bg-yellow-500">
//                           Apply
//                         </button>
//                       </div>
//                     </div>
//                   )}
//                   {activeTab === "archived" && (
//                     <div className="text-gray-600">No campaign found.</div>
//                   )}
//                   {activeTab === "onPause" && (
//                     <div className="text-gray-600">No campaign found.</div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DropDown;
