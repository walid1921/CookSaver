import { ImSpoonKnife } from "react-icons/im";

const Main = () => {

  return (
    <div className='col-start-2 col-end-4 h-[1050px] mb-20 select-none bg-color-grey-light-1 border rounded-br-xl'>
      
      {/* MAIN PAGE */}

      <div className='flex items-center justify-center gap-3 h-[40%]'>

        <div className='rounded-full p-3 bg-gradient-to-br from-color-primary to-color-grad-1 opacity-50'>
        <ImSpoonKnife className='w-5 h-5 text-white' />
        </div>
        <span className='logo-font text-gray-300 font-semibold text-[30px]'>Enjoy your meal !</span>
      </div>


    </div >
  );
};

export default Main;