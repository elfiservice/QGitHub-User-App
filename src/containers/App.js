import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentLocationOfUser, } from '../actions/appActions'
import { loadGoogleApi } from '../utils/googleApi'
import { BrowserRouter } from "react-router-dom";
import Router from '../router'

class App extends Component {
  componentDidMount() {
    loadGoogleApi()
      .then(result => {
        this.props.getCurrentLocationOfUser()
      })
  }

  render() {
      const { appData } = this.props
      return (
        <div className="App">
          <header className="App-header">
            <h1>Quick GitHub Users</h1>
            <p>
                Your Currenty Location is <code>{appData.currentLocationOfUser !== null 
                  ?  appData.currentLocationOfUser : 'getting current position...'}</code> 
            </p>
          </header>
          <BrowserRouter>
            <Router />
          </BrowserRouter>

          <div id="mapHidden"></div>
      </div>
      )
  }
}

function mapStateToProps ({ appData }) {
  return {
    appData
  }
}

export default connect(mapStateToProps, { getCurrentLocationOfUser })(App)
