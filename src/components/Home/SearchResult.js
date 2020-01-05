import React, { Component } from 'react'
import { connect } from 'react-redux'
import './SearchResult.css'
import { Link } from 'react-router-dom'
import Loader from '../LoaderGif'
import MsgToUser from './MsgToUser'

class SearchResult extends Component {
    _mountContent() {
        const { listOfDevs } = this.props.searchData
        if(!listOfDevs) {
            return (
                <MsgToUser>
                    <i className="search-result_txt-muted">Type a name or username that we'll search a Dev for you</i>
                </MsgToUser>
            )
        } else if(listOfDevs === 'searching') {
            return (
                <MsgToUser>
                    <Loader />
                </MsgToUser>
            )
        } else if(listOfDevs === 'error') {
            return (
                <MsgToUser>
                    <b className="search-result_txt-muted">An error occurred while trying to access Github. Please try again later.</b>
                </MsgToUser>
            )
        } else if(listOfDevs.length <= 0) {
            return (
                <MsgToUser>
                    <b className="search-result_txt-muted">No devs found, try another name or username ;)</b>
                </MsgToUser>
            )
        } else {
            return (
                <ol className="dev-list">
                {listOfDevs.map((dev) => {
                    return (<li key={dev.id} className='dev-list-item'>
                        <div className='dev-avatar' style={{
                            backgroundImage: `url(${dev.avatar_url})`
                        }} />
                        <div className="dev-name-more-details">
                            <div className='dev-details'> 
                                <p>{dev.login}</p>
                            </div>
                            <div className='dev-btn-more-details'>
                                <Link className="btn btn-primary" to={'/dev/' + dev.login}>More Details</Link> 
                            </div>
                        </div>
                    </li>)
                })}
            </ol>
            )
        }
    }

    render() {
        return (
            <div id="search-result-scroll" className="search-result-content container-scroll">
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
