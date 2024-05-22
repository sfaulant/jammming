import React from "react";
import styles from './/searchbar.module.css'

export default function Searchbar() {
return (
    <form>
        <input type="text" name="search" className={styles.SearchInput} placeholder="Search for a song" />
        <button type="submit" className={styles.Submit}>Search</button>
    </form>
)
}