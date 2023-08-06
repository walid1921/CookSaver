import React from 'react';
import { FiSearch } from 'react-icons/fi'

const Button = () => {
  return (
    <div className='center'>
      <a href="#">
        <button className='text-white text-md font-semibold border tracking-wide border-color-grad-1 bg-gradient-to-br from-color-grad-1 to-color-grad-2 rounded-full py-3 px-8 cursor-pointer transition-all ease-in duration-150 hover:opacity-75 center gap-3'>SEARCH
          <FiSearch className='w-6 h-6'/> 
        </button>
      </a>

    </div>
  );
};

export default Button;

