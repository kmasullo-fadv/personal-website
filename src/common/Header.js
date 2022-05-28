import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify, faBandcamp, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom'
import tidal from './img/tidal.svg'

const DEV   = "dev";
const MUSIC = "music"

const MUSIC_LISTEN_ITEMS = [
    { label: "Spotify",  isFontAwesome: true,  icon: faSpotify,   href: "https://open.spotify.com/artist/5G946pHaGg1bWL8UjiZPdB?si=D0iBu9EsTSO5Vr8t-2MYfQ" },
    { label: "Bandcamp", isFontAwesome: true,  icon: faBandcamp,  href: "https://kameronmasullo.bandcamp.com/" },
    { label: "Tidal",    isFontAwesome: false, icon: <img src={tidal} alt='tidal-logo' style={{ color: 'white', width: '14px' }} />,  href: "https://tidal.com/browse/artist/21600507" }
]

const DEV_SOCIAL_ITEMS = [
    { label: "LinkedIn", isFontAwesome: true, icon: faLinkedin, href: "https://linkedin.com/in/kameron-masullo" },
    { label: "GitHub",   isFontAwesome: true, icon: faGithub,   href: "https://github.com/kmasullo" }
]

const Header = (props) => {
        return (
            <Navbar variant="dark" bg="rgb(19, 19, 19)" expand="lg">
                <Container fluid>
                    <Navbar.Brand>
                        <Link to="/" className='hoverOrange' style={{ fontFamily: "buda", textDecoration: "none", letterSpacing: "4px", fontSize: "20px" }}>
                            <h1>Kameron Masullo</h1>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <NavDropdown title={props.env === MUSIC ? "Listen" : "Social"} menuVariant="dark" className='hoverOrange'>
                                { ( props.env === MUSIC ? MUSIC_LISTEN_ITEMS : DEV_SOCIAL_ITEMS ).map(item => 
                                    <NavDropdown.Item href={ item.href } target="_blank" rel="noopener noreferrer">
                                        { item.isFontAwesome
                                            ? <FontAwesomeIcon icon={ item.icon } size="sm" />
                                            : item.icon }
                                        {" " + item.label }
                                    </NavDropdown.Item>
                                )}
                            </NavDropdown>
                            <Nav.Link className='hoverOrange' onClick={props.handleShow}>Contact</Nav.Link>
                            { props.env === DEV   && <Nav.Link href="/music" className='hoverOrange'>Music</Nav.Link> }
                            { props.env === MUSIC && <Nav.Link href="/dev"   className='hoverOrange'>Dev</Nav.Link> }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
}

export default Header;