import React from "react";
import styles from './track.module.css'

export default function Track({ track, buttonSymbol, onAddToPlaylist, onRemoveFromPlaylist }) {

    const handleButtonClick = () => {
        if (buttonSymbol === "+") {
          onAddToPlaylist(track);
        } else if (buttonSymbol === "-") {
          onRemoveFromPlaylist(track);
        }
      };

    if (!track || !track.name || !track.artist || !track.album) {
        return null; 
    }

    return (
    <div className={styles.Div}>
            <div className={styles.Flexcontainer} key={track.id}>
                <div className={styles.Songdetails}>
                    <h3>{track.name}</h3>
                    <p>{track.artist} - {track.album}</p>
                </div>
                <button 
                type="button" 
                className={styles.Button} 
                onClick={handleButtonClick}>{buttonSymbol}</button>
            </div>
            <hr />
    </div>
    )
}