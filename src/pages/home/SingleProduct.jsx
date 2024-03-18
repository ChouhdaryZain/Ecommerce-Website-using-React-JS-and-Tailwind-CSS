import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import '../../App.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/products';

const SingleProduct = () => {
  const { id } = useParams();
  const products = useSelector(state => state.products.items);

  // Check status and error
  const product = products.find(p => Number(p.id) === Number(id));

  if (!product) {
    return <div>looking for Product</div>;
  }
  const { title, image, price } = product;
  return (
    <div className="grid sm:grid-cols-2 gap-6 h-max mt-12 max-w-screen-2xl container mx-auto lg:px-28 px-4 ">

      <div className='sm:px-20 sm:py-20'>
        <div className="mb-4">
          <a href="/" className='text-gray-600'>Home/</a>
          <a href="/" className='font-bold text-black'>Shop</a>
        </div>
        {/* max-w-sm max-h-min */}
        <img src={image} alt="" />
      </div>
      <div className="sm:py-20 sm:mt-20">
        <h2 className='title justify-left !important'>{title}</h2>
        <p className='text-grey-600 text-base leading-6 text-justify sm:text-left sm:mt-4'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ratione placeat fugiat qui non vel accusamus molestiae excepturi eveniet dolorem. Dolores nam sunt atque neque quisquam explicabo hic recusandae exercitationem?
        </p>
        <p className="py-4 text-red-500 font-semibold text-2xl">
          ${price}
        </p>
        <input type="number" name='price' defaultValue={1} required className='border border-grey-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 sm:px-4 sm:py-3 focus:border-red-500' />
        <button className="w-full bg-red-500 hover:bg-white text-white hover:text-red-500 font-bold py-3 px-4 my-4 rounded mt-4">
          Confirm Order
        </button>
      </div>
    </div>
  )
}

export default SingleProduct
