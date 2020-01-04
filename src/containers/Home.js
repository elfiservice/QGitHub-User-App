import React, { Component } from 'react'
import SearchForm from '../components/SearchForm'
import SearchResult from '../components/SearchResult'

class Home extends Component {
    componentDidMount() {
        this._setHeightToResultSearchContainer()
        window.addEventListener("resize", () => {
            this._setHeightToResultSearchContainer()
        });
    }
    
    _setHeightToResultSearchContainer() {
        const heightBrowser = window.innerHeight
        const vhPercent = parseInt((1 - (252 / heightBrowser)) * 100)
        document.getElementById("search-result-scroll").style.height = vhPercent + "vh"
    }
    render() {
        return (
            <div className="home-container">
                <SearchForm />
                <SearchResult />
            </div>
        )
    }
}

export default Home