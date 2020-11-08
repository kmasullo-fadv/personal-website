import React, {Component} from 'react'
import musBanner from "../img/musBanner.png"
import "./MusHome.css"


export default class MusHome extends Component {


    render() {
        return (
            <div className="musHome">
                <img src={musBanner} alt="Kameron Masullo Banner" className="musBanner"/>
                <div className="musHomeContent">
                    <div className="newsColumn">
                        <h3>News</h3>
                        <button>New Album Now Available</button>
                        <button>Brand New Site! 11/8/2020</button>
                    </div>
                    <div className="newsContent">
                        <h3>New Album Sundowning now available</h3>
                        <p>Kameron Masullos' new album, Sundowning,, is now available for purchase or streaming on all platforms.</p>
                    </div>
                </div>
            </div>
        );
    };
};