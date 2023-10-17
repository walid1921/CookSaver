import React from 'react';
import { FiArrowRight } from 'react-icons/fi'

const DirectionBtn = ({ url }) => {

  const openNewWindow = () => {
    window.open(url, '_blank'); // This will open the URL in a new tab/window
  };

  return (
    <div className='center'>

      <button
        className='text-white text-md font-semibold border tracking-wide border-color-grad-1 bg-gradient-to-br from-color-grad-1 to-color-grad-2 rounded-full py-2 my-1 px-6 cursor-pointer transition-all ease-in duration-150 hover:opacity-75 center gap-1'
        onClick={openNewWindow}>
        DIRECTION
        <FiArrowRight className='w-6 h-6' />
      </button>


    </div>
  );
};

export default DirectionBtn;