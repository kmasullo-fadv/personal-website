import React from 'react'
import {Link} from 'react-router-dom'

const DEV = "dev";
const MUSIC = "music"

const Header = (props) => {
        return (
            <header>
                <Link to="/" className="headerLink"><h1 className="headerH1 hover">Kameron Masullo</h1></Link>
                <nav>
                    <button onClick={props.handleShow} id="contactButton">Contact</button>
                    {
                        props.env === DEV ? <Link to="/music">Music</Link>
                    :   props.env === MUSIC ? <Link to="/dev">Dev</Link>
                    :   null
                    }
                </nav>
            </header>
        )
}

export default Header;