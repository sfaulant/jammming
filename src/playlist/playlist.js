import React from "react";
import styles from './playlist.module.css'

export default function Playlist() {
    return (
        <div className={styles.Div}>
        <h2 className={styles.Playlist}>Playlist</h2>
        <div>
        <h3>Song title</h3>
        <p>Song author</p>
        <button type="add">+</button>
        </div>
        </div>
    )
}