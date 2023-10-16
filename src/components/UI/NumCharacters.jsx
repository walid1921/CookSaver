import { FiSmile } from "react-icons/fi"

function NumCharacters() {
  return (
    <div className="mt-6 flex flex-col justify-center items-center h-full">

      <p className='text-color-primary text-lg flex items-center gap-3'>
      <FiSmile size={25}  />
        Start by searching for a recipe</p>
      <span className='text-[#c0bfbf] text-sm'>(Please enter at least 4 characters)</span>
    </div>
  )
}

export default NumCharacters
