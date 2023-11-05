import React, { useState, useEffect } from 'react';
import Loader from './UI/Loader';
import ErrorMessage from './UI/ErrorMessage';



function DefaultRecipes({ defaultData, error, handleSelectedDefaultRecipe }) {

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [])

  return (
    <div className='flex flex-col justify-between h-[750px] bg-color-grey-light-1 border rounded-bl-xl'>

      {showLoader && <div className="mt-52"><Loader /></div>}

      {!showLoader && !error && (
        <>
          <h2 className=' text-color-primary text-center my-6 font-bold text-xl justify-center'>POPULAR KEBAB RECIPES</h2>
          <ul className='flex flex-wrap overflow-y-scroll custom-scrollbar pb-6'>
            {
              defaultData.map((recipe) =>
                <li className='relative w-[50%] flex items-center pb-3  hover:bg-color-grey-light-1 cursor-pointer transition-all ease-in duration-150 hover:opacity-80'
                  key={recipe.id}
                  onClick={() => handleSelectedDefaultRecipe(recipe.id)}
                >


                  <div className=' pl-4'>
                    <img src={recipe.image_url} alt="" className='h-60 w-64 rounded-xl ' />
                  </div>

                  <div className="absolute top-40 left-4 w-64 h-12 bg-gradient-to-br from-color-primary to-color-grad-1 opacity-75 transition-all ease-in duration-150">
                    <p className='flex items-center justify-center text-center text-white text-md uppercase font-semibold h-full'>{recipe.title}</p>
                  </div>
                </li>
              )
            }
          </ul>
        </>
      )}

      {error && <ErrorMessage error={error} />}

    </div>
  )
}

export default DefaultRecipes
