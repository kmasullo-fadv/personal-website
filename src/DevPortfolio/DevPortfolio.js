import React, { Component } from "react";
import './DevPortfolio.css'

export default class DevPortfolio extends Component {

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

                    </div>
                </div>
            </div>
        )
    }
}