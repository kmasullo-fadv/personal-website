import React, {Component } from 'react'
import albumStore from "./albumStore"
import SongPLayer from './SongPLayer'
import "./MusListen.css"

export default class MusListen extends Component {
    state = {
        currentAlbum: "Sundowning",
        currentSong: 0,
    }

    handleClick = (e) => {
        e.preventDefault();
        const id = parseInt(e.target.id);
        this.setState({currentSong: id, autoPlay: true})
    }

    album = (title) => {
        return(
            <div className="albumDiv">
                <h4>{title}</h4>
                {albumStore[title].tracks.map((album, i) => this.songSelector(album.title, i))}
            </div>
        )
    }

    songSelector = (title, i) => {
            return(
                <div className="songDiv" key={title}>
                    <button id={i} onClick={this.handleClick} className="songButton">{title}</button>
                </div>
            )
    }

    render() {
        return (
            <div className="playerContainer">
                <div className="playerBanner">
                    <div className="playerBannerImgDiv">
                        <img src={albumStore[this.state.currentAlbum].cover} alt={albumStore[this.state.currentAlbum].cover} className="playerBannerImg"></img>
                    </div>
                    <div className="playerBannerTitles">
                        <h2>{albumStore[this.state.currentAlbum].tracks[this.state.currentSong].title}</h2>
                        <h3 className="albumName">{this.state.currentAlbum}</h3>
                        <SongPLayer path={albumStore[this.state.currentAlbum].tracks[this.state.currentSong].file} />
                    </div>
                </div>
                <div className="tracks">
                    {this.album("Sundowning")}
                </div>
            </div>
        )
    }
}