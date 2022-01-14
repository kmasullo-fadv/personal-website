import React from "react";

const WelcomeBanner = (props) => {
    return (
        <div className="welcomeBanner">
            <video className="portfolioVid" autoPlay muted loop>
                <source src={props.src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="headerText">
                <h2 className="px65">Welcome</h2>
                <h2 className="px50">{props.message}</h2>
            </div>
        </div>
    )
}

export default WelcomeBanner;