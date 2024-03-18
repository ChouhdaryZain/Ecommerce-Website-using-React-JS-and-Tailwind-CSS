import React from 'react'
import bannerImg from '/images/banner.png'
import { FaShoppingBag } from "react-icons/fa";

const Banner = () => {
  return (
    <div className='bg-primaryBG py-12 xl:px-28 px-4'>
      <div className="py-28 flex flex-col md:flex-row-reverse items-center gap-14">
        {/* banner image */}
        <div className="md:w-1/2">
          <img src={bannerImg} alt="" className="" />
        </div>
        {/* banner text */}
        <div className="md:w-1/2">
          <h1 className='text-5xl font-light mb-5'>Collections</h1>
          <p className='text-xl mb-7'>
            You can explore ans shop many differnt collection
            from various barands here.
          </p>
          <button className="flex gap-2 items-center bg-Black px-6 py-2 text-white font-semibold rounded-sm hover:text-colorHover hover:font-medium"><FaShoppingBag /> Shop Now</button>
        </div>


      </div>
    </div>
  )
}

export default Banner