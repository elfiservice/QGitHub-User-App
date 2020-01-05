import React, { Component } from 'react'
import './DevDetails.css'
import { connect } from 'react-redux'
import { searchSingleDevOnGithub, setSingleDevData, resetDevData, calculeOfDistanceBtUserAndDev } from '../actions/devDetailsActions'
import Loader from '../components/LoaderGif'
import InfoCardOfDev from '../components/InfoCardOfDev'

class DevDetails extends Component {
    componentDidMount() {
        let devUserName = this.props.urlData.match.params.username
        this.props.searchSingleDevOnGithub(devUserName)
    }
    componentWillUnmount() {
        this.props.resetDevData()
    }

    componentDidUpdate(prevProps){
        if((this.props.appData.latLng && this.props.devDetailsData.positionOfDev) 
        !== (prevProps.appData.latLng && prevProps.devDetailsData.positionOfDev))
            if(this.props.appData.latLng && this.props.devDetailsData.positionOfDev) {
                const latLngOfUser = this.props.appData.latLng
                const latLngOfDev = this.props.devDetailsData.positionOfDev
                this.props.calculeOfDistanceBtUserAndDev(latLngOfUser, latLngOfDev)
            }
    }
    
    render() {
        return (
            <section className="dev-details-container">
                {(!this.props.devDetailsData.devData 
                ? <div className="dev-details-loader"><Loader /></div>
                : <InfoCardOfDev 
                    devDetailsData={this.props.devDetailsData} />)} 
            </section>
        )
    }
}

function mapStateToProps ({ devDetailsData, appData }) {
    return {
        devDetailsData,
        appData
    }
}
  
export default connect(mapStateToProps, { searchSingleDevOnGithub, setSingleDevData, resetDevData, calculeOfDistanceBtUserAndDev })(DevDetails)
  