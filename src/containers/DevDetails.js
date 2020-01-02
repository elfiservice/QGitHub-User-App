import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchSingleDevOnGithub, } from '../actions/devDetailsActions'

class DevDetails extends Component {
    render() {

        let devUserName = this.props.urlData.match.params.username
        return (
            <section className="dev-details-container">
                detalhees: {devUserName} 
            </section>
        )
    }
}

function mapStateToProps ({ devDetailsData }) {
    return {
        devDetailsData
    }
  }
  
export default connect(mapStateToProps, { searchSingleDevOnGithub })(DevDetails)
  