import React, { useState } from 'react'
import Title from '../Components/Title'
import { userBookingsDummyData, assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const MyBookings = () => {

    const [filter, setFilter] = useState("all");
    const [bookings, setBookings] = useState(userBookingsDummyData);

    const navigate = useNavigate();

    const filteredBookings = bookings.filter((booking) => {
        if (filter === "all") 
            return true;

        const today = new Date();
        const checkOut = new Date(booking.checkOutDate);

        if (filter === "upcoming"){
            return checkOut >= today;
        }

        if (filter === "past") {
            return checkOut < today;
        }
        return true;
    });

    const cancelBooking = (id) => {
        const updatedBookings = bookings.filter((b) => b._id !== id);
        setBookings(updatedBookings);
    };
    
  return (
    <div className="pt-28 px-6 md:px-16 lg:px-24 xl:px-32">

        {/* Page Title */}
        <Title title="My Bookings" subtitle="Easily manage your past, current, and upcoming hotel reservations in one place.
        Plan your trips seamlessly with just a few clicks." 
        align="left" font="Roboto" sfont="Open Sans"/>

        {/* Filter Buttons */}
        <div className="flex gap-4 mb-8">

            <button onClick={() => setFilter("all")} 
            className={`px-4 py-2 rounded-full border ${filter === "all" ? "bg-black text-white" : "bg-white text-gray-700"}`}>
                All
            </button>

            <button onClick={() => setFilter("upcoming")} 
            className={`px-4 py-2 rounded-full border ${filter === "upcoming" ? "bg-black text-white" : "bg-white text-gray-700"}`}>
                Upcoming
            </button>

            <button onClick={() => setFilter("past")} 
            className={`px-4 py-2 rounded-full border ${filter === "past" ? "bg-black text-white" : "bg-white text-gray-700"}`}>
                Past
            </button>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-3 text-gray-500 border-b pb-4 mt-6 mb-6 font-medium">
            <p>Hotels</p>
            <p>Date & Timings</p>
            <p>Payment</p>
        </div>

        {/* Bookings List */}
        {filteredBookings.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <img src={assets.homeIcon} alt="no bookings" className="w-14 opacity-50 mb-4"/>

                <h3 className="w-14 opacity-50 mb-4">
                    No Bookings Found
                </h3>

                <p className="text-gray-500 mb-6 max-w-sm">
                    Looks like you haven't booked any rooms yet. 
                    Start exploring hotels and plan your next stay.
                </p>

                <button onClick={() => navigate("/rooms")}
                className="bg-black text-white px-6 py-2 rounded-full hover:opacity-90">
                    Explore Rooms
                </button>
            </div>
        ) : (
            <div className="space-y-6">
                {filteredBookings.map((booking) => {

                    const room = booking.room;
                    const hotel = room.hotel;

                    return(
                        <div key={booking._id} onClick={() => navigate(`/rooms/${room._id}`)}
                        className="grid grid-cols-3 items-center border-b pb-6 hover:bg-gray-50 transition">

                            {/* Hotel Info */}
                            <div className="flex gap-4">
                                <img src={room.images[0]} className="w-24 h-20 object-cover rounded-lg" />
                                <div>
                                    <h3 className="font-medium text-lg">
                                        {hotel.name}
                                        <span className="text-gray-500 text-sm ml-2">
                                            ({room.roomType})
                                        </span>
                                    </h3>

                                    <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                                        <img src={assets.locationIcon} className="w-4" />
                                        {hotel.city}
                                    </div>

                                    <p className="text-sm text-gray-500 mt-1">
                                        Guests: {booking.guests}
                                    </p>

                                    <p className="text-sm font-medium">
                                        Total: ${booking.totalPrice}
                                    </p>
                                </div>
                            </div>

                            {/* Dates */}
                            <div className="text-sm">
                                <p>
                                    <span className="text-gray-500">Check-In:</span>
                                    <br />
                                    {new Date(booking.checkInDate).toDateString()}
                                </p>

                                <p className="mt-2">
                                    <span className="text-gray-500">Check-Out:</span>
                                    <br />
                                    {new Date(booking.checkOutDate).toDateString()}
                                </p>
                            </div>

                            {/* Payment */}
                            <div>
                                {booking.isPaid ? (
                                    <div className="flex items-center gap-2 text-green-600">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        Paid
                                    </div>
                                ) : (
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2 text-red-500">
                                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                            Not Paid
                                        </div>

                                        <button onClick={(e) => e.stopPropagation()}
                                        className="border px-4 py-1 max-w-xs h-full rounded-full text-sm duration-500 bg-indigo-600 text-white hover:bg-cyan-600 cursor-pointer hover:shadow-lg hover:scale-105">
                                            Pay Now
                                        </button>

                                        <button onClick={(e) => {
                                            e.stopPropagation();
                                            cancelBooking(booking._id);
                                        }} className="text-red-500 text-sm hover:underline cursor-pointer">
                                            Cancel Booking
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        )}
    </div>
  );
};


export default MyBookings;




