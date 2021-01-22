import React, {Component} from 'react';
// import face from "../img/facecircle.svg"
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DevHome.css"

export default class DevHome extends Component {

    render() {
        return (
            <>
            <div className="homeDiv">
                <div className="welcomeBanner welcomeBannerDev">
                    <div className="welcomeBannerDiv">
                        <h2 className="px65">Welcome</h2>
                        <h2 className="px50">I build web and mobile applications</h2>
                    </div>
                </div>
                <div className="leftRightContainer">
                    {/* <div className="leftContainer">
                        <img src={face} alt="kameronmasullo" className="faceImage"/>
                    </div> */}
                    <h2>About Me:</h2>
                    <div className="rightContainer">
                        <div>
                            <p>I derive great joy from the whole development process: from the excitement of early concept discussions, and from the satisfaction of seeing wireframes start to take shape; from all the pieces coming together in code, and yes, even from the inevitable problem solving when things don't work as planned. I take great care to deliver the best, cleanest code that I can, and I always strive to learn and improve.</p><br/>
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