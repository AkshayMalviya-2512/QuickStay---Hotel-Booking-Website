import React from 'react'
import { assets } from "../../assets/assets";
import { UserButton } from "@clerk/clerk-react";
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="flex justify-between items-center px-6 py-3 bg-white border-b">

            {/* Logo */}
            <Link to='/'>
                <img src={assets.logo} alt="logo" 
                className='flex items-center gap-2 invert h-9'/>
            </Link>

            {/*User Profile */}
            <div className="flex items-center gap-4">
                <UserButton afterSignOutUrl="/"
                appearance={{elements: {avatarBox: "w-9 h-9"}}} />
            </div>
        </div>
    );
};

export default Navbar;



