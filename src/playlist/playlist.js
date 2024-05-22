import React from "react";
import styles from './playlist.module.css'
import Track from "../track/track";

export default function Playlist() {
    return (
        <div className={styles.Div}>
        <h2 className={styles.Playlist}>Playlist</h2>
        <Track buttonSymbol="-" />
        <button type="submit" className={styles.Button}>Save to Spotify</button>
        </div>
    )
}