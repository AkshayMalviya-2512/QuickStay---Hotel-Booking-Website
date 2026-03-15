import React from 'react'
import Title from './Title'
import { testimonials } from '../assets/assets'
import StarRating from './StarRating'


const Testimonial = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-30'>
        
        <Title title="What Our Guests Say" subtitle="Discover why our guests love staying with us. Read their testimonials and experiences to see how we provide unforgettable stays and exceptional services that keep them coming back." font="roboto" sfont='playfair' />
        <div className="flex flex-wrap items-center gap-6 mt-20">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-red-50 p-6 rounded-xl shadow hover:shadow-lg hover:scale-105 hover:bg-cyan-50 transition-all">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="font-playfair text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.address}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            <StarRating rating={testimonial.rating} />
                            <span className="text-sm text-gray-500">{testimonial.rating}</span>
                        </div>
                        <div className="border-t mt-4 pt-4">
                            <p className="text-sm text-gray-500">Stayed at {testimonial.hotel}</p>
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4">"{testimonial.review}"</p>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Testimonial