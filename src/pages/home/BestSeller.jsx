import '../../App.css';
import React, { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filterItems } from '../../store/category';


const BestSeller = () => {

  const dispatch = useDispatch();
  const filteredItems = useSelector((state) => state.category.filteredItems);

  useEffect(() => {
    dispatch(filterItems());
  }, []);


  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4'>
      <div className="text-center">
        <h2 className="title">Best Seller</h2>
        <p className='text-black/75 capitalize md:w-2/3 mx-auto mb-8'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu nunc, fermentum quis sapien in, placerat scelerisque risus. Class aptent taciti sociosqu ad litora torquent per
        </p>
      </div>
      {/* Best selling products carousel*/}

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          filteredItems.map((item) => (
            <SwiperSlide key={item.id}>
              <Link to={`/shop/${item.id}`}>
                <img src={item.image} alt="" className='mx-auto w-full hover:scale-105 transition-all duration-300' />
              </Link>
              <div className="mt-4 px-4">
                <h2 className='text-base font-semibold mb-2'>{item.title}</h2>
                <div className="flex justify-between">
                  <p className='text-black/50'>{item.category}</p>
                  <p className='font-semibold'>${item.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default BestSeller