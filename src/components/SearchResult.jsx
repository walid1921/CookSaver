import React from 'react';
import pizza1 from '../assets/img/pizza1.jpg'
import pizza2 from '../assets/img/pizza2.jpg'
import pizza3 from '../assets/img/pizza3.jpg'
import pizza4 from '../assets/img/pizza4.jpg'
import pizza5 from '../assets/img/pizza5.jpg'
import pizza6 from '../assets/img/pizza6.jpg'
import pizza7 from '../assets/img/pizza7.jpg'

import { FiChevronRight } from "react-icons/fi";


const SearchResult = () => {
  return (
    <div className='col-start-1 col-end-2 bg-white mb-20 rounded-bl-xl'>

      <div className='flex flex-col justify-between h-full'>

        {/* search result  */}
      <ul className='flex flex-col '>

        <li className='flex items-center gap-4 pt-6 pb-4 hover:bg-color-grey-light-1 cursor-pointer transition-all ease-in duration-150'>
          <div className='pl-8 '>
            <img src={pizza1} alt="" className='h-16 w-16 rounded-full ' />
          </div>
          <div>
            <h3 className='text-md text-color-primary uppercase font-semibold'>California Pizza</h3>
            <p className='text-sm text-color-grey-light-3
            '>Lorem, ipsum dolor </p>
          </div>
        </li>

        <li className='flex items-center gap-4 py-4 hover:bg-color-grey-light-1 cursor-pointer transition-all ease-in duration-150'>
          <div className='pl-8 '>
            <img src={pizza2} alt="" className='h-16 w-16 rounded-full ' />
          </div>
          <div>
            <h3 className='text-md text-color-primary uppercase font-semibold'>CAULIFLOWER PIZZA CRUST</h3>
            <p className='text-sm text-color-grey-light-3
            '>Closet Cooking</p>
          </div>
        </li>

        <li className='flex items-center gap-4 py-4 hover:bg-color-grey-light-1 cursor-pointer transition-all ease-in duration-150'>
          <div className='pl-8 '>
            <img src={pizza3} alt="" className='h-16 w-16 rounded-full ' />
          </div>
          <div>
            <h3 className='text-md text-color-primary uppercase font-semibold'>HOMEMADE PIZZA</h3>
            <p className='text-sm text-color-grey-light-3
            '>Simply Recipes </p>
          </div>
        </li>

        <li className='flex items-center gap-4 py-4 hover:bg-color-grey-light-1 cursor-pointer transition-all ease-in duration-150'>
          <div className='pl-8 '>
            <img src={pizza4} alt="" className='h-16 w-16 rounded-full ' />
          </div>
          <div>
            <h3 className='text-md text-color-primary uppercase font-semibold'>California Pizza</h3>
            <p className='text-sm text-color-grey-light-3
            '>Lorem, ipsum dolor </p>
          </div>
        </li>


        <li className='flex items-center gap-4 py-4 hover:bg-color-grey-light-1 cursor-pointer transition-all ease-in duration-150'>
          <div className='pl-8 '>
            <img src={pizza5} alt="" className='h-16 w-16 rounded-full ' />
          </div>
          <div>
            <h3 className='text-md text-color-primary uppercase font-semibold'>HOW TO GRILL PIZZA</h3>
            <p className='text-sm text-color-grey-light-3
            '>Simply Recipes</p>
          </div>
        </li>

        <li className='flex items-center gap-4 py-4 hover:bg-color-grey-light-1 cursor-pointer transition-all ease-in duration-150'>
          <div className='pl-8 '>
            <img src={pizza6} alt="" className='h-16 w-16 rounded-full ' />
          </div>
          <div>
            <h3 className='text-md text-color-primary uppercase font-semibold'>VEGGIE PIZZA</h3>
            <p className='text-sm text-color-grey-light-3
            '>All Recipes</p>
          </div>
        </li>

        <li className='flex items-center gap-4 py-4 hover:bg-color-grey-light-1 cursor-pointer transition-all ease-in duration-150'>
          <div className='pl-8 '>
            <img src={pizza7} alt="" className='h-16 w-16 rounded-full ' />
          </div>
          <div>
            <h3 className='text-md text-color-primary uppercase font-semibold'>GREEK PIZZA</h3>
            <p className='text-sm text-color-grey-light-3
            '>A Spicy Perspective</p>
          </div>
        </li>

      </ul>

      {/* pagination */}
      <div className='flex my-8 pr-9 w-full justify-end'>
        <button className='flex gap-2 px-4 py-1 bg-color-grey-light-2 rounded-full text-color-primary font-bold  transition-all ease-in duration-150 hover:bg-color-grey-light-1 '>Page 2
          <FiChevronRight className='text-color-primary w-6 h-6' />
        </button>
      </div>
      </div>

      



    </div>
  );
};

export default SearchResult;