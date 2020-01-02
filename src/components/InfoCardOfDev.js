import React from 'react'
import './InfoCardOfDev.css'

const InfoCardOfDev = (props) => {
    const { devData } = props
    return (
        <article className="info-card-dev-container">
            <div className="info-card-dev">
                <div className='dev-avatar' style={{
                    backgroundImage: `url(${devData.avatar_url})`
                }} />
                <header>
                    <h2>This Dev call <span className="info-card-dev__color-blue">{devData.name}</span></h2>
                    <p>
                        and your username is <i className="info-card-dev__color-blue">{devData.login}</i>
                        <a title="Link to develepor page in GitHub" target="_blank" href={devData.html_url}><i className="fa fa-link" aria-hidden="true"></i></a>
                    </p>
                </header>
            </div>

            <div className="info-card-dev info-card-dev__bio">
                {(!devData.bio 
                    ? 'He have nothing to say about himself yet, but this Dev have a ' + devData.public_repos + ' publics repos, ' + devData.followers + ' followers and following ' + devData.following + ' devs.' 
                    : devData.bio + '. And this Dev have a ' + devData.public_repos + ' publics repos, ' + devData.followers + ' followers and following ' + devData.following + ' devs.' )}
            </div>
            <div className="info-card-dev info-card-dev__map">
                {(!devData.location 
                    ? "This Dev not sharing your location :("
                    : <div id="map"></div>)}
            </div>
        </article>
    )
}

export default InfoCardOfDev