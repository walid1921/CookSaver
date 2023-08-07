import React, { useState } from 'react';

import { HiUserGroup } from "react-icons/hi";
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";

const Servings = ({onCountChange}) => {

  const [count, setCount] = useState(4)

  const handleIncrement = () => {
    setCount((prevCount) => Math.max(prevCount + 1, 1));
    onCountChange(30); 
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 1));
    onCountChange(-30); 
  };


  return (
    <div className='flex items-center font-semibold'>
      <HiUserGroup className='text-color-primary w-6 h-6 mr-3' />
      <span className='mr-2 select-none'>{count}</span>
      <p className='select-none'>SERVICES</p>
      <FiMinusCircle className='ml-4 w-5 h-5 text-color-primary hover:text-gray-600 transition-all ease-in duration-150 cursor-pointer ' onClick={handleDecrement} />
      <FiPlusCircle className='mx-2 w-5 h-5 text-color-primary hover:text-gray-600 transition-all ease-in duration-150 cursor-pointer' onClick={handleIncrement} />
    </div>
  );
};

export default Servings;