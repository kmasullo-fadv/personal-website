import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Context from '../../Context';


export default class MusHome extends Component {
    static contextType = Context;
    
    render() {
        return (
            <header>
                <Link to="/" className="headerLink"><h1 className="headerH1 hover">Kameron Masullo</h1></Link>
                <nav>
                    <button onClick={this.context.handleShow} id="contactButton">Contact</button>
                    <Link to="/dev">Dev</Link>
                </nav>
            </header>
        );
    };
};