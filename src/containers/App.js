import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentLocationOfUser, mountMapToDeveloperSelected } from '../actions/appActions'
import { loadGoogleApi } from '../utils/googleApi'
import SearchForm from '../components/SearchForm'
import SearchResult from '../components/SearchResult'

class App extends Component {
  componentDidMount() {
    loadGoogleApi()
      .then(result => {
        this.props.getCurrentLocationOfUser()
      })
  }

  // componentDidUpdate(newProps) {
  //   console.log(this.props.appData.currentLocationOfUser);
  //   console.log(newProps.appData.currentLocationOfUser);
  //   if(this.props.appData.currentLocationOfUser !== newProps.appData.currentLocationOfUser) {
  //     this.props.mountMapToDeveloperSelected('Fortaleza - CE')
  //   }
    
  // }

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
          <SearchForm />
          <SearchResult />

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

export default connect(mapStateToProps, { getCurrentLocationOfUser, mountMapToDeveloperSelected })(App)
