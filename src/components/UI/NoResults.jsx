import React, { useState } from 'react';
import { BsEmojiSmileUpsideDown, BsDot } from 'react-icons/bs';
import recipes from '../../assets/recipesSearch';

function NoResults() {
  const [visibleRecipes, setVisibleRecipes] = useState(recipes.slice(0, 10));

  const showMoreRecipes = () => {
    const nextBatch = recipes.slice(visibleRecipes.length, visibleRecipes.length + 10);
    setVisibleRecipes([...visibleRecipes, ...nextBatch]);
  };

  return (
    <div className="mt-12 flex flex-col items-center h-full ">

      <p className='text-red-400 text-lg flex items-center gap-3 mb-6'>
        <BsEmojiSmileUpsideDown size={25} />
        No results found
      </p>

      <span className='text-[#c0bfbf] text-sm '>Search terms are limited.  </span>
      <span className='text-[#c0bfbf] text-sm '>Search for "pizza" or another meal from this list</span>


      <div className='text-[#c0bfbf] text-sm text-center '>

        <ul className="flex justify-center items-center flex-wrap w-100% mt-6">

          {visibleRecipes.map((recipe, i) => (
            <li key={i} className="flex justify-center" style={{ width: 'calc(50% - 10px)' }}>
              <BsDot />{recipe}
            </li>
          ))}
        </ul>


        {visibleRecipes.length < recipes.length && (
          <button
            className="border border-color-primary text-color-primary px-2 py-[4px] rounded-md mt-6"
            onClick={showMoreRecipes}
          >
            More Keywords
          </button>
        )}
      </div>
    </div>
  );
}

export default NoResults;



