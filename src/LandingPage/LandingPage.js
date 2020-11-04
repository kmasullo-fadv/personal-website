import React, { Component } from 'react';
import Context from '../Context'
import './LandingPage.css'

export default class LandingPage extends Component {
    static contextType = Context;
    static defaultProps = {
        history: {
            push: () => {},
        },
    }

    componentDidMount() {
        this.context.setCurrentPath('landingPage')
    }
    
    musicClick = (e) => {
        e.preventDefault();
        this.context.setCurrentPath(
            'musicPath',
            () => this.props.history.push('/music'))
    }

    webDevClick = (e) => {
        e.preventDefault();
        this.context.setCurrentPath(
            'webDevPath',
            () => this.props.history.push('/dev'))
    }

    render() {
        return(
            <div className="landingPage">
                <div className="pathButtons">
                    <button className="musicPath" onClick={this.musicClick}>Music</button>
                    <button className="webDevPath" onClick={this.webDevClick}>Web Dev</button>
                </div>
            </div>
        )
    }
}