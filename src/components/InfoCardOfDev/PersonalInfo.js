import React from 'react'
import { Link } from 'react-router-dom'

const PersonalInfo = (props) => {
    return (
        <div className="card">
            <Link className="info-card-dev-back-btn" to={'/'}><i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i></Link> 
            <header>
                <div className='dev-avatar' style={{
                    backgroundImage: `url(${props.devData.avatar_url})`
                }} />
            
                <h2>This Dev call <span className="info-card-dev__color-blue">{props.devData.name}</span></h2>
                <p>
                    and your username is <i className="info-card-dev__color-blue">{props.devData.login}</i>
                    <a title="Link to develepor page in GitHub" rel="noopener noreferrer" target="_blank" href={props.devData.html_url}><i className="fa fa-link" aria-hidden="true"></i>&nbsp;</a>
                </p>
            </header>
    </div>
    )
}

export default PersonalInfo