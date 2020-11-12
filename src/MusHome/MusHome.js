import React, {Component} from 'react'
import musBanner from "../img/musBanner.png"
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
                <img src={musBanner} alt="Kameron Masullo Banner" className="musBanner"/>
                <div className="musHomeContent">
                    <div className="newsColumn">
                        <h3 className="newsH3">News</h3>
                        {news.articles.map((article, i) => {
                            return <button id={i} key={`${article.title}${i}`} onClick={this.handleArticle} className={i === this.state.currArticle ? 'selected' : 'black'}>{article.title}</button>
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