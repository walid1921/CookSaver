import React from 'react';
import { FiPlusCircle } from 'react-icons/fi'

const UploadBtn = () => {
  return (
    <div className='center'>

      <button 
      type='submit'
      className='text-white text-md font-semibold border tracking-wide border-color-grad-1 bg-gradient-to-br from-color-grad-1 to-color-grad-2 rounded-full py-3 px-8 cursor-pointer transition-all ease-in duration-150 hover:opacity-75 center gap-3'>ADD
        <FiPlusCircle className='w-6 h-6' />
      </button>


    </div>
  );
};

export default UploadBtn;