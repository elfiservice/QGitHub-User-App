import SearchForm from '../components/SearchForm'
import SearchResult from '../components/SearchResult'
import React from 'react'
import './Home.css'

const Home = (props) => {
    return (
        <div className="home-container">
            <SearchForm />
            <SearchResult />
        </div>
    )
}

export default Home