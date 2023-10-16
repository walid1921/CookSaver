import { BsEmojiSmileUpsideDown } from "react-icons/bs"


function NoResults() {
  return (
    <div className="mt-6 flex flex-col justify-center items-center h-full gap-4">

      <p className=' text-red-400 text-lg flex items-center gap-3'>
        <BsEmojiSmileUpsideDown size={25} />
        No results found</p>
      <span className='text-[#c0bfbf] text-sm'>(Try for Example : pizza, pasta...)</span>
    </div>
  )
}

export default NoResults
