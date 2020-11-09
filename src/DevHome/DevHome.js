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
                        <img src={face} alt="kameronmasullo" className="faceImage"/>
                    </div>
                    <div className="rightContainer">
                        <div>
                            <p>
                                I'm a New England-based developer.
                            </p><br/>
                            <p>My approach to life and work is both methodical and creative; while my analytical tendencies offer practical solutions to the problems I face, my lifelong practice as a musician has taught me more inventive modes of thought. As a developer, I bring these qualities together to offer unique solutions to the tasks at hand.</p><br/>
                            <p>Whether you are an individual looking for a freelance developer to get your project off the ground, or a hiring manager looking for the newest addition to your team, I'd love to hear from you!</p><br/>
                        </div>
                        <div className="social">
                            <a href="https://github.com/kmasullo" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faGithubSquare } size="2x"/></a>
                            <a href="https://www.linkedin.com/in/kameron-masullo/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faLinkedin } size="2x"/></a>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}