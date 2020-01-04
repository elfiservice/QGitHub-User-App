import React from 'react'

const About = (props) => {
    return (
        <div className="card info-card-dev__bio">
            <h4>About</h4>
            {(!props.devData.bio 
                ? 'It\'s nothing to say about himself yet, but this Dev have a ' + props.devData.public_repos + ' publics repos, ' + props.devData.followers + ' followers and following ' + props.devData.following + ' devs.' 
                : props.devData.bio + '. And this Dev have a ' + props.devData.public_repos + ' publics repos, ' + props.devData.followers + ' followers and following ' + props.devData.following + ' devs.' )}
        </div>
    )
}

export default About