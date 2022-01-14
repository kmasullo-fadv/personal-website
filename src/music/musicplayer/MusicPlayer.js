import React from 'react';
import "./MusicPlayer.css"

const MusicPlayer = () => {
        return (
            <div className="playerContainer">
                <iframe
                    title="sundowning-album-bandcamp"
                    style={{border: 0, width: "600px", height: "1000px"}}
                    src="https://bandcamp.com/EmbeddedPlayer/album=133674501/size=large/bgcol=333333/linkcol=e99708/transparent=true/"
                    seamless
                >
                    <a href="https://kameronmasullo.bandcamp.com/album/sundowning" target="_blank" rel="noreferrer">Sundowning by Kameron Masullo</a>
                </iframe>
            </div>
        )
}

export default MusicPlayer;