import React from 'react'
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const Sidebar = () => {
    return (
        <div className="w-60 bg-white border-r min-h-screen">
            <div className="p-6 flex flex-col gap-3 text-gray-600">

                <NavLink to="/admin" 
                className="flex items-center gap-3 p-2 rounded hover:bg-gray-100">
                    <img src={assets.dashboardIcon} className="w-5"/>
                    DashBoard
                </NavLink>

                <NavLink to="/admin/add-rooms" 
                className="flex items-center gap-3 p-2 rounded hover:bg-gray-100">
                    <img src={assets.addIcon} className="w-5"/>
                    Add Rooms
                </NavLink>

                <NavLink to="/admin/list-rooms" 
                className="flex items-center gap-3 p-2 rounded hover:bg-gray-100">
                    <img src={assets.listIcon} className="w-5"/>
                    List Rooms
                </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;