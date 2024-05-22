import React from 'react';
import './App.css';
import Searchbar from './searchbar/searchbar';
import SearchResults from './searchResults/searchResults';
import Playlist from './playlist/playlist';

function App() {
  return (
    <div className="App">
      <header className='Header'>
      <h1 className='Title'>Ja<span className='M'>mmm</span>ing</h1>
      </header>
      <Searchbar />
      <div className='Main-content'>
      <SearchResults />
      <Playlist /> 
      </div>
    </div>
  );
}

export default App;
