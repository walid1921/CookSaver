import React from 'react';
import { FiSearch } from 'react-icons/fi'

const Button = () => {
  return (
    <div className='center'>

      <button className='bg-gradient-to-br from-color-primary to-color-grad-1 text-white text-md font-semibold border border-color-primary rounded-r-full py-3 px-4 cursor-pointer transition-all ease-in duration-150 hover:opacity-75 center gap-3'>
        <FiSearch className='w-6 h-6' />
      </button>


    </div>
  );
};

export default Button;

