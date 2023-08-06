import React from 'react';

import pizza1 from '../../assets/img/pizza1.jpg'

const SavedRecipes = () => {
  return (
    <div className='flex flex-col w-[310px] backdrop-blur-sm bg-white/60 ease-in-out duration-500 absolute top-48 right-[265px] rounded-bl-xl '>


      <li className='flex items-center gap-4 pt-6 pb-4 hover:bg-color-grey-light-1 cursor-pointer transition-all ease-in duration-150'>
        <div className='pl-8 '>
          <img src={pizza1} alt="" className='h-16 w-16 rounded-full ' />
        </div>
        <div>
          <h3 className='text-md text-color-primary uppercase font-semibold'>California Pizza</h3>
          <p className='text-sm text-gray-600
            '>Lorem, ipsum dolor </p>
        </div>
      </li>

      <li className='flex items-center gap-4 pt-6 pb-4 hover:bg-color-grey-light-1 cursor-pointer transition-all ease-in duration-150'>
        <div className='pl-8 '>
          <img src={pizza1} alt="" className='h-16 w-16 rounded-full ' />
        </div>
        <div>
          <h3 className='text-md text-color-primary uppercase font-semibold'>California Pizza</h3>
          <p className='text-sm text-gray-600
            '>Lorem, ipsum dolor </p>
        </div>
      </li>


    </div>
  );
};

export default SavedRecipes;