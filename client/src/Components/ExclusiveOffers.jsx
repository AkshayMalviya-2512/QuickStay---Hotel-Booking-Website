import React from 'react'
import Title from './Title'
import { assets, exclusiveOffers } from '../assets/assets'

const ExclusiveOffers = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30'>
        <div className='flex flex-col md:flex-row items-center justify-between w-full'>
            <Title align='left' title='Exclusive Offers' subtitle='Discover our exclusive offers and special deals for unforgettable stays' font='roboto' sfont='playfair'/>
            <button className='group flex items-center gap-2 font-xs cursor-pointer max-md:mt-12 hover:border-cyan-600 rounded-full bg-white hover:bg-cyan-600 transition-all hover:shadow-lg hover:scale-105'>
                View All Offers
                <img src={assets.arrowIcon} alt="arrow icon" className='group-hover:translate-x-1 transtion-all' />
            </button>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
            {exclusiveOffers.map((item) => (
                <div key={item._id} className='group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center cursor-pointer hover:shadow-lg hover:scale-105 transition-all' style={{backgroundImage: `url(${item.image})`}}>
                    <p className='px-3 py-1 absolute top-4 left-4 text-sm text-grey-800 font-medium rounded-full'>{item.priceOff}% OFF</p>
                    <div>
                        <p className='text-5xl font-medium font-playfair'>{item.title}</p>
                        <p className='text-large mt-2'>{item.description}</p>
                        <p className='text-xl text-white/70 mt-3'>Expires{item.expiryDate}</p>
                    </div>
                    <button className='flex items-center gap-2 font-small cursor-pointer mt-4 mb-5 hover:border-cyan-600 rounded-full hover:bg-cyan-600 transition-all hover:shadow-lg hover:scale-105'>
                        View Offers
                        <img className='invert group-hover:translate-x-1 transtion-all' src={assets.arrowIcon} alt="arrow-icon" />
                    </button>
                </div>
            ))}
        </div>

    </div>
  )
}

export default ExclusiveOffers