import React, { Component } from 'react'
import MusicPlayer from '../musicplayer/MusicPlayer'
import { news } from '../NEWSSTORE'
import WelcomeBanner from '../../common/WelcomeBanner'
import "./MusicHome.css"
import Header from '../../common/Header'
import Context from '../../Context'

const MUSIC = "music";

export default class MusicHome extends Component {
    state = {
        currArticle: 0
    }

    static contextType = Context;

    handleArticle = (e) => {
        e.preventDefault();
        this.setState({ currArticle: parseInt(e.target.id) })
    }

    render() {
        return (<>
            <Header env={ MUSIC } handleShow={ this.context.handleShow }/>
            <div className="musHome">
                <WelcomeBanner
                    src="https://www.dropbox.com/s/046qc99tx0eutjf/mPortfolioVid.mp4?raw=1"
                    message="I am a musician, songwriter, and session guitarist" />
                <div className="musHomeContent center border-top mb-5">
                    <div className='row'>
                        <div className="newsColumn">
                            <h3 className="newsH3">News</h3>
                            {
                                news.articles.map((article, i) => 
                                    <button id={i} key={ `${article.title}${i}` } onClick={ this.handleArticle } className={`${i === this.state.currArticle ? 'selected' : 'black'} newsButton`} >
                                        { article.title }
                                    </button>
                                )
                            }
                        </div>
                        <div className="articleBox">
                            {
                                news.articles[this.state.currArticle].content
                            }
                        </div>
                    </div>
                    <div className='card mt-5 bg-transparent'>
                        <div className='card-header border-top border-bottom p-4'>
                            <h2 className='card-title'>Listen</h2>
                        </div>
                        <div className='card-body'>
                            <MusicPlayer />
                        </div>
                    </div>
                </div>
                
            </div>
            </>
        );
    };
};