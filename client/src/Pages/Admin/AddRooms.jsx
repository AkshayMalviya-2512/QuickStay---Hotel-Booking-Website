import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import Title from '../../Components/Title';

const amenitiesList = [
    "Free Wifi",
    "Free Breakfast",
    "Swimming Pool",
    "Gym Access",
    "Mountain View",
    "Room Service"
];


const AddRooms = () => {

    const [images, setImages] = useState([]);

    const [roomType, setRoomType] = useState("");

    const [price, setPrice] = useState("");

    const [amenities, setAmenities] = useState([]);

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);
    };

    const handleAmenityChange = (amenity) => {
        if(amenities.includes(amenity)) {
            setAmenities(amenities.filter((a) => a !== amenity));
        } else {
            setAmenities([...amenities, amenity]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const roomData = {
            roomType,
            price,
            amenities,
            images
        };
        console.log("Room Data : ",roomData);
    };
    
    return (
        <div>
            
            {/* Title */}
            <Title title="Add Rooms" subtitle="Fill in the details carefully and accurate room details,
            pricing, and amenities, to enhance the user booking experience." 
            align="left" font="Roboto" sfont="Open Sans"/>

            <form onSubmit={handleSubmit} className='space-y-8'>

                {/* Image Upload */}
                <div>
                    <p className='mb-3 font-medium'>Images</p>

                    <input type="file" multiple onChange={handleImageUpload} className='mb-4' />

                    <div className='flex gap-3'>
                        {images.map((img,index) => (
                            <img key={index} src={URL.createObjectURL(img)} 
                            className='w-20 h-16 object-cover rounded'/>
                        ))}
                    </div>
                </div>

                {/* Room Type + Price */}
                <div className='flex gap-6'>
                    <div>
                        <label className='block mb-1 font-medium'>
                            Room Type
                        </label>

                        <select value={roomType} onChange={(e) => setRoomType(e.target.value)}
                            className='border rounded px-3 py-2 w-48'>
                                <option value="">Select Room Type</option>
                                <option value="Single Bed">Single Bed</option>
                                <option value="Double Bed">Double Bed</option>
                                <option value="Luxury Suite">Luxury Suite</option>
                        </select>
                    </div>

                    <div>
                        <label className='block mb-1 font-medium'>
                            Price/night
                        </label>
                        <input type="number" value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className='border rounded px-3 py-2 w-32' />
                    </div>
                </div>

                {/* Amenities */}
                <div>
                    <p className='font-medium mb-3'>
                        Amenities
                    </p>
                    <div className='flex flex-col gap-2'>
                        {amenitiesList.map((amenity) => (
                            <label key={amenity} className='flex gap-2'>
                                <input type="checkbox" checked={amenities.includes(amenity)}
                                onChange={() => handleAmenityChange(amenity)} />

                                {amenity}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Submit */}
                <button type='submit'
                className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700'>
                    Add Room
                </button>
            </form>
        </div>
    );
};

export default AddRooms;