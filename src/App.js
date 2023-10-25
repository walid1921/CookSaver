import React, {useState, useEffect, useContext} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchResult from './components/SearchResult';
import Main from './components/Main';
import Pagination from './components/UI/Pagination';
import NumCharacters from './components/UI/NumCharacters';
import NoResults from './components/UI/NoResults';
import RecipeDetails from './components/RecipeDetails';
import BookmarkContext from './components/BookmarkContext ';


// import recipesData from './assets/recipesData';


// Fetch (Get) Async/Await
// We use Async/Await instead of method chaining for more linear-looking code
// When using API we have to see how we are going to use it. How it gives result in the end if (an Object or an Array)


const KEY = 'a95fb5cd-2bcd-4075-802d-2fe6ce1c7e38'

function App() {
  
  const [query, setQuery] = useState(""); // its for searchBar (we have to call query in the fetch api ), it must be in the App component because it's bring us info what user typed
  const [recipes, setRecipes] = useState([]); // to hold the fetched data (it can be an object {} or an Array []), it must be in the App component because its the  data we are going to store it in this array
  const [isLoading, setIsLoading] = useState(false) // Handle Spinner or Loading message
  const [error, setError] = useState(""); // Handle Error message
  const [apiCalled, setApiCalled] = useState(false); // To handle if there is no results
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedId, setSelectedId] = useState(null) // id Exp : "5ed6604591c37cdc054bcd09"

  const [savedRecipes, setSavedRecipes] = useState([])

  const { setBookmarkCount } = useContext(BookmarkContext);

  //! Handling Pagination
  const itemsPerPage  = 8
  const totalItems = recipes.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage); // Calculate total pages
  const onPageChange = (pageNumber) => {setCurrentPage(pageNumber)}
  const displayedRecipes = recipes.slice( // Slice the recipes based on currentPage and itemsPerPage
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  //! Handling Selecting
  const  handleSelectedRecipe  = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id)) // here there is a feature that if the Recipe is clicked again it closes
  }

  const handleCloseRecipe = () => {
    setSelectedId(null)
  }

   //! Handling BookMark
  function handleSaved (savedRecipes) {
    setSavedRecipes(save => [...save, savedRecipes])
    }

    //! Deleting a saved Recipe and subtract (-1) from the span
   function handleDeleteSaved(i) {
    setSavedRecipes(saved => saved.filter(recipe => recipe.id !== i))
    setBookmarkCount((prevCount) =>  prevCount - 1 );

   }
   
   
  useEffect(() => { // We used useEffect to avoid any infinite loop can happen and also it has a good property that it shows our component content before the data is fetched

    // This u can do it in the end it just about no more racing and  stopping Unnecessary data been fetched too many times when we write any letter on the search bar. its not necessary to do it in the RecipeDetails fetch because we are sure there is no racing data, just one data from one Id
    const controller = new AbortController() 
    // and the we call it beside the fetch
    // Then we make the cleanUp function in the end 

    
    if (query.length < 4) { // this when we have searchBar functionality, it means It doesn't run anything if nothing is typed in
      setRecipes([]); // Clear recipes if query is empty
      setError("");
      setIsLoading(false);
      setApiCalled(false);
      return;
    }

    //! fetchData function
    async function fetchRecipes() {

      
        
      try { // we use a try block to catch any potential errors.

        setIsLoading(true);
        setError("")

        // We use await with fetch(url) to make the API request. This returns a response object.
        const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}&key=${KEY}`, {signal : controller.signal});

        // API Documentation https://www.omdbapi.com/
        // console.log("Data u got", response)

        // Check if the response status is OK (200-299)(which signifies a successful response). If not, we throw a custom error.
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        
        // If the response is successful, we use await again to parse the response body as JSON.
        const data = await response.json();

        
        if (data.results === 0){ // console.log(data)
          throw new Error("Recipe not found");
        }

        // If all goes well, we return the parsed data.
        setRecipes(data.data.recipes); // change 'data.recipes' to the actual result from the API, u can check that by using console.log
        // console.log(data.status)
        // console.log(data.data.recipes)
        
  
        setIsLoading(false);
        setError("")

        // If an error occurs at any point in the try block, it will be caught in the catch block.
        // In the catch block, we log the error and rethrow it. This allows the error to be caught by the calling function (or component) for further handling.
      } catch (error){
        
        // this condition is just to stop showing the error if its called AbortError because it from the cleanUp function 
        if(error.name !== "AbortError") {
          setError(error.message);
          console.error(error.message);
        }

      } finally{
        setIsLoading(false)
        setApiCalled(true); 
      }
    }

    handleCloseRecipe() // close RecipeDetails before a new fetching

    fetchRecipes();  // Call fetchData when the component mounts

    // CleanUp function
    return () => { controller.abort(); }

  }, [query, currentPage])
  // Empty "Dependency array" means this effect runs once
  // in case we wanted to rerender the useEffect function again we had to pass this param so it will render again when something was typed in the searchBar, in this case we updated pages or search

 


  return (
    <div className='bg-gradient-to-br from-color-grad-1 to bg-color-grad-2'>
      <div className='container grid grid-cols-3 grid-rows-1'>
        <Navbar query={query} setQuery={setQuery} savedRecipes={savedRecipes} handleDeleteSaved={handleDeleteSaved} />

        <div className='flex flex-col justify-between bg-white mb-[79px] rounded-bl-xl'>

        {query.length < 4 && <NumCharacters/>}

        {(apiCalled && recipes.length > 0) ? 
        (<>
            <SearchResult displayedRecipes={displayedRecipes} isLoading={isLoading} error={error} handleSelectedRecipe={handleSelectedRecipe} />
            <Pagination recipes={recipes} currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
          </>
        ) : 

        (apiCalled && <NoResults />)}

        </div>
     
        {selectedId ? <RecipeDetails selectedId={selectedId} handleCloseRecipe={handleCloseRecipe} KEY={KEY} handleSaved={handleSaved} savedRecipes={savedRecipes} /> : <Main/>}
      </div>
    </div>
  );
}

export default App;
