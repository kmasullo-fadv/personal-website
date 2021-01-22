import React, {Component} from 'react'
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom'

export default class MusHome extends Component {
    render() {
        return (
            <header>
                <Link to="/" className="headerLink"><h1 className="headerH1 hover">Kameron Masullo</h1></Link>
                <nav>
                    <Link to="/music">Home</Link>
                    <Link to="/music/listen">Listen</Link>
                    <Link to="/music/contact">Contact</Link>
                    <Link to="/dev">Dev <FontAwesomeIcon icon={ faExternalLinkAlt } className="small"/></Link>
                </nav>
            </header>
        );
    };
};