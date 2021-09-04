import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Context from '../Context';


export default class DevHeader extends Component {
    static contextType = Context;

    render() {
        return (
        <header>
            <Link to="/" className="headerLink navbar-brand"><h1 className="headerH1 hover">Kameron Masullo</h1></Link>
            <nav>
                <Link to="/dev">Home</Link>
                <Link to="/dev/portfolio">Portfolio</Link>
                {/* <Link to="/dev/contact">Contact</Link> */}
                <button onClick={this.context.setContact} id="contactButton">Contact</button>
                <Link to="/music">Music</Link>
            </nav>
        </header>
        );
    };
};