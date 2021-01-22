import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Context from '../Context';
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class DevHeader extends Component {
    static contextType = Context;
    static defaultProps = {
        history: {
            push: () => {},
        },
    }

    render() {
        return (
        <header>
            <Link to="/" className="headerLink"><h1 className="headerH1 hover">Kameron Masullo</h1></Link>
            <nav>
                <Link to="/dev">Home</Link>
                <Link to="/dev/portfolio">Portfolio</Link>
                <Link to="/dev/contact">Contact</Link>
                <Link to="/music">Music <FontAwesomeIcon icon={ faExternalLinkAlt } className="small"/></Link>
            </nav>
        </header>
        );
    };
};