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
import Store from "../Store/Store.js";
import MusContact from "../MusContact/MusContact.js"
//import NotFound from '../NotFound'
import DevContact from "../Contact/Contact";
import Context from '../Context'
import './App.css';

export default class App extends Component {
  state = {
    currentPath: null,
    contact: false
  }

  setCurrentPath = (path, historyFunction = null) => {
    historyFunction
      ? this.setState(
        {currentPath: path},
        () => historyFunction()
      )
      : this.setState({currentPath: path})
  }

  setContact = () => {
    this.setState({contact: !this.state.contact});
  }

  contactX = (e) => {
    if (e && e.target.id === 'devContact') {
      this.setContact()
    }
  }

  render() {
    window.onclick = this.contactX;
    const value = {
      setCurrentPath: this.setCurrentPath,
      currentPath: this.state.currentPath,
      setContact: this.setContact
    }
    return (
      <Context.Provider value={value}>
        <div className="App">
          <Route component={DevHeader} path="/dev" />
          {this.state.contact && <Route component={DevContact} path="/" />}
          <Route component={DevHome} exact path="/dev" />
          <Route component={LandingPage} exact path="/" />
          <Route component={DevPortfolio} exact path="/dev/portfolio"/>
          <Route component={DevPortfolio} exact path="/dev"/>
          <Route component={MusicPortfolio} exact path="/music/portfolio" />
          <Route component={DevContact} exact path="/dev/contact" />
          {/* <Route component={NotFound} path="/:AnythingWrong" /> */}
          <Route component={MusHeader} path="/music" />
          <Route component={MusHome} exact path="/music" />
          <Route component={MusListen} exact path="/music/listen" />
          <Route component={DevContact} exact path="/music/contact" />
          <Route component={Store} exact path="/music/store" />
          <Route component={MusContact} exact path="/music/muscontact" />
        </div>
      </Context.Provider>
    );
  }
}