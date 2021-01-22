import React, { Component } from "react";
import SA from '../img/SA.gif'
import SB from '../img/SB.gif'
import CT from '../img/CT.gif'
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './DevPortfolio.css'

export default class DevPortfolio extends Component {
    render() {
        return (
            <div className="projectsContainer">
                <div className="projectDiv">
                    <div className="projectInfo">
                        <h2><a href="https://socraticaudio.com/" target="_blank" rel="noopener noreferrer">Socratic Audio<FontAwesomeIcon icon={ faExternalLinkAlt } className="small"/></a></h2>
                        <div className="line"/>
                        <p>
                            Socratic Audio offers mixing and editing services to musicians, podcasters, recording engineers, etc. This simple website is straight and to-the-point, allowing 
                            visitors to view a summary of services offered, hear samples, and request a quote.
                        </p>
                        <p>
                            I developed this website personally for my business.
                        </p>
                        <p>
                            Development Environment: React
                        </p>
                        <a href="https://github.com/kmasullo/km-audio-website" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faGithubSquare } size="2x"/></a>
                    </div>
                    <div className="projectImages">
                        <img src={SA} alt="socratic-audio-screenshot" className="projectImage"/>
                    </div>
                </div>
                <div className="projectDiv">
                    <div className="projectInfo">
                        <h2><a href="https://spacebattleship.vercel.app/" target="_blank" rel="noopener noreferrer">Space Battleship<FontAwesomeIcon icon={ faExternalLinkAlt } className="small"/></a></h2>
                        <div className="line"/>
                        <p>
                            Space Battleship is a space-themed battleship game that allows users to play against an AI (coming soon: 
                            play against another logged-in user). Users are encouraged to create an account so that their stats can 
                            be saved and their high scores can be beaten!
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
                        <h3>Gameplay Theme:</h3>
                        <audio controls controlsList="nodownload">
                            <source src={`${process.env.PUBLIC_URL}/mp3/game.mp3`} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                        <h3>Menu Theme:</h3>
                        <audio controls controlsList="nodownload">
                            <source src={`${process.env.PUBLIC_URL}/mp3/menu.mp3`} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                        <a href="https://github.com/mloldacre/battleship-jmkbh" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faGithubSquare } size="2x"/></a>
                    </div>
                    <div className="projectImages">
                        <img src={SB} alt="space-battleship-screenshot" className="projectImage"/>
                    </div>
                </div>
                <div className="projectDiv">
                    <div className="projectInfo">
                        <h2><a href="https://chordtester.vercel.app/" target="_blank" rel="noopener noreferrer">ChordTester<FontAwesomeIcon icon={ faExternalLinkAlt } className="small"/></a></h2>
                        <div className="line"/>
                        <p>
                            ChordTester is an interactive music app that allows users to click notes on a guitar then hear the chord. 
                            After signing up, a user may save chords to project folders for future reference. This app is great for 
                            musicians on-the-go who do not have access to their instrument and want to take note of an idea that comes 
                            to mind. It's also a great reference tool for students and teachers.
                        </p>
                        <p>
                            This full-stack app is a personal project, and I was responsible for all of its features. I also recorded all of the 
                            audio samples heard during playback.
                        </p>
                        <p>
                            Development Environment: Tone.js, React, Node, Express, PostgreSQL, Knex.
                        </p>
                        <a href="https://github.com/kmasullo/chordtester-frontend" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faGithubSquare } size="2x"/></a>
                    </div>
                    <div className="projectImages">
                        <img src={CT} alt="chordtester-screenshot" className="projectImage"/>
                    </div>
                </div>
            </div>
        )
    }
}