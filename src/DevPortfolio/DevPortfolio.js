import React, { Component } from "react";
import sb0 from '../img/sbWelcome.png'
import sb1  from '../img/sbDashboard.png'
import sb2 from '../img/sbGameplay.png'
import sb3 from '../img/sbMenu.png'
import sb4 from '../img/sbVictory.png'
import ct0 from '../img/ctMain.png'
import ct1 from '../img/ctProject.png'
import ct2 from '../img/ctChord.png'
import ct3 from '../img/ctPlay.png'
import './DevPortfolio.css'

export default class DevPortfolio extends Component {
    state = {
        sbImg: 0,
        ctImg: 0,
    };

    sbImgs = [sb0, sb1, sb2, sb3, sb4];
    ctImgs = [ct0, ct1, ct2, ct3];

    prevSb = () => {
        this.state.sbImg === 0
        ? this.setState({sbImg: 4})
        : this.setState({sbImg: this.state.sbImg -1})
    }
    
    nextSb = () => {
        this.state.sbImg === 4
        ? this.setState({sbImg: 0})
        : this.setState({sbImg: this.state.sbImg +1})
    }

    prevCt = () => {
        this.state.ctImg === 0
        ? this.setState({ctImg: 3})
        : this.setState({ctImg: this.state.ctImg -1})
    }
    
    nextCt = () => {
        this.state.ctImg === 3
        ? this.setState({ctImg: 0})
        : this.setState({ctImg: this.state.ctImg +1})
    }
    
    render() {
        return (
            <div className="projectsContainer">
                <div className="projectDiv">
                    <div className="projectInfo">
                        <h2><a href="https://spacebattleship.vercel.app/" target="_blank" rel="noopener noreferrer">Space Battleship</a></h2>
                        <div className="line"/>
                        <p>
                            Space Battleship is a space-themed battleship game that allows users to play against an AI (coming soon: 
                            play against another logged-in user). Users are encouraged to create an account so that their stats can 
                            be saved and their high scores can be beat!
                        </p>
                        <p>
                            I collaborated with four other awesome developers on this project. I was the audio developer and 
                            theme music composer. I also worked on some of the front end features.
                        </p>
                        <p>
                            Development Environment: Tone.js, React, Node, Express, PostgreSQL, Knex.
                        </p>
                        <p>
                            Music Production Environment: Pro Tools.
                        </p>
                    </div>
                    <div className="projectImages">
                        <img src={this.sbImgs[this.state.sbImg]} alt="space-battleship-screenshot" className="projectImage"/>
                        <div className="slideButtons">
                            <button type="button" className="prev sb" onClick={this.prevSb}>&#10094;</button>
                            <button type="button" className="next sb" onClick={this.nextSb}>&#10095;</button>
                        </div>
                    </div>
                </div>
                <div className="projectDiv">
                    <div className="projectInfo">
                        <h2><a href="https://chordtester.vercel.app/" target="_blank" rel="noopener noreferrer">ChordTester</a></h2>
                        <div className="line"/>
                        <p>
                            ChordTester is an interactive music app which allows users to click notes on a guitar and play back the chord.
                            When logged-in, a user may save chords to project folders for future reference. This app is great for 
                            musicians on-the-go who do not have access to their instrument, and want to take note of an idea that comes 
                            to mind. It's also a great reference tool for students and teachers.
                        </p>
                        <p>
                            This full stack app is a personal project, and I was responsible for all features. I also recorded all of the 
                            audio samples heard during playback.
                        </p>
                        <p>
                            Development Environment: Tone.js, React, Node, Express, PostgreSQL, Knex.
                        </p>
                    </div>
                    <div className="projectImages">
                        <img src={this.ctImgs[this.state.ctImg]} alt="chordtester-screenshot" className="projectImage"/>
                        <div className="slideButtons">
                            <button type="button" className="prev" onClick={this.prevCt}>&#10094;</button>
                            <button type="button" className="next" onClick={this.nextCt}>&#10095;</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}