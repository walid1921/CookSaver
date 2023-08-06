import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchResult from './components/SearchResult';
import Main from './components/Main';


function App() {
  return (
    <div className='bg-gradient-to-br from-color-grad-1 to bg-color-grad-2'>
      <div className='container grid grid-cols-3 grid-rows-1'>
        <Navbar />
        <SearchResult/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
