import { BsEmojiSmile } from "react-icons/bs";
import { PiCookingPot } from "react-icons/pi";

const Main = () => {

  return (
    <div className='col-start-2 col-end-4 h-[750px] mb-10 select-none bg-slate-50 border rounded-br-xl'>
      
      {/* MAIN PAGE */}

      <div className='flex items-center justify-center gap-3 h-[30%]'>

        <div className='rounded-full p-3 bg-gradient-to-br from-color-primary to-color-grad-1 opacity-50'>
        <PiCookingPot className='w-5 h-5 text-white' />
        </div>
        <span className='logo-font text-gray-300 font-semibold text-[30px]'>Enjoy your meal !</span>
      </div>

      <div className="mt-6 flex flex-col justify-center items-center  gap-4">

      <p className='text-color-primary text-lg flex items-center gap-3'>
      <BsEmojiSmile size={25}  />
        Start by searching for a recipe</p>
      <span className='text-[#c0bfbf] text-sm'>(Please enter at least 4 characters)</span>
    </div>


    </div >
  );
};

export default Main;