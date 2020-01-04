import React from 'react'
import './InfoCardOfDev.css'

const InfoCardOfDev = (props) => {
    const { devData, reposSttaredList } = props.devDetailsData
    return (
        <article className="info-card-dev-container">
            <div className="card">
                <header>
                    <div className='dev-avatar' style={{
                        backgroundImage: `url(${devData.avatar_url})`
                    }} />
                
                    <h2>This Dev call <span className="info-card-dev__color-blue">{devData.name}</span></h2>
                    <p>
                        and your username is <i className="info-card-dev__color-blue">{devData.login}</i>
                        <a title="Link to develepor page in GitHub" rel="noopener noreferrer" target="_blank" href={devData.html_url}><i className="fa fa-link" aria-hidden="true"></i>&nbsp;</a>
                    </p>
                </header>
            </div>

            <div className="card info-card-dev__bio">
                <h4>About</h4>
                {(!devData.bio 
                    ? 'It\'s nothing to say about himself yet, but this Dev have a ' + devData.public_repos + ' publics repos, ' + devData.followers + ' followers and following ' + devData.following + ' devs.' 
                    : devData.bio + '. And this Dev have a ' + devData.public_repos + ' publics repos, ' + devData.followers + ' followers and following ' + devData.following + ' devs.' )}
            </div>
            <div className="card info-card-dev__map">
                {(!devData.location 
                    ? "This Dev not sharing your location :("
                    :   <div>
                            <h4>Your location is</h4>
                            <div id="map"></div>
                        </div>
                )}
            </div>
            <div className="card info-card-dev__list-of-sttared-repos">
                
                {(reposSttaredList.length <= 0 
                    ?   "This Dev not have any repo sttared :("
                    :  <div> 
                            <h4>This Dev is following this {reposSttaredList.length} repos</h4>
                            <ul>
                                {reposSttaredList.map(repo => (
                                    <li key={repo.id}>
                                        <i className="fa fa-star" aria-hidden="true"></i> {repo.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                )}
            </div>
        </article>
    )
}

export default InfoCardOfDev