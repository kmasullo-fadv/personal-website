import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Context from '../Context'
import './DevHeader.css'


export default class DevHeader extends Component {
    static contextType = Context;
    static defaultProps = {
        history: {
            push: () => {},
        },
    }

    // return(
    //     <header>
    //         <Link to="/"><h1>Kameron Masullo</h1></Link>
    //         <nav>
    //             <Link to="/musicportfolio">Portfolio</Link>
    //         </nav>
    //     </header>
    // )


    render() {
        return (
        <header>
            <Link to="/" className="devLink"><h1 className="devH1 hover">Kameron Masullo</h1></Link>
            <nav>
                <Link to="/dev">Home</Link>
                <Link to="/dev/portfolio">Portfolio</Link>
                <Link to="/dev/contact">Contact</Link>
            </nav>
        </header>
        );
    };
};