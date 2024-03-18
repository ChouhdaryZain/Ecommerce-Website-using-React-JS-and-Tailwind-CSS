import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {

  const companyLogo = [
    { id: 1, img: "/images/brand1.png" },
    { id: 2, img: "/images/brand2.png" },
    { id: 3, img: "/images/brand3.png" },
    { id: 4, img: "/images/brand4.png" },
    { id: 5, img: "/images/brand5.png" },
  ]

  return (
    <div className='max-w-screen-2xl mx-auto container lg:px-28 px-4 py-28'>
      {/* brand logos */}
      <div className="flex justify-around flex-wrap gap-4 items-center">
        {companyLogo.map(({ id, img }) => (
          <div key={id} className="">
            <img src={img} alt="" />
          </div>
        ))}
      </div>
      {/* category grid */}
      <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
        <p className='font-semibold uppercase text-center md:-rotate-90 bg-Black text-white md:p-1.5 p-2 rounded-sm inline-flex'>Explore new and popular styles</p>
        <div className="">
          <Link to="/"><img src="/images/image1.png" alt="" className='w-full hover:scale-105 transition-full duration-200' /></Link>
        </div>
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-2">
            <Link to="/"><img src="/images/image2.png" alt="" className='w-full hover:scale-105 transition-full duration-200' /></Link>
            <Link to="/"><img src="/images/image3.png" alt="" className='w-full hover:scale-105 transition-full duration-200' /></Link>
            <Link to="/"><img src="/images/image3.png" alt="" className='w-full hover:scale-105 transition-full duration-200' /></Link>
            <Link to="/"><img src="/images/image5.png" alt="" className='w-full hover:scale-105 transition-full duration-200' /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category