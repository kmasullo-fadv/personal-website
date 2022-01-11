import React, {Component} from 'react'
import {news} from '../NEWSSTORE'
import "./MusHome.css"


export default class MusHome extends Component {
    state = {
        currArticle: 0
    }

    handleArticle = (e) => {
        e.preventDefault();
        this.setState({currArticle: parseInt(e.target.id)})

    }

    render() {
        return (
            <div className="musHome">
                <div className="welcomeBanner">
                    <video className="portfolioVid" autoPlay muted loop>
                        <source src="https://www.dropbox.com/s/046qc99tx0eutjf/mPortfolioVid.mp4?raw=1" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="headerText">
                        <h2 className="px65">Welcome</h2>
                        <h2 className="px50">I am a musician, songwriter and session guitarist</h2>
                    </div>
                </div>
                <div className="musHomeContent center">
                    <div className="newsColumn">
                        <h3 className="newsH3">News</h3>
                        {news.articles.map((article, i) => {
                            return <button id={i} key={`${article.title}${i}`} onClick={this.handleArticle} className={`${i === this.state.currArticle ? 'selected' : 'black'} newsButton`}>{article.title}</button>
                        })}
                    </div>
                    <div className="articleBox">
                        {news.articles[this.state.currArticle].content}
                    </div>
                </div>
            </div>
        );
    };
};