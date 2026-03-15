import React from 'react'
import { assets } from '../assets/assets'

const StarRating = ({rating}) => {
  return (
    <>
        {Array(5).fill('').map((_, i) => (
            <img src={rating > i ? assets.starIconFilled : assets.starIconOutlined} alt="star icon" className='w-4.5 h-4.5' />
        ))}
    </>
  )
}

export default StarRating