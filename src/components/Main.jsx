// import React, { useState, useContext } from 'react';

import { ImSpoonKnife } from "react-icons/im";

// import BookmarkContext from './BookmarkContext ';




const Main = ({ recipes  }) => {



  // const { setBookmarkCount } = useContext(BookmarkContext);

  // const [time, setTime] = useState(120);
  // const handleTimeChange = (value) => {
  //   setTime((prevTime) => Math.max(prevTime + value, 30));
  // }

  // const [bookmarked, setBookmarked] = useState(false)
  // const handleBookmarked = () => {
  //   setBookmarked(!bookmarked);
  //   setBookmarkCount((prevCount) => bookmarked ? prevCount - 1 : prevCount + 1);
  // };


  return (
    <div className='col-start-2 col-end-4 h-[1050px] mb-20 select-none bg-color-grey-light-1 border rounded-br-xl'>

      {/* {recipes.map(i =>)} */}
        
      
      {/* MAIN IMAGE */}

      <div className='flex items-center justify-center gap-3 h-[40%]'>

        <div className='rounded-full p-3 bg-gradient-to-br from-color-primary to-color-grad-1 cursor-pointer transition-all ease-in duration-150 opacity-50'>
          <a href="/"><ImSpoonKnife className='w-5 h-5 text-white' /></a>
        </div>
        <span className='logo-font text-gray-300 font-semibold text-[30px]'>Have fun!</span>
      </div>

     


      {/* SMALL NAV  */}

      {/* <div className='flex items-center justify-around py-5 bg-color-grey-light-1'>

        <div className='flex items-center font-semibold'>
          <TbClockHour3 className='text-color-primary w-6 h-6 mr-3' />
          <span className='mr-4'>{time}</span>
          <p>MIN</p>
        </div>

        <div>
          <Servings onCountChange={handleTimeChange} />
        </div>

        <div className=' rounded-full p-3 bg-gradient-to-br from-color-primary to-color-grad-1 cursor-pointer transition-all ease-in duration-150 hover:opacity-75' onClick={handleBookmarked}>
          <FiBookmark className={`${bookmarked ? 'fill-white text-white w-6 h-6' : 'text-white w-6 h-6'}`} />
        </div>

      </div> */}


      {/* RECIPE INGREDIENTS 

      <div className='center flex-col py-16 bg-color-grey-light-2 w-full'>
        <h2 className=' text-color-primary font-bold text-xl justify-center'>RECIPE INGREDIENTS</h2>

        <ul className='pt-5 w-[90%] flex flex-col flex-wrap justify-center items-left  text-gray-600 gap-5 h-[250px] '>



          <li className='flex items-center gap-3 mr-10'>
            <FiCheck className='text-color-primary w-6 h-6' />
            1
            medium head cauliflower cut into florets
          </li>

          <li className='flex items-center gap-3 mr-10'>
            <FiCheck className='text-color-primary w-6 h-6' />
            1/2
            cup mozzarella shredded
          </li>

          <li className='flex items-center gap-3 mr-10'>
            <FiCheck className='text-color-primary w-6 h-6' />

            Salt and pepper to taste
          </li>


          <li className='flex items-center gap-3 mr-10'>
            <FiCheck className='text-color-primary w-6 h-6' />
            1/2
            cup barbecue sauce
          </li>

          <li className='flex items-center gap-3 mr-10'>
            <FiCheck className='text-color-primary w-6 h-6' />
            Red onion to taste thinly sliced
          </li>

          <li className='flex items-center gap-3 mr-10'>
            <FiCheck className='text-color-primary w-6 h-6' />
            1
            egg
          </li>

          <li className='flex items-center gap-3 mr-10'>
            <FiCheck className='text-color-primary w-6 h-6' />
            1
            tsp oregano or italian seasoning blend
          </li>

          <li className='flex items-center gap-3 mr-10'>
            <FiCheck className='text-color-primary w-6 h-6' />
            1
            cup chicken cooked and shredded
          </li>

          <li className='flex items-center gap-3 mr-10'>
            <FiCheck className='text-color-primary w-6 h-6' />
            3/4
            cup mozzarella shredded
          </li>

          <li className='flex items-center gap-3 mr-10'>
            <FiCheck className='text-color-primary w-6 h-6' />
            Fresh cilantro to taste
          </li>
        </ul>
      </div> */}

      {/* HOW TO COOK IT 

      <div className='center flex-col py-16 bg-color-grey-light-1 w-full gap-5 rounded-br-xl'>
        <h2 className=' text-color-primary  font-bold text-xl justify-center'>HOW TO COOK IT</h2>
        <p className='text-gray-600 w-[70%] text-center'>This recipe was carefully designed and tested by <span className='font-bold'>A Spicy Perspective</span>. Please check out directions at their website.</p>
        <DirectionBtn />
      </div> */}


    </div >
  );
};

export default Main;