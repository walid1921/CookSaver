import { FiChevronLeft, FiChevronRight } from "react-icons/fi";



function Pagination({ recipes, currentPage, onPageChange, totalPages }) {



  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  }



  return (

    <div className="flex flex-col gap-6  mb-14">
      <p className="text-center text-[#c0bfbf]">
        Found <strong className=" text-color-primary">{recipes.length}</strong> results
      </p>

      <div className="flex justify-center items-center gap-5">

        <button
          className={`${currentPage === 1 ? 'disabled' : ''}  flex gap-2 px-4 py-1 bg-color-grey-light-2 rounded-full text-color-primary font-bold  transition-all ease-in duration-150 hover:bg-[#dddbdb]`}
          onClick={handlePrevious}
        >
          <FiChevronLeft className={`${currentPage === 1 ? 'disabled' : ''} text-color-primary w-6 h-6`} />
          Previous
        </button>


        <div className='page'>
          <p className="text-color-primary font-bold">{currentPage}</p>
        </div>


        <button
          className={`${currentPage === totalPages ? 'disabled' : ''}  flex gap-2 px-4 py-1 bg-color-grey-light-2 rounded-full text-color-primary font-bold  transition-all ease-in duration-150 hover:bg-[#dddbdb]`}
          onClick={handleNext}
        >
          Next
          <FiChevronRight className={`${currentPage === totalPages ? 'disabled' : ''} text-color-primary w-6 h-6`} />
        </button>


      </div>
    </div>
  )
}

export default Pagination
