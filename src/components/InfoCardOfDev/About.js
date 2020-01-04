import React from 'react'

const About = (props) => {
    return (
        <div className="card info-card-dev__bio">
            <h4>About</h4>
            {(!props.devData.bio 
                ?   <div>
                        <p>It's nothing to say about himself yet.</p> 
                        <p>but this Dev have a {props.devData.public_repos} publics repos, {props.devData.followers} followers and following {props.devData.following} devs.</p> 
                    </div>
                :   <div>
                        <p>{props.devData.bio}</p> 
                        <p>And this Dev have a {props.devData.public_repos} publics repos, {props.devData.followers} followers and following {props.devData.following} devs.</p> 
                    </div>
                
                 )}
        </div>
    )
}

export default About