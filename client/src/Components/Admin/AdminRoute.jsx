import React from 'react'
import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({children}) => {

    const { isSignedIn, isLoaded } = useUser();

    if(!isLoaded)
        return null;

    const hotelRegistered = localStorage.getItem("hotelRegistered") === "true";

    if(!isSignedIn){
        return <Navigate to='/' />
    }

    if(!hotelRegistered){
        return <Navigate to='/register-hotel' />
    }

    return children;
};

export default AdminRoute