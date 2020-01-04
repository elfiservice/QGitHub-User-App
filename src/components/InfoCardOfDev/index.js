import React from 'react'
import './InfoCardOfDev.css'
import PersonalInfo from './PersonalInfo'
import MapLocation from './MapLocation'
import About from './About'
import ListOfSttaredRepos from './ListOfSttaredRepos'

const InfoCardOfDev = (props) => {
    const { devData, reposSttaredList } = props.devDetailsData
    return (
        <article className="info-card-dev-container">
            <div className="info-card-dev-flex">
                <div className="info-card-dev-flex50">
                    <PersonalInfo devData={devData} />
                </div>
                <div className="info-card-dev-flex50">
                    <MapLocation devData={devData} />
                </div>
            </div>
            <div className="info-card-dev-flex">
                <div className="info-card-dev-flex50">
                    <About devData={devData} />
                </div>
                <div className="info-card-dev-flex50">
                    <ListOfSttaredRepos reposSttaredList={reposSttaredList} />
                </div>
            </div>
        </article>
    )
}

export default InfoCardOfDev