import React, {useState} from 'react'
import { roomsDummyData } from "../../assets/assets";
import Title from '../../Components/Title';

const ListRooms = () => {

    const [rooms, setRooms] = useState(roomsDummyData);

    const toggleAvailability = (id) => {
        const updatedRooms = rooms.map((room) => {
            if(room._id === id){
                return{...room, isAvailable: !room.isAvailable};
            }
            return room;
        });
        setRooms(updatedRooms);
    };

    const deleteRooms = (id) => {
        const updatedRooms = rooms.filter((room) => room._id !== id);
        setRooms(updatedRooms);
    };

    return (
        <div>

            {/* Title */}
            <Title title="Room Listings" subtitle="View, edit, or manage all listed rooms. Keep the information up-to-date
            to provide the best experience for users." 
            align="left" font="Roboto" sfont="Open Sans"/>

            <div className="bg-white border rounded-lg overflow-hidden mt-3">
                <table className="w-full text-sm">
                    <thead className='bg-gray-50'>
                        <tr>
                            <th className='text-left p-4'>Name</th>
                            <th className='text-left p-4'>Facility</th>
                            <th className='text-left p-4'>Price / night</th>
                            <th className='text-left p-4'>Status</th>
                            <th className='text-left p-4'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rooms.map((room) => (
                            <tr key={room._id} className='border-t'>
                                <td className='p-4'>
                                    {room.roomType}
                                </td>
                                <td className='p-4 text-gray-500'>
                                    {room.amenities.join(",")}
                                </td>
                                <td className='p-4'>
                                    ${room.pricePerNight}
                                </td>

                                {/* Availability Toggle */}
                                <td className='p-4'>
                                    <button onClick={() => toggleAvailability(room._id)}
                                        className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                                        room.isAvailable ? "bg-blue-500" : "bg-gray-300"}`}>
                                            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                                            room.isAvailable ? "translate-x-6" : ""}`}>

                                            </div>
                                    </button>
                                </td>

                                {/* Actions */}
                                <td className="p-4 flex gap-3">
                                    <button className="text-blue-600 hover:underline">
                                        Edit
                                    </button>
                                    <button onClick={() => deleteRooms(room._id)}
                                        className='text-red-500 hover:underline'>
                                            Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListRooms;