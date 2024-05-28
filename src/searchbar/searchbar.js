import React from "react";
import styles from './/searchbar.module.css'

export default function Searchbar({ onChange }) {
return (
    <form>
        <input type="text" className={styles.SearchInput} placeholder="Search for a song" onChange={onChange} />
        <button type="submit" className={styles.Submit}>Search</button>
    </form>
)
}