import React from 'react'

const MapLocation = (props) => {
    return (
        <div className="card info-card-dev__map">
            {(!props.devData.location 
                ? "This Dev not sharing your location :("
                :   <div>
                        <h4>Dev location</h4>
                        <div id="map"></div>
                    </div>
            )}
        </div>
    )
}

export default MapLocation