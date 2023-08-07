import React, { useState, useEffect, useRef, useContext } from 'react';
import Button from './UI/Button';
import AddRecipe from './UI/AddRecipe';
import BookmarkContext from './BookmarkContext ';


import pizza1 from '../assets/img/pizza1.jpg'

import { FiBookmark } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { ImSpoonKnife } from "react-icons/im";


const Navbar = () => {
  const { bookmarkCount } = useContext(BookmarkContext);

  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => { setIsOpen(!isOpen) }

  const menuRef = useRef(null)

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [addRecipe, setAddRecipe] = useState(false)
  const RecipeWindow = () => { setAddRecipe(true) }


  




  return (
    <div className='col-span-3  w-full center-between text-white bg-color-grey-light-1  h-28  z-10 rounded-t-xl px-10 mt-20'>

      {/* logo */}
      <div className='flex items-center gap-3'>

        <div className='rounded-full p-3 bg-gradient-to-br from-color-primary to-color-grad-1 cursor-pointer transition-all ease-in duration-150 hover:opacity-75'>
          <a href="/"><ImSpoonKnife className='w-7 h-7 text-white' /></a>
        </div>
        <span className='logo-font text-gray-500 font-semibold text-[40px]'>Forkify</span>
      </div>


      {/* Search */}
      <div className='bg-white rounded-full flex drop-shadow-md'>
        <input type="text" placeholder='Search Your Recipe...' className=' rounded-l-full px-8 outline-none text-gray-500' />
        <Button />
      </div>


      <div className='flex items-center gap-10 mr-5'>

        {/* NEW RECIPE */}
        <div onClick={RecipeWindow}>
          <FiEdit className=' text-color-primary w-6 h-6 cursor-pointer' />
        </div>

        {/* BOOKMARK  */}
        <div>
          <div className='relative cursor-pointer' onClick={handleOpen} ref={menuRef}>
            <FiBookmark className=' text-color-primary w-6 h-6 ' />
            <span className=' bg-gradient-to-br from-color-primary to-color-grad-1 text-white text-xs font-bold border border-color-grad-1 rounded-full px-1  absolute -top-2 -right-1'>{bookmarkCount}</span>

          </div>

          {/* small nav  */}

          <div className={`${isOpen ? 'flex' : ' top-[-100%]'} flex-col w-[16%] backdrop-blur-sm bg-white/60 transition ease-in duration-300 absolute top-48 right-[265px] rounded-bl-xl `} >


            <li className='flex items-center gap-4 pt-4 py-2 hover:bg-color-grey-light-1 cursor-pointer transition-all ease-in duration-150 border-b-2 border-gray-200'>
              <div className='pl-8 '>
                <img src={pizza1} alt="" className='h-12 w-12 rounded-full ' />
              </div>
              <div>
                <h3 className='text-sm text-color-primary uppercase font-semibold'>California Pizza</h3>
                <p className='text-xs text-gray-600
            '>Lorem, ipsum dolor </p>
              </div>
            </li>

            <li className='flex items-center gap-4 py-2 hover:bg-color-grey-light-1 cursor-pointer transition-all ease-in duration-150 rounded-bl-xl'>
              <div className='pl-8 '>
                <img src={pizza1} alt="" className='h-12 w-12 rounded-full ' />
              </div>
              <div>
                <h3 className='text-sm text-color-primary uppercase font-semibold'>California Pizza</h3>
                <p className='text-xs text-gray-600
            '>Lorem, ipsum dolor </p>
              </div>
            </li>

          </div>
        </div>

      </div>


      {/* Add Recipe Window  */}
      {addRecipe && <AddRecipe setAddRecipe={setAddRecipe} addRecipe={addRecipe} />}

    </div>
  );
};

export default Navbar;