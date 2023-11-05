import { HiUserGroup } from "react-icons/hi";


const Servings = ({servings}) => {
  return (
    <div className='flex items-center font-semibold'>
      <HiUserGroup className='text-white w-6 h-6 mr-3' />
      <span className='mr-2 select-none'>
        {servings}

        </span>
      <p className='select-none'>SERVICES</p>
    </div>
  );
};

export default Servings;