import React, { Component } from 'react'
import { connect } from 'react-redux'
import './SearchResult.css'

class SearchResult extends Component {
    _mountContent() {
        const { listOfDevs } = this.props.searchData
        if(!listOfDevs) {
            return (
                <div>
                    <i>Type a name or username that we'll search for you</i>
                </div>
            )
        } else if(listOfDevs === 'searching') {
            return (
                <div>
                    <i>Searching...</i>
                </div>
            )
        } else if(listOfDevs.length <= 0) {
            return (
                <div>
                    <b>No devs found</b>
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
                    </li>)
                })}
            </ol>
            )
        }
    }

    render() {
        return (
            <div>
                {this._mountContent()}
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
