import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchResult from './components/SearchResult';
import Main from './components/Main';
import Pagination from './components/UI/Pagination';

// import recipesData from './assets/recipesData';

const KEY = 'a95fb5cd-2bcd-4075-802d-2fe6ce1c7e38'

function App() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage  = 8
  const totalItems = recipes.length;

  const totalPages = Math.ceil(totalItems / itemsPerPage); // Calculate total pages

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

   // Slice the recipes based on currentPage and itemsPerPage
   const displayedRecipes = recipes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  useEffect(() => {
    async function fetchRecipes() {
      setIsLoading(true);
      setError("")
  
      try {
        const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=${KEY}`);
  
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
  
        const data = await response.json();
  
        // if (data.Response === 'False') throw new Error("Recipe not found")
  
        setRecipes(data.data.recipes);
        console.log(data.status)
  
        setIsLoading(false)
      } catch (error){
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally{
        setIsLoading(false)
      }
    }

    fetchRecipes()
  }, [currentPage])

 


  return (
    <div className='bg-gradient-to-br from-color-grad-1 to bg-color-grad-2'>
      <div className='container grid grid-cols-3 grid-rows-1'>
        <Navbar />

        <div className='flex flex-col justify-between bg-white mb-20 rounded-bl-xl'>
          
          
          <SearchResult displayedRecipes={displayedRecipes} isLoading={isLoading} error={error} />

          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />

        </div>
        
        <Main/>
      </div>
    </div>
  );
}

export default App;
