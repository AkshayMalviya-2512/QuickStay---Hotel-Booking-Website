import React, { useMemo } from 'react'
import Title from '../../Components/Title';
import { userBookingsDummyData, roomsDummyData } from "../../assets/assets";

const Dashboard = () => {
    
    const totalBookings = userBookingsDummyData.length;

    const totalRevenue = userBookingsDummyData.reduce(
        (sum, booking) => sum + booking.totalPrice,0);

    return (
        <div className="min-h-screen bg-gray-50">
            
            <div className="flex">
                
                <div className="flex-1 p-8">
                    
                    {/* Title */}
                    <Title title="Dashboard" subtitle="Monitor your room listings, track bookings and analyze revenue." 
                    align="left" font="Roboto" sfont="Open Sans"/>

                    {/* Stats Cards */}
                    <div className="flex gap-6 mb-10 mt-4">
                        <div className="bg-white border rounded-lg p-5 w-52">
                            <p className="text-blue-600 font-medium">
                                Total Bookings
                            </p>

                            <h2 className="text-2xl font-bold mt-2">
                                {totalBookings}
                            </h2>
                        </div>

                        <div className="bg-white border rounded-lg p-5 w-52">
                            <p className="text-blue-600 font-medium">
                                Total Revenue
                            </p>

                            <h2 className="text-2xl font-bold mt-1">
                                ${totalRevenue}
                            </h2>
                        </div>
                    </div>

                    {/* Recent Bookings Table */}
                    <div className="bg-white border rounded-lg">

                        <h2 className="p-4 font-semibold border-b">
                            Recent Bookings
                        </h2>

                        <table className="w-full text-sm">

                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="text-left p-3">User Name</th>
                                    <th className="text-left p-3">Room Name</th>
                                    <th className="text-left p-3">Total Amount</th>
                                    <th className="text-left p-3">Payment Status</th>
                                </tr>
                            </thead>
                            <thead>

                                {userBookingsDummyData.map((booking) => (
                                    <tr key={booking._id} className="border-t">
                                        <td className="p-3">
                                            {booking.user.name}
                                        </td>
                                        <td className="p-3">
                                            {booking.room.roomType}
                                        </td>
                                        <td className="p-3">
                                            ${booking.totalPrice}
                                        </td>
                                        <td className="p-3">
                                            {booking.isPaid ? (
                                                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
                                                    Completed
                                                </span>
                                            ) : (
                                                <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-xs">
                                                    Pending
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;