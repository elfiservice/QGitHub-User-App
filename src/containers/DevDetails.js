import React, { Component } from 'react'

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

export default DevDetails