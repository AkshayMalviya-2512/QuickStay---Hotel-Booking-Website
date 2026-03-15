import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Admin/Navbar";
import Sidebar from "../../Components/Admin/Sidebar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <div className="flex-1 p-8">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default Layout;