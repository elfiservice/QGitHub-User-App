import React, { Component } from 'react'
import './DevDetails.css'
import { connect } from 'react-redux'
import { searchSingleDevOnGithub, setSingleDevData, } from '../actions/devDetailsActions'
import Loader from '../components/LoaderGif'
import InfoCardOfDev from '../components/InfoCardOfDev'

class DevDetails extends Component {
    componentDidMount() {
        let devUserName = this.props.urlData.match.params.username
        this.props.searchSingleDevOnGithub(devUserName)
    }
    componentWillUnmount() {
        this.props.setSingleDevData(null)
    }

    render() {
        return (
            <section className="dev-details-container">
                {(!this.props.devDetailsData.devData 
                ? <div className="dev-details-loader"><Loader /></div>
                : <InfoCardOfDev 
                    devDetailsData={this.props.devDetailsData } />)} 
            </section>
        )
    }
}

function mapStateToProps ({ devDetailsData }) {
    return {
        devDetailsData
    }
}
  
export default connect(mapStateToProps, { searchSingleDevOnGithub, setSingleDevData, })(DevDetails)
  