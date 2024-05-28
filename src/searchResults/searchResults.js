import React from "react";
import styles from './searchResults.module.css';
import Track from "../track/track";

export default function SearchResults({ results = [], onAddToPlaylist }) {

    return (
        <div className={styles.Resultsdiv}>
            <h2 className={styles.Resultstitle}>Results</h2>
            {results.map((track, index) => (
                <Track key={index} track={track} buttonSymbol="+" onAddToPlaylist={onAddToPlaylist} />
            ))};
        </div>
    )
}