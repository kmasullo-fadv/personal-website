import React, {Component} from 'react';
import face from "../img/facecircle.svg"
import "./DevHome.css"

export default class DevHome extends Component {

    render() {
        return (
            <>
            <div className="homeDiv">
                <div className="leftRightContainer">
                    <div className="leftContainer">
                        <h2 className="slideRight">Welcome</h2>
                        <div className="line" />
                        <img src={face} alt="kameronmasullo" className="faceImageL"/>
                    </div>
                    <div className="rightContainer">
                        <img src={face} alt="kameronmasullo" className="faceImageR"/>
                        <div>
                            <p className="slideLeft">
                                I'm a New England-based developer.
                            </p><br/>
                            <p className="slideLeft">
                                Here's all my useful info. Hire me now.
                            </p>
                        </div>
                        <img src={face} alt="kameronmasullo" className="faceImageB"/>
                    </div>
                </div>
            </div>
            </>
        )
    }
}