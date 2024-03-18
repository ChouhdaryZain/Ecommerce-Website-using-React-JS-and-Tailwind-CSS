import '../../App.css';

import React, { useEffect } from 'react';
import { FaFilter } from "react-icons/fa";
import Cards from '../../components/Cards';
import { fetchProducts } from '../../store/products';
import { setItems, filterItems, showAll, sortItems } from '../../store/category';
import { useSelector, useDispatch } from 'react-redux';

const Products = () => {
  const dispatch = useDispatch();
  const filteredItems = useSelector((state) => state.category.filteredItems);
  const category = useSelector((state) => state.category.selectedCategory);

  // Dispatch the showAll action when the component mounts
  useEffect(() => {

    dispatch(filterItems(''));
    dispatch(showAll());

  }, [dispatch]);

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12'>
      <h2 className="title">Subscribe to our newsletter</h2>

      <div>
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items center space-y-3 mb-8">
          {/* all buttons */}
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            <button onClick={() => dispatch(showAll())} className={`${category === 'all' && 'font-bold'}`}>All Products</button>
            <button onClick={() => dispatch(filterItems('Dress'))} className={`${category === 'Dress' && 'font-bold'}`}>Clothing</button>
            <button onClick={() => dispatch(filterItems('Hoodies'))} className={`${category === 'Hoodies' && 'font-bold'}`}>Hoodies</button>
            <button onClick={() => dispatch(filterItems('Bag'))} className={`${category === 'Bag' && 'font-bold'}`}>Bags</button>
          </div>

          {/* sorting buttons */}
          <div className="flex md:justify-end justify-center mb-4 rounded-sm">
            <div className='bg-black p-2 '>
              <FaFilter className="text-white h-4 w-4" />
            </div>
            <select
              onChange={(event) => dispatch(sortItems(event.target.value))}
              name="" className='bg-black text-white px-2 py-1'>
              <option value="default">Filter</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>
        <div className="">
          <Cards filteredItems={filteredItems} />
        </div>
        {/* Inside your component that renders <Cards /> */}
        {/* {filteredItems && filteredItems.length > 0 ? (
          <Cards filteredItems={filteredItems} />
        ) : (
          <div>Loading...</div> // Or any other placeholder content
        )} */}
      </div>
    </div>
  );
};

export default Products;
