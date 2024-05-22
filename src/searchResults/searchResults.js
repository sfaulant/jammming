import React from "react";
import styles from './searchResults.module.css';

export default function SearchResults() {
    return (
        <div className={styles.Div}>
            <h2 className={styles.Results}>Results</h2>
            <div>
                <h3>Song title</h3>
                <p>Song author</p>
                <button type="add">+</button>
            </div>
        </div>
    )
}