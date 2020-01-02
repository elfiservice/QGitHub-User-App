import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchSingleDevOnGithub, setSingleDevData } from '../actions/devDetailsActions'
import Loader from '../components/LoaderGif'

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
                ? <Loader />
                : this.props.devDetailsData.devData.name)} 
            </section>
        )
    }
}

function mapStateToProps ({ devDetailsData }) {
    return {
        devDetailsData
    }
}
  
export default connect(mapStateToProps, { searchSingleDevOnGithub, setSingleDevData })(DevDetails)
  