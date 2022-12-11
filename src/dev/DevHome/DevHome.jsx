import React, {Component} from 'react';
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DevPortfolio from '../DevPortfolio/DevPortfolio';
import "./DevHome.css"
import WelcomeBanner from '../../common/WelcomeBanner';
import Header from '../../common/Header';
import Context from '../../Context';

const DEV = "dev"

export default class DevHome extends Component {
    static contextType = Context;

    render() {
        return (<>
            <Header env={DEV} handleShow={this.context.handleShow} />
            <div className="homeDiv center">
                <WelcomeBanner src="https://www.dropbox.com/s/eyyaw5nn9h84izu/dPortfolioVid.mp4?raw=1" message="I build software applications"/>
                <div className="leftRightContainer">
                    <h2>About Me:</h2>
                    <div className="rightContainer">
                        {this.renderDescription()}
                        <div className="social">
                            <a href="https://github.com/kmasullo-fadv" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faGithubSquare } size="2x"/></a>
                            <a href="https://www.linkedin.com/in/kameron-masullo/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faLinkedin } size="2x"/></a>
                        </div>
                    </div>
                </div>
            </div>
            <DevPortfolio />
        </>)
    }

    renderDescription = () => {
        return (
            <div><p>I derive great joy from the whole development process: from the excitement of early concept discussions, and from the satisfaction of seeing wireframes start to take shape; from all the pieces coming together in code, and yes, even from the inevitable problem solving when things don't work as planned. I take great care to deliver the best, cleanest code that I can, and I always strive to learn and improve.</p><br/>
            <p>Whether you are an individual looking for a freelance developer to get your project off the ground, or a hiring manager looking for the newest addition to your team, I'd love to hear from you!</p><br/></div>
        )
    }
}