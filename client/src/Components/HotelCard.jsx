import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const HotelCard = ({room, index}) => {
    if (!room || !room.hotel) return null;
    return (
        <Link 
        to={`/rooms/${room._id}`} 
        onClick={() => scrollTo(0,0)} 
        key={room._id} 
        className='relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.3)] hover:shadow-lg transition-all'>
            <img src={room.images?.[0]} alt={room.hotel?.name} 
            className="h-48 w-full object-cover" />

            {index % 2 ===0 && (
                <p className='px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full'>
                    Best Seller
                </p>
            )}
        
            <div className='p-4 pt-5'>

                {/* Name + Rating */}
                <div className='flex items-center justify-between'>
                    <p className='font-playfair text-xl font-medium text-gray-800'>
                        {room.hotel?.name}
                    </p>
                    <div className='flex item-center gap-1'>
                        <img src={assets.starIconFilled} alt="star" className="w-4 h-4"/>{room.hotel?.rating}
                    </div>
                </div>

                {/* Location */}
                <div className='flex items-center gap-1 text-sm text-gray-500'>
                    <img src={assets.locationIcon} alt="location" className="w-4 h-4"/>
                    <span>{room.hotel?.city}</span>
                </div>

                {/* Price + Button */}
                <div className='flex items-center justify-between mt-4'>
                    <p>
                        <span className='text-xl text-gray-800'>
                            ${room.pricePerNight}
                        </span>/night
                    </p>
                    <button 
                    className='px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-teal-500 hover:text-white transition-all cursor-pointer'>
                        Book Now
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default HotelCard