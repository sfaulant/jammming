import React from "react";
import styles from './track.module.css'

export default function Track(props) {
    return (
    <div className={styles.Div}>
        <div className={styles.Flexcontainer}>
            <div className={styles.Songdetails}>
            <h3>Song title</h3>
            <p>Song author</p>
            </div> 
            <button type="add" className={styles.Button}>{props.buttonSymbol}</button>
        </div>
        <hr />
    </div>
    )
}