import React from "react";
import styles from './searchResults.module.css';
import Track from "../track/track";

export default function SearchResults() {
    return (
        <div className={styles.Resultsdiv}>
            <h2 className={styles.Resultstitle}>Results</h2>
            <Track buttonSymbol="+" />
        </div>
    )
}