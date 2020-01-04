import React, { Component } from 'react'
import SearchForm from '../components/SearchForm'
import SearchResult from '../components/SearchResult'
import './Home.css'

class Home extends Component {
    componentDidMount() {
        this._setHeightToResultSearchContainer()
        window.addEventListener("resize", this._setHeightToResultSearchContainer);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this._setHeightToResultSearchContainer);
    }
    
    _setHeightToResultSearchContainer() {
        const widthBrowser = window.innerWidth
        const heightBrowser = window.innerHeight
        let fixHeightContent = 252
        if(widthBrowser > 769) {
            fixHeightContent = 150
        }
        const vhPercent = parseInt((1 - (fixHeightContent / heightBrowser)) * 100)
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