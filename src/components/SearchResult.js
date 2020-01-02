import React, { Component } from 'react'
import { connect } from 'react-redux'
import './SearchResult.css'
import { Link } from 'react-router-dom'

// todo: tornar clicavel para ir para pagina de detalhes do usuario dev
class SearchResult extends Component {
    _mountContent() {
        const { listOfDevs } = this.props.searchData
        if(!listOfDevs) {
            return (
                <div className="search-result_msg-to-user">
                    <i className="search-result_txt-muted">Type a name or username that we'll search for you</i>
                </div>
            )
        } else if(listOfDevs === 'searching') {
            return (
                <div className="search-result_msg-to-user">
                    <i className="search-result_txt-muted">Searching...</i>
                </div>
            )
        } else if(listOfDevs.length <= 0) {
            return (
                <div className="search-result_msg-to-user">
                    <b className="search-result_txt-muted">No devs found</b>
                </div>
            )
        } else {
            return (
                <ol className="dev-list">
                {listOfDevs.map((dev) => {
                    return (<li key={dev.id} className='dev-list-item'>
                        <div className='dev-avatar' style={{
                            backgroundImage: `url(${dev.avatar_url})`
                        }} />
                        <div className='dev-details'> 
                            <p>{dev.login}</p>
                        </div>
                        <Link to={'/dev/' + dev.login}>
                            More Details
                        </Link> 
                    </li>)
                })}
            </ol>
            )
        }
    }

    render() {
        return (
            <div className="search-result-content container-scroll">
                <div className="messages content-scroll">
                    {this._mountContent()}
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ searchData }) {
    return {
      searchData
    }
  }
  
export default connect(mapStateToProps)(SearchResult)
