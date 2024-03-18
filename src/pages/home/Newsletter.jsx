import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

const Newsletter = () => {
  return (
    <div className='bg-primaryBG bg-opacity-5 sm:px-28 px-4 py-16'>
      <h2 className="title justify-center mb-8">Follow for products and discounts on Instagram</h2>
      {/* Insta grid */}
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <Link to='/'>
          <img src="/images/products/image5.png" alt="" className="w-32 h-32" />
        </Link>
        <Link to='/'>
          <img src="/images/products/image6.png" alt="" className="w-32 h-32" />
        </Link>
        <Link to='/'>
          <img src="/images/products/image7.png" alt="" className="w-32 h-32" />
        </Link>
        <Link to='/'>
          <img src="/images/products/image8.png" alt="" className="w-32 h-32" />
        </Link>
        <Link to='/'>
          <img src="/images/products/image9.png" alt="" className="w-32 h-32" />
        </Link>
        <Link to='/'>
          <img src="/images/products/image10.png" alt="" className="w-32 h-32" />
        </Link>
      </div>
      {/* Newsletter */}
      <div className="">
        <h2 className="title justify-center my-8">or subscribe to our newsletter</h2>
        <form action="" className='sm:w-2/3 mx-auto text-center flex flex-wrap justify-center'>
          <div className="flex items-center">
            <input
              type="email"
              name='email'
              id='email'
              placeholder='Email address...'
              className='bg-transparent outline-1  border border-gray-500 px-6 py-2 sm:w1/3 w-full placeholder:text-black/50 mr-2 rounded-sm'
            />
            <button type="submit" className='bg-black text-white px-6 py-2 rounded-sm'>
              Submit
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Newsletter;
