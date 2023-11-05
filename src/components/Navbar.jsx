import React, { useState, useContext } from 'react';
import AddRecipe from './UI/AddRecipe';
import BookmarkContext from './BookmarkContext ';

import { FiBookmark } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { PiCookingPot } from "react-icons/pi";
import SearchBar from './SearchBar';



const Navbar = ({ query, setQuery, savedRecipes, handleDeleteSaved }) => {

  // this one is used for updating the number of saved recipes
  const { bookmarkCount } = useContext(BookmarkContext);

  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => { setIsOpen(!isOpen) }

  const [addRecipe, setAddRecipe] = useState(false)
  const RecipeWindow = () => { setAddRecipe(true) }



  return (
    <div className='col-span-3 w-full center-between text-white bg-color-grey-light-1  h-28  z-10 rounded-t-xl px-10 mt-10 relative'>

      {/* logo */}
      <div className='flex items-center gap-3'>

        <div className='rounded-full p-3 bg-gradient-to-br from-color-primary to-color-grad-1 cursor-pointer transition-all ease-in duration-150 hover:opacity-75'>
          <a href="/"><PiCookingPot className='w-7 h-7 text-white cursor-pointer' /></a>
        </div>
        <span className='logo-font text-gray-500 font-semibold text-[40px]'>CookSaver</span>
      </div>


      <SearchBar query={query} setQuery={setQuery} />


      <div className='flex items-center gap-10 mr-5'>

        {/* NEW RECIPE */}
        <div onClick={RecipeWindow}>
          <FiEdit className=' text-color-primary w-6 h-6 cursor-pointer' />
        </div>



        {/* BOOKMARK  */}
        <div >
          <div className='relative cursor-pointer' onClick={handleOpen}>
            <FiBookmark
              className=' text-color-primary w-6 h-6 ' />

            {/* Here  I've put a condition that don't show the span if there is no savedRecipe  */}
            {bookmarkCount === 0 ? '' : <span className=' bg-gradient-to-br from-color-primary to-color-grad-1 text-white text-xs font-bold border border-color-grad-1 rounded-full px-1  absolute -top-2 -right-1'>{bookmarkCount}</span>}

          </div>

          {/* small nav  */}

          <div className={`${isOpen ? 'flex' : 'hidden'} w-[400px] flex-col backdrop-blur-sm bg-white/60 transition ease-in duration-300 absolute top-28 right-0 rounded-bl-xl`} >

            {savedRecipes.map(saved => (
              <a
                href={saved.source_url}
                key={saved.id}
                className='flex items-center gap-6 pt-4 py-2 px-6 hover:bg-color-grey-light-1 cursor-pointer transition-all ease-in duration-150 border-b-2 rounded-bl-xl border-gray-200'>
                <img
                  src={saved.image_url}
                  alt={saved.title}
                  className='h-12 w-12 rounded-full' />
                <div>
                  <h3 className='text-sm text-color-primary uppercase font-semibold'>{saved.title}</h3>
                  <p className='text-xs text-gray-600
            '>{saved.publisher}</p>
                </div>

                
                <span onClick={() => handleDeleteSaved(saved.id)} className='text-red-600 cursor-pointer'>X</span>
              </a>

            ))}








            {/* <li className=''>
              <div >
                <img src={pizza1} alt="" className=' ' />
              </div>
              <div>
                <h3 >California Pizza</h3>
                <p >Lorem, ipsum dolor </p>
              </div>
            </li>

            <li className='flex items-center gap-4 py-2 px-6 hover:bg-color-grey-light-1 cursor-pointer transition-all ease-in duration-150 rounded-bl-xl'>
              <div >
                <img src={pizza1} alt="" className='h-12 w-12 rounded-full ' />
              </div>
              <div>
                <h3 className='text-sm text-color-primary uppercase font-semibold'>California Pizza</h3>
                <p className='text-xs text-gray-600
            '>Lorem, ipsum dolor </p>
              </div>
            </li> */}

          </div>
        </div>

      </div>


      {/* Add Recipe Window  */}
      {addRecipe && <AddRecipe setAddRecipe={setAddRecipe} addRecipe={addRecipe} />}

    </div>
  );
};

export default Navbar;