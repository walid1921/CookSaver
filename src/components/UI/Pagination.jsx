import { FiChevronLeft, FiChevronRight } from "react-icons/fi";



function Pagination({ currentPage, onPageChange, totalPages }) {



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
    <div className="flex justify-center items-center gap-5 mb-8">


      <button
        className={`${currentPage === 1 ? 'disabled hover:bg-[#ddd]' : ''}  flex gap-2 px-4 py-1 bg-color-grey-light-2 rounded-full text-color-primary font-bold  transition-all ease-in duration-150 hover:bg-color-primary hover:text-color-grey-light-2`}
        onClick={handlePrevious}
      >
        <FiChevronLeft className='text-color-primary w-6 h-6' />
        Previous
      </button>


      <div className='page'>
        <p className="text-color-primary font-bold">{currentPage}</p>
      </div>


      <button
        className={`${currentPage === totalPages ? 'disabled hover:bg-[#ddd]' : ''}  flex gap-2 px-4 py-1 bg-color-grey-light-2 rounded-full text-color-primary font-bold  transition-all ease-in duration-150 hover:bg-color-primary hover:text-color-grey-light-2`}
        onClick={handleNext}
      >
        Next
        <FiChevronRight className='text-color-primary w-6 h-6' />
      </button>


    </div>
  )
}

export default Pagination
