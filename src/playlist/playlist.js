import React, { useState } from "react";
import styles from './playlist.module.css'
import Track from "../track/track";
import Spotify from "../accessToken";

export default function Playlist({ tracks, onRemoveFromPlaylist, savePlaylist, playlistName, setPlaylistName }) {

const handleChange = (e) => {
    setPlaylistName(e.target.value);
}

const handleClick = () => {
    Spotify.getAccessToken().then(() => {
        savePlaylist(playlistName);
    });
};

    return (
        <div className={styles.Div}>
        <input type="text" className={styles.Input} onChange={handleChange} value={playlistName}></input>
        <hr className={styles.Hr} />
        {tracks.map((track) => (
                <Track 
                key={track.id} 
                track={track} 
                buttonSymbol="-" 
                onRemoveFromPlaylist={onRemoveFromPlaylist} />
            ))}
        <button type="submit" className={styles.Button} onClick={handleClick}>Save to Spotify</button>
        </div>
    )
}