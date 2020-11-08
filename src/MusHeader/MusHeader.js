import React, {Component} from 'react'
import nameBanner from '../img/nameBanner.png'
import {Link} from 'react-router-dom'
import "./MusHeader.css"

export default class MusHome extends Component {



    render() {
        return (
            <div className="musHeader">
                <img src={nameBanner} alt="Kameron Masullo" className="nameBanner"/>
                <nav>
                    <Link to="/music">Home</Link>
                    <Link to="/music/listen">Listen</Link>
                    <Link to="/music/contact">Contact</Link>
                </nav>
            </div>
        );
    };
};