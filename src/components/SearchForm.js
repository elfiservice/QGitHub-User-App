import React, { Component } from 'react'
import './SearchForm.css'
import InputText from './inputs/TypeText'
import { connect } from 'react-redux'
import { handleInputChange, searchDevOnGithub } from '../actions/searchActions'

class SearchForm extends Component {
    _searchBtnClicked(e){
        e.preventDefault()
        this.props.searchDevOnGithub(this.props.searchData.searchInput)
    }
  
    render() {
        return (
            <div className="search-form-container">
                <form className="search-form" onSubmit={(e) => {this._searchBtnClicked(e)}}>
                    <InputText
                        className="form-control"
                        name="search" 
                        placeholder="Search by name or username"
                        type="search"
                        value={this.props.searchData.searchInput}
                        onChange={(e) => this.props.handleInputChange(e.target.value)}
                        required
                        />

                    <button 
                        type="submit" 
                        className="submit btn btn-lg btn-success search-btn"
                        ><i className="fa fa-search" aria-hidden="true"></i> Search on GitHub
                        </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps ({ searchData }) {
    return {
      searchData
    }
  }
  
export default connect(mapStateToProps, { handleInputChange, searchDevOnGithub })(SearchForm)
