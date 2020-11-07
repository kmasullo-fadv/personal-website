import React, {Component} from 'react';
import face from "../img/facecircle.svg"
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DevHome.css"

export default class DevHome extends Component {

    render() {
        return (
            <>
            <div className="homeDiv">
                <div className="leftRightContainer">
                    <div className="leftContainer">
                        <h2>Welcome</h2>
                        <div className="line" />
                        <img src={face} alt="kameronmasullo" className="faceImageL"/>
                    </div>
                    <div className="rightContainer">
                        <div>
                            <p>
                                I'm a New England-based developer.
                            </p><br/>
                            <p>Whether you are an individual looking for a freelance developer to get your project off the ground, or a hiring manager looking for the newest addition to your team, I'd love to hear from you!</p><br/>
                            <p>Outside of coding, I am a musician and mix engineer. It is my dream to join a team of developers creating software for musicians.</p><br/>
                        </div>
                        <div className="social">
                            <a href="https://github.com/kmasullo" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faGithubSquare } size="2x"/></a>
                            <a href="https://www.linkedin.com/in/kameron-masullo/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faLinkedin } size="2x"/></a>
                        </div>
                        <img src={face} alt="kameronmasullo" className="faceImageB"/>
                    </div>
                </div>
            </div>
            </>
        )
    }
}