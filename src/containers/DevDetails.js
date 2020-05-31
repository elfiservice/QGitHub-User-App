import React, { Component } from 'react'
import './DevDetails.css'
import { connect } from 'react-redux'
import { searchSingleDevOnGithub, resetDevData, calculeOfDistanceBtUserAndDev, drawDistanceBtUserAndDev } from '../actions/devDetailsActions'
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

    _drawMapClick = (e) => {
        e.preventDefault()
        if(this.props.devDetailsData.distanceBtwUserAndDev) {
            const latLngOfUser = this.props.appData.latLng
            const latLngOfDev = this.props.devDetailsData.positionOfDev
            this.props.drawDistanceBtUserAndDev(latLngOfUser, latLngOfDev)
        }
    }
    
    render() {
        return (
            <section className="dev-details-container">
                {(!this.props.devDetailsData.devData 
                ? <div className="dev-details-loader"><Loader /></div>
                : <InfoCardOfDev 
                    devDetailsData={this.props.devDetailsData} drawMapClick={this._drawMapClick} />)} 
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
  
export default connect(mapStateToProps, 
    { 
        searchSingleDevOnGithub, 
        resetDevData, 
        calculeOfDistanceBtUserAndDev,
        drawDistanceBtUserAndDev })(DevDetails)
  