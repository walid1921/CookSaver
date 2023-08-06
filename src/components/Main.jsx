import React from 'react';

import pizza1 from '../assets/img/pizza1.jpg'
import DirectionBtn from "../components/UI/DirectionBtn"

import { TbClockHour3 } from "react-icons/tb";
import { HiUserGroup } from "react-icons/hi";
import { FiBookmark } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";



const Main = () => {
  return (
    <div className='col-start-2 col-end-4 h-[1050px] mb-20 '>


      {/* MAIN IMAGE */}

      <div className='background-pizza h-[25%] object-cover relative'>

        <div className='bg-gradient-to-br from-color-primary to-color-grad-1 px-6 rounded-tl-xl right-0 opacity-80 bottom-0 absolute'>
          <p className=' logo-font text-white font-semibold text-[40px] opacity-100'>
            CALIFORNIA PIZZA
          </p>
        </div>


      </div>


      {/* SMALL NAV  */}

      <div className='flex items-center justify-around py-5 bg-color-grey-light-1'>
        <div className='flex items-center font-semibold'>
          <TbClockHour3 className='text-color-primary w-6 h-6 mr-3' />
          75 MIN
        </div>

        <div className='flex items-center font-semibold'>
          <HiUserGroup className='text-color-primary w-6 h-6 mr-3' />
          <span className='mr-2'>4</span>
          SERVICES
          <FiMinusCircle className='ml-4 w-5 h-5 text-color-primary cursor-pointer ' />
          <FiPlusCircle className='mx-2 w-5 h-5 text-color-primary cursor-pointer ' />
        </div>

        <div className=' rounded-full p-3 bg-gradient-to-br from-color-primary to-color-grad-1 cursor-pointer transition-all ease-in duration-150 hover:opacity-75'>
          <FiBookmark className=' text-white w-6 h-6' />
        </div>
      </div>


      {/* RECIPE INGREDIENTS  */}

      <div className='center flex-col py-16 bg-color-grey-light-2 w-full'>
        <h2 className=' text-color-primary font-bold text-xl justify-center'>RECIPE INGREDIENTS</h2>

        <ul className='pt-5 w-full flex flex-col flex-wrap justify-center items-center text-gray-600 gap-5 h-[250px] '>
          <li className='flex items-center gap-3 mr-10'>
            <FiCheck className='text-color-primary w-6 h-6' />
            Lorem ipsum, dolor sit amet
          </li>

          <li className='flex items-center gap-3 mr-10'>
            <FiCheck className='text-color-primary w-6 h-6' />
            Lorem ipsum, dolor sit amet
          </li>

          <li className='flex items-center gap-3 mr-10'>
            <FiCheck className='text-color-primary w-6 h-6' />
            Lorem ipsum, dolor sit amet
          </li>


          <li className='flex items-center gap-3 mr-10'>
            <FiCheck className='text-color-primary w-6 h-6' />
            Lorem ipsum, dolor sit amet
          </li>

          <li className='flex items-center gap-3 mr-10'>
            <FiCheck className='text-color-primary w-6 h-6' />
            Lorem ipsum, dolor sit amet
          </li>

          <li className='flex items-center gap-3 mr-10'>
            <FiCheck className='text-color-primary w-6 h-6' />
            Lorem ipsum, dolor sit amet
          </li>

          <li className='flex items-center gap-3 mr-10'>
            <FiCheck className='text-color-primary w-6 h-6' />
            Lorem ipsum, dolor sit amet
          </li>

          <li className='flex items-center gap-3 mr-10'>
            <FiCheck className='text-color-primary w-6 h-6' />
            Lorem ipsum, dolor sit amet
          </li>

          <li className='flex items-center gap-3 mr-10'>
            <FiCheck className='text-color-primary w-6 h-6' />
            Lorem ipsum, dolor sit amet
          </li>

          <li className='flex items-center gap-3 mr-10'>
            <FiCheck className='text-color-primary w-6 h-6' />
            Lorem ipsum, dolor sit amet
          </li>
        </ul>
      </div>

      {/* HOW TO COOK IT  */}

      <div className='center flex-col py-16 bg-color-grey-light-1 w-full gap-5 rounded-br-xl'>
        <h2 className=' text-color-primary  font-bold text-xl justify-center'>HOW TO COOK IT</h2>
        <p className='text-gray-600 w-[70%] text-center'>This recipe was carefully designed and tested by <span className='font-bold'>A Spicy Perspective</span>. Please check out directions at their website.</p>
        <DirectionBtn />
      </div>



    </div>
  );
};

export default Main;