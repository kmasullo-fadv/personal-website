import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import DevHeader from '../DevHeader/DevHeader';
import DevHome from '../DevHome/DevHome.js'
import LandingPage from '../LandingPage/LandingPage.js';
import DevPortfolio from "../DevPortfolio/DevPortfolio.js";
import MusHeader from "../MusHeader/MusHeader"
import MusHome from "../MusHome/MusHome"
import MusListen from "../MusListen/MusListen.js"
import MusicPortfolio from "../MusicPortfolio/MusicPortfolio.js";
//import NotFound from '../NotFound'
import Contact from "../Contact/Contact";
import Context from '../Context'
import './App.css';

export default class App extends Component {
  state = {
    currentPath: null
  }

  setCurrentPath = (path, historyFunction = null) => {
    historyFunction
      ? this.setState(
        {currentPath: path},
        () => historyFunction()
      )
      : this.setState({currentPath: path})
  }

  render() {
    const value = {
      setCurrentPath: this.setCurrentPath,
      currentPath: this.state.currentPath,
    }
    return (
      <Context.Provider value={value}>
        <div className="App">
          <Route component={DevHeader} path="/dev" />
          <Route component={DevHome} exact path="/dev" />
          <Route component={LandingPage} exact path="/" />
          <Route component={DevPortfolio} exact path="/dev/portfolio"/>
          <Route component={MusicPortfolio} exact path="/music/portfolio" />
          <Route component={Contact} exact path="/dev/contact" />
          {/* <Route component={NotFound} path="/:AnythingWrong" /> */}
          <Route component={MusHeader} path="/music" />
          <Route component={MusHome} exact path="/music" />
          <Route component={MusListen} exact path="/music/listen" />
        </div>
      </Context.Provider>
    );
  }
}