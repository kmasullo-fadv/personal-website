import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import DevHome from '../dev/DevHome/DevHome';
import MusicHome from "../music/MusicHome/MusicHome";
import Contact from '../common/Contact';
import Context from '../Context';
import './App.css';

export default class App extends Component {
  state = {
    currentPath: null,
    show: false
  }

  handleShow = () => this.setState({ show: true });
  handleClose = () => this.setState({ show: false });

  setCurrentPath = (path, historyFunction = null) => {
    historyFunction
      ? this.setState({ currentPath: path },
          () => historyFunction()
        )
      : this.setState({ currentPath: path })
  }

  render() {
    const value = {
      setCurrentPath: this.setCurrentPath,
      currentPath: this.state.currentPath,
      show: this.state.show,
      handleShow: this.handleShow,
      handleClose: this.handleClose,
    }
    return (
      <Context.Provider value={value}>
        <div className="App">
          <Route component={LandingPage} exact path="/" />
          <Route component={DevHome} exact path="/dev" />
          <Route component={MusicHome} exact path="/music" />
          <Contact show={this.state.show} handleClose={this.handleClose}/>
        </div>
      </Context.Provider>
    );
  }
}