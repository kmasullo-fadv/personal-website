import React, {Component} from 'react'
import longBanner from '../img/longBanner.png'
import tallBanner from '../img/tallBanner.png'
import {Link} from 'react-router-dom'
import "./MusHeader.css"

export default class MusHome extends Component {



    render() {
        return (
            <div className="musHeader">
                <Link to="/"><img src={longBanner} alt="Kameron Masullo" className="longBanner" /></Link>
                <Link to="/"><img src={tallBanner} alt="Kameron Masullo" className="tallBanner" /></Link>
                <nav>
                    <Link to="/music">Home</Link>
                    <Link to="/music/listen">Listen</Link>
                    <Link to="/music/contact">Contact</Link>
                </nav>
            </div>
        );
    };
};