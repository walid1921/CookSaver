import React from 'react';

import Item from './Item';
import Loader from './UI/Loader';
import ErrorMessage from './UI/ErrorMessage';


const SearchResult = ({ displayedRecipes, isLoading, error }) => {

  return (
    <div className='flex flex-col justify-between'>

      {isLoading && <Loader />}

      {!isLoading && !error && (
        <>
          <ul className='flex flex-col'>
            <Item displayedRecipes={displayedRecipes} />
          </ul>
        </>
      )}

      {error && <ErrorMessage message={error} />}

    </div>

  );
};

export default SearchResult;