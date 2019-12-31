import React, { Component } from 'react'
import InputText from './inputs/TypeText'

class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
        }
        this._handleInputChange = this._handleInputChange.bind(this)
    }

    _searchBtnClicked(e){

    }
  
    _handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
    
    render() {
        return (
            <div className="center-block">
                <form className="search-place-form" onSubmit={(e) => {this._searchBtnClicked(e)}}>
                    <InputText
                        name="search" 
                        placeholder="Search by name or username"
                        type="search"
                        value={this.state.search}
                        onChange={this._handleInputChange}
                        />

                    <button 
                        type="submit" 
                        className="submit btn btn-cta search-btn"
                        ><i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                </form>
            </div>
        )
    }
}

export default SearchForm