import React from 'react'

const MusListen = () => {
    return (
        <div className="d-flex justify-content-center mt-4">
            <iframe title="musicPlayer"
                style={{border: 0, width: '350px', height: '720px'}}
                src="https://bandcamp.com/EmbeddedPlayer/album=133674501/size=large/bgcol=333333/linkcol=e99708/transparent=true/" seamless>
                    <a href="https://kameronmasullo.bandcamp.com/album/sundowning">Sundowning by Kameron Masullo</a>
            </iframe>
        </div>
    )
}

export default MusListen;