import React from 'react'

const Title = ({title, subtitle, align, font, sfont}) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align === "left" && "md:items-start md:text-left"} ${align === "right" && "md:items-end md:text-right"}`}>
        <h1 className={`text-5xl md:text-40px ${font || "playfair"}`}>{title}</h1>
        <p className={`text-xl md:text-base text-gray-500/90 mt-2 max-w-174 ${sfont || "font-playfair"}`}>{subtitle}</p>
    </div>
  )
}

export default Title