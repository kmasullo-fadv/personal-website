import React from 'react';
import song from './song';
import albumStore from './albumStore';

export default function album(title) {
        return(
            <div className="albumDiv">
                <h4>{title}</h4>
                {albumStore[title].tracks.map((album, i) => song(album.title, i))}
            </div>
        )
}