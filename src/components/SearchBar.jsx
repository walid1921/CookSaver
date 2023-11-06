import Button from './UI/Button'

function SearchBar({ query, setQuery }) {
  return (
    <div className='bg-white rounded-full flex drop-shadow-md'>
      <input
        type="text"
        placeholder='Search Your Recipe...'
        className=' rounded-l-full px-8 outline-none text-gray-500 border focus:ring-1 z-10 ring-color-primary transition-all ease-in-out duration-300'
        value={query}
        onChange={
          (e) => setQuery(e.target.value)
        }
      />

      <Button />

    </div >
  )
}

export default SearchBar
