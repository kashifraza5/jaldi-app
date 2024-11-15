import React from "react";
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <LeftSidebar />
      <div className=" px-8 w-full scroll-container overflow-auto h-screen">
        <Navbar />
        <div className=" mt-4 ">
          <Outlet />
        </div>
      </div>
      <RightSidebar />
    </div>
  );
};

export default Layout;
