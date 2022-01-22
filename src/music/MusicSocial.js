import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify, faBandcamp } from "@fortawesome/free-brands-svg-icons";
import React from "react";

const MusicSocial = () => {

    return (
        <div>
            <a href="https://open.spotify.com/artist/5G946pHaGg1bWL8UjiZPdB?si=D0iBu9EsTSO5Vr8t-2MYfQ" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faSpotify } size="2x" /></a>
            <a href="https://kameronmasullo.bandcamp.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faBandcamp } size="2x" /></a>
        </div>
    )
}

export default MusicSocial;