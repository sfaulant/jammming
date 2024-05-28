import React, {useState } from 'react';
import './App.css';
import Searchbar from './searchbar/searchbar';
import SearchResults from './searchResults/searchResults';
import Playlist from './playlist/playlist';
import trackList from './trackObjects';
import Spotify from './accessToken';


function App() {
  const [ results, setResults ] = useState([]);
  const [ playlist, setPlaylist ] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [ savedPlaylist ] = useState(trackList);

  const returnResults = (e) => {
    const search = e.target.value.toLowerCase();
    if (search === '') {
      setResults([]); // Clear results when search input is empty
    } else {
      const returnedResults = trackList.filter(track => 
        track.name.toLowerCase().startsWith(search) || 
        track.artist.toLowerCase().startsWith(search) || 
        track.album.toLowerCase().startsWith(search)
      );
      setResults(returnedResults);
    }
  };

  const handleAddToPlaylist = (track) => {
    const isTrackInPlaylist = playlist.some((playlistTrack) => playlistTrack.id === track.id);
    if(!isTrackInPlaylist) {
    setPlaylist([...playlist, track]);
    }
  };

  const handleRemoveFromPlaylist = (track) => {
    setPlaylist(playlist.filter((playlistTrack) => playlistTrack.id !== track.id));
  };

  const savePlaylist = async () => {
    const trackURIs = playlist.map(track => track.uri);
  
    try {
      const accessToken = await Spotify.getAccessToken();
  
      if (accessToken) {
        const userId = (await fetch('https://api.spotify.com/v1/me', {
          headers: { 'Authorization': `Bearer ${accessToken}` }
        })).json().then(data => data.id);
  
        const playlistCreationResponse = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name: playlistName || '' })
        });
  
        const playlistData = await playlistCreationResponse.json();
        const playlistId = playlistData.id;
  
        await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ uris: trackURIs })
        });
  
        console.log('Playlist saved successfully!');
        setPlaylistName('');
        setPlaylist([]);
      } else {
        // Handle case where no access token is retrieved (optional)
        console.log('No access token available');
      }
    } catch (error) {
      console.error('Error saving playlist:', error);
    }
  };


  return (
    <div className="App">
      <header className='Header'>
      <h1 className='Title'>Ja<span className='M'>mmm</span>ing</h1>
      </header>
      <Searchbar onChange={returnResults} />
      <div className='Main-content'>
      <SearchResults results={results} onAddToPlaylist={handleAddToPlaylist} />
      <Playlist 
      tracks={playlist} 
      onRemoveFromPlaylist={handleRemoveFromPlaylist} 
      /*value={savedPlaylist} */
      playlistName={playlistName} 
      setPlaylistName={setPlaylistName} 
      savePlaylist={savePlaylist} /> 
      </div>
    </div>
  );
}

export default App;
