import React, {useState} from 'react';

import recipesData from '../assets/recipesData';
import Item from './Item';

import { FiChevronRight } from "react-icons/fi";


const SearchResult = () => {

  

  return (
    <div className='col-start-1 col-end-2 bg-white mb-20 rounded-bl-xl'>

      <div className='flex flex-col justify-between h-full'>
 
        {/* search result  */}
      <ul className='flex flex-col'>
        <Item recipes={recipesData}/>
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