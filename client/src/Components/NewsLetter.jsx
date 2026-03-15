import React from 'react'

const NewsLetter = () => {
  return (
    <section className="flex flex-col items-center text-white">
        <div className="flex flex-col items-center mt-10">
            <h2 className="text-center text-5xl font-semibold max-w-2xl"><span className="bg-gradient-to-t from-indigo-600 to-black p-1 bg-left inline-block bg-no-repeat">Stay Inspired</span></h2>
            <p className="text-center text-lg text-slate-400 max-w-lg mt-3">Join our newsletter and be the first to discover our latest updates, new destinations, exclusive offers, special promotions and more!</p>            
        </div>
        <div className="flex items-center justify-center mt-10 mb-10 border border-black-700 focus-within:outline focus-within:outline-indigo-600 text-sm rounded-full h-14 max-w-xl w-full">
            <input className="bg-black/70 outline-none rounded-full px-4 h-full flex-1 placeholder:text-slate-400" placeholder="Enter your email address" type="text" />
            <button className="bg-indigo-600 text-white rounded-full h-11 mr-1 px-10 flex items-center justify-center hover:bg-cyan-900 active:scale-95 hover:shadow-lg hover:scale-105 cursor-pointer transition">Subscribe</button>
        </div>
    </section>
  )
}

export default NewsLetter