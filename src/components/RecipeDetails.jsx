import { useEffect, useState, useContext } from "react";

import DirectionBtn from "../components/UI/DirectionBtn"
import Servings from './Servings';
import BookmarkContext from './BookmarkContext ';

import { FiBookmark } from "react-icons/fi";
import { TbClockHour3 } from "react-icons/tb";
import { FiCheck } from "react-icons/fi";
import Loader from "./UI/Loader";

function RecipeDetails({ selectedId, handleCloseRecipe, KEY }) {

  const [recipe, setRecipe] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const { setBookmarkCount } = useContext(BookmarkContext);

  // const [time, setTime] = useState(120);
  // const handleTimeChange = (value) => {
  //   setTime((prevTime) => Math.max(prevTime + value, 30));
  // }

  const [bookmarked, setBookmarked] = useState(false)
  const handleBookmarked = () => {
    setBookmarked(!bookmarked);
    setBookmarkCount((prevCount) => bookmarked ? prevCount - 1 : prevCount + 1);
  };


  useEffect(() => {
    async function fetchRecipeDetails() {

      try {
        setIsLoading(true);
        // setError("")

        const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${selectedId}?key=${KEY}`);


        console.log("Data u got", response)


        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        setRecipe(data.data.recipe)
        console.log(data.data.recipe)


        // if (data.results === 0){ 
        //   throw new Error("Recipe not found");
        // }


        // setRecipes(data.data.recipes);
        // console.log(data.status)
        // console.log(data.data.recipes)


        setIsLoading(false)


      } catch (error) {
        console.error(error.message);
        // setError(error.message);

      } finally {
        setIsLoading(false)
        // setApiCalled(true); 
      }
    }

    fetchRecipeDetails();

  }, [KEY, selectedId]) // we wrote it in "Dependency array" because as the selected Id changes then the effect will be executed again, so It's Important


  return (

    <div className='col-start-2 col-end-4 h-[1050px] mb-20 select-none bg-white'>
      {isLoading ? <Loader /> :
        (<>
          <header style={{ backgroundImage: `url(${recipe.image_url})` }} className='h-[25%]  bg-cover bg-no-repeat bg-center object-cover relative'>

            <button className=" border p-3 bg-white" onClick={handleCloseRecipe}>back</button>


            <div className='bg-gradient-to-br from-color-primary to-color-grad-1 px-6 rounded-tl-xl right-0 opacity-80 bottom-0 absolute'>
              <p className=' logo-font text-white font-semibold text-[40px] opacity-100'>
                {recipe.title}

              </p>
            </div>

          </header>


          <section>
            <div className='flex items-center justify-around py-5 bg-color-grey-light-1'>

              <div className='flex items-center font-semibold'>
                <TbClockHour3 className='text-color-primary w-6 h-6 mr-3' />
                <span className='mr-4'>{recipe.cooking_time}</span>
                <p>MIN</p>
              </div>


              <Servings servings={recipe.servings} 
              />

              {/* onCountChange={handleTimeChange}  */}


              <div className=' rounded-full p-3 bg-gradient-to-br from-color-primary to-color-grad-1 cursor-pointer transition-all ease-in duration-150 hover:opacity-75' onClick={handleBookmarked}>
                <FiBookmark className={`${bookmarked ? 'fill-white text-white w-6 h-6' : 'text-white w-6 h-6'}`} />
              </div>

            </div>

            {/* RECIPE INGREDIENTS  */}

            <div className='center flex-col py-16 bg-color-grey-light-2 w-full'>
              <h2 className=' text-color-primary font-bold text-xl justify-center'>RECIPE INGREDIENTS</h2>

              <ul className='pt-5 w-[90%] flex flex-col flex-wrap justify-center items-left  text-gray-600 gap-5 h-[250px] '>



                {/* {recipe.map((rec) => )} */}
                <li className='flex items-center gap-3 mr-10'>
                  <FiCheck className='text-color-primary w-6 h-6' />
                  1
                  medium head cauliflower cut into florets
                </li>


              </ul>
            </div>

            {/* HOW TO COOK IT  */}

            <div className='center flex-col py-16 bg-color-grey-light-1 w-full gap-5 rounded-br-xl'>
              <h2 className=' text-color-primary  font-bold text-xl justify-center'>HOW TO COOK IT</h2>
              <p className='text-gray-600 w-[70%] text-center'>This recipe was carefully designed and tested by <span className='font-bold'>{recipe.publisher}</span>. Please check out directions at their website.</p>
              <DirectionBtn url={recipe.source_url} />
            </div>

          </section>
        </>
        )}

    </div>
  )
}

export default RecipeDetails
