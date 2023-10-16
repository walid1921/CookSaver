import React from 'react';
import Item from './Item';
import Loader from './UI/Loader';
import ErrorMessage from './UI/ErrorMessage';


const SearchResult = ({ displayedRecipes, isLoading, error, handleSelectedRecipe }) => {

  return (
    <div className='flex flex-col justify-between h-full'>

      {isLoading && <Loader />}

      {!isLoading && !error && (
        <>
          <ul className='flex flex-col'>
            <Item displayedRecipes={displayedRecipes} handleSelectedRecipe={handleSelectedRecipe}  />
          </ul>
        </>
      )}

      {error && <ErrorMessage error={error} />}

    </div>
  );
};

export default SearchResult;