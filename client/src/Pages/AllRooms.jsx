import React, { useState } from 'react'
import { assets, roomsDummyData, facilityIcons } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import StarRating from '../Components/StarRating';

const AllRooms = () => {

    const navigate = useNavigate();


    const [selectedFilters, setSelectedFilters] = useState({
        roomTypes: [],
        priceRanges: [],
        sortBy: ""
    });

    const handleClearFilters = () => {
        setSelectedFilters({
            roomTypes: [],
            priceRanges: [],
            sortBy: ""
        });
    };

    const handleCheckBoxChnage = (category, value, checked) => {
        setSelectedFilters(prev => ({
            ...prev,
            [category]: checked? [...prev[category], value]
            : prev[category].filter(item => item !== value)
        }));
    };

    return (
        <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32 gap-10'>

            {/*  LEFT — ROOMS */}
            <div className="flex-1">

                {/* Heading */}
                <div className='flex flex-col items-start text-start'>
                    <h1 className='font-playfair text-4xl md:text-[40px] text-indigo-500'>
                    Hotel Rooms
                    </h1>

                    <p className='font-roboto text-lg text-gray-500/90 mt-2 max-w-2xl'>
                    Take advantage of our limited time offers and special deals on our premium rooms to enhance your stay and create unforgettable memories.
                    </p>
                </div>

                {/* Rooms List */}
                <div className="mt-10 space-y-10">

                    {roomsDummyData.map((room) => (
                        <div
                            key={room._id}
                            className="flex flex-col md:flex-row gap-6 border-b pb-8">
                                {/* Image */}
                                <img
                                    onClick={() => {
                                    navigate(`/rooms/${room._id}`);
                                    scrollTo(0, 0);
                                }}
                                src={room.images?.[0]}
                                alt="hotel img"
                                title='View Room Details'
                                className='h-56 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer'/>

                                {/* Info */}
                                <div className='md:w-1/2 flex flex-col gap-2'>
                                    <p className='text-gray-400'>
                                        {room.hotel?.city}
                                    </p>
                                    <p
                                    onClick={() => {
                                        navigate(`/rooms/${room._id}`);
                                        scrollTo(0, 0);
                                    }}
                                    className='text-gray-600 text-2xl font-playfair cursor-pointer'>
                                        {room.hotel?.name}
                                    </p>

                                    {/*  Rating */}
                                    <div className='flex items-center'>
                                        <StarRating rating={room.hotel?.rating} />
                                        <p className='ml-2 text-sm text-gray-500'>
                                        200+ reviews
                                        </p>
                                    </div>

                                    {/* Amenities */}
                                    <div className="flex flex-wrap gap-3 mt-3">
                                        {room.amenities?.slice(0, 3).map((item, idx) => (
                                            <div key={idx}
                                            className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg text-xs text-gray-600">
                                                <img src={facilityIcons?.[item]} alt={item}   className="w-4 h-4" />
                                                <span>{item.toLowerCase()}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/*  Address */}
                                    <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm'>
                                        <img src={assets.locationIcon} alt="location icon" />
                                        <span>{room.hotel?.address}</span>
                                    </div>

                                    {/*  Price */}
                                    <p className="text-xl font-semibold mt-2">
                                    ${room.pricePerNight} / day
                                    </p>

                                </div>
                        </div>
                        ))}

                </div>
            </div>

            {/*  RIGHT — FILTERS */}
            <div className="w-full lg:w-80">
                <div className="border rounded-xl p-5 sticky top-24 bg-white">

                    {/* Header */}
                    <div className="flex items-center justify-between mb-5">
                        <h2 className="font-semibold text-lg text-gray-800">
                            FILTERS
                        </h2>
                        <button onClick={handleClearFilters}
                        className="text-sm text-gray-500 hover:text-indigo-500">
                            CLEAR
                        </button>
                    </div>

                    {/* Popular Filters */}
                    <div className="mb-6">
                        <p className="text-sm font-medium text-gray-700 mb-3">
                            Popular filters
                        </p>

                        <div className="space-y-2 text-sm text-gray-600">

                            <label className="flex items-center gap-2">
                                <input type="checkbox" 
                                checked={selectedFilters.roomTypes.includes("Single Bed")} 
                                onChange={(e) => 
                                    handleCheckBoxChnage("roomTypes", "Single Bed", e.target.checked)
                                    } className="accent-indigo-500"/>
                                    Single Bed
                                </label>

                            <label className="flex items-center gap-2">
                                <input type="checkbox" 
                                checked={selectedFilters.roomTypes.includes("Family Suite")}
                                onChange={(e) => 
                                    handleCheckBoxChnage("roomTypes", "Family Suite", e.target.checked)
                                } className="accent-indigo-500"/>
                                    Family Suite
                                </label>

                            <label className="flex items-center gap-2">
                                <input type="checkbox" 
                                checked={selectedFilters.roomTypes.includes("Double Bed")}
                                onChange={(e) => 
                                    handleCheckBoxChnage("roomTypes", "Double Bed", e.target.checked)
                                } className="accent-indigo-500"/>
                                    Double Bed
                            </label>

                            <label className="flex items-center gap-2">
                                <input type="checkbox" 
                                checked={selectedFilters.roomTypes.includes("Luxury Room")}
                                onChange={(e) => 
                                    handleCheckBoxChnage("roomTypes", "Luxury Room", e.target.checked)
                                } className="accent-indigo-500"/>
                                    Luxury Room
                            </label>

                        </div>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                        <p className="text-sm font-medium text-gray-700 mb-3">
                            Price
                        </p>

                        <div className="space-y-2 text-sm text-gray-600">

                            <label className="flex items-center gap-2">
                                <input type="checkbox" 
                                checked={selectedFilters.priceRanges.includes("2500-5000")}
                                onChange={(e) => 
                                    handleCheckBoxChnage("priceRanges", "2500-5000", e.target.checked)
                                } className="accent-indigo-500"/>
                                    ₹2500 to ₹5000
                            </label>

                            <label className="flex items-center gap-2">
                                <input type="checkbox" 
                                checked={selectedFilters.priceRanges.includes("5000-8000")}
                                onChange={(e) => 
                                    handleCheckBoxChnage("priceRanges", "5000-8000", e.target.checked)
                                } className="accent-indigo-500"/>
                                    ₹5000 to ₹8000
                            </label>

                            <label className="flex items-center gap-2">
                                <input type="checkbox" 
                                checked={selectedFilters.priceRanges.includes("8000-15000")}
                                onChange={(e) => 
                                    handleCheckBoxChnage("priceRanges", "8000-15000", e.target.checked)
                                } className="accent-indigo-500"/>
                                    ₹8000 to ₹15000
                            </label>

                        </div>
                    </div>

                    {/* Sort By */}
                    <div>
                        <p className="text-sm font-medium text-gray-700 mb-3">
                            Sort By
                        </p>

                        <div className="space-y-2 text-sm text-gray-600">

                            <label className="flex items-center gap-2">
                                <input type="checkbox" />
                                    Price Low to High
                            </label>

                            <label className="flex items-center gap-2">
                                <input type="checkbox" />
                                    Price High to Low
                            </label>

                            <label className="flex items-center gap-2">
                                <input type="checkbox" />
                                    Newest First
                            </label>

                        </div>
                    </div>

                </div>
            </div>  

        </div>
    )
}

export default AllRooms