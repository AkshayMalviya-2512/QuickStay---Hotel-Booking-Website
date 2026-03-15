import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { roomsDummyData, assets, facilityIcons, roomCommonData, testimonials } from "../assets/assets";
import StarRating from '../Components/StarRating';


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const RoomDetails = () => {

    const { id } = useParams();

    const room = roomsDummyData.find(r => r._id === id);

    const [mainImage, setMainImage] = useState(room.images[0]);
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");

    const checkAvailability = () => {
        if (!checkIn || !checkOut){
            alert("Please select both dates");
            return;
        }
        if (new Date(checkIn) >= new Date(checkOut)){
            alert("Check-out must be after check-in");
            return;
        }
        alert("Room is available!");
    };

    if (!room) {
        return <p className="pt-28 text-center text-xl">Room not found</p>;
    }

    const roomReviews = testimonials.filter(
        (item) => item.hotel === room.hotel.name
    );

    return (
        <div className="pt-28 px-6 md:px-16 lg:px-24 xl:px-32">

            {/* Hotel Title */}
            <div>
                <h1 className="text-3xl font-playfair font-semibold">
                    {room.hotel.name}
                    <span className="text-lg text-gray-500 ml-2">
                        ({room.roomType})
                    </span>
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-2">
                    <StarRating rating={room.hotel.rating} />
                    <span className="text-gray-500">200+ reviews</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-500 mt-1">
                    <img src={assets.locationIcon} className="w-4" />
                    {room.hotel.city}
                </div>
            </div>

            {/* Image Gallery */}
            <div className="flex gap-4 mt-6">

                {/* Main Image */}
                <div className="w-2/3">
                    <img src={mainImage}
                    className="w-full h-[420px] object-cover shadow-lg rounded-xl" />
                </div>

                {/* Thumbnails */}
                <div className="w-1/3 grid grid-cols-2 gap-4">
                    {room.images.slice(1).map((img, index) => (
                        <img key={index} src={img} onClick={() => setMainImage(img)} 
                        className="w-full h-[200px] object-cover rounded-xl cursor-pointer hover:opacity-80 transition hover:scale-[1.03] duration-300" />
                ))}
                </div>
            </div>

            {/* Price + Amenities */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-8 gap-4">
                <div>
                    <h2 className="text-2xl font-playfair font-semibold">
                        Experience Luxury Like Never Before
                    </h2>

                    {/* Amenities */}
                    <div className="flex gap-3 mt-3 flex-wrap">
                        {room.amenities.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg text-sm">
                                <img src={facilityIcons[item]} className="w-4" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                <h2 className="text-3xl font-semibold">
                    ${room.pricePerNight} / day
                </h2>
            </div>

            {/* Booking Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between border rounded-xl mt-8 p-4 shadow-xl gap-4">
                <div className="flex gap-10">
                    <div>
                        <p className="text-gray-500 text-sm">Check-In</p>
                        <input type="date" value={checkIn} 
                        onChange={(e) => setCheckIn(e.target.value)} 
                        className="outline-none" />
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Check-Out</p>
                        <input type="date" value={checkOut} 
                        onChange={(e) => setCheckOut(e.target.value)} 
                        className="outline-none" />
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Guests</p>
                        <input type="number" min="1" defaultValue="2" className="w-16 outline-none" />
                    </div>
                </div>

                <button onClick={checkAvailability} 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg cursor-pointer transition-all hover:shadow-lg hover:scale-105 hover:border-cyan-600 duration-500">
                    Check Availability
                </button>
            </div>

            {/* Feature Highlights */}
            <div className="mt-10 space-y-6">
                {roomCommonData.map((item, index) => (
                    <div key={index} className="flex gap-4">
                        <img src={item.icon} className="w-6 h-6" />
                        <div>
                            <h3 className="font-medium">{item.title}</h3>
                            <p className="text-gray-500 text-sm">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Description */}
            <p className="text-gray-500 mt-8 max-w-3xl">
                Guests will be allocated on the ground floor according to availability.
                The price quoted is for two guests. Please mark the number of guests to
                get the exact price for groups.
            </p>

            {/* Reviews Section */}
            <div className="mt-12">
                <h2 className="font-playfair text-2xl mb-6">
                    Guest Reviews
                </h2>
                <div className="space-y-6">
                    {roomReviews.length > 0 ? (
                        roomReviews.map((review) => (
                            <div key={review.id} className="flex gap-4 border-b pb-5">
                                {/* User Image */}
                                <img src={review.image} alt={review.name} 
                                className="w-12 h-12 rounded-full object-cover"/>

                                <div>
                                    {/* Name + Rating */}
                                    <div className="flex items-center gap-2">
                                        <p className="font-medium">{review.name}</p>

                                        <div className="flex items-center gap-1">
                                            <StarRating rating={review.rating} />
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <p className="text-sm text-gray-500">
                                        {review.address}
                                    </p>

                                    {/* Review */}
                                    <p className="text-gray-600 mt-1">
                                        {review.review}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No reviews yet.</p>
                    )}
                </div>
            </div>

            {/* Map Section */}
            <div className='mt-10'>

                <h2 className="font-playfair text-2xl mb-4">
                    Location on map
                </h2>

                <MapContainer center={[40.7128, -74.006]} zoom={13} 
                style={{ height: "350px", width: "100%" }} className="rounded-xl z-0 overflow-hidden">
                    <TileLayer attribution="&copy; OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[40.7128, -74.006]}>
                        <Popup>
                            {room.hotel.name} <br /> {room.hotel.city}
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
            
            {/* Host Section */}
            <div className="mt-16 border-t pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-20">

                {/* Host Info */}
                <div className="flex items-center gap-4">
                    <img src={room.hotel.owner.image} alt={room.hotel.owner.username} 
                    className="w-14 h-14 rounded-full object-cover"/>

                    <div>
                        <h3 className="text-lg font-medium">
                            Hosted by {room.hotel.owner.username}
                        </h3>

                        <div className="flex items-center gap-2 mt-1">
                            <StarRating rating={room.hotel.rating} />
                            <span className="text-gray-500 text-sm">
                                200+ reviews
                            </span>
                        </div>
                    </div>
                </div>

                {/* Host Stats */}
                <div className="flex gap-10 text-sm text-gray-600">
                    <p>Response rate: <span className="font-medium">100%</span></p>
                    <p>Response time: <span className="font-medium">30 min</span></p>
                </div>

                {/* Contact Button */}
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 hover:bg-cyan-600 transition">
                    Contact Now
                </button>
            </div>
        </div>
    );
};

export default RoomDetails