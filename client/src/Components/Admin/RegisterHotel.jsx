import React, { useState } from 'react'
import { assets, cities } from "../../assets/assets";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

const RegisterHotel = () => {

    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        city: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value 
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Hotel Registered:", formData);
        localStorage.setItem("hotelRegistered", "true");
        navigate("/admin");
    };

    useEffect(() => {
        const hotelRegistered = localStorage.getItem("hotelRegistered");
        if(hotelRegistered){
            navigate("/admin");
        }
    }, []);

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl overflow-hidden flex w-[850px] shadow-xl">

                {/* LEFT IMAGE */}
                <div className="w-1/2 hidden md:block">
                    <img src={assets.regImage} className='w-full h-full object-cover' />
                </div>

                {/* FORM SECTION */}
                <div className="w-full md:w-1/2 p-8 relative">

                    {/* Close Button */}
                    <button onClick={onClose} 
                    className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl">
                        ✕
                    </button>

                    <h2 className="text-2xl font-semibold mb-6">
                        Register Your Hotel
                    </h2>

                    <form onSubmit={handleSubmit} className='space-y-4'>

                        {/* Hotel Name */}
                        <div>
                            <label className="text-sm text-gray-600">
                                Hotel Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder='Enter Hotel Name'
                                value={formData.name}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="text-sm text-gray-600">
                                Phone
                            </label>
                            <input
                                type="text"
                                name="phone"
                                placeholder='Enter Phone Number'
                                value={formData.phone}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Address */}
                        <div>
                            <label className="text-sm text-gray-600">
                                Address
                            </label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Type here"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-2 mt-1 outline-none"
                            />
                        </div>

                        {/*City */}
                        <div>
                            <label className="text-sm text-gray-600">
                                City
                            </label>
                            <select 
                                name="city" 
                                value={formData.city} onChange={handleChange}
                                className='w-full border rounded-lg p-2 mt-1 outline-none'>
                                    <option value="">Select City</option>
                                    {cities.map((city, index) => (
                                        <option key={index} value={city}>
                                            {city}
                                        </option>
                                    ))}
                            </select>
                        </div>

                        {/* Submit Button */}
                        <button type='submit'
                        className='bg-indigo-600 text-white w-full py-2 rounded-lg hover:bg-indigo-700 transition"'>
                            Register Hotel
                        </button>
                    </form>
                </div>
            </div>

            
        </div>
    );
};

export default RegisterHotel;