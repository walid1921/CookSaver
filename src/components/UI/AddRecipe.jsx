import React from 'react';

import { FiX } from "react-icons/fi";
import UploadBtn from './UploadBtn';

const AddRecipe = ({ addRecipe, setAddRecipe }) => {


  return (
    <div className='w-full h-full fixed top-0 right-0 z-20 backdrop-blur-sm bg-black/70'>


      <div className='w-[300px] sm:w-[400px] md:w-[800px] absolute top-1/2 left-1/2 bg-white z-20 rounded-lg transform -translate-x-1/2 -translate-y-1/2 p-5 '>

        <div onClick={() => setAddRecipe(false)} className='absolute  right-2 top-4 rounded-sm cursor-pointer mr-2 z-20 ease-in-out duration-500'>
          <FiX size={25} color='black' />
        </div>

        <div className='mt-10 mb-8 px-5  w-full flex gap-20'>

          {/* RECIPE DATA  */}

          <div className='flex flex-col gap-4 w-[50%]'>

            <h3 className='text-xl text-center font-semibold text-color-primary mb-6'>RECIPE DATA</h3>

            <input type="text" placeholder="Title" className='text-sm text-gray-500 w-full p-3  focus:outline-none rounded-md border focus:ring-2 focus:bg-[#f6cfcc7b] ring-color-primary transition-all ease-in-out duration-100' />

            <input type="text" placeholder="URL" className='text-sm text-gray-500 w-full p-3  focus:outline-none rounded-md border focus:ring-2 focus:bg-[#f6cfcc7b] ring-color-primary transition-all ease-in-out duration-100' />

            <input type="text" placeholder="Image URL" className='text-sm text-gray-500 w-full p-3  focus:outline-none rounded-md border focus:ring-2 focus:bg-[#f6cfcc7b] ring-color-primary transition-all ease-in-out duration-100' />

            <input type="text" placeholder="Publisher" className='text-sm text-gray-500 w-full p-3  focus:outline-none rounded-md border focus:ring-2 focus:bg-[#f6cfcc7b] ring-color-primary transition-all ease-in-out duration-100' />

            <input type="number" min={1} placeholder="Preparation Time 'Min'" className='text-sm text-gray-500 w-full p-3  focus:outline-none rounded-md border focus:ring-2 focus:bg-[#f6cfcc7b] ring-color-primary transition-all ease-in-out duration-100' />

            <input type="number" min={1}  placeholder="Servings '4'" className='text-sm text-gray-500 w-full p-3  focus:outline-none rounded-md border focus:ring-2 focus:bg-[#f6cfcc7b] ring-color-primary transition-all ease-in-out duration-100' />

          </div>

          {/* INGREDIENTS  */}

          <div className='flex flex-col gap-4 w-[50%]'>

            <h3 className='text-xl text-center font-semibold text-color-primary mb-6'>INGREDIENTS</h3>

            <input type="text" defaultValue='0.5,kg,Rice' placeholder="Format: 'Quantity,Unit,Description'" className='text-sm text-gray-500 w-full p-3  focus:outline-none rounded-md border focus:ring-2 focus:bg-[#f6cfcc7b] ring-color-primary transition-all ease-in-out duration-100' />

            <input type="text" placeholder="Format: 'Quantity,Unit,Description'" className='text-sm text-gray-500 w-full p-3  focus:outline-none rounded-md border focus:ring-2 focus:bg-[#f6cfcc7b] ring-color-primary transition-all ease-in-out duration-100' />

            <input type="text" placeholder="Format: 'Quantity,Unit,Description'" className='text-sm text-gray-500 w-full p-3  focus:outline-none rounded-md border focus:ring-2 focus:bg-[#f6cfcc7b] ring-color-primary transition-all ease-in-out duration-100' />

            <input type="text" placeholder="Format: 'Quantity,Unit,Description'" className='text-sm text-gray-500 w-full p-3  focus:outline-none rounded-md border focus:ring-2 focus:bg-[#f6cfcc7b] ring-color-primary transition-all ease-in-out duration-100' />

            <input type="number" placeholder="Format: 'Quantity,Unit,Description'" className='text-sm text-gray-500 w-full p-3  focus:outline-none rounded-md border focus:ring-2 focus:bg-[#f6cfcc7b] ring-color-primary transition-all ease-in-out duration-100' />

            <input type="number" placeholder="Format: 'Quantity,Unit,Description'" className='text-sm text-gray-500 w-full p-3  focus:outline-none rounded-md border focus:ring-2 focus:bg-[#f6cfcc7b] ring-color-primary transition-all ease-in-out duration-100' />

          </div>

        </div>

        <UploadBtn />


      </div>


    </div>
  );
};

export default AddRecipe;