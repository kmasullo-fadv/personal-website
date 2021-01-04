import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default class SongPLayer extends Component {
    render(){
        return (
            <ReactAudioPlayer
                    src={`${process.env.PUBLIC_URL}/mp3/${this.props.path}`} controls controlsList="nodownload"
            />
        )
    }
}